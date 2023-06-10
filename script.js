// Set the initial width and height values
var initialWidth = window.innerWidth;
var initialHeight = window.innerHeight;

// Update the content of the <h1> tag
var sizeInfo = document.getElementById("sizeInfo");
sizeInfo.textContent = "Width: " + initialWidth + "px, Height: " + initialHeight + "px";

window.addEventListener("resize", function() {
  // Get the updated width and height of the window
  var width = window.innerWidth;
  var height = window.innerHeight;

  // Update the content of the <h1> tag
  sizeInfo.textContent = "Width: " + width + " and Height: " + height;
});
