/**
 * spinner de réflexion IA
 */
function viewThinkIA(){
var spinner=`<div class="spinner-border text-info" role="status">
  <span class="visually-hidden">Loading...</span>
</div>`;
return spinner;
}
/**
 * choisit un nombre aléatoire
 * si l'IA commence la partie
 */
function firstPlayer() {
  var nbAlea = 22;
  var nb = nbreBaton();
 
    while (nbAlea >= nb) {
      nbAlea = Math.round(Math.random() * 2)+1;
    }
    return nbAlea;

}

/** détermine la tactique
 * CàD la fonction à appeler
 */
function tourIA() {
  var batonCount = nbreBaton();
  batonCount >= 4 ? tactiquePlus4(batonCount) : tactiqueGagnante(batonCount);
}
/**
 * calcul des batons restant
 * passé en paramètre
 * @param {*} baton
 *
 * détermine le nombre de baton à supprimer
 * appel de la function deletedBaton
 */
function tactiquePlus4(baton) {
  var nbDelete = howManyDelete(baton % 4);
  deletedBaton(nbDelete);
}
/**
 * calcul des batons restant
 * passé en paramètre
 * @param {*} baton
 *
 * détermine le nombre de baton à supprimer
 * appel de la function deletedBaton
 */
function tactiqueGagnante(baton) {
  var nbDelete = baton == 3 ? 2 : 1;
  deletedBaton(nbDelete);
}
/**
 * retourne le nombre à supprimer
 * @param {*} nb de batons
 * @returns deleteBaton
 */
function howManyDelete(nb) {
  switch (nb % 4) {
    case 0:
      return 3;
    case 2:
      return 1;
    case 3:
      return 2;
    default:
      return firstPlayer();
  }
}
/** lance le tour de jeu de l'IA
 * désactive les buttons du joueur
 */
function playIA() {
  if ($("#partie-ia").hasClass("tour-de-jeu")) {
    $(".text-ia").append(viewThinkIA());
    disabledToggleAllButton();
    setTimeout(() => {
      tourIA();
       $(".text-ia").text("");
    }, 1000);
  }
}
