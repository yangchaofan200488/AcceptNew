// js源代码

// 导航栏功能
function showPage(pageId) {
    // 获取所有页面元素
    let pages = document.querySelectorAll('.page');
    
    // 隐藏所有页面
    pages.forEach(function(page) {
        page.classList.remove('active');
    });

    // 显示被点击的页面
    document.getElementById(pageId).classList.add('active');
}

// 首页轮播图
setTimeout(function auto(){
    // 获取当前正在显示的图片
    const show=document.querySelector(".img-list .show-img")

    // 获取当前正在显示的元素的下一个兄弟元素(获取下一个图片)如果已经是最后一个图片了，就获取第一个图片
    const show_next=show.nextElementSibling||document.querySelector(".carousel .img-list li")

    // 修改显示状态
    show.classList.remove("show-img")
    show_next.classList.add("show-img")

    setTimeout(auto,3000)
},3000)