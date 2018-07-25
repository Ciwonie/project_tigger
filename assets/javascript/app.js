$(document).ready(function () {
    $('.sidenav').sidenav();
    $('.slider').slider();
    $('.carousel').materialbox();
    $('.carousel.carousel-slider').carousel({
        fullWidth: true
      });


    $(document).on('click', '.index-button', function () {
        playSound();
        console.log('sound played');
        redirect()
    });

    function redirect() {
        setTimeout(function () {
            location.href = "gallery.html"; //will redirect to gallery
            console.log('redirect');
        }, 1500); //will call the function after 2 secs.
    }

    function playSound() {
        var sound = document.getElementById("audio");
        sound.play();
    }
});