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
