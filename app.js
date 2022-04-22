var total = 0;
var populateDiv = document.querySelector(".cart");

var largeToy = 1;
var smallToy = 2;

function itemAmmountVerification(size) {
  var largeDiv = document.querySelectorAll(".large");
  var smallDiv = document.querySelectorAll(".small");

  if (size === "large") {
    largeToy = largeToy - 1;
    if (largeToy === 0) {
      largeDiv.forEach((item) => {
        item.classList.add("hidden");
      });
    }
  } else if (size === "small") {
    smallToy = smallToy - 1;
    if (smallToy === 0) {
      smallDiv.forEach((item) => {
        item.classList.add("hidden");
      });
    }
  }
}

function addedToCart(className, itemSize) {
  var selectedClass = document.querySelector(`.${className}`);
  var selectedText = selectedClass.childNodes[3].innerHTML;
  var selectedPrice = selectedClass.childNodes[7].innerHTML;
  var showSelection = document.createElement("div");
  var textForSelection = document.createTextNode(selectedText);
  showSelection.appendChild(textForSelection);
  populateDiv.appendChild(showSelection);
  total = total + Number(selectedPrice);
  itemAmmountVerification(itemSize);
  // waitressAlert();
  showTotal();
}

function waitressAlert() {
  alert("nice choice");
}

function showTotal() {
  var totalDiv = document.querySelector(".total-show");
  totalDiv.innerHTML = total;
}
