// ====== forms.js ======

// Base API URL for your Railway backend
const API_URL = 'https://portofoliobackend-production.up.railway.app';

// ===== CONTACT FORM =====
const contactForm = document.getElementById('contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const formData = {
            name: contactForm.name.value,
            email: contactForm.email.value,
            service: contactForm.service ? contactForm.service.value : '',
            message: contactForm.message.value
        };

        try {
            const response = await fetch(`${API_URL}/api/contact`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                alert('Message sent successfully!');
                contactForm.reset();
            } else {
                alert('Failed to send message. Please try again.');
            }
        } catch (err) {
            console.error('Error:', err);
            alert('Could not connect to the server.');
        }
    });
}

// ===== BOOKING FORM (OPTIONAL) =====
const bookingForm = document.getElementById('booking-form');

if (bookingForm) {
    bookingForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const bookingData = {
            name: bookingForm.name.value,
            email: bookingForm.email.value,
            service: bookingForm.service.value,
            date: bookingForm.date.value,
            message: bookingForm.message.value
        };

        try {
            const response = await fetch(`${API_URL}/api/booking`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(bookingData)
            });

            if (response.ok) {
                alert('Booking request sent successfully!');
                bookingForm.reset();
            } else {
                alert('Failed to send booking request.');
            }
        } catch (err) {
            console.error('Error:', err);
            alert('Could not connect to the server.');
        }
    });
}
