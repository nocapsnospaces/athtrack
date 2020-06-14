from flask_login import UserMixin
from werkzeug.security import generate_password_hash, check_password_hash

from athtrack import db, login

from sqlalchemy.ext.declarative import declarative_base

Base = declarative_base()

class InfoMixin:
    _info_fields = []  # Override this to set the default fields
    def info(self, fields=None):
        if fields is None:
            fields = self._info_fields
        i = {}
        for a in fields:
            try:
                v = getattr(self, a)
                i[a] = v
            except AttributeError:
                continue
        return i

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


class Coach(User):
    # have to specify, as we need a reference to this table for the M2M relationship between coaches and teams.
    __tablename__ = 'coach'
    _info_fields = User._info_fields + ['teams']
    
    id = db.Column(db.Integer, db.ForeignKey('user.id'), primary_key=True)
    teams = db.relationship("Team", secondary=team_association_table, back_populates='coaches')

    def info(self, fields=None):
        if fields is None:
            fields = self._info_fields
        s = []
        if 'id' in fields:
            s.append('id')
        if 'name' in fields:
            s.append('name')
        if 'email' in fields:
            s.append('email')
        i = super().info(fields=s)
        if 'teams' in fields:
            i['teams'] = [t.info(fields=['id']) for t in self.teams]
        return i


class Athlete(User):
    __tablename__ = 'athlete'
    _info_fields = User._info_fields + ['team_id']
    
    id = db.Column(db.Integer, db.ForeignKey('user.id'), primary_key=True)
    team_id = db.Column(db.Integer, db.ForeignKey('team.id'))


class Team(db.Model, InfoMixin):
    __tablename__ = 'team'
    _info_fields = ['id', 'coaches', 'athletes', 'name']
    
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.Text)
    coaches = db.relationship("Coach", secondary=team_association_table, back_populates='teams')
    athletes = db.relationship('Athlete', backref='team')
    
    def info(self, fields=None):
        if fields is None:
            fields = self._info_fields
        s = []
        if 'id' in fields:
            s.append('id')
        if 'name' in fields:
            s.append('name')
        i = super().info(fields=s)
        if 'coaches' in fields:
            i['coaches'] = [c.info(fields=['id']) for c in self.coaches]
        if 'athletes' in fields:
            i['athletes'] = [c.info(fields=['id']) for c in self.athletes]
        return i


class Survey(db.Model):
    __tablename__ = 'survey'
    _info_fields = ['id', 'question', 'options']
    
    id = db.Column(db.Integer, primary_key=True)
    question = db.Column(db.Text, nullable=False)
    # can get all survey responses by survey.options.answers
    options = db.relationship('SurveyOptions', backref='survey')

    def answers(self):
        return self.options.answers


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