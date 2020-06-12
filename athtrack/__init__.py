from flask import Flask
from flask_cors import CORS, cross_origin

from flask_caching import Cache
from flask_login import LoginManager
from flask_migrate import Migrate
from flask_sqlalchemy import SQLAlchemy

from config import DevConfig

app = Flask(__name__)
app.config.from_object(DevConfig)
app.config['CORS_HEADERS'] = 'Content-Type'

cors = CORS(app)
cache = Cache(app)
db = SQLAlchemy(app)
migrate = Migrate(app, db)
login = LoginManager(app)

from athtrack import models, routes