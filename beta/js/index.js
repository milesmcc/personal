particlesJS.load("page", "js/particles.json");

function showContent(id){
  $(".expand-button").css({'color': "#eee"});
  $(".expand-button small").removeClass("blink");
  $(".expand").clearQueue().slideUp(1500, function(){
    $(id).slideDown(2000);
  });
  $(id + "-button").css({'color': "#aa00ff"});
  $(id + "-button small").addClass("blink");
}
