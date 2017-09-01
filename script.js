console.log('js');
$(document).ready(onReady);

function onReady(){
    console.log('jQuery has been activated!');
    //event listeners
    $('.color-button').on('click', cubeCreate);

}
//function that gets called through as an event listener
function cubeCreate() {
    var $color = $(this).data('color');
    //We're adding a new div with the "color-cube" class dynamically into the DOM
    $('.container').append($('<div class=color-cube>'));
    
    $('.color-cube').last().addClass($color);
    console.log(cubeCreate);
}