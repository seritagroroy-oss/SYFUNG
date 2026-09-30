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
        "id": "davinci",
        "title": "DaVinci Resolve",
        "url": "https://www.blackmagicdesign.com/fr/products/davinciresolve/",
        "category": "MONTAGE - PRO & PREMIUM",
        "description": "Suite de montage vidéo professionnelle (version gratuite très complète).",
        "date": "2026-08-01"
    },
    {
        "id": "adobepremiere",
        "title": "Adobe Premiere Pro",
        "url": "https://www.adobe.com/fr/products/premiere.html",
        "category": "MONTAGE - PRO & PREMIUM",
        "description": "Le standard professionnel du montage vidéo par Adobe.",
        "date": "2026-08-01"
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
        "id": "clippchamp",
        "title": "Clipchamp",
        "url": "https://clipchamp.com/fr/",
        "category": "MONTAGE - IA & LIGNE",
        "description": "Éditeur vidéo en ligne gratuit intégré à Windows 11.",
        "date": "2026-08-01"
    }
];
