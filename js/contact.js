let contactForm = $.querySelector(".contact-form");
let nameInput = $.querySelector("#contact-form-name");
let emailnput = $.querySelector("#contact-form-email");
let messageInput = $.querySelector("#contact-form-textarea");
let formSubmit = $.querySelector(".contact-form-submit");

contactForm.addEventListener("submit", function (event) {
  event.preventDefault();
});
console.log();
// Alertify Position
alertify.set("notifier", "position", "bottom-left");

// Submit Button On Click Event
function formSubmitHandler() {
  if (!nameInput.value) {
    alertify.error("فیلد نام شما نباید خالی باشد");
  } else if (!emailnput.value) {
    alertify.error("فیلد ایمیل نباید خالی باشد");
  } else if (!emailBool) {
    alertify.error("ایمیل وارد شده اشتباه است");
  } else if (!messageInput.value) {
    alertify.error("فیلد پیام شما نباید خالی باشد");
  } else {
    alertify.success("پیام شما ارسال شد");
  }
}
formSubmit.addEventListener("click", formSubmitHandler);

// Email Input Regex
let emailBool;
function emailRegexHandler() {
  var EmailRegex = /[a-z0-9]+@+[a-z]+\.+[a-z]/;

  if (EmailRegex.test(emailnput.value)) {
    emailBool = true;
  } else {
    emailBool = false;
  }
}
emailnput.addEventListener("blur", emailRegexHandler);
