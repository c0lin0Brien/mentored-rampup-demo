let playing = false;
let audio = null;

function queue () {
    playing = false;
}

// ARTISTS
// SONIC YOUTH
const sonicYouth = document.getElementById('sonicyouth');
sonicYouth.addEventListener('click', function() {
    if (!playing) {
        audio = new Audio('Songs/KoolThing.wav');
        audio.play();
        playing = true;
        setTimeout(queue, 10000);
    } else {
        audio.pause();
        audio.currentTime = 0;
        playing = false;
    }
})
// THE VELVET UNDERGROUND
const velvetUnderground = document.getElementById('thevelvetunderground');
velvetUnderground.addEventListener('click', function() {
    if (!playing) {
        audio = new Audio('Songs/VenusInFurs.wav');
        audio.play();
        playing = true;
        setTimeout(queue, 10000);
    } else {
        audio.pause();
        audio.currentTime = 0;
        playing = false;
    }
})
// MY BLOODY VALENTINE
const myBloodyValentine = document.getElementById('mybloodyvalentine');
myBloodyValentine.addEventListener('click', function() {
    if (!playing) {
        audio = new Audio('Songs/KevinSong.wav');
        audio.play();
        playing = true;
        setTimeout(queue, 10000);
    } else {
        audio.pause();
        audio.currentTime = 0;
        playing = false;
    }
})
// MY DEMARCO
const macDemarco = document.getElementById('macdemarco');
macDemarco.addEventListener('click', function() {
    if (!playing) {
        audio = new Audio('Songs/MyKindOfWoman.wav');
        audio.play();
        playing = true;
        setTimeout(queue, 10000);
    } else {
        audio.pause();
        audio.currentTime = 0;
        playing = false;
    }
})
// APHEX TWIN
const aphexTwin = document.getElementById('aphextwin');
aphexTwin.addEventListener('click', function() {
    if (!playing) {
        audio = new Audio('Songs/CockVerTen.wav');
        audio.play();
        playing = true;
        setTimeout(queue, 10000);
    } else {
        audio.pause();
        audio.currentTime = 0;
        playing = false;
    }
})

// ALBUMS
// ONE WAYNE G
const oneWayneG = document.getElementById('onewayneg');
oneWayneG.addEventListener('click', function() {
    if (!playing) {
        playing = true;
        audio = new Audio('Songs/ProudTrueToyota.wav');
        audio.play();
        setTimeout(queue, 10000);
    } else {
        audio.pause();
        audio.currentTime = 0;
        playing = false;
    }
})
// INSTRUMENT
const instrument = document.getElementById('instrument');
instrument.addEventListener('click', function() {
    if (!playing) {
        audio = new Audio('Songs/Arpeggiator.wav');
        audio.play();
        playing = true;
        setTimeout(queue, 10000);
    } else {
        audio.pause();
        audio.currentTime = 0;
        playing = false;
    }
})
// FIVE EASY HOT DOGS
const fiveEasyHotDogs = document.getElementById('fiveeasyhotdogs');
fiveEasyHotDogs.addEventListener('click', function() {
    if (!playing) {
        audio = new Audio('Songs/Portland.wav');
        audio.play();
        playing = true;
        setTimeout(queue, 10000);
    } else {
        audio.pause();
        audio.currentTime = 0;
        playing = false;
    }
})
// LOVELESS
const loveless = document.getElementById('loveless');
loveless.addEventListener('click', function() {
    if (!playing) {
        audio = new Audio('Songs/Soon.wav');
        audio.play();
        playing = true;
        setTimeout(queue, 10000);
    } else {
        audio.pause();
        audio.currentTime = 0;
        playing = false;
    }
})
// SELECTED AMBIENT WORKS
const selectedAmbientWorks = document.getElementById('selectedambientworks');
selectedAmbientWorks.addEventListener('click', function() {
    if (!playing) {
        audio = new Audio('Songs/Ageispolis.wav');
        audio.play();
        playing = true;
        setTimeout(queue, 10000);
    } else {
        audio.pause();
        audio.currentTime = 0;
        playing = false;
    }
})

// SONGS
// I LOVE YOU GOLDEN BLUE
const iLoveYouGoldenBlue = document.getElementById('iloveyougoldenblue');
iLoveYouGoldenBlue.addEventListener('click', function() {
    if (!playing) {
        audio = new Audio('Songs/ILoveYouGoldenBlue.wav');
        audio.play();
        playing = true;
        setTimeout(queue, 10000);
    } else {
        audio.pause();
        audio.currentTime = 0;
        playing = false;
    }
})
// XTAL
const xtal = document.getElementById('xtal');
xtal.addEventListener('click', function() {
    if (!playing) {
        audio = new Audio('Songs/Xtal.wav');
        audio.play();
        playing = true;
        setTimeout(queue, 10000);
    } else {
        audio.pause();
        audio.currentTime = 0;
        playing = false;
    }
})
// MATTE KUDASAI
const matteKudasai = document.getElementById('mattekudasai');
matteKudasai.addEventListener('click', function() {
    if (!playing) {
        audio = new Audio('Songs/MatteKudasai.wav');
        audio.play();
        playing = true;
        setTimeout(queue, 10000);
    } else {
        audio.pause();
        audio.currentTime = 0;
        playing = false;
    }
})
// #9
const numberNine = document.getElementById('numbernine');
numberNine.addEventListener('click', function() {
    if (!playing) {
        audio = new Audio('Songs/NumberNine.wav');
        audio.play();
        playing = true;
        setTimeout(queue, 10000);
    } else {
        audio.pause();
        audio.currentTime = 0;
        playing = false;
    }
})
// TEEN AGE RIOT
const teenAgeRiot = document.getElementById('teenageriot');
teenAgeRiot.addEventListener('click', function() {
    if (!playing) {
        audio = new Audio('Songs/TeenageRiot.wav');
        audio.play();
        playing = true;
        setTimeout(queue, 10000);
    } else {
        audio.pause();
        audio.currentTime = 0;
        playing = false;
    }
})