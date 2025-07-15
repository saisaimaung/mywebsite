// Typing effect
const text = "💌 Mar Mar Myint, I Love You So Much 💘";
let index = 0;
function typeWriter() {
  if (index < text.length) {
    document.getElementById("typing-text").innerHTML += text.charAt(index);
    index++;
    setTimeout(typeWriter, 100);
  }
}
typeWriter();

// Dialog
function showLove() {
  const answer = confirm("Do you love me too? 😳");
  if (answer) {
    alert("Yayyy! 💖 I’m the happiest person alive!");
  } else {
    alert("That's okay 😢 I still love you forever.");
  }
}

// Dark mode toggle
document.getElementById("darkModeToggle").onclick = function () {
  document.body.classList.toggle("dark-mode");
};

// Heart animation
const canvas = document.getElementById("heartCanvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let hearts = [];

function Heart() {
  this.x = Math.random() * canvas.width;
  this.y = Math.random() * canvas.height;
  this.size = Math.random() * 20 + 10;
  this.speed = Math.random() * 1 + 0.5;
  this.alpha = 1;
  this.draw = function () {
    ctx.globalAlpha = this.alpha;
    ctx.fillStyle = "#ff3366";
    ctx.beginPath();
    ctx.moveTo(this.x, this.y);
    ctx.bezierCurveTo(this.x + this.size / 2, this.y - this.size,
                      this.x + this.size * 1.5, this.y + this.size / 3,
                      this.x, this.y + this.size);
    ctx.bezierCurveTo(this.x - this.size * 1.5, this.y + this.size / 3,
                      this.x - this.size / 2, this.y - this.size,
                      this.x, this.y);
    ctx.fill();
  };
}

function animateHearts() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  if (hearts.length < 100) {
    hearts.push(new Heart());
  }
  for (let i = 0; i < hearts.length; i++) {
    hearts[i].y += hearts[i].speed;
    hearts[i].alpha -= 0.005;
    if (hearts[i].alpha <= 0) {
      hearts.splice(i, 1);
    } else {
      hearts[i].draw();
    }
  }
  requestAnimationFrame(animateHearts);
}

animateHearts();
