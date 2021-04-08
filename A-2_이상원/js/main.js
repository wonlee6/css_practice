$(function () {
  $(".sub, .sub_cover").hide();

  $(".main > li").mouseover(function () {
    $(".ad", this).addClass("add");
    $(".sub, .sub_cover").stop().slideDown();
  });
  $(".main > li").mouseout(function () {
    $(".ad", this).removeClass("add");
    $(".sub, .sub_cover").stop().slideUp();
  });

  //slide
  $(".slide > div > p").not(":eq(0)").css("left", "1200px");
  var now = 0;
  var slideImg = 2;

  function slide() {
    now = now == slideImg ? 0 : (now += 1);
    $(".slide > div > p")
      .eq(now - 1)
      .animate({ left: "-1200px" }, 1000);
    $(".slide > div > p")
      .eq(now)
      .animate({ left: "0px" }, 1000, function () {
        $(".slide > div > p")
          .not(":eq(" + now + ")")
          .css("left", "1200px");
      });
  }
  setInterval(slide, 3000);

  $(".popup_cover").hide();
  $(".click").click(function () {
    $(".popup_cover").show();
  });
  $(".button_close > button").click(function () {
    $(".popup_cover").hide();
  });

  //패밀리사이트
  $(".familysite").change(function () {
    var sel = $(":selected").val();
    // alert(sel);
    if (sel != "none") {
      window.open(sel);
    } else {
      return false;
    }
  });
});
