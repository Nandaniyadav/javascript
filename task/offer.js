// For a given array with prices of 5 items -> [250,645,300,900,50]. All items have an offer of 10% OFF of them. Change the array to store final price after applying offer.

let prices = [250, 645, 300, 900, 50];
for (let i = 0; i < prices.length; i++) {
  console.log(`index of ${i} is ${prices[i]}`);
  let offer = prices[i] / 10;
  console.log(`10% OFF price of ${prices[i]} :`, offer);
  prices[i] = prices[i] - offer;
  console.log(`After 10% OFF new Prices is : ${prices[i]}`);
}
