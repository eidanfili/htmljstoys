var total = 0;
var populateDiv = document.querySelector(".selected-population");

var largeToy = 1;
var smallToy = 2;

function itemAmmountVerification(size) {
  var largeDiv = document.querySelector(".large");
  console.log(largeDiv);
  var smallDiv = document.querySelectorAll(".small");
  console.log(smallDiv);

  if (size === "large") {
    largeToy = largeToy - 1;
    if (largeToy === 0) {
      largeDiv.classList.add("hidden");
    }
  } else if (size === "small") {
    smallToy = smallToy - 1;
    if (smallToy === 0) {
      smallDiv.forEach((item) => {
        item.classList.add("hidden");
      });
    }
    console.log(smallToy);
  }
}

function addedToCart(className, itemSize) {
  var selectedClass = document.querySelector(`.${className}`);
  // console.log(selectedClass.childNodes);
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
  var showTotal = document.createElement("div");
  var totalToShow = document.createTextNode(total);
  showTotal.appendChild(totalToShow);
  populateDiv.appendChild(showTotal);
}
