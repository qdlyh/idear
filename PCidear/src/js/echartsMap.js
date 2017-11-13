 //路径配置
 require.config({
     paths: {
         echarts: 'http://echarts.baidu.com/build/dist'
     }
 });
 // 使用
 require(['echarts', 'echarts/chart/map'], function (ch) {
     // 基于准备好的dom，初始化echarts图表
     var myChart = ch.init(document.getElementById('mapbox'));
     option = {
         tooltip: {
             trigger: 'item',
             formatter: '{b}'
         },

         series: [{
             name: '中国',
             type: 'map',
             mapType: 'china',
             selectedMode: 'single',
             itemStyle: {
                 normal: {
                     label: {
                         show: true
                     }, //是否显示字
                     //borderColor: '#009fb1', //省界限色
                     areaStyle: {
                         color: '#CCDFE4'
                     }, //背景色
                 },

                 emphasis: {
                     label: {
                         show: true,
                         textStyle: {
                             color: '#fff'
                         } //鼠标覆盖文字颜色
                     },
                     areaStyle: {
                         color: '#009FB1'
                     }, //鼠标覆盖色
                 }
             },

             data: [{
                     name: '广东',
                     selected: false
                 } //初始选择
             ]
         }]
     };
     var ecConfig = require('echarts/config');
     myChart.on(ecConfig.EVENT.MAP_SELECTED, function (param) {
         var selected = param.selected;
         var str = '';
         for (var p in selected) {
             if (selected[p]) {
                 str += p + ' ';
             }
         }
         document.getElementById('ul-text').innerHTML = str;
         var top = $(window).height();
         $('html,body').stop().animate({scrollTop:top + "px"},800);
         if (str == '') {
             document.getElementById('ul-text').innerHTML = '--请选择省份--'
         }
     })
     // 为echarts对象加载数据 
     myChart.setOption(option);

     $('.open-ul,.open-ul-btn').click(function (e) {
         $('.province').toggle();
         e.stopPropagation();
     })
     $(document).click(function () {
         $('.province').hide()
     })
     $('.province > li').click(function () {
         var text = $(this).text()
         $('#ul-text').text(text)
         console.log(text)
         $('.province').hide()
     })
 });