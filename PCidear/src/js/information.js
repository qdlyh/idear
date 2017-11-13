$(function(){
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
	$("ul").click(function(event) {
		/* Act on the event */
	});
})