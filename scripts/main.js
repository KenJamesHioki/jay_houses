document.addEventListener('DOMContentLoaded', function () {
  const hero = new HeroSlider('.swiper');
  hero.start();

  // const ta = new TweenTextAnimation('.tween-animate-title');
  // ta.animate();

  const cb = function (el, isIntersecting) {
    if (isIntersecting) {
      const ta = new TweenTextAnimation(el);
      ta.animate();
    }
  }

  const so = new ScrollObserver('.tween-animate-title', cb);


  const cb2 = function (el, isIntersecting) {
    if (isIntersecting) {
      el.classList.add('inview')
    } else {
      el.classList.remove('inview')

    }
  }

  const so2 = new ScrollObserver('.cover-slide', cb2);

  const cb3 = function (el, isIntersecting) {
    if (isIntersecting) {
      el.classList.add('inview');
    } else {
      el.classList.remove('inview');

    }
  }

  const so3 = new ScrollObserver('.travel__texts', cb3);
});

