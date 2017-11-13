$(function () {
	if(){
		// 如果要自动登录，代码写在这里
	}

	$(".shade").click(function() {
		$(".loginwhole").hide();
	});
	$(".num").blur(function(){
		if($(".num").val().length<11){
			alert("手机号码为11位数字");
		}
	});
	$("input").keyup(function() {
		if($(".num").val()!=''&&$(".pas").val()!=''&&$(".count").val()!=''){
			$(".btn").css({
				'background': '#00a1b2'
			});
		}
		else{
			$(".btn").css({
				'background': '#9fa0a0'
			});
		}
	});
	$(".btn").click(function() {
		if($(".num").val()!=''||$(".pas").val()!=''||$(".count").val()!=''){
			// 如果输入框内容为空，直接返回
			alert("填写信息不能为空");
			return;
		}
		else{

			if($('.single').prop('checked')) {
			  // 如果勾选了自动登录，代码写在这里
			}

			// 发送登录请求
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