// JavaScript untuk validasi form Kontak
document.getElementById("contactForm").addEventListener("submit", function(event){
    event.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (name && email && message) {
        alert("Pesan berhasil dikirim!");
        document.getElementById("contactForm").reset();
    } else {
        alert("Mohon isi semua kolom!");
    }
});
