var picnum=['image/211156165.png','image/02.png','image/03.png',
'image/04.png','image/05.png','image/06.png'];
var colnum=-1;//马桶颜色序号
var size='';//马桶规格大小
$(function () {
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