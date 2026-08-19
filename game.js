const startScreen = document.getElementById("startScreen");
const questionBoard = document.getElementById("questionBoard");
const startButton = document.getElementById("startButton");
const backButton = document.getElementById("backButton");
const questionGrid = document.getElementById("questionGrid");

// 1-50 geçici buton
for(let i = 1; i <= 50; i++){
  const b = document.createElement("button");
  b.className = "question-button";
  b.textContent = i;
  b.addEventListener("click", () => {
    console.log(`Soru ${i} seçildi`);
  });
  questionGrid.appendChild(b);
}

// Basılma animasyonu
startButton.addEventListener("pointerdown", () => {
  startButton.classList.add("pressed");
});

window.addEventListener("pointerup", () => {
  startButton.classList.remove("pressed");
});

// BAŞLA -> kısa basılma hissi -> 50 soru ekranı
startButton.addEventListener("click", () => {
  startButton.classList.add("pressed");

  setTimeout(() => {
    startButton.classList.remove("pressed");
    startScreen.classList.remove("active");
    questionBoard.classList.add("active");
  }, 170);
});

backButton.addEventListener("click", () => {
  questionBoard.classList.remove("active");
  startScreen.classList.add("active");
});
