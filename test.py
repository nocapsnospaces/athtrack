from athtrack import db
from athtrack.models import User, Survey, SurveyAnswers, SurveyOptions, Team, Athlete
from athtrack.services.JsonDataTemplates import teamInfo

t = Team(id=12, name="Basketball")
db.session.add(t)

x = Team(id=13, name="Football")
db.session.add(x)

#
# u = Athlete(id=50,email="jamila@jamil.com", name="jamila Jamil", team_id=12)
# u.set_password("goodplace")
# db.session.add(u)

# t = Athlete(id=51,email="interpol@hello.com", name="chris Cuomo", team_id=12)
# t.set_password("evil")
# db.session.add(t)
#
# v = Athlete(id=52,email="citygirl.com", name="megan theStallion", team_id=12)
# v.set_password("hotgirlsummer")
# db.session.add(v)
#
# w = Athlete(id=53,email="kings@leon.com", name="Andrew Feinstein", team_id=12)
# w.set_password("wait")
# db.session.add(w)
#
# f = Athlete(id=59,email="y@norm.com", name="Norman Bates", team_id=13)
# f.set_password("motel")
# db.session.add(f)
#
# g = User(id=55,email="Sue@coach.com", name="sue sylvester")
# g.set_password("glee")
# db.session.add(g)
#
db.session.commit()

# u = User(email="interpol@gmail.com")
# u.set_password("evil")
# db.session.add(u)
# db.session.commit()
# try:
#     num_rows_deleted = db.session.query(User).delete()
#     db.session.commit()
# except:
#     db.session.rollback()

teams = Team.query.all()
users = User.query.all()
athletes = Athlete.query.all()

print('teams')
for u in teams:
    print(u.id, u.name)

print(teamInfo(teams))


print('users')
for c in users:
    print(c.id, c.name, c.email)


print('athletes')
for c in athletes:
    print(c.id,c.team_id)

# print("JAMILA:",User.query.filter_by(email="jamila@jamil.com").first())