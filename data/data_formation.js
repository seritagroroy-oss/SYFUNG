const LINKS_FORMATION = [
    {
        "id": "openclassrooms",
        "title": "OpenClassrooms",
        "url": "https://openclassrooms.com/fr/",
        "category": "FORMATION - DEV",
        "description": "Plateforme de cours en ligne et formations diplômantes."
    },
    {
        "id": "cursa",
        "title": "Cursa",
        "url": "https://cursa.app/fr",
        "category": "FORMATION - DEV",
        "description": "Cours gratuits en ligne dans de nombreux domaines."
    },
    {
        "id": "coursera",
        "title": "Coursera",
        "url": "https://www.coursera.org/",
        "category": "FORMATION - DEV",
        "description": "Formations certifiantes avec les meilleures universités."
    },
    {
        "id": "mindluster",
        "title": "Mindluster",
        "url": "https://www.mindluster.com/",
        "category": "FORMATION - DEV",
        "description": "Milliers de cours gratuits en ligne."
    },
    {
        "id": "khanacademy",
        "title": "Khan Academy",
        "url": "https://fr.khanacademy.org/",
        "category": "FORMATION - DEV",
        "description": "Cours gratuits en maths, sciences et bien plus."
    },
    {
        "id": "udemy",
        "title": "Udemy",
        "url": "https://www.udemy.com/",
        "category": "FORMATION - DEV",
        "description": "Des milliers de cours en ligne (promos fréquentes)."
    },
    {
        "id": "youtube",
        "title": "YouTube",
        "url": "https://www.youtube.com/",
        "category": "FORMATION - DEV",
        "description": "La plus grande bibliothèque de tutoriels vidéo."
    },
    {
        "id": "grafikart-cours",
        "title": "Grafikart",
        "url": "https://grafikart.fr/",
        "category": "FORMATION - DEV",
        "description": "Tutoriels développement web et design en français."
    },
    {
        "id": "loecsen",
        "title": "Loecsen",
        "url": "https://www.loecsen.com/fr",
        "category": "FORMATION - DEV",
        "description": "Apprendre les langues gratuitement avec audio et vocabulaire.",
        "icon": "https://www.loecsen.com/favicon.ico"
    },
    {
        "id": "googlescholar",
        "title": "Google Scholar",
        "url": "https://scholar.google.com/",
        "category": "FORMATION - DEV",
        "description": "Moteur de recherche d'articles académiques et scientifiques.",
        "icon": "https://scholar.google.com/favicon.ico"
    },
    {
        "id": "ratatype",
        "title": "Ratatype",
        "url": "https://www.ratatype.com/fr/",
        "category": "FORMATION - DEV",
        "description": "Apprendre à taper au clavier rapidement avec des exercices en ligne.",
        "icon": "https://www.ratatype.com/favicon.ico"
    },
    {
        "id": "scratch",
        "title": "Scratch",
        "url": "https://scratch.mit.edu/",
        "category": "FORMATION - DEV",
        "description": "Programmer en mode visuel, idéal pour les débutants et enfants (MIT).",
        "icon": "https://scratch.mit.edu/favicon.ico"
    },
    {
        "id": "codeorg",
        "title": "Code.org",
        "url": "https://code.org/fr",
        "category": "FORMATION - DEV",
        "description": "Apprendre la programmation gratuitement, pour tous les niveaux.",
        "icon": "https://t2.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://code.org&size=64"
    },
    {
        "id": "codedex",
        "title": "Codedex",
        "url": "https://www.codedex.io/courses",
        "category": "FORMATION - DEV",
        "description": "Apprendre à coder de façon fun et interactive avec des projets concrets.",
        "icon": "https://t2.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://www.codedex.io&size=64"
    },
    {
        "id": "edx",
        "title": "edX",
        "url": "https://www.edx.org/",
        "category": "FORMATION - DEV",
        "description": "Cours des meilleures universités (Harvard, MIT)."
    },
    {
        "id": "pluralsight",
        "title": "Pluralsight",
        "url": "https://www.pluralsight.com/",
        "category": "FORMATION - DEV",
        "description": "Formations très pointues pour développeurs et pros de l'IT."
    },
    {
        "id": "codecademy",
        "title": "Codecademy",
        "url": "https://www.codecademy.com/",
        "category": "FORMATION - DEV",
        "description": "Apprentissage interactif du code."
    },
    {
        "id": "freecodecamp",
        "title": "freeCodeCamp",
        "url": "https://www.freecodecamp.org/",
        "category": "FORMATION - DEV",
        "description": "Apprenez à coder gratuitement (certifications reconnues)."
    },
    {
        "id": "datacamp",
        "title": "DataCamp",
        "url": "https://www.datacamp.com/",
        "category": "FORMATION - DEV",
        "description": "Plateforme interactive dédiée à la Data Science et l'IA."
    },
    {
        "id": "skillshare",
        "title": "Skillshare",
        "url": "https://www.skillshare.com/",
        "category": "FORMATION - BUSINESS",
        "description": "Cours créatifs et business par abonnement."
    },
    {
        "id": "linkedinlearning",
        "title": "LinkedIn Learning",
        "url": "https://learning.linkedin.com/",
        "category": "FORMATION - BUSINESS",
        "description": "Formations professionnelles avec certificats pour LinkedIn."
    },
    {
        "id": "masterclass",
        "title": "MasterClass",
        "url": "https://www.masterclass.com/",
        "category": "FORMATION - BUSINESS",
        "description": "Cours donnés par des experts de renommée mondiale."
    },
    {
        "id": "hubspotacademy",
        "title": "HubSpot Academy",
        "url": "https://academy.hubspot.com/",
        "category": "FORMATION - BUSINESS",
        "description": "Certifications gratuites en marketing, vente et CRM.",
        "date": "2026-08-01"
    },
    {
        "id": "googledigital",
        "title": "Google Digital Garage",
        "url": "https://learndigital.withgoogle.com/digitalgarage/fr",
        "category": "FORMATION - BUSINESS",
        "description": "Formations gratuites certifiées par Google sur le digital et le business.",
        "date": "2026-08-01"
    },
    {
        "id": "semrushacademy",
        "title": "Semrush Academy",
        "url": "https://www.semrush.com/academy/",
        "category": "FORMATION - BUSINESS",
        "description": "Certifications SEO, marketing digital et publicité en ligne.",
        "date": "2026-08-01"
    },
    {
        "id": "googleaiessentials",
        "title": "Google AI Essentials",
        "url": "https://www.coursera.org/professional-certificates/google-ai-essentials",
        "category": "FORMATION - TECH",
        "description": "Certificat professionnel Google pour apprendre à utiliser l'IA générative dans son quotidien et booster sa productivité.",
        "date": "2026-10-01"
    }
];
