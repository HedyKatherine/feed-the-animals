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
  // sumOfScores();
  if (parametreMood == 'happy'){
    document.getElementById('image1').src ='assets/img/image1.png';
    document.getElementById('moodText').innerHTML = 'Yummy ! One more please!';
    document.getElementById('score').text = 70;
    document.getElementById('mood-bar').style.width = '70%';
    document.getElementById('mood-bar').innerHTML = '70%';
    document.getElementById('weight-bar').style.width = '80%';
    document.getElementById('weight-bar').style.background = 'red';
    document.getElementById('weight-bar').innerHTML = '80%';
    cat.mood = 'happy';
    cat.weight = 'extra';
    cat.status = '';
    console.log(cat);
  }else if(parametreMood == 'furious'){
    document.getElementById('image1').src ='assets/img/image2.png';
    document.getElementById('moodText').innerHTML = 'Disgusting ! Eat it by yourself !';
    document.getElementById('score').text = 10;
    document.getElementById('mood-bar').style.width = '10%';
    document.getElementById('mood-bar').innerHTML = '10%';
    document.getElementById('weight-bar').style.width = '10%';
    document.getElementById('weight-bar').innerHTML = '10%';
    document.getElementById('weight-bar').style.background = 'red';
    cat.mood = 'furious';
    cat.weight = 'light';
    cat.status = '';
    console.log(cat);
  }else if(parametreMood == 'moody'){
    document.getElementById('image1').src ='assets/img/image5.png';
    document.getElementById('moodText').innerHTML = 'You\'re so boring !';
    document.getElementById('score').text = 20;
    document.getElementById('mood-bar').style.width = '20%';
    document.getElementById('mood-bar').innerHTML = '20%';
    document.getElementById('weight-bar').style.width = '20%';
    document.getElementById('weight-bar').innerHTML = '20%';
    document.getElementById('weight-bar').style.background = 'green';
    cat.mood = 'moody';
    cat.weight = "normal";
    cat.status = '';
    console.log(cat);
  }else if(parametreMood == 'excited'){
    document.getElementById('image1').src ='assets/img/image4.png';
    document.getElementById('moodText').innerHTML = 'Go ahead ! Continue !';
    document.getElementById('score').text = 40;
    document.getElementById('mood-bar').style.width = '90%';
    document.getElementById('mood-bar').innerHTML = '90%';
    document.getElementById('weight-bar').style.width = '50%';
    document.getElementById('weight-bar').innerHTML = '50%';
    document.getElementById('weight-bar').style.background = 'green';
    cat.mood = 'excited';
    cat.weight = 'normal';
    cat.status = '';
    console.log(cat);
  }else if(parametreMood == 'excited-too-much'){
    document.getElementById('image1').src ='assets/img/image14.png';
    document.getElementById('moodText').innerHTML = 'Wow I can\'t stop!';
    document.getElementById('score').text = 40;
    document.getElementById('mood-bar').style.width = '90%';
    document.getElementById('mood-bar').innerHTML = '90%';
    document.getElementById('weight-bar').style.width = '80%';
    document.getElementById('weight-bar').innerHTML = '80%';
    document.getElementById('weight-bar').style.background = 'red';
    cat.mood = 'excited-too-much';
    cat.weight = 'normal';
    cat.status = '';
    console.log(cat);
  }
insertInGlobalScore();

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
  }
