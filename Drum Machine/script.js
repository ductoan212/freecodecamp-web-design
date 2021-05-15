const linkMp3 = {
    "Q": "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
    "W": "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
    "E": "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
    "A": "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
    "S": "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
    "D": "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
    "Z": "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
    "X": "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
    "C": "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
}

window.onload = function() {
    for (var i in linkMp3) {
        document.getElementById(i).setAttribute("src", linkMp3[i]);
    }
}

function play(key) {
    var audio = document.getElementById(key);
    try {
        audio.load();
    } catch (err) {
        console.log(err);
    }
    audio.play();

    // console.log(audio);
    var describe = document.getElementById('display');
    var s;
    switch (key) {
        case "Q":
            s = "Heater 1";
            break;
        case "W":
            s = "Heater 2";
            break;
        case "E":
            s = "Heater 3";
            break;
        case "A":
            s = "Heater 4";
            break;
        case "S":
            s = "Clap";
            break;
        case "D":
            s = "Open HH";
            break;
        case "Z":
            s = "Kick n' Hat";
            break;
        case "X":
            s = "Kick";
            break;
        case "C":
            s = "Closed HH";
            break;
        default:
            s = "";
    }
    describe.innerHTML = s;
}

document.getElementById('1').onclick = function() {
    play("Q");
}
document.getElementById('2').onclick = function() {
    play("W");
}
document.getElementById('3').onclick = function() {
    play("E");
}
document.getElementById('4').onclick = function() {
    play("A");
}
document.getElementById('5').onclick = function() {
    play("S");
}
document.getElementById('6').onclick = function() {
    play("D");
}
document.getElementById('7').onclick = function() {
    play("Z");
}
document.getElementById('8').onclick = function() {
    play("X");
}
document.getElementById('9').onclick = function() {
    play("C");
}

document.addEventListener('keydown', function(e) {
    var button;
    switch (e.key) {
        case "q":
        case "Q":
            button = "1";
            break;
        case "w":
        case "W":
            button = "2";
            break;
        case "e":
        case "E":
            button = "3";
            break;
        case "a":
        case "A":
            button = "4";
            break;
        case "s":
        case "S":
            button = "5";
            break;
        case "d":
        case "D":
            button = "6";
            break;
        case "z":
        case "Z":
            button = "7";
            break;
        case "x":
        case "X":
            button = "8";
            break;
        case "c":
        case "C":
            button = "9";
            break;
        default:
            return;
    }
    document.getElementById(button).click();
});