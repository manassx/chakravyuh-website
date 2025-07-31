/*--------------------- Copyright (c) 2023 -----------------------
[Master Javascript]
Project: Chakravyuh
Version: 1.0.0
-------------------------------------------------------------------*/

// We wrap everything in a 'DOMContentLoaded' event listener.
// This ensures the HTML is fully loaded before the script runs.
document.addEventListener('DOMContentLoaded', () => {
    "use strict";

    // --- Preloader Logic ---
    const preloader = document.querySelector('#preloader');

    // The 'load' event waits for all assets (images, etc.) to load
    window.addEventListener('load', () => {
        // Check if the preloader element exists
        if (preloader) {
            // Wait 1.2 seconds before starting the fade-out
            setTimeout(() => {
                preloader.style.transition = 'opacity 0.5s ease';
                preloader.style.opacity = '0';

                // After the fade-out animation ends, set display to 'none'
                preloader.addEventListener('transitionend', () => {
                    preloader.style.display = 'none';
                });
            }, 1200);
        }
    });

    // --- Menu Toggle Logic ---
    const menuToggle = document.querySelector('.menu_toggle');
    const headerSection = document.querySelector('.ckv_header_section');

    // Check if both elements exist before adding an event listener
    if (menuToggle && headerSection) {
        menuToggle.addEventListener('click', () => {
            headerSection.classList.toggle('clicked');
        });
    }

});