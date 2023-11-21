//header
const menuLeft = [-15, 61, 137, 213, 289, 395, 526];

const menuListItems = $(".header .menu-list li");
const subMenuGroupItems = $(".header .sub-menu-group li");

for (let i = 0; i < menuLeft.length; i++) {
  $(`.header .menu-list li:nth-child(${i + 1})`).hover(
    () => {
      $(":root").css("--sub-menu-left", `${menuLeft[i]}px`);
      $(`.header .sub-menu-group li`).removeClass("on");
      $(`.header .sub-menu-group li:nth-child(${i + 1})`).addClass("on");
    },
    () => {
      if (!$(this).hasClass("depth2")) {
        $(`.header .sub-menu-group li`).removeClass("on");
      }
    }
  );
}

$(window).scroll(function () {
  if ($(this).scrollTop() === 0) {
    $(".header").removeClass("sticky");
  } else {
    $(".header").addClass("sticky");
  }
});

//visual
$(".sc-visual .circle.n4").on("animationend", function () {
  $(".sc-visual .circle-group").removeClass("on");
  $(".sc-visual .col-txt").removeClass("on");
  $(".sc-visual .rollingSlideBox").removeClass("on");
  setTimeout(function () {
    $(".sc-visual .circle-group").addClass("on");
    $(".sc-visual .col-txt").addClass("on");
    $(".sc-visual .rollingSlideBox").addClass("on");
  }, 100);
});

//service
let ww = $(window).width();
let swiper1 = undefined;

function initSwiper() {
  if (ww < 989 && swiper1 == undefined) {
    swiper1 = new Swiper(".sc-service .swiper", {
      slidesPerView: "auto",
      spaceBetween: 15,
      // centeredSlides: centerSlides(),
      // autoplay: {
      //   delay: 500,
      //   disableOnInteraction: false,
      // },
      pagination: {
        el: ".sc-service .swiper-pagination",
        type: "progressbar",
      },
    });
  } else if (ww >= 989 && swiper1 != undefined) {
    swiper1.destroy();
    swiper1 = undefined;
  }
}

initSwiper();

$(window).on("resize", function () {
  ww = $(window).width();
  initSwiper();
});

//shopping
const tabLeft_L = [0, 97, 194, 291, 388];
const tabLeft_M = [0, 92, 185, 277, 370];
const tabLeft_S = [0, 90, 180, 269, 359];

function updateTabEffectLeft(index) {
  const screenWidth = window.innerWidth;

  if (screenWidth > 1280) {
    $(":root").css("--tab-effect-left", `${tabLeft_L[index]}px`);
  } else if (screenWidth > 989) {
    $(":root").css("--tab-effect-left", `${tabLeft_M[index]}px`);
  } else {
    $(":root").css("--tab-effect-left", `${tabLeft_S[index]}px`);
  }
}

$(".sc-shopping .tab-item").click(function () {
  $(".sc-shopping .tab-item").removeClass("on");
  $(this).addClass("on");

  updateTabEffectLeft($(this).index());

  $(".sc-shopping .step-desc").removeClass("on");
  $(`.sc-shopping .step-desc.n${$(this).index() + 1}`).addClass("on");
});

$(window).resize(function () {
  const selectedIndex = $(".sc-shopping .tab-item.on").index();
  updateTabEffectLeft(selectedIndex);
});

//footer
new Swiper(".footer .swiper", {
  slidesPerView: 1,
  direction: "vertical",
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
});

$(".family-site .select-button").click(function () {
  $(".family-site").toggleClass("on");
});

$(".footer .menu-item").click(function (e) {
  e.preventDefault();
  if ($(this).hasClass("on")) {
    $(this).removeClass("on");
  } else {
    $(".footer .menu-item").removeClass("on");
    $(this).addClass("on");
  }
});

//footer mo
$(".header .more-btn").click(function (e) {
  e.preventDefault();
  $(this).toggleClass('on');
  $('.header .menu-group-mo').toggleClass('on');
});


$(".header .menu-group-mo .depth1 a").click(function (e) {
  e.preventDefault();
  $(this).parent().toggleClass('on');
  $(this).siblings('.depth2').slideToggle();
});

//animation
gsap.from(".sc-service .tit", {
  scrollTrigger: ".sc-service .tit",
  y: 50,
  autoAlpha: 0,
});

gsap.from(".sc-service .swiper", {
  scrollTrigger: ".sc-service .swiper",
  y: 50,
  autoAlpha: 0,
  duration: 2,
});

gsap.from(".sc-service .sub-group", {
  scrollTrigger: ".sc-service .sub-group",
  y: 50,
  autoAlpha: 0,
});

gsap.from(".sc-shopping", {
  scrollTrigger: ".sc-shopping",
  y: 50,
  autoAlpha: 0,
});

gsap.from(".sc-makeshop", {
  scrollTrigger: ".sc-makeshop",
  y: 50,
  autoAlpha: 0,
});

gsap.from(".sc-shortcut", {
  scrollTrigger: ".sc-shortcut",
  y: 50,
  autoAlpha: 0,
});
