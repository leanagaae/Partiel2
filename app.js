$(document).ready(function(){

});


// Ces 3 blocs devront être carrés et responsive : si la largeur d'un bloc change, sa hauteur aussi (juste à chargement de la page)
// pour cela utiliser le javascript pour récupérer la valeur width et la mettre aussi dans height
// exemple : $('div').height($('div').width());
// les éléments dans les boites seront centrés horizontalement et verticalement


$('tbody div').height($('div').width());


// pour les vidéos

$('#maVideo div iframe')attr('id', 'video1')







// POUR CLIQUER SUR UNE VIGNETTE ET CA AFFICHE LA VIDÉO
$('#mavideo nav li').click(function(){
  var numeroLigne = $(this).index();
  //console.log(numeroLigne);
  $('#mavideo div iframe').hide(2000);
  $('#mavideo div iframe').eq(numeroLigne).show(2000);
});













