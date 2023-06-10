//your JS code here. If required.
window.addEventListener("resize", function() {
  // Get the width and height of the window
  var width = window.innerWidth;
  var height = window.innerHeight;

  // Update the content of the <h1> tag
  var sizeInfo = document.getElementById("sizeInfo");
  sizeInfo.textContent = "Width: " + width +" and"+ "Height: " + height ;
});
