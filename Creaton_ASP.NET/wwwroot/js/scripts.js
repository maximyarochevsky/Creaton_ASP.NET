window.addEventListener('scroll', function() {
    var header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0);
  });

  document.querySelectorAll('.my-class').forEach((elem) => {
    elem.onmouseenter = elem.onmouseleave = (e) => {
          const tolerance = 10;
      const left = 0;
      const right = elem.clientWidth;
      let x = e.pageX - elem.offsetLeft;
      if (x - tolerance < left) x = left;
      if (x + tolerance > right) x = right;
      elem.style.setProperty('--x', `${ x }px`);
    }
  });