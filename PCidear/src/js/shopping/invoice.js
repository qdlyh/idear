$('.invoice-btn').click(function () {
    var invoice_test = $('.invoice-test').val();
    if (invoice_test === '') {
        alert('输入抬头不能为空');
        return false;
    } else {
        var test = invoice_test.replace(/[&\|\\\*^%$#@,，。；"';`·~!@.\-]/g, "");
        //console.log(test)
        $('.invoice-test').val(test);
    }
})