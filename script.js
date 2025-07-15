document.addEventListener("DOMContentLoaded", () => {
  // Toggle mobile menu
  const toggleBtn = document.getElementById("menu-toggle");
  const mobileMenu = document.getElementById("mobile-menu");

  if (toggleBtn && mobileMenu) {
    toggleBtn.addEventListener("click", () => {
      mobileMenu.classList.toggle("hidden");
    });
  }

  // Modal image zoom
  const photo = document.getElementById("profile-photo");
  const modal = document.getElementById("modal");
  const closeBtn = document.getElementById("close-modal");

  if (photo && modal && closeBtn) {
    photo.addEventListener("click", () => {
      modal.classList.remove("hidden");
    });

    closeBtn.addEventListener("click", () => {
      modal.classList.add("hidden");
    });

    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        modal.classList.add("hidden");
      }
    });
  }

  // Contact form submission (optional demo behavior)
  const contactForm = document.querySelector(".contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Thanks for your message, Mainak will get back to you soon!");
      contactForm.reset();
    });
  }
});
