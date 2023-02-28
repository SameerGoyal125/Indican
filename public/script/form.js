
function SubForm() {
  var fullName = $("#full_name").val();
  var email = $("#email_id").val();
  var phoneNumber = $("#phone_number").val();

  if (fullName !== "" && email !== "" && phoneNumber !== "") {
    var fullName = $("#full_name").val();
    var email = $("#email_id").val();
    var phoneNumber = $("#phone_number").val();

    // Define regex patterns for each input field
    var fullNamePattern = /^[a-zA-Z\s]*$/;
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var phoneNumberPattern = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;

    // Check if input values match their respective patterns
    var isFullNameValid = fullNamePattern.test(fullName);
    var isEmailValid = emailPattern.test(email);
    var isPhoneNumberValid = phoneNumberPattern.test(phoneNumber);

    // Remove any existing invalid classes from the parent divs
    $(".fullname, .email, .phone").removeClass("invalid");

    // Add invalid classes to the parent divs if the input values don't match their patterns
    if (!isFullNameValid || !isEmailValid || !isPhoneNumberValid) {
      if (!isFullNameValid) {
        $(".fullname").addClass("invalid-name");
      }
      else{
        $(".fullname").removeClass("invalid-name");
      }
      if (!isEmailValid) {
        $(".email").addClass("invalid-email");
      }
      else{
        $(".email").removeClass("invalid-email");
      }
      if (!isPhoneNumberValid) {
        $(".phone").addClass("invalid-phone");
      }
      else{
        $(".phone").removeClass("invalid-phone");
      }

    }
    else {
      $(".fullname").removeClass("invalid-name");
      $(".email").removeClass("invalid-email");
      $(".phone").removeClass("invalid-phone");
      $.ajax({
        url: "https://api.apispreadsheets.com/data/LFKjy3qAWotU4nbg/",
        type: "post",
        data: $("#myForm").serializeArray(),
        success: function () {
          document.cookie = "formSubmitted=true; path=/";
          window.location.href = "/thank-you";
        },
        error: function () {
          alert("There was an error :(");
        }
      });
    }


  }
  else {
    if (fullName === "") {
      $(".fullname").addClass("nill");
    } else {
      $(".fullname").removeClass("nill");
    }

    if (email === "") {
      $(".email").addClass("nill");
    } else {
      $(".email").removeClass("nill");
    }

    if (phoneNumber === "") {
      $(".phone").addClass("nill");
    } else {
      $(".phone").removeClass("nill");
    }

  }
}
var formclose = document.getElementById("formclose");
var form = document.getElementById("form");
formclose.addEventListener("click", function () {
  form.style.display = "none";
}
);
window.onload = function () {
  if (document.cookie.indexOf("formSubmitted=true") == -1) {
    setTimeout(function () {
      form.style.display = "flex";
    }, 1000);
  }
  
}
$(document).ready(function () {
  // get all input fields with the class 'input-field'
  var inputFields = $(".input-field");

  // add an event listener for the 'focus' event
  inputFields.on("focus", function () {
    // remove the 'nill' class from the input field's parent div
    $(this).parent().removeClass("nill");
  });
});

