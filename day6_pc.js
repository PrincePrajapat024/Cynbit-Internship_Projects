const quotes = [
  "Those who break the rules are scum, but those who abandon their friends are worse than scum.",
  "Those who cannot acknowledge their true self eventually fail.",
  "Push yourself, because no one else is going to do it for you.",
  "Success doesn’t just find you. You have to go out and get it.",
  "Dream it. Wish it. Do it.",
  "Wake up to reality.Nothing ever goes as planned in this accursed world. The longer you live, the more you realize that the only things that truly exist in this reality are merely pain. suffering and futility.",


];

const colors = ["#FFFAF0", "#FFFACD", "#E0FFFF", "#E6E6FA", "#F0FFF0", "#F5F5DC", "#FDEBD0"];

function showQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const randomColor = colors[Math.floor(Math.random() * colors.length)];

  document.getElementById("quote").innerText = quotes[randomIndex];
  document.getElementById("profileCard").style.backgroundColor = randomColor;
}
