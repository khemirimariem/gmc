function bold() {
  document.getElementById('text').style.fontWeight = "bold"
}

function italic() {
  document.getElementById('text').style.fontStyle = "italic";
}

function underline() {
  document.getElementById('text').style.textDecoration = "underline";
}

function fontsize() {

  var text = document.getElementById("text");
  var size = document.getElementById("fonts");
  text.style.fontSize=size.options[size.selectedIndex].text;
}

function fontFamily() {
 
  var text = document.getElementById("text");
  var Family = document.getElementById("fontss");
  text.style.fontFamily=Family.options[Family.selectedIndex].text;
}