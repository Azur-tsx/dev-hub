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
                        description: "Documentation de référence Mozilla pour HTML5 et ses APIs"
                    },
                    {
                        title: "W3C HTML",
                        url: "https://www.w3.org/html/",
                        description: "Spécifications officielles du W3C pour HTML"
                    }
                ]
            },
            tutorials: {
                name: "📖 Tutoriels et Apprentissage",
                links: [
                    {
                        title: "HTML Dog",
                        url: "https://www.htmldog.com/",
                        description: "Guides progressifs pour apprendre HTML, du débutant à l'expert"
                    },
                    {
                        title: "W3Schools",
                        url: "https://www.w3schools.com/html/",
                        description: "Tutoriels interactifs et références HTML avec exemples pratiques"
                    }
                ]
            },
            semantics: {
                name: "🏗️ HTML Sémantique",
                links: [
                    {
                        title: "HTML5 Doctor",
                        url: "http://html5doctor.com/",
                        description: "Guide approfondi sur l'utilisation sémantique des balises HTML5"
                    },
                    {
                        title: "HTML Semantique",
                        url: "https://htmlsemantique.com/",
                        description: "Ressource francophone sur les bonnes pratiques de balisage sémantique"
                    }
                ]
            },
            tools: {
                name: "🛠️ Outils et Validation",
                links: [
                    {
                        title: "HTML Validator",
                        url: "https://validator.w3.org/",
                        description: "Validateur officiel du W3C pour vérifier la conformité du code HTML"
                    },
                    {
                        title: "Can I Include",
                        url: "https://caninclude.glitch.me/",
                        description: "Vérifie si une balise HTML peut être incluse dans une autre"
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
                description: "Chaîne dédiée aux nouvelles fonctionnalités et bonnes pratiques HTML5"
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
                        description: "Documentation officielle et complète de CSS par Mozilla"
                    },
                    {
                        title: "CSS Tricks",
                        url: "https://css-tricks.com/",
                        description: "Site de référence proposant des solutions et astuces CSS modernes"
                    }
                ]
            },
            shapes: {
                name: "⭐ Formes et Générateurs",
                links: [
                    {
                        title: "Get Waves",
                        url: "https://getwaves.io/",
                        description: "Générateur de vagues SVG personnalisables"
                    },
                    {
                        title: "Shape Divider",
                        url: "https://www.shapedivider.app/",
                        description: "Créateur de séparateurs de sections personnalisés"
                    },
                    {
                        title: "Clip-path Maker",
                        url: "https://bennettfeely.com/clippy/",
                        description: "Outil visuel pour créer des formes avec clip-path"
                    },
                    {
                        title: "Blob Maker",
                        url: "https://www.blobmaker.app/",
                        description: "Générateur de formes organiques SVG"
                    }
                ]
            },
            colors: {
                name: "🎨 Couleurs et Motifs",
                links: [
                    {
                        title: "Hero Patterns",
                        url: "https://heropatterns.com/",
                        description: "Collection de motifs d'arrière-plan SVG répétables"
                    },
                    {
                        title: "Huemint",
                        url: "https://huemint.com/brand-intersection/",
                        description: "Générateur de palettes de couleurs par IA"
                    },
                    {
                        title: "My Color Space",
                        url: "https://mycolor.space/",
                        description: "Générateur de palettes de couleurs harmonieuses"
                    },
                    {
                        title: "Flat UI Colors",
                        url: "https://flatuicolors.com/",
                        description: "Collections de palettes de couleurs plates"
                    }
                ]
            },
            gradients: {
                name: "🌈 Dégradés",
                links: [
                    {
                        title: "CSS Gradient",
                        url: "https://cssgradient.io/gradient-backgrounds/",
                        description: "Générateur et collection de dégradés CSS"
                    },
                    {
                        title: "Web Gradients",
                        url: "https://webgradients.com/",
                        description: "Collection de 180 dégradés linéaires gratuits"
                    }
                ]
            },
            animations: {
                name: "✨ Animations",
                links: [
                    {
                        title: "Animista",
                        url: "https://animista.net/",
                        description: "Collection d'animations CSS prêtes à l'emploi"
                    },
                    {
                        title: "CSS Animation",
                        url: "https://cssanimation.rocks/",
                        description: "Tutoriels et exemples d'animations CSS"
                    },
                    {
                        title: "Animate.css",
                        url: "https://animate.style/",
                        description: "Bibliothèque d'animations CSS cross-browser"
                    },
                    {
                        title: "Hover.css",
                        url: "https://ianlunn.github.io/Hover/",
                        description: "Collection d'effets de survol CSS"
                    },
                    {
                        title: "Magic Animations",
                        url: "https://www.minimamente.com/example/magic_animations/",
                        description: "Collection d'animations CSS magiques"
                    },
                    {
                        title: "CSS Animation Cheat Sheet",
                        url: "https://nerdcave.com/css-animation-cheat-sheet",
                        description: "Guide de référence rapide pour les animations CSS"
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
                        description: "Documentation complète et référence JavaScript par Mozilla"
                    },
                    {
                        title: "JavaScript.info",
                        url: "https://javascript.info/",
                        description: "Guide moderne et complet du JavaScript moderne"
                    }
                ]
            },
            learning: {
                name: "📖 Apprentissage",
                links: [
                    {
                        title: "Eloquent JavaScript",
                        url: "https://eloquentjavascript.net/",
                        description: "Livre interactif couvrant les concepts fondamentaux et avancés"
                    },
                    {
                        title: "You Don't Know JS",
                        url: "https://github.com/getify/You-Dont-Know-JS",
                        description: "Série de livres approfondissant les mécanismes de JavaScript"
                    }
                ]
            },
            tools: {
                name: "🛠️ Outils de développement",
                links: [
                    {
                        title: "ESLint",
                        url: "https://eslint.org/",
                        description: "Outil d'analyse statique pour identifier les problèmes dans le code"
                    },
                    {
                        title: "Prettier",
                        url: "https://prettier.io/",
                        description: "Formateur de code automatique pour un style cohérent"
                    }
                ]
            },
            testing: {
                name: "🧪 Tests",
                links: [
                    {
                        title: "Jest",
                        url: "https://jestjs.io/",
                        description: "Framework de test JavaScript complet et facile à utiliser"
                    },
                    {
                        title: "Cypress",
                        url: "https://www.cypress.io/",
                        description: "Framework moderne pour les tests end-to-end"
                    }
                ]
            },
            youtube: {
                name: "🎥 Chaînes YouTube",
                links: [
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
                ]
            }
        },
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
                        description: "Documentation officielle et complète de React"
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
                        description: "Gestionnaire d'état officiel recommandé pour React"
                    },
                    {
                        title: "React Router",
                        url: "https://reactrouter.com/",
                        description: "Routage déclaratif pour React"
                    }
                ]
            },
            youtube: {
                name: "🎥 Chaînes YouTube",
                links: [
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
                ]
            }
        },
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
                        description: "Documentation officielle complète de PHP en français"
                    },
                    {
                        title: "PHP The Right Way",
                        url: "https://phptherightway.com/",
                        description: "Guide des meilleures pratiques PHP modernes"
                    }
                ]
            },
            frameworks: {
                name: "🏗️ Frameworks",
                links: [
                    {
                        title: "Laravel",
                        url: "https://laravel.com/",
                        description: "Framework PHP moderne et puissant"
                    },
                    {
                        title: "Symfony",
                        url: "https://symfony.com/",
                        description: "Framework PHP professionnel et composants réutilisables"
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
                        description: "Plateforme collaborative de conception d'interfaces"
                    },
                    {
                        title: "Figma Community",
                        url: "https://www.figma.com/community",
                        description: "Ressources partagées par la communauté Figma"
                    }
                ]
            },
            plugins: {
                name: "🔌 Plugins et Extensions",
                links: [
                    {
                        title: "Figma Plugins",
                        url: "https://www.figma.com/community/plugins",
                        description: "Extensions pour améliorer votre workflow Figma"
                    }
                ]
            },
            resources: {
                name: "🎯 Ressources",
                links: [
                    {
                        title: "Figma Templates",
                        url: "https://figmaelements.com/templates/",
                        description: "Collection de templates gratuits pour Figma"
                    },
                    {
                        title: "Figma Icons",
                        url: "https://www.figma.com/resources/icons/",
                        description: "Bibliothèques d'icônes pour Figma"
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
                        description: "Formateur de code automatique"
                    },
                    {
                        title: "ESLint",
                        url: "https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint",
                        description: "Analyseur de code JavaScript/TypeScript"
                    }
                ]
            },
            productivity: {
                name: "⚡ Productivité",
                links: [
                    {
                        title: "IntelliCode",
                        url: "https://marketplace.visualstudio.com/items?itemName=VisualStudioExptTeam.vscodeintellicode",
                        description: "Suggestions de code basées sur l'IA"
                    },
                    {
                        title: "GitLens",
                        url: "https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens",
                        description: "Fonctionnalités Git avancées"
                    }
                ]
            },
            debugging: {
                name: "🐛 Débogage et Qualité",
                links: [
                    {
                        title: "Error Lens",
                        url: "https://marketplace.visualstudio.com/items?itemName=usernamehw.errorlens",
                        description: "Affichage inline des erreurs et avertissements"
                    },
                    {
                        title: "Live Server",
                        url: "https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer",
                        description: "Serveur de développement avec rechargement automatique"
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
                        description: "Photographies haute résolution libres de droits"
                    },
                    {
                        title: "Pexels",
                        url: "https://www.pexels.com/",
                        description: "Banque d'images et de vidéos gratuites"
                    },
                    {
                        title: "Pixabay",
                        url: "https://pixabay.com/",
                        description: "Images et vidéos gratuites"
                    },
                    {
                        title: "Freepik",
                        url: "https://www.freepik.com/",
                        description: "Banque d'images, vecteurs et PSD gratuits"
                    },
                    {
                        title: "Lorem Picsum",
                        url: "https://picsum.photos/",
                        description: "Générateur d'images aléatoires"
                    },
                    {
                        title: "Blurhash",
                        url: "https://blurha.sh/",
                        description: "Encodeur d'images pour créer des placeholders flous pendant le chargement"
                    }
                ]
            },
            icons: {
                name: "📍 Icônes",
                links: [
                    {
                        title: "Font Awesome",
                        url: "https://fontawesome.com/",
                        description: "La plus grande bibliothèque d'icônes du web"
                    },
                    {
                        title: "Flaticon",
                        url: "https://www.flaticon.com/",
                        description: "Plus grande base de données d'icônes gratuites"
                    },
                    {
                        title: "Iconify",
                        url: "https://iconify.design/",
                        description: "Bibliothèque d'icônes SVG"
                    },
                    {
                        title: "Feather Icons",
                        url: "https://feathericons.com/",
                        description: "Icônes SVG minimalistes"
                    }
                ]
            },
            fonts: {
                name: "📝 Typographie",
                links: [
                    {
                        title: "Google Fonts",
                        url: "https://fonts.google.com/",
                        description: "Bibliothèque de polices web gratuites"
                    },
                    {
                        title: "Adobe Fonts",
                        url: "https://fonts.adobe.com/",
                        description: "Service de polices web premium"
                    },
                    {
                        title: "Font Squirrel",
                        url: "https://www.fontsquirrel.com/",
                        description: "Sélection de polices gratuites pour un usage commercial"
                    },
                    {
                        title: "DaFont",
                        url: "https://www.dafont.com/",
                        description: "Collection de polices gratuites"
                    }
                ]
            },
            illustrations: {
                name: "🎨 Illustrations",
                links: [
                    {
                        title: "Undraw",
                        url: "https://undraw.co/",
                        description: "Illustrations SVG personnalisables"
                    },
                    {
                        title: "LottieFiles",
                        url: "https://lottiefiles.com/",
                        description: "Animations légères et interactives"
                    },
                    {
                        title: "Blush",
                        url: "https://blush.design/",
                        description: "Illustrations personnalisables par des artistes"
                    },
                    {
                        title: "Open Doodles",
                        url: "https://opendoodles.com/",
                        description: "Illustrations SVG gratuites et personnalisables"
                    }
                ]
            }
        },
        images: [],
        videos: []
    },
    Autres: {
        icon: "♻️",
        links: [
            { title: "Stack Overflow", url: "https://stackoverflow.com/", description: "Forum de questions/réponses pour les développeurs" },
            { title: "Josh W. Comeau", url: "https://www.joshwcomeau.com/", description: "Articles pédagogiques et approfondis sur le JavaScript moderne, le CSS avancé, l'accessibilité et l'expérience utilisateur" },
        ],
        images: [],
        videos: []
    }
};