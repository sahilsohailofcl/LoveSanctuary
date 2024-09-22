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
    document.getElementById('subscribe-form').addEventListener('submit', (event) => {
      event.preventDefault(); // Prevent default form submission
  
      const email = document.getElementById('email').value;
  
      // Check if the email value is being retrieved
      console.log('Email retrieved:', email);
  
      // Display a success message with a blue tick
      const successMessage = document.getElementById('success-message');
      successMessage.textContent = 'Thank you for subscribing! ☑️';
  
      // Optionally, clear the email field after submission
      document.getElementById('email').value = '';
  
      // Hide the popup after submission
      subscribeForm.classList.remove('active');
      popupOverlay.classList.remove('active');
    });
  });
  
  const form = document.getElementById('subscribe-form');
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;

    try {
      const response = await fetch('https://script.google.com/macros/s/AKfycbw1w24cH6TjzFQnKfdqtVzzeJhTyUs4YvY8ABP2BOqX1bSNSWNzIdd4kHoa78HxiSSJAQ/exec', {
        method: 'POST',
        mode: 'no-cors', // Since we are posting to a Google Script
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `email=${encodeURIComponent(email)}`,
      });

      alert('Email submitted successfully!');
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to submit email.');
    }
  });