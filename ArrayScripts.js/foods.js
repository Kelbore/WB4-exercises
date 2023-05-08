let lunch = [
    {food: "Awaze tibs",
     price: 13.99},
     {food: "Salad",
     price: 9.99},
     {food: "Chicked",
     price: 10.99}
]

function lunchTotal(items) {
    let sum = 0;
  for(let i=0; i<items.length; i++) {
    
    sum += items[i].price;
  }
    return sum;
}

let total = lunchTotal(lunch);
console.log(total);



