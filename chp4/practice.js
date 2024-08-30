let items =[900,800,1000,1125,500,89]; 
    
let i =0;
for(let price of items){
   //console.log(price);
    console.log(`value at index ${i} = ${price}`);
    let offer = price/10;
    items[i] =items[i] - offer;
    console.log(`value after offer = ${items[i]}`);
    i++;
  
}