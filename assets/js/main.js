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
function moodReaction(paramètreMood){
if (paramètreMood == 'happy'){
  document.getElementById('image1').src ='assets/img/image1.png';
  document.getElementById('moodText').innerHTML = 'Yummy ! One more please!';
  document.getElementById('score').innerHTML = 50;
  cat.mood = 'happy';
  console.log(cat);
}else if(paramètreMood == 'furious'){
  document.getElementById('image1').src ='assets/img/image2.png';
  document.getElementById('moodText').innerHTML = 'Disgusting ! Eat it by yourself !';
  document.getElementById('score').innerHTML = 10;
  cat.mood = 'furious';
  console.log(cat);
}else if(paramètreMood == 'moody'){
  document.getElementById('image1').src ='assets/img/image5.png';
  document.getElementById('moodText').innerHTML = 'You\'re so boring !';
  document.getElementById('score').innerHTML = 20;
  cat.mood = 'mood';
  console.log(cat);
}else if(paramètreMood == 'excited'){
  document.getElementById('image1').src ='assets/img/image4.png';
  document.getElementById('moodText').innerHTML = 'Go ahead ! Continue !';
  document.getElementById('score').innerHTML = 40;
  cat.mood = 'excited';
  console.log(cat);
}
}
/*
// new fonction to change weight of cat
function changeCatWeight(weightParameter) {
  switch (weightParameter == 'neutral') {
    case expression:

      break;
    default:

  }
}
*/
