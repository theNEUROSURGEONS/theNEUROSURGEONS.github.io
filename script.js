function go(event) {
  const element = event.target;
  const targetID = element.getAttribute("targetID");
  const target = document.getElementById(targetID);
  const cards = document.getElementsByClassName("card");
  Array.from(cards).forEach(function (card) {
    card.classList.add("noShow");
  });
  target.classList.remove("noShow");
}
