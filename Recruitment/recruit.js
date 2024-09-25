


// 返回警告未保存
function warning(){
    // let button = document.getElementById('warButton');
    var isJudge = confirm('尚未提交申请，是否确认返回');
    if(isJudge === true)console.log('true');//返回加入我们页面
    else console.log('false')
   
    
    
}

// 小窗提示，成功提交后跳转报名成功页面
function subMit(){
    var isJudge = confirm('信息是否确认无误');
    if(isJudge === true)//跳转提交成功页面
    {
        // 在新窗口中打开指定的 URL 地址
        //window.open("http://127.0.0.1:5500/Recruitment/submitSuccess.html");
        // 跳转到指定的 URL 地址
        location.assign("http://127.0.0.1:5500/Recruitment/submitSuccess.html");
    }
    else return
}
