let song;
function preload(){
    song = loadSound("./music/bg.mp3");
    document.getElementById("p5_loading").remove();
}

function setup(){
    song.play();
    document.getElementById("defaultCanvas0").remove();
}



