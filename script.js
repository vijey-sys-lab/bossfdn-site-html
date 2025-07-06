document.getElementById('donationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const whatsappNumber = document.getElementById('whatsappNumber').value;
    const donationOption = document.getElementById('donationOption').value;

    // WhatsApp number for the NGO
    const ngoWhatsappNumber = '9150059199'; // Provided WhatsApp number

    // Construct the WhatsApp message
    const message = `Hello THE BOSS FOUNDATION,\n\nI would like to make a donation.\n\nMy details are:\nName: ${fullName}\nEmail: ${email}\nWhatsApp: ${whatsappNumber}\n\nSelected Donation Option: ${donationOption}\n\nPlease guide me on the next steps for the donation.`;

    // Encode the message for URL
    const encodedMessage = encodeURIComponent(message);

    // Construct the WhatsApp URL
    const whatsappUrl = `https://wa.me/${ngoWhatsappNumber}?text=${encodedMessage}`;

    // Redirect to WhatsApp
    window.open(whatsappUrl, '_blank');
});