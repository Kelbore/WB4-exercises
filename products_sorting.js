let products = [
    {product: "Gummy Worms", price: 5.79},
    {product: "Plain M&Ms", price: 2.89},
    {product: "Peanut M&Ms", price: 2.89},
    {product: "Swedish Fish", price: 3.79}
];

let productName = [];
  for(let i=0; i<products.length; i++) {
    productName.push(products[i].product);
  }
  
  for(let j=0; j<products.length; j++) {
    productName.sort();
  }
  console.log(productName);