// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
  // Get all navigation links
  var navLinks = document.querySelectorAll('a[href^="#"]');
  
  // Add smooth scrolling to all navigation links
  for (var i = 0; i < navLinks.length; i++) {
    navLinks[i].addEventListener('click', function(e) {
      e.preventDefault();
      
      var targetId = this.getAttribute('href');
      var targetSection = document.querySelector(targetId);
      
      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
        
        // Close mobile menu if open
        var navbarCollapse = document.querySelector('.navbar-collapse');
        if (navbarCollapse && navbarCollapse.classList.contains('show')) {
          var bsCollapse = new bootstrap.Collapse(navbarCollapse);
          bsCollapse.hide();
        }
      }
    });
  }
  
  // Add active class to navigation links on scroll
  window.addEventListener('scroll', function() {
    var sections = document.querySelectorAll('section[id]');
    var navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    
    var current = '';
    for (var i = 0; i < sections.length; i++) {
      var sectionTop = sections[i].offsetTop;
      var sectionHeight = sections[i].clientHeight;
      if (window.pageYOffset >= sectionTop - 60) {
        current = sections[i].getAttribute('id');
      }
    }
    
    for (var j = 0; j < navLinks.length; j++) {
      navLinks[j].classList.remove('active');
      if (navLinks[j].getAttribute('href') === '#' + current) {
        navLinks[j].classList.add('active');
      }
    }
  });
  
  // Add fade-in animation for sections
  var sections = document.querySelectorAll('section');
  for (var k = 0; k < sections.length; k++) {
    sections[k].style.opacity = '0';
    sections[k].style.transform = 'translateY(20px)';
    sections[k].style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    
    // Simple fade in on scroll
    var observer = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });
    
    observer.observe(sections[k]);
  }
});

// Add some modern enhancements
document.addEventListener('DOMContentLoaded', function() {
  // Add typing effect to the intro text
  var introText = document.querySelector('.intro-text');
  if (introText) {
    var text = introText.textContent;
    introText.textContent = '';
    
    var i = 0;
    var typeWriter = function() {
      if (i < text.length) {
        introText.textContent += text.charAt(i);
        i++;
        setTimeout(typeWriter, 100);
      }
    };
    
    // Start typing after a short delay
    setTimeout(typeWriter, 1000);
  }
  
  // Add parallax effect to the masthead
  window.addEventListener('scroll', function() {
    var scrolled = window.pageYOffset;
    var masthead = document.querySelector('.masthead');
    if (masthead) {
      masthead.style.transform = 'translateY(' + (scrolled * 0.5) + 'px)';
    }
  });
});
