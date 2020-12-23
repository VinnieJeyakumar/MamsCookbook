var allowedKeys = {
    37: 'left',
    38: 'up',
    39: 'right',
    40: 'down',
    65: 'a',
    66: 'b'
};
var konamiCode = ['up', 'up', 'down', 'down', 'left', 'right', 'left', 'right', 'b', 'a'];
var konamiCodePosition = 0;

document.addEventListener('keydown', function(e) {
    var key = allowedKeys[e.keyCode];
    var requiredKey = konamiCode[konamiCodePosition];
    if (key == requiredKey) {
        konamiCodePosition++;
        if (konamiCodePosition == konamiCode.length) {
            activateCheats();
            konamiCodePosition = 0;
        }
    }
    else {
        konamiCodePosition = 0;
    }
});

function activateCheats() {
    var audio = new Audio("js/FriesAndChicken.mp3");
    document.getElementById('snapPlug').innerHTML = "@vjswag & arjun_iyer12";
    document.getElementById('viewCookbook').innerHTML = "Big Eats (like Rod Wave)";
    audio.pause();
    audio.currentTime = 0;

    // Alert the User
    alert("Great job on finding this! You my kind sir/ma'am are cultured");
    alert("BT dubs, Yessir big eats like Rod Wave, creds to @SaintBeDa on YouTube");
    alert("Also, be big man and add us on snap... Check the footer for the handle");

    audio.play();
}
