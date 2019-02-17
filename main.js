var button = document.getElementsByTagName("button")[0];
//Creates Placeholder Element for Random Items
var ourRandomItem = document.createElement("p");
//Calls Container from HTML for items
var lunchItemContainer = document.getElementById("generator-results");
lunchItemContainer.appendChild(ourRandomItem);

//Creates Empty Placeholder Text Node for Random Item
var placeholderNode = document.createTextNode('');
ourRandomItem.appendChild(placeholderNode);

//Random Items
var lunchItems = ["Mexican", "Italian", "Chicken", "Pizza", "Sandwiches", "Bagels", "Subs", "Wings", "Fish", "Salad", "Soup", "Flatbread"];

//Function
//Returns random results into item textnode  
var myFunction = function(){
  lunchItems.sort(function(a,b){return 0.5 - Math.random()});
  var ourRandomItemFiller = document.createTextNode(lunchItems[0]);
  ourRandomItem.appendChild(ourRandomItemFiller);
  var ourButtonSection = document.getElementById("generator-button");
  ourButtonSection.removeChild(button);
  ourRandomItem.classList.add("button-style");
};

button.onclick = myFunction;
