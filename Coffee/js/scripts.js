const navigation = document.getElementById("navigation");
const submitButton = document.getElementById("submit-button");
const contactEmail = document.getElementById("contact-email");
const contactName = document.getElementById("contact-name");
const contactMessage = document.getElementById("contact-message");

if (screen.width > 600) {
  window.addEventListener("scroll", function () {
    navigation.classList.toggle("sticky", window.scrollY > 50);
  });
}

submitButton.addEventListener("click", function () {
  if (
    contactEmail.value == "" ||
    contactName.value == "" ||
    contactMessage.value == ""
  ) {
    Swal.fire({
      icon: "error",
      title: `<span id="sweet-alert-error-title">Oops...</span>`,
      text: "Please be sure to fill in the entire contact form.",
      footer: "We really do appreciate it.  🙂",
    });
  } else {
    Swal.fire({
      icon: "success",
      title: `<span id="sweet-alert-success-title">Email Successfully Sent!</span>`,
      text: `Thank you for contacting us.  We usually respond within a few hours.`,
      button: "Close",
    });
    contactEmail.value = "";
    contactName.value = "";
    contactMessage.value = "";
  }
});
