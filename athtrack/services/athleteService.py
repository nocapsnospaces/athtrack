import athtrack.models as model

def add_athletes_to_team(dict, errors):
    students = dict['students']
    team_id = dict['team_id']

    if model.Team.query.get(dict['team_id']) is None:
        errors.append({"msg": "team does not exist"})
        return errors
    if dict['students'] is None:
        errors.append({"msg": "provide list of students to be added"})
        return errors

    students = dict['students']
    team_id = dict['team_id']
    for u in students:
        student_id = u['student_id']
        if model.Athlete.query.get(student_id) is None:
            errors.append({"msg": "Athlete does not exist"})
            return errors
        else:
            model.Athlete.query.get(student_id).set_team_id(team_id)

            status = 200

    return status
