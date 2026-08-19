const startScreen = document.getElementById("startScreen");
const questionBoard = document.getElementById("questionBoard");
const startButton = document.getElementById("startButton");
const backButton = document.getElementById("backButton");
const questionGrid = document.getElementById("questionGrid");

// =========================
// SESLER
// =========================

const tikSesi = new Audio("sounds/tik.mp3");
const girisMuzigi = new Audio("sounds/giris-muzik.mp3");

tikSesi.volume = 1;

girisMuzigi.volume = 0.45;
girisMuzigi.loop = true;


// =========================
// 1–50 SORU BUTONLARI
// =========================

for (let i = 1; i <= 50; i++) {

  const b = document.createElement("button");

  b.className = "question-button";
  b.textContent = i;
  b.dataset.question = i;

  b.addEventListener("click", () => {

    // Tık sesi
    tikSesi.currentTime = 0;
    tikSesi.play().catch(() => {});

    console.log(`Soru ${i} seçildi`);

  });

  questionGrid.appendChild(b);
}


// =========================
// BAŞLA BUTONU ANİMASYONU
// =========================

startButton.addEventListener("pointerdown", () => {
  startButton.classList.add("pressed");
});

window.addEventListener("pointerup", () => {
  startButton.classList.remove("pressed");
});


// =========================
// BAŞLA
// =========================

startButton.addEventListener("click", () => {

  // Buton tık sesi
  tikSesi.currentTime = 0;
  tikSesi.play().catch(() => {});

  // Butonu basılmış halde göster
  startButton.classList.add("pressed");

  setTimeout(() => {

    // Butonu normale döndür
    startButton.classList.remove("pressed");

    // Giriş ekranını kapat
    startScreen.classList.remove("active");

    // 50 soru ekranını aç
    questionBoard.classList.add("active");

    // MÜZİĞİ TAM BURADA BAŞLAT
    girisMuzigi.currentTime = 0;
    girisMuzigi.volume = 0.45;
    girisMuzigi.loop = true;

    girisMuzigi.play().catch((error) => {
      console.log("Müzik başlatılamadı:", error);
    });

  }, 170);

});


// =========================
// GERİ BUTONU
// =========================

backButton.addEventListener("click", () => {

  // Tık sesi
  tikSesi.currentTime = 0;
  tikSesi.play().catch(() => {});

  // Yarışma müziğini durdur
  girisMuzigi.pause();
  girisMuzigi.currentTime = 0;

  // Soru ekranını kapat
  questionBoard.classList.remove("active");

  // Giriş ekranına dön
  startScreen.classList.add("active");

});
