//scroll_effect 参考「https://www.tipswork.net/css/853/#index_id3」
// jQuery
$(window).scroll(function () {
  var scrollAnimationElm = document.querySelectorAll('.scroll_up , .scroll_left , .scroll_right');
  var scrollAnimationFunc = function () {
    for (var i = 0; i < scrollAnimationElm.length; i++) {
      var triggerMargin = 150;
      if (window.innerHeight > scrollAnimationElm[i].getBoundingClientRect().top + triggerMargin) {
        scrollAnimationElm[i].classList.add('on');
      }
    }
  }
  window.addEventListener('load', scrollAnimationFunc);
  window.addEventListener('scroll', scrollAnimationFunc);
});

//scroll_effect
// window.addEventListener("scroll", function () {
//   const elm = document.querySelector(".elm");
//   const scroll = window.pageYOffset;
//   if (scroll > 500) {
//     elm.style.opacity = "1";
//     // console.log(scroll);
//   } else {
//     elm.style.opacity = "0";
//     // console.log(scroll);
//   }
// });