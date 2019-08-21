let song;
function preload(){
    song = loadSound("./music/bg.mp3");
    document.getElementById("p5_loading").remove();
}

function setup(){
    song.play();
    $("#wait_text").addClass("hidden");
    console.log($("#wait_text"));
    $("#guide_text").removeClass("hidden");

    $("#loading").addClass("hidden");
    $("#main_box").removeClass("hidden");
    document.getElementById("defaultCanvas0").remove();
}



