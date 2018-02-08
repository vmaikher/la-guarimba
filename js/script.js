var audioElement = document.createElement('audio');
$(".person").on("click", function(e){
    e.preventDefault();
    console.log(e.target.getAttribute('href'));
    audioElement.setAttribute('src', "audio/"+e.target.getAttribute('href'));
    audioElement.load();
    audioElement.play();
});