var baton21 = new Array(21);
var scoreJoueur = 0;
var scoreIA = 0;
$(function () {
  /** Ajoute les 21 batons */
  for (let c of baton21) {
    addCrayonSvg(".baton_content");
  }
  /** Initialise le score des joueurs */
  $("#score-joueur").text(scoreJoueur);
  $("#score-ia").text(scoreIA);
  $("#new-game").attr("disabled", true);
  $(".message-tour").text("A vous de jouer ...!! 🎮");
});
