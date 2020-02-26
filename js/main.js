$(function() {

  
  // top-area スクロール
  //---------------------
  $(".top-area a").click(function(){
    var href = $(this).attr("href");
    var position = $(href).offset().top;

    $("html, body").animate({scrollTop: position}, 1000);
  });

  // quiz-top.html 
  // <div class="quiz-area">内の各ボタン処理
  // -------------------


  // ボタンクリックで答えの表示非表示を行う処理
  // ーーーーーーーーーーーーーーーーーーーーーー
  $('.quiz-contents input').each(function(i){
    var i = i + 1;
    $('.button' + i).click(function(){
      $('.answer' + i).toggle(700);
    });
  });

  /*
  ボタンクリックで答えを表示非表示処理の残骸①
  ーーーーーーーーーーーーーーーーーーーーーー
  for(var i = 1; i < buttons.length; i++) {
    $buttons + [i].click(function(){
      $answers + [i].fadeIn(700);
    });
  }

  残骸②
  var buttons = document.getElementsByClassName('button');
  var answers = document.getElementsByClassName('answer1');
  for(var i = 1; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function() {
      answers.fadeIn(700);
    }, false);
  }

  残骸③
  $('.button1').click(function(){
    $('.answer1').fadeIn(700);
  });
 
  $('.button2').click(function(){
    $('.answer2').fadeIn(700);
  });
 
  $('.button3').click(function(){
    $('.answer3').fadeIn(700);
  });
 
  $('.button4').click(function(){
    $('.answer4').fadeIn(700);
  });

  */



  // answer-hikonyan.html内処理
  // <div class="quiz-area">内の各ボタン処理
  // -------------------

  $('.ans-contents').hide().fadeIn(1500);


});



