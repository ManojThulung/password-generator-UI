"user strict";

const lengthInput = document.getElementById("pw-length-input");
const slider = document.getElementById("pw-length");

lengthInput.value = document.getElementById("pw-length").value;

slider.oninput = function () {
  lengthInput.value = this.value;
};

lengthInput.addEventListener("input", (e) => {
  slider.value = e.target.value;
});
