$(document).ready(function(){
    $('.sidenav').sidenav();

    $(document).on('click', '.index-button', function() {
        playSound();
        console.log('sound played');
    });

    function playSound() {
        var sound = document.getElementById("audio");
        sound.play();
    }
  });