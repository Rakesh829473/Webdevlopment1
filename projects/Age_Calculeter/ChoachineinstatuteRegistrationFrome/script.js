// Form Submit

document
  .getElementById("registrationForm")
  .addEventListener("submit", function (event) {

    event.preventDefault();

    // Getting Values

    const fullName = document
      .getElementById("fullName")
      .value
      .trim();

    const email = document
      .getElementById("email")
      .value
      .trim();

    const phone = document
      .getElementById("phone")
      .value
      .trim();

    const dob = document
      .getElementById("dob")
      .value;

    const gender = document.querySelector(
      "input[name='gender']:checked"
    )?.value;

    const qualification = document
      .getElementById("qualification")
      .value;

    const percentage = document
      .getElementById("percentage")
      .value;

    const grade = document
      .getElementById("grade")
      .value
      .trim();

    const course = document
      .getElementById("course")
      .value;

    const address = document
      .getElementById("address")
      .value
      .trim();

    const city = document
      .getElementById("city")
      .value
      .trim();

    const pin = document
      .getElementById("pin")
      .value
      .trim();

    const guardianName = document
      .getElementById("guardianName")
      .value
      .trim();

    const guardianContact = document
      .getElementById("guardianContact")
      .value
      .trim();

    // Batch Timings

    const timings = [];

    document
      .querySelectorAll("input[type='checkbox']:checked")
      .forEach((item) => {

        timings.push(item.nextElementSibling.innerText);

      });

    // Object

    const registrationData = {

      fullName,
      email,
      phone,
      dob,
      gender,
      qualification,
      percentage,
      grade,
      course,
      timings,
      address,
      city,
      pin,
      guardianName,
      guardianContact,

    };

    // Validation

    if (validateForm(registrationData)) {

      console.log("Registration Data :", registrationData);

      alert("Registration Successful!");

      document.getElementById("registrationForm").reset();

    } else {

      alert("Please Enter Valid Data");

    }

  });


// Reset Button

document
  .getElementById("registrationForm")
  .addEventListener("reset", function () {

    document
      .querySelectorAll(".text-danger")
      .forEach((item) => {

        item.innerText = "";

      });

  });


// Validation Function

function validateForm(data) {

  // Remove Old Errors

  document
    .querySelectorAll(".text-danger")
    .forEach((item) => {

      item.innerText = "";

    });

  let isValid = true;

  // Full Name

  if (data.fullName === "") {

    document.getElementById("fullNameError").innerText =
      "Full Name is Required";

    isValid = false;

  }

  else if (!/^[A-Za-z\s]+$/.test(data.fullName)) {

    document.getElementById("fullNameError").innerText =
      "Only Alphabets Allowed";

    isValid = false;

  }

  // Email

  if (data.email === "") {

    document.getElementById("emailError").innerText =
      "Email is Required";

    isValid = false;

  }

  else if (
    !/^[A-Za-z0-9._%+-]+@(gmail\.com|outlook\.com|yahoo\.com)$/
      .test(data.email)
  ) {

    document.getElementById("emailError").innerText =
      "Enter Valid Email";

    isValid = false;

  }

  // Phone

  if (!/^[6-9]\d{9}$/.test(data.phone)) {

    document.getElementById("phoneError").innerText =
      "Enter Valid Indian Number";

    isValid = false;

  }

  // Qualification

  if (data.qualification === "Select Qualification") {

    document.getElementById("qualificationError").innerText =
      "Select Qualification";

    isValid = false;

  }

  // Percentage

  if (data.percentage === "") {

    document.getElementById("percentageError").innerText =
      "Enter Percentage";

    isValid = false;

  }

  // Grade

  if (data.grade === "") {

    document.getElementById("gradeError").innerText =
      "Enter Grade";

    isValid = false;

  }

  // Course

  if (data.course === "Select Course") {

    document.getElementById("courseError").innerText =
      "Select Course";

    isValid = false;

  }

  // Address

  if (data.address === "") {

    document.getElementById("addressError").innerText =
      "Address Required";

    isValid = false;

  }

  // City

  if (data.city === "") {

    document.getElementById("cityError").innerText =
      "City Required";

    isValid = false;

  }

  // Pin Code

  if (!/^\d{6}$/.test(data.pin)) {

    document.getElementById("pinError").innerText =
      "Enter Valid Pin Code";

    isValid = false;

  }

  // Guardian Name

  if (data.guardianName === "") {

    document.getElementById("guardianNameError").innerText =
      "Guardian Name Required";

    isValid = false;

  }

  // Guardian Contact

  if (!/^[6-9]\d{9}$/.test(data.guardianContact)) {

    document.getElementById("guardianContactError").innerText =
      "Enter Valid Contact Number";

    isValid = false;

  }
  

  return isValid;

}