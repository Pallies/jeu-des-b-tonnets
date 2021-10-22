/**
 * modifie la class
 * pour indiquer à qui le tour
 */
function tourDeJeu() {
  $("#partie-joueur").toggleClass("tour-de-jeu");
  $("#partie-ia").toggleClass("tour-de-jeu");
}
/**
 * Affecte le score
 * Sinon affecte le tour de jeu à l'IA
 * et le fais jouer
 */
function score() {
  var nb = nbreBaton();
  if (nb == 0) {
    // Affectation du point de victoire
    $("#partie-joueur").hasClass("tour-de-jeu")
      ? $("#score-ia").text(++scoreIA)
      : $("#score-joueur").text(++scoreJoueur);
    // Affectation du message footer
    $("#partie-joueur").hasClass("tour-de-jeu")
      ? messageLooser()
      : messageWinner();
  } else {
    tourDeJeu();
    playIA();
  }
}
/** désactive les buttons en fonction du nombre de
 * batons restant
 */
function disabledButton() {
  $("button").removeAttr("disabled");
  switch (nbreBaton()) {
    case 0:
      $("#btn-baton-1").attr("disabled", true);
    case 1:
      $("#btn-baton-2").attr("disabled", true);
    case 2:
      $("#btn-baton-3").attr("disabled", true);
      break;
  }
}
/**
 * Désactive tous les boutons pendant
 * le tour de l'IA
 */
function disabledToggleAllButton() {
  $("button").removeAttr("disabled");
  $("button").attr("disabled", true);
}
/** message de looser */
function messageLooser() {
  $(".message-tour").text("⇈ Une autre partie ⇈");
  $(".message-end").text("☣ looser ☣");
  animateFlash($(".message-end"));
}
/** message winner */
function messageWinner() {
  $(".message-tour").text("⇈ Une autre partie ⇈");
  $(".message-end").text("🏆 winner 🏆");
  animateFlash($(".message-end"));
}
/**
 * animation
 * @param {element text} el 
 */
function animateFlash(el) {
  el.animate({ opacity: 0 }, 250)
    .animate({ opacity: 1 }, 250)
    .animate({ opacity: 0 }, 250)
    .animate({ opacity: 1 }, 250)
    .animate({ opacity: 0 }, 250)
    .animate({ opacity: 1 }, 250)
    .animate({ opacity: 0 }, 2500);
}
