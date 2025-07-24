const funFacts = [
  "🌿 I love matcha & coffee.",
  "💡 Night owl coder.",
  "🌱 I weirdly enjoy reading app update notes.",
  "🌷 I redesign apps in my head when I use them.",
  "👀 I remember visuals better than names.",
  "🎧 I code better with lo-fi beats.",
  "🌌 My dream is to build something people actually use.",
  "🔮 I can spend hours perfecting UI micro-interactions.",
  "🐾 Cat lover — my heart melts at every “meow”",
  "🌸 I adore pastel colors… especially pink & green combos!",
  "🌿 Calm vibe outside, chaotic ideas inside",
  "😴 If I free, I'm probably asleep or watching K-drama",
  "💻 I treat side projects like they're my little children",
  "📓 Stationery hoarder, especially if it's mint or blush",
  "💤 Sometimes quiet, sometimes total chaos — depends on the mood.",
  "🧩 Multitasker by nature, overthinker by accident"
];


let lastIndex = -1;

document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("funfact-btn");
  const factText = document.getElementById("funfact-text");

  button.addEventListener("click", () => {
    let index;
    do {
      index = Math.floor(Math.random() * funFacts.length);
    } while (index === lastIndex);
    lastIndex = index;

    factText.style.opacity = 0;

    setTimeout(() => {
      factText.textContent = funFacts[index];
      factText.style.opacity = 1;
    }, 300);
  });
});
