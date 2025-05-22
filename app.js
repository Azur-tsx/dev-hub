let currentCat = null

const categoryList = document.getElementById("categoryList")
const currentCategory = document.getElementById("currentCategory")
const linksSection = document.querySelector("section:nth-of-type(1)")
const imagesSection = document.querySelector("section:nth-of-type(2)")
const videosSection = document.querySelector("section:nth-of-type(3)")
const notesSection = document.querySelector("section:nth-of-type(4)")
const linksContainer = document.getElementById("links")
const imagesContainer = document.getElementById("images")
const videosContainer = document.getElementById("videos")
const notesContainer = document.getElementById("notes")

function loadCategory(cat) {
    if (currentCat === cat) return
    currentCat = cat

    const data = resources[cat]
    currentCategory.textContent = resources[cat].icon + " " + cat

    linksSection.style.display = "none"
    imagesSection.style.display = "none"
    videosSection.style.display = "none"
    notesSection.style.display = "none"

    if (data.links && data.links.length > 0) {
        linksContainer.innerHTML = data.links
            .map(link => `<a href="${link.url}" target="_blank">
        <strong>${link.title}</strong>
        ${link.description ? `<p style="margin: 0.3em 0 0; font-size: 0.9em; color: #ccc;">${link.description}</p>` : ""}
      </a>`)
            .join("")
        linksSection.style.display = "block"
    }

    if (data.images && data.images.length > 0) {
        imagesContainer.innerHTML = data.images
            .map(src => `<a href="${src}" target="_blank"><img src="${src}" alt="Image de ${cat}" /></a>`)
            .join("")
        imagesSection.style.display = "block"
    }

    if (data.videos && data.videos.length > 0) {
        videosContainer.innerHTML = data.videos
            .map(src => `<iframe src="${src}" allowfullscreen></iframe>`)
            .join("")
        videosSection.style.display = "block"
    }

    if (data.notes && data.notes.length > 0) {
        notesContainer.innerHTML = data.notes
            .map(note => `<p>${note}</p>`)
            .join("")
        notesSection.style.display = "block"
    }
}

console.log(notesSection)

Object.keys(resources).forEach(cat => {
    const li = document.createElement("li")
    li.textContent = resources[cat].icon + " " + cat
    li.onclick = () => loadCategory(cat)
    categoryList.appendChild(li)
})
