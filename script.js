// Modal za slike
const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImg");
const closeBtn = document.querySelector(".close");

// Funkcija za otvaranje slike u modalu
function openModal(imgElement) {
    modal.style.display = "flex";
    modalImg.src = imgElement.src.replace('/300', '/600').replace('/200', '/600').replace('/400', '/600'); 
}

// Dodavanje event listenera za sve slike s klasom "clickable-img"
const clickableImages = document.querySelectorAll(".clickable-img");
clickableImages.forEach(img => {
    img.addEventListener("click", function () {
        openModal(this);
    });
});

// Zatvaranje modala
function closeModal() {
    modal.style.display = "none";
}

// Zatvaranje modala kad kliknete izvan slike
window.onclick = function (event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
};

// Author info
document.getElementById("author1-img").onclick = function() {
    document.getElementById("imageModal").style.display = "flex";
    document.getElementById("modalImg").src = this.src.replace('/200', '/600');
}

document.getElementById("author2-img").onclick = function() {
    document.getElementById("imageModal").style.display = "flex";
    document.getElementById("modalImg").src = this.src.replace('/200', '/600');
}

document.getElementById("author1-name").onclick = function() {
    document.getElementById("author1-info").style.display = "block";
}

document.getElementById("author2-name").onclick = function() {
    document.getElementById("author2-info").style.display = "block";
}

function closeAuthorInfo(id) {
    document.getElementById(id).style.display = "none";
}