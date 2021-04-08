$(function () {
  //메뉴
  $(".sub, .sub_bg").hide();

  $(".main > li").mouseover(function () {
    $(".ad", this).addClass("add");
    $(".sub, .sub_bg").stop().slideDown();
  });
  $(".main > li").mouseout(function () {
    $(".add", this).removeClass();
    $(".sub, .sub_bg").stop().slideUp();
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
        $(".slide >div>p ")
          .not(":eq(" + now + ")")
          .css("left", "1200px");
      });
  }

  setInterval(slide, 3000);

  // 공지사항, 갤러리
  $(".ng_cover > ul >li").click(function () {
    $(".sub_ng").hide();
    $(".sub_ng", this).show();

    $(".tab").removeClass("hovertab");
    $(".tab", this).addClass("hovertab");
    return false;
  });

  // 팝업
  $(".popup_cover").hide();

  $(".click").click(function () {
    $(".popup_cover").show();
  });
  $(".button_close > button").click(function () {
    $(".popup_cover").hide();
  });
});
