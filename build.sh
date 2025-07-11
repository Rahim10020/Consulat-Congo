#!/usr/bin/env bash
# exit on error
set -o errexit

pip install -r requirements.txt
npm install
chmod +x node_modules/.bin/tailwindcss
npm run build:css
python manage.py collectstatic --no-input
python manage.py migrate 