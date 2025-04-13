const siteSelector = document.getElementById('bettingSite');
const body = document.body;

siteSelector.addEventListener('change', () => {
  const site = siteSelector.value;
  body.className = '';
  body.classList.add(`aviator-${site}`);
});

document.getElementById('startHack').addEventListener('click', () => {
  const result = document.getElementById('resultArea');
  result.classList.remove('hidden');
  result.innerText = "Hacking Aviator...";

  // Simulate fake hack delay
  setTimeout(() => {
    const fakeMultiplier = (Math.random() * (100 - 1) + 1).toFixed(2);
    result.innerText = `Next Prediction: ${fakeMultiplier}x`;
  }, 3000);
});

document.getElementById('talkToDev').addEventListener('click', () => {
  window.open('https://wa.me/23279729810', '_blank');
});