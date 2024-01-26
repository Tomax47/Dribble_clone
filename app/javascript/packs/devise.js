var email_signup_btn = document.getElementById("sign-up-form-btn");
var input_form = document.getElementById("sign-up-from-inputs");
var agreement_phrase = document.getElementById("agreement-phrase");
var register_btn = document.getElementById("registration-btn-div");
var google_signup_btn = document.getElementById("google-sing-up-div");
var separator = document.getElementById("separator-div");
var back_icon = document.getElementById("back-icon-div");

console.log(`DEVISE, This is working!`);

email_signup_btn.addEventListener("click", function () {
    email_signup_btn.style = "display: none;";
    agreement_phrase.style = "display: none;";
    google_signup_btn.style = "display: none;";
    separator.style = "display: none;";

    input_form.style.display = "block";
    register_btn.style.display = "block";
    back_icon.style.display = "block";
    console.log(`CLicked`);
});

back_icon.addEventListener("click", function () {
    email_signup_btn.style = "display: block;";
    agreement_phrase.style = "display: block;";
    google_signup_btn.style = "display: block;";
    separator.style = "display: block;";

    input_form.style.display = "none";
    register_btn.style.display = "none";
    back_icon.style.display = "none";
});
