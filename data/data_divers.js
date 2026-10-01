const LINKS_DIVERS = [
    {
        "id": "radiogarden",
        "title": "Radio Garden",
        "url": "https://radio.garden/?hl=fr",
        "category": "DIVERS",
        "description": "Écoutez des radios du monde entier sur un globe interactif."
    },
    {
        "id": "pdfmaster",
        "title": "PDF Master",
        "url": "https://pdf-master-v3.vercel.app/",
        "category": "DIVERS",
        "description": "Outils et gestion de fichiers PDF.",
        "icon": "https://pdf-master-v3.vercel.app/favicon.ico"
    },
    {
        "id": "royout",
        "title": "Royout",
        "url": "https://royout.vercel.app/",
        "category": "DIVERS",
        "description": "Application web diverses.",
        "icon": "https://royout.vercel.app/favicon.ico"
    },
    {
        "id": "cpasbien",
        "title": "C'est Pas Bien",
        "url": "https://cpasbien.win/",
        "category": "DIVERS",
        "description": "Streaming et téléchargement de films/séries."
    },
    {
        "id": "filecr",
        "title": "FileCR",
        "url": "https://filecr.com/home/",
        "category": "DIVERS",
        "description": "Téléchargement de logiciels et fichiers."
    },
    {
        "id": "whitescreen",
        "title": "White Screen",
        "url": "https://www.whitescreen.online/",
        "category": "DIVERS",
        "description": "Écran blanc en ligne, utile pour nettoyer l'écran."
    },
    {
        "id": "deepl",
        "title": "DeepL",
        "url": "https://www.deepl.com/fr/translator",
        "category": "DIVERS",
        "description": "Le meilleur traducteur en ligne basé sur l'IA."
    },
    {
        "id": "tempmail",
        "title": "Temp Mail",
        "url": "https://temp-mail.org/fr/",
        "category": "DIVERS",
        "description": "Adresse email temporaire et jetable."
    },
    {
        "id": "wetransfer",
        "title": "WeTransfer",
        "url": "https://wetransfer.com/",
        "category": "DIVERS",
        "description": "Envoi de gros fichiers simplement."
    },
    {
        "id": "archive",
        "title": "Archive.org",
        "url": "https://archive.org/",
        "category": "DIVERS",
        "description": "La machine à remonter le temps du web."
    },
    {
        "id": "pranxhacker",
        "title": "Hacker Typer",
        "url": "https://pranx.com/hacker/simulateur/",
        "category": "DIVERS",
        "description": "Simulateur d'écran de hacker pour impressionner vos amis.",
        "icon": "https://pranx.com/favicon.ico"
    },
    {
        "id": "binshare",
        "title": "BinShare.net",
        "url": "https://binshare.net",
        "category": "DIVERS",
        "description": "Créez et partagez du code ou des fichiers binaires sous forme d'image ou de lien."
    },
    {
        "id": "blynk",
        "title": "Blynk",
        "url": "https://blynk.io",
        "category": "DIVERS",
        "description": "SaaS avec API pour contrôler, créer et évaluer des objets connectés (IoT)."
    },
    {
        "id": "cronjoborg",
        "title": "cron-job.org",
        "url": "https://cron-job.org",
        "category": "DIVERS",
        "description": "Service de tâches cron en ligne. Nombre de tâches illimité et gratuit."
    },
    {
        "id": "cronhooks",
        "title": "Cronhooks",
        "url": "https://cronhooks.io",
        "category": "DIVERS",
        "description": "Programmez des webhooks ponctuels ou récurrents."
    },
    {
        "id": "datelist",
        "title": "datelist.io",
        "url": "https://datelist.io",
        "category": "DIVERS",
        "description": "Système de réservation en ligne / de prise de rendez-vous."
    },
    {
        "id": "fossa",
        "title": "FOSSA",
        "url": "https://fossa.com",
        "category": "DIVERS",
        "description": "Gestion de code tiers, de la conformité des licences et des vulnérabilités."
    },
    {
        "id": "hookrelay",
        "title": "Hook Relay",
        "url": "https://hookrelay.dev",
        "category": "DIVERS",
        "description": "Intégrez la prise en charge des webhooks avec files d'attente et tentatives."
    },
    {
        "id": "hostingchecker",
        "title": "Vérificateur d'hébergement",
        "url": "https://hostingchecker.com",
        "category": "DIVERS",
        "description": "Consultez les informations d'hébergement, FAI, localisation, etc."
    },
    {
        "id": "newreleases",
        "title": "newreleases.io",
        "url": "https://newreleases.io",
        "category": "DIVERS",
        "description": "Notifications pour les nouvelles versions GitHub, NPM, PyPI, Docker Hub..."
    },
    {
        "id": "pdfmonkey",
        "title": "PDFMonkey",
        "url": "https://pdfmonkey.io",
        "category": "DIVERS",
        "description": "Gérez vos modèles PDF, utilisez une API avec données dynamiques."
    },
    {
        "id": "pika",
        "title": "Pika (Captures de code)",
        "url": "https://pika.style",
        "category": "DIVERS",
        "description": "Créez de superbes captures d'écran de code personnalisables."
    },
    {
        "id": "quicktype",
        "title": "QuickType.io",
        "url": "https://quicktype.io",
        "category": "DIVERS",
        "description": "Générez des modèles et types à partir de JSON, schémas et GraphQL."
    },
    {
        "id": "readme",
        "title": "readme.com",
        "url": "https://readme.com",
        "category": "DIVERS",
        "description": "Documentation claire et facile à utiliser, gratuite pour l'open source."
    },
    {
        "id": "redirectpizza",
        "title": "redirect.pizza",
        "url": "https://redirect.pizza",
        "category": "DIVERS",
        "description": "Gérez facilement vos redirections avec prise en charge HTTPS."
    },
    {
        "id": "redirectionio",
        "title": "redirection.io",
        "url": "https://redirection.io",
        "category": "DIVERS",
        "description": "Outil SaaS de gestion des redirections HTTP (marketing/référencement)."
    },
    {
        "id": "redirs",
        "title": "redirs.com",
        "url": "https://redirs.com",
        "category": "DIVERS",
        "description": "Redirections de domaine simplifiées avec SSL automatique."
    },
    {
        "id": "redirhub",
        "title": "RedirHub",
        "url": "https://redirhub.com",
        "category": "DIVERS",
        "description": "Infrastructure de redirection d'URL avec API, réseau périphérique et HTTPS."
    },
    {
        "id": "reqbin",
        "title": "ReqBin",
        "url": "https://reqbin.com",
        "category": "DIVERS",
        "description": "Envoyez des requêtes HTTP en ligne (GET, POST, PUT, DELETE, HEAD)."
    },
    {
        "id": "smartcar",
        "title": "API Smartcar",
        "url": "https://smartcar.com",
        "category": "DIVERS",
        "description": "API pour les voitures connectées (localisation, niveau de carburant, etc.)."
    },
    {
        "id": "sunrisesunset",
        "title": "Lever et coucher du soleil",
        "url": "https://sunrise-sunset.org/api",
        "category": "DIVERS",
        "description": "Obtenez les heures de lever/coucher du soleil par géolocalisation."
    },
    {
        "id": "superfeedr",
        "title": "superfeedr.com",
        "url": "https://superfeedr.com",
        "category": "DIVERS",
        "description": "Flux RSS compatibles PubSubHubbub en temps réel."
    },
    {
        "id": "surveymonkey",
        "title": "SurveyMonkey",
        "url": "https://surveymonkey.com",
        "category": "DIVERS",
        "description": "Créez et analysez des sondages en ligne."
    },
    {
        "id": "synchronisation",
        "title": "SYNCHRONISATION",
        "url": "https://syncthemcalendars.com",
        "category": "DIVERS",
        "description": "Synchronisation bidirectionnelle avec Google Agenda."
    },
    {
        "id": "uuidgenerator",
        "title": "Générateur d'UUID",
        "url": "https://www.uuidgenerator.net",
        "category": "DIVERS",
        "description": "Générez instantanément des UUID (v1, v4, v7), GUID, NanoID, ULID..."
    },
    {
        "id": "versionfeeds",
        "title": "Versionfeeds",
        "url": "https://versionfeeds.com",
        "category": "DIVERS",
        "description": "Flux RSS personnalisés pour les mises à jour de vos logiciels préférés."
    },
    {
        "id": "notion",
        "title": "Notion",
        "url": "https://www.notion.so/",
        "category": "DIVERS - OUTILS",
        "description": "Espace de travail tout-en-un ultra puissant."
    },
    {
        "id": "obsidian",
        "title": "Obsidian",
        "url": "https://obsidian.md/",
        "category": "DIVERS - OUTILS",
        "description": "Prise de notes avec un réseau de connaissances."
    },
    {
        "id": "trello",
        "title": "Trello",
        "url": "https://trello.com/",
        "category": "DIVERS - OUTILS",
        "description": "Gestion de projets en mode Kanban."
    },
    {
        "id": "1password",
        "title": "1Password",
        "url": "https://1password.com/",
        "category": "DIVERS - OUTILS",
        "description": "Excellent gestionnaire de mots de passe."
    },
    {
        "id": "bitwarden",
        "title": "Bitwarden",
        "url": "https://bitwarden.com/",
        "category": "DIVERS - OUTILS",
        "description": "Gestionnaire de mots de passe open-source et gratuit."
    },
    {
        "id": "coinmarketcap",
        "title": "CoinMarketCap",
        "url": "https://coinmarketcap.com/",
        "category": "DIVERS - AUTRE",
        "description": "Suivi des cryptomonnaies."
    },
    {
        "id": "tradingview",
        "title": "TradingView",
        "url": "https://www.tradingview.com/",
        "category": "DIVERS - AUTRE",
        "description": "Graphiques financiers et réseau social pour traders."
    },
    {
        "id": "clubic",
        "title": "Clubic",
        "url": "https://www.clubic.com/",
        "category": "DIVERS - AUTRE",
        "description": "Actualités Tech, astuces et téléchargements logiciels."
    },
    {
        "id": "duckduckgonoai",
        "title": "DuckDuckGo (No AI)",
        "url": "https://noai.duckduckgo.com/",
        "category": "DIVERS - OUTILS",
        "description": "Moteur de recherche centré sur la vie privée, garanti sans aucune fonctionnalité générée par l'IA.",
        "date": "2026-09-28",
        "icon": "https://duckduckgo.com/favicon.ico"
    },
    {
        "id": "startpage",
        "title": "Startpage",
        "url": "https://www.startpage.com/",
        "category": "DIVERS - OUTILS",
        "description": "Moteur de recherche privé qui affiche les résultats Google sans vous tracer ni collecter vos données.",
        "date": "2026-09-28",
        "icon": "https://www.startpage.com/favicon.ico"
    },
    {
        "id": "driveandlisten",
        "title": "Drive & Listen",
        "url": "https://driveandlisten.herokuapp.com/",
        "category": "DIVERS",
        "description": "Conduisez virtuellement dans des dizaines de villes à travers le monde tout en écoutant les radios locales.",
        "date": "2026-10-01"
    },
    {
        "id": "myfridgefood",
        "title": "MyFridgeFood",
        "url": "https://myfridgefood.com/",
        "category": "DIVERS",
        "description": "Sélectionnez les ingrédients que vous avez dans votre frigo, et le site vous propose des recettes à cuisiner.",
        "date": "2026-10-01"
    },
    {
        "id": "windy",
        "title": "Windy",
        "url": "https://www.windy.com/",
        "category": "DIVERS",
        "description": "Carte météo interactive mondiale en temps réel (vents, tempêtes, températures, radars).",
        "date": "2026-10-01"
    },
    {
        "id": "sobrief",
        "title": "SoBrief",
        "url": "https://sobrief.com/",
        "category": "DIVERS",
        "description": "Obtenez des résumés concis (audio et texte) de milliers de livres dans de nombreuses langues.",
        "date": "2026-10-01"
    }
];
