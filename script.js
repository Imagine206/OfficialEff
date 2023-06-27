(function () {
    [...document.querySelectorAll(".control")].forEach(button => {
        button.addEventListener("click", function() {
            document.querySelector(".active-btn").classList.remove("active-btn");
            this.classList.add("active-btn");
            document.querySelector(".active").classList.remove("active");
            document.getElementById(button.dataset.id).classList.add("active");
        })
    });
    document.querySelector(".theme-btn").addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
    })
})();

const homeImg = document.getElementById('homeImg');
const images = [
        "images/79d69d_5653c78281ad49ed93fd4dbfa07d8d2c~mv2.webp",  
        "images/effImgs.webp",
        "images/fahmi1eff.webp",
        "images/fahmi2eff.webp",
        "images/ahmedeff.webp",
        "images/Screenshot 2023-06-25 221850.png",
        "images/Screenshot 2023-06-25 221952.png"
    ];
let currentIndex = 0;
const switchImage = () => {
    homeImg.classList.add('fade-out');

    setTimeout(() => {
        homeImg.src = images[currentIndex];
        currentIndex = (currentIndex + 1) % images.length;
        homeImg.classList.remove('fade-out');
        homeImg.classList.add('fade-in');
    }, 500);

}

setInterval(switchImage, 3000);



// Donate Modal 
// Get the modal element
const modal = document.getElementById("donateModal");

// Get the button that opens the modal
const btn = document.getElementById("donateBtn");

// Get the <span> element that closes the modal
const span = document.getElementsByClassName("close")[0];

// Function to open the modal
const openModal = () => {
  modal.style.display = "block";
};

// Function to close the modal
const closeModal = () => {
  modal.style.display = "none";
};

// Event listeners
btn.addEventListener("click", openModal);
span.addEventListener("click", closeModal);
window.addEventListener("click", event => {
  if (event.target === modal) {
    closeModal();
  }
});