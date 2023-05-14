// Get the image container element
const canvas = document.getElementById('canvas');
const image_container = document.getElementById('image_container');

// Listen for the wheel event
canvas.addEventListener('wheel', (e) => {
  if (e.deltaY < 0){
    console.log('scrollin up')
  } else {
    // image_container.style.transform = `transform: translateX(calc(-100% - 20vmin));`;
    console.log('scrollin down')
  }
});
