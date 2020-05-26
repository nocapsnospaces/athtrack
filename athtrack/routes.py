import os 

from athtrack import app, cache

from flask import render_template, send_from_directory

@app.route('/favicon.ico')
@cache.cached(timeout=600)
def favicon():
    return send_from_directory(os.path.join(app.root_path, 'static'), 'favicon.ico', mimetype='image/vnd.microsoft.icon')


@app.route('/')
def index():
    return render_template("index.html")
