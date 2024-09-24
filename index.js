// 首页轮播图
setTimeout(function auto() {
  // 获取当前正在显示的图片
  const show = document.querySelector(".img-list .show-img");

  // 获取当前正在显示的元素的下一个兄弟元素(获取下一个图片)如果已经是最后一个图片了，就获取第一个图片
  const show_next =
    show.nextElementSibling || document.querySelector(".carousel .img-list li");

  // 修改显示状态
  show.classList.remove("show-img");
  show_next.classList.add("show-img");

  setTimeout(auto, 3000);
}, 3000);

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
