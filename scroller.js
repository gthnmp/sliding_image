// Get the image container element
const canvas = document.getElementById('canvas');
const container = document.getElementById('container');

let CURRENT_POSITION = 20
// Listen for the wheel event
canvas.addEventListener('wheel', (e) => {
  const STARTING_POINT = 20;
  const END_POINT = 320

  if (e.deltaY < 0){
    (CURRENT_POSITION--) <= 20 ? CURRENT_POSITION = 20 : CURRENT_POSITION-- 
    console.log('scrollin up:' + CURRENT_POSITION);
  } else {
    (CURRENT_POSITION++) >= 320 ? CURRENT_POSITION = 320 : CURRENT_POSITION++
    console.log('scrollin down:'+ CURRENT_POSITION);
  }
  container.style.transform = `translateX(calc(50% - ${CURRENT_POSITION}vmin))`;
});
