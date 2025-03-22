// Redirect function
function redirectTo(page) {
  window.location.href = page;
}

// Rizz lines array
const rizzLines = [
  "You're like a cloud — when you disappear, my day gets better! ☁️❤️",
  "Are you a magician? Because every time I look at you, everyone else disappears. 🎩✨",
  "You're the reason why even my darkest days have a little light. 🌞",
  "If beauty were a crime, you'd be serving a life sentence. 🚔💘",
  "You must be a camera because every time I look at you, I smile. 📸😊"
];

// Display a random rizz line
function generateRizz() {
  const randomIndex = Math.floor(Math.random() * rizzLines.length);
  document.getElementById('rizz-line').innerText = rizzLines[randomIndex];
} 