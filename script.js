
document.getElementById("donationForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const whatsapp = document.getElementById("whatsapp").value;
    const donation = document.querySelector("input[name='donation']:checked").value;

    const msg = `Donation Request:%0AName: ${name}%0AEmail: ${email}%0AWhatsApp: ${whatsapp}%0ASelected: ${donation}`;
    const whatsappLink = `https://wa.me/919150059199?text=${msg}`;

    window.open(whatsappLink, "_blank");
});
