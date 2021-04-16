// our first object
let cat = {
  name : 'Kitty',
  mood : 'neutral',
  weight : 'neutral',
  status : 'neutral',
};
// our second object
let dog = {
  name : 'Doggy',
  mood : 'neutral',
  weight : 'neutral',
  status : 'neutral',
};
// boucle pour afficher les messages
const funnyMessages = ['Yummy ! One more please!', 'Disgusting ! Eat it by yourself !', 'You\'re so boring !', 'Go ahead ! Continue !', 'Wow I can\'t stop!'];
for (message of funnyMessages){
  console.log(message);
}
// afficher les icons de nurriture & activités
function displayFoodAndActivity(){
  document.getElementById('feedThem').style.visibility = 'visible';
  document.getElementById('playWithThem').style.visibility = 'visible';
}
function reactionMessages(source, message, moodBarScore, weightBarScore, statusBarScore, mood, weight, status){
  document.getElementById('image1').src = source;
  document.getElementById('moodText').innerHTML = message;
  document.getElementById('progressbar-score').text = moodBarScore;
  document.getElementById('weightbar-score').text = weightBarScore;
  document.getElementById('statusbar-score').text = statusBarScore;
  cat.mood = mood;
  cat.weight = weight;
  cat.status = status;
}
// changer l'humeur du chaton
function moodReaction(parametreMood){
  if (parametreMood == 'happy'){
    reactionMessages('assets/img/image1.png', funnyMessages[0], 3, 6, 10, 'happy', 'heavy', 'full');
    cat.mood = 'happy';
    cat.weight = 'heavy';
    cat.status = 'full';
    console.log(cat);
  }else if(parametreMood == 'furious'){
    reactionMessages('assets/img/image2.png', funnyMessages[1], -3, -2, -9, 'furious', 'light', 'starving');
    cat.mood = 'furious';
    cat.weight = 'light';
    cat.status = 'starving';
    console.log(cat);
  }else if(parametreMood == 'moody'){
    reactionMessages('assets/img/image5.png', funnyMessages[2], -2, 1, 0, 'moody', 'neutral', 'hungry');
    cat.mood = 'moody';
    cat.weight = "neutral";
    cat.status = 'hungry';
    console.log(cat);
  }else if(parametreMood == 'excited'){
    reactionMessages('assets/img/image4.png', funnyMessages[3], 4, 3.5, 12, 'excited', 'medium', 'full');
    cat.mood = 'excited';
    cat.weight = 'medium';
    cat.status = 'full';
    console.log(cat);
  }else if(parametreMood == 'excited-too-much'){
    reactionMessages('assets/img/image14.png', funnyMessages[4], 5, 5.5, 15, 'excited-too-much', 'chonk', 'stuffed');
    cat.mood = 'excited-too-much';
    cat.weight = 'chonk';
    cat.status = 'stuffed';
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
// la fonction permettant de faire la bare de progression dynamique Humeur
let progressionSum = 0;
let progressionBarArray = [];
function insertInProgressionBar(){
  let progressbarScore = parseInt(document.getElementById('progressbar-score').text);
  document.getElementById('progressbar-score').innerHTML = progressbarScore;
  progressionBarArray.push(progressbarScore);
  progressionSum += progressbarScore;
  document.getElementById('progressSumScore').innerHTML = progressionSum;
}
// barre de progression weight
let progressionWeightSum = 0;
let progressionWeightArray = [];
function insertInWeightBar(){
  weightbarScore = parseInt(document.getElementById('weightbar-score').text);
  document.getElementById('weightbar-score').innerHTML = weightbarScore;
  progressionWeightArray.push(weightbarScore);
  progressionWeightSum += weightbarScore;
  document.getElementById('weightSumScore').innerHTML = progressionWeightSum;
}
// barre de progression status
let progressionStatusSum = 0;
let progressionStatusArray = [];
function insertInStatusBar(){
  statusbarScore = parseInt(document.getElementById('statusbar-score').text);
  document.getElementById('statusbar-score').innerHTML = statusbarScore;
  progressionStatusArray.push(statusbarScore);
  progressionStatusSum += statusbarScore;
  document.getElementById('statusSumScore').innerHTML = progressionStatusSum;
}
// new fonction to change weight of cat
function changeCatWeight(weightParameter) {
  let reaction;
  let weightScore;
  let image = document.getElementById('image1');
  // switch (expression)
  switch (weightParameter) {
    // first case value
    case 'light'  :
    // first statement
    reaction = 'Yes ! I love to play !';
    weightScore = 50;
    cat.weight = 'light';
    var sound = document.getElementById('purr');
    sound.play();
    console.log(cat);
    // first break statement to halt first switch case
    break;
    case 'heavy' :
    reaction = 'I\'m so sleepy...\nzzz...';
    weightScore = 70;
    image.src = 'assets/img/image8.png';
    cat.weight = 'heavy';
    var sound = document.getElementById('purr');
    sound.play();
    console.log(cat);
    break;
    case 'medium' :
    reaction = 'Do you want to dance\n?';
    weightScore = 65;
    image.src = 'assets/img/image10.png';
    cat.weight = 'medium';
    var sound = document.getElementById('purr');
    sound.play();
    console.log(cat);
    break;
    case 'neutral' :
    reaction = 'Not the bath\n!\nI can wash myself\n!';
    weightScore = 60;
    image.src = 'assets/img/image9.png';
    cat.weight = 'neutral';
    var sound = document.getElementById('roar');
    sound.play();
    console.log(cat);
    break;
    case 'chonk' :
    reaction = 'Let\'s watch some T.V.,\njust you & me\n!';
    weightScore = 80;
    image.src = 'assets/img/image6.png';
    cat.weight = 'chonk';
    var sound = document.getElementById('purr');
    sound.play();
    console.log(cat);
    break;
    default:
    reaction = 'test';
    weightScore = 0;
  }
  document.getElementById('moodText').innerHTML = reaction;
  document.getElementById('score').innerHTML = weightScore;
}
// la nouvelle bar de progression l'Humeur
var i = 0;
function moveMoodBar() {
  if (i == 0) {
    i = 1;
    var elem = document.getElementById("myBar");
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
    var weightElem = document.getElementById("weightBar");
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
    var statusElem = document.getElementById("statusBar");
    var statusWidth = 1;
    var idStatus = setInterval(statusframe, 10);
    function statusframe() {
      if (statusWidth >= progressionStatusSum) {
        clearInterval(idStatus);
        statusCount = 0;
      } else {
        statusWidth++;
        statusElem.style.width = statusWidth + "%";
      }
    }
  }
}
// COUNT DOUNT
document.addEventListener('DOMContentLoaded', () =>{
  const timeLeftDisplay = document.querySelector('#time-left');
  const startBtn = document.querySelector('#start-button');
  let timeLeft = 90;
  function countDown(){
    setInterval(function(){
      if (timeLeft <= 0) {
        clearInterval(timeLeft = 0);
      }
      timeLeftDisplay.innerHTML = timeLeft;
      timeLeft -=1;
    },1000);
  }
  startBtn.addEventListener('click', countDown );
});
// la nouvelle bar de progression l'Humeur
var i = 0;
function moveMoodBar() {
  if (i == 0) {
    i = 1;
    var elem = document.getElementById("myBar");
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
    var weightElem = document.getElementById("weightBar");
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
    var statusElem = document.getElementById("statusBar");
    var statusWidth = 1;
    var idStatus = setInterval(statusframe, 10);
    function statusframe() {
      if (statusWidth >= progressionStatusSum) {
        clearInterval(idStatus);
        statusCount = 0;
      } else {
        statusWidth++;
        statusElem.style.width = statusWidth + "%";
      }
    }
  }
}
// la partie du code permettant d'avoir la somme totale des points
let sum = 0;
let yourGlobalScore = [];
function insertInGlobalScore(){
  let sumOfTwoScores = progressionSum + progressionWeightSum + progressionStatusSum;
  yourGlobalScore.push(sumOfTwoScores);
  sum += sumOfTwoScores;
  document.getElementById('yourSumScore').innerHTML = sum;
}
