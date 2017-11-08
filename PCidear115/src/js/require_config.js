var timesTamp = "1";
var require = {
    baseUrl: 'js',
    shim: {
        lazyload: ['jquery'],
        jqUi: ['jquery'],
        swiper:['jquery'],
        pagination:['jquery'],
        mousewheel:['jquery'],
        fancybox: ['mousewheel']
    },
    map: {
        '*': {
            'css': 'requirejs/css', // or whatever the path to require-css is,
            'text': 'requirejs/text'
          }
    },
    paths: {
        amap: 'http://webapi.amap.com/maps?v=1.3&key=5c89a3b0a8dca928f47f9ece25dd474b&plugin=AMap.CitySearch,AMap.PlaceSearch,AMap.Autocomplete,AMap.Transfer,AMap.Driving',
        plugin: 'plugin',
        src: 'src',
        echarts: ['plugin/echarts/echarts'],
        china: ['plugin/echarts/china'],
        videojs: ['plugin/video.min'],
        components: 'components',
        swiper: ['plugin/swiper/swiper.jquery.min'],
        pagination: ['plugin/jquery.pagination/jquery.pagination.min'],
        mousewheel: ['plugin/jquery.mousewheel'],
        fancybox: ['plugin/jquery.fancybox/jquery.fancybox'],
        jquery: ['plugin/jquery'],
        lazyload: ['plugin/jquery.lazyload/jquery.lazyload'],
        jqUi: ['plugin/jqUi/jquery-ui'],
        modal: ['plugin/modal/modal'],
        vue: ['plugin/vue'],
        common: ['common']
    },
    urlArgs: "version=" + (new Date()).getTime()
    // urlArgs: "version="+ timesTamp
};