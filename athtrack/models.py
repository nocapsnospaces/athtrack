from flask_login import UserMixin
from werkzeug.security import generate_password_hash, check_password_hash
from sqlalchemy.ext.declarative import declarative_base

from athtrack import db, login
from athtrack.mixins import InfoMixin

Base = declarative_base()

class User(UserMixin, db.Model, InfoMixin):
    _info_fields = ['id', 'email', 'name']

    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(128), index=True, unique=True)
    name = db.Column(db.Text)
    password_hash = db.Column(db.String(256))

    def set_password(self, password):
        self.password_hash = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password_hash, password)

    def __repr__(self):
        return '<User {}>'.format(self.email)


@login.user_loader
def load_user(id):
    return User.query.get(int(id))


# explicit M2M relationship bridge table
team_association_table = db.Table('team_association_table',
    db.Column('coach_id', db.Integer, db.ForeignKey('coach.id')),
    db.Column('team_id', db.Integer, db.ForeignKey('team.id')),
)

# bridges for days
survey_assignment_table = db.Table('survey_assignment_table',
    db.Column('athlete_id', db.Integer, db.ForeignKey('athlete.id')),
    db.Column('survey_id', db.Integer, db.ForeignKey('survey.id')),
    db.Column('taken', db.Boolean, nullable=False, default=False)
)


class Coach(User):
    # have to specify, as we need a reference to this table for the M2M relationship between coaches and teams.
    __tablename__ = 'coach'
    _simple_fields = User._info_fields
    _complex_fields = ['teams']
    
    id = db.Column(db.Integer, db.ForeignKey('user.id'), primary_key=True)
    teams = db.relationship("Team", secondary=team_association_table, back_populates='coaches')

    def info(self, fields=None):
        i = self._info_complex(fields=fields)
        i.update({"type": "coach"})
        return i


class Athlete(User):
    __tablename__ = 'athlete'
    _simple_fields = User._info_fields + ['team_id']
    _complex_fields = ['surveys']
    
    id = db.Column(db.Integer, db.ForeignKey('user.id'), primary_key=True)
    team_id = db.Column(db.Integer, db.ForeignKey('team.id'))
    surveys = db.relationship("Survey", secondary=survey_assignment_table, back_populates='assignees')
    
    def info(self, fields=None):
        i = self._info_complex(fields=fields)
        i.update({"type": "athlete"})
        return i


class Team(db.Model, InfoMixin):
    __tablename__ = 'team'
    _simple_fields = ['id', 'name']
    _complex_fields = ['coaches', 'athletes']
    
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.Text)
    coaches = db.relationship("Coach", secondary=team_association_table, back_populates='teams')
    athletes = db.relationship('Athlete', backref='team')
    
    def info(self, fields=None):
        return self._info_complex(fields=fields)


class Survey(db.Model, InfoMixin):
    __tablename__ = 'survey'
    _simple_fields = ['id', 'question']
    _complex_fields = ['options', 'assignees']
    
    id = db.Column(db.Integer, primary_key=True)
    question = db.Column(db.Text, nullable=False)
    # can get all survey responses by survey.options.answers
    options = db.relationship('SurveyOptions', backref='survey')
    assignees = db.relationship("Athlete", secondary=survey_assignment_table, back_populates='surveys')

    @property
    def answers(self):
        return self.options.answers
    
    def info(self, fields=None):
       return self._info_complex(fields=fields)


class SurveyOptions(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    survey_id = db.Column(db.Integer, db.ForeignKey('survey.id'), nullable=False)
    option = db.Column(db.Text, nullable=False)
    score = db.Column(db.Integer, nullable=False)
    # lazy='joined' makes sure that when an option is queried, all its
    # matching answers come back on the same query
    answers = db.relationship('SurveyAnswers', backref='choice', lazy='joined')


class SurveyAnswers(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    choice_id = db.Column(db.Integer, db.ForeignKey('survey_options.id'), nullable=False)
    student = db.Column(db.Integer, db.ForeignKey('athlete.id'), nullable=False)