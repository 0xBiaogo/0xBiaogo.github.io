$(document).ready(function() {
  $('nav a').mousemove(function() {
    $(this).shuffleLetters();
  });
});

$(document).ready(function() {
  // 初始标题
  var originalTitle = $('title').text();
  var intervalId; // 用于存储循环的ID
  $('title').shuffleLetters();

  // 获取网页名称
  function getPageName() {
    var url = window.location.href;
    var pageName = url.substring(url.lastIndexOf("/") + 1, url.lastIndexOf("."));
    return pageName;
  }

  // 开始循环变化标题
  function startTitleAnimation() {
    intervalId = setInterval(function() {
      var pageTitle = "Biaogo$ " + getPageName();
      $('title').text(pageTitle+"_");
      setTimeout(function() {
        $('title').text(pageTitle);
      }, 500);
      setTimeout(function() {
        $('title').text(pageTitle);
      }, 1000);
    }, 1500);
  }

  // 停止循环变化标题
  function stopTitleAnimation() {
    clearInterval(intervalId);
  }

  // 标题离开标签页时开始循环变化标题
  $(window).on('blur', function() {
    startTitleAnimation();
  });

  // 标题回到标签页时停止循环变化标题
  $(window).on('focus', function() {
    stopTitleAnimation();
    $('title').text(originalTitle);
    $('title').shuffleLetters(); // 恢复初始标题
  });
});

$(window).on('load', function() {
  setTimeout(function() {
    $('.loader-wrap').fadeOut('slow');
  }, 1000);
});

$(".sliding-menu li a.nav").parent("li").addClass("submen-dec");
var nbw = $(".nav-button"),
    nhw = $(".nav-holder"),
    nho = $(".nav-overlay");
function showMenu() {
  nho.fadeIn(500);
  nhw.animate({
      left: "0",
      opacity: 1
  }, {
      queue: false,
      duration: 600,
      easing: "easeInOutExpo"
  });
  nbw.removeClass("but-hol").addClass("cmenu");
  setTimeout(function () {
      $(".nav-title span").shuffleLetters({});
  }, 300);
}
function hideMenu() {
  nhw.animate({
      left: "-1064px",
      opacity: 0
  }, {
      queue: false,
      duration: 600,
      easing: "easeInOutExpo"
  });
  nbw.addClass("but-hol").removeClass("cmenu");
  nho.fadeOut(500);
}
nbw.on("click", function () {
  if (nbw.hasClass("but-hol")) showMenu();
  else hideMenu();
  return false;
});
nho.on("click", function () {
  hideMenu();
  return false;
});
