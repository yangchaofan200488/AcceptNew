
// 返回警告未保存
function warning(){
    // let button = document.getElementById('warButton');
    var retA = document.getElementById('retA');
    var isJudge = confirm('尚未提交申请，是否确认返回');
    if(isJudge === true) retA.href = '../02-join/join.html';//返回加入我们页面
    else retA.href = 'javascript:void(0)';
    

    
    
}


//文本域限制字数
function textForbid(){
    var textarea = document.querySelector('#myTextarea');
    var charCount = document.getElementById('charCount');  
    var maxLength = 100; // 设置最大字数限制  
    var currentLength;
    textarea.addEventListener("input", function() {  
       // console.log(textarea.value.length);
      currentLength = textarea.value.length;  
      charCount.innerHTML = `${currentLength}/${maxLength}`;  
      if (currentLength > maxLength) {  
        textarea.value = textarea.value.slice(0, maxLength); // 如果超过限制，则截断文本  
      }  
    });
}




// 小窗提示，成功提交后跳转报名成功页面
function subMit(){
    var btn = document.getElementById('subBtn');
    const relName = document.querySelector('.relName').value.replace(/\s/g, '')
    const speciality = document.querySelector('.speciality').value.replace(/\s/g, '')
    const className = document.querySelector('.className').value.replace(/\s/g, '')
    const qqNumber = document.querySelector('.qqNumber').value.replace(/\s/g, '')
    const phoneNumber = document.querySelector('.phoneNumber').value.replace(/\s/g, '')
    const phoneReg = /^1\d{10}$/
    const qqReg = /^[1-9][0-9]{4,14}$/
    if(!relName || !speciality || !className || !qqNumber) {
      btn.href = 'javascript:void(0)';
      alert('请将信息填写完整!!!');
      return
    }
    if(!phoneReg.test(phoneNumber)) {
      alert('请填写正确的手机号');
      btn.href = 'javascript:void(0)';
      return
    }
    if(!qqReg.test(qqNumber)) {
      alert('请填写正确的qq号');
      btn.href = 'javascript:void(0)';
      return
    }
    var isJudge = confirm('信息是否确认无误');
     

    
    
    if(isJudge === true)//跳转提交成功页面
    {
         btn.href = './submitSuccess.html'
         //http://8.148.22.124:11451/doc.html#/default/user-controller/addUsingPOST   接口
         //添加用户发送请求


        //  var params = new URLSearchParams();
        //  params.append('name','nameTrue');
        //  params.append('className','sumName');//????
        //  params.append('qqNumber','qqNum');
        //  params.append('phoneNumber','phNum');
        //  params.append('CLevel','cLevel');
        //  params.append('remarks','remarks');

        //获取需要的数据发送请求
        const nameTrue = document.getElementById('nameTrue').value;
        const majorName = document.getElementById('majorName').value;
        const clasName = document.getElementById('clasName').value;
        const qqNum = document.getElementById('qqNum').value;
        const phNum = document.getElementById('phNum').value;
        const cLevel = document.getElementById('myTextarea').value;
        const remarks = document.getElementById('remarks').value;

        //将专业班级拼写在一起
        const sumName = majorName + clasName;

        //获取被选中的方向
        const intention = document.getElementById('intention');
        var index = intention.options.selectedIndex;
        var val = intention.options[index].value;
        var inten = val;

        //获取报名时间
        const da = document.getElementById('da');
        var index = da.options.selectedIndex;
        var va = da.options[index].value;
        //var ri = typeof va == 'string' ? JSON.parse(va) : va;

        const ti = document.getElementById('ti');
        var index = ti.options.selectedIndex;
        var v = ti.options[index].value;
        //var shijian = typeof v == 'string' ? JSON.parse(v) : v;

        var firsttime = v + va;
        var firstTime = firsttime;
        //console.log();

        //转对象
        //  var params = new URLSearchParams();
        //  params.append('name','nameTrue');
        //  params.append('className','sumName');//????
        //  params.append('qqNumber','qqNum');
        //  params.append('phoneNumber','phNum');
        //  params.append('CLevel','cLevel');
        //  params.append('remarks','remarks');
        //  params.append('firstTime','firstTime');
        //  params.append('intention','inten');

       
        //发送请求
        // async function render(){
        //   const res = await axios.post('http://8.148.22.124:11451/user/add', {
        //     // params:{
        //       name:nameTrue,
        //       className:sumName,
        //       CLevel:cLevel,
        //       firstTime:firstTime,
        //       intention:inten,
        //       phoneNumber:phNum,
        //       qqNumber:qqNum,
        //       remarks:remarks
        //     //}
        //   })
        //   console.log(res);
        //   console.log(nameTrue);


          // 发起一个post请求
          async function render() {
            await axios({
              method: "POST",
              url: "http://8.148.22.124:11451/user/add",
              data: {
                name:nameTrue,
                className:sumName,
                CLevel:cLevel,
                firstTime:firstTime,
                intention:inten,
                phoneNumber:phNum,
                qqNumber:qqNum,
                remarks:remarks
              }
          }).then(function (response) {
            console.log(response);
          }).catch(function (error) {
            console.log(error);
          });;

          //console.log(res);
          
        
            console.log(JSON.stringify(nameTrue));
            
          }

        render();



// //未命名接口
// POST /user/add
// 接口ID：219402577
// 接口地址：https://app.apifox.com/link/project/5230307/apis/api-219402577





        
    }
    else btn.href = 'javascript:void(0)'
    
}



// //获取需要的数据发送请求
// const nameTrue = document.getElementById('nameTrue').value;
// const majorName = document.getElementById('majorName').value;
// const clasName = document.getElementById('clasName').value;
// const qqNum = document.getElementById('qqNum').value;
// const phNum = document.getElementById('phNum').value;
// const cLevel = document.getElementById('myTextarea').value;
// const remarks = document.getElementById('remarks').value;

// //将专业班级拼写在一起
// const sumName = majorName + clasName;

// //获取被选中的方向
// const intention = document.getElementById('intention');
// var index = intention.options.selectedIndex;
// var val = intention.options[index].value;
// var inten = val;

// //获取报名时间
// const da = document.getElementById('da');
// var index = da.options.selectedIndex;
// var va = da.options[index].value;
// //var ri = typeof va == 'string' ? JSON.parse(va) : va;

// const ti = document.getElementById('ti');
// var index = ti.options.selectedIndex;
// var v = ti.options[index].v;
// //var shijian = typeof v == 'string' ? JSON.parse(v) : v;

// var firsttime = v + va;
// var firstTime = firsttime;
// //console.log();

// //发送请求
// async function render(){
//   const res = await axios.post('http://8.148.22.124:11451/user/add', {
//     params:{
//       name:nameTrue,
//       className:sumName,
//       CLevel:cLevel,
//       firstTime:firstTime,
//       intention:inten,
//       phoneNumber:phNum,
//       qqNumber:qqNum,
//       remarks:remarks
//     }
//   })
//   console.log(res.data.code);
//   console.log(nameTrue);
  
// }
