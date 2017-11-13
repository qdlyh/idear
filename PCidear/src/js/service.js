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
})