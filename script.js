const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");

yesBtn.addEventListener("click", () => {
    question.innerHTML = "Sorry, you got seized";
    gif.src = "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExNDFsNW8yZGx5N3hpN3pqNW5mbWh6Y3c0bDJmajVwZ2JwZzcyNWwwZCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Xw6yFn7frR3Y4/giphy.webp";
});

// Make the No button move randomly close to the Yes button on hover
noBtn.addEventListener("mouseover", () => {
    const yesBtnRect = yesBtn.getBoundingClientRect();
    const noBtnRect = noBtn.getBoundingClientRect();
    
    const offsetX = Math.random() * 60 - 30; // Random offset between -30px and +30px on the x-axis
    const offsetY = Math.random() * 60 - 30; // Random offset between -30px and +30px on the y-axis
    
    // Set new position for "No" button relative to the "Yes" button's position
    noBtn.style.position = "absolute";
    noBtn.style.left = `${yesBtnRect.left + offsetX}px`;
    noBtn.style.top = `${yesBtnRect.top + offsetY}px`;
});
