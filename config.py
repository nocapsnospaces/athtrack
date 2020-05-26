import os
basedir = os.path.abspath(os.path.dirname(__file__))

class DevConfig:
    SQLALCHEMY_DATABASE_URI = os.environ.get('DATABASE_URL') or \
        "sqlite:///" + os.path.join(basedir, "athtrack.sqlite")
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    SECRET_KEY = os.environ.get('SECRET_KEY') or \
        'b84f986ae5d1c9679bb83b0b1ceaad78'
    RESULTS_PER_PAGE = 10
    DEV = True
    PROD = False
    CACHE_TYPE = "simple"
    CACHE_DEFAULT_TIMEOUT = 300
