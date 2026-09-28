import React from "react";

// Floating chat shortcut, pinned bottom-right just above the back-to-top
// button. The logo is inline SVG because the Font Awesome build loaded by the
// theme doesn't reliably include the brands set.
const WhatsAppButton = () => {
  return (
    <a
      className="whatsapp-float"
      href="https://wa.me/2347068265165"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp: +234 706 826 5165"
      title="Chat on WhatsApp: +234 706 826 5165"
    >
      <svg viewBox="0 0 32 32" width="30" height="30" aria-hidden="true">
        <path
          fill="currentColor"
          d="M16.004 3C8.832 3 3 8.83 3 16c0 2.29.6 4.53 1.74 6.5L3 29l6.68-1.75A12.95 12.95 0 0 0 16.004 29C23.17 29 29 23.17 29 16S23.17 3 16.004 3zm0 23.8c-2.03 0-4.02-.55-5.75-1.58l-.41-.25-3.96 1.04 1.06-3.86-.27-.42A10.76 10.76 0 0 1 5.2 16c0-5.96 4.85-10.8 10.8-10.8 5.96 0 10.8 4.84 10.8 10.8 0 5.95-4.84 10.8-10.8 10.8zm5.92-8.08c-.32-.16-1.92-.95-2.22-1.06-.3-.11-.51-.16-.73.16-.22.32-.84 1.06-1.03 1.28-.19.22-.38.24-.7.08-.32-.16-1.36-.5-2.6-1.6-.96-.86-1.6-1.91-1.8-2.23-.19-.32-.02-.5.14-.66.15-.14.32-.38.49-.57.16-.19.21-.32.32-.54.11-.22.05-.4-.03-.57-.08-.16-.73-1.75-1-2.4-.26-.63-.53-.54-.73-.55h-.62c-.22 0-.57.08-.86.4-.3.32-1.13 1.1-1.13 2.69 0 1.58 1.16 3.12 1.32 3.33.16.22 2.28 3.48 5.52 4.88.77.33 1.37.53 1.84.68.77.25 1.48.21 2.03.13.62-.09 1.92-.78 2.19-1.54.27-.76.27-1.41.19-1.54-.08-.14-.3-.22-.62-.38z"
        />
      </svg>
    </a>
  );
};

export default WhatsAppButton;
