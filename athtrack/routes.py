import os 

from flask import render_template, request, Response, send_from_directory
from time import time

from athtrack import app, cache

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
