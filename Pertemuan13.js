// //Rest Parameter & Spread Operator

// //parameter yang mewakili nilai dari semua (atau sisa) argument yang diberikan kepada suatu fungsi.

// const foo = (...params) => {
//     console.log(params);
//   };
  
//   foo("A", "B", "C"); // Output: ["A", "B", "C"]

//   const bar = (param1, param2, ...params) => {
//     console.log("Argument pertama ", param1);
//     console.log("Argument pertama ", param2);
//     console.log("Sisa argument ", params);
//   }
  
//   bar("A", "B", "C", "D", "E");
//   // Output:
//   // Argument pertama  A
//   // Argument pertama  B
//   // Sisa argument ["C", "D", "E"]

  
//   // Tempatkan rest parameter di tengah-tengah parameter lainnya
// const buzz = (param1, ...params, param2) => {
//     console.log(param1);
//     console.log(params);
//     console.log(param2);
//   }
  
//   // Output: SyntaxError: Rest parameter must be last formal parameter

  
//   //Spread Parameters

// //Menggunakan Array

// let arrayBilangan = [1, 2, 3, 4, 5];

// // tanpa spread operator
// console.log(arrayBilangan); // Output: [1, 2, 3, 4, 5]

// // kalau pakai spread operator
// console.log(...arrayBilangan); // Output: 1, 2, 3, 4, 5


// //membuat array duplikat

// let arrayAsli = [1, 2, 3];

// let arrayDuplikat = [...arrayAsli];

// //menggabungkan array (concatenate)

// let array1 = ["foo", "bar"];
// let array2 = ["fizz", "buzz"];

// // menggunakan spread operator
// array1 = [...array1, ...array2];

// console.log(array1); // Output: ["foo", "bar", "fizz", "buzz"]

// //Spread Operator dengan Objek

// .//menambah beberapa properti sekaligus

// let orang = {
//   nama: "Yudistya",
//   umur: 32
// };

// //untuk menambah properti bisa seperti ini

// orang.pekerjaan = "arsitek";
// orang.pendidikan = "S1";

// //atau
// orang = {...orang, pekerjaan: "arsitek", pendidikan: "S1"};

// //menggabungkan objek


// const objek1 = {a: 1, b: 2};
// const objek2 = {c: 3, d: 4};
// const objekGabungan = Object.assign({}, objek1, objek2);

// console.log(objekGabungan); // Output: {a: 1, b: 2, c: 3, d: 4}

// //menambahkan elipsi untuk membungkus semua
// const objek1 = {a: 1, b: 2};
// const objek2 = {c: 3, d: 4};
// const objekGabungan = {...objek1, ...objek2};

// console.log(objekGabungan); // Output: {a: 1, b: 2, c: 3, d: 4}

