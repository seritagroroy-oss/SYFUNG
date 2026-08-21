// Base de données des liens pour SyFung Bookmarks
// Ajoutez, modifiez ou supprimez des objets dans ce tableau pour mettre à jour le site public.

const SYFUNG_LINKS = [
    // ==========================================
    // IA - RECHERCHE ET ASSISTANTS
    // ==========================================
    { 
        id: 'chatgpt', 
        title: 'ChatGPT', 
        url: 'https://chat.openai.com', 
        category: 'IA - RECHERCHE', 
        description: 'Assistant virtuel par OpenAI.'
    },
    { 
        id: 'gemini', 
        title: 'Gemini', 
        url: 'https://gemini.google.com', 
        category: 'IA - RECHERCHE', 
        description: 'Modèle IA par Google.'
    },
    { 
        id: 'claude', 
        title: 'Claude', 
        url: 'https://claude.ai', 
        category: 'IA - RECHERCHE', 
        description: 'Assistant IA par Anthropic.'
    },
    { 
        id: 'perplexity', 
        title: 'Perplexity', 
        url: 'https://www.perplexity.ai', 
        category: 'IA - RECHERCHE', 
        description: 'Moteur de recherche IA.'
    },
    { 
        id: 'manus', 
        title: 'Manus', 
        url: 'https://manus.im/app', 
        category: 'IA - RECHERCHE', 
        description: 'Outil IA.'
    },
    { 
        id: 'copilot', 
        title: 'Copilot', 
        url: 'https://copilot.microsoft.com', 
        category: 'IA - RECHERCHE', 
        description: 'Assistant IA par Microsoft.'
    },
    { 
        id: 'hackerai', 
        title: 'Hacker AI', 
        url: 'https://hackerai.co/', 
        category: 'IA - RECHERCHE', 
        description: 'IA pour la sécurité et le code.'
    },
    { 
        id: 'metaai', 
        title: 'Meta AI', 
        url: 'https://www.meta.ai', 
        category: 'IA - RECHERCHE', 
        description: 'Assistant IA par Meta.'
    },
    { 
        id: 'notebooklm', 
        title: 'NotebookLM', 
        url: 'https://notebooklm.google.com', 
        category: 'IA - RECHERCHE', 
        description: 'Assistant de recherche par Google.'
    },
    { 
        id: 'mammouth', 
        title: 'Mammouth AI', 
        url: 'https://mammouth.ai', 
        icon: 'https://mammouth.ai/favicon.ico',
        category: 'IA - RECHERCHE', 
        description: 'Accès unifié à GPT, Claude, Gemini et d\'autres modèles IA en un seul endroit.'
    },
    { 
        id: 'geministorybook', 
        title: 'Gemini Storybook', 
        url: 'https://gemini.google/overview/storybook/', 
        category: 'IA - RECHERCHE', 
        description: 'Explorer les cas d\'usage et la vision de Gemini.'
    },
    { 
        id: 'geminibusiness', 
        title: 'Gemini Business', 
        url: 'https://auth.business.gemini.google/login?continueUrl=https://business.gemini.google/?referrer%3Dhttps://www.google.com/&wiffid=CAoSJDBlZjUzZTkxLWFlYTktNDQwNi04MWMwLWUxZmFiYTRlZmVlNw', 
        icon: 'https://upload.wikimedia.org/wikipedia/commons/8/8a/Google_Gemini_logo.svg',
        category: 'IA - RECHERCHE', 
        description: 'Gemini pour les entreprises et Google Workspace.'
    },
    { 
        id: 'arenaai', 
        title: 'Arena AI', 
        url: 'https://arena.ai/', 
        category: 'IA - RECHERCHE', 
        description: 'Plateforme d\'intelligence artificielle.'
    },
    { 
        id: 'chatzai', 
        title: 'Chat Z.ai', 
        url: 'https://chat.z.ai/', 
        category: 'IA - RECHERCHE', 
        description: 'Assistant de recherche et d\'IA.'
    },

    // ==========================================
    // IA - IMAGES & DESIGN
    // ==========================================
    { 
        id: 'midjourney', 
        title: 'Midjourney', 
        url: 'https://www.midjourney.com', 
        category: 'IA - IMAGES', 
        description: 'Génération d\'images par IA.'
    },
    { 
        id: 'leonardo', 
        title: 'Leonardo AI', 
        url: 'https://leonardo.ai', 
        category: 'IA - IMAGES', 
        description: 'Création d\'images et assets.'
    },
    { 
        id: 'v0', 
        title: 'v0 by Vercel', 
        url: 'https://v0.dev', 
        category: 'IA - IMAGES', 
        description: 'Génération d\'interfaces UI.'
    },
    { 
        id: 'veniceai', 
        title: 'Venice AI', 
        url: 'https://venice.ai', 
        category: 'IA - IMAGES', 
        description: 'Génération et IA.'
    },
    { 
        id: 'edgegallery', 
        title: 'Edge Gallery', 
        url: 'https://edgegallery.com', 
        category: 'IA - IMAGES', 
        description: 'Outils et galerie IA.'
    },

    // ==========================================
    // IA - AUDIO & VIDÉO
    // ==========================================
    { 
        id: 'suno', 
        title: 'Suno', 
        url: 'https://suno.com', 
        category: 'IA - AUDIO VIDEO', 
        description: 'Génération de musique par IA.'
    },
    { 
        id: 'runway', 
        title: 'Runway', 
        url: 'https://runwayml.com', 
        category: 'IA - AUDIO VIDEO', 
        description: 'Création vidéo par IA.'
    },

    // ==========================================
    // POUR LES DEV
    // ==========================================
    { 
        id: 'cursor', 
        title: 'Cursor', 
        url: 'https://cursor.com', 
        category: 'DEV - ASSISTANTS', 
        description: 'Éditeur de code IA.'
    },
    { 
        id: 'codex', 
        title: 'Codex', 
        url: 'https://chatgpt.com/fr-FR/codex/', 
        category: 'DEV - ASSISTANTS', 
        description: 'Génération de code par OpenAI.'
    },
    { 
        id: 'claudecode', 
        title: 'Claude Code', 
        url: 'https://docs.anthropic.com/en/docs/agents-and-tools/claude-code/overview', 
        category: 'DEV - ASSISTANTS', 
        description: 'Agent de code par Anthropic.'
    },
    { 
        id: 'codeium', 
        title: 'Codeium', 
        url: 'https://codeium.com', 
        category: 'DEV - ASSISTANTS', 
        description: 'Assistant de code IA gratuit.'
    },
    { 
        id: 'tabnine', 
        title: 'Tabnine', 
        url: 'https://www.tabnine.com', 
        category: 'DEV - ASSISTANTS', 
        description: 'Assistant de complétion IA.'
    },
    { 
        id: 'aider', 
        title: 'Aider', 
        url: 'https://aider.chat', 
        icon: 'https://aider.chat/assets/icons/favicon-32x32.png',
        category: 'DEV - ASSISTANTS', 
        description: 'IA Pair Programming dans le terminal.'
    },
    { 
        id: 'aistudio', 
        title: 'AI Studio', 
        url: 'https://aistudio.google.com/apps', 
        icon: 'https://www.gstatic.com/aistudio/ai_studio_favicon_32x32.png',
        category: 'DEV - ASSISTANTS', 
        description: 'Plateforme Google pour créer et tester des apps IA avec Gemini.'
    },
    { 
        id: 'supermaven', 
        title: 'Supermaven', 
        url: 'https://supermaven.com', 
        category: 'DEV - ASSISTANTS', 
        description: 'Plugin de complétion de code IA ultra-rapide avec une latence ultra-faible.'
    },
    { 
        id: 'boltai', 
        title: 'Bolt AI', 
        url: 'https://boltai.com', 
        category: 'DEV - ASSISTANTS', 
        description: 'Assistant IA natif pour macOS.'
    },
    { 
        id: 'replit', 
        title: 'Replit', 
        url: 'https://replit.com', 
        category: 'DEV - ASSISTANTS', 
        description: 'Environnement de développement cloud collaboratif.'
    },

    // ==========================================
    // DEV - GENERATEURS
    // ==========================================
    { 
        id: 'bolt', 
        title: 'Bolt.new', 
        url: 'https://bolt.new', 
        category: 'DEV - GENERATEURS', 
        description: 'Générateur d\'applications web full-stack.'
    },
    { 
        id: 'lovable', 
        title: 'Lovable', 
        url: 'https://lovable.dev', 
        category: 'DEV - GENERATEURS', 
        description: 'Création d\'interfaces UI complètes.'
    },
    { 
        id: 'emergent', 
        title: 'Emergent.sh', 
        url: 'https://app.emergent.sh/', 
        icon: 'https://app.emergent.sh/favicon.ico',
        category: 'DEV - GENERATEURS', 
        description: 'Génère des applications complètes à partir d\'une simple description en langage naturel.'
    },
    { 
        id: 'appinvento', 
        title: 'Appinvento', 
        url: 'https://www.appinvento.com/', 
        category: 'DEV - GENERATEURS', 
        description: 'Outil de création d\'applications no-code avec accès complet au code source.'
    },
    { 
        id: 'dhiwise', 
        title: 'DhiWise', 
        url: 'https://www.dhiwise.com/', 
        category: 'DEV - GENERATEURS', 
        description: 'Convertit les maquettes Figma en applications dynamiques Flutter et React.'
    },
    { 
        id: 'karbonsites', 
        title: 'Karbon Sites', 
        url: 'https://karbonsites.com/', 
        category: 'DEV - GENERATEURS', 
        description: 'Outil de création de sites web basé sur l\'IA qui génère du code frontend.'
    },
    { 
        id: 'base44', 
        title: 'Base44', 
        url: 'https://base44.com/', 
        category: 'DEV - GENERATEURS', 
        description: 'Créateur d\'applications et sites web no-code propulsé par l\'IA.'
    },
    { 
        id: 'rocketnew', 
        title: 'Rocket.new', 
        url: 'https://www.rocket.new/', 
        category: 'DEV - GENERATEURS', 
        description: 'Générateur d\'applications et d\'environnements de développement.'
    },

    // ==========================================
    // DEV - OUTILS & TERMINAL
    // ==========================================
    { 
        id: 'antigravity', 
        title: 'Antigravity', 
        url: 'https://antigravity.google/', 
        category: 'DEV - OUTILS', 
        description: 'IA et outils avancés.'
    },
    { 
        id: 'metalama', 
        title: 'Metalama', 
        url: 'https://www.postsharp.net/metalama', 
        category: 'DEV - OUTILS', 
        description: 'Génère du code standard C# à la volée lors de la compilation.'
    },
    { 
        id: 'verdent', 
        title: 'Verdent AI', 
        url: 'https://www.verdent.ai/fr', 
        category: 'DEV - OUTILS', 
        description: 'Solutions IA pour le développement.'
    },
    { 
        id: 'ollama', 
        title: 'Ollama', 
        url: 'https://ollama.com/', 
        category: 'DEV - OUTILS', 
        description: 'Faire tourner des LLMs localement.'
    },
    { 
        id: 'lmstudio', 
        title: 'LM Studio', 
        url: 'https://lmstudio.ai/', 
        icon: 'https://lmstudio.ai/favicon.ico',
        category: 'DEV - OUTILS', 
        description: 'Télécharger et exécuter des modèles IA en local sur votre PC.'
    },
    { 
        id: 'pinokio', 
        title: 'Pinokio', 
        url: 'https://pinokio.computer/', 
        icon: 'https://pinokio.computer/favicon.ico',
        category: 'DEV - OUTILS', 
        description: 'Installer et lancer des outils IA en un seul clic depuis votre bureau.'
    },

    { 
        id: 'warp', 
        title: 'Warp', 
        url: 'https://www.warp.dev', 
        category: 'DEV - OUTILS', 
        description: 'Terminal nouvelle génération avec IA.'
    },
    { 
        id: 'mintlify', 
        title: 'Mintlify', 
        url: 'https://mintlify.com', 
        category: 'DEV - OUTILS', 
        description: 'Génération de documentation IA.'
    },
    { 
        id: 'n8n', 
        title: 'n8n', 
        url: 'https://n8n.io/', 
        category: 'DEV - OUTILS', 
        description: 'Outil d\'automatisation de flux de travail (workflow) open-source pour développeurs.'
    },
    { 
        id: 'beanstalk', 
        title: 'Beanstalk', 
        url: 'https://beanstalkapp.com', 
        category: 'DEV - OUTILS', 
        description: 'Un flux de travail complet pour écrire, examiner et déployer du code.'
    },
    { 
        id: 'codacy', 
        title: 'Codacy', 
        url: 'https://www.codacy.com', 
        category: 'DEV - OUTILS', 
        description: 'Analyses de code automatisées pour de nombreux langages.'
    },
    { 
        id: 'codeac', 
        title: 'Codeac.io', 
        url: 'https://www.codeac.io', 
        category: 'DEV - OUTILS', 
        description: 'Outil automatisé d\'analyse d\'infrastructure en tant que code pour DevOps.'
    },
    { 
        id: 'codecov', 
        title: 'Codecov', 
        url: 'https://about.codecov.io', 
        category: 'DEV - OUTILS', 
        description: 'Outil de couverture de code (SaaS).'
    },
    { 
        id: 'codefactor', 
        title: 'CodeFactor', 
        url: 'https://www.codefactor.io', 
        category: 'DEV - OUTILS', 
        description: 'Analyse de code automatisée pour Git.'
    },
    { 
        id: 'coderabbit', 
        title: 'CodeRabbit', 
        url: 'https://coderabbit.ai', 
        category: 'DEV - OUTILS', 
        description: 'Outil de revue de code basé sur l\'IA et intégré à GitHub/GitLab.'
    },
    { 
        id: 'codspeed', 
        title: 'CodSpeed', 
        url: 'https://codspeed.io', 
        category: 'DEV - OUTILS', 
        description: 'Automatisez le suivi des performances dans vos pipelines CI.'
    },
    { 
        id: 'coveralls', 
        title: 'Coveralls', 
        url: 'https://coveralls.io', 
        category: 'DEV - OUTILS', 
        description: 'Afficher les rapports de couverture de test.'
    },
    { 
        id: 'deepscan', 
        title: 'DeepScan', 
        url: 'https://deepscan.io', 
        category: 'DEV - OUTILS', 
        description: 'Analyse statique avancée pour la détection automatique des erreurs JavaScript.'
    },
    { 
        id: 'deepsource', 
        title: 'DeepSource', 
        url: 'https://deepsource.com', 
        category: 'DEV - OUTILS', 
        description: 'Analyse en continu les modifications du code source.'
    },
    { 
        id: 'difftext', 
        title: 'DiffText', 
        url: 'https://difftext.com', 
        category: 'DEV - OUTILS', 
        description: 'Trouvez instantanément les différences entre deux blocs de code.'
    },
    { 
        id: 'eversql', 
        title: 'EverSQL', 
        url: 'https://www.eversql.com', 
        category: 'DEV - OUTILS', 
        description: 'La plateforme nÂ° 1 pour l\'optimisation des bases de données SQL.'
    },
    { 
        id: 'gerrithub', 
        title: 'GerritHub', 
        url: 'https://gerrithub.io', 
        category: 'DEV - OUTILS', 
        description: 'Analyse de code Gerrit gratuite pour les dépôts GitHub.'
    },
    { 
        id: 'goreportcard', 
        title: 'Go Report Card', 
        url: 'https://goreportcard.com', 
        category: 'DEV - OUTILS', 
        description: 'Qualité du code pour les projets Go.'
    },
    { 
        id: 'gtmetrix', 
        title: 'GTmetrix', 
        url: 'https://gtmetrix.com', 
        category: 'DEV - OUTILS', 
        description: 'Rapports et recommandations détaillées pour optimiser les sites web.'
    },
    { 
        id: 'holistic', 
        title: 'Holistic.dev', 
        url: 'https://holistic.dev', 
        category: 'DEV - OUTILS', 
        description: 'Analyseur de code statique pour l\'optimisation PostgreSQL.'
    },
    { 
        id: 'houndci', 
        title: 'HoundCI', 
        url: 'https://houndci.com', 
        category: 'DEV - OUTILS', 
        description: 'Commentaires gratuits sur la qualité du code source pour GitHub.'
    },
    { 
        id: 'reviewable', 
        title: 'Reviewable', 
        url: 'https://reviewable.io', 
        category: 'DEV - OUTILS', 
        description: 'Analyse de code pour les dépôts GitHub.'
    },
    { 
        id: 'coverity', 
        title: 'Coverity Scan', 
        url: 'https://scan.coverity.com', 
        category: 'DEV - OUTILS', 
        description: 'Analyse statique de code pour plusieurs langages.'
    },
    { 
        id: 'scrutinizer', 
        title: 'Scrutinizer', 
        url: 'https://scrutinizer-ci.com', 
        category: 'DEV - OUTILS', 
        description: 'Plateforme d\'inspection continue de code.'
    },
    { 
        id: 'semanticdiff', 
        title: 'SemanticDiff', 
        url: 'https://semanticdiff.com', 
        category: 'DEV - OUTILS', 
        description: 'Comparateur de langages de programmation pour les PR GitHub.'
    },
    { 
        id: 'shields', 
        title: 'Shields.io', 
        url: 'https://shields.io', 
        category: 'DEV - OUTILS', 
        description: 'Badges de métadonnées de qualité pour les projets open source.'
    },
    { 
        id: 'sonarcloud', 
        title: 'SonarCloud', 
        url: 'https://sonarcloud.io', 
        category: 'DEV - OUTILS', 
        description: 'Analyse automatisée du code source pour de multiples langages.'
    },

    // ==========================================
    // DEV - RESSOURCES
    // ==========================================
    { 
        id: 'github', 
        title: 'GitHub', 
        url: 'https://github.com', 
        category: 'DEV - RESSOURCES', 
        description: 'Plateforme collaborative.'
    },
    { 
        id: 'mdn', 
        title: 'MDN Web Docs', 
        url: 'https://developer.mozilla.org', 
        category: 'DEV - RESSOURCES', 
        description: 'Documentation web de référence.'
    },
    { 
        id: 'freefordev', 
        title: 'Free For Dev', 
        url: 'https://free-for.dev/#/', 
        category: 'DEV - RESSOURCES', 
        description: 'Annuaire de ressources gratuites.'
    },
    { 
        id: 'vercel', 
        title: 'Vercel', 
        url: 'https://vercel.com', 
        category: 'DEV - RESSOURCES', 
        description: 'Hébergement ultra-rapide.'
    },

    // ==========================================
    // DIVERS
    // ==========================================
    { 
        id: 'radiogarden', 
        title: 'Radio Garden', 
        url: 'https://radio.garden/?hl=fr', 
        category: 'DIVERS', 
        description: 'Écoutez des radios du monde entier sur un globe interactif.'
    },
    { 
        id: 'pdfmaster', 
        title: 'PDF Master', 
        url: 'https://pdf-master-v3.vercel.app/', 
        icon: 'https://pdf-master-v3.vercel.app/favicon.ico',
        category: 'DIVERS', 
        description: 'Outils et gestion de fichiers PDF.'
    },
    { 
        id: 'royout', 
        title: 'Royout', 
        url: 'https://royout.vercel.app/', 
        icon: 'https://royout.vercel.app/favicon.ico',
        category: 'DIVERS', 
        description: 'Application web diverses.'
    },
    { 
        id: 'royalscript', 
        title: 'Royal Script', 
        url: 'https://royal-script-windows.vercel.app/', 
        icon: 'https://royal-script-windows.vercel.app/favicon.ico',
        category: 'DIVERS', 
        description: 'Ressources et scripts pour Windows.'
    },
    { 
        id: 'cpasbien', 
        title: 'C\'est Pas Bien', 
        url: 'https://cpasbien.win/', 
        category: 'DIVERS', 
        description: 'Streaming et téléchargement de films/séries.'
    },
    { 
        id: 'filecr', 
        title: 'FileCR', 
        url: 'https://filecr.com/home/', 
        category: 'DIVERS', 
        description: 'Téléchargement de logiciels et fichiers.'
    },
    { 
        id: 'whitescreen', 
        title: 'White Screen', 
        url: 'https://www.whitescreen.online/', 
        category: 'DIVERS', 
        description: 'Écran blanc en ligne, utile pour nettoyer l\'écran.'
    },

    // ==========================================
    // OFFICES
    // ==========================================
    { 
        id: 'massgrave', 
        title: 'MassGrave', 
        url: 'https://massgrave.dev/', 
        category: 'OFFICES', 
        description: 'Activation Windows & Office (Microsoft Activation Scripts).'
    },
    { 
        id: 'malekal', 
        title: 'Malekal', 
        url: 'https://www.malekal.com/', 
        category: 'WINDOWS', 
        description: 'Tutoriels Windows, sécurité informatique et logiciels.'
    },

    // ==========================================
    // COURS & FORMATIONS
    // ==========================================
    { 
        id: 'openclassrooms', 
        title: 'OpenClassrooms', 
        url: 'https://openclassrooms.com/fr/', 
        category: 'FORMATION - DEV', 
        description: 'Plateforme de cours en ligne et formations diplômantes.'
    },
    { 
        id: 'cursa', 
        title: 'Cursa', 
        url: 'https://cursa.app/fr', 
        category: 'FORMATION - DEV', 
        description: 'Cours gratuits en ligne dans de nombreux domaines.'
    },
    { 
        id: 'coursera', 
        title: 'Coursera', 
        url: 'https://www.coursera.org/', 
        category: 'FORMATION - DEV', 
        description: 'Formations certifiantes avec les meilleures universités.'
    },
    { 
        id: 'mindluster', 
        title: 'Mindluster', 
        url: 'https://www.mindluster.com/', 
        category: 'FORMATION - DEV', 
        description: 'Milliers de cours gratuits en ligne.'
    },
    { 
        id: 'khanacademy', 
        title: 'Khan Academy', 
        url: 'https://fr.khanacademy.org/', 
        category: 'FORMATION - DEV', 
        description: 'Cours gratuits en maths, sciences et bien plus.'
    },
    { 
        id: 'udemy', 
        title: 'Udemy', 
        url: 'https://www.udemy.com/', 
        category: 'FORMATION - DEV', 
        description: 'Des milliers de cours en ligne (promos fréquentes).'
    },
    { 
        id: 'youtube', 
        title: 'YouTube', 
        url: 'https://www.youtube.com/', 
        category: 'FORMATION - DEV', 
        description: 'La plus grande bibliothèque de tutoriels vidéo.'
    },
    { 
        id: 'grafikart-cours', 
        title: 'Grafikart', 
        url: 'https://grafikart.fr/', 
        category: 'FORMATION - DEV', 
        description: 'Tutoriels développement web et design en français.'
    },
    { 
        id: 'loecsen', 
        title: 'Loecsen', 
        url: 'https://www.loecsen.com/fr', 
        icon: 'https://www.loecsen.com/favicon.ico',
        category: 'FORMATION - DEV', 
        description: 'Apprendre les langues gratuitement avec audio et vocabulaire.'
    },
    { 
        id: 'googlescholar', 
        title: 'Google Scholar', 
        url: 'https://scholar.google.com/', 
        icon: 'https://scholar.google.com/favicon.ico',
        category: 'FORMATION - DEV', 
        description: 'Moteur de recherche d\'articles académiques et scientifiques.'
    },
    { 
        id: 'ratatype', 
        title: 'Ratatype', 
        url: 'https://www.ratatype.com/fr/', 
        icon: 'https://www.ratatype.com/favicon.ico',
        category: 'FORMATION - DEV', 
        description: 'Apprendre à taper au clavier rapidement avec des exercices en ligne.'
    },
    { 
        id: 'scratch', 
        title: 'Scratch', 
        url: 'https://scratch.mit.edu/', 
        icon: 'https://scratch.mit.edu/favicon.ico',
        category: 'FORMATION - DEV', 
        description: 'Programmer en mode visuel, idéal pour les débutants et enfants (MIT).'
    },
    { 
        id: 'codeorg', 
        title: 'Code.org', 
        url: 'https://code.org/fr', 
        icon: 'https://t2.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://code.org&size=64',
        category: 'FORMATION - DEV', 
        description: 'Apprendre la programmation gratuitement, pour tous les niveaux.'
    },
    { 
        id: 'codedex', 
        title: 'Codedex', 
        url: 'https://www.codedex.io/courses', 
        icon: 'https://t2.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://www.codedex.io&size=64',
        category: 'FORMATION - DEV', 
        description: 'Apprendre à coder de façon fun et interactive avec des projets concrets.'
    },

    // ==========================================
    // WINDOWS
    // ==========================================
    { 
        id: 'everything', 
        title: 'Everything', 
        url: 'https://www.voidtools.com/', 
        category: 'WINDOWS', 
        description: 'Recherche de fichiers ultra-rapide sur Windows.'
    },
    { 
        id: 'ninite', 
        title: 'Ninite', 
        url: 'https://ninite.com/', 
        category: 'WINDOWS', 
        description: 'Installer plusieurs logiciels Windows d\'un seul coup.'
    },
    { 
        id: 'sysinternals', 
        title: 'Sysinternals', 
        url: 'https://learn.microsoft.com/fr-fr/sysinternals/', 
        category: 'WINDOWS', 
        description: 'Outils avancés Microsoft pour diagnostiquer Windows.'
    },

    // ==========================================
    // OFFICES
    // ==========================================
    { 
        id: 'googledocs', 
        title: 'Google Docs', 
        url: 'https://docs.google.com/', 
        category: 'OFFICES', 
        description: 'Suite bureautique Google gratuite en ligne.'
    },
    { 
        id: 'onlyoffice', 
        title: 'OnlyOffice', 
        url: 'https://www.onlyoffice.com/fr/', 
        category: 'OFFICES', 
        description: 'Alternative Open Source à Microsoft Office.'
    },
    { 
        id: 'canva', 
        title: 'Canva', 
        url: 'https://www.canva.com/', 
        category: 'OFFICES', 
        description: 'Création graphique, présentations et design.'
    },
    { 
        id: 'libreoffice', 
        title: 'LibreOffice', 
        url: 'https://fr.libreoffice.org/', 
        category: 'OFFICES', 
        description: 'Suite Office 100% gratuite et open source.'
    },

    // ==========================================
    // LINUX
    // ==========================================
    { 
        id: 'ubuntu', 
        title: 'Ubuntu', 
        url: 'https://ubuntu.com/', 
        category: 'LINUX', 
        description: 'La distribution Linux la plus populaire.'
    },
    { 
        id: 'linuxize', 
        title: 'Linuxize', 
        url: 'https://linuxize.com/', 
        category: 'LINUX', 
        description: 'Tutoriels Linux clairs et détaillés.'
    },
    { 
        id: 'distrowatch', 
        title: 'DistroWatch', 
        url: 'https://distrowatch.com/', 
        category: 'LINUX', 
        description: 'Actualités et classements des distributions Linux.'
    },
    { 
        id: 'explainshell', 
        title: 'ExplainShell', 
        url: 'https://explainshell.com/', 
        category: 'LINUX', 
        description: 'Explique chaque partie d\'une commande bash.'
    },
    { 
        id: 'linuxorg', 
        title: 'Linux.org', 
        url: 'https://www.linux.org/', 
        category: 'LINUX', 
        description: 'Portail officiel de la communauté Linux.'
    },
    { 
        id: 'tails', 
        title: 'Tails', 
        url: 'https://tails.net/', 
        icon: 'https://tails.net/favicon.ico',
        category: 'LINUX', 
        description: 'Système Linux portable axé sur la vie privée et l\'anonymat.'
    },
    { 
        id: 'parrot', 
        title: 'Parrot OS', 
        url: 'https://parrotsec.org/', 
        category: 'LINUX', 
        description: 'Système d\'exploitation axé sur la sécurité.'
    },

    // ==========================================
    // TUTOS
    // ==========================================
    { 
        id: 'thecodingtrain', 
        title: 'The Coding Train', 
        url: 'https://thecodingtrain.com/', 
        category: 'TUTOS', 
        description: 'Coding créatif, fun et accessible.'
    },
    { 
        id: 'csstricks', 
        title: 'CSS-Tricks', 
        url: 'https://css-tricks.com/', 
        category: 'TUTOS', 
        description: 'Astuces CSS et développement web.'
    },
    { 
        id: 'w3schools', 
        title: 'W3Schools', 
        url: 'https://www.w3schools.com/', 
        category: 'TUTOS', 
        description: 'Référence interactive pour apprendre le web.'
    },
    { 
        id: 'grafikart-tutos', 
        title: 'Grafikart Tutos', 
        url: 'https://grafikart.fr/tutoriels', 
        category: 'TUTOS', 
        description: 'Tutoriels dev/design en français.'
    },
    { 
        id: 'pcbx', 
        title: 'PCBX Community', 
        url: 'https://www.pcbx.com/community', 
        category: 'TUTOS', 
        description: 'Communauté et tutoriels PCBX.'
    },

    // ==========================================
    // DIVERS (nouveaux)
    // ==========================================
    { 
        id: 'deepl', 
        title: 'DeepL', 
        url: 'https://www.deepl.com/fr/translator', 
        category: 'DIVERS', 
        description: 'Le meilleur traducteur en ligne basé sur l\'IA.'
    },
    { 
        id: 'tempmail', 
        title: 'Temp Mail', 
        url: 'https://temp-mail.org/fr/', 
        category: 'DIVERS', 
        description: 'Adresse email temporaire et jetable.'
    },
    { 
        id: 'wetransfer', 
        title: 'WeTransfer', 
        url: 'https://wetransfer.com/', 
        category: 'DIVERS', 
        description: 'Envoi de gros fichiers simplement.'
    },
    { 
        id: 'archive', 
        title: 'Archive.org', 
        url: 'https://archive.org/', 
        category: 'DIVERS', 
        description: 'La machine à remonter le temps du web.'
    },
    { 
        id: 'pranxhacker', 
        title: 'Hacker Typer', 
        url: 'https://pranx.com/hacker/simulateur/', 
        icon: 'https://pranx.com/favicon.ico',
        category: 'DIVERS', 
        description: 'Simulateur d\'écran de hacker pour impressionner vos amis.'
    },
    { id: 'binshare', title: 'BinShare.net', url: 'https://binshare.net', category: 'DIVERS', description: 'Créez et partagez du code ou des fichiers binaires sous forme d\'image ou de lien.' },
    { id: 'blynk', title: 'Blynk', url: 'https://blynk.io', category: 'DIVERS', description: 'SaaS avec API pour contrôler, créer et évaluer des objets connectés (IoT).' },
    { id: 'cronjoborg', title: 'cron-job.org', url: 'https://cron-job.org', category: 'DIVERS', description: 'Service de tâches cron en ligne. Nombre de tâches illimité et gratuit.' },
    { id: 'cronhooks', title: 'Cronhooks', url: 'https://cronhooks.io', category: 'DIVERS', description: 'Programmez des webhooks ponctuels ou récurrents.' },
    { id: 'datelist', title: 'datelist.io', url: 'https://datelist.io', category: 'DIVERS', description: 'Système de réservation en ligne / de prise de rendez-vous.' },
    { id: 'fossa', title: 'FOSSA', url: 'https://fossa.com', category: 'DIVERS', description: 'Gestion de code tiers, de la conformité des licences et des vulnérabilités.' },
    { id: 'hookrelay', title: 'Hook Relay', url: 'https://hookrelay.dev', category: 'DIVERS', description: 'Intégrez la prise en charge des webhooks avec files d\'attente et tentatives.' },
    { id: 'hostingchecker', title: 'Vérificateur d\'hébergement', url: 'https://hostingchecker.com', category: 'DIVERS', description: 'Consultez les informations d\'hébergement, FAI, localisation, etc.' },
    { id: 'newreleases', title: 'newreleases.io', url: 'https://newreleases.io', category: 'DIVERS', description: 'Notifications pour les nouvelles versions GitHub, NPM, PyPI, Docker Hub...' },
    { id: 'pdfmonkey', title: 'PDFMonkey', url: 'https://pdfmonkey.io', category: 'DIVERS', description: 'Gérez vos modèles PDF, utilisez une API avec données dynamiques.' },
    { id: 'pika', title: 'Pika (Captures de code)', url: 'https://pika.style', category: 'DIVERS', description: 'Créez de superbes captures d\'écran de code personnalisables.' },
    { id: 'quicktype', title: 'QuickType.io', url: 'https://quicktype.io', category: 'DIVERS', description: 'Générez des modèles et types à partir de JSON, schémas et GraphQL.' },
    { id: 'readme', title: 'readme.com', url: 'https://readme.com', category: 'DIVERS', description: 'Documentation claire et facile à utiliser, gratuite pour l\'open source.' },
    { id: 'redirectpizza', title: 'redirect.pizza', url: 'https://redirect.pizza', category: 'DIVERS', description: 'Gérez facilement vos redirections avec prise en charge HTTPS.' },
    { id: 'redirectionio', title: 'redirection.io', url: 'https://redirection.io', category: 'DIVERS', description: 'Outil SaaS de gestion des redirections HTTP (marketing/référencement).' },
    { id: 'redirs', title: 'redirs.com', url: 'https://redirs.com', category: 'DIVERS', description: 'Redirections de domaine simplifiées avec SSL automatique.' },
    { id: 'redirhub', title: 'RedirHub', url: 'https://redirhub.com', category: 'DIVERS', description: 'Infrastructure de redirection d\'URL avec API, réseau périphérique et HTTPS.' },
    { id: 'reqbin', title: 'ReqBin', url: 'https://reqbin.com', category: 'DIVERS', description: 'Envoyez des requêtes HTTP en ligne (GET, POST, PUT, DELETE, HEAD).' },
    { id: 'smartcar', title: 'API Smartcar', url: 'https://smartcar.com', category: 'DIVERS', description: 'API pour les voitures connectées (localisation, niveau de carburant, etc.).' },
    { id: 'sunrisesunset', title: 'Lever et coucher du soleil', url: 'https://sunrise-sunset.org/api', category: 'DIVERS', description: 'Obtenez les heures de lever/coucher du soleil par géolocalisation.' },
    { id: 'superfeedr', title: 'superfeedr.com', url: 'https://superfeedr.com', category: 'DIVERS', description: 'Flux RSS compatibles PubSubHubbub en temps réel.' },
    { id: 'surveymonkey', title: 'SurveyMonkey', url: 'https://surveymonkey.com', category: 'DIVERS', description: 'Créez et analysez des sondages en ligne.' },
    { id: 'synchronisation', title: 'SYNCHRONISATION', url: 'https://syncthemcalendars.com', category: 'DIVERS', description: 'Synchronisation bidirectionnelle avec Google Agenda.' },
    { id: 'uuidgenerator', title: 'Générateur d\'UUID', url: 'https://www.uuidgenerator.net', category: 'DIVERS', description: 'Générez instantanément des UUID (v1, v4, v7), GUID, NanoID, ULID...' },
    { id: 'versionfeeds', title: 'Versionfeeds', url: 'https://versionfeeds.com', category: 'DIVERS', description: 'Flux RSS personnalisés pour les mises à jour de vos logiciels préférés.' },

    // ==========================================
    // CYBERSÉCURITÉ
    // ==========================================
    { 
        id: 'osint4all', 
        title: 'OSINT4ALL', 
        url: 'https://start.me/p/L1rEYQ/osint4all', 
        icon: 'https://start.me/favicon.ico',
        category: 'CYBERSÉCURITÉ', 
        description: 'Boîte à outils OSINT complète pour la recherche et l\'investigation en ligne.'
    },
    { 
        id: 'fingerprint', 
        title: 'Fingerprint.to', 
        url: 'https://fingerprint.to/', 
        icon: 'https://fingerprint.to/favicon.ico',
        category: 'CYBERSÉCURITÉ', 
        description: 'Analyse votre empreinte numérique (navigateur, IP, OS) pour tester votre anonymat.'
    },
    { 
        id: 'osintframework', 
        title: 'OSINT Framework', 
        url: 'https://osintframework.com/', 
        icon: 'https://osintframework.com/favicon.ico',
        category: 'CYBERSÉCURITÉ', 
        description: 'Arbre visuel de tous les outils OSINT classés par catégorie.'
    },
    { 
        id: 'fakenamegenerator', 
        title: 'Fake Name Generator', 
        url: 'https://www.fakenamegenerator.com/', 
        icon: 'https://t2.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://www.fakenamegenerator.com&size=64',
        category: 'CYBERSÉCURITÉ', 
        description: 'Génère des identités fictives complètes (nom, adresse, numéro de téléphone, etc.) pour protéger votre vie privée.'
    },

    // ==========================================
    // API
    // ==========================================
    { id: 'abstractapi', title: 'Abstract API', url: 'https://www.abstractapi.com', category: 'API', description: 'Suite d\'API pour divers cas d\'utilisation, notamment la géolocalisation IP et la validation d\'emails.' },
    { id: 'alphaai', title: 'AlphaAI', url: 'https://www.alphaai.biz', category: 'API', description: 'Serveur API et MCP d\'actualités financières avec analyse d\'impact.' },
    { id: 'anyhook', title: 'AnyHook', url: 'https://anyhook.com', category: 'API', description: 'Relais de webhooks entrants avec stockage, reconnexion et journalisation.' },
    { id: 'apify', title: 'Apify', url: 'https://apify.com', category: 'API', description: 'Plateforme d\'extraction et d\'automatisation de données web.' },
    { id: 'apitemplate', title: 'APITemplate.io', url: 'https://apitemplate.io', category: 'API', description: 'Générez automatiquement des images et des documents PDF via une API.' },
    { id: 'apiverve', title: 'APIVerve', url: 'https://apiverve.com', category: 'API', description: 'Accédez instantanément et gratuitement à plus de 120 API.' },
    { id: 'arize', title: 'Arize AI', url: 'https://arize.com', category: 'API', description: 'Observabilité du machine learning pour la surveillance des modèles.' },
    { id: 'beeceptor', title: 'Beeceptor', url: 'https://beeceptor.com', category: 'API', description: 'Plateforme cloud sans code pour simuler et déboguer des API.' },
    { id: 'bigdatacloud', title: 'BigDataCloud', url: 'https://www.bigdatacloud.com', category: 'API', description: 'API rapides et précises (géolocalisation IP, validation d\'emails).' },
    { id: 'bravesearch', title: 'Brave Search API', url: 'https://brave.com/search/api', category: 'API', description: 'API de recherche web, d\'actualités et IA pour agents et RAG.' },
    { id: 'browseai', title: 'Browse AI', url: 'https://browse.ai', category: 'API', description: 'Extraction et surveillance de données sur le web.' },
    { id: 'calendarific', title: 'Calendarific', url: 'https://calendarific.com', category: 'API', description: 'Service API de gestion des jours fériés pour plus de 200 pays.' },
    { id: 'canopy', title: 'Canopy', url: 'https://canopyapi.co', category: 'API', description: 'API GraphQL pour les données produits d\'Amazon.' },
    { id: 'carapi', title: 'CarAPI.dev', url: 'https://carapi.dev', category: 'API', description: 'API de données automobiles avec décodage VIN et plus.' },
    { id: 'catchdoms', title: 'CatchDoms', url: 'https://catchdoms.com', category: 'API', description: 'Agrégateur de noms de domaine expirés avec API REST.' },
    { id: 'cloudmersive', title: 'Cloudmersive', url: 'https://cloudmersive.com', category: 'API', description: 'Plateforme API utilitaire (conversion de documents, antivirus, etc.).' },
    { id: 'colaboratory', title: 'Colaboratory', url: 'https://colab.research.google.com', category: 'API', description: 'Environnement de notebook Python gratuit basé sur le Web avec GPU.' },
    { id: 'cometml', title: 'CometML', url: 'https://www.comet.ml', category: 'API', description: 'Plateforme MLOps pour le suivi des expériences de machine learning.' },
    { id: 'commercelayer', title: 'Commerce Layer', url: 'https://commercelayer.io', category: 'API', description: 'API e-commerce modulaire pour gérer des commandes.' },
    { id: 'composio', title: 'Composio', url: 'https://composio.dev', category: 'API', description: 'Plateforme d\'intégration pour agents IA et LLM (200+ outils).' },
    { id: 'convertio', title: 'Outils de conversion', url: 'https://convertio.co/api/', category: 'API', description: 'API de conversion pour documents, images, vidéos et audio.' },
    { id: 'countrystatecity', title: 'Pays-État-Ville', url: 'https://countrystatecity.in', category: 'API', description: 'API fournissant des informations géographiques mondiales.' },
    { id: 'coupler', title: 'Coupler.io', url: 'https://www.coupler.io', category: 'API', description: 'Outil d\'intégration de données pour synchroniser des applications.' },
    { id: 'craftmypdf', title: 'CraftMyPDF', url: 'https://craftmypdf.com', category: 'API', description: 'Générez des documents PDF à partir de modèles réutilisables.' },
    { id: 'cube', title: 'Cube', url: 'https://cube.dev', category: 'API', description: 'Accéder aux données stockées dans des bases de données modernes.' },
    { id: 'curlhub', title: 'CurlHub', url: 'https://curlhub.io', category: 'API', description: 'Service proxy pour l\'inspection et le débogage des appels d\'API.' },
    { id: 'currencyscoop', title: 'CurrencyScoop', url: 'https://currencyscoop.com', category: 'API', description: 'API de données de change en temps réel pour la fintech.' },
    { id: 'customjs', title: 'CustomJS', url: 'https://customjs.space', category: 'API', description: 'API de conversion HTML vers PDF ou édition de PDF.' },
    { id: 'datafetcher', title: 'Récupérateur de données', url: 'https://datafetcher.com', category: 'API', description: 'Exécutez des requêtes API sans code depuis Airtable.' },
    { id: 'dataminer', title: 'Data Miner', url: 'https://dataminer.io', category: 'API', description: 'Extension pour extraire des données web au format CSV.' },
    { id: 'dataimporter', title: 'Dataimporter.io', url: 'https://www.dataimporter.io', category: 'API', description: 'Connecter, nettoyer et importer des données dans Salesforce.' },
    { id: 'datalore', title: 'Datalore', url: 'https://datalore.jetbrains.com', category: 'API', description: 'Notebooks Python dans le cloud par JetBrains.' },
    { id: 'dbdesigner', title: 'DB Designer', url: 'https://www.dbdesigner.net', category: 'API', description: 'Conception et modélisation de schémas de bases de données.' },
    { id: 'dbip', title: 'DB-IP', url: 'https://db-ip.com', category: 'API', description: 'API de géolocalisation IP.' },
    { id: 'deepar', title: 'DeepAR', url: 'https://www.deepar.ai', category: 'API', description: 'Filtres faciaux de réalité augmentée via SDK.' },
    { id: 'deepnote', title: 'Deepnote', url: 'https://deepnote.com', category: 'API', description: 'Notebook collaboratif pour la science des données.' },
    { id: 'comparejson', title: 'Compare JSON', url: 'https://comparejson.com', category: 'API', description: 'Outil pour comparer les différences entre deux structures JSON.' },
    { id: 'diseasesh', title: 'Disease.sh', url: 'https://disease.sh', category: 'API', description: 'API fournissant des données liées à la Covid-19.' },
    { id: 'doczilla', title: 'Doczilla', url: 'https://doczilla.app', category: 'API', description: 'API SaaS pour générer des PDF et captures d\'écran via HTML/CSS.' },
    { id: 'doppio', title: 'Doppio', url: 'https://doppio.sh', category: 'API', description: 'Générez des PDF et captures d\'écran avec rendu privé.' },
    { id: 'docpenny', title: 'DocPenny', url: 'https://docpenny.com', category: 'API', description: 'Génération de HTML vers PDF avec modèles.' },
    { id: 'doqlo', title: 'Doqlo', url: 'https://doqlo.com', category: 'API', description: 'Remplissage en masse de formulaires PDF via CSV ou API.' },
    { id: 'drawdb', title: 'drawDB', url: 'https://www.drawdb.app', category: 'API', description: 'Éditeur gratuit de diagrammes de bases de données en ligne.' },
    { id: 'dynamicdocs', title: 'DynamicDocs', url: 'https://dynamicdocs.co', category: 'API', description: 'API JSON vers PDF utilisant des modèles LaTeX.' },
    { id: 'finnhub', title: 'Flux de résultats SEC', url: 'https://finnhub.io', category: 'API', description: 'API en temps réel des déclarations SEC et participations.' },
    { id: 'exportsdk', title: 'Export SDK', url: 'https://exportsdk.com', category: 'API', description: 'API de génération de PDF avec éditeur visuel.' },
    { id: 'extendsclass', title: 'ExtendsClass', url: 'https://extendsclass.com', category: 'API', description: 'Client HTTP web gratuit pour requêtes REST.' },
    { id: 'fmp', title: 'Données financières', url: 'https://financialmodelingprep.com', category: 'API', description: 'API de données boursières et financières.' },
    { id: 'firecrawl', title: 'Firecrawl', url: 'https://www.firecrawl.dev', category: 'API', description: 'Conversion de sites web en données structurées et Markdown pour LLM.' },
    { id: 'formatjson', title: 'FormatJSONOnline', url: 'https://formatjsononline.com', category: 'API', description: 'Outil pour formater, valider et minifier des données JSON.' },
    { id: 'fraudlabs', title: 'FraudLabs Pro', url: 'https://www.fraudlabspro.com', category: 'API', description: 'API de détection de fraudes pour les transactions bancaires.' },
    { id: 'freeipapi', title: 'FreeIPAPI', url: 'https://freeipapi.com', category: 'API', description: 'API de géolocalisation IP rapide et fiable.' },
    { id: 'geolocated', title: 'Geolocated.io', url: 'https://geolocated.io', category: 'API', description: 'API de géolocalisation IP répartie mondialement.' },
    { id: 'hextech', title: 'Hex', url: 'https://hex.tech', category: 'API', description: 'Plateforme de données pour notebooks et bibliothèques de connaissances.' },
    { id: 'hook0', title: 'Hook0', url: 'https://hook0.com', category: 'API', description: 'Service de webhooks open source (WaaS).' },
    { id: 'hoppscotch', title: 'Hoppscotch', url: 'https://hoppscotch.io', category: 'API', description: 'Générateur de requêtes API et client REST ultra-rapide.' },
    { id: 'hsping', title: 'HS Ping', url: 'https://hsping.com', category: 'API', description: 'API de recherche de codes douaniers HS et HTS.' },
    { id: 'huggingface', title: 'Hugging Face', url: 'https://huggingface.co', category: 'API', description: 'API et plateforme de modèles NLP.' },
    { id: 'insomnia', title: 'Insomnia', url: 'https://insomnia.rest', category: 'API', description: 'Client API open source pour REST et GraphQL.' },
    { id: 'inngest', title: 'Inngest', url: 'https://www.inngest.com', category: 'API', description: 'Exécution durable et flux de travail événementiels.' },
    { id: 'invantive', title: 'Invantive Cloud', url: 'https://cloud.invantive.com', category: 'API', description: 'Accès OData/SQL à plus de 70 plateformes cloud.' },
    { id: 'ipwhois', title: 'ipwho.org', url: 'https://ipwhois.io', category: 'API', description: 'API de géolocalisation IP (2000 requêtes/jour).' },
    { id: 'abstractip', title: 'Abstract GeoIP', url: 'https://www.abstractapi.com/ip-geolocation-api', category: 'API', description: 'API de géolocalisation d\'Abstract.' },
    { id: 'ipgeolocation', title: 'IP Geolocation', url: 'https://ipgeolocation.io', category: 'API', description: 'API de géolocalisation IP.' },
    { id: 'ipapi', title: 'ip-api', url: 'https://ip-api.com', category: 'API', description: 'Géolocalisation IP sans clé.' },
    { id: 'ipcity', title: 'IP.City', url: 'https://ip.city', category: 'API', description: 'Géolocalisation IP.' },
    { id: 'ip2location', title: 'IP2Location.io', url: 'https://www.ip2location.io', category: 'API', description: 'API de géolocalisation IP et WHOIS.' },
    { id: 'proxmint', title: 'Proxmint GeoIP', url: 'https://proxmint.com', category: 'API', description: 'API JSON gratuite IP vers pays/ville.' },
    { id: 'ip2geo', title: 'ip2geo.dev', url: 'https://ip2geo.dev', category: 'API', description: 'Convertit les adresses IP en données de localisation.' },
    { id: 'ipaddress', title: 'ipaddress.sh', url: 'https://ipaddress.sh', category: 'API', description: 'Obtenir son adresse IP publique.' },
    { id: 'ipapiis', title: 'ipapi.is', url: 'https://ipapi.is', category: 'API', description: 'API fiable d\'adresses IP et détection d\'hébergement.' },
    { id: 'ipapico', title: 'ipapi (Kloudend)', url: 'https://ipapi.co', category: 'API', description: 'Géolocalisation IP sur AWS.' },
    { id: 'ipbase', title: 'ipbase.com', url: 'https://ipbase.com', category: 'API', description: 'API de géolocalisation IP.' },
    { id: 'ipinfo', title: 'IPinfo', url: 'https://ipinfo.io', category: 'API', description: 'Données détaillées sur les adresses IP et opérateurs.' },
    { id: 'iplocate', title: 'IPLocate', url: 'https://www.iplocate.io', category: 'API', description: 'Géolocalisation IP et détection de VPN.' },
    { id: 'iptrace', title: 'IPTrace', url: 'https://iptrace.io', category: 'API', description: 'Données de géolocalisation IP fiables pour entreprises.' },
    { id: 'jsonip', title: 'JSON IP', url: 'https://jsonip.com', category: 'API', description: 'Renvoie l\'adresse IP publique du client en JSON.' },
    { id: 'jsontable', title: 'JSON vers tableau', url: 'https://json-to-table.com', category: 'API', description: 'Visualiser du JSON sous forme de tableau.' },
    { id: 'json2video', title: 'JSON2Video', url: 'https://json2video.com', category: 'API', description: 'API de montage vidéo programmatique.' },
    { id: 'jsongrid', title: 'JSONGrid', url: 'https://jsongrid.com', category: 'API', description: 'Visualiser et filtrer JSON en grille.' },
    { id: 'jsoning', title: 'JSONing', url: 'https://jsoning.com', category: 'API', description: 'Créer une fausse API REST personnalisable à partir d\'un JSON.' },
    { id: 'jsonswiss', title: 'JSONSwiss', url: 'https://jsonswiss.com', category: 'API', description: 'Outil de validation et réparation JSON par IA.' },
    { id: 'killbait', title: 'KillBait', url: 'https://killbait.com', category: 'API', description: 'API d\'évaluation de contenu et détection de clickbait.' },
    { id: 'kreya', title: 'Kreya', url: 'https://kreya.app', category: 'API', description: 'Client GUI gRPC gratuit.' },
    { id: 'loginllama', title: 'LoginLlama', url: 'https://loginllama.com', category: 'API', description: 'API de détection de connexions suspectes.' },
    { id: 'marketdata', title: 'API Données de marché', url: 'https://marketdata.app', category: 'API', description: 'Données financières en temps réel pour actions et options.' },
    { id: 'maxim', title: 'Maxim AI', url: 'https://getmaxim.ai', category: 'API', description: 'Plateforme d\'évaluation et d\'observabilité pour agents IA.' },
    { id: 'microlink', title: 'microlink.io', url: 'https://microlink.io', category: 'API', description: 'Transforme n\'importe quel site web en données : aperçus, extraction, captures. 50 requêtes/jour gratuites.' },
    { id: 'mockapi', title: 'MockAPI', url: 'https://mockapi.io', category: 'API', description: 'Création rapide de maquettes d\'API.' },
    { id: 'mockerito', title: 'Mockerito', url: 'https://mockerito.com', category: 'API', description: 'Service gratuit d\'API REST simulée.' },
    { id: 'mockfly', title: 'Mockfly', url: 'https://mockfly.dev', category: 'API', description: 'Simulation d\'API et gestion des fonctionnalités.' },
    { id: 'mocko', title: 'Mocko.dev', url: 'https://mocko.dev', category: 'API', description: 'Serveur proxy cloud pour le mock d\'API.' },
    { id: 'multiexitiptester', title: 'Vérificateur d\'IP multi-sortie', url: 'https://multiexitiptester.com', category: 'API', description: 'Tester son adresse IP depuis différents nœuds mondiaux.' },
    { id: 'nasdisks', title: 'NASdisks API', url: 'https://nasdisks.com', category: 'API', description: 'Spécifications et statistiques des disques durs/SSD.' },
    { id: 'newsapi', title: 'News API', url: 'https://newsapi.org', category: 'API', description: 'API d\'actualités mondiales.' },
    { id: 'numlookup', title: 'numlookupapi', url: 'https://numlookupapi.com', category: 'API', description: 'API de validation de numéros de téléphone.' },
    { id: 'ocrspace', title: 'OCR.Space', url: 'https://ocr.space', category: 'API', description: 'API d\'analyse de texte dans les images et PDF.' },
    { id: 'openapi3designer', title: 'OpenAPI3 Designer', url: 'https://openapi3designer.com', category: 'API', description: 'Conception visuelle d\'API OpenAPI 3.' },
    { id: 'parseur', title: 'Parseur', url: 'https://parseur.com', category: 'API', description: 'Analyseur de données IA pour PDF et emails.' },
    { id: 'pdfapi', title: 'PDF-API.io', url: 'https://pdf-api.io', category: 'API', description: 'API de création de PDF dynamique.' },
    { id: 'pdfbolt', title: 'PDFBolt', url: 'https://pdfbolt.com', category: 'API', description: 'Génération de PDF respectueuse de la vie privée.' },
    { id: 'pexafy', title: 'Pexafy', url: 'https://pexafy.com', category: 'API', description: 'API centralisée de recherche sémantique d\'images gratuites.' },
    { id: 'pixela', title: 'Pixela', url: 'https://pixe.la', category: 'API', description: 'Base de données API pour suivre vos habitudes en graphes.' },
    { id: 'posthook', title: 'Posthook', url: 'https://posthook.io', category: 'API', description: 'Planification et exécution de webhooks.' },
    { id: 'postman', title: 'Postman', url: 'https://www.postman.com', category: 'API', description: 'Plateforme collaborative pour le développement d\'API.' },
    { id: 'prefect', title: 'PrefectCloud', url: 'https://www.prefect.io', category: 'API', description: 'Automatisation des flux de données.' },
    { id: 'preset', title: 'Preset Cloud', url: 'https://preset.io', category: 'API', description: 'Service Apache Superset hébergé (Business Intelligence).' },
    { id: 'proxysentry', title: 'ProxySentry', url: 'https://proxysentry.io', category: 'API', description: 'API de détection de proxys et VPN.' },
    { id: 'reducto', title: 'Reducto', url: 'https://reducto.ai', category: 'API', description: 'Convertir des documents en JSON structuré.' },
    { id: 'rendi', title: 'Rendi', url: 'https://rendi.io', category: 'API', description: 'API REST pour FFmpeg.' },
    { id: 'requestbin', title: 'RequestBin', url: 'https://requestbin.com', category: 'API', description: 'Inspecter les requêtes HTTP et webhooks.' },
    { id: 'robohash', title: 'ROBOHASH', url: 'https://robohash.org', category: 'API', description: 'Génération d\'images originales à partir de texte.' },
    { id: 'scrapersproxy', title: 'Scraper\'s Proxy', url: 'https://scrapersproxy.com', category: 'API', description: 'Proxy HTTP pour le web scraping.' },
    { id: 'scrapingant', title: 'ScrapingAnt', url: 'https://scrapingant.com', category: 'API', description: 'API de scraping avec proxy résidentiels.' },
    { id: 'serpapi', title: 'SerpApi', url: 'https://serpapi.com', category: 'API', description: 'API d\'extraction de données de moteurs de recherche.' },
    { id: 'simplescraper', title: 'Simplescraper', url: 'https://simplescraper.io', category: 'API', description: 'Extraction de données web via webhooks.' },
    { id: 'geekflare', title: 'API Geekflare', url: 'https://api.geekflare.com', category: 'API', description: 'API multi-usages (screenshots, DNS, audits perf).' },
    { id: 'smartparse', title: 'SmartParse', url: 'https://smartparse.io', category: 'API', description: 'Conversion de CSV vers API.' },
    { id: 'sofodata', title: 'Sofodata', url: 'https://sofodata.com', category: 'API', description: 'Création rapide d\'API RESTful sécurisées depuis un fichier CSV.' },
    { id: 'sqlable', title: 'Sqlable', url: 'https://sqlable.com', category: 'API', description: 'Outils SQL (formateur, validateur, générateur de données).' },
    { id: 'svix', title: 'Svix', url: 'https://www.svix.com', category: 'API', description: 'Webhooks en tant que service.' },
    { id: 'tavily', title: 'Tavily AI', url: 'https://tavily.com', category: 'API', description: 'API de recherche IA pour l\'analyse rapide.' },
    { id: 'templatefox', title: 'TemplateFox', url: 'https://templatefox.com', category: 'API', description: 'API de génération de PDF via modèles.' },
    { id: 'tinymce', title: 'TinyMCE', url: 'https://www.tiny.cloud', category: 'API', description: 'API d\'édition de texte enrichi.' },
    { id: 'tomorrowio', title: 'Tomorrow.io API', url: 'https://www.tomorrow.io', category: 'API', description: 'Prévisions météorologiques hyperlocales.' },
    { id: 'treblle', title: 'Treblle', url: 'https://treblle.com', category: 'API', description: 'Déploiement, gestion, observabilité et documentation d\'API.' },
    { id: 'trophy', title: 'Trophy', url: 'https://trophy.app', category: 'API', description: 'API de gamification (points, classements, succès).' },
    { id: 'unirate', title: 'UniRateAPI', url: 'https://unirateapi.com', category: 'API', description: 'Taux de change en temps réel pour fiat et cryptos.' },
    { id: 'vatcheck', title: 'vatcheckapi', url: 'https://vatcheckapi.com', category: 'API', description: 'Validation de numéro de TVA simple.' },
    { id: 'vatnode', title: 'vatnode', url: 'https://vatnode.com', category: 'API', description: 'Validation de TVA intracommunautaire (système VIES).' },
    { id: 'weatherxu', title: 'WeatherXu', url: 'https://weatherxu.com', category: 'API', description: 'API de données météorologiques mondiales avec modèles IA.' },
    { id: 'webscrapingai', title: 'WebScraping.AI', url: 'https://webscraping.ai', category: 'API', description: 'API de web scraping avec rendu JS et proxy.' },
    { id: 'wandb', title: 'Weights & Biases', url: 'https://wandb.ai', category: 'API', description: 'Plateforme MLOps pour le suivi des modèles d\'IA.' },
    { id: 'whatismyip', title: 'What Is My IP', url: 'https://www.whatismyip.com', category: 'API', description: 'Vérifiez votre adresse IPv4 et IPv6 via API.' },
    { id: 'whatthediff', title: 'What The Diff', url: 'https://whatthediff.ai', category: 'API', description: 'Assistant de revue de code GitHub basé sur l\'IA.' },
    { id: 'xflux', title: 'XFlux', url: 'https://xflux.io', category: 'API', description: 'API REST X/Twitter.' },
    { id: 'wolfram', title: 'Wolfram', url: 'https://www.wolfram.com', category: 'API', description: 'Algorithmes intégrés basés sur la connaissance.' },
    { id: 'wrapapi', title: 'wrapapi', url: 'https://wrapapi.com', category: 'API', description: 'Transformez n\'importe quel site web en une API paramétrable.' },
    { id: 'zenscrape', title: 'Zenscrape', url: 'https://zenscrape.com', category: 'API', description: 'API de web scraping avec proxys résidentiels.' },
    { id: 'zipcodebase', title: 'Zipcodebase', url: 'https://zipcodebase.com', category: 'API', description: 'API mondiale de codes postaux.' },
    { id: 'zipcodeapi', title: 'Zipcodeapi', url: 'https://zipcodeapi.com', category: 'API', description: 'API REST pour codes postaux US/CA.' },
    { id: 'zipcodestack', title: 'Zipcodestack', url: 'https://zipcodestack.com', category: 'API', description: 'Vérification et validation de codes postaux.' },
    { id: 'zuplo', title: 'Zuplo', url: 'https://zuplo.com', category: 'API', description: 'Gestion d\'API en périphérie (Edge).' },
    { id: 'metashot', title: 'Metashot', url: 'https://metashot.com', category: 'API', description: 'API de génération d\'images Open Graph.' },
    { id: 'apiflash', title: 'ApiFlash', url: 'https://apiflash.com', category: 'API', description: 'API de capture d\'écran basée sur AWS Lambda et Chrome (page entière, timing, dimensions).' },
    { id: 'phantomjscloud', title: 'PhantomJsCloud', url: 'https://phantomjscloud.com', category: 'API', description: 'Automatisation du navigateur et rendu de pages (jusqu\'à 500 pages/jour gratuitement).' },
    { id: 'screenshotbase', title: 'screenshotbase.com', url: 'https://screenshotbase.com', category: 'API', description: '300 captures d\'écran gratuites par mois depuis n\'importe quelle URL.' },
    { id: 'screenshotlayer', title: 'screenshotlayer.com', url: 'https://screenshotlayer.com', category: 'API', description: 'Capturez des captures d\'écran hautement personnalisables (100 gratuites/mois).' },
    { id: 'screenshotmachine', title: 'screenshotmachine.com', url: 'https://screenshotmachine.com', category: 'API', description: 'Capturez 100 captures d\'écran par mois (png, gif, jpg), y compris des pages complètes.' },
    { id: 'screenshotscout', title: 'Screenshot Scout', url: 'https://screenshotscout.com', category: 'API', description: 'API de capture d\'écran pour développeurs (200 captures gratuites/mois à vie).' },
    { id: 'shotpipe', title: 'Shotpipe', url: 'https://shotpipe.com', category: 'API', description: 'API de capture d\'écran et d\'images Open Graph pour sites statiques (100 rendus/mois).' },
    { id: 'snapapi', title: 'SnapAPI', url: 'https://snapapi.io', category: 'API', description: 'API de capture d\'écran, d\'enregistrement vidéo, de génération de PDF et d\'extraction (200/mois).' },
    { id: 'thumbnailws', title: 'thumbnail.ws', url: 'https://thumbnail.ws', category: 'API', description: 'API permettant de générer des miniatures de sites web (1 000 requêtes gratuites/mois).' },
    { id: 'numverify', title: 'numverify', url: 'https://numverify.com', category: 'API', description: 'API JSON globale de validation et de recherche de numéros de téléphone (100 requêtes API/mois).' },
    { id: 'veriphone', title: 'Veriphone', url: 'https://veriphone.io', category: 'API', description: 'Vérification de numéros de téléphone à l\'échelle mondiale via une API JSON gratuite (1000 requêtes/mois).' },

    // ==========================================
    // JEUX
    // ==========================================
    { 
        id: 'ankergames', 
        title: 'Anker Games', 
        url: 'https://ankergames.net/', 
        category: 'JEUX - PC', 
        description: 'Jeux PC à télécharger.'
    },
    { 
        id: 'itchio', 
        title: 'Itch.io', 
        url: 'https://itch.io/', 
        category: 'JEUX - PC', 
        description: 'Plateforme de jeux indépendants.'
    },
    { 
        id: 'gog', 
        title: 'GOG (Good Old Games)', 
        url: 'https://www.gog.com/', 
        category: 'JEUX - PC', 
        description: 'Jeux sans DRM et classiques optimisés.'
    },
    { 
        id: 'freeroms', 
        title: 'FreeROMS', 
        url: 'https://www.freeroms.com/', 
        category: 'JEUX - RETRO', 
        description: 'ROMs de jeux pour émulateurs.'
    },
    { 
        id: 'arcadespace', 
        title: 'Arcade Space', 
        url: 'https://www.arcadespace.org/home', 
        category: 'JEUX - RETRO', 
        description: 'Jeux d\'arcade classiques.'
    },
    { 
        id: 'myabandonware', 
        title: 'My Abandonware', 
        url: 'https://www.myabandonware.com/', 
        category: 'JEUX - RETRO', 
        description: 'Téléchargement d\'anciens jeux PC classiques.'
    },
    { 
        id: 'vimmslair', 
        title: 'Vimm\'s Lair', 
        url: 'https://vimm.net/', 
        category: 'JEUX - RETRO', 
        description: 'ROMs de consoles classiques.'
    },
    { 
        id: 'retrogamescc', 
        title: 'Retrogames.cc', 
        url: 'https://www.retrogames.cc/', 
        category: 'JEUX - RETRO', 
        description: 'Jouer à des jeux rétro dans le navigateur.'
    },
    { 
        id: 'crazygames', 
        title: 'CrazyGames', 
        url: 'https://www.crazygames.fr/', 
        category: 'JEUX - NAVIGATEUR', 
        description: 'Catalogue de jeux web gratuits.'
    },
    { 
        id: 'poki', 
        title: 'Poki', 
        url: 'https://poki.com/fr', 
        category: 'JEUX - NAVIGATEUR', 
        description: 'Jeux web rapides sans installation.'
    },

    // ==========================================
    // EBOOK
    // ==========================================
    { 
        id: 'batcave', 
        title: 'Batcave', 
        url: 'https://batcave.biz/', 
        category: 'EBOOK - LITTÉRATURE', 
        description: 'Bibliothèque de livres électroniques.'
    },

    // ==========================================
    // FILMS
    // ==========================================
    { 
        id: 'topcartoons', 
        title: 'Top Cartoons', 
        url: 'https://www.topcartoons.tv/', 
        category: 'FILMS - ANIMATION', 
        description: 'Dessins animés et séries d\'animation.'
    },

    // ==========================================
    // CYBERSÉCURITÉ
    // ==========================================
    { 
        id: 'pwncollege', 
        title: 'pwn.college', 
        url: 'https://pwn.college/', 
        category: 'CYBERSÉCURITÉ', 
        description: 'Plateforme d\'apprentissage et d\'entraînement en cybersécurité.'
    },

    // ==========================================
    // MONTAGE VIDÉO
    // ==========================================
    { 
        id: 'nimvideo', 
        title: 'NIM Video', 
        url: 'http://nim.video/', 
        category: 'MONTAGE - IA & LIGNE', 
        description: 'Outils et ressources de montage vidéo.'
    },
    { id: 'davinciresolve', title: 'DaVinci Resolve', url: 'https://www.blackmagicdesign.com/products/davinciresolve', category: 'MONTAGE - PRO & PREMIUM', description: 'Le meilleur logiciel de montage et étalonnage gratuit (version studio payante).' },
    { id: 'hitfilm', title: 'HitFilm', url: 'https://fxhome.com/product/hitfilm', category: 'MONTAGE - PRO & PREMIUM', description: 'Excellent pour le montage classique et les effets spéciaux (VFX).' },
    { id: 'lightworks', title: 'Lightworks', url: 'https://lwks.com/', category: 'MONTAGE - PRO & PREMIUM', description: 'Outil de montage professionnel très complet.' },
    { id: 'kdenlive', title: 'Kdenlive', url: 'https://kdenlive.org/', category: 'MONTAGE - OPEN SOURCE', description: 'Monteur vidéo open-source très riche en fonctionnalités.' },
    { id: 'shotcut', title: 'Shotcut', url: 'https://shotcut.org/', category: 'MONTAGE - OPEN SOURCE', description: 'Logiciel de montage vidéo libre, gratuit et multiplateforme.' },
    { id: 'openshot', title: 'OpenShot', url: 'https://www.openshot.org/', category: 'MONTAGE - OPEN SOURCE', description: 'Très simple d\'utilisation pour débuter avec le montage vidéo libre.' },
    { id: 'capcut', title: 'CapCut', url: 'https://www.capcut.com/', category: 'MONTAGE - IA & LIGNE', description: 'Éditeur vidéo incontournable, intuitif avec d\'excellents modèles.' },
    { id: 'clipchamp', title: 'Clipchamp', url: 'https://clipchamp.com/', category: 'MONTAGE - IA & LIGNE', description: 'Très simple pour des petits montages en ligne ou sur Windows.' },
    { id: 'veedio', title: 'Veed.io', url: 'https://www.veed.io/', category: 'MONTAGE - IA & LIGNE', description: 'Superbe éditeur en ligne, parfait pour les sous-titres automatiques.' },
    { id: 'descript', title: 'Descript', url: 'https://www.descript.com/', category: 'MONTAGE - IA & LIGNE', description: 'Éditez vos vidéos en modifiant simplement le texte de la transcription.' },
    { id: 'opusclip', title: 'Opus Clip', url: 'https://www.opus.pro/', category: 'MONTAGE - IA & LIGNE', description: 'Transforme de longues vidéos en formats courts automatiquement.' },

    // ==========================================
    // NOUVEAUX OUTILS DE MONTAGE AJOUTÉS
    // ==========================================
    { id: 'premierepro', title: 'Adobe Premiere Pro', url: 'https://www.adobe.com/products/premiere.html', category: 'MONTAGE - PRO & PREMIUM', description: 'Le standard de l\'industrie du montage vidéo.' },
    { id: 'finalcutpro', title: 'Final Cut Pro', url: 'https://www.apple.com/final-cut-pro/', category: 'MONTAGE - PRO & PREMIUM', description: 'Logiciel de montage professionnel incontournable sur Mac.' },
    { id: 'avid', title: 'Avid Media Composer', url: 'https://www.avid.com/media-composer', category: 'MONTAGE - PRO & PREMIUM', description: 'Outil de référence pour le montage cinéma et TV.' },
    { id: 'vegaspro', title: 'Vegas Pro', url: 'https://www.vegascreativesoftware.com/', category: 'MONTAGE - PRO & PREMIUM', description: 'Logiciel de montage vidéo historique et puissant.' },
    { id: 'powerdirector', title: 'CyberLink PowerDirector', url: 'https://www.cyberlink.com/products/powerdirector-video-editing-software/', category: 'MONTAGE - PRO & PREMIUM', description: 'Logiciel de montage complet et rapide.' },
    { id: 'edius', title: 'Edius Pro', url: 'https://www.edius.net/', category: 'MONTAGE - PRO & PREMIUM', description: 'Performant pour le broadcast et le montage rapide.' },
    { id: 'pinnacle', title: 'Pinnacle Studio', url: 'https://www.pinnaclesys.com/', category: 'MONTAGE - PRO & PREMIUM', description: 'Outil performant de l\'édition basique à avancée.' },
    { id: 'videostudio', title: 'Corel VideoStudio', url: 'https://www.videostudiopro.com/', category: 'MONTAGE - PRO & PREMIUM', description: 'Bonne alternative de milieu de gamme.' },
    
    { id: 'olive', title: 'Olive Video Editor', url: 'https://olivevideoeditor.org/', category: 'MONTAGE - OPEN SOURCE', description: 'Monteur non-linéaire en développement rapide.' },
    { id: 'blender', title: 'Blender', url: 'https://www.blender.org/', category: 'MONTAGE - OPEN SOURCE', description: 'Suite 3D incluant un puissant éditeur vidéo.' },
    { id: 'natron', title: 'Natron', url: 'https://natrongithub.github.io/', category: 'MONTAGE - OPEN SOURCE', description: 'L\'alternative open-source au compositing After Effects.' },
    { id: 'flowblade', title: 'Flowblade', url: 'https://jliljebl.github.io/flowblade/', category: 'MONTAGE - OPEN SOURCE', description: 'Éditeur vidéo rapide et performant pour Linux.' },
    { id: 'pitivi', title: 'Pitivi', url: 'https://www.pitivi.org/', category: 'MONTAGE - OPEN SOURCE', description: 'Montage simple et élégant sous Linux.' },
    { id: 'cinelerra', title: 'Cinelerra', url: 'https://cinelerra-gg.org/', category: 'MONTAGE - OPEN SOURCE', description: 'Logiciel de montage professionnel open-source.' },
    { id: 'losslesscut', title: 'LosslessCut', url: 'https://mifi.no/losslesscut/', category: 'MONTAGE - OPEN SOURCE', description: 'Coupez des vidéos très rapidement sans perte de qualité.' },
    
    { id: 'lumafusion', title: 'LumaFusion', url: 'https://luma-touch.com/lumafusion-for-ios-2/', category: 'MONTAGE - MOBILE', description: 'L\'application de montage pro sur iPad et iPhone.' },
    { id: 'inshot', title: 'InShot', url: 'https://inshot.com/', category: 'MONTAGE - MOBILE', description: 'Excellent pour Instagram, TikTok et le format vertical.' },
    { id: 'kinemaster', title: 'KineMaster', url: 'https://kinemaster.com/', category: 'MONTAGE - MOBILE', description: 'Monteur vidéo complet sur mobile.' },
    { id: 'vnvideo', title: 'VN Video Editor', url: 'https://www.vlognow.me/', category: 'MONTAGE - MOBILE', description: 'Très puissant et gratuit sans filigrane.' },
    { id: 'splice', title: 'Splice', url: 'https://spliceapp.com/', category: 'MONTAGE - MOBILE', description: 'Application de montage populaire et rapide.' },
    { id: 'quik', title: 'Quik by GoPro', url: 'https://gopro.com/en/us/shop/softwareandapp/quik-app/', category: 'MONTAGE - MOBILE', description: 'Génération automatique de montages avec vos médias.' },
    { id: 'filmmakerpro', title: 'Filmmaker Pro', url: 'https://www.filmmakerproapp.com/', category: 'MONTAGE - MOBILE', description: 'Montage avec fonctionnalités avancées sur mobile.' },
    { id: 'videoshow', title: 'VideoShow', url: 'https://videoshowapp.com/', category: 'MONTAGE - MOBILE', description: 'Création et édition vidéo grand public.' },
    { id: 'videoleap', title: 'Videoleap', url: 'https://videoleapapp.com/', category: 'MONTAGE - MOBILE', description: 'Application créative avec de très bons effets.' },
    
    { id: 'canvavideo', title: 'Canva Vidéo', url: 'https://www.canva.com/video-editor/', category: 'MONTAGE - IA & LIGNE', description: 'Création de vidéos simplifiée avec des milliers de modèles.' },
    { id: 'wevideo', title: 'WeVideo', url: 'https://www.wevideo.com/', category: 'MONTAGE - IA & LIGNE', description: 'Éditeur cloud très utilisé pour la collaboration.' },
    { id: 'kapwing', title: 'Kapwing', url: 'https://www.kapwing.com/', category: 'MONTAGE - IA & LIGNE', description: 'Éditeur collaboratif, parfait pour les mèmes et les réseaux.' },
    { id: 'fliki', title: 'Fliki', url: 'https://fliki.ai/', category: 'MONTAGE - IA & LIGNE', description: 'Génère des vidéos rapidement à partir de texte.' },
    { id: 'flexclip', title: 'FlexClip', url: 'https://www.flexclip.com/', category: 'MONTAGE - IA & LIGNE', description: 'Idéal pour des vidéos courtes et promotionnelles.' },
    { id: 'biteable', title: 'Biteable', url: 'https://biteable.com/', category: 'MONTAGE - IA & LIGNE', description: 'Créateur de vidéos d\'entreprise animées.' },
    { id: 'invideo', title: 'InVideo', url: 'https://invideo.io/', category: 'MONTAGE - IA & LIGNE', description: 'De riches modèles préconçus pour la publicité.' },
    { id: 'animoto', title: 'Animoto', url: 'https://animoto.com/', category: 'MONTAGE - IA & LIGNE', description: 'Création de vidéos souvenirs et diaporamas.' },
    { id: 'munch', title: 'Munch', url: 'https://www.getmunch.com/', category: 'MONTAGE - IA & LIGNE', description: 'Extraction IA des meilleurs moments pour TikTok/Shorts.' },
    { id: 'gling', title: 'Gling', url: 'https://gling.ai/', category: 'MONTAGE - IA & LIGNE', description: 'Coupe automatiquement les silences et hésitations.' },
    { id: 'vidyo', title: 'Vidyo.ai', url: 'https://vidyo.ai/', category: 'MONTAGE - IA & LIGNE', description: 'Repurposing de vidéos longues pour les réseaux sociaux.' },
    { id: 'sora', title: 'Sora (OpenAI)', url: 'https://openai.com/sora', category: 'MONTAGE - IA & LIGNE', description: 'Générateur de vidéo texte-vers-vidéo impressionnant.' },
    { id: 'kaiber', title: 'Kaiber', url: 'https://kaiber.ai/', category: 'MONTAGE - IA & LIGNE', description: 'Génération d\'animations fluides par IA.' },
    { id: 'heygen', title: 'HeyGen', url: 'https://www.heygen.com/', category: 'MONTAGE - IA & LIGNE', description: 'Avatars IA réalistes qui parlent depuis un texte.' },
    { id: 'synthesia', title: 'Synthesia', url: 'https://www.synthesia.io/', category: 'MONTAGE - IA & LIGNE', description: 'Présentateurs virtuels créés par IA.' },
    { id: 'pikalabs', title: 'Pika', url: 'https://pika.art/', category: 'MONTAGE - IA & LIGNE', description: 'Plateforme de génération de vidéos courtes IA.' },
    { id: 'wonderdynamics', title: 'Wonder Dynamics', url: 'https://wonderdynamics.com/', category: 'MONTAGE - IA & LIGNE', description: 'Remplace automatiquement les acteurs par des personnages CG.' },
    { id: 'topazvideo', title: 'Topaz Video AI', url: 'https://www.topazlabs.com/topaz-video-ai', category: 'MONTAGE - IA & LIGNE', description: 'Amélioration de qualité vidéo, upscale et slowmotion IA.' },
    { id: 'pictory', title: 'Pictory', url: 'https://pictory.ai/', category: 'MONTAGE - IA & LIGNE', description: 'Transforme des articles de blog en vidéos courtes.' },
    
    { id: 'aftereffects', title: 'Adobe After Effects', url: 'https://www.adobe.com/products/aftereffects.html', category: 'MONTAGE - DIVERS', description: 'Le leader incontesté du motion design.' },
    { id: 'applemotion', title: 'Apple Motion', url: 'https://www.apple.com/final-cut-pro/motion/', category: 'MONTAGE - DIVERS', description: 'Animation et motion design optimisé pour Mac.' },
    { id: 'nuke', title: 'Nuke', url: 'https://www.foundry.com/products/nuke-family', category: 'MONTAGE - DIVERS', description: 'Le standard de l\'industrie pour le compositing VFX.' },
    { id: 'cinema4d', title: 'Cinema 4D', url: 'https://www.maxon.net/fr/cinema-4d', category: 'MONTAGE - DIVERS', description: 'Logiciel de motion design 3D très accessible.' },
    { id: 'audition', title: 'Adobe Audition', url: 'https://www.adobe.com/products/audition.html', category: 'MONTAGE - DIVERS', description: 'Station de travail audio professionnelle.' },
    { id: 'audacity', title: 'Audacity', url: 'https://www.audacityteam.org/', category: 'MONTAGE - DIVERS', description: 'Enregistrement et édition audio open-source.' },
    { id: 'reaper', title: 'Reaper', url: 'https://www.reaper.fm/', category: 'MONTAGE - DIVERS', description: 'Outil de production audio léger et puissant.' },
    { id: 'podcastai', title: 'Adobe Podcast', url: 'https://podcast.adobe.com/enhance', category: 'MONTAGE - DIVERS', description: 'Nettoie automatiquement la voix pour un rendu studio par IA.' },
    { id: 'whisper', title: 'OpenAI Whisper', url: 'https://github.com/openai/whisper', category: 'MONTAGE - DIVERS', description: 'Modèle de transcription open-source hyper précis.' },
    { id: 'submagic', title: 'SubMagic', url: 'https://submagic.co/', category: 'MONTAGE - DIVERS', description: 'Sous-titres dynamiques par IA.' },
    { id: 'captions', title: 'Captions App', url: 'https://www.captions.ai/', category: 'MONTAGE - DIVERS', description: 'Ajout de sous-titres IA hyper stylisés sur mobile.' },
    { id: 'happyscribe', title: 'Happy Scribe', url: 'https://www.happyscribe.com/', category: 'MONTAGE - DIVERS', description: 'Service en ligne de sous-titrage et transcription.' },
    { id: 'rev', title: 'Rev', url: 'https://www.rev.com/', category: 'MONTAGE - DIVERS', description: 'Services professionnels de sous-titrage manuel et IA.' },
    { id: 'obs', title: 'OBS Studio', url: 'https://obsproject.com/', category: 'MONTAGE - DIVERS', description: 'Indispensable pour l\'enregistrement et le streaming.' },
    { id: 'camtasia', title: 'Camtasia', url: 'https://www.techsmith.com/video-editor.html', category: 'MONTAGE - DIVERS', description: 'Excellent pour la création de tutoriels vidéo.' },
    { id: 'screenflow', title: 'ScreenFlow', url: 'https://www.telestream.net/screenflow/', category: 'MONTAGE - DIVERS', description: 'Enregistrement d\'écran et montage facile sur Mac.' },
    { id: 'loom', title: 'Loom', url: 'https://www.loom.com/', category: 'MONTAGE - DIVERS', description: 'Messages vidéo asynchrones pour les équipes.' },
    { id: 'snagit', title: 'Snagit', url: 'https://www.techsmith.com/screen-capture.html', category: 'MONTAGE - DIVERS', description: 'Capture d\'écran avancée.' },
    { id: 'handbrake', title: 'HandBrake', url: 'https://handbrake.fr/', category: 'MONTAGE - DIVERS', description: 'Le meilleur compresseur vidéo open-source.' },
    { id: 'shutterencoder', title: 'Shutter Encoder', url: 'https://www.shutterencoder.com/', category: 'MONTAGE - DIVERS', description: 'Outil de conversion ultra complet créé par un Français.' },
    { id: 'ffmpeg', title: 'FFmpeg', url: 'https://ffmpeg.org/', category: 'MONTAGE - DIVERS', description: 'L\'outil ultime en ligne de commande pour la vidéo.' },
    { id: 'vlc', title: 'VLC Media Player', url: 'https://www.videolan.org/vlc/', category: 'MONTAGE - DIVERS', description: 'Lecteur incontournable qui gère aussi la conversion.' },
    { id: 'frameio', title: 'Frame.io', url: 'https://frame.io/', category: 'MONTAGE - DIVERS', description: 'Plateforme de révision et de collaboration vidéo.' },
    { id: 'kyno', title: 'Kyno', url: 'https://lesspain.software/kyno/', category: 'MONTAGE - DIVERS', description: 'Gestion de rushs et métadonnées.' },
    { id: 'eagle', title: 'Eagle', url: 'https://eagle.cool/', category: 'MONTAGE - DIVERS', description: 'Organisation visuelle d\'assets vidéo, audio et images.' },
    { id: 'postlab', title: 'Postlab', url: 'https://hedge.video/postlab', category: 'MONTAGE - DIVERS', description: 'Collaboration cloud pour FCPX et Premiere.' },
    { id: 'iconik', title: 'Iconik', url: 'https://www.iconik.io/', category: 'MONTAGE - DIVERS', description: 'Gestion de médias dans le cloud pour les créateurs.' },
    { id: 'envato', title: 'Envato Elements', url: 'https://elements.envato.com/', category: 'MONTAGE - DIVERS', description: 'Banque massive de templates, vidéos et musiques.' },
    { id: 'artlist', title: 'Artlist', url: 'https://artlist.io/', category: 'MONTAGE - DIVERS', description: 'Musiques, bruitages et vidéos libres de droits de haute qualité.' },
    { id: 'epidemicsound', title: 'Epidemic Sound', url: 'https://www.epidemicsound.com/', category: 'MONTAGE - DIVERS', description: 'Le standard pour la musique de créateurs YouTube.' },
    { id: 'pexelsvideo', title: 'Pexels Video', url: 'https://www.pexels.com/videos/', category: 'MONTAGE - DIVERS', description: 'Vidéos gratuites et libres de droits.' },
    { id: 'pixabayvideo', title: 'Pixabay Video', url: 'https://pixabay.com/videos/', category: 'MONTAGE - DIVERS', description: 'Énorme bibliothèque de vidéos gratuites.' },
    { id: 'mixkit', title: 'Mixkit', url: 'https://mixkit.co/', category: 'MONTAGE - DIVERS', description: 'Ressources gratuites de qualité (vidéos, musique, templates).' },
    { id: 'storyblocks', title: 'Storyblocks', url: 'https://www.storyblocks.com/', category: 'MONTAGE - DIVERS', description: 'Images d\'archives et musiques sous abonnement.' },
    { id: 'motionarray', title: 'Motion Array', url: 'https://motionarray.com/', category: 'MONTAGE - DIVERS', description: 'Templates Premiere et After Effects.' },
    { id: 'audiio', title: 'Audiio', url: 'https://audiio.com/', category: 'MONTAGE - DIVERS', description: 'Licence à vie pour musiques et SFX.' },
    { id: 'freesound', title: 'Freesound', url: 'https://freesound.org/', category: 'MONTAGE - DIVERS', description: 'Base de données collaborative de bruitages gratuits.' },
    { id: 'milanote', title: 'Milanote', url: 'https://milanote.com/', category: 'MONTAGE - DIVERS', description: 'Parfait pour préparer et visualiser ses storyboards.' },
    { id: 'tubebuddy', title: 'TubeBuddy', url: 'https://www.tubebuddy.com/', category: 'MONTAGE - DIVERS', description: 'Extension de SEO et gestion de chaîne YouTube.' },
    { id: 'vidiq', title: 'VidIQ', url: 'https://vidiq.com/', category: 'MONTAGE - DIVERS', description: 'Excellent outil pour l\'optimisation de vidéos YouTube.' },

    // ==========================================
    // CYBERSÉCURITÉ
    // ==========================================
    { id: 'tryhackme', title: 'TryHackMe', url: 'https://tryhackme.com/', category: 'CYBERSÉCURITÉ - APPRENTISSAGE', description: 'Apprentissage interactif de la cybersécurité pour tous niveaux.' },
    { id: 'hackthebox', title: 'Hack The Box', url: 'https://www.hackthebox.com/', category: 'CYBERSÉCURITÉ - APPRENTISSAGE', description: 'Plateforme d\'entraînement au pentest et hacking éthique.' },
    { id: 'rootme', title: 'Root-Me', url: 'https://www.root-me.org/', category: 'CYBERSÉCURITÉ - APPRENTISSAGE', description: 'Améliorez vos compétences en hacking.' },
    { id: 'cybrary', title: 'Cybrary', url: 'https://www.cybrary.it/', category: 'CYBERSÉCURITÉ - APPRENTISSAGE', description: 'Cours gratuits en cybersécurité et IT.' },
    { id: 'overthewire', title: 'OverTheWire', url: 'https://overthewire.org/', category: 'CYBERSÉCURITÉ - APPRENTISSAGE', description: 'Apprenez les concepts de sécurité via des wargames.' },
    { id: 'vulnhub', title: 'VulnHub', url: 'https://www.vulnhub.com/', category: 'CYBERSÉCURITÉ - APPRENTISSAGE', description: 'Machines virtuelles vulnérables pour s\'entraîner.' },
    { id: 'portswigger', title: 'PortSwigger Academy', url: 'https://portswigger.net/web-security', category: 'CYBERSÉCURITÉ - APPRENTISSAGE', description: 'Apprentissage gratuit de la sécurité web par les créateurs de Burp.' },
    { id: 'pentesterlab', title: 'PentesterLab', url: 'https://pentesterlab.com/', category: 'CYBERSÉCURITÉ - APPRENTISSAGE', description: 'Exercices pratiques de pénétration web.' },
    { id: 'kali', title: 'Kali Linux', url: 'https://www.kali.org/', category: 'CYBERSÉCURITÉ - OUTILS', description: 'Distribution Linux ultime pour le pentest.' },
    { id: 'wireshark', title: 'Wireshark', url: 'https://www.wireshark.org/', category: 'CYBERSÉCURITÉ - OUTILS', description: 'Analyseur de protocole réseau le plus utilisé.' },
    { id: 'burpsuite', title: 'Burp Suite', url: 'https://portswigger.net/burp', category: 'CYBERSÉCURITÉ - OUTILS', description: 'Outil de test de sécurité des applications web.' },
    { id: 'nmap', title: 'Nmap', url: 'https://nmap.org/', category: 'CYBERSÉCURITÉ - OUTILS', description: 'Scanner de sécurité réseau gratuit et open source.' },
    { id: 'metasploit', title: 'Metasploit', url: 'https://www.metasploit.com/', category: 'CYBERSÉCURITÉ - OUTILS', description: 'Framework de tests de pénétration le plus utilisé au monde.' },
    { id: 'johntheripper', title: 'John the Ripper', url: 'https://www.openwall.com/john/', category: 'CYBERSÉCURITÉ - OUTILS', description: 'Craqueur de mots de passe très populaire.' },
    { id: 'hashcat', title: 'Hashcat', url: 'https://hashcat.net/hashcat/', category: 'CYBERSÉCURITÉ - OUTILS', description: 'Utilitaire de récupération de mots de passe le plus rapide.' },
    { id: 'owaspzap', title: 'OWASP ZAP', url: 'https://www.zaproxy.org/', category: 'CYBERSÉCURITÉ - OUTILS', description: 'Scanner de vulnérabilités web gratuit.' },
    { id: 'shodan', title: 'Shodan', url: 'https://www.shodan.io/', category: 'CYBERSÉCURITÉ - OUTILS', description: 'Moteur de recherche pour les appareils connectés à Internet.' },
    { id: 'virustotal', title: 'VirusTotal', url: 'https://www.virustotal.com/', category: 'CYBERSÉCURITÉ - OUTILS', description: 'Analyse des fichiers et URLs suspects.' },
    
    // ==========================================
    // FILMS & ANIMATION
    // ==========================================
    { id: 'netflix', title: 'Netflix', url: 'https://www.netflix.com/', category: 'FILMS - STREAMING', description: 'Plateforme de streaming de films et séries.' },
    { id: 'primevideo', title: 'Prime Video', url: 'https://www.primevideo.com/', category: 'FILMS - STREAMING', description: 'Films, séries et productions originales Amazon.' },
    { id: 'disneyplus', title: 'Disney+', url: 'https://www.disneyplus.com/', category: 'FILMS - STREAMING', description: 'L\'univers Disney, Pixar, Marvel, Star Wars et National Geographic.' },
    { id: 'appletv', title: 'Apple TV+', url: 'https://tv.apple.com/', category: 'FILMS - STREAMING', description: 'Contenus originaux Apple de haute qualité.' },
    { id: 'max', title: 'Max (HBO)', url: 'https://www.max.com/', category: 'FILMS - STREAMING', description: 'Tout l\'univers de Warner Bros et HBO.' },
    { id: 'crunchyroll', title: 'Crunchyroll', url: 'https://www.crunchyroll.com/', category: 'FILMS - ANIMATION', description: 'La référence du streaming d\'anime.' },
    { id: 'adn', title: 'ADN (Animation Digital Network)', url: 'https://animationdigitalnetwork.fr/', category: 'FILMS - ANIMATION', description: 'Streaming d\'animation japonaise et franco-belge.' },
    { id: 'wakanim', title: 'Wakanim', url: 'https://www.wakanim.tv/', category: 'FILMS - ANIMATION', description: 'Séries d\'animation japonaise.' },
    { id: 'studio-ghibli', title: 'Studio Ghibli', url: 'https://www.ghibli.jp/', category: 'FILMS - ANIMATION', description: 'Site officiel du célèbre studio d\'animation japonais.' },
    { id: 'mubi', title: 'MUBI', url: 'https://mubi.com/', category: 'FILMS - STREAMING', description: 'Cinéma d\'auteur, films classiques et indépendants sélectionnés à la main.' },
    { id: 'criterion', title: 'The Criterion Channel', url: 'https://www.criterionchannel.com/', category: 'FILMS - STREAMING', description: 'Chefs-d\'œuvre du cinéma mondial.' },
    { id: 'arte', title: 'ARTE.tv', url: 'https://www.arte.tv/', category: 'FILMS - STREAMING', description: 'Documentaires, séries et films culturels gratuits.' },
    
    // ==========================================
    // EBOOK
    // ==========================================
    { id: 'gutenberg', title: 'Project Gutenberg', url: 'https://www.gutenberg.org/', category: 'EBOOK - LITTÉRATURE', description: 'Bibliothèque de plus de 70 000 eBooks gratuits.' },
    { id: 'amazon-kindle', title: 'Boutique Kindle', url: 'https://www.amazon.fr/ebooks-kindle/', category: 'EBOOK - LITTÉRATURE', description: 'La plus grande librairie numérique au monde.' },
    { id: 'kobo', title: 'Kobo', url: 'https://www.kobo.com/', category: 'EBOOK - LITTÉRATURE', description: 'Boutique alternative majeure d\'eBooks et liseuses.' },
    { id: 'gallica', title: 'Gallica', url: 'https://gallica.bnf.fr/', category: 'EBOOK - LITTÉRATURE', description: 'Bibliothèque numérique de la BnF.' },
    { id: 'librivox', title: 'LibriVox', url: 'https://librivox.org/', category: 'EBOOK - LITTÉRATURE', description: 'Livres audio gratuits du domaine public.' },
    { id: 'oreilly', title: 'O\'Reilly', url: 'https://www.oreilly.com/', category: 'EBOOK - TECH', description: 'Plateforme de référence pour l\'apprentissage tech et business.' },
    { id: 'packt', title: 'Packt', url: 'https://www.packtpub.com/', category: 'EBOOK - TECH', description: 'Livres et vidéos pour développeurs et professionnels de l\'IT.' },
    { id: 'manning', title: 'Manning Publications', url: 'https://www.manning.com/', category: 'EBOOK - TECH', description: 'Livres techniques de très haute qualité (série "In Action").' },
    { id: 'leanpub', title: 'Leanpub', url: 'https://leanpub.com/', category: 'EBOOK - TECH', description: 'Livres publiés par leurs auteurs pendant leur rédaction.' },
    { id: 'free-programming-books', title: 'Free Programming Books', url: 'https://ebookfoundation.github.io/free-programming-books/', category: 'EBOOK - TECH', description: 'Immense répertoire GitHub de livres de dev gratuits.' },
    
    // ==========================================
    // FORMATION
    // ==========================================
    { id: 'edx', title: 'edX', url: 'https://www.edx.org/', category: 'FORMATION - DEV', description: 'Cours des meilleures universités (Harvard, MIT).' },
    { id: 'pluralsight', title: 'Pluralsight', url: 'https://www.pluralsight.com/', category: 'FORMATION - DEV', description: 'Formations très pointues pour développeurs et pros de l\'IT.' },
    { id: 'codecademy', title: 'Codecademy', url: 'https://www.codecademy.com/', category: 'FORMATION - DEV', description: 'Apprentissage interactif du code.' },
    { id: 'freecodecamp', title: 'freeCodeCamp', url: 'https://www.freecodecamp.org/', category: 'FORMATION - DEV', description: 'Apprenez à coder gratuitement (certifications reconnues).' },
    { id: 'datacamp', title: 'DataCamp', url: 'https://www.datacamp.com/', category: 'FORMATION - DEV', description: 'Plateforme interactive dédiée à la Data Science et l\'IA.' },
    { id: 'skillshare', title: 'Skillshare', url: 'https://www.skillshare.com/', category: 'FORMATION - BUSINESS', description: 'Cours créatifs et business par abonnement.' },
    { id: 'linkedinlearning', title: 'LinkedIn Learning', url: 'https://learning.linkedin.com/', category: 'FORMATION - BUSINESS', description: 'Formations professionnelles avec certificats pour LinkedIn.' },
    { id: 'masterclass', title: 'MasterClass', url: 'https://www.masterclass.com/', category: 'FORMATION - BUSINESS', description: 'Cours donnés par des experts de renommée mondiale.' },

    // ==========================================
    // IA (Intelligence Artificielle)
    // ==========================================
    { id: 'dalle3', title: 'DALL-E 3', url: 'https://openai.com/dall-e-3', category: 'IA - IMAGES', description: 'Génération d\'images par OpenAI.' },
    { id: 'stable-diffusion', title: 'Stable Diffusion', url: 'https://stability.ai/', category: 'IA - IMAGES', description: 'Génération d\'images open-source et paramétrable.' },
    { id: 'elevenlabs', title: 'ElevenLabs', url: 'https://elevenlabs.io/', category: 'IA - AUDIO VIDEO', description: 'Le meilleur générateur de voix (Text-to-Speech) par IA.' },
    { id: 'suno', title: 'Suno AI', url: 'https://www.suno.ai/', category: 'IA - AUDIO VIDEO', description: 'Générateur de musique par IA ultra réaliste.' },

    // ==========================================
    // DEV
    // ==========================================
    { id: 'github-copilot', title: 'GitHub Copilot', url: 'https://github.com/features/copilot', category: 'DEV - ASSISTANTS', description: 'L\'assistant de code par l\'IA de GitHub.' },
    { id: 'cursor', title: 'Cursor', url: 'https://www.cursor.so/', category: 'DEV - ASSISTANTS', description: 'IDE basé sur VS Code avec IA intégrée (GPT-4).' },
    { id: 'netlify', title: 'Netlify', url: 'https://www.netlify.com/', category: 'DEV - OUTILS', description: 'Déploiement simple et rapide de sites statiques.' },
    { id: 'docker', title: 'Docker', url: 'https://www.docker.com/', category: 'DEV - OUTILS', description: 'Plateforme de conteneurisation incontournable.' },
    { id: 'figma', title: 'Figma', url: 'https://www.figma.com/', category: 'DEV - OUTILS', description: 'Design collaboratif UI/UX.' },

    // ==========================================
    // API
    // ==========================================
    { id: 'rapidapi', title: 'RapidAPI', url: 'https://rapidapi.com/', category: 'API - PUBLIQUES', description: 'Le plus grand hub d\'API au monde.' },
    { id: 'public-apis', title: 'Public APIs', url: 'https://github.com/public-apis/public-apis', category: 'API - PUBLIQUES', description: 'Liste GitHub gigantesque d\'API gratuites.' },
    { id: 'stripe-api', title: 'Stripe API', url: 'https://stripe.com/docs/api', category: 'API - PUBLIQUES', description: 'La référence des API de paiement.' },
    { id: 'twilio-api', title: 'Twilio API', url: 'https://www.twilio.com/docs', category: 'API - PUBLIQUES', description: 'API de communication (SMS, Voix).' },
    { id: 'swagger', title: 'Swagger', url: 'https://swagger.io/', category: 'API - OUTILS', description: 'Outils pour concevoir, créer et documenter des API REST.' },

    // ==========================================
    // JEUX
    // ==========================================
    { id: 'steam', title: 'Steam', url: 'https://store.steampowered.com/', category: 'JEUX - PC', description: 'La plus grande plateforme de jeux PC.' },
    { id: 'epicgames', title: 'Epic Games Store', url: 'https://store.epicgames.com/', category: 'JEUX - PC', description: 'Boutique de jeux PC, offrant des jeux gratuits chaque semaine.' },
    { id: 'romstation', title: 'RomStation', url: 'https://www.romstation.fr/', category: 'JEUX - RETRO', description: 'Tout l\'univers du retrogaming en un seul logiciel.' },
    { id: 'emulatorjs', title: 'EmulatorJS', url: 'https://emulatorjs.org/', category: 'JEUX - RETRO', description: 'Émulateurs fonctionnant directement dans le navigateur.' },
{ id: 'openshot', title: 'OpenShot', url: 'https://www.openshot.org/', category: 'MONTAGE - OPEN SOURCE', description: 'Très simple d\'utilisation pour débuter avec le montage vidéo libre.' },
    { id: 'capcut', title: 'CapCut', url: 'https://www.capcut.com/', category: 'MONTAGE - IA & LIGNE', description: 'Éditeur vidéo incontournable, intuitif avec d\'excellents modèles.' },
    { id: 'clipchamp', title: 'Clipchamp', url: 'https://clipchamp.com/', category: 'MONTAGE - IA & LIGNE', description: 'Très simple pour des petits montages en ligne ou sur Windows.' },
    { id: 'veedio', title: 'Veed.io', url: 'https://www.veed.io/', category: 'MONTAGE - IA & LIGNE', description: 'Superbe éditeur en ligne, parfait pour les sous-titres automatiques.' },
    { id: 'descript', title: 'Descript', url: 'https://www.descript.com/', category: 'MONTAGE - IA & LIGNE', description: 'Éditez vos vidéos en modifiant simplement le texte de la transcription.' },
    { id: 'opusclip', title: 'Opus Clip', url: 'https://www.opus.pro/', category: 'MONTAGE - IA & LIGNE', description: 'Transforme de longues vidéos en formats courts automatiquement.' },

    // ==========================================
    // NOUVEAUX OUTILS DE MONTAGE AJOUTÉS
    // ==========================================
    { id: 'premierepro', title: 'Adobe Premiere Pro', url: 'https://www.adobe.com/products/premiere.html', category: 'MONTAGE - PRO & PREMIUM', description: 'Le standard de l\'industrie du montage vidéo.' },
    { id: 'finalcutpro', title: 'Final Cut Pro', url: 'https://www.apple.com/final-cut-pro/', category: 'MONTAGE - PRO & PREMIUM', description: 'Logiciel de montage professionnel incontournable sur Mac.' },
    { id: 'avid', title: 'Avid Media Composer', url: 'https://www.avid.com/media-composer', category: 'MONTAGE - PRO & PREMIUM', description: 'Outil de référence pour le montage cinéma et TV.' },
    { id: 'vegaspro', title: 'Vegas Pro', url: 'https://www.vegascreativesoftware.com/', category: 'MONTAGE - PRO & PREMIUM', description: 'Logiciel de montage vidéo historique et puissant.' },
    { id: 'powerdirector', title: 'CyberLink PowerDirector', url: 'https://www.cyberlink.com/products/powerdirector-video-editing-software/', category: 'MONTAGE - PRO & PREMIUM', description: 'Logiciel de montage complet et rapide.' },
    { id: 'edius', title: 'Edius Pro', url: 'https://www.edius.net/', category: 'MONTAGE - PRO & PREMIUM', description: 'Performant pour le broadcast et le montage rapide.' },
    { id: 'pinnacle', title: 'Pinnacle Studio', url: 'https://www.pinnaclesys.com/', category: 'MONTAGE - PRO & PREMIUM', description: 'Outil performant de l\'édition basique à avancée.' },
    { id: 'videostudio', title: 'Corel VideoStudio', url: 'https://www.videostudiopro.com/', category: 'MONTAGE - PRO & PREMIUM', description: 'Bonne alternative de milieu de gamme.' },
    
    { id: 'olive', title: 'Olive Video Editor', url: 'https://olivevideoeditor.org/', category: 'MONTAGE - OPEN SOURCE', description: 'Monteur non-linéaire en développement rapide.' },
    { id: 'blender', title: 'Blender', url: 'https://www.blender.org/', category: 'MONTAGE - OPEN SOURCE', description: 'Suite 3D incluant un puissant éditeur vidéo.' },
    { id: 'natron', title: 'Natron', url: 'https://natrongithub.github.io/', category: 'MONTAGE - OPEN SOURCE', description: 'L\'alternative open-source au compositing After Effects.' },
    { id: 'flowblade', title: 'Flowblade', url: 'https://jliljebl.github.io/flowblade/', category: 'MONTAGE - OPEN SOURCE', description: 'Éditeur vidéo rapide et performant pour Linux.' },
    { id: 'pitivi', title: 'Pitivi', url: 'https://www.pitivi.org/', category: 'MONTAGE - OPEN SOURCE', description: 'Montage simple et élégant sous Linux.' },
    { id: 'cinelerra', title: 'Cinelerra', url: 'https://cinelerra-gg.org/', category: 'MONTAGE - OPEN SOURCE', description: 'Logiciel de montage professionnel open-source.' },
    { id: 'losslesscut', title: 'LosslessCut', url: 'https://mifi.no/losslesscut/', category: 'MONTAGE - OPEN SOURCE', description: 'Coupez des vidéos très rapidement sans perte de qualité.' },
    
    { id: 'lumafusion', title: 'LumaFusion', url: 'https://luma-touch.com/lumafusion-for-ios-2/', category: 'MONTAGE - MOBILE', description: 'L\'application de montage pro sur iPad et iPhone.' },
    { id: 'inshot', title: 'InShot', url: 'https://inshot.com/', category: 'MONTAGE - MOBILE', description: 'Excellent pour Instagram, TikTok et le format vertical.' },
    { id: 'kinemaster', title: 'KineMaster', url: 'https://kinemaster.com/', category: 'MONTAGE - MOBILE', description: 'Monteur vidéo complet sur mobile.' },
    { id: 'vnvideo', title: 'VN Video Editor', url: 'https://www.vlognow.me/', category: 'MONTAGE - MOBILE', description: 'Très puissant et gratuit sans filigrane.' },
    { id: 'splice', title: 'Splice', url: 'https://spliceapp.com/', category: 'MONTAGE - MOBILE', description: 'Application de montage populaire et rapide.' },
    { id: 'quik', title: 'Quik by GoPro', url: 'https://gopro.com/en/us/shop/softwareandapp/quik-app/', category: 'MONTAGE - MOBILE', description: 'Génération automatique de montages avec vos médias.' },
    { id: 'filmmakerpro', title: 'Filmmaker Pro', url: 'https://www.filmmakerproapp.com/', category: 'MONTAGE - MOBILE', description: 'Montage avec fonctionnalités avancées sur mobile.' },
    { id: 'videoshow', title: 'VideoShow', url: 'https://videoshowapp.com/', category: 'MONTAGE - MOBILE', description: 'Création et édition vidéo grand public.' },
    { id: 'videoleap', title: 'Videoleap', url: 'https://videoleapapp.com/', category: 'MONTAGE - MOBILE', description: 'Application créative avec de très bons effets.' },
    
    { id: 'canvavideo', title: 'Canva Vidéo', url: 'https://www.canva.com/video-editor/', category: 'MONTAGE - IA & LIGNE', description: 'Création de vidéos simplifiée avec des milliers de modèles.' },
    { id: 'wevideo', title: 'WeVideo', url: 'https://www.wevideo.com/', category: 'MONTAGE - IA & LIGNE', description: 'Éditeur cloud très utilisé pour la collaboration.' },
    { id: 'kapwing', title: 'Kapwing', url: 'https://www.kapwing.com/', category: 'MONTAGE - IA & LIGNE', description: 'Éditeur collaboratif, parfait pour les mèmes et les réseaux.' },
    { id: 'fliki', title: 'Fliki', url: 'https://fliki.ai/', category: 'MONTAGE - IA & LIGNE', description: 'Génère des vidéos rapidement à partir de texte.' },
    { id: 'flexclip', title: 'FlexClip', url: 'https://www.flexclip.com/', category: 'MONTAGE - IA & LIGNE', description: 'Idéal pour des vidéos courtes et promotionnelles.' },
    { id: 'biteable', title: 'Biteable', url: 'https://biteable.com/', category: 'MONTAGE - IA & LIGNE', description: 'Créateur de vidéos d\'entreprise animées.' },
    { id: 'invideo', title: 'InVideo', url: 'https://invideo.io/', category: 'MONTAGE - IA & LIGNE', description: 'De riches modèles préconçus pour la publicité.' },
    { id: 'animoto', title: 'Animoto', url: 'https://animoto.com/', category: 'MONTAGE - IA & LIGNE', description: 'Création de vidéos souvenirs et diaporamas.' },
    { id: 'munch', title: 'Munch', url: 'https://www.getmunch.com/', category: 'MONTAGE - IA & LIGNE', description: 'Extraction IA des meilleurs moments pour TikTok/Shorts.' },
    { id: 'gling', title: 'Gling', url: 'https://gling.ai/', category: 'MONTAGE - IA & LIGNE', description: 'Coupe automatiquement les silences et hésitations.' },
    { id: 'vidyo', title: 'Vidyo.ai', url: 'https://vidyo.ai/', category: 'MONTAGE - IA & LIGNE', description: 'Repurposing de vidéos longues pour les réseaux sociaux.' },
    { id: 'sora', title: 'Sora (OpenAI)', url: 'https://openai.com/sora', category: 'MONTAGE - IA & LIGNE', description: 'Générateur de vidéo texte-vers-vidéo impressionnant.' },
    { id: 'kaiber', title: 'Kaiber', url: 'https://kaiber.ai/', category: 'MONTAGE - IA & LIGNE', description: 'Génération d\'animations fluides par IA.' },
    { id: 'heygen', title: 'HeyGen', url: 'https://www.heygen.com/', category: 'MONTAGE - IA & LIGNE', description: 'Avatars IA réalistes qui parlent depuis un texte.' },
    { id: 'synthesia', title: 'Synthesia', url: 'https://www.synthesia.io/', category: 'MONTAGE - IA & LIGNE', description: 'Présentateurs virtuels créés par IA.' },
    { id: 'pikalabs', title: 'Pika', url: 'https://pika.art/', category: 'MONTAGE - IA & LIGNE', description: 'Plateforme de génération de vidéos courtes IA.' },
    { id: 'wonderdynamics', title: 'Wonder Dynamics', url: 'https://wonderdynamics.com/', category: 'MONTAGE - IA & LIGNE', description: 'Remplace automatiquement les acteurs par des personnages CG.' },
    { id: 'topazvideo', title: 'Topaz Video AI', url: 'https://www.topazlabs.com/topaz-video-ai', category: 'MONTAGE - IA & LIGNE', description: 'Amélioration de qualité vidéo, upscale et slowmotion IA.' },
    { id: 'pictory', title: 'Pictory', url: 'https://pictory.ai/', category: 'MONTAGE - IA & LIGNE', description: 'Transforme des articles de blog en vidéos courtes.' },
    
    { id: 'aftereffects', title: 'Adobe After Effects', url: 'https://www.adobe.com/products/aftereffects.html', category: 'MONTAGE - DIVERS', description: 'Le leader incontesté du motion design.' },
    { id: 'applemotion', title: 'Apple Motion', url: 'https://www.apple.com/final-cut-pro/motion/', category: 'MONTAGE - DIVERS', description: 'Animation et motion design optimisé pour Mac.' },
    { id: 'nuke', title: 'Nuke', url: 'https://www.foundry.com/products/nuke-family', category: 'MONTAGE - DIVERS', description: 'Le standard de l\'industrie pour le compositing VFX.' },
    { id: 'cinema4d', title: 'Cinema 4D', url: 'https://www.maxon.net/fr/cinema-4d', category: 'MONTAGE - DIVERS', description: 'Logiciel de motion design 3D très accessible.' },
    { id: 'audition', title: 'Adobe Audition', url: 'https://www.adobe.com/products/audition.html', category: 'MONTAGE - DIVERS', description: 'Station de travail audio professionnelle.' },
    { id: 'audacity', title: 'Audacity', url: 'https://www.audacityteam.org/', category: 'MONTAGE - DIVERS', description: 'Enregistrement et édition audio open-source.' },
    { id: 'reaper', title: 'Reaper', url: 'https://www.reaper.fm/', category: 'MONTAGE - DIVERS', description: 'Outil de production audio léger et puissant.' },
    { id: 'podcastai', title: 'Adobe Podcast', url: 'https://podcast.adobe.com/enhance', category: 'MONTAGE - DIVERS', description: 'Nettoie automatiquement la voix pour un rendu studio par IA.' },
    { id: 'whisper', title: 'OpenAI Whisper', url: 'https://github.com/openai/whisper', category: 'MONTAGE - DIVERS', description: 'Modèle de transcription open-source hyper précis.' },
    { id: 'submagic', title: 'SubMagic', url: 'https://submagic.co/', category: 'MONTAGE - DIVERS', description: 'Sous-titres dynamiques par IA.' },
    { id: 'captions', title: 'Captions App', url: 'https://www.captions.ai/', category: 'MONTAGE - DIVERS', description: 'Ajout de sous-titres IA hyper stylisés sur mobile.' },
    { id: 'happyscribe', title: 'Happy Scribe', url: 'https://www.happyscribe.com/', category: 'MONTAGE - DIVERS', description: 'Service en ligne de sous-titrage et transcription.' },
    { id: 'rev', title: 'Rev', url: 'https://www.rev.com/', category: 'MONTAGE - DIVERS', description: 'Services professionnels de sous-titrage manuel et IA.' },
    { id: 'obs', title: 'OBS Studio', url: 'https://obsproject.com/', category: 'MONTAGE - DIVERS', description: 'Indispensable pour l\'enregistrement et le streaming.' },
    { id: 'camtasia', title: 'Camtasia', url: 'https://www.techsmith.com/video-editor.html', category: 'MONTAGE - DIVERS', description: 'Excellent pour la création de tutoriels vidéo.' },
    { id: 'screenflow', title: 'ScreenFlow', url: 'https://www.telestream.net/screenflow/', category: 'MONTAGE - DIVERS', description: 'Enregistrement d\'écran et montage facile sur Mac.' },
    { id: 'loom', title: 'Loom', url: 'https://www.loom.com/', category: 'MONTAGE - DIVERS', description: 'Messages vidéo asynchrones pour les équipes.' },
    { id: 'snagit', title: 'Snagit', url: 'https://www.techsmith.com/screen-capture.html', category: 'MONTAGE - DIVERS', description: 'Capture d\'écran avancée.' },
    { id: 'handbrake', title: 'HandBrake', url: 'https://handbrake.fr/', category: 'MONTAGE - DIVERS', description: 'Le meilleur compresseur vidéo open-source.' },
    { id: 'shutterencoder', title: 'Shutter Encoder', url: 'https://www.shutterencoder.com/', category: 'MONTAGE - DIVERS', description: 'Outil de conversion ultra complet créé par un Français.' },
    { id: 'ffmpeg', title: 'FFmpeg', url: 'https://ffmpeg.org/', category: 'MONTAGE - DIVERS', description: 'L\'outil ultime en ligne de commande pour la vidéo.' },
    { id: 'vlc', title: 'VLC Media Player', url: 'https://www.videolan.org/vlc/', category: 'MONTAGE - DIVERS', description: 'Lecteur incontournable qui gère aussi la conversion.' },
    { id: 'frameio', title: 'Frame.io', url: 'https://frame.io/', category: 'MONTAGE - DIVERS', description: 'Plateforme de révision et de collaboration vidéo.' },
    { id: 'kyno', title: 'Kyno', url: 'https://lesspain.software/kyno/', category: 'MONTAGE - DIVERS', description: 'Gestion de rushs et métadonnées.' },
    { id: 'eagle', title: 'Eagle', url: 'https://eagle.cool/', category: 'MONTAGE - DIVERS', description: 'Organisation visuelle d\'assets vidéo, audio et images.' },
    { id: 'postlab', title: 'Postlab', url: 'https://hedge.video/postlab', category: 'MONTAGE - DIVERS', description: 'Collaboration cloud pour FCPX et Premiere.' },
    { id: 'iconik', title: 'Iconik', url: 'https://www.iconik.io/', category: 'MONTAGE - DIVERS', description: 'Gestion de médias dans le cloud pour les créateurs.' },
    { id: 'envato', title: 'Envato Elements', url: 'https://elements.envato.com/', category: 'MONTAGE - DIVERS', description: 'Banque massive de templates, vidéos et musiques.' },
    { id: 'artlist', title: 'Artlist', url: 'https://artlist.io/', category: 'MONTAGE - DIVERS', description: 'Musiques, bruitages et vidéos libres de droits de haute qualité.' },
    { id: 'epidemicsound', title: 'Epidemic Sound', url: 'https://www.epidemicsound.com/', category: 'MONTAGE - DIVERS', description: 'Le standard pour la musique de créateurs YouTube.' },
    { id: 'pexelsvideo', title: 'Pexels Video', url: 'https://www.pexels.com/videos/', category: 'MONTAGE - DIVERS', description: 'Vidéos gratuites et libres de droits.' },
    { id: 'pixabayvideo', title: 'Pixabay Video', url: 'https://pixabay.com/videos/', category: 'MONTAGE - DIVERS', description: 'Énorme bibliothèque de vidéos gratuites.' },
    { id: 'mixkit', title: 'Mixkit', url: 'https://mixkit.co/', category: 'MONTAGE - DIVERS', description: 'Ressources gratuites de qualité (vidéos, musique, templates).' },
    { id: 'storyblocks', title: 'Storyblocks', url: 'https://www.storyblocks.com/', category: 'MONTAGE - DIVERS', description: 'Images d\'archives et musiques sous abonnement.' },
    { id: 'motionarray', title: 'Motion Array', url: 'https://motionarray.com/', category: 'MONTAGE - DIVERS', description: 'Templates Premiere et After Effects.' },
    { id: 'audiio', title: 'Audiio', url: 'https://audiio.com/', category: 'MONTAGE - DIVERS', description: 'Licence à vie pour musiques et SFX.' },
    { id: 'freesound', title: 'Freesound', url: 'https://freesound.org/', category: 'MONTAGE - DIVERS', description: 'Base de données collaborative de bruitages gratuits.' },
    { id: 'milanote', title: 'Milanote', url: 'https://milanote.com/', category: 'MONTAGE - DIVERS', description: 'Parfait pour préparer et visualiser ses storyboards.' },
    { id: 'tubebuddy', title: 'TubeBuddy', url: 'https://www.tubebuddy.com/', category: 'MONTAGE - DIVERS', description: 'Extension de SEO et gestion de chaîne YouTube.' },
    { id: 'vidiq', title: 'VidIQ', url: 'https://vidiq.com/', category: 'MONTAGE - DIVERS', description: 'Excellent outil pour l\'optimisation de vidéos YouTube.' },

    // ==========================================
    // CYBERSÉCURITÉ
    // ==========================================
    { id: 'tryhackme', title: 'TryHackMe', url: 'https://tryhackme.com/', category: 'CYBERSÉCURITÉ - APPRENTISSAGE', description: 'Apprentissage interactif de la cybersécurité pour tous niveaux.' },
    { id: 'hackthebox', title: 'Hack The Box', url: 'https://www.hackthebox.com/', category: 'CYBERSÉCURITÉ - APPRENTISSAGE', description: 'Plateforme d\'entraînement au pentest et hacking éthique.' },
    { id: 'rootme', title: 'Root-Me', url: 'https://www.root-me.org/', category: 'CYBERSÉCURITÉ - APPRENTISSAGE', description: 'Améliorez vos compétences en hacking.' },
    { id: 'cybrary', title: 'Cybrary', url: 'https://www.cybrary.it/', category: 'CYBERSÉCURITÉ - APPRENTISSAGE', description: 'Cours gratuits en cybersécurité et IT.' },
    { id: 'overthewire', title: 'OverTheWire', url: 'https://overthewire.org/', category: 'CYBERSÉCURITÉ - APPRENTISSAGE', description: 'Apprenez les concepts de sécurité via des wargames.' },
    { id: 'vulnhub', title: 'VulnHub', url: 'https://www.vulnhub.com/', category: 'CYBERSÉCURITÉ - APPRENTISSAGE', description: 'Machines virtuelles vulnérables pour s\'entraîner.' },
    { id: 'portswigger', title: 'PortSwigger Academy', url: 'https://portswigger.net/web-security', category: 'CYBERSÉCURITÉ - APPRENTISSAGE', description: 'Apprentissage gratuit de la sécurité web par les créateurs de Burp.' },
    { id: 'pentesterlab', title: 'PentesterLab', url: 'https://pentesterlab.com/', category: 'CYBERSÉCURITÉ - APPRENTISSAGE', description: 'Exercices pratiques de pénétration web.' },
    { id: 'kali', title: 'Kali Linux', url: 'https://www.kali.org/', category: 'CYBERSÉCURITÉ - OUTILS', description: 'Distribution Linux ultime pour le pentest.' },
    { id: 'wireshark', title: 'Wireshark', url: 'https://www.wireshark.org/', category: 'CYBERSÉCURITÉ - OUTILS', description: 'Analyseur de protocole réseau le plus utilisé.' },
    { id: 'burpsuite', title: 'Burp Suite', url: 'https://portswigger.net/burp', category: 'CYBERSÉCURITÉ - OUTILS', description: 'Outil de test de sécurité des applications web.' },
    { id: 'nmap', title: 'Nmap', url: 'https://nmap.org/', category: 'CYBERSÉCURITÉ - OUTILS', description: 'Scanner de sécurité réseau gratuit et open source.' },
    { id: 'metasploit', title: 'Metasploit', url: 'https://www.metasploit.com/', category: 'CYBERSÉCURITÉ - OUTILS', description: 'Framework de tests de pénétration le plus utilisé au monde.' },
    { id: 'johntheripper', title: 'John the Ripper', url: 'https://www.openwall.com/john/', category: 'CYBERSÉCURITÉ - OUTILS', description: 'Craqueur de mots de passe très populaire.' },
    { id: 'hashcat', title: 'Hashcat', url: 'https://hashcat.net/hashcat/', category: 'CYBERSÉCURITÉ - OUTILS', description: 'Utilitaire de récupération de mots de passe le plus rapide.' },
    { id: 'owaspzap', title: 'OWASP ZAP', url: 'https://www.zaproxy.org/', category: 'CYBERSÉCURITÉ - OUTILS', description: 'Scanner de vulnérabilités web gratuit.' },
    { id: 'shodan', title: 'Shodan', url: 'https://www.shodan.io/', category: 'CYBERSÉCURITÉ - OUTILS', description: 'Moteur de recherche pour les appareils connectés à Internet.' },
    { id: 'virustotal', title: 'VirusTotal', url: 'https://www.virustotal.com/', category: 'CYBERSÉCURITÉ - OUTILS', description: 'Analyse des fichiers et URLs suspects.' },
    
    // ==========================================
    // FILMS & ANIMATION
    // ==========================================
    { id: 'netflix', title: 'Netflix', url: 'https://www.netflix.com/', category: 'FILMS - STREAMING', description: 'Plateforme de streaming de films et séries.' },
    { id: 'primevideo', title: 'Prime Video', url: 'https://www.primevideo.com/', category: 'FILMS - STREAMING', description: 'Films, séries et productions originales Amazon.' },
    { id: 'disneyplus', title: 'Disney+', url: 'https://www.disneyplus.com/', category: 'FILMS - STREAMING', description: 'L\'univers Disney, Pixar, Marvel, Star Wars et National Geographic.' },
    { id: 'appletv', title: 'Apple TV+', url: 'https://tv.apple.com/', category: 'FILMS - STREAMING', description: 'Contenus originaux Apple de haute qualité.' },
    { id: 'max', title: 'Max (HBO)', url: 'https://www.max.com/', category: 'FILMS - STREAMING', description: 'Tout l\'univers de Warner Bros et HBO.' },
    { id: 'crunchyroll', title: 'Crunchyroll', url: 'https://www.crunchyroll.com/', category: 'FILMS - ANIMATION', description: 'La référence du streaming d\'anime.' },
    { id: 'adn', title: 'ADN (Animation Digital Network)', url: 'https://animationdigitalnetwork.fr/', category: 'FILMS - ANIMATION', description: 'Streaming d\'animation japonaise et franco-belge.' },
    { id: 'wakanim', title: 'Wakanim', url: 'https://www.wakanim.tv/', category: 'FILMS - ANIMATION', description: 'Séries d\'animation japonaise.' },
    { id: 'studio-ghibli', title: 'Studio Ghibli', url: 'https://www.ghibli.jp/', category: 'FILMS - ANIMATION', description: 'Site officiel du célèbre studio d\'animation japonais.' },
    { id: 'mubi', title: 'MUBI', url: 'https://mubi.com/', category: 'FILMS - STREAMING', description: 'Cinéma d\'auteur, films classiques et indépendants sélectionnés à la main.' },
    { id: 'criterion', title: 'The Criterion Channel', url: 'https://www.criterionchannel.com/', category: 'FILMS - STREAMING', description: 'Chefs-d\'œuvre du cinéma mondial.' },
    { id: 'arte', title: 'ARTE.tv', url: 'https://www.arte.tv/', category: 'FILMS - STREAMING', description: 'Documentaires, séries et films culturels gratuits.' },
    
    // ==========================================
    // EBOOK
    // ==========================================
    { id: 'gutenberg', title: 'Project Gutenberg', url: 'https://www.gutenberg.org/', category: 'EBOOK - LITTÉRATURE', description: 'Bibliothèque de plus de 70 000 eBooks gratuits.' },
    { id: 'amazon-kindle', title: 'Boutique Kindle', url: 'https://www.amazon.fr/ebooks-kindle/', category: 'EBOOK - LITTÉRATURE', description: 'La plus grande librairie numérique au monde.' },
    { id: 'kobo', title: 'Kobo', url: 'https://www.kobo.com/', category: 'EBOOK - LITTÉRATURE', description: 'Boutique alternative majeure d\'eBooks et liseuses.' },
    { id: 'gallica', title: 'Gallica', url: 'https://gallica.bnf.fr/', category: 'EBOOK - LITTÉRATURE', description: 'Bibliothèque numérique de la BnF.' },
    { id: 'librivox', title: 'LibriVox', url: 'https://librivox.org/', category: 'EBOOK - LITTÉRATURE', description: 'Livres audio gratuits du domaine public.' },
    { id: 'oreilly', title: 'O\'Reilly', url: 'https://www.oreilly.com/', category: 'EBOOK - TECH', description: 'Plateforme de référence pour l\'apprentissage tech et business.' },
    { id: 'packt', title: 'Packt', url: 'https://www.packtpub.com/', category: 'EBOOK - TECH', description: 'Livres et vidéos pour développeurs et professionnels de l\'IT.' },
    { id: 'manning', title: 'Manning Publications', url: 'https://www.manning.com/', category: 'EBOOK - TECH', description: 'Livres techniques de très haute qualité (série "In Action").' },
    { id: 'leanpub', title: 'Leanpub', url: 'https://leanpub.com/', category: 'EBOOK - TECH', description: 'Livres publiés par leurs auteurs pendant leur rédaction.' },
    { id: 'free-programming-books', title: 'Free Programming Books', url: 'https://ebookfoundation.github.io/free-programming-books/', category: 'EBOOK - TECH', description: 'Immense répertoire GitHub de livres de dev gratuits.' },
    
    // ==========================================
    // FORMATION
    // ==========================================
    { id: 'edx', title: 'edX', url: 'https://www.edx.org/', category: 'FORMATION - DEV', description: 'Cours des meilleures universités (Harvard, MIT).' },
    { id: 'pluralsight', title: 'Pluralsight', url: 'https://www.pluralsight.com/', category: 'FORMATION - DEV', description: 'Formations très pointues pour développeurs et pros de l\'IT.' },
    { id: 'codecademy', title: 'Codecademy', url: 'https://www.codecademy.com/', category: 'FORMATION - DEV', description: 'Apprentissage interactif du code.' },
    { id: 'freecodecamp', title: 'freeCodeCamp', url: 'https://www.freecodecamp.org/', category: 'FORMATION - DEV', description: 'Apprenez à coder gratuitement (certifications reconnues).' },
    { id: 'datacamp', title: 'DataCamp', url: 'https://www.datacamp.com/', category: 'FORMATION - DEV', description: 'Plateforme interactive dédiée à la Data Science et l\'IA.' },
    { id: 'skillshare', title: 'Skillshare', url: 'https://www.skillshare.com/', category: 'FORMATION - BUSINESS', description: 'Cours créatifs et business par abonnement.' },
    { id: 'linkedinlearning', title: 'LinkedIn Learning', url: 'https://learning.linkedin.com/', category: 'FORMATION - BUSINESS', description: 'Formations professionnelles avec certificats pour LinkedIn.' },
    { id: 'masterclass', title: 'MasterClass', url: 'https://www.masterclass.com/', category: 'FORMATION - BUSINESS', description: 'Cours donnés par des experts de renommée mondiale.' },

    // ==========================================
    // IA (Intelligence Artificielle)
    // ==========================================
    { id: 'dalle3', title: 'DALL-E 3', url: 'https://openai.com/dall-e-3', category: 'IA - IMAGES', description: 'Génération d\'images par OpenAI.' },
    { id: 'stable-diffusion', title: 'Stable Diffusion', url: 'https://stability.ai/', category: 'IA - IMAGES', description: 'Génération d\'images open-source et paramétrable.' },
    { id: 'elevenlabs', title: 'ElevenLabs', url: 'https://elevenlabs.io/', category: 'IA - AUDIO VIDEO', description: 'Le meilleur générateur de voix (Text-to-Speech) par IA.' },
    { id: 'suno', title: 'Suno AI', url: 'https://www.suno.ai/', category: 'IA - AUDIO VIDEO', description: 'Générateur de musique par IA ultra réaliste.' },

    // ==========================================
    // DEV
    // ==========================================
    { id: 'github-copilot', title: 'GitHub Copilot', url: 'https://github.com/features/copilot', category: 'DEV - ASSISTANTS', description: 'L\'assistant de code par l\'IA de GitHub.' },
    { id: 'cursor', title: 'Cursor', url: 'https://www.cursor.so/', category: 'DEV - ASSISTANTS', description: 'IDE basé sur VS Code avec IA intégrée (GPT-4).' },
    { id: 'netlify', title: 'Netlify', url: 'https://www.netlify.com/', category: 'DEV - OUTILS', description: 'Déploiement simple et rapide de sites statiques.' },
    { id: 'docker', title: 'Docker', url: 'https://www.docker.com/', category: 'DEV - OUTILS', description: 'Plateforme de conteneurisation incontournable.' },
    { id: 'figma', title: 'Figma', url: 'https://www.figma.com/', category: 'DEV - OUTILS', description: 'Design collaboratif UI/UX.' },

    // ==========================================
    // API
    // ==========================================
    { id: 'rapidapi', title: 'RapidAPI', url: 'https://rapidapi.com/', category: 'API - PUBLIQUES', description: 'Le plus grand hub d\'API au monde.' },
    { id: 'public-apis', title: 'Public APIs', url: 'https://github.com/public-apis/public-apis', category: 'API - PUBLIQUES', description: 'Liste GitHub gigantesque d\'API gratuites.' },
    { id: 'stripe-api', title: 'Stripe API', url: 'https://stripe.com/docs/api', category: 'API - PUBLIQUES', description: 'La référence des API de paiement.' },
    { id: 'twilio-api', title: 'Twilio API', url: 'https://www.twilio.com/docs', category: 'API - PUBLIQUES', description: 'API de communication (SMS, Voix).' },
    { id: 'swagger', title: 'Swagger', url: 'https://swagger.io/', category: 'API - OUTILS', description: 'Outils pour concevoir, créer et documenter des API REST.' },

    // ==========================================
    // JEUX
    // ==========================================
    { id: 'steam', title: 'Steam', url: 'https://store.steampowered.com/', category: 'JEUX - PC', description: 'La plus grande plateforme de jeux PC.' },
    { id: 'epicgames', title: 'Epic Games Store', url: 'https://store.epicgames.com/', category: 'JEUX - PC', description: 'Boutique de jeux PC, offrant des jeux gratuits chaque semaine.' },
    { id: 'romstation', title: 'RomStation', url: 'https://www.romstation.fr/', category: 'JEUX - RETRO', description: 'Tout l\'univers du retrogaming en un seul logiciel.' },
    { id: 'emulatorjs', title: 'EmulatorJS', url: 'https://emulatorjs.org/', category: 'JEUX - RETRO', description: 'Émulateurs fonctionnant directement dans le navigateur.' },
    { id: 'miniclip', title: 'Miniclip', url: 'https://www.miniclip.com/', category: 'JEUX - NAVIGATEUR', description: 'Classique des jeux sur navigateur.' },

    // ==========================================
    // DIVERS
    // ==========================================
    { id: 'notion', title: 'Notion', url: 'https://www.notion.so/', category: 'DIVERS - OUTILS', description: 'Espace de travail tout-en-un ultra puissant.' },
    { id: 'obsidian', title: 'Obsidian', url: 'https://obsidian.md/', category: 'DIVERS - OUTILS', description: 'Prise de notes avec un réseau de connaissances.' },
    { id: 'trello', title: 'Trello', url: 'https://trello.com/', category: 'DIVERS - OUTILS', description: 'Gestion de projets en mode Kanban.' },
    { id: '1password', title: '1Password', url: 'https://1password.com/', category: 'DIVERS - OUTILS', description: 'Excellent gestionnaire de mots de passe.' },
    { id: 'bitwarden', title: 'Bitwarden', url: 'https://bitwarden.com/', category: 'DIVERS - OUTILS', description: 'Gestionnaire de mots de passe open-source et gratuit.' },
    { id: 'coinmarketcap', title: 'CoinMarketCap', url: 'https://coinmarketcap.com/', category: 'DIVERS - AUTRE', description: 'Suivi des cryptomonnaies.' },
    { id: 'tradingview', title: 'TradingView', url: 'https://www.tradingview.com/', category: 'DIVERS - AUTRE', description: 'Graphiques financiers et réseau social pour traders.' },

    // ==========================================
    // IA - IMAGES (nouveaux)
    // ==========================================
    { id: 'adobefirefly', title: 'Adobe Firefly', url: 'https://firefly.adobe.com/', category: 'IA - IMAGES', description: 'Génération d\'images IA par Adobe, intégrée dans Creative Cloud.', date: '2026-08-01' },
    { id: 'ideogram', title: 'Ideogram', url: 'https://ideogram.ai/', category: 'IA - IMAGES', description: 'Génération d\'images IA avec rendu de texte exceptionnel.', date: '2026-08-01' },
    { id: 'fluxai', title: 'Flux AI', url: 'https://flux.ai/', category: 'IA - IMAGES', description: 'Modèle de génération d\'images IA open source haute qualité.', date: '2026-08-01' },
    { id: 'stablediffusionweb', title: 'Stable Diffusion Web', url: 'https://stablediffusionweb.com/', category: 'IA - IMAGES', description: 'Génération d\'images Stable Diffusion directement dans le navigateur.', date: '2026-08-01' },
    { id: 'krea', title: 'Krea AI', url: 'https://www.krea.ai/', category: 'IA - IMAGES', description: 'Génération et édition d\'images IA en temps réel.', date: '2026-08-01' },

    // ==========================================
    // IA - AUDIO VIDEO (nouveaux)
    // ==========================================
    { id: 'elevenlabs', title: 'ElevenLabs', url: 'https://elevenlabs.io/', category: 'IA - AUDIO VIDEO', description: 'Génération de voix et clonage vocal ultra-réaliste par IA.', date: '2026-08-01' },
    { id: 'udio', title: 'Udio', url: 'https://www.udio.com/', category: 'IA - AUDIO VIDEO', description: 'Génération de musique IA de haute qualité.', date: '2026-08-01' },
    { id: 'pikalabs', title: 'Pika Labs', url: 'https://pika.art/', category: 'IA - AUDIO VIDEO', description: 'Génération et édition de vidéos par IA.', date: '2026-08-01' },
    { id: 'kling', title: 'Kling AI', url: 'https://kling.kuaishou.com/', category: 'IA - AUDIO VIDEO', description: 'Génération de vidéos réalistes par IA.', date: '2026-08-01' },
    { id: 'musicfx', title: 'MusicFX', url: 'https://aitestkitchen.withgoogle.com/tools/music-fx', category: 'IA - AUDIO VIDEO', description: 'Génération de musique expérimentale par Google IA.', date: '2026-08-01' },

    // ==========================================
    // MONTAGE - PRO & PREMIUM
    // ==========================================
    { id: 'davinci', title: 'DaVinci Resolve', url: 'https://www.blackmagicdesign.com/fr/products/davinciresolve/', category: 'MONTAGE - PRO & PREMIUM', description: 'Suite de montage vidéo professionnelle (version gratuite très complète).', date: '2026-08-01' },
    { id: 'adobepremiere', title: 'Adobe Premiere Pro', url: 'https://www.adobe.com/fr/products/premiere.html', category: 'MONTAGE - PRO & PREMIUM', description: 'Le standard professionnel du montage vidéo par Adobe.', date: '2026-08-01' },
    { id: 'finalcutpro', title: 'Final Cut Pro', url: 'https://www.apple.com/fr/final-cut-pro/', category: 'MONTAGE - PRO & PREMIUM', description: 'Logiciel de montage vidéo professionnel exclusif macOS par Apple.', date: '2026-08-01' },
    { id: 'vegaspro', title: 'Vegas Pro', url: 'https://www.vegascreativesoftware.com/fr/', category: 'MONTAGE - PRO & PREMIUM', description: 'Suite de montage vidéo professionnelle pour Windows.', date: '2026-08-01' },

    // ==========================================
    // MONTAGE - OPEN SOURCE
    // ==========================================
    { id: 'kdenlive', title: 'Kdenlive', url: 'https://kdenlive.org/fr/', category: 'MONTAGE - OPEN SOURCE', description: 'Logiciel de montage vidéo non-linéaire gratuit et open-source.', date: '2026-08-01' },
    { id: 'shotcut', title: 'Shotcut', url: 'https://shotcut.org/', category: 'MONTAGE - OPEN SOURCE', description: 'Éditeur vidéo multiplateforme gratuit et open-source.', date: '2026-08-01' },
    { id: 'openshot', title: 'OpenShot', url: 'https://www.openshot.org/fr/', category: 'MONTAGE - OPEN SOURCE', description: 'Logiciel de montage vidéo simple et gratuit.', date: '2026-08-01' },
    { id: 'handbrake', title: 'HandBrake', url: 'https://handbrake.fr/', category: 'MONTAGE - OPEN SOURCE', description: 'Outil de conversion vidéo open-source puissant.', date: '2026-08-01' },

    // ==========================================
    // MONTAGE - IA & EN LIGNE
    // ==========================================
    { id: 'kapwing', title: 'Kapwing', url: 'https://www.kapwing.com/', category: 'MONTAGE - IA & LIGNE', description: 'Montage vidéo en ligne avec outils IA intégrés.', date: '2026-08-01' },
    { id: 'descript', title: 'Descript', url: 'https://www.descript.com/', category: 'MONTAGE - IA & LIGNE', description: 'Montage vidéo et podcast basé sur la transcription texte.', date: '2026-08-01' },
    { id: 'adobeexpress', title: 'Adobe Express', url: 'https://www.adobe.com/fr/express/', category: 'MONTAGE - IA & LIGNE', description: 'Création rapide de vidéos, posts et visuels en ligne.', date: '2026-08-01' },
    { id: 'clippchamp', title: 'Clipchamp', url: 'https://clipchamp.com/fr/', category: 'MONTAGE - IA & LIGNE', description: 'Éditeur vidéo en ligne gratuit intégré à Windows 11.', date: '2026-08-01' },

    // ==========================================
    // MONTAGE - MOBILE
    // ==========================================
    { id: 'capcut', title: 'CapCut', url: 'https://www.capcut.com/fr-fr/', category: 'MONTAGE - MOBILE', description: 'Application de montage vidéo populaire pour mobile et web.', date: '2026-08-01' },
    { id: 'vn', title: 'VN - Video Editor', url: 'https://www.vlognow.me/', category: 'MONTAGE - MOBILE', description: 'Éditeur vidéo mobile professionnel gratuit sans filigrane.', date: '2026-08-01' },
    { id: 'inshot', title: 'InShot', url: 'https://inshot.com/', category: 'MONTAGE - MOBILE', description: 'Application de montage photo et vidéo pour mobile.', date: '2026-08-01' },

    // ==========================================
    // JEUX - RETRO
    // ==========================================
    { id: 'retroarchweb', title: 'RetroArch Web', url: 'https://web.libretro.com/', category: 'JEUX - RETRO', description: 'Émulateur multi-systèmes directement dans le navigateur.', date: '2026-08-01' },
    { id: 'classicreload', title: 'ClassicReload', url: 'https://classicreload.com/', category: 'JEUX - RETRO', description: 'Jouez aux classiques DOS et Windows 3.x directement dans le navigateur.', date: '2026-08-01' },
    { id: 'oldcomputer', title: 'The Old Computer', url: 'https://www.myabandonware.com/', category: 'JEUX - RETRO', description: 'Téléchargez légalement des jeux abandonnés vintage.', date: '2026-08-01' },
    { id: 'internetarchivegames', title: 'Archive.org Games', url: 'https://archive.org/details/internetarcade', category: 'JEUX - RETRO', description: 'Milliers de jeux d\'arcade rétro jouables gratuitement.', date: '2026-08-01' },

    // ==========================================
    // JEUX - PC & INDEPENDANTS
    // ==========================================
    { id: 'itchio', title: 'itch.io', url: 'https://itch.io/', category: 'JEUX - PC', description: 'Plateforme de jeux indépendants avec milliers de titres gratuits.', date: '2026-08-01' },
    { id: 'gog', title: 'GOG.com', url: 'https://www.gog.com/fr', category: 'JEUX - PC', description: 'Jeux PC DRM-free avec nombreux titres gratuits.', date: '2026-08-01' },
    { id: 'indiedb', title: 'IndieDB', url: 'https://www.indiedb.com/', category: 'JEUX - PC', description: 'Communauté et base de données des jeux indépendants.', date: '2026-08-01' },

    // ==========================================
    // JEUX - NAVIGATEUR
    // ==========================================
    { id: 'poki', title: 'Poki', url: 'https://poki.com/fr', category: 'JEUX - NAVIGATEUR', description: 'Des centaines de jeux gratuits directement dans le navigateur.', date: '2026-08-01' },
    { id: 'crazygames', title: 'CrazyGames', url: 'https://www.crazygames.com/', category: 'JEUX - NAVIGATEUR', description: 'Jeux HTML5 et WebGL en ligne, sans téléchargement.', date: '2026-08-01' },
    { id: 'gamepix', title: 'GamePix', url: 'https://www.gamepix.com/', category: 'JEUX - NAVIGATEUR', description: 'Plateforme de jeux HTML5 multijoueur et solo.', date: '2026-08-01' },

    // ==========================================
    // FORMATION - BUSINESS
    // ==========================================
    { id: 'hubspotacademy', title: 'HubSpot Academy', url: 'https://academy.hubspot.com/', category: 'FORMATION - BUSINESS', description: 'Certifications gratuites en marketing, vente et CRM.', date: '2026-08-01' },
    { id: 'googledigital', title: 'Google Digital Garage', url: 'https://learndigital.withgoogle.com/digitalgarage/fr', category: 'FORMATION - BUSINESS', description: 'Formations gratuites certifiées par Google sur le digital et le business.', date: '2026-08-01' },
    { id: 'linkedinlearning', title: 'LinkedIn Learning', url: 'https://www.linkedin.com/learning/', category: 'FORMATION - BUSINESS', description: 'Milliers de cours professionnels en business, tech et créativité.', date: '2026-08-01' },
    { id: 'semrushacademy', title: 'Semrush Academy', url: 'https://www.semrush.com/academy/', category: 'FORMATION - BUSINESS', description: 'Certifications SEO, marketing digital et publicité en ligne.', date: '2026-08-01' },

    // ==========================================
    // EBOOK - TECH
    // ==========================================
    { id: 'freecomputerbooks', title: 'FreeComputerBooks', url: 'https://freecomputerbooks.com/', category: 'EBOOK - TECH', description: 'Milliers de livres informatiques et technologiques gratuits en ligne.', date: '2026-08-01' },
    { id: 'devdocs', title: 'DevDocs', url: 'https://devdocs.io/', category: 'EBOOK - TECH', description: 'Documentation de développement unifiée pour tous les langages.', date: '2026-08-01' },
    { id: 'openlibrary', title: 'Open Library', url: 'https://openlibrary.org/', category: 'EBOOK - TECH', description: 'Bibliothèque numérique ouverte avec des millions de livres.', date: '2026-08-01' },

    // ==========================================
    // CYBERSÉCURITÉ - OUTILS
    // ==========================================
    { id: 'virustotal', title: 'VirusTotal', url: 'https://www.virustotal.com/gui/home/upload', category: 'CYBERSÉCURITÉ - OUTILS', description: 'Analysez fichiers et URLs avec 70+ antivirus simultanément.', date: '2026-08-01' },
    { id: 'haveibeenpwned', title: 'Have I Been Pwned', url: 'https://haveibeenpwned.com/', category: 'CYBERSÉCURITÉ - OUTILS', description: 'Vérifiez si votre email a été compromis dans une fuite de données.', date: '2026-08-01' },
    { id: 'shodan', title: 'Shodan', url: 'https://www.shodan.io/', category: 'CYBERSÉCURITÉ - OUTILS', description: 'Moteur de recherche pour les appareils connectés à Internet.', date: '2026-08-01' },
    { id: 'cyberchef', title: 'CyberChef', url: 'https://gchq.github.io/CyberChef/', category: 'CYBERSÉCURITÉ - OUTILS', description: 'Boîte à outils pour encoder, décoder et analyser des données.', date: '2026-08-01' },

    // ==========================================
    // WINDOWS - LOGICIELS
    // ==========================================
    { id: 'sevenzip', title: '7-Zip', url: 'https://www.7-zip.org/', category: 'WINDOWS - LOGICIELS', description: 'Archiveur de fichiers gratuit et open-source ultra-performant.', date: '2026-08-01' },
    { id: 'vlcwindows', title: 'VLC Media Player', url: 'https://www.videolan.org/vlc/', category: 'WINDOWS - LOGICIELS', description: 'Lecteur multimédia gratuit et universel (tous formats).', date: '2026-08-01' },
    { id: 'notepadplusplus', title: 'Notepad++', url: 'https://notepad-plus-plus.org/fr/', category: 'WINDOWS - LOGICIELS', description: 'Éditeur de texte et code source avancé pour Windows.', date: '2026-08-01' },
    { id: 'vscode', title: 'VS Code', url: 'https://code.visualstudio.com/', category: 'WINDOWS - LOGICIELS', description: 'Éditeur de code gratuit par Microsoft, le plus populaire au monde.', date: '2026-08-01' },

    // ==========================================
    // WINDOWS - UTILITAIRES
    // ==========================================
    { id: 'windirstat', title: 'WinDirStat', url: 'https://windirstat.net/', category: 'WINDOWS - UTILITAIRES', description: 'Visualisez l\'espace disque occupé par vos fichiers et dossiers.', date: '2026-08-01' },
    { id: 'crystaldiskinfo', title: 'CrystalDiskInfo', url: 'https://crystalmark.info/en/software/crystaldiskinfo/', category: 'WINDOWS - UTILITAIRES', description: 'Surveille la santé de vos disques durs et SSD (S.M.A.R.T.).', date: '2026-08-01' },
    { id: 'autoruns', title: 'Autoruns', url: 'https://learn.microsoft.com/fr-fr/sysinternals/downloads/autoruns', category: 'WINDOWS - UTILITAIRES', description: 'Gérez tout ce qui démarre automatiquement sur Windows.', date: '2026-08-01' },
    { id: 'hwinfo', title: 'HWiNFO', url: 'https://www.hwinfo.com/', category: 'WINDOWS - UTILITAIRES', description: 'Surveillance matérielle complète de votre PC en temps réel.', date: '2026-08-01' }
];
