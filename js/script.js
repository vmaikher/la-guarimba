$( document ).ready(function() {
    $('.freeze').freezeframe();

    var audioElement = document.createElement('audio');

    $(".person").on("click", function (e) {
        e.preventDefault();

        var currentTrack = e.target.getAttribute('href');
        if (audioElement.getAttribute('src') && audioElement.getAttribute('src').replace('audio/', '') == currentTrack) {
            console.log('here', currentTrack);
            audioElement.pause();
        } else {
            console.log('there', currentTrack);
                        audioElement.setAttribute('src', 'audio/' + currentTrack);
            audioElement.load();
            audioElement.play();
        }
    });

    $(".wrapper").on("mousedown touchstart", function(e) {
        $(this).addClass('grabbing')
    })

    $(".wrapper").on("mouseup touchend", function(e) {
        $(this).removeClass('grabbing')
    })

    window.scrollTo(0, 0);

    var maxSize = 5000;
    var minSize = 1000;

    function changeImageSize(size) {
        el = $(".wrapper");
        var newSize = el.width() + size;

        if (newSize >= minSize && newSize <= maxSize) {
            el.width(newSize);
        }
    }

    window.addEventListener('wheel', function (e) {
        e.preventDefault();
        if (e.deltaY > 0) {
            changeImageSize(-2000);
        } else if (e.deltaY < 0) {
            changeImageSize(2000);
        }
    });

});