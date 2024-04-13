// Get all image flipper elements
const flipperContainers = document.querySelectorAll(".image-container");

flipperContainers.forEach((container) => {
  container.addEventListener("mouseenter", () => {
    container.classList.add("hover");
  });

  container.addEventListener("mouseleave", () => {
    container.classList.remove("hover");
  });
});

const loadingTextElement = document.querySelector(".loading-text");

const loadingTextArray = [
  "Hi",
  "To the best Girl",
  "Whom I love",
  "The Most",
  "Some of our memories",
  "Each Picture has",
  "A message behind it",
  "Touch or Click the Image",
  "To View The Content",
  "Enjoyy!",
  "Muaaahhhh!!",
];

let currIndex = 0;
const interval = setInterval(() => {
  loadingTextElement.textContent = loadingTextArray[currIndex++];
  if (currIndex === loadingTextArray.length) {
    clearInterval(interval);
    document.querySelector(".loading-screen").style.display = "none";
    document.querySelector(".content").style.display = "block";
  }
}, 1800);
