const LINKS_MONTAGE = [
    {
        "id": "nimvideo",
        "title": "NIM Video",
        "url": "http://nim.video/",
        "category": "MONTAGE - IA & LIGNE",
        "description": "Outils et ressources de montage vidéo."
    },
    {
        "id": "davinciresolve",
        "title": "DaVinci Resolve",
        "url": "https://www.blackmagicdesign.com/products/davinciresolve",
        "category": "MONTAGE - PRO & PREMIUM",
        "description": "Le meilleur logiciel de montage et étalonnage gratuit (version studio payante)."
    },
    {
        "id": "hitfilm",
        "title": "HitFilm",
        "url": "https://fxhome.com/product/hitfilm",
        "category": "MONTAGE - PRO & PREMIUM",
        "description": "Excellent pour le montage classique et les effets spéciaux (VFX)."
    },
    {
        "id": "lightworks",
        "title": "Lightworks",
        "url": "https://lwks.com/",
        "category": "MONTAGE - PRO & PREMIUM",
        "description": "Outil de montage professionnel très complet."
    },
    {
        "id": "kdenlive",
        "title": "Kdenlive",
        "url": "https://kdenlive.org/",
        "category": "MONTAGE - OPEN SOURCE",
        "description": "Monteur vidéo open-source très riche en fonctionnalités."
    },
    {
        "id": "shotcut",
        "title": "Shotcut",
        "url": "https://shotcut.org/",
        "category": "MONTAGE - OPEN SOURCE",
        "description": "Logiciel de montage vidéo libre, gratuit et multiplateforme."
    },
    {
        "id": "openshot",
        "title": "OpenShot",
        "url": "https://www.openshot.org/",
        "category": "MONTAGE - OPEN SOURCE",
        "description": "Très simple d'utilisation pour débuter avec le montage vidéo libre."
    },
    {
        "id": "capcut",
        "title": "CapCut",
        "url": "https://www.capcut.com/",
        "category": "MONTAGE - PRO & PREMIUM",
        "description": "Éditeur vidéo incontournable, intuitif avec d'excellents modèles."
    },
    {
        "id": "clipchamp",
        "title": "Clipchamp",
        "url": "https://clipchamp.com/",
        "category": "MONTAGE - IA & LIGNE",
        "description": "Très simple pour des petits montages en ligne ou sur Windows."
    },
    {
        "id": "veedio",
        "title": "Veed.io",
        "url": "https://www.veed.io/",
        "category": "MONTAGE - IA & LIGNE",
        "description": "Superbe éditeur en ligne, parfait pour les sous-titres automatiques."
    },
    {
        "id": "descript",
        "title": "Descript",
        "url": "https://www.descript.com/",
        "category": "MONTAGE - IA & LIGNE",
        "description": "Éditez vos vidéos en modifiant simplement le texte de la transcription."
    },
    {
        "id": "opusclip",
        "title": "Opus Clip",
        "url": "https://www.opus.pro/",
        "category": "MONTAGE - IA & LIGNE",
        "description": "Transforme de longues vidéos en formats courts automatiquement."
    },
    {
        "id": "premierepro",
        "title": "Adobe Premiere Pro",
        "url": "https://www.adobe.com/products/premiere.html",
        "category": "MONTAGE - PRO & PREMIUM",
        "description": "Le standard de l'industrie du montage vidéo."
    },
    {
        "id": "finalcutpro",
        "title": "Final Cut Pro",
        "url": "https://www.apple.com/final-cut-pro/",
        "category": "MONTAGE - PRO & PREMIUM",
        "description": "Logiciel de montage professionnel incontournable sur Mac."
    },
    {
        "id": "avid",
        "title": "Avid Media Composer",
        "url": "https://www.avid.com/media-composer",
        "category": "MONTAGE - PRO & PREMIUM",
        "description": "Outil de référence pour le montage cinéma et TV."
    },
    {
        "id": "vegaspro",
        "title": "Vegas Pro",
        "url": "https://www.vegascreativesoftware.com/",
        "category": "MONTAGE - PRO & PREMIUM",
        "description": "Logiciel de montage vidéo historique et puissant."
    },
    {
        "id": "powerdirector",
        "title": "CyberLink PowerDirector",
        "url": "https://www.cyberlink.com/products/powerdirector-video-editing-software/",
        "category": "MONTAGE - PRO & PREMIUM",
        "description": "Logiciel de montage complet et rapide."
    },
    {
        "id": "edius",
        "title": "Edius Pro",
        "url": "https://www.edius.net/",
        "category": "MONTAGE - PRO & PREMIUM",
        "description": "Performant pour le broadcast et le montage rapide."
    },
    {
        "id": "pinnacle",
        "title": "Pinnacle Studio",
        "url": "https://www.pinnaclesys.com/",
        "category": "MONTAGE - PRO & PREMIUM",
        "description": "Outil performant de l'édition basique à avancée."
    },
    {
        "id": "videostudio",
        "title": "Corel VideoStudio",
        "url": "https://www.videostudiopro.com/",
        "category": "MONTAGE - PRO & PREMIUM",
        "description": "Bonne alternative de milieu de gamme."
    },
    {
        "id": "olive",
        "title": "Olive Video Editor",
        "url": "https://olivevideoeditor.org/",
        "category": "MONTAGE - OPEN SOURCE",
        "description": "Monteur non-linéaire en développement rapide."
    },
    {
        "id": "blender",
        "title": "Blender",
        "url": "https://www.blender.org/",
        "category": "MONTAGE - OPEN SOURCE",
        "description": "Suite 3D incluant un puissant éditeur vidéo."
    },
    {
        "id": "natron",
        "title": "Natron",
        "url": "https://natrongithub.github.io/",
        "category": "MONTAGE - OPEN SOURCE",
        "description": "L'alternative open-source au compositing After Effects."
    },
    {
        "id": "flowblade",
        "title": "Flowblade",
        "url": "https://jliljebl.github.io/flowblade/",
        "category": "MONTAGE - OPEN SOURCE",
        "description": "Éditeur vidéo rapide et performant pour Linux."
    },
    {
        "id": "pitivi",
        "title": "Pitivi",
        "url": "https://www.pitivi.org/",
        "category": "MONTAGE - OPEN SOURCE",
        "description": "Montage simple et élégant sous Linux."
    },
    {
        "id": "cinelerra",
        "title": "Cinelerra",
        "url": "https://cinelerra-gg.org/",
        "category": "MONTAGE - OPEN SOURCE",
        "description": "Logiciel de montage professionnel open-source."
    },
    {
        "id": "losslesscut",
        "title": "LosslessCut",
        "url": "https://mifi.no/losslesscut/",
        "category": "MONTAGE - OPEN SOURCE",
        "description": "Coupez des vidéos très rapidement sans perte de qualité."
    },
    {
        "id": "lumafusion",
        "title": "LumaFusion",
        "url": "https://luma-touch.com/lumafusion-for-ios-2/",
        "category": "MONTAGE - MOBILE",
        "description": "L'application de montage pro sur iPad et iPhone."
    },
    {
        "id": "inshot",
        "title": "InShot",
        "url": "https://inshot.com/",
        "category": "MONTAGE - MOBILE",
        "description": "Excellent pour Instagram, TikTok et le format vertical."
    },
    {
        "id": "kinemaster",
        "title": "KineMaster",
        "url": "https://kinemaster.com/",
        "category": "MONTAGE - MOBILE",
        "description": "Monteur vidéo complet sur mobile."
    },
    {
        "id": "vnvideo",
        "title": "VN Video Editor",
        "url": "https://www.vlognow.me/",
        "category": "MONTAGE - MOBILE",
        "description": "Très puissant et gratuit sans filigrane."
    },
    {
        "id": "splice",
        "title": "Splice",
        "url": "https://spliceapp.com/",
        "category": "MONTAGE - MOBILE",
        "description": "Application de montage populaire et rapide."
    },
    {
        "id": "quik",
        "title": "Quik by GoPro",
        "url": "https://gopro.com/en/us/shop/softwareandapp/quik-app/",
        "category": "MONTAGE - MOBILE",
        "description": "Génération automatique de montages avec vos médias."
    },
    {
        "id": "filmmakerpro",
        "title": "Filmmaker Pro",
        "url": "https://www.filmmakerproapp.com/",
        "category": "MONTAGE - MOBILE",
        "description": "Montage avec fonctionnalités avancées sur mobile."
    },
    {
        "id": "videoshow",
        "title": "VideoShow",
        "url": "https://videoshowapp.com/",
        "category": "MONTAGE - MOBILE",
        "description": "Création et édition vidéo grand public."
    },
    {
        "id": "videoleap",
        "title": "Videoleap",
        "url": "https://videoleapapp.com/",
        "category": "MONTAGE - MOBILE",
        "description": "Application créative avec de très bons effets."
    },
    {
        "id": "canvavideo",
        "title": "Canva Vidéo",
        "url": "https://www.canva.com/video-editor/",
        "category": "MONTAGE - IA & LIGNE",
        "description": "Création de vidéos simplifiée avec des milliers de modèles."
    },
    {
        "id": "wevideo",
        "title": "WeVideo",
        "url": "https://www.wevideo.com/",
        "category": "MONTAGE - IA & LIGNE",
        "description": "Éditeur cloud très utilisé pour la collaboration."
    },
    {
        "id": "kapwing",
        "title": "Kapwing",
        "url": "https://www.kapwing.com/",
        "category": "MONTAGE - IA & LIGNE",
        "description": "Éditeur collaboratif, parfait pour les mèmes et les réseaux."
    },
    {
        "id": "fliki",
        "title": "Fliki",
        "url": "https://fliki.ai/",
        "category": "MONTAGE - IA & LIGNE",
        "description": "Génère des vidéos rapidement à partir de texte."
    },
    {
        "id": "flexclip",
        "title": "FlexClip",
        "url": "https://www.flexclip.com/",
        "category": "MONTAGE - IA & LIGNE",
        "description": "Idéal pour des vidéos courtes et promotionnelles."
    },
    {
        "id": "biteable",
        "title": "Biteable",
        "url": "https://biteable.com/",
        "category": "MONTAGE - IA & LIGNE",
        "description": "Créateur de vidéos d'entreprise animées."
    },
    {
        "id": "invideo",
        "title": "InVideo",
        "url": "https://invideo.io/",
        "category": "MONTAGE - IA & LIGNE",
        "description": "De riches modèles préconçus pour la publicité."
    },
    {
        "id": "animoto",
        "title": "Animoto",
        "url": "https://animoto.com/",
        "category": "MONTAGE - IA & LIGNE",
        "description": "Création de vidéos souvenirs et diaporamas."
    },
    {
        "id": "munch",
        "title": "Munch",
        "url": "https://www.getmunch.com/",
        "category": "MONTAGE - IA & LIGNE",
        "description": "Extraction IA des meilleurs moments pour TikTok/Shorts."
    },
    {
        "id": "gling",
        "title": "Gling",
        "url": "https://gling.ai/",
        "category": "MONTAGE - IA & LIGNE",
        "description": "Coupe automatiquement les silences et hésitations."
    },
    {
        "id": "vidyo",
        "title": "Vidyo.ai",
        "url": "https://vidyo.ai/",
        "category": "MONTAGE - IA & LIGNE",
        "description": "Repurposing de vidéos longues pour les réseaux sociaux."
    },
    {
        "id": "sora",
        "title": "Sora (OpenAI)",
        "url": "https://openai.com/sora",
        "category": "MONTAGE - IA & LIGNE",
        "description": "Générateur de vidéo texte-vers-vidéo impressionnant."
    },
    {
        "id": "kaiber",
        "title": "Kaiber",
        "url": "https://kaiber.ai/",
        "category": "MONTAGE - IA & LIGNE",
        "description": "Génération d'animations fluides par IA."
    },
    {
        "id": "heygen",
        "title": "HeyGen",
        "url": "https://www.heygen.com/",
        "category": "MONTAGE - IA & LIGNE",
        "description": "Avatars IA réalistes qui parlent depuis un texte."
    },
    {
        "id": "synthesia",
        "title": "Synthesia",
        "url": "https://www.synthesia.io/",
        "category": "MONTAGE - IA & LIGNE",
        "description": "Présentateurs virtuels créés par IA."
    },
    {
        "id": "pikalabs",
        "title": "Pika",
        "url": "https://pika.art/",
        "category": "MONTAGE - IA & LIGNE",
        "description": "Plateforme de génération de vidéos courtes IA."
    },
    {
        "id": "wonderdynamics",
        "title": "Wonder Dynamics",
        "url": "https://wonderdynamics.com/",
        "category": "MONTAGE - IA & LIGNE",
        "description": "Remplace automatiquement les acteurs par des personnages CG."
    },
    {
        "id": "topazvideo",
        "title": "Topaz Video AI",
        "url": "https://www.topazlabs.com/topaz-video-ai",
        "category": "MONTAGE - IA & LIGNE",
        "description": "Amélioration de qualité vidéo, upscale et slowmotion IA."
    },
    {
        "id": "pictory",
        "title": "Pictory",
        "url": "https://pictory.ai/",
        "category": "MONTAGE - IA & LIGNE",
        "description": "Transforme des articles de blog en vidéos courtes."
    },
    {
        "id": "aftereffects",
        "title": "Adobe After Effects",
        "url": "https://www.adobe.com/products/aftereffects.html",
        "category": "MONTAGE - DIVERS",
        "description": "Le leader incontesté du motion design."
    },
    {
        "id": "applemotion",
        "title": "Apple Motion",
        "url": "https://www.apple.com/final-cut-pro/motion/",
        "category": "MONTAGE - DIVERS",
        "description": "Animation et motion design optimisé pour Mac."
    },
    {
        "id": "nuke",
        "title": "Nuke",
        "url": "https://www.foundry.com/products/nuke-family",
        "category": "MONTAGE - DIVERS",
        "description": "Le standard de l'industrie pour le compositing VFX."
    },
    {
        "id": "cinema4d",
        "title": "Cinema 4D",
        "url": "https://www.maxon.net/fr/cinema-4d",
        "category": "MONTAGE - DIVERS",
        "description": "Logiciel de motion design 3D très accessible."
    },
    {
        "id": "audition",
        "title": "Adobe Audition",
        "url": "https://www.adobe.com/products/audition.html",
        "category": "MONTAGE - DIVERS",
        "description": "Station de travail audio professionnelle."
    },
    {
        "id": "audacity",
        "title": "Audacity",
        "url": "https://www.audacityteam.org/",
        "category": "MONTAGE - DIVERS",
        "description": "Enregistrement et édition audio open-source."
    },
    {
        "id": "reaper",
        "title": "Reaper",
        "url": "https://www.reaper.fm/",
        "category": "MONTAGE - DIVERS",
        "description": "Outil de production audio léger et puissant."
    },
    {
        "id": "podcastai",
        "title": "Adobe Podcast",
        "url": "https://podcast.adobe.com/enhance",
        "category": "MONTAGE - DIVERS",
        "description": "Nettoie automatiquement la voix pour un rendu studio par IA."
    },
    {
        "id": "whisper",
        "title": "OpenAI Whisper",
        "url": "https://github.com/openai/whisper",
        "category": "MONTAGE - DIVERS",
        "description": "Modèle de transcription open-source hyper précis."
    },
    {
        "id": "submagic",
        "title": "SubMagic",
        "url": "https://submagic.co/",
        "category": "MONTAGE - DIVERS",
        "description": "Sous-titres dynamiques par IA."
    },
    {
        "id": "captions",
        "title": "Captions App",
        "url": "https://www.captions.ai/",
        "category": "MONTAGE - DIVERS",
        "description": "Ajout de sous-titres IA hyper stylisés sur mobile."
    },
    {
        "id": "happyscribe",
        "title": "Happy Scribe",
        "url": "https://www.happyscribe.com/",
        "category": "MONTAGE - DIVERS",
        "description": "Service en ligne de sous-titrage et transcription."
    },
    {
        "id": "rev",
        "title": "Rev",
        "url": "https://www.rev.com/",
        "category": "MONTAGE - DIVERS",
        "description": "Services professionnels de sous-titrage manuel et IA."
    },
    {
        "id": "obs",
        "title": "OBS Studio",
        "url": "https://obsproject.com/",
        "category": "MONTAGE - DIVERS",
        "description": "Indispensable pour l'enregistrement et le streaming."
    },
    {
        "id": "camtasia",
        "title": "Camtasia",
        "url": "https://www.techsmith.com/video-editor.html",
        "category": "MONTAGE - DIVERS",
        "description": "Excellent pour la création de tutoriels vidéo."
    },
    {
        "id": "screenflow",
        "title": "ScreenFlow",
        "url": "https://www.telestream.net/screenflow/",
        "category": "MONTAGE - DIVERS",
        "description": "Enregistrement d'écran et montage facile sur Mac."
    },
    {
        "id": "loom",
        "title": "Loom",
        "url": "https://www.loom.com/",
        "category": "MONTAGE - DIVERS",
        "description": "Messages vidéo asynchrones pour les équipes."
    },
    {
        "id": "snagit",
        "title": "Snagit",
        "url": "https://www.techsmith.com/screen-capture.html",
        "category": "MONTAGE - DIVERS",
        "description": "Capture d'écran avancée."
    },
    {
        "id": "handbrake",
        "title": "HandBrake",
        "url": "https://handbrake.fr/",
        "category": "MONTAGE - DIVERS",
        "description": "Le meilleur compresseur vidéo open-source."
    },
    {
        "id": "shutterencoder",
        "title": "Shutter Encoder",
        "url": "https://www.shutterencoder.com/",
        "category": "MONTAGE - DIVERS",
        "description": "Outil de conversion ultra complet créé par un Français."
    },
    {
        "id": "ffmpeg",
        "title": "FFmpeg",
        "url": "https://ffmpeg.org/",
        "category": "MONTAGE - DIVERS",
        "description": "L'outil ultime en ligne de commande pour la vidéo."
    },
    {
        "id": "vlc",
        "title": "VLC Media Player",
        "url": "https://www.videolan.org/vlc/",
        "category": "MONTAGE - DIVERS",
        "description": "Lecteur incontournable qui gère aussi la conversion."
    },
    {
        "id": "frameio",
        "title": "Frame.io",
        "url": "https://frame.io/",
        "category": "MONTAGE - DIVERS",
        "description": "Plateforme de révision et de collaboration vidéo."
    },
    {
        "id": "kyno",
        "title": "Kyno",
        "url": "https://lesspain.software/kyno/",
        "category": "MONTAGE - DIVERS",
        "description": "Gestion de rushs et métadonnées."
    },
    {
        "id": "eagle",
        "title": "Eagle",
        "url": "https://eagle.cool/",
        "category": "MONTAGE - DIVERS",
        "description": "Organisation visuelle d'assets vidéo, audio et images."
    },
    {
        "id": "postlab",
        "title": "Postlab",
        "url": "https://hedge.video/postlab",
        "category": "MONTAGE - DIVERS",
        "description": "Collaboration cloud pour FCPX et Premiere."
    },
    {
        "id": "iconik",
        "title": "Iconik",
        "url": "https://www.iconik.io/",
        "category": "MONTAGE - DIVERS",
        "description": "Gestion de médias dans le cloud pour les créateurs."
    },
    {
        "id": "envato",
        "title": "Envato Elements",
        "url": "https://elements.envato.com/",
        "category": "MONTAGE - DIVERS",
        "description": "Banque massive de templates, vidéos et musiques."
    },
    {
        "id": "artlist",
        "title": "Artlist",
        "url": "https://artlist.io/",
        "category": "MONTAGE - DIVERS",
        "description": "Musiques, bruitages et vidéos libres de droits de haute qualité."
    },
    {
        "id": "epidemicsound",
        "title": "Epidemic Sound",
        "url": "https://www.epidemicsound.com/",
        "category": "MONTAGE - DIVERS",
        "description": "Le standard pour la musique de créateurs YouTube."
    },
    {
        "id": "pexelsvideo",
        "title": "Pexels Video",
        "url": "https://www.pexels.com/videos/",
        "category": "MONTAGE - DIVERS",
        "description": "Vidéos gratuites et libres de droits."
    },
    {
        "id": "pixabayvideo",
        "title": "Pixabay Video",
        "url": "https://pixabay.com/videos/",
        "category": "MONTAGE - DIVERS",
        "description": "Énorme bibliothèque de vidéos gratuites."
    },
    {
        "id": "mixkit",
        "title": "Mixkit",
        "url": "https://mixkit.co/",
        "category": "MONTAGE - DIVERS",
        "description": "Ressources gratuites de qualité (vidéos, musique, templates)."
    },
    {
        "id": "storyblocks",
        "title": "Storyblocks",
        "url": "https://www.storyblocks.com/",
        "category": "MONTAGE - DIVERS",
        "description": "Images d'archives et musiques sous abonnement."
    },
    {
        "id": "motionarray",
        "title": "Motion Array",
        "url": "https://motionarray.com/",
        "category": "MONTAGE - DIVERS",
        "description": "Templates Premiere et After Effects."
    },
    {
        "id": "audiio",
        "title": "Audiio",
        "url": "https://audiio.com/",
        "category": "MONTAGE - DIVERS",
        "description": "Licence à vie pour musiques et SFX."
    },
    {
        "id": "freesound",
        "title": "Freesound",
        "url": "https://freesound.org/",
        "category": "MONTAGE - DIVERS",
        "description": "Base de données collaborative de bruitages gratuits."
    },
    {
        "id": "milanote",
        "title": "Milanote",
        "url": "https://milanote.com/",
        "category": "MONTAGE - DIVERS",
        "description": "Parfait pour préparer et visualiser ses storyboards."
    },
    {
        "id": "tubebuddy",
        "title": "TubeBuddy",
        "url": "https://www.tubebuddy.com/",
        "category": "MONTAGE - DIVERS",
        "description": "Extension de SEO et gestion de chaîne YouTube."
    },
    {
        "id": "vidiq",
        "title": "VidIQ",
        "url": "https://vidiq.com/",
        "category": "MONTAGE - DIVERS",
        "description": "Excellent outil pour l'optimisation de vidéos YouTube."
    },
    {
        "id": "adobeexpress",
        "title": "Adobe Express",
        "url": "https://www.adobe.com/fr/express/",
        "category": "MONTAGE - IA & LIGNE",
        "description": "Création rapide de vidéos, posts et visuels en ligne.",
        "date": "2026-08-01"
    },
    {
        "id": "lumadreammachine",
        "title": "Luma Dream Machine",
        "url": "https://lumalabs.ai/dream-machine",
        "category": "MONTAGE - IA & LIGNE",
        "description": "Modèle vidéo IA cinématique ultra-réaliste avec physique naturelle et mouvements de caméra fluides.",
        "icon": "https://lumalabs.ai/favicon.ico"
    },
    {
        "id": "hailuoai",
        "title": "Hailuo AI (MiniMax)",
        "url": "https://hailuoai.video/",
        "category": "MONTAGE - IA & LIGNE",
        "description": "Générateur vidéo IA à la pointe du photoréalisme pour les visages, expressions et scènes dynamiques.",
        "icon": "https://hailuoai.video/favicon.ico"
    },
    {
        "id": "vidu",
        "title": "Vidu AI",
        "url": "https://www.vidu.studio/",
        "category": "MONTAGE - IA & LIGNE",
        "description": "Moteur ultra-rapide de génération vidéo IA 1080p avec simulation physique d'effets dynamiques.",
        "icon": "https://www.vidu.studio/favicon.ico"
    },
    {
        "id": "haiper",
        "title": "Haiper AI",
        "url": "https://haiper.ai/",
        "category": "MONTAGE - IA & LIGNE",
        "description": "Outil de création et animation de vidéos courtes par IA, rapide et accessible pour les réseaux sociaux.",
        "icon": "https://haiper.ai/favicon.ico"
    },
    {
        "id": "viggle",
        "title": "Viggle AI",
        "url": "https://viggle.ai/",
        "category": "MONTAGE - IA & LIGNE",
        "description": "Animation de personnages par IA et remplacement corporel guidé par le mouvement d'une vidéo.",
        "icon": "https://viggle.ai/favicon.ico"
    },
    {
        "id": "hedra",
        "title": "Hedra",
        "url": "https://www.hedra.com/",
        "category": "MONTAGE - IA & LIGNE",
        "description": "Génération d'avatars humains et personnages virtuels parlants avec synchronisation labiale expressive.",
        "icon": "https://www.hedra.com/favicon.ico"
    },
    {
        "id": "pixverse",
        "title": "PixVerse",
        "url": "https://pixverse.ai/",
        "category": "MONTAGE - IA & LIGNE",
        "description": "Générateur vidéo IA 4K puissant avec contrôle des mouvements de caméra et filtres dynamiques.",
        "icon": "https://pixverse.ai/favicon.ico"
    },
    {
        "id": "ltxstudio",
        "title": "LTX Studio",
        "url": "https://ltx.studio/",
        "category": "MONTAGE - IA & LIGNE",
        "description": "Studio cinématique complet par IA pour concevoir des courts-métrages avec cohérence narrative et plans multiples.",
        "icon": "https://ltx.studio/favicon.ico"
    },
    {
        "id": "did",
        "title": "D-ID",
        "url": "https://www.d-id.com/",
        "category": "MONTAGE - IA & LIGNE",
        "description": "Animation de photos et portraits en vidéos parlantes réalistes avec synchronisation labiale par IA.",
        "icon": "https://www.d-id.com/favicon.ico"
    },
    {
        "id": "klap",
        "title": "Klap AI",
        "url": "https://klap.app/",
        "category": "MONTAGE - IA & LIGNE",
        "description": "Extraction automatique de vidéos courtes virales (Shorts, Reels, TikTok) avec sous-titres animés et cadrage IA.",
        "icon": "https://klap.app/favicon.ico"
    },
    {
        "id": "morphstudio",
        "title": "Morph Studio",
        "url": "https://www.morphstudio.com/",
        "category": "MONTAGE - IA & LIGNE",
        "description": "Plateforme de création de films IA sur tableau blanc infini (canvas) et storyboard interactif.",
        "icon": "https://www.morphstudio.com/favicon.ico"
    },
    {
        "id": "colossyan",
        "title": "Colossyan",
        "url": "https://www.colossyan.com/",
        "category": "MONTAGE - IA & LIGNE",
        "description": "Création de vidéos d'entreprise et de formation avec acteurs virtuels IA multilingues.",
        "icon": "https://www.colossyan.com/favicon.ico"
    },
    {
        "id": "klingai",
        "title": "Kling AI",
        "url": "https://klingai.com/",
        "category": "MONTAGE - IA & LIGNE",
        "description": "Portail international officiel de Kling AI pour la génération de vidéos cinématiques ultra-réalistes.",
        "icon": "https://klingai.com/favicon.ico"
    },
    {
        "id": "domoai",
        "title": "DomoAI",
        "url": "https://domoai.app/",
        "category": "MONTAGE - IA & LIGNE",
        "description": "Transfert de style vidéo (Video-to-Video) en anime, 3D, pâte à modeler ou comics avec cohérence temporelle.",
        "icon": "https://domoai.app/favicon.ico"
    },
    {
        "id": "raskai",
        "title": "Rask AI",
        "url": "https://www.rask.ai/",
        "category": "MONTAGE - IA & LIGNE",
        "description": "Localisation et doublage vidéo dans plus de 130 langues avec clonage vocal et synchronisation labiale par IA.",
        "icon": "https://www.rask.ai/favicon.ico"
    },
    {
        "id": "deepbrainai",
        "title": "DeepBrain AI",
        "url": "https://www.deepbrain.io/",
        "category": "MONTAGE - IA & LIGNE",
        "description": "Studio vidéo IA créant des présentateurs et journalistes virtuels photoréalistes à partir de texte.",
        "icon": "https://www.deepbrain.io/favicon.ico"
    },
    {
        "id": "vmake",
        "title": "Vmake AI",
        "url": "https://vmake.ai/",
        "category": "MONTAGE - IA & LIGNE",
        "description": "Suite vidéo IA e-commerce : mannequins IA, suppression/changement d'arrière-plan vidéo et upscaling 4K.",
        "icon": "https://vmake.ai/favicon.ico"
    },
    {
        "id": "polloai",
        "title": "Pollo AI",
        "url": "https://pollo.ai/",
        "category": "MONTAGE - IA & LIGNE",
        "description": "Plateforme tout-en-un regroupant et comparant les meilleurs moteurs de génération vidéo IA du marché.",
        "icon": "https://pollo.ai/favicon.ico"
    },
    {
        "id": "moonvalley",
        "title": "Moonvalley",
        "url": "https://moonvalley.ai/",
        "category": "MONTAGE - IA & LIGNE",
        "description": "Modèle de génération vidéo IA haute définition aux styles cinématiques et animés variés.",
        "icon": "https://moonvalley.ai/favicon.ico"
    },
    {
        "id": "seaartai",
        "title": "SeaArt AI",
        "url": "https://www.seaart.ai/",
        "category": "MONTAGE - IA & LIGNE",
        "description": "Studio de création artistique et vidéo par IA avec modèles communautaires et animations avancées.",
        "icon": "https://www.seaart.ai/favicon.ico"
    },
    {
        "id": "leiapix",
        "title": "LeiaPix Converter",
        "url": "https://convert.leiapix.com/",
        "category": "MONTAGE - IA & LIGNE",
        "description": "Transforme toute image 2D en vidéo avec effet de parallaxe et profondeur 3D animée.",
        "icon": "https://convert.leiapix.com/favicon.ico"
    },
    {
        "id": "lalamu",
        "title": "Lalamu Studio",
        "url": "https://lalamu.studio/",
        "category": "MONTAGE - IA & LIGNE",
        "description": "Génération rapide de vidéos et synchronisation labiale par IA à partir d'un texte ou d'un fichier audio.",
        "icon": "https://lalamu.studio/favicon.ico"
    },
    {
        "id": "vizard",
        "title": "Vizard AI",
        "url": "https://vizard.ai/",
        "category": "MONTAGE - IA & LIGNE",
        "description": "Découpe automatique de vidéos longues en formats courts viraux avec sous-titres animés et cadrage IA.",
        "icon": "https://vizard.ai/favicon.ico"
    },
    {
        "id": "twoshortai",
        "title": "2short.ai",
        "url": "https://2short.ai/",
        "category": "MONTAGE - IA & LIGNE",
        "description": "Analyse de vidéos YouTube et extraction intelligente des meilleurs moments sous forme de Shorts.",
        "icon": "https://2short.ai/favicon.ico"
    },
    {
        "id": "spikesstudio",
        "title": "Spikes Studio",
        "url": "https://spikes.studio/",
        "category": "MONTAGE - IA & LIGNE",
        "description": "Générateur de clips et temps forts automatisé pour streamers Twitch et créateurs YouTube.",
        "icon": "https://spikes.studio/favicon.ico"
    },
    {
        "id": "qlip",
        "title": "Qlip.ai",
        "url": "https://qlip.ai/",
        "category": "MONTAGE - IA & LIGNE",
        "description": "Plateforme d'analyse vidéo par IA extrayant automatiquement les citations et séquences clés.",
        "icon": "https://qlip.ai/favicon.ico"
    },
    {
        "id": "hourone",
        "title": "Hour One",
        "url": "https://www.hourone.ai/",
        "category": "MONTAGE - IA & LIGNE",
        "description": "Création de vidéos d'entreprise et de formation guidées par des présentateurs virtuels photoréalistes.",
        "icon": "https://www.hourone.ai/favicon.ico"
    },
    {
        "id": "elai",
        "title": "Elai.io",
        "url": "https://elai.io/",
        "category": "MONTAGE - IA & LIGNE",
        "description": "Génération de vidéos interactives avec avatars IA à partir de simples articles ou présentations.",
        "icon": "https://elai.io/favicon.ico"
    },
    {
        "id": "yepic",
        "title": "Yepic AI",
        "url": "https://yepic.ai/",
        "category": "MONTAGE - IA & LIGNE",
        "description": "Création de vidéos multilingues avec avatars parlants en temps réel sans équipement de tournage.",
        "icon": "https://yepic.ai/favicon.ico"
    },
    {
        "id": "liveportrait",
        "title": "LivePortrait",
        "url": "https://liveportrait.github.io/",
        "category": "MONTAGE - IA & LIGNE",
        "description": "Animation faciale par IA ultra-réaliste pilotant les expressions d'un portrait depuis une vidéo source.",
        "icon": "https://liveportrait.github.io/favicon.ico"
    },
    {
        "id": "hitpawvideo",
        "title": "HitPaw Video Enhancer",
        "url": "https://www.hitpaw.com/fr/video-enhancer.html",
        "category": "MONTAGE - IA & LIGNE",
        "description": "Amélioration de qualité vidéo, débruitage et upscaling jusqu'en 8K par réseaux de neurones.",
        "icon": "https://www.hitpaw.com/favicon.ico"
    },
    {
        "id": "avclabs",
        "title": "AVCLabs Video Enhancer AI",
        "url": "https://www.avclabs.com/video-enhancer-ai.html",
        "category": "MONTAGE - IA & LIGNE",
        "description": "Restauration, colorisation et conversion de vidéos anciennes vers la haute définition par IA.",
        "icon": "https://www.avclabs.com/favicon.ico"
    },
    {
        "id": "falai",
        "title": "Fal.ai",
        "url": "https://fal.ai/",
        "category": "MONTAGE - IA & LIGNE",
        "description": "Plateforme cloud ultra-rapide pour exécuter les derniers modèles vidéo open-source (Wan, Hunyuan, LTX).",
        "icon": "https://fal.ai/favicon.ico"
    },
    {
        "id": "replicate",
        "title": "Replicate",
        "url": "https://replicate.com/",
        "category": "MONTAGE - IA & LIGNE",
        "description": "Exécution dans le cloud des modèles IA vidéo, audio et image open-source avec interface et API simples.",
        "icon": "https://replicate.com/favicon.ico"
    },
    {
        "id": "genmo",
        "title": "Genmo AI",
        "url": "https://genmo.ai/",
        "category": "MONTAGE - IA & LIGNE",
        "description": "Moteur de création vidéo et 3D spécialisé dans la physique réaliste et les mouvements fluides.",
        "icon": "https://genmo.ai/favicon.ico"
    },
    {
        "id": "decohere",
        "title": "Decohere",
        "url": "https://www.decohere.ai/",
        "category": "MONTAGE - IA & LIGNE",
        "description": "Générateur vidéo IA en temps réel avec transitions fluides et contrôle direct de la caméra.",
        "icon": "https://www.decohere.ai/favicon.ico"
    },
    {
        "id": "deforum",
        "title": "Deforum",
        "url": "https://deforum.art/",
        "category": "MONTAGE - IA & LIGNE",
        "description": "Animations psychédéliques, zooms infinis et morphing vidéo continu générés par IA.",
        "icon": "https://deforum.art/favicon.ico"
    },
    {
        "id": "ebsynth",
        "title": "EbSynth",
        "url": "https://ebsynth.com/",
        "category": "MONTAGE - IA & LIGNE",
        "description": "Outil de rotoscopie IA propageant le style d'une seule image peinte à l'ensemble d'une vidéo.",
        "icon": "https://ebsynth.com/favicon.ico"
    },
    {
        "id": "crayoai",
        "title": "Crayo AI",
        "url": "https://crayo.ai/",
        "category": "MONTAGE - IA & LIGNE",
        "description": "Générateur automatisé de vidéos virales TikTok et Shorts avec voix off et sous-titres animés.",
        "icon": "https://crayo.ai/favicon.ico"
    },
    {
        "id": "unscreen",
        "title": "Unscreen",
        "url": "https://www.unscreen.com/",
        "category": "MONTAGE - IA & LIGNE",
        "description": "Suppression automatique d'arrière-plan vidéo 100% en ligne sans fond vert.",
        "icon": "https://www.unscreen.com/favicon.ico"
    },
    {
        "id": "timebolt",
        "title": "Timebolt",
        "url": "https://www.timebolt.io/",
        "category": "MONTAGE - IA & LIGNE",
        "description": "Découpage automatique ultra-rapide des silences et scènes mortes dans les rushs vidéo.",
        "icon": "https://www.timebolt.io/favicon.ico"
    },
    {
        "id": "autopod",
        "title": "AutoPod",
        "url": "https://www.autopod.fm/",
        "category": "MONTAGE - IA & LIGNE",
        "description": "Automatisation du montage multi-caméras par IA pour podcasts et émissions vidéo sur Premiere Pro.",
        "icon": "https://www.autopod.fm/favicon.ico"
    },
    {
        "id": "cascadeur",
        "title": "Cascadeur",
        "url": "https://cascadeur.com/",
        "category": "MONTAGE - IA & LIGNE",
        "description": "Logiciel d'animation de personnages 3D assisté par IA avec simulation physique automatique.",
        "icon": "https://cascadeur.com/favicon.ico"
    },
    {
        "id": "krikey",
        "title": "Krikey AI",
        "url": "https://www.krikey.ai/",
        "category": "MONTAGE - IA & LIGNE",
        "description": "Génération d'animations 3D text-to-animation par IA pour avatars et moteurs de jeu.",
        "icon": "https://www.krikey.ai/favicon.ico"
    },
    {
        "id": "tavus",
        "title": "Tavus",
        "url": "https://tavus.io/",
        "category": "MONTAGE - IA & LIGNE",
        "description": "Plateforme pionnière de répliques humaines et vidéos interactives en temps réel par IA.",
        "icon": "https://tavus.io/favicon.ico"
    },
    {
        "id": "bhuman",
        "title": "BHuman",
        "url": "https://www.bhuman.ai/",
        "category": "MONTAGE - IA & LIGNE",
        "description": "Génération massive de vidéos personnalisées par IA avec prononciation individuelle des noms des clients.",
        "icon": "https://www.bhuman.ai/favicon.ico"
    },
    {
        "id": "lumen5",
        "title": "Lumen5",
        "url": "https://lumen5.com/",
        "category": "MONTAGE - IA & LIGNE",
        "description": "Transformation automatique d'articles de blog et textes en vidéos professionnelles pour réseaux sociaux.",
        "icon": "https://lumen5.com/favicon.ico"
    },
    {
        "id": "steveai",
        "title": "Steve AI",
        "url": "https://www.steve.ai/",
        "category": "MONTAGE - IA & LIGNE",
        "description": "Création complète de vidéos animées 2D et prises de vues réelles à partir d'un script ou prompt.",
        "icon": "https://www.steve.ai/favicon.ico"
    },
    {
        "id": "rawshorts",
        "title": "Raw Shorts",
        "url": "https://www.rawshorts.com/",
        "category": "MONTAGE - IA & LIGNE",
        "description": "Créateur IA de vidéos explicatives animées sur tableau blanc (whiteboard) à partir de texte.",
        "icon": "https://www.rawshorts.com/favicon.ico"
    },
    {
        "id": "plask",
        "title": "Plask AI",
        "url": "https://plask.ai/",
        "category": "MONTAGE - IA & LIGNE",
        "description": "Capture de mouvement (MoCap) par webcam pour animer des personnages 3D sans capteurs.",
        "icon": "https://plask.ai/favicon.ico"
    },
    {
        "id": "choppity",
        "title": "Choppity",
        "url": "https://choppity.com/",
        "category": "MONTAGE - IA & LIGNE",
        "description": "Éditeur vidéo IA pour podcasts : découpage automatique, sous-titres animés et cadrage multi-caméras.",
        "icon": "https://choppity.com/favicon.ico"
    },
    {
        "id": "capte",
        "title": "Capte",
        "url": "https://capte.co/",
        "category": "MONTAGE - IA & LIGNE",
        "description": "Outil français pour générer des sous-titres dynamiques et animés sur les vidéos courtes en 1 clic.",
        "icon": "https://capte.co/favicon.ico"
    },
    {
        "id": "vidnoz",
        "title": "Vidnoz AI",
        "url": "https://www.vidnoz.com/",
        "category": "MONTAGE - IA & LIGNE",
        "description": "Générateur vidéo IA gratuit avec plus de 300 avatars parlants et modèles vidéo prêts à l'emploi.",
        "icon": "https://www.vidnoz.com/favicon.ico"
    },
    {
        "id": "visla",
        "title": "Visla",
        "url": "https://www.visla.us/",
        "category": "MONTAGE - IA & LIGNE",
        "description": "Assistant de production vidéo tout-en-un par IA : script, sélection de b-rolls, voix off et montage automatique.",
        "icon": "https://www.visla.us/favicon.ico"
    },
    {
        "id": "synthesys",
        "title": "Synthesys",
        "url": "https://synthesys.io/",
        "category": "MONTAGE - IA & LIGNE",
        "description": "Moteur d'avatars humains et voix off IA naturelles pour vidéos de formation et marketing.",
        "icon": "https://synthesys.io/favicon.ico"
    },
    {
        "id": "autocut",
        "title": "AutoCut",
        "url": "https://www.autocut.fr/",
        "category": "MONTAGE - IA & LIGNE",
        "description": "Plugin pour Premiere Pro et DaVinci Resolve : coupe automatique des silences, zooms et sous-titres animés.",
        "icon": "https://www.autocut.fr/favicon.ico"
    },
    {
        "id": "peech",
        "title": "Peech AI",
        "url": "https://www.peech-ai.com/",
        "category": "MONTAGE - IA & LIGNE",
        "description": "Plateforme d'édition vidéo automatique pour marques : charte graphique, sous-titrage et découpage instantané.",
        "icon": "https://www.peech-ai.com/favicon.ico"
    },
    {
        "id": "kreadoai",
        "title": "Kreado AI",
        "url": "https://www.kreadoai.com/",
        "category": "MONTAGE - IA & LIGNE",
        "description": "Studio vidéo IA multilingue avec avatars réalistes pour le e-commerce et la création de publicités.",
        "icon": "https://www.kreadoai.com/favicon.ico"
    },
    {
        "id": "swapface",
        "title": "Swapface",
        "url": "https://swapface.org/",
        "category": "MONTAGE - IA & LIGNE",
        "description": "Remplacement de visage en temps réel par IA pour vidéos enregistrées ou streaming webcam direct.",
        "icon": "https://swapface.org/favicon.ico"
    },
    {
        "id": "cutoutpro",
        "title": "Cutout.pro Video",
        "url": "https://www.cutout.pro/",
        "category": "MONTAGE - IA & LIGNE",
        "description": "Détourage vidéo automatique sans fond vert, suppression d'objets indésirables et retouche IA.",
        "icon": "https://www.cutout.pro/favicon.ico"
    },
    {
        "id": "akool",
        "title": "Akool",
        "url": "https://akool.com/",
        "category": "MONTAGE - IA & LIGNE",
        "description": "Studio IA haut de gamme spécialisé dans le Face Swap vidéo 4K, les avatars et la création publicitaire.",
        "icon": "https://akool.com/favicon.ico"
    },
    {
        "id": "deepcake",
        "title": "Deepcake",
        "url": "https://deepcake.io/",
        "category": "MONTAGE - IA & LIGNE",
        "description": "Clonage d'acteurs réels et doublage vidéo studio par IA pour la production cinématographique et publicitaire.",
        "icon": "https://deepcake.io/favicon.ico"
    },
    {
        "id": "artflow",
        "title": "Artflow AI",
        "url": "https://artflow.ai/",
        "category": "MONTAGE - IA & LIGNE",
        "description": "Studio de création de dessins animés par IA avec personnages récurrents et génération d'histoires.",
        "icon": "https://artflow.ai/favicon.ico"
    },
    {
        "id": "kaedim",
        "title": "Kaedim 3D",
        "url": "https://www.kaedim3d.com/",
        "category": "MONTAGE - IA & LIGNE",
        "description": "Génération de modèles 3D prêts à l'animation à partir de simples images 2D par IA.",
        "icon": "https://www.kaedim3d.com/favicon.ico"
    },
    {
        "id": "wisecut",
        "title": "Wisecut",
        "url": "https://www.wisecut.video/",
        "category": "MONTAGE - IA & LIGNE",
        "description": "Montage automatique par IA : suppression des silences, auto-ducking audio et sous-titrage automatique.",
        "icon": "https://www.wisecut.video/favicon.ico"
    },
    {
        "id": "neurallove",
        "title": "Neural.love",
        "url": "https://neural.love/",
        "category": "MONTAGE - IA & LIGNE",
        "description": "Restauration vidéo IA : upscaling 4K, conversion 60 FPS, colorisation et génération vidéo.",
        "icon": "https://neural.love/favicon.ico"
    },
    {
        "id": "dubverse",
        "title": "Dubverse.ai",
        "url": "https://dubverse.ai/",
        "category": "MONTAGE - IA & LIGNE",
        "description": "Plateforme de doublage vidéo IA multilingue avec synchronisation labiale et voix expressives.",
        "icon": "https://dubverse.ai/favicon.ico"
    },
    {
        "id": "boolvideo",
        "title": "Boolvideo",
        "url": "https://boolv.tech/",
        "category": "MONTAGE - IA & LIGNE",
        "description": "Générateur vidéo publicitaire e-commerce automatisé transformant les liens produits en spots vidéo.",
        "icon": "https://boolv.tech/favicon.ico"
    },
    {
        "id": "autocap",
        "title": "AutoCap",
        "url": "https://autocap.app/",
        "category": "MONTAGE - IA & LIGNE",
        "description": "Ajout automatique de texte animé synchronisé à la voix.",
        "icon": "https://autocap.app/favicon.ico"
    },
    {
        "id": "zeemoai",
        "title": "Zeemo AI",
        "url": "https://zeemo.ai/",
        "category": "MONTAGE - IA & LIGNE",
        "description": "Sous-titrage automatique rapide dans plus de 90 langues.",
        "icon": "https://zeemo.ai/favicon.ico"
    },
    {
        "id": "sonix",
        "title": "Sonix",
        "url": "https://sonix.ai/",
        "category": "MONTAGE - IA & LIGNE",
        "description": "Transcription audio et vidéo ultra-précise par IA.",
        "icon": "https://sonix.ai/favicon.ico"
    },
    {
        "id": "otterai",
        "title": "Otter.ai",
        "url": "https://otter.ai/",
        "category": "MONTAGE - IA & LIGNE",
        "description": "Transcription et résumé automatique de réunions vidéo.",
        "icon": "https://otter.ai/favicon.ico"
    },
    {
        "id": "riversidefm",
        "title": "Riverside.fm",
        "url": "https://riverside.fm/",
        "category": "MONTAGE - IA & LIGNE",
        "description": "Enregistrement studio 4K à distance avec transcription intégrée.",
        "icon": "https://riverside.fm/favicon.ico"
    },
    {
        "id": "trint",
        "title": "Trint",
        "url": "https://trint.com/",
        "category": "MONTAGE - IA & LIGNE",
        "description": "Outil collaboratif de transcription vidéo pour journalistes.",
        "icon": "https://trint.com/favicon.ico"
    },
    {
        "id": "vrew",
        "title": "Vrew",
        "url": "https://vrew.voyagerx.com/",
        "category": "MONTAGE - IA & LIGNE",
        "description": "Éditeur vidéo basé sur la parole avec découpage par sous-titres.",
        "icon": "https://vrew.voyagerx.com/favicon.ico"
    },
    {
        "id": "flawlessai",
        "title": "Flawless AI",
        "url": "https://www.flawlessai.com/",
        "category": "MONTAGE - IA & LIGNE",
        "description": "Technologie hollywoodienne adaptant les mouvements des lèvres des acteurs.",
        "icon": "https://flawlessai.com/favicon.ico"
    },
    {
        "id": "speechifyvideo",
        "title": "Speechify Video",
        "url": "https://speechify.com/voiceover/",
        "category": "MONTAGE - IA & LIGNE",
        "description": "Studio de voix off IA naturelles synchronisées sur vidéo.",
        "icon": "https://speechify.com/favicon.ico"
    },
    {
        "id": "papercup",
        "title": "Papercup",
        "url": "https://www.papercup.com/",
        "category": "MONTAGE - IA & LIGNE",
        "description": "Doublage IA expressif pour médias et chaînes télévisées.",
        "icon": "https://papercup.com/favicon.ico"
    },
    {
        "id": "maestraai",
        "title": "Maestra AI",
        "url": "https://maestra.ai/",
        "category": "MONTAGE - IA & LIGNE",
        "description": "Doublage vocal automatique et voix off multilingues.",
        "icon": "https://maestra.ai/favicon.ico"
    },
    {
        "id": "tensorartvideo",
        "title": "Tensor Art Video",
        "url": "https://tensor.art/",
        "category": "MONTAGE - IA & LIGNE",
        "description": "Modèles communautaires d'upscale et amélioration vidéo.",
        "icon": "https://tensor.art/favicon.ico"
    },
    {
        "id": "upscalemedia",
        "title": "Upscale.media",
        "url": "https://www.upscale.media/",
        "category": "MONTAGE - IA & LIGNE",
        "description": "Solution d'upscaling de visuels et séquences en ligne.",
        "icon": "https://upscale.media/favicon.ico"
    },
    {
        "id": "vanceaivideo",
        "title": "VanceAI Video",
        "url": "https://vanceai.com/video-enhancer/",
        "category": "MONTAGE - IA & LIGNE",
        "description": "Défloutage et upscaling automatique par réseaux neuronaux.",
        "icon": "https://vanceai.com/favicon.ico"
    },
    {
        "id": "facemagic",
        "title": "FaceMagic",
        "url": "https://www.facemagic.ai/",
        "category": "MONTAGE - IA & LIGNE",
        "description": "Métamorphose et échange de visage sur vidéos et scènes cultes.",
        "icon": "https://facemagic.ai/favicon.ico"
    },
    {
        "id": "reface",
        "title": "Reface",
        "url": "https://reface.ai/",
        "category": "MONTAGE - IA & LIGNE",
        "description": "Application pionnière de substitution de visage sur vidéos courtes.",
        "icon": "https://reface.ai/favicon.ico"
    },
    {
        "id": "deepfakesweb",
        "title": "Deepfakes Web",
        "url": "https://deepfakesweb.com/",
        "category": "MONTAGE - IA & LIGNE",
        "description": "Plateforme cloud d'apprentissage pour swap vidéo photoréaliste.",
        "icon": "https://deepfakesweb.com/favicon.ico"
    },
    {
        "id": "remakerai",
        "title": "Remaker AI",
        "url": "https://remaker.ai/",
        "category": "MONTAGE - IA & LIGNE",
        "description": "Outil polyvalent d'échange de visages sur vidéos et photos.",
        "icon": "https://remaker.ai/favicon.ico"
    },
    {
        "id": "shuffll",
        "title": "Shuffll",
        "url": "https://shuffll.com/",
        "category": "MONTAGE - IA & LIGNE",
        "description": "Production vidéo d'entreprise automatisée (script, voix et visuels).",
        "icon": "https://shuffll.com/favicon.ico"
    }
];
