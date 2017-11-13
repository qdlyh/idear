$(function () {
	$(".shade").click(function() {
		$(".regwhole").css('display', 'none');
	});

	$(".rule").click(function() {
		$(".register").hide();
		$(".ruledetail").show();
	});
	$(".continue").click(function() {
		$(".ruledetail").hide();
		$(".register").show();
	});
	var timer;
	var num=60;
	$(".code").click(function() {
		if(!timer){
			// 这里写请求发送短信验证码

			// 开启定时器
			timer=setInterval(function(){
				$(".code").css('background', '#9FA0A0');
				$(".code").text(num+' 内输入');
				if(num==0){
					clearInterval(timer);//停止定时器
					timer=false; 
					num=60;
					$(".code").css('background', '#00a1b2');
					$(".code").text('获取验证码');
				}
				num--;
			},1000);
		}
	});
	$(".btn").click(function() {
		if($(".num").val()==''||$(".pas").val()==''||$(".conf").val()==''||$(".count").val()==''){
			alert("填写信息不能为空");
			return;
		}
		else if($(".num").val().length<11){
			alert("手机号码为11位数字");
			return;
		}
		else if($(".pas").val()!=$(".conf").val()){
			alert("两次输入的密码不一样")
			return;
		}
		else if($(".pas").val().length<6){
			alert("密码长度最少6位")
			return;
		}
		else if(!$('.single').prop('checked')) {
			  alert("请勾选注册协议");
		}
		else{
			// 发送注册参数
			$.ajax({
				url: '/path/to/file',
				type: 'default GET (Other values: POST)',
				dataType: 'default: Intelligent Guess (Other values: xml, json, script, or html)',
				data: {param1: 'value1'},
			})
			.done(function() {
				console.log("success");
			})
			.fail(function() {
				console.log("error");
			})
			.always(function() {
				console.log("complete");
			});
		}
	});
})