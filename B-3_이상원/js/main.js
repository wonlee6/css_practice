$(function () {
  $(".sub").hide();

  $(".main > li").mouseover(function () {
    $(".ad", this).addClass("add");
    $(".sub", this).stop().slideDown();
  });
  $(".main > li").mouseout(function () {
    $(".ad", this).removeClass("add");
    $(".sub", this).stop().slideUp();
  });

  //slide
  $(".slide > div > p").not(":eq(0)").css("top", "300px");
  var now = 0;
  var slideImg = 2;

  function slide() {
    now = now == slideImg ? 0 : (now += 1);
    $(".slide > div > p")
      .eq(now - 1)
      .animate({ top: "-300px" }, 1000);
    $(".slide > div > p")
      .eq(now)
      .animate({ top: "0px" }, 1000, function () {
        $(".slide >div>p ")
          .not(":eq(" + now + ")")
          .css("top", "300px");
      });
  }
  setInterval(slide, 2000);

  $(".popup_cover").hide();

  $(".click").click(function () {
    $(".popup_cover").show();
  });
  $(".button_close > button").click(function () {
    $(".popup_cover").hide();
  });
});
