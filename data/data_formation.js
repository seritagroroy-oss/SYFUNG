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
        "id": "classcentral",
        "title": "Class Central",
        "url": "https://www.classcentral.com/",
        "category": "FORMATION - DEV",
        "description": "Le plus grand moteur de recherche de cours en ligne, formations gratuites et MOOCs universitaires certifiants."
    },
    {
        "id": "fluvi",
        "title": "Fluvi",
        "url": "https://fluvistudy.com/",
        "category": "FORMATION - DEV",
        "description": "Transforme vos cours (PDF, audio, vidéo, texte) en quiz, flashcards, fiches et podcasts avec répétition espacée.",
        "icon": "https://fluvistudy.com/icon.png"
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
    },
    {
        "id": "lingohut",
        "title": "LingoHut",
        "url": "https://www.lingohut.com/fr",
        "category": "FORMATION",
        "description": "Apprenez gratuitement du vocabulaire et la prononciation dans plus de 45 langues différentes.",
        "date": "2026-10-01"
    },
    {
        "id": "unicefagora",
        "title": "UNICEF – Agora",
        "url": "https://agora.unicef.org/",
        "category": "FORMATION - ORGANISATIONS",
        "description": "Plateforme de formation gratuite de l'UNICEF : protection de l'enfance, éducation, inclusion et leadership.",
        "icon": "https://agora.unicef.org/favicon.ico"
    },
    {
        "id": "openwho",
        "title": "OMS – OpenWHO",
        "url": "https://openwho.org/",
        "category": "FORMATION - ORGANISATIONS",
        "description": "Plateforme interactive de l'OMS : santé publique, épidémies et gestion des urgences sanitaires mondiales.",
        "icon": "https://openwho.org/favicon.ico"
    },
    {
        "id": "faoelearning",
        "title": "FAO eLearning Academy",
        "url": "https://elearning.fao.org/",
        "category": "FORMATION - ORGANISATIONS",
        "description": "Cours gratuits certifiants de la FAO : agriculture durable, sécurité alimentaire, nutrition et climat.",
        "icon": "https://elearning.fao.org/favicon.ico"
    },
    {
        "id": "worldbankolc",
        "title": "Banque mondiale – Open Learning Campus",
        "url": "https://olc.worldbank.org/",
        "category": "FORMATION - ORGANISATIONS",
        "description": "Formations et MOOCs de la Banque mondiale : développement économique, gouvernance, finances et data.",
        "icon": "https://olc.worldbank.org/favicon.ico"
    },
    {
        "id": "unsdglearn",
        "title": "Nations Unies – UN SDG:Learn",
        "url": "https://unsdglearn.org/",
        "category": "FORMATION - ORGANISATIONS",
        "description": "Passerelle d'apprentissage de l'ONU dédiée aux 17 Objectifs de Développement Durable (ODD).",
        "icon": "https://unsdglearn.org/favicon.ico"
    },
    {
        "id": "unitar",
        "title": "UNITAR – Free & Open Courses",
        "url": "https://unitar.org/free-and-open-courses",
        "category": "FORMATION - ORGANISATIONS",
        "description": "Cours libres de l'Institut des Nations Unies : climat, droits humains, diplomatie et développement.",
        "icon": "https://unitar.org/favicon.ico"
    },
    {
        "id": "unccelearn",
        "title": "UN CC:eLearn",
        "url": "https://unccelearn.org/",
        "category": "FORMATION - ORGANISATIONS",
        "description": "Plateforme mondiale de formation de l'ONU sur le changement climatique, la résilience et l'adaptation.",
        "icon": "https://unccelearn.org/favicon.ico"
    },
    {
        "id": "unescoopenlearning",
        "title": "UNESCO – Open Learning",
        "url": "https://openlearning.unesco.org/",
        "category": "FORMATION - ORGANISATIONS",
        "description": "Cours en ligne et ressources éducatives libres de l'UNESCO : éducation, inclusion et culture.",
        "icon": "https://openlearning.unesco.org/favicon.ico"
    },
    {
        "id": "iomecampus",
        "title": "OIM – eCampus",
        "url": "https://ecampus.iom.int/",
        "category": "FORMATION - ORGANISATIONS",
        "description": "Formations de l'Organisation Internationale pour les Migrations : gestion des flux migratoires et droits.",
        "icon": "https://ecampus.iom.int/favicon.ico"
    },
    {
        "id": "unwomentraining",
        "title": "ONU Femmes – Training Centre",
        "url": "https://trainingcentre.unwomen.org/",
        "category": "FORMATION - ORGANISATIONS",
        "description": "Centre de formation de l'ONU Femmes : égalité des genres, leadership féminin et droits humains.",
        "icon": "https://trainingcentre.unwomen.org/favicon.ico"
    },
    {
        "id": "ilolearning",
        "title": "OIT – ILO Learning",
        "url": "https://www.ilo.org/learning/",
        "category": "FORMATION - ORGANISATIONS",
        "description": "Formations de l'Organisation Internationale du Travail : travail décent, normes et inclusion sociale.",
        "icon": "https://www.ilo.org/favicon.ico"
    },
    {
        "id": "unhcrlearning",
        "title": "HCR / UNHCR – Learning Platform",
        "url": "https://www.unhcr.org/learning-portal.html",
        "category": "FORMATION - ORGANISATIONS",
        "description": "Portail de formation du HCR sur la protection internationale des réfugiés et demandeurs d'asile.",
        "icon": "https://www.unhcr.org/favicon.ico"
    },
    {
        "id": "unodcelearning",
        "title": "UNODC – eLearning",
        "url": "https://elearningunodc.org/",
        "category": "FORMATION - ORGANISATIONS",
        "description": "Modules de formation de l'Office de l'ONU contre la drogue et le crime : justice pénale et sécurité.",
        "icon": "https://elearningunodc.org/favicon.ico"
    },
    {
        "id": "undpsdgfinance",
        "title": "PNUD – SDG Finance Academy",
        "url": "https://www.unsdglearn.org/courses/sdg-finance-academy-e-learning-programme/",
        "category": "FORMATION - ORGANISATIONS",
        "description": "Programme de formation du PNUD : finance durable, investissement à impact et financement des ODD.",
        "icon": "https://www.unsdglearn.org/favicon.ico"
    },
    {
        "id": "uneplearning",
        "title": "PNUE (UNEP) – Environmental Learning",
        "url": "https://www.unep.org/resources",
        "category": "FORMATION - ORGANISATIONS",
        "description": "Formations et ressources environnementales de l'ONU : biodiversité, durabilité et transition écologique.",
        "icon": "https://www.unep.org/favicon.ico"
    },
    {
        "id": "ifrclearning",
        "title": "Croix-Rouge – IFRC Learning Platform",
        "url": "https://www.ifrc.org/get-involved/learn-us",
        "category": "FORMATION - ORGANISATIONS",
        "description": "Plateforme de formation de la Croix-Rouge et Croissant-Rouge : secourisme, action humanitaire et crises.",
        "icon": "https://www.ifrc.org/favicon.ico"
    },
    {
        "id": "msflearning",
        "title": "Médecins Sans Frontières – Learning & Resources",
        "url": "https://www.msf.org/learning-and-development",
        "category": "FORMATION - ORGANISATIONS",
        "description": "Ressources et modules d'apprentissage de MSF : médecine d'urgence, logistique et santé humanitaire.",
        "icon": "https://www.msf.org/favicon.ico"
    },
    {
        "id": "amnestyacademy",
        "title": "Amnesty International – Human Rights Education",
        "url": "https://www.amnesty.org/en/what-we-do/education/",
        "category": "FORMATION - ORGANISATIONS",
        "description": "Académie des droits humains d'Amnesty : cours gratuits sur les libertés fondamentales et le plaidoyer.",
        "icon": "https://www.amnesty.org/favicon.ico"
    },
    {
        "id": "oxfameducation",
        "title": "Oxfam – Oxfam Education",
        "url": "https://www.oxfam.org.uk/education/",
        "category": "FORMATION - ORGANISATIONS",
        "description": "Ressources et cours d'Oxfam pour l'engagement citoyen, la lutte contre les inégalités et la justice sociale.",
        "icon": "https://www.oxfam.org.uk/favicon.ico"
    },
    {
        "id": "unvolunteers",
        "title": "UN Volunteers – Learning Platform",
        "url": "https://www.unv.org/",
        "category": "FORMATION - ORGANISATIONS",
        "description": "Portail des Volontaires des Nations Unies : volontariat international, leadership citoyen et engagement.",
        "icon": "https://www.unv.org/favicon.ico"
    }
];
