document.addEventListener(
  "DOMContentLoaded",
  () => {
    console.log("IronGenerator JS imported successfully!");
  },
  false
);


const hoverContainers = document.querySelectorAll('.ul-container-hover');


hoverContainers.forEach((hoverContainer) => {
  const genreElement = hoverContainer.querySelector('.genre');
  const titleElement = hoverContainer.querySelector('.title-movie-a');

  hoverContainer.addEventListener('mouseenter', () => {
    genreElement.style.display = 'none';
    titleElement.style.fontSize = 'x-large';
    titleElement.style.color = 'pink'
  });

  hoverContainer.addEventListener('mouseleave', () => {
    genreElement.style.display = 'block';
    titleElement.style.fontSize = 'large';
    titleElement.style.color = 'black'
  });
});