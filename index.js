
window.onload = function () {
  if (!sessionStorage.getItem("flag")) {
    // 如果没有加载过动画，播放动画
    setTimeout(() => {
      document.querySelector(".outter").style.display = "none";
      document.querySelector(".home").style.display = "block";
      // 设置标志，表示已经加载过
      sessionStorage.setItem("flag", "true");
    }, 3000); // 这里设置为3秒
  } else {
    // 直接显示主页面
    document.querySelector(".outter").style.display = "none";
    document.querySelector(".home").style.display = "block";
  }
};

// let isMobile = /Mobile|Android|iP(ad|hone)/i.test(navigator.userAgent);
//   if (!isMobile) {
//     // 如果不是移动设备，就重定向到拒绝访问页面
//     window.location.href = "./error.html";
//   }
