document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  const status = document.getElementById("formStatus");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const surname = document.getElementById("surname").value.trim();
    const firstname = document.getElementById("firstname").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!surname || !firstname || !email || !phone || !message) {
      status.style.color = "red";
      status.textContent = "⚠ Please fill in all fields.";
      return;
    }

    if (!email.includes("@")) {
      status.style.color = "red";
      status.textContent = "⚠ Enter a valid email address.";
      return;
    }

    status.style.color = "green";
    status.textContent = "✅ Your message has been sent successfully!";
    form.reset();
  });
});
