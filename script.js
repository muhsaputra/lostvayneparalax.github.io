let LastImage = document.getElementsByClassName('layer-terakhir')[0];
let MidImage = document.getElementsByClassName('layer-awal')[0];
let cloud = document.getElementsByClassName('awan')[0];
let lostvayne = document.querySelector('#landing h1');

console.log(lostvayne);

window.addEventListener('scroll', function () {
  let value = window.scrollY;

  lostvayne.style.right = value * 0.8 + 'px';
  LastImage.style.top = value * 0.7 + 'px';
  MidImage.style.top = value * 0.6 + 'px';
  cloud.style.left = value * 1 + 'px';
});
