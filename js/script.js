"user strict";

const lengthInput = document.getElementById("pw-length-input");
const slider = document.getElementById("pw-length");

// Restricts the letters and characters
function numbersOnly(input) {
  const regex = /[^0-9]+/;
  input.value = input.value.replace(regex, "");
}

// Sets the value of range slide to the text field of password range.
lengthInput.value = document.getElementById("pw-length").value;

// Sets the value of range slide to the text field of password range.
slider.oninput = function () {
  lengthInput.value = this.value;
};

// Sets the input value of text field of password range to the range slide.
lengthInput.addEventListener("input", (e) => {
  if (e.target.value > 50) lengthInput.value = "50"; // Restricts the number greater than 50 in the text field.
  slider.value = e.target.value;
});

// Restricts the number less than 10 in the text field.
lengthInput.addEventListener("focusout", (e) => {
  if (e.target.value < 10) {
    lengthInput.value = "10";
    slider.value = "10";
  }
});
