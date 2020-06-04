import os 
import json

from time import time

from flask import render_template, request, Response, send_from_directory
from flask_login import current_user, login_user, logout_user, login_required

from athtrack import app, cache, db
from athtrack.models import User

@app.route('/favicon.ico')
@cache.cached(timeout=600)
def favicon():
    return send_from_directory(os.path.join(app.root_path, 'static'), 'favicon.ico', mimetype='image/vnd.microsoft.icon')


@app.route('/')
def index():
    return render_template("index.html")


@app.route('/api/v1/time')
def get_current_time():
    return {'time': time()}

@app.route('/api/v1/user/create/', methods=["POST"])
def add_user():
    """
    Expects
    ```json
    {"email": "email@email.com", "password": "dontusepasswordasapassword"}
    ```
    """
    if not request.is_json:
        return Response(json.dumps({'msg': "Bad request MIME type"}), status=400)
    
    data = request.get_json()
    email = data.get('email', None)
    password = data.get('password', None)
    errors = []
    # TODO: validate email
    if email is None:
        errors.append({"msg": "Email must be present"})
    # NOTTODO: do not enforce password restrictions, they are always dumb
    if password is None:
        errors.append({"msg": "Gotta have a password, buddy"})
    
    if len(errors) != 0:
        return Response(json.dumps(errors), status=400)
    
    u = User(email=email)
    u.set_password(password)
    db.session.add(u)
    db.session.commit()
    return Response(json.dumps({'pk': u.id}), status=200)


@app.route('/api/v1/login/', methods=["POST"])
def user_login():
    if current_user.is_authenticated:
        return Response(json.dumps({"msg": "You're already logged in, dummy"}), status=400)
    if not request.is_json:
        return Response(json.dumps({'msg': "Bad request MIME type"}), status=400)
    data = request.get_json()
    email = data.get('email', None)
    password = data.get('password', None)
    u = User.query.filter_by(email=email).first()
    if u is None:
        return Response(json.dumps({"msg": "go away"}), status=404)
    if not u.check_password(password):
        return Response(json.dumps({"msg": "go away"}), status=401)
    login_user(u)
    return Response(json.dumps({"msg": "set the session cookie, plox"}), status=200)

@app.route('/api/v1/logout/')
@login_required
def user_logout():
    logout_user()
    return Response(200)
