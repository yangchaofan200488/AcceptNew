// 返回警告未保存
function warning(){
  const isJudge = confirm('尚未提交申请，是否确认返回');
  if(isJudge) {
    history.go(-1)
  }
}

// 跳转查询结果页面
function toResult(){
  const relName = document.querySelector('.relName').value.replace(/\s/g, '')
  const speciality = document.querySelector('.speciality').value.replace(/\s/g, '')
  const className = document.querySelector('.className').value.replace(/\s/g, '')
  const qqNumber = document.querySelector('.qqNumber').value.replace(/\s/g, '')
  const phoneNumber = document.querySelector('.phoneNumber').value.replace(/\s/g, '')
  const phoneReg = /^1\d{10}$/
  const qqReg = /^[1-9][0-9]{4,14}$/
  if(!relName || !speciality || !className || !qqNumber) {
    alert('请将信息填写完整!!!')
    return
  }
  if(!phoneReg.test(phoneNumber)) {
    alert('请填写正确的手机号')
    return
  }
  if(!qqReg.test(qqNumber)) {
    alert('请填写正确的qq号')
    return
  }
  sessionStorage.setItem('qqNumber', JSON.stringify(qqNumber))
  sessionStorage.setItem('phoneNumber', JSON.stringify(phoneNumber))
  location.href = '../05-result/index.html'
}