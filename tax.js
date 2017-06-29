var salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

var companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
];

function calculateSalesTax(salesData, taxRates) {
  var results = {}
  for (var i = 0; i < salesData.length; i++) {
    var totalS = salesData[i].sales.reduce(function(a, b) {return a + b;}, 0);
    var totalT = totalS * taxRates[salesData[i].province]
    if (!(salesData[i].name in results)) {
      results[salesData[i].name] = {
        totalTaxes: totalT,
        totalSales: totalS
      };
    } else {
      results[salesData[i].name].totalTaxes += totalT;
      results[salesData[i].name].totalSales += totalS;
    }
  }
  console.log(results) ;
}











var results = calculateSalesTax(companySalesData, salesTaxRates);

/* Expected Results:
{
  Telus: {
    totalSales: 1300
    totalTaxes: 144
  },
  Bombardier: {
    totalSales: 800,
    totalTaxes: 40
  }
}
*/