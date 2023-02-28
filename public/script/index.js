var counter = document.getElementById("counter");
var countNum = document.getElementById("count-num");
var countNum1 = document.getElementById("count-num-01");
var countNum2 = document.getElementById("count-num-02");
var count = 0;
var count1 = 0;
var count2 = 0;
window.onscroll = function () {
  if (isInViewport(counter)) {
    counter.style.display = "flex";
    var interval = setInterval(function () {
      countNum.innerHTML = count;
      count = count + 28;
      count1 = count1 + 1;
      count2 = count2 + 4;
      countNum1.innerHTML = count1;
      countNum2.innerHTML = count2 + "%";
      if (count >= 700) {
        countNum.innerHTML = 700 + "+";
        clearInterval(interval);
        counter = 0;
        countNum = 0;
      }
      if (count1 >= 25) {
        countNum1.innerHTML = 25 + "+";
        countNum1 = 0;
      }
      if(count2 >= 100){
        countNum2.innerHTML = 100 + "%";
        countNum2 = 0;
      }
    }, 50);
  }
};

function isInViewport(element) {
  var rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

var swiper = new Swiper('.blog-slider', {
  spaceBetween: 10,
  loop: true,
  effect: 'fade',
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// const observer = new IntersectionObserver(entries => {
//   entries.forEach(entry => {
//     if (entry.isIntersecting) {
//       entry.target.classList.add('show');
//     }
//     else{
//       entry.target.classList.remove('show');
//     }
//   });
// });

// observer.observe(document.querySelector('.countries'));
// observer.observe(document.querySelector('.des-02'));

