
$(function(){
    $('.menu_btn').click(function(){
        $('.menu_ul').toggleClass('active');
    })

    $(window).resize(function(){
        if($(window).width() < 992){
            $('.menu_ul').removeClass('active');
        }
    })


    $('.teacher_box').click(function(){
      $(this).toggleClass('active');
      $('.teacher_box').removeClass('active');
      $(this).addClass('active');
    })



  /////////////// slider ///////////////////


  function slider(){
    let btn_left = document.querySelector('.left');
    let btn_right = document.querySelector('.right');
    let slidebox = document.querySelectorAll('.item_box,.item_box2,.item_box3');
    let i = 0;

    btn_left.addEventListener('click', function(){
        slidebox[i].classList.remove('active');
        i--;
        if(i < 0){i = slidebox.length - 1}
        slidebox[i].classList.add('active');
        
    })

    btn_right.addEventListener('click', function(){
      slidebox[i].classList.remove('active');
      i++;
      if(i > slidebox.length - 1){ i = 0};
      slidebox[i].classList.add('active');
  })

  
}slider();






function slideR(){
  let btn_left = document.querySelector('.lefT');
  let btn_right = document.querySelector('.righT');
  let slidebox = document.querySelectorAll('.item_boX');
  let i = 0;

  btn_left.addEventListener('click', function(){
      slidebox[i].classList.remove('active');
      i--;
      if(i < 0){i = slidebox.length - 1}
      slidebox[i].classList.add('active');
      
  })

  btn_right.addEventListener('click', function(){
    slidebox[i].classList.remove('active');
    i++;
    if(i > slidebox.length - 1){ i = 0};
    slidebox[i].classList.add('active');
})

}slideR();

 let link = $('.menu_ul ul a');

   link.on('click', function(e){
   e.preventDefault;

   link.removeClass('active');
   let selector = $(this).addClass('active').attr('href');
   let target = $(selector);

   $('html, body').animate({scrollTop: target.offset().top - 50}, 800);
 })

 $('.scrol a').click(function(){
  $('body,html').animate({scrollTop: 0}, 800);

 })

        /* ------- card ---------- */

        



})  