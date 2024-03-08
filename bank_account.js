//Deklarasi saldo awal
var saldo = 1000;

//Menampilkan saldo awal
alert("Saldo anda sekarang adalah : " + saldo);

// Meminta input penambahan sald0
var angka1 = prompt("Berapa saldo yang ingin anda tambahkan?");

// Meminta input pengurangan saldo
var angka2 = prompt("Berapa saldo yang ingin anda tarik?");

// Mengubah input dari string menjadi int
angka1 = parseInt(angka1);
angka2 = parseInt(angka2);

// Membuat fungsi untuk penjumlahan saldo
function tambahSaldo(saldo, angka1) {
    return saldo + angka1;
}

// Membuat fungsi untuk pengurangan ssaldo
function kurangiSaldo(saldo, angka1, angka2) {
    return saldo + angka1 - angka2;
}

// Menampilkan hasil penjumlahan dan pengurangan saldo
//alert("Saldo anda setelah penambahan: " + tambahSaldo(angka1));
alert("Saldo awal : " + saldo +  "\nSaldo ditambahkan : " + angka1 + "\nSaldo setelah ditambah : " + tambahSaldo(saldo, angka1) + 
"\nSaldo ditarik : " + angka2 + "\nSaldo setelah ditarik : " + 
kurangiSaldo(saldo, angka1, angka2));

//mencoba git push
