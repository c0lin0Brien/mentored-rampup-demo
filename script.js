let playing = false;
let audio = null;

const sonicYouth = document.getElementById('sonicyouth');
sonicYouth.addEventListener('click', function() {
    console.log("SonicYouth!");
    if (!playing) {
        audio = new Audio('Songs/KoolThing.wav');
        audio.play();
        playing = true;
        setTimeout(queue, 10000);
    } else {
        audio.pause();
        audio.currentTime = 0;
        console.log("paused");
    }
})

function queue () {
    playing = false;
}