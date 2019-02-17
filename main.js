var button = document.getElementsByTagName("button")[0];

var lunchItems = ["Mexican Food", "Italian", "Chicken", "Pizza", "Sandwiches", "Bagels", "Subs", "Wings", "Fish", "Salad", "Soup", "Flatbread"];

var myFunction = function(){
  lunchItems.sort(function(a,b){return 0.5 - Math.random()});
  console.log(lunchItems);
};

button.onclick = myFunction;
