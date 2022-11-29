var randomNumbers = 0;
var digits = '';
let sortdigits = '';
for(i=1; i<11; i++)
{
do {
randomNumbers = Math.floor(Math.random() * 999);
} while (randomNumbers < 100);
console.log("Random Number : "+ i +")=>"+ randomNumbers);
digits = digits +", "+ randomNumbers.toString();
}


console.log(digits);
// let storeArray = [...digits];
// console.log(storeArray);


