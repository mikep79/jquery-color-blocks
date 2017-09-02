console.log('js');
$(document).ready(onReady);

var rCounter = 0;
var yCounter = 0;
var gCounter = 0;
var bCounter = 0;

function onReady(){
    console.log('jQuery has been activated!');
    $('.color-button').on('click', cubeCreate);
    $('body').on('click', '.color-cube', destroyCube);

}

function cubeCreate() {
    console.log('created!');    
    var $color = $(this).data('color');                     // extract color data
    $('.container').append($('<div class=color-cube>'));    // create new div box
    $('.color-cube').last().addClass($color);               // add color class
    if ($color === 'red') {                                 // change color counters
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

function destroyCube() {
    console.log('destroyed!');
    $(this).remove();                                   // destroy div
    if ($(this).hasClass('red')) {                      // deterime color class of div
        rCounter--;                                     // lower counter
        $('#red').html(rCounter);                       // update counters
    } else if ($(this).hasClass('yellow')) {
        yCounter--;
        $('#yellow').html(yCounter);
    } else if ($(this).hasClass('green')) {
        gCounter--;
        $('#green').html(gCounter);
    } else if ($(this).hasClass('blue')) {
        bCounter--;
        $('#blue').html(bCounter);
    }
}