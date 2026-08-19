const startScreen = document.getElementById("startScreen");
const questionBoard = document.getElementById("questionBoard");
const startButton = document.getElementById("startButton");
const backButton = document.getElementById("backButton");
const questionGrid = document.getElementById("questionGrid");

// 1-50 soru butonlarını otomatik oluştur.
for (let i = 1; i <= 50; i++) {
  const button = document.createElement("button");
  button.className = "question-button";
  button.textContent = i;
  button.dataset.question = i;

  button.addEventListener("click", () => {
    // Şimdilik soru açmıyoruz.
    // Sonraki aşamada burada ilgili soru ekranını göstereceğiz.
    console.log(`Soru ${i} seçildi.`);
  });

  questionGrid.appendChild(button);
}

// BAŞLA'ya basıldığı anda butonun basılmış halini göster.
startButton.addEventListener("pointerdown", () => {
  startButton.classList.add("pressed");
});

// Parmağı/fareyi kaldırınca kısa süre basılı görünmeye devam et,
// sonra 50 soruluk ekrana geç.
startButton.addEventListener("click", () => {
  startButton.classList.add("pressed");

  setTimeout(() => {
    startScreen.classList.remove("active");
    questionBoard.classList.add("active");
    startButton.classList.remove("pressed");
  }, 170);
});

// Eğer kullanıcı basıp dışarı sürüklerse butonu normale getir.
startButton.addEventListener("pointerleave", () => {
  startButton.classList.remove("pressed");
});

// Geri tuşu
backButton.addEventListener("click", () => {
  questionBoard.classList.remove("active");
  startScreen.classList.add("active");
});
