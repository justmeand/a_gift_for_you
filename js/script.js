let song;
function preload(){
    song = loadSound("./music/bg.mp3");
    document.getElementById("p5_loading").remove();
}

function setup(){
    song.play();

    $("#wait_text").fadeIn("slow", function() {
        $(this).addClass("hidden");
    });
    $("#loading").fadeIn("slow", function() {
        $(this).addClass("hidden");
    });

    $("#main_box").fadeOut("slow", function() {
        $(this).removeClass("hidden");
    });

    $("#guide_text").fadeOut("slow", function() {
        $(this).removeClass("hidden");
    });
    
    
    document.getElementById("defaultCanvas0").remove();
}



