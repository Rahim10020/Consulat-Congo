#!/usr/bin/env bash
# exit on error
set -o errexit

pip install -r requirements.txt

# Clean npm cache and reinstall
rm -rf node_modules
rm -f package-lock.json
npm cache clean --force
npm install

npm run build:css
python manage.py collectstatic --no-input
python manage.py migrate