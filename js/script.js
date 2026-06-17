// ============================================
// MOBILE NAVIGATION TOGGLE
// ============================================
// When the hamburger button (☰) is clicked,
// add or remove the "open" class on the nav links.
// CSS shows the links vertically when the class is present.

const navToggle = document.getElementById('nav-toggle');
const navLinks  = document.getElementById('nav-links');

navToggle.addEventListener('click', function () {
  navLinks.classList.toggle('open');
});


// ============================================
// FAQ ACCORDION
// ============================================
// Select all the question buttons.
// When one is clicked, toggle its parent .faq-item open/closed.
// Also close any other open items (only one open at a time).

const faqQuestions = document.querySelectorAll('.faq-question');

faqQuestions.forEach(function (btn) {

  btn.addEventListener('click', function () {

    // The parent <div class="faq-item"> of this button
    const item = btn.parentElement;

    // Check if this item is already open
    const isOpen = item.classList.contains('open');

    // Close ALL items first
    document.querySelectorAll('.faq-item').forEach(function (i) {
      i.classList.remove('open');
      // Reset the icon back to "+"
      i.querySelector('.faq-icon').textContent = '+';
    });

    // If the clicked item was NOT already open, open it now
    if (!isOpen) {
      item.classList.add('open');
      // Change icon to "−" (minus)
      btn.querySelector('.faq-icon').textContent = '−';
    }

  });
});
