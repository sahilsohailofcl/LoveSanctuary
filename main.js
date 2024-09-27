//Subscribe__Function

document.addEventListener('DOMContentLoaded', () => {
    const newsletterIcon = document.getElementById('newsletter');
    const subscribeForm = document.querySelector('.subscribe-form');
    const popupOverlay = document.querySelector('.subscribe-popup-overlay');
    const subscribeformclosePopup = document.getElementById('subscribeformclosePopup');

    // Show the popup form and overlay when the newsletter icon is clicked
    newsletterIcon.addEventListener('click', () => {
        subscribeForm.classList.add('active');
        popupOverlay.classList.add('active');
    });

    // Close the popup when clicking outside the form (on the overlay)
    popupOverlay.addEventListener('click', () => {
        subscribeForm.classList.remove('active');
        popupOverlay.classList.remove('active');
    });
    
    // Close the popup when the close button is clicked
    subscribeformclosePopup.addEventListener('click', () => {
        subscribeForm.classList.remove('active');
        popupOverlay.classList.remove('active');
    });

    // Handle form submission
    document.getElementById('subscribe-form').addEventListener('submit', async (event) => {
        event.preventDefault(); // Prevent default form submission

        const email = document.getElementById('email').value;

        // Send the email to your Google Apps Script
        try {
            const response = await fetch('https://script.google.com/macros/s/AKfycbysPhBpZ7zg9J_9gpONH591pA8WQQOMo68OENxKiOn4dUsB0i7n1NcSlmMlAge4dK0xJw/exec', {
                method: 'POST',
                mode: 'no-cors', // Use no-cors if you are facing CORS issues
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: `email=${encodeURIComponent(email)}`,
            });

            // Display a success message with a blue tick
            const successMessage = document.getElementById('success-message');
            successMessage.textContent = 'Thank you for subscribing!';

            // Optionally, clear the email field after submission
            document.getElementById('email').value = '';

            console.log('Email submitted successfully!');
        } catch (error) {
            console.error('Error:', error);
            alert('Failed to submit email.');
        }
    });
});

//Share-links__Function

// Get elements
const shareIcon = document.getElementById('shareIcon');
const popupOverlay = document.getElementById('popupOverlay');
const closePopup = document.getElementById('closePopup');
const copyLinkButton = document.getElementById('copyLinkButton');

// Show the popup when the icon is clicked
shareIcon.addEventListener('click', () => {
    popupOverlay.style.display = 'flex';
});

// Close the popup when the close button is clicked
closePopup.addEventListener('click', () => {
    popupOverlay.style.display = 'none';
});

// Close the popup if the user clicks outside the popup content
popupOverlay.addEventListener('click', (e) => {
    if (e.target === popupOverlay) {
        popupOverlay.style.display = 'none';
    }
});

// Copy the URL to the clipboard when the "Copy URL" button is clicked
copyLinkButton.addEventListener('click', () => {
    const url = window.location.href; // Get the current page URL
    navigator.clipboard.writeText(url).then(() => {
        alert('URL copied to clipboard!');
    }).catch(err => {
        alert('Failed to copy URL: ', err);
    });
});
