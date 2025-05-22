const resources = {
    HTML: {
        icon: "🟧",
        categories: {
            documentation: {
                name: "📚 Documentation officielle",
                links: [
                    {
                        title: "MDN HTML",
                        url: "https://developer.mozilla.org/fr/docs/Web/HTML",
                        description: "Documentation de référence Mozilla pour HTML5 et ses APIs",
                        icon: "https://developer.mozilla.org/favicon-48x48.png"
                    },
                    {
                        title: "W3C HTML",
                        url: "https://www.w3.org/html/",
                        description: "Spécifications officielles du W3C pour HTML",
                        icon: "https://www.w3.org/favicon.ico"
                    }
                ]
            },
            tutorials: {
                name: "📖 Tutoriels et Apprentissage",
                links: [
                    {
                        title: "HTML Dog",
                        url: "https://www.htmldog.com/",
                        description: "Guides progressifs pour apprendre HTML, du débutant à l'expert",
                        icon: "https://www.htmldog.com/favicon.ico"
                    },
                    {
                        title: "W3Schools",
                        url: "https://www.w3schools.com/html/",
                        description: "Tutoriels interactifs et références HTML avec exemples pratiques",
                        icon: "https://www.w3schools.com/favicon.ico"
                    }
                ]
            },
            semantics: {
                name: "🏗️ HTML Sémantique",
                links: [
                    {
                        title: "HTML5 Doctor",
                        url: "http://html5doctor.com/",
                        description: "Guide approfondi sur l'utilisation sémantique des balises HTML5",
                        icon: "http://html5doctor.com/favicon.ico"
                    },
                    {
                        title: "HTML Semantique",
                        url: "https://htmlsemantique.com/",
                        description: "Ressource francophone sur les bonnes pratiques de balisage sémantique",
                        icon: ""
                    }
                ]
            },
            tools: {
                name: "🛠️ Outils et Validation",
                links: [
                    {
                        title: "HTML Validator",
                        url: "https://validator.w3.org/",
                        description: "Validateur officiel du W3C pour vérifier la conformité du code HTML",
                        icon: ""
                    },
                    {
                        title: "Can I Include",
                        url: "https://caninclude.glitch.me/",
                        description: "Vérifie si une balise HTML peut être incluse dans une autre",
                        icon: "https://caninclude.glitch.me/favicon.ico"
                    }
                ]
            },
            exercises: {
                name: "🧪 Exercices et Défis",
                links: [
                    {
                        title: "Frontend Mentor",
                        url: "https://www.frontendmentor.io/",
                        description: "Défis de développement front-end avec des designs à reproduire",
                        icon: ""
                    },
                    {
                        title: "Codewars",
                        url: "https://www.codewars.com/",
                        description: "Plateforme d'exercices de codage pour améliorer vos compétences",
                        icon: "https://www.codewars.com/favicon.ico"
                    }
                ]
            }
        },
        images: [
            "./assets/HTML/html_semantique.png"
        ],
        videos: [],
        youtube: [
            {
                title: "HTML5 Rocks",
                url: "https://www.youtube.com/@HTML5Rocks",
                description: "Chaîne dédiée aux nouvelles fonctionnalités et bonnes pratiques HTML5",
            },
            {
                title: "Traversy Media",
                url: "https://www.youtube.com/@TraversyMedia",
                description: "Tutoriels HTML/CSS et développement web moderne"
            },
            {
                title: "Kevin Powell",
                url: "https://www.youtube.com/@KevinPowell",
                description: "Expert en CSS et HTML partageant des astuces et tutoriels"
            },
            {
                title: "The Net Ninja",
                url: "https://www.youtube.com/@TheNetNinja",
                description: "Chaîne de tutoriels sur le développement web, y compris HTML/CSS"
            }
        ],
        notes: [
            "HTML est le langage de balisage fondamental pour structurer le contenu web. La sémantique et l'accessibilité sont essentielles pour un web de qualité."
        ]
    },
    CSS: {
        icon: "🟩",
        categories: {
            documentation: {
                name: "📚 Documentation",
                links: [
                    {
                        title: "MDN CSS",
                        url: "https://developer.mozilla.org/fr/docs/Web/CSS",
                        description: "Documentation officielle et complète de CSS par Mozilla",
                        icon: "https://developer.mozilla.org/favicon-48x48.png"
                    },
                    {
                        title: "CSS Tricks",
                        url: "https://css-tricks.com/",
                        description: "Site de référence proposant des solutions et astuces CSS modernes",
                        icon: "https://css-tricks.com/favicon.ico"
                    }
                ]
            },
            shapes: {
                name: "⭐ Formes et Générateurs",
                links: [
                    {
                        title: "Get Waves",
                        url: "https://getwaves.io/",
                        description: "Générateur de vagues SVG personnalisables",
                        icon: ""
                    },
                    {
                        title: "Shape Divider",
                        url: "https://www.shapedivider.app/",
                        description: "Créateur de séparateurs de sections personnalisés",
                        icon: "https://www.shapedivider.app/favicon.ico"
                    },
                    {
                        title: "Clip-path Maker",
                        url: "https://bennettfeely.com/clippy/",
                        description: "Outil visuel pour créer des formes avec clip-path",
                        icon: "https://bennettfeely.com/clippy/favicon.ico"
                    },
                    {
                        title: "Blob Maker",
                        url: "https://www.blobmaker.app/",
                        description: "Générateur de formes organiques SVG",
                        icon: "https://www.blobmaker.app/favicon.ico"
                    }
                ]
            },
            colors: {
                name: "🎨 Couleurs et Motifs",
                links: [
                    {
                        title: "Hero Patterns",
                        url: "https://heropatterns.com/",
                        description: "Collection de motifs d'arrière-plan SVG répétables",
                        icon: ""
                    },
                    {
                        title: "Huemint",
                        url: "https://huemint.com/brand-intersection/",
                        description: "Générateur de palettes de couleurs par IA",
                        icon: ""
                    },
                    {
                        title: "My Color Space",
                        url: "https://mycolor.space/",
                        description: "Générateur de palettes de couleurs harmonieuses",
                        icon: ""
                    },
                    {
                        title: "Flat UI Colors",
                        url: "https://flatuicolors.com/",
                        description: "Collections de palettes de couleurs plates",
                        icon: ""
                    }
                ]
            },
            gradients: {
                name: "🌈 Dégradés",
                links: [
                    {
                        title: "CSS Gradient",
                        url: "https://cssgradient.io/gradient-backgrounds/",
                        description: "Générateur et collection de dégradés CSS",
                        icon: "https://cssgradient.io/favicon.ico"
                    },
                    {
                        title: "Web Gradients",
                        url: "https://webgradients.com/",
                        description: "Collection de 180 dégradés linéaires gratuits",
                        icon: ""
                    }
                ]
            },
            animations: {
                name: "✨ Animations",
                links: [
                    {
                        title: "Animista",
                        url: "https://animista.net/",
                        description: "Collection d'animations CSS prêtes à l'emploi",
                        icon: "https://animista.net/favicon.ico"
                    },
                    {
                        title: "CSS Animation",
                        url: "https://cssanimation.rocks/",
                        description: "Tutoriels et exemples d'animations CSS",
                        icon: ""
                    },
                    {
                        title: "Animate.css",
                        url: "https://animate.style/",
                        description: "Bibliothèque d'animations CSS cross-browser",
                        icon: ""
                    },
                    {
                        title: "Hover.css",
                        url: "https://ianlunn.github.io/Hover/",
                        description: "Collection d'effets de survol CSS",
                        icon: ""
                    },
                    {
                        title: "Magic Animations",
                        url: "https://www.minimamente.com/example/magic_animations/",
                        description: "Collection d'animations CSS magiques",
                        icon: ""
                    },
                    {
                        title: "CSS Animation Cheat Sheet",
                        url: "https://nerdcave.com/css-animation-cheat-sheet",
                        description: "Guide de référence rapide pour les animations CSS",
                        icon: "https://nerdcave.com/favicon.ico"
                    }
                ]
            },
            exercises: {
                name: "🧪 Exercices et Défis",
                links: [
                    {
                        title: "CSS Battle",
                        url: "https://cssbattle.dev/",
                        description: "Défis de codage CSS pour améliorer vos compétences",
                        icon: "https://cssbattle.dev/favicon.ico"
                    },
                    {
                        title: "Frontend Mentor",
                        url: "https://www.frontendmentor.io/",
                        description: "Défis de développement front-end avec des designs à reproduire",
                        icon: ""
                    },
                    {
                        title: "Flexbox Froggy",
                        url: "https://flexboxfroggy.com/",
                        description: "Jeu pour apprendre le CSS Flexbox",
                        icon: "https://flexboxfroggy.com/favicon.ico"
                    }
                ]
            },
        },
        images: [],
        videos: [],
        youtube: [
            {
                title: "Kevin Powell",
                url: "https://www.youtube.com/@KevinPowell",
                description: "Expert CSS partageant des tutoriels avancés et les meilleures pratiques CSS modernes"
            },
            {
                title: "Hyperplexed",
                url: "https://www.youtube.com/@Hyperplexed",
                description: "Effets visuels créatifs et animations CSS/JavaScript impressionnantes"
            }
        ]
    },
    JavaScript: {
        icon: "⚡",
        categories: {
            documentation: {
                name: "📚 Documentation",
                links: [
                    {
                        title: "MDN JavaScript",
                        url: "https://developer.mozilla.org/fr/docs/Web/JavaScript",
                        description: "Documentation complète et référence JavaScript par Mozilla",
                        icon: "https://developer.mozilla.org/favicon-48x48.png"
                    },
                    {
                        title: "JavaScript.info",
                        url: "https://javascript.info/",
                        description: "Guide moderne et complet du JavaScript moderne",
                        icon: ""
                    }
                ]
            },
            learning: {
                name: "📖 Apprentissage",
                links: [
                    {
                        title: "Eloquent JavaScript",
                        url: "https://eloquentjavascript.net/",
                        description: "Livre interactif couvrant les concepts fondamentaux et avancés",
                        icon: "https://eloquentjavascript.net/favicon.ico"
                    },
                    {
                        title: "You Don't Know JS",
                        url: "https://github.com/getify/You-Dont-Know-JS",
                        description: "Série de livres approfondissant les mécanismes de JavaScript",
                        icon: ""
                    }
                ]
            },
            tools: {
                name: "🛠️ Outils de développement",
                links: [
                    {
                        title: "ESLint",
                        url: "https://eslint.org/",
                        description: "Outil d'analyse statique pour identifier les problèmes dans le code",
                        icon: "https://eslint.org/favicon.ico"
                    },
                    {
                        title: "Prettier",
                        url: "https://prettier.io/",
                        description: "Formateur de code automatique pour un style cohérent",
                        icon: "https://prettier.io/icon.png"
                    }
                ]
            },
            testing: {
                name: "🧪 Tests",
                links: [
                    {
                        title: "Jest",
                        url: "https://jestjs.io/",
                        description: "Framework de test JavaScript complet et facile à utiliser",
                        icon: "https://jestjs.io/img/favicon/favicon.ico"
                    },
                    {
                        title: "Cypress",
                        url: "https://www.cypress.io/",
                        description: "Framework moderne pour les tests end-to-end",
                        icon: "https://www.cypress.io/favicon.ico"
                    }
                ]
            },
            exercises: {
                name: "🧪 Exercices et Défis",
                links: [
                    {
                        title: "Codewars",
                        url: "https://www.codewars.com/",
                        description: "Plateforme d'exercices de codage pour améliorer vos compétences",
                        icon: "https://www.codewars.com/favicon.ico"
                    },
                    {
                        title: "LeetCode",
                        url: "https://leetcode.com/",
                        description: "Plateforme d'exercices de codage et d'entretiens techniques"
                    },
                    {
                        title: "Frontend Mentor",
                        url: "https://www.frontendmentor.io/",
                        description: "Défis de développement front-end avec des designs à reproduire",
                        icon: ""
                    }
                ]
            }
        },
        youtube: [
            {
                title: "Web Dev Simplified",
                url: "https://www.youtube.com/@WebDevSimplified",
                description: "Tutoriels JavaScript clairs et concis, concepts complexes expliqués simplement"
            },
            {
                title: "OnJSDev",
                url: "https://www.youtube.com/@onjsdev",
                description: "Chaîne française dédiée au développement JavaScript moderne"
            },
            {
                title: "Fireship",
                url: "https://www.youtube.com/@Fireship",
                description: "Tutoriels rapides et concepts JavaScript avancés expliqués de manière unique"
            },
            {
                title: "Traversy Media",
                url: "https://www.youtube.com/@TraversyMedia",
                description: "Tutoriels complets sur le développement web moderne"
            }
        ],
        images: [],
        videos: [],
        notes: [
            "JavaScript est le langage de programmation du web, permettant de créer des applications interactives et dynamiques."
        ]
    },
    React: {
        icon: "⚛️",
        categories: {
            documentation: {
                name: "📚 Documentation",
                links: [
                    {
                        title: "React – Documentation Officielle",
                        url: "https://reactjs.org/docs/getting-started.html",
                        description: "Documentation officielle et complète de React",
                        icon: "https://reactjs.org/favicon.ico"
                    }
                ]
            },
            hooks: {
                name: "🎣 Hooks et Patterns",
                links: [
                    {
                        title: "useHooks",
                        url: "https://usehooks.com/",
                        description: "Collection de hooks React personnalisés et réutilisables"
                    },
                    {
                        title: "React Patterns",
                        url: "https://reactpatterns.com/",
                        description: "Modèles de conception courants pour React"
                    }
                ]
            },
            ecosystem: {
                name: "🌍 Écosystème",
                links: [
                    {
                        title: "Redux Toolkit",
                        url: "https://redux-toolkit.js.org/",
                        description: "Gestionnaire d'état officiel recommandé pour React",
                        icon: ""
                    },
                    {
                        title: "React Router",
                        url: "https://reactrouter.com/",
                        description: "Routage déclaratif pour React",
                        icon: "https://reactrouter.com/favicon.ico"
                    }
                ]
            },
        },
        youtube: [
            {
                title: "Web Dev Simplified",
                url: "https://www.youtube.com/@WebDevSimplified",
                description: "Tutoriels React clairs et concis, concepts complexes expliqués simplement"
            },
            {
                title: "The Net Ninja",
                url: "https://www.youtube.com/@TheNetNinja",
                description: "Chaîne de tutoriels sur le développement web, y compris React"
            },
            {
                title: "Academind",
                url: "https://www.youtube.com/@Academind",
                description: "Tutoriels approfondis sur React et son écosystème"
            },
            {
                title: "Jack Herrington",
                url: "https://www.youtube.com/@jherr",
                description: "Tutoriels React avancés et patterns modernes"
            },
            {
                title: "Codevolution",
                url: "https://www.youtube.com/@Codevolution",
                description: "Tutoriels détaillés sur React et son écosystème"
            },
            {
                title: "Theo - t3.gg",
                url: "https://www.youtube.com/@t3dotgg",
                description: "Contenu React avancé et stack T3 (Next.js, tRPC, Prisma)"
            }
        ],
        images: [],
        videos: [],
        notes: ["Framework JavaScript populaire pour construire des interfaces utilisateur interactives"]
    },
    PHP: {
        icon: "🐘",
        categories: {
            documentation: {
                name: "📚 Documentation",
                links: [
                    {
                        title: "PHP Manual",
                        url: "https://www.php.net/manual/fr/",
                        description: "Documentation officielle complète de PHP en français",
                        icon: "https://www.php.net/favicon.ico"
                    },
                    {
                        title: "PHP The Right Way",
                        url: "https://phptherightway.com/",
                        description: "Guide des meilleures pratiques PHP modernes",
                        icon: ""
                    }
                ]
            },
            frameworks: {
                name: "🏗️ Frameworks",
                links: [
                    {
                        title: "Laravel",
                        url: "https://laravel.com/",
                        description: "Framework PHP moderne et puissant",
                        icon: ""
                    },
                    {
                        title: "Symfony",
                        url: "https://symfony.com/",
                        description: "Framework PHP professionnel et composants réutilisables",
                        icon: "https://symfony.com/favicon.ico"
                    }
                ]
            }
        },
        images: [],
        videos: []
    },
    Figma: {
        icon: "🎨",
        categories: {
            official: {
                name: "📚 Ressources Officielles",
                links: [
                    {
                        title: "Figma",
                        url: "https://www.figma.com/",
                        description: "Plateforme collaborative de conception d'interfaces",
                        icon: ""
                    },
                    {
                        title: "Figma Community",
                        url: "https://www.figma.com/community",
                        description: "Ressources partagées par la communauté Figma",
                        icon: ""
                    }
                ]
            },
            plugins: {
                name: "🔌 Plugins et Extensions",
                links: [
                    {
                        title: "Figma Plugins",
                        url: "https://www.figma.com/community/plugins",
                        description: "Extensions pour améliorer votre workflow Figma",
                        icon: ""
                    }
                ]
            },
            resources: {
                name: "🎯 Ressources",
                links: [
                    {
                        title: "Figma Templates",
                        url: "https://figmaelements.com/templates/",
                        description: "Collection de templates gratuits pour Figma",
                        icon: "https://figmaelements.com/favicon.ico"
                    },
                    {
                        title: "Figma Icons",
                        url: "https://www.figma.com/resources/icons/",
                        description: "Bibliothèques d'icônes pour Figma",
                        icon: ""
                    }
                ]
            }
        },
        images: [],
        videos: []
    },
    Extensions: {
        icon: "🔌",
        categories: {
            formatting: {
                name: "✨ Formatage et Linting",
                links: [
                    {
                        title: "Prettier",
                        url: "https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode",
                        description: "Formateur de code automatique",
                        icon: "https://marketplace.visualstudio.com/favicon.ico"
                    },
                    {
                        title: "ESLint",
                        url: "https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint",
                        description: "Analyseur de code JavaScript/TypeScript",
                        icon: "https://marketplace.visualstudio.com/favicon.ico"
                    }
                ]
            },
            productivity: {
                name: "⚡ Productivité",
                links: [
                    {
                        title: "IntelliCode",
                        url: "https://marketplace.visualstudio.com/items?itemName=VisualStudioExptTeam.vscodeintellicode",
                        description: "Suggestions de code basées sur l'IA",
                        icon: "https://marketplace.visualstudio.com/favicon.ico"
                    },
                    {
                        title: "GitLens",
                        url: "https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens",
                        description: "Fonctionnalités Git avancées",
                        icon: "https://marketplace.visualstudio.com/favicon.ico"
                    }
                ]
            },
            debugging: {
                name: "🐛 Débogage et Qualité",
                links: [
                    {
                        title: "Error Lens",
                        url: "https://marketplace.visualstudio.com/items?itemName=usernamehw.errorlens",
                        description: "Affichage inline des erreurs et avertissements",
                        icon: "https://marketplace.visualstudio.com/favicon.ico"
                    },
                    {
                        title: "Live Server",
                        url: "https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer",
                        description: "Serveur de développement avec rechargement automatique",
                        icon: "https://marketplace.visualstudio.com/favicon.ico"
                    }
                ]
            }
        }
    },
    Assets: {
        icon: "📦",
        categories: {
            images: {
                name: "🖼️ Images",
                links: [
                    {
                        title: "Unsplash",
                        url: "https://unsplash.com/",
                        description: "Photographies haute résolution libres de droits",
                        icon: "https://unsplash.com/favicon.ico"
                    },
                    {
                        title: "Pexels",
                        url: "https://www.pexels.com/",
                        description: "Banque d'images et de vidéos gratuites",
                        icon: "https://www.pexels.com/favicon.ico"
                    },
                    {
                        title: "Pixabay",
                        url: "https://pixabay.com/",
                        description: "Images et vidéos gratuites",
                        icon: "https://pixabay.com/favicon.ico"
                    },
                    {
                        title: "Freepik",
                        url: "https://www.freepik.com/",
                        description: "Banque d'images, vecteurs et PSD gratuits",
                        icon: "https://www.freepik.com/favicon.ico"
                    },
                    {
                        title: "Lorem Picsum",
                        url: "https://picsum.photos/",
                        description: "Générateur d'images aléatoires",
                        icon: "https://picsum.photos/favicon.ico"
                    },
                    {
                        title: "Blurhash",
                        url: "https://blurha.sh/",
                        description: "Encodeur d'images pour créer des placeholders flous pendant le chargement",
                        icon: "https://blurha.sh/favicon.ico"
                    }
                ]
            },
            icons: {
                name: "📍 Icônes",
                links: [
                    {
                        title: "Font Awesome",
                        url: "https://fontawesome.com/",
                        description: "La plus grande bibliothèque d'icônes du web",
                        icon: "https://fontawesome.com/favicon.ico"
                    },
                    {
                        title: "Flaticon",
                        url: "https://www.flaticon.com/",
                        description: "Plus grande base de données d'icônes gratuites",
                        icon: "https://www.flaticon.com/favicon.ico"
                    },
                    {
                        title: "Iconify",
                        url: "https://iconify.design/",
                        description: "Bibliothèque d'icônes SVG",
                        icon: "https://iconify.design/favicon.ico"
                    },
                    {
                        title: "Feather Icons",
                        url: "https://feathericons.com/",
                        description: "Icônes SVG minimalistes",
                        icon: "https://feathericons.com/favicon.ico"
                    }
                ]
            },
            fonts: {
                name: "📝 Typographie",
                links: [
                    {
                        title: "Google Fonts",
                        url: "https://fonts.google.com/",
                        description: "Bibliothèque de polices web gratuites",
                        icon: ""
                    },
                    {
                        title: "Adobe Fonts",
                        url: "https://fonts.adobe.com/",
                        description: "Service de polices web premium",
                        icon: "https://fonts.adobe.com/favicon.ico"
                    },
                    {
                        title: "Font Squirrel",
                        url: "https://www.fontsquirrel.com/",
                        description: "Sélection de polices gratuites pour un usage commercial",
                        icon: "https://www.fontsquirrel.com/favicon.ico"
                    },
                    {
                        title: "DaFont",
                        url: "https://www.dafont.com/",
                        description: "Collection de polices gratuites",
                        icon: "https://www.dafont.com/favicon.ico"
                    }
                ]
            },
            illustrations: {
                name: "🎨 Illustrations",
                links: [
                    {
                        title: "Undraw",
                        url: "https://undraw.co/",
                        description: "Illustrations SVG personnalisables",
                        icon: "https://undraw.co/favicon.ico"
                    },
                    {
                        title: "LottieFiles",
                        url: "https://lottiefiles.com/",
                        description: "Animations légères et interactives",
                        icon: "https://lottiefiles.com/favicon.ico"
                    },
                    {
                        title: "Blush",
                        url: "https://blush.design/",
                        description: "Illustrations personnalisables par des artistes",
                        icon: "https://blush.design/favicon.ico"
                    },
                    {
                        title: "Open Doodles",
                        url: "https://opendoodles.com/",
                        description: "Illustrations SVG gratuites et personnalisables",
                        icon: ""
                    }
                ]
            }
        },
        images: [],
        videos: []
    },
    Autres: {
        icon: "🔍",
        categories: {
            search: {
                name: "🔍 Moteurs de recherche",
                links: [
                    {
                        title: "DuckDuckGo",
                        url: "https://duckduckgo.com/",
                        description: "Moteur de recherche axé sur la confidentialité",
                        icon: "https://duckduckgo.com/favicon.ico"
                    },
                    {
                        title: "Qwant",
                        url: "https://www.qwant.com/",
                        description: "Moteur de recherche européen respectueux de la vie privée",
                        icon: "https://www.qwant.com/favicon.ico"
                    },
                    {
                        title: "Ecosia",
                        url: "https://www.ecosia.org/",
                        description: "Moteur de recherche qui plante des arbres",
                        icon: "https://www.ecosia.org/favicon.ico"
                    }
                ]
            },
            tools: {
                name: "🛠️ Outils en ligne",
                links: [
                    {
                        title: "CodePen",
                        url: "https://codepen.io/",
                        description: "Éditeur de code en ligne pour HTML, CSS et JavaScript",
                        icon: "https://codepen.io/favicon.ico"
                    },
                    {
                        title: "JSFiddle",
                        url: "https://jsfiddle.net/",
                        description: "Éditeur de code en ligne pour tester des snippets JavaScript",
                        icon: ""
                    },
                    {
                        title: "JSBin",
                        url: "https://jsbin.com/",
                        description: "Éditeur de code en ligne pour HTML, CSS et JavaScript",
                        icon: "https://jsbin.com/favicon.ico"
                    }
                ]
            },
            resources: {
                name: "📚 Ressources",
                links: [
                    {
                        title: "Stack Overflow",
                        url: "https://stackoverflow.com/",
                        description: "Forum de questions-réponses pour les développeurs",
                        icon: "https://stackoverflow.com/favicon.ico"
                    },
                    {
                        title: "Josh W. Comeau",
                        url: "https://www.joshwcomeau.com/",
                        description: "Blog de Josh W. Comeau sur le développement web",
                        icon: ""
                    }
                ]
            }
        },
        images: [],
        videos: []
    },
    Logiciels: {
        icon: "💻",
        categories: {
            editeurs: {
                name: "📝 Éditeurs de code",
                links: [
                    {
                        title: "Visual Studio Code",
                        url: "https://code.visualstudio.com/",
                        description: "Éditeur de code gratuit, léger et puissant de Microsoft avec un large écosystème d'extensions",
                        icon: "https://code.visualstudio.com/favicon.ico"
                    },
                    {
                        title: "Sublime Text",
                        url: "https://www.sublimetext.com/",
                        description: "Éditeur de texte sophistiqué pour le code, le markup et la prose"
                    }
                ]
            },
            environnement: {
                name: "⚙️ Environnement de développement",
                links: [
                    {
                        title: "Node.js",
                        url: "https://nodejs.org/",
                        description: "Runtime JavaScript pour exécuter du code JavaScript côté serveur",
                        icon: "https://nodejs.org/favicon.ico"
                    },
                    {
                        title: "Git",
                        url: "https://git-scm.com/downloads",
                        description: "Système de contrôle de version distribué",
                        icon: "https://git-scm.com/favicon.ico"
                    },
                    {
                        title: "GitHub Desktop",
                        url: "https://desktop.github.com/",
                        description: "Interface graphique pour Git, simplifie l'utilisation de GitHub"
                    }
                ]
            },
            design: {
                name: "🎨 Design et UI/UX",
                links: [
                    {
                        title: "Figma",
                        url: "https://www.figma.com/downloads/",
                        description: "Outil de design d'interface collaborative disponible sur navigateur et en application",
                        icon: ""
                    },
                    {
                        title: "Adobe XD",
                        url: "https://www.adobe.com/products/xd.html",
                        description: "Outil de design d'interface et de prototypage par Adobe",
                        icon: "https://www.adobe.com/favicon.ico"
                    }
                ]
            },
            navigateurs: {
                name: "🌐 Navigateurs",
                links: [
                    {
                        title: "Google Chrome",
                        url: "https://www.google.com/chrome/",
                        description: "Navigateur populaire avec d'excellents outils de développement",
                        icon: ""
                    },
                    {
                        title: "Firefox Developer Edition",
                        url: "https://www.mozilla.org/firefox/developer/",
                        description: "Version de Firefox spécialement conçue pour les développeurs",
                        icon: "https://www.mozilla.org/favicon.ico"
                    }
                ]
            },
            utilites: {
                name: "🛠️ Utilitaires",
                links: [
                    {
                        title: "Postman",
                        url: "https://www.postman.com/downloads/",
                        description: "Outil de test et de documentation d'API",
                        icon: ""
                    },
                    {
                        title: "XAMPP",
                        url: "https://www.apachefriends.org/",
                        description: "Package Apache, MySQL, PHP et Perl pour développement local",
                        icon: "https://www.apachefriends.org/favicon.ico"
                    },
                    {
                        title: "Windows Terminal",
                        url: "https://github.com/microsoft/terminal",
                        description: "Terminal moderne et personnalisable pour Windows",
                        icon: ""
                    }
                ]
            },
            performanceEtOptimisation: {
                name: "⚡ Performance et Optimisation",
                links: [
                    {
                        title: "ImageOptim",
                        url: "https://imageoptim.com/",
                        description: "Optimisation d'images pour le web",
                        icon: "https://imageoptim.com/favicon.ico"
                    },
                    {
                        title: "FileZilla",
                        url: "https://filezilla-project.org/",
                        description: "Client FTP pour transférer des fichiers vers un serveur",
                        icon: "https://filezilla-project.org/favicon.ico"
                    }
                ]
            }
        },
        notes: [
            "Ces logiciels constituent une base solide pour commencer le développement web. Pensez à vérifier régulièrement les mises à jour pour bénéficier des dernières fonctionnalités et corrections de sécurité.",
            "Pour Visual Studio Code, n'oubliez pas d'installer les extensions recommandées dans la section 'Extensions'."
        ]
    }
};