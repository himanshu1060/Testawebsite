// script.js

// Track link clicks for navigation and buttons
function trackClick(label) {
    console.log(`Clicked on: ${label}`);
    if (typeof gtag === 'function') {
        gtag('event', 'click', {
            'event_category': 'navigation',
            'event_label': label
        });
    }
}

// Track form submissions
function trackFormSubmit() {
    console.log('Form submitted');
    if (typeof gtag === 'function') {
        gtag('event', 'submit', {
            'event_category': 'form',
            'event_label': 'Contact Form'
        });
    }
    alert("Thank you for submitting the form!");
}
