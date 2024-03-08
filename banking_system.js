//Mebuat Class BankAccount
class BankAccount {
    constructor(saldoAwal = 0) {
      this.saldoAwal = saldoAwal;
    }

    //Membuat method deposit
    deposit(amount) {
      this.saldoAwal += amount;
    }
  
    //Membuat method withdraw
    withdraw(amount) {
      this.saldoAwal -= amount;
    }
  }
  
  // Penggunaan
  const nasabah = new BankAccount(10000); 
  console.log("Saldo awal adalah ", nasabah.saldoAwal + " Rupiah");

  let depo = prompt("Berapa jumlah uang yang ingin anda depositkan?")
  depo = parseInt(depo)
  nasabah.deposit(depo);
  console.log("Anda melakukan deposit sebesar " + depo + " Rupiah")
  console.log("Saldo setelah melakukan deposit adalah", nasabah.saldoAwal + " Rupiah")

  let wede = prompt("Berapa jumlah yang ingin anda withdraw?")
  wede = parseInt(wede)
  nasabah.withdraw(wede);
  console.log("Anda melakukan withdraw sebesar " + wede + " Rupiah")

  //menggunakan operasi asynchronous pada withdraw
  setTimeout(() => console.log("Saldo setelah melakukan withdraw adalah", nasabah.saldoAwal + " Rupiah"), 3000) 
  