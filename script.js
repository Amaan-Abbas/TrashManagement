const wasteImageInput = document.getElementById("wasteImage");
const fileNameDisplay = document.getElementById("fileName");
const wasteTypeDisplay = document.getElementById("wasteType");
const suggestionsDisplay = document.getElementById("suggestions");
const video = document.getElementById("video");
const canvas = document.getElementById("canvas");

let stream;
let imageBlob = null;

wasteImageInput.addEventListener("change", function () {
  const file = wasteImageInput.files[0];

  if (file) {
    fileNameDisplay.textContent = `Selected file: ${file.name}`;
    simulateAnalysis();
  } else {
    fileNameDisplay.textContent = "";
    resetResult();
  }
});

function startCamera() {
  navigator.mediaDevices.getUserMedia({ video: true })
    .then(s => {
      stream = s;
      video.srcObject = stream;
      video.style.display= "block";
    })
    .catch(err => {
      alert("Camera access denied or unavailable.");
      console.error(err);
    });
}

function captureImage() {
  if (!video.srcObject) {
    alert("Camera not started.");
    return;
  }

  const ctx = canvas.getContext("2d");
  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;
  ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

  canvas.toBlob(blob => {
    imageBlob = blob;
    fileNameDisplay.textContent = "Image captured from camera";
    simulateAnalysis();
  }, "image/jpeg");
}

function simulateAnalysis() {
  wasteTypeDisplay.textContent = "Analyzing...";
  suggestionsDisplay.textContent = "Please wait...";

  setTimeout(() => {
    wasteTypeDisplay.textContent = "Plastic Bottle";
    suggestionsDisplay.innerHTML = `
      - Rinse and recycle in plastic bin.<br>
      - Reuse as planter or storage bottle.<br>
      - Avoid burning – not eco-friendly.
    `;
  }, 2000);
}

function resetResult() {
  wasteTypeDisplay.textContent = "---";
  suggestionsDisplay.textContent = "---";
}
