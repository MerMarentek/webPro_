// // /*
// // 1. array
// // */
// // //Deklarasi Array

// // let angka = [1,2,3,4,5,6,7,8];
// // console.log(angka);
// // let buah = ["Mangga", "Apel", "Jeruk"];
// // console.log(buah);


// // let arr = ["text", 1, true];
// // console.log(arr);

// // let myFunc= function () {
// //     return "Hello Array";

// // };


// // let arr2 = ["text", 1, true, myFunc(), [1, 2, 3, 4, 5]];
// // //Mengakses element dalam array

// // console.log(arr2[2]);
// // console.log(arr2[3]);
// // console.log(arr2[3][2]);

// // console.log(typeof arr2);
// // console.log(arr2.legth);

// // //Deklarasi mengunakan kata kunci new

// // let buah2 = new Array("Salak", "Jambu", "Melon");
// // console.log(buah2);

// //Manipulasi Array
// //1. Menambah isi Array

// let mhs =[];
// mhs[0] = " John";
// mhs[1] = "Bob";
// mhs[2] = "Jane";
// mhs[3] = "Peter";

// console.log(mhs);

// //2.Mengubah isi Array
// mhs[1] = "Donny";
// console.log(mhs);

// //3. Menghapus isi Array
// mhs[2] = undefined;
// console.log(mhs);


// //4.Menampilkan isi Array

// let mhs = ["John", "Bob", "Jane", "Peter"];

// for (let i = 0; i< 4; i++) {
//     console.log("Mahasiswa ke-" + (i + 1) + " adalah " + mhs);
// }

//Method dalam Array
//1. length
//2. toStrring
// let mhs = ["John", "Bob", "Jane", "Peter"];
// console.log(mhs.toString());
// //3. join
// console.log(mhs.join(" - "));

// //4. Push, pop, unshift
// //push untuk menambahkan elemen baru dari belakang
// mhs.push("Mayrra");

// //pop menghapus atau mengeluarkan elemn yg terakhir
// mhs.pop();
// mhs.pop();
// console.log(mhs.join(" - "));
// //unshift menambah elelmen didepan
// mhs.unshift("Stenly");
// mhs.unshift("Mayrra");
// //shift menghapus yang paling depan
// mhs.shift("stenly");
// console.log(mhs.join(" - "));


// //5.concat

// let buah = ["Mangga", "Apel", "Anggur"];
// let sayur = ["Kangkung", "Bayam", "Buncis"];

// let makanan = sayur.concat(buah);

// console.log()

// // splice & slice

// let buah = ["Pisang ", "Mangga", "Apel", "Jeruk"];
// buah.splice(2,2, "Melon", "Semangka");
// console.log(buah.join(" - "));

// //slice
// let buah2 = buah.slice(0, 2);
// console.log(buah2.join(" - "));

// // 7. forEach dan map
// // forEach



// // for (let i = 0; i< 4; i++) {
// //     console.log("Mahasiswa ke-" + (i + 1) + " adalah " + mhs);
// // }


// let angka= [1,2,3,4,5,6,7,8];

// angka.forEach(function(el) {
//     angka.forEach(function (el ) {
//         console.log(el);
//     })
// });

// let tampilAngka = function (el) {
//     console.log(el);
// };

// angka.forEach(tampilAngka);

// //b.map
// angka.map (function(el){
//     return el;
// })

// let angka2 = angka.map(function(el) {
//     return el;
// });

// console,console.log(angka2);

// //8.sort

// let angka =[1, 2, 5, 3, 7, 8];
// let mhs = ["John", "Bob", "Erick"];
// mhs.sort();
// console.log(mhs);
// angka.sort(function(a, b) {
//     return b - a;
// });
// console.log(angka);

// //9.filter
// let angka =[1, 100, 2, 20, 5, 3, 7, 8];

// angka.filter(function(el){
//     return el > 5;
// });
// console.log(angka);

// let angka2 = angka.filter(function(el){
//     return el > 5;
// });
// console.log(angka2);
