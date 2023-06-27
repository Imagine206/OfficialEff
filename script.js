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