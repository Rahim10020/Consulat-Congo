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
            # Ajoutez les autres activités ici
        ]
    }
    return render(request, 'consulat/index.html', context)
