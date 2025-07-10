# Consulat Congo - Site Web

Site web officiel du Consulat du Congo.

## Déploiement sur Render

Ce projet est configuré pour être déployé sur Render. Voici les étapes pour le déploiement :

### 1. Prérequis

- Un compte Render (gratuit sur [render.com](https://render.com))
- Votre code source sur GitHub, GitLab ou Bitbucket

### 2. Configuration sur Render

1. Connectez-vous à votre compte Render
2. Cliquez sur "New +" et sélectionnez "Web Service"
3. Connectez votre repository Git
4. Configurez le service avec les paramètres suivants :
   - **Name**: consulat-congo
   - **Environment**: Python
   - **Build Command**: `./build.sh`
   - **Start Command**: `gunicorn consulat_site.wsgi:application`

### 3. Variables d'environnement

Les variables d'environnement suivantes sont configurées automatiquement :
- `SECRET_KEY`: Générée automatiquement par Render
- `DEBUG`: `False` (production)
- `ALLOWED_HOSTS`: `.onrender.com`

### 4. Déploiement

Une fois configuré, Render déploiera automatiquement votre application à chaque push sur la branche principale.

### 5. Accès à l'application

Votre application sera accessible à l'URL fournie par Render (ex: `https://consulat-congo.onrender.com`)

## Développement local

Pour développer localement :

```bash
# Créer un environnement virtuel
python -m venv env
source env/bin/activate  # Sur Windows: env\Scripts\activate

# Installer les dépendances
pip install -r requirements.txt

# Effectuer les migrations
python manage.py migrate

# Créer un superutilisateur (optionnel)
python manage.py createsuperuser

# Lancer le serveur de développement
python manage.py runserver
```

## Structure du projet

```
consulat_site/
├── consulat/           # Application principale
├── consulat_site/      # Configuration du projet
├── static/            # Fichiers statiques
├── templates/         # Templates HTML
├── build.sh          # Script de build pour Render
├── render.yaml       # Configuration Render
├── requirements.txt   # Dépendances Python
└── manage.py         # Script de gestion Django
```

## Technologies utilisées

- Django 5.2.3
- Python 3.11
- Gunicorn (serveur WSGI)
- WhiteNoise (gestion des fichiers statiques)
- SQLite (base de données) 