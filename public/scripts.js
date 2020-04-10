const cards = document.querySelectorAll(".card");
const topics = document.querySelectorAll(".recipe-topic");

cards.forEach(function (card, recipeIndex) {
  card.addEventListener("click", function () {
    window.location.href = `/recipes/${recipeIndex}`;
  });
});

for (let topic of topics) {
  const button = topic.querySelector(".topic-button");
  const hide = topic.querySelector(".topic-hide");

  button.addEventListener("click", function () {
    let status = button.textContent;
    if (status == "MOSTRAR") {
      status = "ESCONDER";
      hide.classList.remove("active");
    } else {
      status = "MOSTRAR";
      hide.classList.add("active");
    }
    button.textContent = status;
  });
}
