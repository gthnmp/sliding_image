const canvas = document.getElementById('canvas');
const container = document.getElementById('container');

let CURRENT_POSITION = 20
let PERCENTAGE = 0;
canvas.addEventListener('wheel', (e) => {
  const STARTING_POINT = 20;
  const END_POINT = 317.8;
  const SCROLL_SPEED = 1;

  // Movement
  if (e.deltaY < 0){
    (CURRENT_POSITION-=SCROLL_SPEED) <= STARTING_POINT ? CURRENT_POSITION = STARTING_POINT : CURRENT_POSITION-- 
    console.log('scrollin up:' + CURRENT_POSITION);
  } else {
    (CURRENT_POSITION+=SCROLL_SPEED) >= END_POINT ? CURRENT_POSITION = END_POINT : CURRENT_POSITION++
    console.log('scrollin down:'+ CURRENT_POSITION);
  }
  container.style.transform = `translateX(calc(50% - ${CURRENT_POSITION}vmin))`;

  // Image Paralax
  PERCENTAGE = CURRENT_POSITION / (END_POINT - STARTING_POINT);

  for (const image of document.getElementById('image')){
    image.style.object_position = `${PERCENTAGE}% center`;
  }
});
