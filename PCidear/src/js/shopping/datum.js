$('.datum-btn').click(function () {
    var myName = $('.myName').val();
    var email = $('.email').val();
    if (myName === '') {
        alert('名字不能为空');
        return false;
    }

    if (email !== '') {
        if (!/^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/
            .test(email)) {
            alert('邮箱不正确');
        }
    }
})

$('.open-box-btn1').click(function () {
    var old = $('.old').val();
    var newPw1 = $('.new1').val();
    var newPw2 = $('.new2').val();
    var ifFalse = false;
    if (old === '') {
        alert('旧密码不能为空');
        ifFalse = false;
        return false;
    }
    if (newPw1 === '') {
        alert('新密码不能为空');
        ifFalse = false;
        return false;
    }
    if (newPw1.length < 6) {
        alert('新密码不能少于6位');
        ifFalse = false;
        return false;
    }
    if (newPw2 === '') {
        alert('确认密码不能为空');
        ifFalse = false;
        return false;
    }
    if (newPw1 !== newPw2) {
        alert('确认密码错误');
        ifFalse = false;
        return false;
    }
    ifFalse = true;
    //console.log(ifFalse);
    if (ifFalse) {
        $('.open-div1').hide();
    }
})


$('.open-box-btn2').click(function () {
    var oldPhone = $('.oldPhone').val();
    var newPhone = $('.newPhone').val();
    var test = $('.test-input').val();
    var ifFalse = false;
    if(test===''){
        alert('请输入验证码');
        ifFalse = false;
        return false;
    }
    if (oldPhone === '' || newPhone === '') {
        alert('手机不能为空')
        ifFalse = false;
        return false;
    } else if (!/(^1[3|5|8][0-9]{9}$)/.test(oldPhone) || !/(^1[3|5|8][0-9]{9}$)/.test(newPhone)) {
        alert('手机号码不正确')
        ifFalse = false;
        return false;
    }
    ifFalse = true;
    if(ifFalse){
        $('.open-div2').hide();
    }
})

$('.open-phone').click(function () {
    $('.open-div2').show();
})
$('.open-password').click(function () {
    $('.open-div1').show();
})
$('.close-btn').click(function () {
    $('.open-div').hide();
})