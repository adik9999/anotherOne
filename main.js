$(".sec").css("cursor", "pointer");
$(".seb").css("cursor", "pointer");

$(".seb").click(function() {
  var aud = new Audio("punch.mp3");
  aud.play();
});
$(".seb").mouseover(function(){
  var aud=new Audio("watson.mp3");
  aud.play();
});
$(".btnn").mouseover(function(){
  var aud=new Audio("watson.mp3");
  aud.play();
});
$(".sec").mouseover(function(){
  var aud=new Audio("watson.mp3");
  aud.play();
});
$(".fa-chess").mouseover(function(){
  var aud=new Audio("watson.mp3");
  aud.play();
});
$(".btn-ban").mouseover(function(){
  var aud=new Audio("watson.mp3");
  aud.play();
});
$(".fa-chess").click(function(){
  var aud=new Audio("punch.mp3");
  aud.play();
  window.open("https://en.wikipedia.org/wiki/Chess",);
});
$(".btn-ban").click(function(){
  var aud=new Audio("punch.mp3");
  aud.play();
});

$(".sec").click(function() {
  var aud = new Audio("punch.mp3");
  aud.play();
});
$(".rand-img").click(function() {
  $(".rand-img").addClass("touch-img");
  var aud = new Audio("woosh.wav");
  aud.play();
  setTimeout(function() {
    $(".rand-img").removeClass("touch-img");
  },1000 );
});
$(".btnn").click(function() {
  var aud = new Audio("gameOn.wav");
  aud.play();
  window.open("https://adik9999.github.io/baye2/");
});
$(".btn-ban").click(function() {
  window.open("https://morning-tundra-62034.herokuapp.com/");
});
$(".btnnr").click(function(){
  window.open("instruct.html");
});
// $(".navbutt").click(function(){
//   $(".navbar-collapse").style.textAlign="center";
// });
//https://www.youtube.com/
