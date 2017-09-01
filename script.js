console.log('js');
$(document).ready(onReady);

var rCounter = 0;
var yCounter = 0;
var gCounter = 0;
var bCounter = 0;

function onReady(){
    console.log('jQuery has been activated!');
    $('.color-button').on('click', cubeCreate);

}

function cubeCreate() {
    var $color = $(this).data('color');
    $('.container').append($('<div class=color-cube>'));
    $('.color-cube').last().addClass($color);
    if ($color === 'red') {                 // color counters
        rCounter++;
        $('#red').html(rCounter);
    } else if ($color === 'yellow') {
        yCounter++;
        $('#yellow').html(yCounter);
    } else if ($color === 'green') {
        gCounter++;
        $('#green').html(gCounter);
    } else if ($color === 'blue') {
        bCounter++;
        $('#blue').html(bCounter);
    }
}