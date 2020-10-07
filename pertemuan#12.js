

// const calcAge = function(year) {
//     return 2020 - year;
// };

// console.log(calcAge(1991));


//Arrow function
//jika memilikilebih dari 1 parameter maka memakai tanda kurung, jika hanya satu
//bisa tidak pakai.

// const calcAge = (year) => {
//     return 2020 - year;
// };

//Multiple argument
// const calcAge = (birthYear,currentYear) => {
//     return currentYear - birthYear;
// };

//Tanpa Argumen with implicit return value

// const calcAge = () => {
//     return 2020-1992;
// };

// console.log(calcAge);

// const calcAge = () => 2020 - 1992;

// const years = [1990.1992,2001,2005];


// const calcAge5 = years.map(function (el) {
//     return 2020-el;
// });

// const calcAge6 = years.map((el) => 2020-el);

// console.log(calcAge6);

//4. Default Parameter
//tambahannya sama dengan.

// const calcAge = (birthYear,currentYear= 2020) => currentYear - birthYear;
   
// console,localStorage(calcAge(1991,2021));