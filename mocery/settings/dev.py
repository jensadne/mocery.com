import os

from .base import *

SECRET_KEY = 'verysekrityesyes'
DEBUG = True
DATABASES['default']['NAME'] = 'mocery'
DATABASES['default']['HOST'] = ''

# Bricklink requires us to log in to download the catalog these days :-/
BRICKLINK_USERNAME = os.environ.get('BRICKLINK_USERNAME', 'nosuchuser')
BRICKLINK_PASSWORD = os.environ.get('BRICKLINK_PASSWORD', 'notatallapassword')

INSTALLED_APPS.extend(['corsheaders', 'debug_toolbar'])
MIDDLEWARE.insert(0, 'corsheaders.middleware.CorsMiddleware')
MIDDLEWARE.append('debug_toolbar.middleware.DebugToolbarMiddleware')
INTERNAL_IPS = ['::1', '127.0.0.1']
CORS_ORIGIN_ALLOW_ALL = False
CORS_ALLOW_CREDENTIALS = True

CORS_ORIGIN_WHITELIST = (
        'http://:localhost:8000', 'http://localhost:4200',
)
