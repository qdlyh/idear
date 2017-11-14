if ($('.cart-container').length === 0) {
    //console.log($('.cart-container').length)
    $('.cart-container').hide();
    $('.page').hide();
    $('.cart-text').show();
} else {
    $('.cart-container').show();
    $('.page').show();
    $('.cart-text').hide();
}
/* 全选 */
$('.all-checked').click(function () {
    if ($(this).is(':checked')) {
        $('.check').prop('checked', true);
    } else {
        $('.check').prop('checked', false);
    }
    setTotal();
})
/* 单选、取消全选 */
$('.check').each(function () {
    $(this).click(function () {
        // console.log($('.check:checked').length)
        // console.log($('.check').length)
        if ($('.check:checked').length == $('.check').length) {
            $('.all-checked').prop('checked', true);
        } else {
            $('.all-checked').prop('checked', false);
        }
        setTotal();
    })
})
/* input数量减 */
$('.subtract-btn').click(function () {
    var inputVal = $(this).parents('.goods-count').find('.goods-input'); //input
    var goodsCount = inputVal.val(parseInt(inputVal.val()) - 1).val(); //input数量
    var goodsMoney = $(this).parents('.cart-money').find('.price'); //单价
    var sumMoney = $(this).parents('.cart-money').find('.sum-money'); //总价金额
    var allMoney = goodsCount * parseInt(goodsMoney.text())
    //console.log(goodsCount)

    if (parseInt(inputVal.val()) < 1) {
        inputVal.val(1)
    } else {
        sumMoney.text(allMoney) //金额总价
    }
    if (inputVal.val() === '') {
        inputVal.val(1)
    }
    setTotal();
})
/* input数量加 */
$('.add-btn').click(function () {
    var inputVal = $(this).parents('.goods-count').find('.goods-input'); //input
    var goodsCount = inputVal.val(parseInt(inputVal.val()) + 1).val(); //input数量
    var goodsMoney = $(this).parents('.cart-money').find('.price'); //单价
    var sumMoney = $(this).parents('.cart-money').find('.sum-money'); //金额
    var allMoney = goodsCount * parseInt(goodsMoney.text())
    //console.log(goodsCount)
    if (inputVal.val() === '') {
        inputVal.val(1)
    }
    sumMoney.text(allMoney) //金额总价
    setTotal();
})
/* 输入数量 */
$('.goods-input').keyup(function () {
    if ($(this).val() === '') {
        $(this).val(1)
    }
    $(this).val($(this).val().replace(/\D|^0/g, '1'));
    // var inputVal = $(this).parents('.goods-count').find('.goods-input'); //input
    var goodsMoney = $(this).parents('.cart-money').find('.price'); //单价
    var sumMoney = $(this).parents('.cart-money').find('.sum-money'); //金额
    var goodsCount = $(this).val(parseInt($(this).val())).val(); //input数量
    var allMoney = goodsCount * parseInt(goodsMoney.text())
    sumMoney.text(allMoney)
    setTotal();
})

/* 失去焦点 */
$('.goods-input').blur(function () {
    if ($(this).val() === '') {
        $(this).val(1)
    }
});

/* 删除商品 */
$('.delete-goods').click(function () {
    $(this).parents('.cart-container').remove();
    setTotal();
})

function setTotal() {
    var totalMoney = 0;
    var totalCount = 0;
    //var TotalMoney = 0;
    $('.check').each(function () {
        if ($(this).is(':checked')) {
            var goodsMoney = parseInt($(this).parents('.cart-container').find('.sum-money').text());
            var goodsCount = parseInt($(this).parents('.cart-container').find('.goods-input').val());
            totalMoney += goodsMoney;
            totalCount += goodsCount;
            //console.log(TotalMoney)
        }
    });
    $("#total").html(totalMoney.toFixed(2));
    $("#count").html(totalCount);
}
// setTotal();
