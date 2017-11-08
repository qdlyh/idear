define(function (require,exports,module) {
    var echarts = require('echarts'),
        common = require('common'),
        china = require('china')


    // console.log(echarts.getMap('china'))
    var chart = echarts.init(document.getElementById('echarts'))

    var markPointData = function (data) {
        var res = []
        for (var i = 0; i < data.length; i++) {
            res.push({
                name: data[i].properties.name,
                coord: data[i].properties.cp
            })
        }
        console.log(res)
        return res
    }



    var option = {
        // title : {
        //     text: '地尔',
        //     subtext: '加盟区域',
        //     x:'center'
        // },
        tooltip: {
            trigger: 'item',
            formatter: '{b}',
            feature : {
                mark : {show: true},
                dataView : {show: true, readOnly: false},
                restore : {show: true},
                saveAsImage : {show: true}
            }
        },
        series: [
            {
                name: '中国',
                type: 'map',
                mapType: 'china',
                zoom: 1.2,
                selectedMode : 'single',
                label: {
                    normal: {
                        show: true,
                        textStyle: {
                            color: '#6e7877'
                        }
                    },
                    emphasis: {
                        show: true,
                        textStyle: {
                            color: '#fff'
                        }
                    }
                },
                // markPoint:{
                    // type: 'effectScatter',
                    // symbol: 'circle',
                    // symbolSize: 10,
                    // symbolOffset: [0, 12],
                    // silent: true,
                    // label: {
                    //     normal: {
                    //         show: false
                    //     },
                    //     emphasis: {
                    //         show: false
                    //     }
                    // },
                    // itemStyle: {
                    //     normal: {
                    //         color: '#1ed6cb'
                    //         //
                    //         // color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    //         //     offset: 0, color: 'red' // 0% 处的颜色
                    //         // }, {
                    //         //     offset: 1, color: 'blue' // 100% 处的颜色
                    //         // }], false)
                    //     },
                    //     emphasis: {
                    //         color: '#ffffff'
                    //     }
                    // },
                    // showEffectOn: 'render',
                    // rippleEffect: {
                    //     brushType: 'stroke'
                    // },
                    // hoverAnimation: true,
                    // data: markPointData(echarts.getMap('china').geoJson.features)
                // },
                itemStyle: {
                    normal: {
                        areaColor: '#edf4f6',
                        borderColor: '#009fb1',
                        borderWidth: 1,
                        // shadowColor: '#009fb1',
                        // shadowBlur: 2
                    },
                    emphasis: {
                        areaColor: '#009fb1'
                    }
                },
                data:[
                    {name:'广东', selected:true}
                ]
            }
        ]
    }

    chart.setOption(option)


    chart.on('click', function (params) {
        // console.log(params)
        console.log(params.name)
        var top = $(window).height();
        $('html,body').stop().animate({scrollTop:top- 100 + "px"}, 500);
    })


    var $locationLi = $('.locationWrap li:not(".join")')


    $locationLi.on('click', function () {
        var index = $(this).index(),
            $locationLiActive =  $locationLi.removeClass('active').eq(index).addClass('active'),
            title = $locationLiActive.attr('data-title'),
            name = $locationLiActive.attr('data-name'),
            phone = $locationLiActive.attr('data-phone'),
            wechat = $locationLiActive.attr('data-wechat'),
            email = $locationLiActive.attr('data-email'),
            Img = $locationLiActive.attr('data-Img'),
            code = $locationLiActive.attr('data-code'),
            $personDetail = $('.personDetail')

        $personDetail.next('.person').attr('src', Img)
        $personDetail.find('.title').text(title)
        $personDetail.find('.name').text(name)
        $personDetail.find('.phone>a').text(phone).attr('href', "tel:"+ phone)
        $personDetail.find('.wechat>span').text(wechat)
        $personDetail.find('.wechat>code').attr('src', code)
        $personDetail.find('.mail>a').text(email).attr('href', "mailto:"+ phone)

        // pathLocation.map.clearMap()
        // searchLocation(addressStr)
        // alert(123)

    })



})