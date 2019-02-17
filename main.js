var button = document.getElementsByTagName("button")[0];

var ourRandomItem = document.createElement("p");
var lunchItemContainer = document.getElementById("generator-results");
lunchItemContainer.appendChild(ourRandomItem);

var placeholderText = document.createTextNode('');
ourRandomItem.appendChild(placeholderText);


var lunchItems = ["Mexican", "Italian", "Chicken", "Pizza", "Sandwiches", "Bagels", "Subs", "Wings", "Fish", "Salad", "Soup", "Flatbread"];

var myFunction = function(){
  lunchItems.sort(function(a,b){return 0.5 - Math.random()});
  var ourRandomItemFiller = document.createTextNode(lunchItems[0]);
  ourRandomItem.appendChild(ourRandomItemFiller);
  var ourButtonSection = document.getElementById("generator-button");
  ourButtonSection.removeChild(button);
};

button.onclick = myFunction;
