const cars = [
    {
      src: '/assets/task_6_2_js/car1.jpeg',
      alt: 'Veloce Apex (2015) $29,500'
    },
    {
      src: '/assets/task_6_2_js/car2.jpeg',
      alt: 'Phoenix Blaze (2018) $36,800'
    },
    {
      src: '/assets/task_6_2_js/car3.jpeg',
      alt: 'Zephyr Thunderbolt (1972) $16,000'
    },
    {
      src: '/assets/task_6_2_js/car4.jpeg',
      alt: 'Eclipse Eclipse GT (2012) $21,000'
    }
  ];

  let img = null;
  
  let input = null;

  let index = 0;

  function imageFill() {
    index %= cars.length;
    if (index < 0) index += cars.length;
    img.alt = cars[index].alt;
    img.src = cars[index].src;
    input.value = cars[index].alt;
  }
document.addEventListener('DOMContentLoaded', () => {
    img = document.querySelector(".container > img");
    input = document.querySelector(".container > input");
    imageFill();
})
  

  function buttonForward() {
    index++;
    imageFill()
  }
  
  function buttonBackward() {
    index--;
    imageFill()
  }