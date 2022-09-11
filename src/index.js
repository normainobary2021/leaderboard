import './style.css';
import Score from './modules/constructorModule.js';

const consumeAPI = require('./modules/consumeAPIModule.js');
const displayResults = require('./modules/resultsModule.js');

const myURL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games';
const uID = '/LvQpFtQWItmg0slGlX3Q/scores/';

const refreshBtn = document.getElementById('refresh');
const submitBtn = document.getElementById('submit');

displayResults(myURL, uID);

refreshBtn.addEventListener('click', () => {
  displayResults(myURL, uID);
});

submitBtn.addEventListener('click', async () => {
  const competent = document.querySelector('#name').value;
  const marks = document.querySelector('#score').value;
  const competentScore = new Score(competent, marks);
  await consumeAPI.printScore(myURL, uID, JSON.stringify(competentScore));
  displayResults(myURL, uID);
  const inputs = document.querySelectorAll('#name, #score');
  inputs.forEach((input) => {
    input.value = '';
  });
});
