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