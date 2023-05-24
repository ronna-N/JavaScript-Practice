const audio = new Audio("enna-sound.mp3")
const buttons = document.querySelector("Enna")

buttons.array.forEach(Enna => {
  Enna.addEventListener("click", () => {
    audio.play();
  });

});

function printPomu() {
  const POMU = document.getElementById('POMU');
  const lines = parseInt(POMU.value);

  if (isNaN(lines) || lines <= 0) {
    alert('not enough PP energy');
    return;
  }

  const outputDiv = document.getElementById('output');
  outputDiv.innerHTML = '';

  for (let i=0;i< lines; i++) {
    const pomuEnergy = document.createElement('p');
    pomuEnergy.innerText = " I'm POMU, "+" ";
    outputDiv.appendChild(pomuEnergy);
  }
}