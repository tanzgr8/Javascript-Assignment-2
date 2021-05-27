function formValidation() {
  var validate = false;
  var name = document.Registration.name;
  var email = document.Registration.email;
  var pass = document.Registration.password;
  var repass = document.Registration.rePassword;
  if ((validate = validateName(name))) {
    if ((validate = valemail(email))) {
      if ((validate = valPass(pass))) {
        if ((validate = valRepass(repass))) {
        }
      }
    }
  }
  return validate;
}
function validateName(name) {
  var name1 = document.getElementById("name1");
  if (name.value == "") {
    document.getElementById("nameerr").textContent = "Name cannot be blank";
    name1.classList.add("is-invalid");
    return false;
  }
  return true;
}
function valemail(email) {
  var email = document.getElementById("email");
  var mailformat =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (email.value.match(mailformat)) {
    return true;
  } else {
    document.getElementById("emailerr").textContent = "Enter Proper email";
    email.classList.add("is-invalid");
    return false;
  }
}
function valPass(pass) {
  var pass = document.getElementById("pass");
  if (pass.value.length < 6) {
    document.getElementById("passerr").textContent =
      "Minimum 6 Characters Is Required";
    pass.classList.add("is-invalid");
    return false;
  }
  return true;
}
function valRepass(repass) {
  var repass = document.getElementById("repass");
  if (repass.value !== pass.value) {
    document.getElementById("repasserr").textContent =
      "Password Does Not Match";
    repass.classList.add("is-invalid");
    return false;
  } else {
    return true;
  }
}
