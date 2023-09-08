function showZoomedImg(imgSrc) {
    const overlay = document.querySelector('.overlay');
    const zoomedImg = document.querySelector('.zoomed-image');

    zoomedImg.src = imgSrc;
    overlay.style.display = 'flex';
    zoomedImg.style.display = 'block';

    // Agregar un evento clic para cerrar la imagen en zoom
    zoomedImg.addEventListener('click', hideZoomedImg);
  }

  // Función para ocultar la imagen en zoom
  function hideZoomedImg() {
    const overlay = document.querySelector('.overlay');
    const zoomedImg = document.querySelector('.zoomed-image');

    overlay.style.display = 'none';
    zoomedImg.style.display = 'none';

    // Eliminar el evento clic para cerrar la imagen en zoom
    zoomedImg.removeEventListener('click', hideZoomedImg);
  }

  // Agregar eventos clic a todas las imágenes clicables
  const clickableImages = document.querySelectorAll('.image-clickable');
  clickableImages.forEach((img) => {
    img.addEventListener('click', (e) => {
      const imgSrc = e.target.src;
      showZoomedImg(imgSrc);
    });
  });