function ShowNowPlaying() {
  var div = document.getElementById("NowPlayingDiv");

  if (div.style.display === "none") {
    div.style.display = "block";
  } else {
    div.style.display = "none";
  }

}