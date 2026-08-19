const startScreen = document.getElementById("startScreen");
const questionBoard = document.getElementById("questionBoard");
const startButton = document.getElementById("startButton");
const backButton = document.getElementById("backButton");
const questionGrid = document.getElementById("questionGrid");

// SESLER
const tikSesi = new Audio("sounds/tik.mp3");
const girisMuzigi = new Audio("sounds/giris-muzik.mp3");

girisMuzigi.loop = true;
girisMuzigi.volume = 0.45;

// Tarayıcı izin verirse giriş müziğini başlat
function muzigiBaslat() {
  girisMuzigi.play().catch(() => {});
}

document.addEventListener("click", muzigiBaslat, { once: true });

// 1-50 geçici buton
for(let i = 1; i <= 50; i++){
  const b = document.createElement("button");
  b.className = "question-button";
  b.textContent = i;

  b.addEventListener("click", () => {
    tikSesi.currentTime = 0;
    tikSesi.play().catch(() => {});

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

// BAŞLA
startButton.addEventListener("click", () => {
  tikSesi.currentTime = 0;
  tikSesi.play().catch(() => {});

  startButton.classList.add("pressed");

  // Giriş müziğini yavaşça kıs
  const fade = setInterval(() => {
    if(girisMuzigi.volume > 0.05){
      girisMuzigi.volume = Math.max(0, girisMuzigi.volume - 0.05);
    } else {
      clearInterval(fade);
      girisMuzigi.pause();
      girisMuzigi.currentTime = 0;
      girisMuzigi.volume = 0.45;
    }
  }, 60);

  setTimeout(() => {
    startButton.classList.remove("pressed");
    startScreen.classList.remove("active");
    questionBoard.classList.add("active");
  }, 170);
});

// GERİ
backButton.addEventListener("click", () => {
  tikSesi.currentTime = 0;
  tikSesi.play().catch(() => {});

  questionBoard.classList.remove("active");
  startScreen.classList.add("active");

  girisMuzigi.volume = 0.45;
  girisMuzigi.play().catch(() => {});
});
