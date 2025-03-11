const $adviceId = document.getElementById('advice-id');
const $adviceTxt = document.getElementById('advice-txt');
const $btnAdvice = document.getElementById('btn-advice');

const getData = async () => {
  try {
    const response = await fetch('https://api.adviceslip.com/advice');
    const data = await response.json();

    const currId = data.slip.id;
    const currAdvice = data.slip.advice;
    renderData(currId, currAdvice);
  } catch (error) {
    console.log(error);
  }

}

const renderData = (id, txt) => {
  $adviceId.innerText = id;
  $adviceTxt.innerText = txt;
}

getData();

$btnAdvice.addEventListener('click', e => {
  getData();
})
