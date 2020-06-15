import athtrack.models as Model


def teamInfo(teams):
    team = []
    count = 0
    for t in teams:
        students = []
        athletes = Model.Athlete.query.filter_by(team_id=t.id)
        for a in athletes:
            students.append({
                "id": a.id,
                "name": a.name})

        team.append({
            "id":t.id,
            "name":t.name,
            "students": students
        })
        count = count + 1

    return( {
        "number": count,
        "teams": team
    })

# create an athletes json object
def athleteInfo(athletes):
    students = []
    for a in athletes:
        students.append({
            "id": a.id,
            "name": a.name,
            "team": a.team_id})
    return ({
        "students": students
    })