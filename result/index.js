// 成功响应码
let successCode = 20000
// 失败响应码(未找到用户)
let failCode = 50000

let phoneNumber = JSON.parse(sessionStorage.getItem('phoneNumber'))
let qqNumber = JSON.parse(sessionStorage.getItem('qqNumber'))

async function render(){
  const res = await axios.get('http://8.148.22.124:11451/user/search', {
    params:{
      phoneNumber,
      qqNumber
    }
  })
  let code = res.data.code
  let userInfo = res.data.data
  // code = 50000
  // userInfo.firstStatus = 2
  // userInfo.secondStatus = 2
  // userInfo.thirdStatus = 2
  // 找不到用户 提示用户先前往报名
  if(code === failCode) {
    document.querySelector('.pleaseToApply').style.display = 'block'
    return
  }
  const content = document.querySelector('.content')
  const userName = document.querySelector('.userName')
  
  content.style.display = 'block'
  userName.innerHTML = userInfo.name
  document.querySelector('.status .statu0').style.display = 'block'
  document.querySelector('.message .msg-box:nth-child(1)').style.display = 'flex'
  // 1 --- 不通过    2 --- 通过
  // 第一次面试结果
  if(userInfo.firstStatus !== 0) {
    document.querySelector('.status .line1').style.display = 'block'
    document.querySelector('.status .statu1').style.display = 'block'
    document.querySelector('.message .msg-box:nth-child(2)').style.display = 'flex'
    if(userInfo.firstStatus === 1) {
      document.querySelector('.status .statu1').classList.add('icon-cuowu')
      document.querySelector('.message .msg-box:nth-child(2) .msg-statu').classList.add('fail')
      document.querySelector('.message .msg-box:nth-child(2) .msg-statu').innerHTML = '未通过'
      document.querySelector('.footer-fail').style.display = 'block'
      return
    } else {
      document.querySelector('.status .statu1').classList.add('icon-gou')
      document.querySelector('.message .msg-box:nth-child(2) .msg-statu').classList.add('success')
      document.querySelector('.message .msg-box:nth-child(2) .msg-statu').innerHTML = '已通过'
    }
  } else {
    return
  }
  // 第二次面试结果
  if(userInfo.secondStatus !== 0) {
    document.querySelector('.status .line2').style.display = 'block'
    document.querySelector('.status .statu2').style.display = 'block'
    document.querySelector('.message .msg-box:nth-child(3)').style.display = 'flex'
    if(userInfo.secondStatus === 1) {
      document.querySelector('.status .statu2').classList.add('icon-cuowu')
      document.querySelector('.message .msg-box:nth-child(3) .msg-statu').classList.add('fail')
      document.querySelector('.message .msg-box:nth-child(3) .msg-statu').innerHTML = '未通过'
      document.querySelector('.footer-fail').style.display = 'block'
      return
    } else {
      document.querySelector('.status .statu2').classList.add('icon-gou')
      document.querySelector('.message .msg-box:nth-child(3) .msg-statu').classList.add('success')
      document.querySelector('.message .msg-box:nth-child(3) .msg-statu').innerHTML = '已通过'
    }
  } else {
    return
  }
  // 第三次面试结果
  if(userInfo.thirdStatus !== 0) {
    document.querySelector('.status .line3').style.display = 'block'
    document.querySelector('.status .statu3').style.display = 'block'
    document.querySelector('.message .msg-box:nth-child(4)').style.display = 'flex'
    if(userInfo.thirdStatus === 1) {
      document.querySelector('.status .statu3').classList.add('icon-cuowu')
      document.querySelector('.message .msg-box:nth-child(4) .msg-statu').classList.add('fail')
      document.querySelector('.message .msg-box:nth-child(4) .msg-statu').innerHTML = '未通过'
      document.querySelector('.footer-fail').style.display = 'block'
      return
    } else {
      document.querySelector('.status .statu3').classList.add('icon-gou')
      document.querySelector('.message .msg-box:nth-child(4) .msg-statu').classList.add('success')
      document.querySelector('.message .msg-box:nth-child(4) .msg-statu').innerHTML = '已通过'
      // 三次面试均通过 展示欢迎加入Allspark
      document.querySelector('.footer-success').style.display = 'block'
    }
  } else {
    return
  }
}
// 渲染页面
render()

// 点击返回
document.querySelector('.return').addEventListener('click', () => {
  history.go(-1)
})