const startScreen =
  document.getElementById("startScreen");

const questionBoard =
  document.getElementById("questionBoard");

const questionScreen =
  document.getElementById("questionScreen");

const startButton =
  document.getElementById("startButton");

const backButton =
  document.getElementById("backButton");

const questionBackButton =
  document.getElementById("questionBackButton");

const questionGrid =
  document.getElementById("questionGrid");



// =========================
// SESLER
// =========================

const tikSesi =
  new Audio("sounds/tik.mp3");

const girisMuzigi =
  new Audio("sounds/giris-muzik.mp3");


tikSesi.volume = 1;

girisMuzigi.volume = 0.45;

girisMuzigi.loop = true;



// =========================
// SKORLAR
// =========================

let redScore = 0;
let blueScore = 0;


function updateScores(){

  document
    .querySelectorAll(".red-score-value")
    .forEach(element => {

      element.textContent =
        redScore;

    });


  document
    .querySelectorAll(".blue-score-value")
    .forEach(element => {

      element.textContent =
        blueScore;

    });

}


updateScores();



// =========================
// 1–50 SORU BUTONLARI
// =========================

for(let i = 1; i <= 50; i++){

  const button =
    document.createElement("button");


  button.className =
    "question-button";


  button.textContent =
    i;


  button.dataset.question =
    i;



  button.addEventListener(
    "click",
    () => {

      // Kullanılmış soruysa açma
      if(
        button.classList.contains("used")
      ){
        return;
      }


      // Tık sesi
      tikSesi.currentTime = 0;

      tikSesi
        .play()
        .catch(() => {});


      // ŞİMDİLİK SADECE
      // SORU 1 AKTİF
      if(i === 1){

        questionBoard
          .classList
          .remove("active");


        questionScreen
          .classList
          .add("active");

      }

    }
  );


  questionGrid
    .appendChild(button);

}



// =========================
// BAŞLA BUTONU ANİMASYONU
// =========================

startButton.addEventListener(
  "pointerdown",
  () => {

    startButton
      .classList
      .add("pressed");

  }
);


window.addEventListener(
  "pointerup",
  () => {

    startButton
      .classList
      .remove("pressed");

  }
);



// =========================
// BAŞLA
// =========================

startButton.addEventListener(
  "click",
  () => {

    // Tık sesi
    tikSesi.currentTime = 0;

    tikSesi
      .play()
      .catch(() => {});


    // Basılma efekti
    startButton
      .classList
      .add("pressed");


    setTimeout(() => {

      startButton
        .classList
        .remove("pressed");


      startScreen
        .classList
        .remove("active");


      questionBoard
        .classList
        .add("active");


      // Müzik burada başlar
      girisMuzigi.currentTime = 0;

      girisMuzigi.volume = 0.45;

      girisMuzigi.loop = true;


      girisMuzigi
        .play()
        .catch(error => {

          console.log(
            "Müzik başlatılamadı:",
            error
          );

        });

    },170);

  }
);



// =========================
// 50 SORU EKRANI → GİRİŞ
// =========================

backButton.addEventListener(
  "click",
  () => {

    // Tık sesi
    tikSesi.currentTime = 0;

    tikSesi
      .play()
      .catch(() => {});


    // Müziği durdur
    girisMuzigi.pause();

    girisMuzigi.currentTime = 0;


    questionBoard
      .classList
      .remove("active");


    startScreen
      .classList
      .add("active");

  }
);



// =========================
// SORU 1 → 50 SORU EKRANI
// ŞİMDİLİK TEST AMAÇLI
// =========================

questionBackButton.addEventListener(
  "click",
  () => {

    // Tık sesi
    tikSesi.currentTime = 0;

    tikSesi
      .play()
      .catch(() => {});


    questionScreen
      .classList
      .remove("active");


    questionBoard
      .classList
      .add("active");

  }
);
