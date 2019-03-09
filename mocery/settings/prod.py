import os

from .base import *

SECRET_KEY = os.environ['SECRET_KEY']
DEBUG = False
DATABASES['default']['NAME'] = os.environ['DB_NAME']
DATABASES['default']['HOST'] = os.environ['DB_HOST']
DATABASES['default']['USER'] = os.environ['DB_USER']
DATABASES['default']['PASSWORD'] = os.environ['DB_PASSWORD']
