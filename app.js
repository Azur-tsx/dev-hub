// app.js

let currentCat = null;

const categoryList = document.getElementById("categoryList");
const currentCategory = document.getElementById("currentCategory");
const linksSection = document.querySelector("section:nth-of-type(1)");
const imagesSection = document.querySelector("section:nth-of-type(2)");
const videosSection = document.querySelector("section:nth-of-type(3)");
const notesSection = document.querySelector("section:nth-of-type(4)");
const linksContainer = document.getElementById("links");
const imagesContainer = document.getElementById("images");
const videosContainer = document.getElementById("videos");

function loadCategory(cat) {
    if (currentCat === cat) return;
    currentCat = cat;

    const data = resources[cat];
    currentCategory.textContent = cat;

    linksSection.style.display = "block";
    imagesSection.style.display = "block";
    videosSection.style.display = "block";
    notesSection.style.display = "block";

    linksContainer.innerHTML = data.links
        .map(link => `
      <a href="${link.url}" target="_blank">
        <strong>${link.title}</strong>
        ${link.description ? `<p style="margin: 0.3em 0 0; font-size: 0.9em; color: #ccc;">${link.description}</p>` : ""}
      </a>
    `)
        .join("");

    imagesContainer.innerHTML = data.images
        .map(src => `<a href="${src}" target="_blank"><img src="${src}" alt="Image for ${cat}"></a>`)
        .join("");

    videosContainer.innerHTML = data.videos
        .map(src => `<iframe src="${src}" allowfullscreen></iframe>`)
        .join("");
}

// Masquer les sections au départ
linksSection.style.display = "none";
imagesSection.style.display = "none";
videosSection.style.display = "none";
notesSection.style.display = "none";

Object.keys(resources).forEach(cat => {
    const li = document.createElement("li");
    li.textContent = cat;
    li.onclick = () => loadCategory(cat);
    categoryList.appendChild(li);
});
