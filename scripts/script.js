// Get the link element by its id
var button = document.getElementById("NowPlayingButton");

// Add a click event listener to the button
button.addEventListener("click", function() {
  // Get the div element by its id
  var div = document.getElementById("NowPlayingDiv");

  // Toggle the display property of the div
  if (div.style.display === "none") {
    div.style.display = "block";
  } else {
    div.style.display = "none";
  }
});