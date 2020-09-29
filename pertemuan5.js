/*
    Object
*/

// const mahasiswa1 = ["John", "Doe", true];


//mendeklarasikan objej
//1. object literal*(sering digunakan)
// const mhs1 ={
//         namaDepan : "John",
//         namaBelakang : "Doe",
//         umur : 31,
//         sudahLulus : true,
//         alamat : {
//             jalan : "Jln. Arnold Mononuntu",
//             Kecamatan : "Airmadidi",
//             kabupaten : "Minahasa Utara",
//         },

//         IPSemester : [3.05, 3.25, 3.0, 3.4],
//         hitungIPK: function () {
            //console.log(this.IPSemester);
            // this.IPSemester.forEach(function(el){
            //     total = total+ el;
            // });
            // // return total/ 4;
            // this.IPKumulatif = tota / 4;
        // }
// };


// delete mhs1.namaBelakang;
// console.log(mhs1);

//this untuk mengakses objektiepat yg sama


//object pakai kurung kurawal
// 2. kata kunci new
// const mhs2 = new Object();
// mhs2.namaDepan = "Jane";
// mhs2.namaBelakang = " Smith";

//Mengakses properti objek
// 1. Dot notation
// console.log(mhs1.umur);

//2. Brecket notation
// console.log(mhs1['namaBelakang']);

//array sebenarnya objek

//console.log(mhs1.alamat.jalan);
//ada objek didalam objek
//console.log(mhs1.IPSemester[2]);
// console.log(mhs1.hitungIPK());
// mhs1.hitungIPK();//memanggil fungsi
// console.log(mhs1)

//fungsi dalam objek disebut method
//isi objek/properti masih bisa diganti-ganti.

//menghapus properti dalam objek
//Array Object (JSON)
// const mahasiswa = [
//     {
//         nim : "001",
//         namaDepan: "John",
//         namaBelakang :"Doe",
//     },
//     {
//         nim : "002",
//         namaDepan: "John",
//         namaBelakang :"Doe",
//     },
//     {
//         nim : "003",
//         namaDepan: "John",
//         namaBelakang :"Doe",
//     },
// ];

// mahasiswa.forEach(function (el){
//     console.log(el);
// });

