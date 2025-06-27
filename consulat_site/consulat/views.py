from django.shortcuts import render

# Create your views here.

def index(request):
    context = {
        'objectives': [
            "Célébrer l'indépendance de la République du Congo",
            "Renforcer les liens entre le Congo et le Bénin",
            "Promouvoir la culture congolaise au Bénin",
            "Favoriser la coopération inter-communautaire",
            "Encourager l'entrepreneuriat et l'innovation"
        ],
        'activities': [
            {
                'title': "Culte d'Action de Grâces",
                'date': "12 août 2025, 19h",
                'location': "Place Bicentenaire",
                'description': "Moment spirituel pour rendre grâce à Dieu pour l'indépendance.",
                'items': [
                    "Louanges et Adoration",
                    "Témoignages de reconnaissance",
                    "Message spirituel"
                ]
            },
            {
                "title": "Célébration de la Lumière Éternelle",
                "date": "3 novembre 2025, 18h30",
                "location": "Jardin des Oliviers",
                "description": "Rassemblement communautaire pour honorer les bénédictions de l'année écoulée.",
                "items": [
                    "Chants sacrés",
                    "Partage des récoltes",
                    "Méditation guidée",
                    "Bénédiction finale"
                ]
            },
            {
                "title": "Veillée des Étoiles Filantes",
                "date": "17 septembre 2025, 20h45",
                "location": "Chapelle Saint-Michel",
                "description": "Cérémonie nocturne pour commémorer les miracles du quotidien.",
                "items": [
                    "Procession aux flambeaux",
                    "Lecture des textes sacrés",
                    "Chorale céleste",
                    "Distribution des pains bénis"
                ]
            },
            {
                "title": "Fête des Moissons Spirituelles",
                "date": "22 octobre 2025, 17h00",
                "location": "Cloître du Monastère",
                "description": "Action de grâce collective pour les récoltes matérielles et spirituelles.",
                "items": [
                    "Offrande des prémices",
                    "Danse traditionnelle",
                    "Prédication inspirante",
                    "Repas fraternel"
                ]
            },
            {
                "title": "Nuit de Gratitude Électronique",
                "date": "8 décembre 2025, 21h",
                "location": "Espace Lumina",
                "description": "Une expérience immersive mêlant louanges digitales et méditation collective.",
                "items": [
                    "Set DJ worship",
                    "Témoignages en réalité virtuelle",
                    "Atelier de journaling spirituel",
                    "Final en lumière noire"
                ]
            },
            {
                "title": "Rituel des Anciens",
                "date": "1er janvier 2026, 6h (lever du soleil)",
                "location": "Pierre Sacrée du Mont Hélios",
                "description": "Cérémonie millénaire pour remercier les esprits de la terre et du ciel.",
                "items": [
                    "Appel des ancêtres",
                    "Offrandes de fruits et d'épices",
                    "Danses chamaniques",
                    "Bénédiction par le feu"
                ]
            },
            # Ajoutez les autres activités ici
        ]
    }
    return render(request, 'consulat/index.html', context)
