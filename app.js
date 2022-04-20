var total = 0;
var populateDiv = document.querySelector(".selected-population");

function addedToCart(className) {
  var selectedClass = document.querySelector(`.${className}`);
  console.log(selectedClass.childNodes);
  var selectedText = selectedClass.childNodes[3].innerHTML;
  var selectedPrice = selectedClass.childNodes[7].innerHTML;
  var showSelection = document.createElement("div");
  var textForSelection = document.createTextNode(selectedText);
  showSelection.appendChild(textForSelection);
  populateDiv.appendChild(showSelection);
  total = total + Number(selectedPrice);
}

function showTotal() {
  var showTotal = document.createElement("div");
  var totalToShow = document.createTextNode(total);
  showTotal.appendChild(totalToShow);
  populateDiv.appendChild(showTotal);
}
