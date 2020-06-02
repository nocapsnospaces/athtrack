from flask_login import UserMixin
from werkzeug.security import generate_password_hash, check_password_hash

from athtrack import db, login

class User(UserMixin, db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(64), index=True, unique=True)
    email = db.Column(db.String(128), index=True, unique=True)
    password_hash = db.Column(db.String(256))

    def set_password(self, password):
        self.password_hash = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password_hash, password)

    def __repr__(self):
        return '<User {}>'.format(self.username)


@login.user_loader
def load_user(id):
    return User.query.get(int(id))


team_association_table = Table('association', Base.metadata,
    db.Column('coach_id', db.Integer, ForeignKey('coach.id')),
    db.Column('team_id', db.Integer, ForeignKey('team.id')),
)


class HeadCoach(User):
    id = db.Column(db.Integer, primary_key=True)


class Coach(User):
    # have to specify, as we need a reference to this table for the M2M relationship between coaches and teams.
    __tablename__ = 'coach'
    id = db.Column(db.Integer, primary_key=True)
    teams = relationship("Team", secondary_table=team_association_table, back_populates='coaches')


class Athlete(User):
    __tablename__ = 'athlete'
    id = db.Column(db.Integer, primary_key=True)
    team = db.Column(db.Integer, db.ForeignKey('team.id'))


class Team(db.Model):
    __tablename__ = 'team'
    id = db.Column(db.Integer, primary_key=True)
    coaches = relationship("Coach", secondary_table=team_association_table, back_populates='teams')
    athletes = relationship('Athlete', backref='team')


class Survey(db.Model):
    __tablename__ = 'survey'
    id = db.Column(db.Integer, primary_key=True)
    question = db.Column(db.Text, nullable=False)
    # can get all survey responses by survey.options.answers
    options = relationship('SurveyOptions', backref='survey')

    def answers(self):
        return survey.options.answers

class SurveyOptions(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    survey = db.Column(db.Integer, db.ForeignKey('survey.id'), nullable=False)
    option = db.Column(db.Text, nullable=False)
    score = db.Column(db.Integer, nullable=False)
    # lazy='joined' makes sure that when an option is queried, all its
    # matching answers come back on the same query
    answers = relationship('SurveyAnswers', backref='choice', lazy='joined')


class SurveyAnswers(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    choice = db.Column(db.Integer, db.ForeignKey('survey_options.id'), nullable=False)
    student = db.Column(db.Integer, db.ForeignKey('athlete.id'), nullable=False)