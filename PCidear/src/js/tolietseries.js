$(function(){
	$(".content>.detail:first").css('display', 'block');
	$(".togg u:first").css('color', '#00a1b2');
	$(".togg>u").click(function(event) {
		console.log($(this).index());
		$(".togg>u").css('color', '#7B7C7C');
		$(this).css('color', ' #00a1b2');
		$(".detail").css('display', 'none');
		$(".content>.detail").eq($(this).index()).css('display', 'block');
	});
})