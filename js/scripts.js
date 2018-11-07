var burgerCostA = 2.99;
var burgerCostB = 3.99;
var burgerCostC = 5.99;
var friesCostA = 0.99;
var friesCostB = 1.49;
var friesCostC = 1.99;
var drinkCostA = 1.49;
var drinkCostB = 2.49;
var drinkCostC = 1.99;

var	totalCostBurgerA = function(burgerCostA, burgerCountA){
  return (burgerCostA * burgerCountA).toFixed(2);
}

var	totalCostBurgerB = function(burgerCostB, burgerCountB){
  return (burgerCostB * burgerCountB).toFixed(2);
}

var	totalCostBurgerC = function(burgerCostC, burgerCountC){
  return (burgerCostC * burgerCountC).toFixed(2);
}

var totalCostBurgersAll = function(totalCostBurgerA, totalCostBurgerB, totalCostBurgerC) {
  return totalCostBurgerA + totalCostBurgerB + totalCostBurgerC;
}

var	totalCostFriesA = function(friesCostA, friesCountA){
  return (friesCostA * friesCountA).toFixed(2);
}

var	totalCostFriesB = function(friesCostB, friesCountB){
  return (friesCostB * friesCountB).toFixed(2);
}

var	totalCostFriesC = function(friesCostC, friesCountC){
  return (friesCostC * friesCountC).toFixed(2);
}

var totalCostFriesAll = function(totalCostFriesA, totalCostFriesB, totalCostFriesC) {
  return totalCostFriesA + totalCostFriesB + totalCostFriesC;
}

var	totalCostDrinksA = function(drinkCostA, drinksCountA){
  return (drinkCostA * drinksCountA).toFixed(2);
}

var	totalCostDrinksB = function(drinkCostB, drinksCountB){
  return (drinkCostB * drinksCountB).toFixed(2);
}

var	totalCostDrinksC = function(drinkCostC, drinksCountC){
  return (drinkCostC * drinksCountC).toFixed(2);
}

var totalCostDrinksAll = function(totalCostDrinksA, totalCostDrinksB, totalCostDrinksC) {
  return totalCostDrinksA + totalCostDrinksB + totalCostDrinksC;
}

function burgerReceiptCheck(burgerCountA, burgerCountB, burgerCountC) {
  if (burgerCountA > 0 || burgerCountB > 0 || burgerCountC > 0) {
    return true;
  }
  else {
    return false;
  }
}

function friesReceiptCheck(friesCountA, friesCountB, friesCountC) {
  if (friesCountA > 0 || friesCountB > 0 || friesCountC > 0) {
    return true;
  }
  else {
    return false;
  }
}

function drinksReceiptCheck(drinksCountA, drinksCountB, drinksCountC) {
  if (drinksCountA > 0 || drinksCountB > 0 || drinksCountC > 0) {
    return true;
  }
  else {
    return false;
  }
}

var receiptCheckAll = function (burgerReceiptCheck, friesReceiptCheck, drinksReceiptCheck){
  if (burgerReceiptCheck(burgerCountA, burgerCountB, burgerCountC) || friesReceiptCheck(friesCountA, friesCountB, friesCountC) || drinksReceiptCheck(drinksCountA, drinksCountB, drinksCountC)){
    return true;
  }
  else {
    return false;
  }
}

