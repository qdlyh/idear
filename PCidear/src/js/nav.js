$(function () {
	/* 显示购物车 */
	$(".header-img-right").click(function (e) {
		$(".header-msg2").toggle();
		e.stopPropagation();
	});
	$(document).click(function () {
		$('.header-msg2').hide()
	})
	$(".header-msg2").hover(function () {
		$(".header-msg2").show();
	}, function () {
		$(".header-msg2").hide();
	});
	/* 登录 */
	$(".btn-blue header-btn>a").click(function () {
		$(".loginwhole").show();
	});
	/* 注册 */
	$(".msg-text2").click(function () {
		$(".regwhole").show();
	});
	/* 侧边栏显示菜单 */
	$('.nav-open-ul').click(function (e) {
		$(this).find('ul').toggle()
		e.stopPropagation();
	})
	$(document).click(function () {
		$('.nav-open-ul>ul').hide()
	})
	$('.nav-top-btn').click(function () {
		$('body,html').animate({
			scrollTop: 0
		}, 500);
	})
})