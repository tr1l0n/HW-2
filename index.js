// 1
let celcius = 30;
let farenheit = (celcius * 9 / 5) + 32;
console.log(farenheit);

// 2
let daysInMonth = 30;
let hoursInMonth = daysInMonth * 24;
let minutesInMonth = hoursInMonth * 60;
console.log(`Днів у місяці: ${daysInMonth}, годин у місяці: ${hoursInMonth}, хвилин у місяці: ${minutesInMonth}`);

// 3
let health = 100;
let stamina = 200;
console.log(health - 30, stamina - 80);

// 4
let totalPrice = 2400;
let discountedPrice = totalPrice - (totalPrice * 0.1);
console.log(discountedPrice);

// 5
const floatNumber = 12.78;
let roundedDown = Math.floor(floatNumber);
console.log(roundedDown);

// 6
const floatString = "45.67";
let parsedFloat = parseFloat(floatString);
console.log(parsedFloat);

// 7
const intString = "123";
let parsedInt = parseInt(intString);
console.log(parsedInt);

// 8
let number = 144;
let sqrtNumber = Math.sqrt(number);
console.log(sqrtNumber);

// 9
const integer = 42;
const stringNumber = "256";
let convertedInt = parseInt(stringNumber);
console.log(integer, convertedInt);
