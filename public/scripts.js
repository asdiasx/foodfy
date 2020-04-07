const modalOverlay = document.querySelector(".modal-overlay");
const cards = document.querySelectorAll(".card");

for (const card of cards) {
    card.addEventListener("click", function() {
        const imgModal = card.querySelector(".plate").getAttribute("src");
        const plateModal = card.querySelector(".plate-name").innerText;
        const authorModal = card.querySelector(".plate-author").innerText;

        modalOverlay.classList.add("active");

        modalOverlay.querySelector(".imgModal").src = imgModal;
        modalOverlay.querySelector(".plateModal").innerHTML = plateModal;
        modalOverlay.querySelector(".authorModal").innerHTML = authorModal;
    });
}

document.querySelector(".close-modal").addEventListener("click", function() {
    modalOverlay.classList.remove("active");

    modalOverlay.querySelector(".imgModal").src = "";
    modalOverlay.querySelector(".plateModal").innerHTML = "";
    modalOverlay.querySelector(".authorModal").innerHTML = "";
});