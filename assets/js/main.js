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
function setNewImage() {
  document.getElementById('image1').src ='assets/img/image3.png';
}
function setOldImage() {
  document.getElementById('image1').src ='assets/img/image1.png';
}
// afficher les icons de nurriture & activités
function displayFood(){
  document.getElementById('feedThem').style.visibility = 'visible';
}
function displayActivities(){
  document.getElementById('playWithThem').style.visibility = 'visible';
}
// changer l'humeur du chaton
function moodReaction(parametreMood){
if (parametreMood == 'happy'){
  document.getElementById('image1').src ='assets/img/image1.png';
  document.getElementById('moodText').innerHTML = 'Yummy ! One more please!';
  document.getElementById('score').innerHTML = 50;
  cat.mood = 'happy';
  console.log(cat);
}else if(parametreMood == 'furious'){
  document.getElementById('image1').src ='assets/img/image2.png';
  document.getElementById('moodText').innerHTML = 'Disgusting ! Eat it by yourself !';
  document.getElementById('score').innerHTML = 10;
  cat.mood = 'furious';
  console.log(cat);
}else if(parametreMood == 'moody'){
  document.getElementById('image1').src ='assets/img/image5.png';
  document.getElementById('moodText').innerHTML = 'You\'re so boring !';
  document.getElementById('score').innerHTML = 20;
  cat.mood = 'mood';
  console.log(cat);
}else if(parametreMood == 'excited'){
  document.getElementById('image1').src ='assets/img/image4.png';
  document.getElementById('moodText').innerHTML = 'Go ahead ! Continue !';
  document.getElementById('score').innerHTML = 40;
  cat.mood = 'excited';
  console.log(cat);
}
insertInGlobalScore();
}
// new fonction to change weight of cat
function changeCatWeight(weightParameter) {
  let reaction;
  let weightScore;
  let image = document.getElementById('image1');
  switch (weightParameter) {
    case 'light'  :
      reaction = 'Yes ! I love to play !';
      weightScore = 50;
      cat.weight = 'light';
      console.log(cat);
      break;
    case 'medium' :
    reaction = 'I\'m so sleepy... zzz...';
    weightScore = 70;
    image.src = 'assets/img/image8.png';
    cat.weight = 'medium';
    console.log(cat);
    break;
    default:
  reaction = 'test';
  weightScore = 0;
  }
  document.getElementById('moodText').innerHTML = reaction;
  document.getElementById('score').innerHTML = weightScore;
}
// la partie du code permettant d'avoir la somme totale des points
let sum = 0;
let yourGlobalScore = [];
function insertInGlobalScore(){
  let score = parseInt(document.getElementById('score').text);
  document.getElementById('score').innerHTML = score;
  yourGlobalScore.push(score);
  sum += score;
  document.getElementById('yourSumScore').innerHTML = sum;
}
