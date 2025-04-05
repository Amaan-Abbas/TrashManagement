// script.js

const wasteImageInput = document.getElementById("wasteImage");
const fileNameDisplay = document.getElementById("fileName");
const wasteTypeDisplay = document.getElementById("wasteType");
const suggestionsDisplay = document.getElementById("suggestions");

wasteImageInput.addEventListener("change", function () {
  const file = wasteImageInput.files[0];

  if (file) {
    fileNameDisplay.textContent = `Selected file: ${file.name}`;

    // Simulated delay to mimic processing
    wasteTypeDisplay.textContent = "Analyzing...";
    suggestionsDisplay.textContent = "Please wait...";

    setTimeout(() => {
      // Dummy data for simulation
      wasteTypeDisplay.textContent = "Plastic Bottle";
      suggestionsDisplay.innerHTML = `
        - Rinse and recycle in plastic bin.<br>
        - Reuse as planter or storage bottle.<br>
        - Avoid burning – not eco-friendly.
      `;
    }, 2000);
  } else {
    fileNameDisplay.textContent = "";
    wasteTypeDisplay.textContent = "---";
    suggestionsDisplay.textContent = "---";
  }
});