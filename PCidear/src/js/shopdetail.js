var picnum=['image/个性大01.png','image/个性大02.png','image/个性大03.png',
'image/个性大04.png','image/个性大05.png','image/个性大06.png'];
var colnum=-1;//马桶颜色序号
var size='';//马桶规格大小

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
console.log(type);//type为马桶类型


$(function () {
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


	$(".lazy").lazyload({effect: "fadeIn"});//图片懒加载

	$(".smallpic li").click(function() {
		$(".colsel li").css('border', '1px solid #7B7575');
		var i=$(this).index();
		$(".bigpic").attr('src', picnum[i]);
		$(".smallpic li").css('border', '1px solid #989797');
		$(this).css('border', '2px solid #009EB0');
	});

	$(".colsel li").click(function() {//点击马桶颜色选择
		$(".smallpic li").css('border', '1px solid #989797');
		var i=$(this).index();
		$(".bigpic").attr('src', picnum[i]);
		$(".colsel li").css('border', '1px solid #7B7575');
		$(this).css('border', '2px solid #009EB0');
		colnum=i;
		console.log(colnum);
	});
	$(".size span").click(function() {//点击马桶规格大小
		var i=$(this).index();
		$(".size span").css('border', '1px solid #828080');
		$(this).css('border', '2px solid #009EB0');
		size=$(this).text();
		console.log(size);
	});

})