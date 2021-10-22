/**
 * Calcul le nombre de baton présent
 * @returns
 */
function nbreBaton() {
  return $(".baton_content").children().filter(".icon.icon-minus").length;
}

/**  Suppression des icons baton en fonction du bouton sélectionné
la fonction prévoit une remise à zéro par l'action reset */
function deletedBaton(nb, reset = false) {
  // Boutton nouvelle partie
  if (reset) {
    $("#new-game").addClass("active");
  } else {
    $("#new-game").removeClass("active");
    $(".message-tour").text("");
  }
  // Boucle sur le nombre à modifier
  for (let i = 20; i >= 0 && nb > 0; i--) {
    if (
      $(".baton_content").children().eq(i).attr("class") == "icon icon-minus" &&
      !reset
    ) {
      $(".baton_content")
        .children()
        .eq(i)
        .attr("class", "icon-display icon-minus");
      nb--;
    } else if (reset) {
      $(".baton_content").children().eq(i).attr("class", "icon icon-minus");
    }
    disabledButton();
  }
  score();
}

/** Ajoute l'icone baton sur l'élément en paramètre*/
function addCrayonSvg(el) {
  var svgIconBaton = `
   <svg class="icon icon-minus" viewBox="0 0 32 32">
    <path 
      d="M0 13v6c0 0.552 0.448 1 1 1h30c0.552 0 1-0.448 1-1v-6c0-0.552-0.448-1-1-1h-30c-0.552 0-1 0.448-1 1z"
    ></path>
    </svg>
`;
  $(el).append(svgIconBaton);
}
