let images = ['1.jpg', '2.jpg', '3.jpg', '4.jpg','5.jpg','6.jpg','7.jpg','8.jpg','9.jpg'],
    slider = document.querySelector('#slider'),
    img = slider.querySelector('img'),
    i = 1;
    img.src = '../assets/img/' + images[0];
    window.setInterval(function (){
      img.src = '../assets/img/' + images[i];
      i++;
      if (i == images.length){
        i = 0;
      }
    }, 900);

  