$(window).on('load resize', function(){
  var winW = $(window).width();
  var devW = 767;
  if (winW <= devW) {
    //767px以下の時の処理
    const swiper = new Swiper('.swiper', {
      // Optional parameters
      direction: 'horizontal',
      loop: true,
    
      // slidesPerView: 2,
      spaceBetween: 20,
      width: 274,
    
      // If we need pagination
      pagination: {
        el: '.swiper-pagination',
      },
    });
  } else {
    //768pxより大きい時の処理
    const swiper = new Swiper('.swiper', {
      // Optional parameters
      direction: 'horizontal',
      loop: true,
    
      // slidesPerView: 3,
      spaceBetween: 40,
      width: 400,
    
      // If we need pagination
      pagination: {
        el: '.swiper-pagination',
      },
    });
  }
});




// wow
new WOW().init();


// ドロワーメニュー
jQuery('.drawer-icon').on('click', function(e) {
  e.preventDefault();

  jQuery('.drawer-icon').toggleClass('is-active');
  jQuery('.drawer-content').toggleClass('is-active');
  jQuery('.drawer-background').toggleClass('is-active');

  return false;
});


// スムーススクロール
jQuery('a[href^="#"]').on('click', function () {

  var header = jQuery('.header').innerHeight();
  var id = jQuery(this).attr('href');
  var position = 0;
  if ( id != '#' ) {
    var position = jQuery(id).offset().top - header;
  };
  console.log(id);
  console.log(position);
  jQuery('body,html').animate({
    scrollTop: position
  }, 500);
  return false;
});


// フローティングボタン
jQuery(window).on('scroll', function() {
  console.log();
  if ( 100 < jQuery(this).scrollTop() ) {
    jQuery('.to-top').addClass('is-show')
  } else {
    jQuery('.to-top').removeClass('is-show')
  }
});


// google form
$(document).ready(function () {

  let $form = $('#js-form');
  $form.submit(function (e) {  
    $.ajax({
      url: $form.attr('action'),
      data: $form.serialize(),
      type: "POST",
      dataType: "xml",
      statusCode: {
        // 送信に成功したとき
        0: function () {
          $form.slideUp()
          $('#js-success').slideDown()
        },
        // 送信に失敗したとき
        200: function () {
          $form.slideUp()
          $('#js-error').slideDown()
          
        }
      }
    });
    e.preventDefault();
    return false;
  });
  let $submit = $('#js-submit');
  $('#js-form input, #js-form textarea').on('change', function() {
    if(
      $('#js-form input[name="entry.1382828176"]').val() !== "" &&
      $('#js-form input[name="entry.1885545527"]').val() !== "" &&
      $('#js-form input[name="entry.208422601"]').prop('checked') === true
    ) {
      // 全て入力された時
      console.log($('#js-form input[name="entry.1382828176"]').val() !== "")
      console.log($('#js-form input[name="entry.1885545527"]').val() !== "")
      console.log($('#js-form input[name="entry.208422601"]').prop('checked'))
      // console.log($submit.prop('disabled', false))
      // console.log($submit.addClass('is-active'))
      $submit.prop('disabled', false)
      $submit.addClass('is-active')
      // console.log($submit.prop('disabled', false))
      // console.log($submit.addClass('is-active'))
    } else {
      // 入力されていない時
      $submit.prop('disabled', true)
      $submit.removeClass('is-active')
      console.log($submit.prop('disabled', true))
      console.log($submit.removeClass('is-active'))
    }
  });
});


// アコーディオン
jQuery('.faqs__q').on('click', function () {
  jQuery(this).next().slideToggle();
  jQuery(this).children('.faqs__icon').toggleClass('is-open');
});
