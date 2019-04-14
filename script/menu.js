// Getting access to the DOM by creating these variables


var menu = document.getElementById('menu');

var nav = document.getElementById('nav');

var exit = document.getElementById('exit');
// menu click action
menu.addEventListener('click', function(e){
    nav.classList.toggle('hide-mobile');
    e.preventDefault();
});
// exit menu button
exit.addEventListener('click', function(e){
    nav.classList.add('hide-mobile');
    e.preventDefault();
});