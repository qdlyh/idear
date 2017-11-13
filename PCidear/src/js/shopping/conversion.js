/* input数量减 */
$('.subtract-btn').click(function () {
    var goodsCount = $(this).parents('.goods-count').find('.goods-input')
    goodsCount.val(parseInt(goodsCount.val()) - 1)
    if (parseInt(goodsCount.val()) < 1) {
        goodsCount.val(1)
    }
    if(goodsCount.val() ===''){
        goodsCount.val(1)
    }
})
/* input数量加 */
$('.add-btn').click(function () {
    var goodsCount = $(this).parents('.goods-count').find('.goods-input')
    //console.log(goodsCount)
    goodsCount.val(parseInt(goodsCount.val()) + 1)
    if(goodsCount.val() ===''){
        goodsCount.val(1)
    }
})