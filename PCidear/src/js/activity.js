
$(function(){

	$("#story").css('background', '#C9CACA');
	$("#story").click(function() {
		$("#activity").css('background', '#E6E6E6');
		$("#story").css('background', '#C9CACA');

	});
	$("#activity").click(function() {
		$("#activity").css('background', '#C9CACA');
		$("#story").css('background', '#E6E6E6');
		
	});

	var setTotalCount = 0;

	$('#box').paging({
	    initPageNo: 1, // 初始页码
	    totalPages: 15, //总页数
	    totalCount: '合计' + setTotalCount + '条数据', // 条目总数
	    slideSpeed: 600, // 缓动速度。单位毫秒
	    jump: true, //是否支持跳转
	    callback: function(page) { // 回调函数
	        console.log(page);
	    }
	})
})