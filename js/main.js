$(function() {

  // var buttons = document.getElementsByClassName('button');
  // var answers = document.getElementsByClassName('answer1');
  // for(var i = 1; i < buttons.length; i++) {
  //   buttons[i].addEventListener('click', function() {
  //     answers.fadeIn(700);
  //   }, false);
  // }

  //同じような処理だからまとめたいけど昨日は無理でした。
  //課題完了を最優先し、そのあとに課題解決のアクションをとる


  // quiz-top.html 
  // <div class="quiz-area">内の各ボタン処理
  // -------------------

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


  // answer-hikonyan.html内処理
  // <div class="quiz-area">内の各ボタン処理
  // -------------------

  $('.ans-contents').hide().fadeIn(1500);




});



