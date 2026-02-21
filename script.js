
const roles = [
  "Frontend Developer",
  "Java Developer",
  "Full Stack Developer",
  "Backend Specialist",

];

let roleIndex = 0;
let charIndex = 0;
const typingElement = document.querySelector(".typing-text");

function typeEffect() {
  if (charIndex < roles[roleIndex].length) {
    typingElement.textContent += roles[roleIndex].charAt(charIndex);
    charIndex++;
    setTimeout(typeEffect, 80);
  } else {
    setTimeout(eraseEffect, 1500);
  }
}

function eraseEffect() {
  if (charIndex > 0) {
    typingElement.textContent =
      roles[roleIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(eraseEffect, 40);
  } else {
    roleIndex = (roleIndex + 1) % roles.length;
    setTimeout(typeEffect, 400);
  }
}

document.addEventListener("DOMContentLoaded", typeEffect);




const profileImages = [
    "img2.jpeg",
  "img1.jpeg"
  
  

];

const profileImg = document.getElementById("profile-img");

setInterval(() => {
  let randomIndex = Math.floor(Math.random() * profileImages.length);
  profileImg.style.opacity = 0;

  setTimeout(() => {
    profileImg.src = profileImages[randomIndex];
    profileImg.style.opacity = 1;
  }, 300);

}, 5000);




  const cards = document.querySelectorAll(".project-card1");
  const modal = document.getElementById("projectModal");
  const modalTitle = document.getElementById("modalTitle");
  const modalDescription = document.getElementById("modalDescription");
  const modalTech = document.getElementById("modalTech");
  const closeBtn = document.querySelector(".close-btn");

  cards.forEach(card => {
    card.addEventListener("click", () => {
      modalTitle.textContent = card.getAttribute("data-title");
      modalDescription.textContent = card.getAttribute("data-description");
      modalTech.textContent = card.getAttribute("data-tech");
      modal.style.display = "flex";
    });
  });

  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });

  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });


