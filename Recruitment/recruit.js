


// 返回警告未保存
function warning(){
    // let button = document.getElementById('warButton');
    var retA = document.getElementById('retA');
    var isJudge = confirm('尚未提交申请，是否确认返回');
    if(isJudge === true) retA.href = '../02-join/join.html';//返回加入我们页面
    else retA.href = 'javascript:void(0)';
    

    
    
}

// 小窗提示，成功提交后跳转报名成功页面
function subMit(){
    var isJudge = confirm('信息是否确认无误');
    var btn = document.getElementById('subBtn');
    if(isJudge === true)//跳转提交成功页面
    {
        btn.href = './submitSuccess.html'
        
    }
    else btn.href = 'javascript:void(0)'
    
}
