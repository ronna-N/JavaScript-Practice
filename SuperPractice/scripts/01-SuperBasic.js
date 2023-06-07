
function callEnna() {
  const audio = new Audio("enna-sound.mp3");
  audio.play();
  console.log('F*cking Bitch');
}

const inputPPElement = document.querySelector('.js-pomu');
const pools = '';

function enterEnergy(event) {
  //console.log(event.key);
  if (event.key === 'Enter') {
    console.log('Hello')
    callPomu();
  }
}

function callPomu() {
  let poolsHtml = '';
  let count = Number(inputPPElement.value);
  console.log(count);
  for (let i = 0; i < count; i++) {
    if (count <= 0) {
      console.log(`not enough`);
    } else if (!count) {
      console.log(`wrong input`);
    } else {
      const html = `<div class="viewGrid">I'm POMU</div>`
      poolsHtml += html
    }
  }
  //console.log(poolsHtml);
  document.querySelector('.print-pomu').innerHTML = poolsHtml;

  return inputPPElement.value = ''
}

//onclick="callPomu()"