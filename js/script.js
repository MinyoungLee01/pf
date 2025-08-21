const circles = document.querySelectorAll(".circle");
const circles2 = document.querySelectorAll(".circle2");
let mouseX = 0,
  mouseY = 0;
let currentX = 2000,
  currentY = 500;
let current2X = -500,
  current2Y = 0;
document.addEventListener("mousemove", function (e) {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

function bganimate() {
  currentX += (mouseX - currentX) * 0.005;
  currentY += (mouseY - currentY) * 0.005;
  current2X += (mouseX - current2X) * 0.02;
  current2Y += (mouseY - current2Y) * 0.02;
  circles.forEach((circle) => {
    circle.style.left = currentX + "px";
    circle.style.top = currentY + "px";
  });
  circles2.forEach((circle) => {
    circle.style.left = current2X + "px";
    circle.style.top = current2Y + "px";
  });
  requestAnimationFrame(bganimate);
}

bganimate();

$(function () {
  //라이트모드
  $("header .dark").click(function () {
    $("body").toggleClass("light");
  });

  let vh100 = $(window).height();
  let vh200 = vh100 * 2;
  let vh50 = vh100 * 0.5;

  $(window).resize(function () {
    vh100 = $(window).height();
    vh200 = vh100 * 2;
    vh50 = vh100 * 0.5;
    // 모바일 호버 방지
    if ($('.viewbtn').css('display') === 'none') {
      $('main .works .listbox .list').addClass('click');
      $('main .works .listbox .list').removeClass('hover');
      $('.viewbtn').text("VIEW BY: CLICK");
    }
  });

  // 메뉴버튼 스크롤 이동
  $(".hBtn0").click(function () {
    $("html, body").stop().animate(
      {
        scrollTop: 0,
      },
      400
    );
  });
  $(".hBtn1").click(function () {
    $("html, body").stop().animate(
      {
        scrollTop: vh100,
      },
      400
    );
  });
  $(".hBtn2").click(function () {
    $("html, body").stop().animate(
      {
        scrollTop: vh200,
      },
      400
    );
  });

  // 헤더 크기변화, ul 나타나기, 헤더 색상추가
  $(window).scroll(function () {
    let scrollY = $(this).scrollTop();
    if (scrollY >= vh200) {
      $("header").addClass("on bcc");
      $("main .works nav").addClass("on");
    } else {
      $("header").removeClass("on bcc");
      $("main .works nav").removeClass("on");
    }
    // 제목, 어바웃 미 글자 투명도 조절
    if (scrollY >= vh50) {
      $(".stickybox").addClass("on");
      $("main .home .titlebox, main .home .textbox").addClass("off");
    } else {
      $(".stickybox").removeClass("on");
      $("main .home .titlebox, main .home .textbox").removeClass("off");
    }
  });

  // 작업물 필터
  $("main .works ul li").click(function () {
    if ($(this).hasClass("all")) {
      $("main .works ul li").addClass("on");
    } else {
      $("main .works ul li").removeClass("on");
      $(this).addClass("on");
    }

    if ($("main .works ul li.w").hasClass("on")) {
      $("main .works .listbox .list").hide();
      $("main .works .listbox .list.w").show();
    } else if ($("main .works ul li.u").hasClass("on")) {
      $("main .works .listbox .list").hide();
      $("main .works .listbox .list.u").show();
    } else if ($("main .works ul li.g").hasClass("on")) {
      $("main .works .listbox .list").hide();
      $("main .works .listbox .list.g").show();
    }

    if ($(this).hasClass("all")) {
      $("main .works .listbox .list").show();
    }
  });

  // 작업물 보기
  $(".viewbtn").click(function () {
    $(this).toggleClass("click");
    if ($(this).hasClass("click")) {
      $(this).text("VIEW BY: CLICK");
      $("main .works .listbox").removeClass("hover");
      $("main .works .listbox").addClass("click");
      $("main .works .listbox .list").removeClass("on");
    } else {
      $(this).text("VIEW BY: HOVER");
      $("main .works .listbox").addClass("hover");
      $("main .works .listbox").removeClass("click");
      $("main .works .listbox .list").removeClass("on");
    }
  });
  $(".viewbtn").mouseenter(function () {
    if ($(this).hasClass("click")) {
      $(this).text("VIEW BY: HOVER");
    } else {
      $(this).text("VIEW BY: CLICK");
    }
  });
  $(".viewbtn").mouseleave(function () {
    if ($(this).hasClass("click")) {
      $(this).text("VIEW BY: CLICK");
    } else {
      $(this).text("VIEW BY: HOVER");
    }
  });

  // 작업물 열기
  $("main .works .listbox .list").click(function () {
    $(this).toggleClass("on");
  });
  $(".expandbtn").click(function () {
    $(this).toggleClass("on");
    if ($(this).hasClass("on")) {
      $(this).text("COLLAPSE ALL");
      $("main .works .listbox .list").addClass("on");
    } else {
      $(this).text("EXPAND ALL");
      $("main .works .listbox .list").removeClass("on");
    }
  });

  // 모바일 호버 방지
  if ($('.viewbtn').css('display') === 'none') {
    $('main .works .listbox .list').addClass('click');
    $('main .works .listbox .list').removeClass('hover');
    $('.viewbtn').text("VIEW BY: CLICK");
  }

  // 서브페이지 이미지 클릭
  $(".flexsection img").click(function () {
    $(this).toggleClass("on");
    if ($(this).hasClass('on')) {
      $('body').css({ overflow: "hidden" })
    } else {
      $('body').css({ overflow: "auto" })
    }
  });
});
