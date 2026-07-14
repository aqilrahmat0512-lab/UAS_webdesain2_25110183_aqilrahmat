function pesan(){
    alert("Selamat Datang di UMKM Mobil Bekas!");
}

function beli(mobil){
    alert("Terima kasih telah memilih " + mobil);
}

function kirim(){

    let nama=document.getElementById("nama").value;
    let email=document.getElementById("email").value;

    if(nama=="" || email==""){
        alert("Data belum lengkap!");
        return false;
    }

    alert("Terima kasih "+nama+
    ", pesan Anda berhasil dikirim.");

    return true;
}