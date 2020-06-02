import os 

from athtrack import app, cache

from flask import render_template, request, Response, send_from_directory

@app.route('/favicon.ico')
@cache.cached(timeout=600)
def favicon():
    return send_from_directory(os.path.join(app.root_path, 'static'), 'favicon.ico', mimetype='image/vnd.microsoft.icon')


@app.route('/')
def index():
    return render_template("index.html")

# Some user create and delete api endpoints
@app.route('/api/v1/user/create/', methods=["POST"])
def api_create_user():
    if not request.is_json:
        return Response(status=400)
    content = request.get_json()
    print(content)
    return Response(status=200)