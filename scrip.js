function pesan(){
    alert("Selamat datang di Showroom Mobil Bekas!");
}

function beli(nama){
    alert("Anda memilih " + nama);
}

function kirim(){

let nama=document.getElementById("nama").value;

if(nama==""){
    alert("Nama harus diisi!");
}
else{
    alert("Terima kasih " + nama + ". Pesan Anda telah terkirim.");
}

}
function promo(namaPromo){
    alert("Selamat!\nAnda memilih promo: " + namaPromo +
    "\nSilakan hubungi admin untuk informasi lebih lanjut.");
}
