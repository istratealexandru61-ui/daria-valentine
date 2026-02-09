const yesBtn = document.getElementById("yes");
const noBtn = document.getElementById("no");
const msg = document.getElementById("message");
const sound = document.getElementById("sound");

let yesCount = 0;

noBtn.addEventListener("touchstart", moveNo);
noBtn.addEventListener("mouseenter", moveNo);

function moveNo() {
  const x = Math.random() * 200 - 100;
  const y = Math.random() * 150 - 75;
  noBtn.style.transform = `translate(${x}px, ${y}px)`;

  const texts = ["NU 🙃", "Sigură?", "Nu prea merge", "Încearcă DA 😏"];
  noBtn.textContent = texts[Math.floor(Math.random() * texts.length)];
}

yesBtn.addEventListener("click", () => {
  yesCount++;
  sound.play();

  if (yesCount === 1) {
    normalEnding();
  }

  if (yesCount === 3) {
    secretEnding();
  }
});

function normalEnding() {
  document.getElementById("buttons").remove();
  msg.innerHTML = `
    💖💖💖<br><br>
    Daria, ai spus DA ❤️<br><br>
    Promit să te fac să râzi,<br>
    să te iubesc și<br>
    să fiu mereu de partea ta.<br><br>
    <em>Alex 💘</em>
  `;
  confetti();
}

function secretEnding() {
  msg.innerHTML = `
    🔓 FINAL SECRET 🔓<br><br>
    Daria,<br>
    adevărul e că<br>
    te-aș alege chiar și<br>
    fără acest site ❤️<br><br>
    <strong>Te iubesc.</strong><br><br>
    — Alex
  `;
}

function confetti() {
  for (let i = 0; i < 25; i++) {
    const heart = document.createElement("div");
    heart.textContent = "💖";
    heart.style.position = "fixed";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.top = "-20px";
    heart.style.fontSize = "22px";
    heart.style.animation = "fall 3s linear";
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 3000);
  }
}

const style = document.createElement("style");
style.innerHTML = `
@keyframes fall {
  to {
    transform: translateY(100vh);
    opacity: 0;
  }
}`;
document.head.appendChild(style);
