import os

from flask import render_template, request, Response, send_from_directory, jsonify
from time import time
from athtrack import db

from flask_login import current_user, login_user
import athtrack.models as model

from athtrack import app, cache


@app.route('/favicon.ico')
@cache.cached(timeout=600)
def favicon():
    return send_from_directory(os.path.join(app.root_path, 'static'), 'favicon.ico',
                               mimetype='image/vnd.microsoft.icon')


@app.route('/')
def index():
    return render_template("index.html")


@app.route('/api/v1/time')
def get_current_time():
    return {'time': time()}

# request structure:
# {
# "team_id": 12,
# "students":[
# 	{
# 		"student_id": 7
# 	},
# 		{
# 		"student_id":8
# 	}
# ]
# }
@app.route('/headcoach/addAthletes', methods=['POST'])
def survey_route():
    dict = request.get_json()
    students = dict['students']
    for u in students:
        model.Athlete.query.get(u['student_id']).set_team_id(dict['team_id'])

    return {'status':'succesful'}
