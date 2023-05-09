let products = [
    {product: "Gummy Worms", price: 5.79},
    {product: "Plain M&Ms", price: 2.89},
    {product: "Peanut M&Ms", price: 2.89},
    {product: "Swedish Fish", price: 3.79}
];


for(let i=0; i<products.length; i++) {
    if(products[i].price <= 4.00) {
        console.log(products[i].product + " " + "costs less than $4.00 dollars");
    }
    let spacePos = products[i].product.indexOf(" ");
    let sPos = products[i].product.indexOf("s");
    if((products[i].product.slice((spacePos + 1), sPos)) == "M&M") {
        console.log(products[i].product + " " + "has M&Ms in its name");
     }
    if(products[i].product == "Swedish Fish") {
        console.log("We carry Swedish Fish");
    }
}