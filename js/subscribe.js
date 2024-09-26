document.addEventListener('DOMContentLoaded', () => {
  const newsletterIcon = document.getElementById('newsletter');
  const subscribeForm = document.querySelector('.subscribe-form');
  const popupOverlay = document.querySelector('.subscribe-popup-overlay');

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

      // Display a success message with a blue tick
      const successMessage = document.getElementById('success-message');
      successMessage.textContent = 'Thank you for subscribing! ☑️';

      // Optionally, clear the email field after submission
      document.getElementById('email').value = '';

      // Hide the popup after submission
      subscribeForm.classList.remove('active');
      popupOverlay.classList.remove('active');

      // Send the email to your Google Apps Script
      try {
          const response = await fetch('https://script.google.com/macros/s/AKfycbyo1EA5Wb9O4i6Flruv_Z3hpqcTu8H1TUOw4wx1m90fYMqNrq6pvXgjJ7_rFBvQ3px5Ug/exec', {
              method: 'POST',
              mode: 'no-cors', // Ensure this is correct for your use case
              headers: {
                  'Content-Type': 'application/x-www-form-urlencoded',
              },
              body: `email=${encodeURIComponent(email)}`,
          });

          console.log('Email submitted successfully!');
      } catch (error) {
          console.error('Error:', error);
          alert('Failed to submit email.');
      }
  });
});
