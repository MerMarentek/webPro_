/*
    JavaScript Conditional

*/

//digunakan saat 1 kondisi memiliki 2 keputusan

// let nilaiAndi = 95;

// if (nilaiAndi > 80) {
//   console.log("SANGAT MEMUASKAN");
// } else if (nilaiAndi >= 60 && nilaiAndi <= 80) {
//   console.log("MEMUASKAN");
// } else {
//   console.log("JANGAN MENYERAH, COBA LAGI!");
// }


//digunakan jika memliki lebih dari 1 kondisi dan keputusan

// let seragamSekolah;
// let hari = "senin";

// switch (hari) {
//   case "senin":
//     seragamSekolah = "kemeja putih bawahan merah";
//     break;
//   case "selasa":
//     seragamSekolah = "kemeja hijau bawahan hitam";
//     break;
//   case "rabu":
//     seragamSekolah = "kemeja putih bawahan putih";
//     break;
//   case "kamis":
//     seragamSekolah = "kemeja batik merah bawahan hitam";
//     break;
//   case "jumat":
//     seragamSekolah = "baju pramuka";
//     break;
//   default:
//     seragamSekolah = "baju bebas";
// }


/*
    JavaScript Loop

*/

// 1. For Loop

//loop yang memiliki 3 pernyataan
// for (let i = 1; i <= 10; i++) {
//     console.log(i);
//   }
  

// 2. For/ in Loop

//untuk mengulang setiap properti dari sebuah objek

// const buku = {
//     judul: "Harry Potter and The Philosopher's Stone",
//     pengarang: "J. K. Rowling",
//     tahun: 1997
//  };
//  for (x in buku) {
//    console.log(x, ':', buku[x]);
//  }
 
// 3. For / Of Loop

// untuk mengulang setiap elemen dari objek yang bisa diulang

// const buku = ["Game of Thrones: A Song of Ice and Fire",  
//    "Harry Potter and The Philosopher's Stone", 
//    "Lord of The Rings: The Fellowship of The Ring"
// ];

// for (x of buku) {
//   console.log(x);
// }

// 4. While Loop

// sebuah code akan dijalankan jika kondisinya benar.

// let i = 1;

// while (i <= 10) {
//   console.log(i);
//   i++;
// }



// 5. Do While Loop

 let i = 1;

do {
    console.log(i);
    i++;
  } while (i <= 10);
  