$(document).ready(function() {
  $("form#testForm").submit(function(event) {
    event.preventDefault();

    $("div#orderSuccess").empty();
    $("ul#foodOutput").empty();
    $("div#costOutput").empty();
    $("div#totalText").empty();
    $("div#receiptTotal").empty();

    $("ul#receiptOutput").empty();
    $("ul#foodOutput").empty();
    $("ul#receiptTotal").empty();

		var burgerCountA = parseInt($("#burgerPlainInput").val());
    var burgerCountB = parseInt($("#burgerDoubleInput").val());
    var burgerCountC = parseInt($("#burgerDeluxeInput").val());

		var friesCountA = parseInt($("#smlFryInput").val());
    var friesCountB = parseInt($("#medFryInput").val());
    var friesCountC = parseInt($("#lrgFryInput").val());

		var drinksCountA = parseInt($("#softDrinkInput").val());
    var drinksCountB = parseInt($("#milkshakeInput").val());
    var drinksCountC = parseInt($("#juiceDrinksInput").val());

    var refinedCostBurger = parseFloat(totalCostBurgersAll(totalCostBurgerA(burgerCostA, burgerCountA), totalCostBurgerB(burgerCostB, burgerCountB), totalCostBurgerC(burgerCostC, burgerCountC))).toFixed(2);
    var refinedCostFries = parseFloat(totalCostFriesAll(totalCostFriesA(friesCostA, friesCountA), totalCostFriesB(friesCostB, friesCountB), totalCostFriesC(friesCostC, friesCountC))).toFixed(2);
    var refinedCostDrinks = parseFloat(totalCostDrinksAll(totalCostDrinksA(drinkCostA, drinksCountA), totalCostDrinksB(drinkCostB, drinksCountB), totalCostDrinksC(drinkCostC, drinksCountC))).toFixed(2);
    var subtotal = parseFloat(refinedCostBurger) + parseFloat(refinedCostFries) + parseFloat(refinedCostDrinks);
    console.log(burgerCostB);
    var refinedCostTotal = parseFloat(subtotal).toFixed(2);

    if (receiptCheckAll) {
      $("div#orderSuccess").prepend("<p>An Order has been placed at the restaurant successfully.  Here is your receipt:</p>");
      $("div#totalText").prepend("<p>Your total is:</p>")
      $("div#receiptTotal").prepend("<p>$" + refinedCostTotal + "</p>");
    }
    if (burgerCountA > 0) {
      $("ul#foodOutput").append("<li>" + burgerCountA + " Cheeseburger(s): </li>");
      $("div#costOutput").append("<p class='money'>$ " + totalCostBurgerA(burgerCostA, burgerCountA) + "</p>");
    }
    if (burgerCountB > 0) {
      $("ul#foodOutput").append("<li>" + burgerCountB + " Double Cheeseburger(s): </li>");
      $("div#costOutput").append("<p class='money'>$ " + totalCostBurgerB(burgerCostB, burgerCountB) + "</p>");
    }
    if (burgerCountC > 0) {
      $("ul#foodOutput").append("<li>" + burgerCountC + " Deluxe Cheeseburger(s): </li>");
      $("div#costOutput").append("<p class='money'>$ " + totalCostBurgerC(burgerCostC, burgerCountC) + "</p>");
    }
    if (friesCountA > 0) {
      $("ul#foodOutput").append("<li>" + friesCountA + " Small Fries: </li>");
      $("div#costOutput").append("<p class='money'>$ " + totalCostFriesA(friesCostA, friesCountA) + "</p>");
    }
    if (friesCountB > 0) {
      $("ul#foodOutput").append("<li>" + friesCountB + " Medium Fries: </li>");
      $("div#costOutput").append("<p class='money'>$ " + totalCostFriesB(friesCostB, friesCountB) + "</p>");
    }
    if (friesCountC > 0) {
      $("ul#foodOutput").append("<li>" + friesCountC + " Large Fries: </li>");
      $("div#costOutput").append("<p class='money'>$ " + totalCostFriesC(friesCostC, friesCountC) + "</p>");
    }
    if (drinksCountA > 0) {
      $("ul#foodOutput").append("<li>" + drinksCountA + " Soft Drink(s): </li>");
      $("div#costOutput").append("<p class='money'>$ " + totalCostDrinksA(drinkCostA, drinksCountA) + "</p>");
    }
    if (drinksCountB > 0) {
      $("ul#foodOutput").append("<li>" + drinksCountB + " Milkshake(s): </li>");
      $("div#costOutput").append("<p class='money'>$ " + totalCostDrinksB(drinkCostB, drinksCountB) + "</p>");
    }
    if (drinksCountC > 0) {
      $("ul#foodOutput").append("<li>" + drinksCountC + " Juice Drinks(s): </li>");
      $("div#costOutput").append("<p class='money'>$ " + totalCostDrinksC(drinkCostC, drinksCountC) + "</p>");
    }
	});
});
