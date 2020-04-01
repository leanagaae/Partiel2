$(document).ready(function(){

});


// Ces 3 blocs devront être carrés et responsive : si la largeur d'un bloc change, sa hauteur aussi (juste à chargement de la page)
// pour cela utiliser le javascript pour récupérer la valeur width et la mettre aussi dans height
// exemple : $('div').height($('div').width());
// les éléments dans les boites seront centrés horizontalement et verticalement


// $('tbody div').height($('div').width());








// // POUR LES VIDÉOS -> commentaire car sinon BUG

// // POUR CLIQUER SUR UNE VIGNETTE ET CA AFFICHE LA VIDÉO
// $('#maVideo div iframe src')attr('src', 'id');


// //$("#mavideo div id").css('display', 'none');

// $('#mavideo nav li').click(function(){
//   var numeroLigne = $(this).index();
//   //console.log(numeroLigne);
//   $('#mavideo div iframe id').hide(2000);
//   $('#mavideo div iframe id').eq(numeroLigne).show(2000);
// });





// CLIQUER SUR LES TABLEAUX ET LES FAIRE CORRESPONDRE

//1- cache les tableaux
var tableaux = $('section').css('display', 'none');

//2- quand on clique sur

$('.box article').click(function(){
  //Cache les tableaux
  $('section').css('display', 'none');
  //récupérer le selecteur
  var attr_href = $(this).attr('href');
  //clic sur le selecteur pour montrer ton tableau
  tableaux.filter(attr_href).css('display', 'block');
  $("#maBoite").css('display', 'none');
});

// Quand on clique sur les menus ca enlève les grilles du tableau1...
$('#ar1').click(function(){
  //Cache les tableaux
  $('section').css('display', 'none');
  $("middle").css('display', 'block');
});


// 3- AJOUTER LA LOUPE

$("#tab").append("<div id='loupe'></div>");
// 4_MASQUER LOUPE
$("#loupe").hide();

//5-APPLICATION

$("td").hover(
  // La souris au survole
  function(){

    $("#loupe").css('display', 'block').text($(this).text());
    $(this).addClass("pseudo-hover") ;
},
// La souris quitte l’élément
function(){
  $("#loupe").css('display', 'none').text($(this).text());
  $(this).removeClass("pseudo-hover") ;
} );









