  // Given amounts in US dollars and Saudi Riyals
  var usDollars = 10;
  var saudiRiyals = 25;

  // Exchange rates
  var exchangeRateUSD = 104.80;
  var exchangeRateSAR = 28;

  // Convert the total currency to Pakistani Rupees in a single expression
  var totalInPakistaniRupees = (usDollars * exchangeRateUSD) + (saudiRiyals * exchangeRateSAR);

  // Display the result in the browser
  document.write("<h2>Currency Conversion</h2>");
  document.write("<p>Total amount in US dollars: $" + usDollars + "</p>");
  document.write("<p>Total amount in Saudi Riyals: " + saudiRiyals + " SAR</p>");
  document.write("<p>Total amount in Pakistani Rupees: " + totalInPakistaniRupees.toFixed(2) + " PKR</p>");
