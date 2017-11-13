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
		var i=$(".option span").index();
		$(".option span").css({
		'color': '#676767',
		'border-bottom': '1px solid #676767'
		});
		$(this).css({
		'color': '#28B3C2',
		'border-bottom': '1px solid #28B3C2'
		});
	});

	if(type=="臭氧杀菌"){
		$(".option span:eq(1)").trigger("click");
	}
	if(type=="微生物分解"){
		$(".option span:eq(2)").trigger("click");
	}
})