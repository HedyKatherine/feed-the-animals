// our first object
let cat = {
  name : 'Kitty',
  mood : 'neutral',
  weight : 'neutral',
  status : 'neutral',
};
// boucle pour afficher les messages
const funnyMessages = ['Yummy! One more please!', 'Disgusting! Eat it by yourself!', 'You\'re so boring!', 'Go ahead! Continue!', 'Wow I can\'t stop!'];
for (message of funnyMessages){
  console.log(message);
}
function reactionMessages(source, message, messageStyle, moodBarScore, weightBarScore, statusBarScore){
  document.getElementById('image1').src = source;
  document.getElementById('moodText').innerHTML = message;
  document.getElementById('moodText').style.fontFamily = messageStyle;
  document.getElementById('progressbar-score').text = moodBarScore;
  document.getElementById('weightbar-score').text = weightBarScore;
  document.getElementById('statusbar-score').text = statusBarScore;
}
// changer l'humeur du chaton
function moodReaction(parametreMood){
  if (parametreMood == 'happy'){
    reactionMessages('assets/img/image1.png', funnyMessages[0], 'Bubblegum sans', 3, 8, 10);
    document.getElementById('statusBar').innerHTML = cat.status;
    console.log(cat);
  }else if(parametreMood == 'furious'){
    reactionMessages('assets/img/image7.png', funnyMessages[1], 'Creepster', -8, -2, -9);
    let angryCatSound = document.getElementById('growl');
    angryCatSound.play();
    console.log(cat);
  }else if(parametreMood == 'moody'){
    reactionMessages('assets/img/image5.png', funnyMessages[2], 'Fontdiner Swanky', -7, 1, 0);
    let upsetCatSound = document.getElementById('brokenPlate');
    upsetCatSound.play();
    console.log(cat);
  }else if(parametreMood == 'excited'){
    reactionMessages('assets/img/image4.png', funnyMessages[3], 'Luckiest Guy', 4, 5.5, 9);
    document.getElementById('statusBar').innerHTML = cat.status;
    console.log(cat);
  }else if(parametreMood == 'overexcited'){
    reactionMessages('assets/img/image14.png', funnyMessages[4], 'Sniglet', 5, 10, 10);
    document.getElementById('statusBar').innerHTML = cat.status;
    document.getElementById('moodText').style.fontWeight = '800';
    console.log(cat);
  }
  insertInGlobalScore();
  insertInProgressionBar();
  insertInWeightBar();
  insertInStatusBar();
  moveMoodBar();
  moveWeightBar();
  moveStatusBar();
}
// new fonction to change weight of cat
function changeCatWeight(weightParameter) {
  let reaction;
  let reactionFontFamily;
  let weightScore;
  let image = document.getElementById('image1');
  let moodScore;
  let statusScore;
  // switch (expression)
  switch (weightParameter) {
    // first case value
    case 'light'  :
    // first statement
    reaction = 'Yes! I love to play!';
    reactionFontFamily = 'Bubblegum sans';
    weightScore = -5;
    moodScore = 2;
    statusScore = -0.5;
    var sound = document.getElementById('meow');
    sound.play();
    console.log(cat);
    // first break statement to halt first switch case
    break;
    case 'heavy' :
    reaction = 'I\'m so sleepy...zzz...';
    reactionFontFamily = 'Bubblegum sans';
    weightScore = 3;
    moodScore = -3;
    statusScore = 3;
    image.src = 'assets/img/image8.png';
    console.log(cat);
    break;
    case 'medium' :
    reaction = 'Do you want to dance?';
    reactionFontFamily = 'Bubblegum sans';
    weightScore = -3;
    moodScore = 2.5;
    statusScore = -0.3;
    image.src = 'assets/img/image10.png';
    var sound = document.getElementById('meow');
    sound.play();
    console.log(cat);
    break;
    case 'neutral' :
    reaction = 'Not the bath!\nI can wash myself!';
    reactionFontFamily = 'Bubblegum sans';
    weightScore = 0;
    moodScore = -10;
    statusScore = 0;
    image.src = 'assets/img/image9.png';
    var sound = document.getElementById('roar');
    sound.play();
    console.log(cat);
    break;
    case 'chonk' :
    reaction = 'Let\'s watch some T.V.!';
    reactionFontFamily = 'Bubblegum sans';
    weightScore = 5;
    moodScore = 5;
    statusScore = 3.5;
    image.src = 'assets/img/image6.png';
    var sound = document.getElementById('meow');
    sound.play();
    console.log(cat);
    break;
    default:
    reaction = 'test';
    weightScore = 0;
  }
  document.getElementById('moodText').innerHTML = reaction;
  document.getElementById('moodText').style.fontFamily = reactionFontFamily;
  document.getElementById('weightbar-score').text = weightScore;
  document.getElementById('progressbar-score').text = moodScore;
  document.getElementById('statusbar-score').text = statusScore;
//  document.getElementById('score').innerHTML = weightScore;
insertInGlobalScore();
insertInProgressionBar();
insertInWeightBar();
insertInStatusBar();
moveMoodBar();
moveWeightBar();
moveStatusBar();
}
// la fonction permettant de faire la bare de progression dynamique Humeur
let progressionSum = 0;
let progressionBarArray = [];
function insertInProgressionBar(){
  let progressbarScore = parseInt(document.getElementById('progressbar-score').text);
  progressionBarArray.push(progressbarScore);
  progressionSum += progressbarScore;
    if(progressionSum <= -3){
      document.getElementById('myBar').style.background = 'red';
      cat.mood = "furious";
      document.getElementById('myBar').innerHTML = cat.mood;
    }else if(progressionSum <= 0){
      document.getElementById('myBar').style.background = 'red';
      cat.mood = "moody";
      document.getElementById('myBar').innerHTML = cat.mood;
    }else if(progressionSum <= 15){
      document.getElementById('myBar').style.background = '#4CAF50';
      cat.mood = "happy";
      document.getElementById('myBar').innerHTML = cat.mood;
    }else if(progressionSum <= 30){
      document.getElementById('myBar').style.background = '#4CAF50';
      cat.mood = "excited";
      document.getElementById('myBar').innerHTML = cat.mood;
    }else{
      document.getElementById('myBar').style.background = 'red';
      cat.mood = "overexcited";
      document.getElementById('myBar').innerHTML = cat.mood;
    }
}
// barre de progression weight
let progressionWeightSum = 0;
let progressionWeightArray = [];
function insertInWeightBar(){
  weightbarScore = parseInt(document.getElementById('weightbar-score').text);
  // document.getElementById('weightbar-score').innerHTML = weightbarScore;
  progressionWeightArray.push(weightbarScore);
  progressionWeightSum += weightbarScore;
  document.getElementById('weightSumScore').innerHTML = progressionWeightSum;
    if(progressionWeightSum <= -3){
      document.getElementById('weightBar').style.background = 'red';
      cat.weight = "light";
      document.getElementById('weightBar').innerHTML = cat.weight;
    }else if(progressionWeightSum <= 0){
      cat.weight = "normal";
      document.getElementById('weightBar').innerHTML = cat.weight;
      document.getElementById('weightBar').style.background = '#4CAF50';
    }else if(progressionWeightSum <= 15){
      cat.weight = "medium";
      document.getElementById('weightBar').innerHTML = cat.weight;
      document.getElementById('weightBar').style.background = '#4CAF50';
    }else if(progressionWeightSum <= 30){
      cat.weight = "heavy";
      document.getElementById('weightBar').innerHTML = cat.weight;
      document.getElementById('weightBar').style.background = 'red';
    }else{
      cat.weight = "chonk";
      document.getElementById('weightBar').innerHTML = cat.weight;
      document.getElementById('weightBar').style.background = 'red';
    }
}
// barre de progression status
let progressionStatusSum = 0;
let progressionStatusArray = [];
function insertInStatusBar(){
  statusbarScore = parseInt(document.getElementById('statusbar-score').text);
  // document.getElementById('statusbar-score').innerHTML = statusbarScore;
  progressionStatusArray.push(statusbarScore);
  progressionStatusSum += statusbarScore;
    if(progressionStatusSum <= 3){
      document.getElementById('statusBar').style.background = 'red';
      cat.status = "starving";
      document.getElementById('statusBar').innerHTML = cat.status;
    }else if(progressionWeightSum <= 6){
      document.getElementById('statusBar').style.background = 'red';
      cat.status = "hungry";
      document.getElementById('statusBar').innerHTML = cat.status;
    }else if(progressionWeightSum <= 20){
      cat.status = "full";
      document.getElementById('statusBar').innerHTML = cat.status;
      document.getElementById('statusBar').style.background = '#4CAF50';
    }else{
      document.getElementById('statusBar').style.background = 'red';
      cat.status = "stuffed";
      document.getElementById('statusBar').innerHTML = cat.status;
    }
}
// COUNTDOWN function
function hideText() {
  document.getElementById('game_rules').style.display = 'none';
  document.getElementById('choose_food').style.display = 'block';
}
var seconds = 30;
var btn = document.getElementById('btn');
var btn_reset = document.getElementById('btn_reset');
var showCount = document.getElementById('showCount');
btn.addEventListener('click', function (e) {
  // e.preventDefault()
var timerLimit;
  timerLimit = setInterval(() => {
  if(seconds <1){
    clearInterval(timerLimit);
    alert('Game Over: refresh to start \n ' + 'Voici ' + cat.name + '\n son humeur est: ' + cat.mood + '\n son poid est: ' + cat.weight + '\n le status: ' + cat.status);
    showCount.innerHTML ='Game over';
    btn.style.display = 'inline';
    }else{
      btn.style.display='none';
      document.getElementById('showCount').innerHTML = --seconds;
      btn_reset.style.display = 'inline';
    }
    var reset = document.getElementById('btn_reset');
    reset.onclick = function () {
      seconds = 30;
      clearInterval();
      interval = null;
       showCount.innerHTML = ' ';

    }
  }, 1000);
})
// la partie du code permettant d'avoir la somme totale des points
let sum = 0;
let yourGlobalScore = [];
function insertInGlobalScore(){
  let weight = parseInt(document.getElementById('weightbar-score').text);
  document.getElementById('weightbar-score').innerHTML = weight;
  yourGlobalScore.push(weight);
  let status = parseInt(document.getElementById('statusbar-score').text);
  document.getElementById('statusbar-score').innerHTML = status;
  yourGlobalScore.push(status);
  let mood = parseInt(document.getElementById('progressbar-score').text);
  document.getElementById('progressbar-score').innerHTML = mood;
  progressionBarArray.push(mood);
  let sumOfScores = status + weight + mood;
  yourGlobalScore.push(sumOfScores);
  sum += sumOfScores;
  document.getElementById('yourSumScore').innerHTML = sum;
  document.getElementById('yourSumScore').style.backgroundImage = "url('assets/img/red-background.png')";
}
// la nouvelle bar de progression l'Humeur
var i = 0;
function moveMoodBar() {
  if (i == 0) {
    i = 1;
    var elem = document.getElementById('myBar');
    var width = 1;
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= progressionSum) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        elem.style.width = width + "%";
      }
    }
  }
}
// la nouvelle bar de progression le Poids
var weightCount = 0;
function moveWeightBar() {
  if (weightCount == 0) {
    weightCount = 1;
    var weightElem = document.getElementById('weightBar');
    var weightWidth = 1;
    var idWeight = setInterval(weightframe, 10);
    function weightframe() {
      if (weightWidth >= progressionWeightSum) {
        clearInterval(idWeight);
        weightCount = 0;
      } else {
        weightWidth++;
        weightElem.style.width = weightWidth + "%";
      }
    }
  }
}
// la nouvelle bar de progression le Status
var statusCount = 0;
function moveStatusBar() {
  if (statusCount == 0) {
    statusCount = 1;
    var statusElem = document.getElementById('statusBar');
    var statusWidth = 1;
    var idStatus = setInterval(statusframe, 10);
    function statusframe() {
      if (statusWidth >= progressionStatusSum) {
        clearInterval(idStatus);
        statusCount = 0;
      } else {
        statusWidth++;
        statusElem.style.width = statusWidth + "%";
          if(cat.status == 'starving' || cat.status == 'stuffed' || cat.status == 'hungry'){
            document.getElementById('statusBar').style.background = 'red';
          }else{
            document.getElementById('statusBar').style.background = '#4CAF50';
          }
      }
    }
  }
}
