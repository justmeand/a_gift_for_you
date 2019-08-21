let song;
function preload(){
    song = loadSound("./music/bg.mp3");
    document.getElementById("p5_loading").remove();
}

function setup(){
    song.play();

    $("#wait_text").fadeOut("slow", function() {
        $(this).addClass("hidden");
    });
    $("#loading").fadeOut("slow", function() {
        $(this).addClass("hidden");
    });

    $("#main_box").fadeIn("slow", function() {
        $(this).removeClass("hidden");
    });

    $("#guide_text").fadeIn("slow", function() {
        $(this).removeClass("hidden");
    });

    $("#main_box").hover(function(){
        $("#guide_text").fadeOut( 1000 );
        $("#guide_text").addClass("hidden");
        $("#open_box_text").fadeIn( 1000 );
        $("#open_box_text").removeClass("hidden");
    }, function(){
        $("#guide_text").fadeIn( 1000 );
        $("#guide_text").removeClass("hidden");
        $("#open_box_text").fadeOut( 1000 );
        $("#open_box_text").addClass("hidden");
    });
    
    
    document.getElementById("defaultCanvas0").remove();
}



