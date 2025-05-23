document.getElementById('jobForm').addEventListener('submit', function (e) {
  e.preventDefault();

  var name = document.getElementById('name').value.trim();
  var email = document.getElementById('email').value.trim();
  var position = document.getElementById('position').value;
  var resume = document.getElementById('resume');

  var nameError = document.getElementById("nameerror")
  var emailError = document.getElementById("emailerror")
  var positionError = document.getElementById("positionerror")
  var resumeError = document.getElementById("resumeerror")

  nameError.textContent="";
  emailError.textContent="";
  positionError.textContent="";
  resumeError.textContent="";
  var isValid=true;

  if(name === ""){
    nameError.textContent = "Must have a name";
    isValid=false;
  }

  var emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if(email === "") {
    emailError.textContent = "Email is required";
    isValid=false;
  }else if (!emailPattern.test(email)){
    emailError.textContent="Invalid email format"
    isValid = false;
  }
  
  if(position === ""){
    positionError.textContent = "Must have a position";
  }

  if(resume.files.length === 0){
    resumeError.textContent = "Must have a resume";
        isValid = false;

  }
  if (!isValid){
    return;
  }
  alert("✅ Application submitted successfully!");

  document.getElementById("jobform").reset();
});

function sendEmail(event){
  event.preventDefault();
  const details = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    position: document.getElementById("position").value,
    resume: document.getElementById("resume").value
  }
  emailjs.send("service_38aigsl","template_gfzgl9e",details)
  .then(function(response){
    document.getElementById("jobForm").reset();
  },function(error) {
  });
}


document.getElementById('contact-form').addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('contact-name').value.trim();
  const email = document.getElementById('contact-email').value.trim();
  const message = document.getElementById('contact-message').value.trim();

  var contactNameError = document.getElementById("contactnameerror");
  var contactEmailError = document.getElementById("contactemailerror");
  var contactMessageError = document.getElementById("messageerror");

  contactNameError.textContent="";
  contactEmailError.textContent="";
  contactMessageError.textContent="";
  var isValid=true;

  if(name === ""){
    contactNameError.textContent = "Must have a name";
    isValid=false;
  }

  var emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if(email === "") {
    contactEmailError.textContent = "Email is required";
    isValid=false;
  }else if (!emailPattern.test(email)){
    contactEmailError.textContent="Invalid email format"
    isValid = false;
  }

  if(message === ""){
    contactMessageError.textContent = "Must have a message";
    isValid=false;
  }

  if (!isValid){
    return;
  }

  alert("✅ Message sended successfully!");

  document.getElementById("contact-form").reset();
});

document.getElementById('menu-icon').addEventListener('click', function () {
  document.getElementById('navbar').classList.toggle('active');
});

function sendContact(event){
  event.preventDefault();
  const contacts = {
    name: document.getElementById("contact-name").value,
    email: document.getElementById("contact-email").value,
    message: document.getElementById("contact-message").value
  }
  emailjs.send("service_38aigsl","template_drhp3ts",contacts)
  .then(function(response){
    document.getElementById("contact-form").reset();
  },function(error) {
  });
}
