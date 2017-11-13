 /* 高德 */
 var map = new AMap.Map("container", {
     resizeEnable: true
 });
 var placeSearch = new AMap.PlaceSearch({
     map: map
 });

 /* 自定义 */
 $('.keywords-map').click(function () {
     $('#mapbox').hide();
     $('#container').show();
     $('html,body').animate({
         scrollTop: $('.map-text-anchor').offset().top
     }, 800);
     var address = $(this).parents('.keywords-content-box').find('.address').text();
     //console.log(address)
     placeSearch.search(address);
 })
 $('#myPageTop').click(function () {
     $('#container').hide();
     $('#mapbox').show();
 })