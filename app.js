function addedToCart(className) {
  var selectedClass = document.querySelector(`.${className}`);
  var selectedText = selectedClass.childNodes[3].innerHTML;
  var showSelection = document.createElement("div");
  var textForSelection = document.createTextNode(selectedText);
  showSelection.appendChild(textForSelection);
  var populateDiv = document.querySelector(".selected-population");
  populateDiv.appendChild(showSelection);
}
