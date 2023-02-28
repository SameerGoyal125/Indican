const panels = document.querySelectorAll('.panel');
const options = {
  root: null,
  rootMargin: '0px',
  threshold: 0.5
};

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {

    if (entry.isIntersecting) {
      entry.target.querySelector('.name').classList.add('active-panel');
      entry.target.querySelector('.about').classList.add('active');
      
    } else {
      entry.target.querySelector('.name').classList.remove('active-panel');
      entry.target.querySelector('.about').classList.remove('active');
    }
  });
}, options);

panels.forEach(panel => {
  observer.observe(panel);
});
