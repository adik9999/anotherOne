$(".sec").css("cursor", "pointer");
$(".seb").css("cursor", "pointer");

$(".seb").click(function() {
  var aud = new Audio("click_sound.wav");
  aud.play();
});
$(".sec").click(function() {
  var aud = new Audio("click_sound.wav");
  aud.play();
});
$(".rand-img").click(function() {
  $(".rand-img").addClass("animate-piece");
  var aud = new Audio("woosh.wav");
  aud.play();
  setTimeout(function() {
    $(".rand-img").removeClass("animate-piece");
  }, 2000);
});
$(".btnn").click(function() {
  var aud = new Audio("gameOn.wav");
  aud.play();
  window.open("webGL.html");
});
$(".btn-ban").click(function() {
  window.open("http://localhost:3000/");
});

//https://www.youtube.com/
