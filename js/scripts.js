var ouncesToMililiers = function(ounces) {
  return ounces * 29.5735;
};

var cupsToGrams = function(cups) {
  return cups * 128;
};

var tablespoonsToTeaspoons = function(tablespoon) {
  return tablespoon * 3;
};

$(document).ready(function() {
  $("form#ouncesToMililiters").submit(function(event) {
    var ounces = parseInt($("#ounces1").val());
    var result = ouncesToMililiers(ounces);
    $("#output").text(result);
    event.preventDefault();
  });
  $("form#cupsToGrams").submit(function(event) {
    event.preventDefault();
    var cups = parseInt($("#cups1").val());
    var result = cupsToGrams(cups);
    $("#output").text(result);
  });
  $("form#tablespoonsToTeaspoons").submit(function(event) {
    event.preventDefault();
    var tablespoons = parseInt($("#tablespoon1").val());
    var result = tablespoonsToTeaspoons(tablespoons);
    $("#output").text(result);
  });
});
