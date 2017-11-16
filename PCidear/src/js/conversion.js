/* 轮播切换 */
$(".smallpic li").click(function () {
	var picnum = ['image/211156165.png', 'image/02.png', 'image/03.png',
		'image/04.png', 'image/05.png', 'image/06.png'];
	var i = $(this).index();
	$(".bigpic").attr('src', picnum[i]);
	$(this).addClass('smallpic-active').siblings().removeClass('smallpic-active');
	//console.log($(this))
});


/* input数量减 */
$('.subtract-btn').click(function () {
	var goodsCount = $(this).parents('.goods-count').find('.goods-input'); //input
	goodsCount.val(parseInt(goodsCount.val()) - 1);
	if (parseInt(goodsCount.val()) < 1) {
		goodsCount.val(1)
	}
	if (goodsCount.val() === '') {
		goodsCount.val(1)
	}
	setTotal()
})
/* input数量加 */
$('.add-btn').click(function () {
	var goodsCount = $(this).parents('.goods-count').find('.goods-input'); //input
	goodsCount.val(parseInt(goodsCount.val()) + 1) //input数量++
	if (goodsCount.val() === '') {
		goodsCount.val(1)
	}
	setTotal()
})

$('.goods-input').keyup(function () {
	if ($(this).val() === '' || $(this).val() > 999999999) {
		$(this).val(1)
	}
	$(this).val($(this).val().replace(/\D|^0/g, '1'));
	setTotal()
})

/* 失去焦点 */
$('.goods-input').blur(function () {
    if ($(this).val() === '') {
        $(this).val(1)
    }
});

function setTotal() {
	var allCount = 0;
	var allIntegral = 0;
	var inputVal = parseInt($('.conversion-msg').find('.goods-input').val()); //input数量
	var myIntegral = $('.conversion-msg').find('.my-integral').text(); //我的积分
	var integralCount = $('.conversion-msg').find('.integral-count') //兑换数量
	var goodsIntegral = parseInt($('.conversion-msg').find('.goods-integral').text()); //商品积分
	var needIntegral = $('.conversion-msg').find('.need-integral') //所需积分
	var total = inputVal * parseInt(goodsIntegral);
	allIntegral += total;
	integralCount.text(inputVal) //兑换数量
	needIntegral.text(allIntegral) //所需积分
	if (parseInt(needIntegral.text(allIntegral).text()) > parseInt(myIntegral)) {
		//console.log(parseInt(needIntegral.text(allIntegral).text()), parseInt(myIntegral))
		//console.log(不够)
		$('.need-integral').addClass('integral-active');
		$('.my-integral').addClass('integral-active')
	} else {
		//console.log(够积分)
		$('.need-integral').removeClass('integral-active');
		$('.my-integral').removeClass('integral-active')
	}
}

$('.conversion-btn').click(function () {
	var myIntegral = parseInt($('.conversion-msg').find('.my-integral').text()); //我的积分
	var needIntegral = parseInt($('.conversion-msg').find('.need-integral').text()); //所需积分
	if (needIntegral > myIntegral) {
		alert('积分不足')
	} else {
		alert('已兑换')
	}
})
