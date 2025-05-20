document.getElementById('jobForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const position = document.getElementById('position').value;
  const resume = document.getElementById('resume').files[0];
  const message = document.getElementById('message');

  if (name && email && position && resume) {
    message.textContent = "✅ Application submitted successfully!";
    message.className = "text-success";
    // message.scrollIntoView({ behavior: "smooth", block: "center" });

    this.reset();

    setTimeout(() => {
      message.textContent = "";
      message.className = "";
      message.style.display = "none";
    }, 3000);

    // Message visible cheyyanam
    message.style.display = "block";
  } else {
    message.textContent = "❌ Please complete all fields.";
    message.className = "text-danger";

    setTimeout(() => {
      message.textContent = "";
      message.className = "";
      message.style.display = "none";
    }, 3000);

  
    message.style.display = "block";
}
});

document.getElementById('contact-form').addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('contact-name').value.trim();
  const email = document.getElementById('contact-email').value.trim();
  const message = document.getElementById('contact-message').value.trim();

  if (name && email && message) {
    alert(`Thanks, ${name}! Your message has been sent.`)
    this.reset();
  }else {
    alert("Please fill in all fields.")
  }
});
document.getElementById('menu-icon').addEventListener('click', function () {
  document.getElementById('navbar').classList.toggle('active');
});
