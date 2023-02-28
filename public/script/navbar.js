(function($) {
  $(function() { 
    $('nav ul li a:not(:only-child)').click(function(e) {
      $(this).siblings('.nav-dropdown').toggle();
      $('.nav-dropdown').not($(this).siblings()).hide();
      $(this).toggleClass('active-list');
      e.stopPropagation();
    });
    
    $('html').click(function() {
      $('.nav-dropdown').hide();
      $('nav ul li a:not(:only-child)').removeClass('active-list');
    });
    
    $('#nav-toggle').click(function() {
      $('nav ul').slideToggle();
    });
    $('#nav-toggle').on('click', function() {
      this.classList.toggle('active');
    });
  }); 
})(jQuery);

//when user clicks on nav-dropdown rotate nav ul li a:not(:only-child):after 180deg
//when user clicks on nav-dropdown rotate nav ul li a:not(:only-child):after 180deg

//when user clicks on nav-dropdown rotate nav ul li a:not(:only-child):after 180deg 
//when user clicks on nav-dropdown rotate nav ul li a:not(:only-child):after 180deg

const divs = document.querySelectorAll('.animated');

const observer1 = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
    else{
      entry.target.classList.remove('show');
    }
  });
}, { threshold: 0.25 });

divs.forEach(div => {
  observer1.observe(div);
});