// our first object
let cat = {
  name : 'Kitty',
  mood : 'happy',
  weight : 1,
  status : 'neutral',
};
// our second object
let dog = {
  name : 'Doggy',
  mood : 'anxious',
  weight : 11,
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
}else if(paramètreMood == 'furious'){
  document.getElementById('image1').src ='assets/img/image2.png';
  document.getElementById('moodText').innerHTML = 'Disgusting ! Eat it by yourself !';
  document.getElementById('score').innerHTML = 10;
}else if(paramètreMood == 'moody'){
  document.getElementById('image1').src ='assets/img/image5.png';
  document.getElementById('moodText').innerHTML = 'You\'re so boring !';
  document.getElementById('score').innerHTML = 20;
}else if(paramètreMood == 'excited'){
  document.getElementById('image1').src ='assets/img/image4.png';
  document.getElementById('moodText').innerHTML = 'Go ahead ! Continue !';
  document.getElementById('score').innerHTML = 40;
}
}
