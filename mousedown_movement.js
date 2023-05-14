const container = document.getElementById('image-container');

window.onmousedown = e => {
  container.dataset.mouseDownAt = e.clientX;
}

window.onmouseup = e => {
  container.dataset.mouseDownAt = "0";
  container.dataset.prevPercentage = container.dataset.percentage; 
}

window.onmousemove = e => {
  if (container.dataset.mouseDownAt === "0") return; //Doesn't do anything 

  const mouseDeltaAt = parseFloat(container.dataset.mouseDownAt) - e.clientX,
        maxDelta = window.innerWidth / 2;

  const delta_percentage = (mouseDeltaAt / maxDelta) * -100,
        current_percentage = parseFloat(container.dataset.prevPercentage) + delta_percentage;

  container.dataset.percentage = Math.max(current_percentage,0);
}