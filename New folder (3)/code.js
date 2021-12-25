var mysong = document.getElementById("my song");
var icon = document.getElementById("icon");

icon.onclick = function() {
    if (mysong.pause); {
        mysong.play();
        icon.src = "audio/pause-303651_1280";
    }
}