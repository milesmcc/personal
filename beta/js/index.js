particlesJS.load("page", "js/particles.json");

function showContent(id) {
  $(".expand-button").css({
    'color': "#eee"
  });
  $(".expand-button small").removeClass("blink");
  $(".expand").slideUp(1500);
  setTimeout(
    function() {}, 1500);
  $(id).clearQueue().slideDown(2000);
  $(id + "-button").css({
    'color': "#aa00ff"
  });
  $(id + "-button small").addClass("blink");
}
