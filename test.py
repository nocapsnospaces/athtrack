from athtrack import db
from athtrack.models import User, Survey, SurveyAnswers, SurveyOptions, Team, Athlete
r = Team(id=23)
u = Athlete(email="seehsd", password_hash="ssdsds")
t = Athlete(email="dsdfdssfcs", password_hash="gtshyjtr")
db.session.add(r)
db.session.add(u)
db.session.add(t)
db.session.commit()
teams = Team.query.all()
users = User.query.all()
athletes = Athlete.query.all()

print('teams')
for u in teams:
    print(u.id)
    
print('athletes')
for c in athletes:
    print(c.id,c.team_id)