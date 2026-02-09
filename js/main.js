document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".booking-form");

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Thank you! Your consultation request has been received. Our team will contact you shortly.");
      form.reset();
    });
  }
});
