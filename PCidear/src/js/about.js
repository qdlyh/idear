function getUrlParam(key) {
    // 获取参数
    var url = window.location.search;
    // 正则筛选地址栏
    var reg = new RegExp("(^|&)" + key + "=([^&]*)(&|$)");
    // 匹配目标参数
    var result = url.substr(1).match(reg);
    //返回参数值
    return result ? decodeURIComponent(result[2]) : null;
}
var type=getUrlParam('type'); //实例化
console.log(type);//type为科技类型

$(function () {
	$(".option span:first").css({
		'color': '#28B3C2',
		'border-bottom': '1px solid #28B3C2'
	});
	$(".option span").click(function() {
		var i=$(this).index();
		console.log(i);
		if(i==1){//点击第二个切换到图片来显示
			$(".value").hide();
			$(".pic").show();
		}
		else{
			$(".value").show();
			$(".pic").hide();
		}
		$(".option span").css({
		'color': '#676767',
		'border-bottom': '1px solid #676767'
		});
		$(this).css({
		'color': '#28B3C2',
		'border-bottom': '1px solid #28B3C2'
		});
	});

	if(type=="企业文化"){
		$(".option span:eq(1)").trigger("click");
	}
	if(type=="经营理念"){
		$(".option span:eq(2)").trigger("click");
	}
	if(type=="权威认证"){
		$(".option span:eq(3)").trigger("click");
	}
})