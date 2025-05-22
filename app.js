const welcomeSection = document.getElementById("welcome")

let currentCat = null
let activeLi = null

const categoryList = document.getElementById("categoryList")
const currentCategory = document.getElementById("currentCategory")
const sections = {
    welcome: document.querySelector("section:nth-of-type(1)"),
    links: document.querySelector("section:nth-of-type(2)"),
    images: document.querySelector("section:nth-of-type(3)"),
    videos: document.querySelector("section:nth-of-type(4)"),
    youtube: document.querySelector("section:nth-of-type(5)"),
    notes: document.querySelector("section:nth-of-type(6)")
}
const containers = {
    links: document.getElementById("links"),
    images: document.getElementById("images"),
    videos: document.getElementById("videos"),
    youtube: document.getElementById("youtube"),
    notes: document.getElementById("notes")
}

const logo = document.querySelector('.logo')

// Fonction pour réinitialiser l'application
function resetApp() {
    // Réinitialiser l'état
    currentCat = null
    if (activeLi) {
        activeLi.classList.remove('active')
        activeLi = null
    }

    // Cacher toutes les sections sauf welcome
    Object.values(sections).forEach(section => section.style.display = "none")
    welcomeSection.style.display = "block"

    // Réinitialiser le titre
    currentCategory.style.display = "block"
    currentCategory.innerHTML = 'Dev Resources Hub - <span id="currentCategoryGuide">Choisissez une catégorie</span>'
}

// Ajouter le gestionnaire de clic sur le logo
logo.style.cursor = 'pointer'
logo.addEventListener('click', resetApp)

// Cacher toutes les sections au démarrage
Object.values(sections).forEach(section => section.style.display = "none")

// Configuration de l'Intersection Observer
const observerOptions = {
    root: null, // viewport
    threshold: 0.1, // déclenche quand 10% de l'élément est visible
    rootMargin: '-50px' // marge négative pour déclencher un peu plus tard
};

// Créer l'observer
const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            // Une fois animé, on arrête d'observer
            sectionObserver.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observer toutes les sections
function observeSections() {
    document.querySelectorAll('.section').forEach(section => {
        sectionObserver.observe(section);
    });
}

function loadCategory(cat) {
    if (currentCat === cat) return

    // Cacher la section de bienvenue
    welcomeSection.style.display = "none"

    // Gestion de la classe active
    if (activeLi) activeLi.classList.remove("active")
    activeLi = document.querySelector(`li[data-category="${cat}"]`)
    activeLi.classList.add("active")

    currentCat = cat
    const data = resources[cat]

    // Afficher le titre
    currentCategory.style.display = "block"
    currentCategory.textContent = `${data.icon} ${cat.toUpperCase()}`

    // Gestion des liens avec catégories
    if (data.categories) {
        const allLinks = Object.entries(data.categories).map(([key, category]) => `
            <div class="category">
                <h3>${category.name}</h3>
                <div class="links" data-category="${key}">
                    ${category.links.map(link => `
                        <a href="${link.url}" target="_blank" rel="noopener">
                            ${link.icon ? `<img class="link-icon" src="${link.icon}" alt="Icon for ${link.title}" loading="lazy">` : ""}
                            <div class="link-content">
                                <strong>${link.title}</strong>
                                ${link.description ? `<p>${link.description}</p>` : ""}
                            </div>
                        </a>
                    `).join("")}
                </div>
            </div>
        `).join("")

        containers.links.innerHTML = allLinks
        sections.links.style.display = "block"

        // Vérifier quelles div.links ont besoin d'un scroll
        document.querySelectorAll('.links').forEach(div => {
            if (div.scrollHeight > div.clientHeight) {
                div.classList.add('has-scroll')
            }
        })
    } else {
        sections.links.style.display = "none"
    }

    // Gestion des images, vidéos, youtube et notes
    ['images', 'videos', 'youtube', 'notes'].forEach(type => {
        const section = sections[type].closest('.section') // Obtenir la section parente complète

        if (data[type]?.length > 0) {
            let content = ''
            switch (type) {
                case 'images':
                    content = data[type].map(src =>
                        `<a href="${src}" target="_blank">
                            <img src="${src}" alt="Image de ${cat}" loading="lazy" />
                        </a>`
                    ).join("")
                    break
                case 'videos':
                    content = data[type].map(src =>
                        `<iframe src="${src}" allowfullscreen loading="lazy"></iframe>`
                    ).join("")
                    break
                case 'youtube':
                    content = data[type].map(channel =>
                        `<a href="${channel.url}" target="_blank" rel="noopener">
                            <strong>${channel.title}</strong>
                            ${channel.description ? `<p>${channel.description}</p>` : ""}
                        </a>`
                    ).join("")
                    break
                case 'notes':
                    content = data[type].map(note => `<p>${note}</p>`).join("")
                    break
            }
            containers[type].innerHTML = content
            section.style.display = "block" // Afficher toute la section
        } else {
            section.style.display = "none" // Cacher toute la section
        }
    })

    // À la fin de loadCategory, après avoir ajouté tout le contenu
    observeSections();
}

// Afficher la section de bienvenue par défaut
welcomeSection.style.display = "block"

// Création de la liste des catégories
Object.keys(resources).forEach(cat => {
    const li = document.createElement("li")
    li.textContent = `${resources[cat].icon} ${cat}`
    li.dataset.category = cat
    li.onclick = () => loadCategory(cat)
    categoryList.appendChild(li)
})

// Observer les sections de la page d'accueil
document.addEventListener('DOMContentLoaded', () => {
    observeSections();
});