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
});
$(".btn-ban").click(function(){
  var aud=new Audio("punch.mp3");
  aud.play();
});

$(".sec").click(function() {
  var aud = new Audio("punch.mp3");
  aud.play();
});
// $(".rand-img").click(function() {
//   $(".rand-img").addClass("animate-piece");
//   var aud = new Audio("woosh.wav");
//   aud.play();
//   setTimeout(function() {
//     $(".rand-img").removeClass("animate-piece");
//   }, 2000);
// });
$(".btnn").click(function() {
  var aud = new Audio("gameOn.wav");
  aud.play();
  window.open("webGL.html");
});
$(".btn-ban").click(function() {
  window.open("https://morning-tundra-62034.herokuapp.com/");
});
// $(".navbutt").click(function(){
//   $(".navbar-collapse").style.textAlign="center";
// });
//https://www.youtube.com/
