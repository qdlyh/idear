  /* 城市选择默认 */
  new PCAS("user.province", "user.city", "user.area", "--请选择省份--", "--请选择城市--", "--请选择地区--");
  
          /* 没以保存的地址显示编辑表单 */
          if ($('.my-site-box').length !== 0) {
              $('.compile-form').hide()
              $('.my-site').show()
          } else {
              $('.compile-form').show()
              $('.my-site').hide()
          }
          // if($('.my-site-box')!=0){
          //     var count = $('.my-site-box').length;
          //     $('.site-count').text(count)
          // }
          // $('.my-site-box').click(function () {
          //     $(this).addClass('active').siblings().removeClass('active')
          // })
          // $('.delete-site').click(function () {
          //     /* 删除的id */
          //     var ids = $(this).parents('.my-site-box').find('.delete-id').text();
          //     console.log(ids)
          //     $(this).parents('.my-site-box').remove()
          // })
  
          /* 默认地址 */
          function defaultSite(index) {
              var _this = $(index);
              _this.parents('.my-site-box').addClass('active').siblings().removeClass('active');
          }
  
          /* 修改地址 */
          function compileSite(index) {
              var _this = $(index);
              $('.compile-form').show()
              $('.my-site').hide()
          }
  
          /* 删除保存的收货地址 */
          function deleteSite(index) {
              var _this = $(index);
              /* 删除的id */
              var ids = _this.parents('.my-site-box').find('.delete-id').text();
              console.log(ids)
              $(index).parents('.my-site-box').remove();
          }
          $('.addSite').click(function () {
              $('.compile-form').show()
              $('.my-site').hide()
          })
  
  
          /* 表单提交处 */
          $('.site-btn a').click(function () {
              /* 城市地址 */
              var getpro = document.getElementById("province").value;
              var getcity = document.getElementById("city").value;
              var getarea = document.getElementById("area").value;
              //console.log(getpro + " " + getcity + " " + getarea);
  
              var phone = $('.phone').val();
              var myName = $('.myName').val();
              var ifFalse = true;
              if (phone === '') {
                  alert('手机不能为空')
                  ifFalse = false;
                  return false;
              } else if (!/(^1[3|5|8][0-9]{9}$)/.test(phone)) {
                  alert('手机号码不正确')
                  ifFalse = false;
                  return false;
              }
              if (myName === '') {
                  alert('收货人不能为空')
                  ifFalse = false;
                  return false;
              }
              if (getpro === '') {
                  alert('请选择所在位置')
                  ifFalse = false;
                  return false;
              }
              ifFalse = true;
              //console.log(ifFalse)
  
              /* 添加保存的地址 */
              if (ifFalse === true) {
                  var mySite_box =
                      `<div class="my-site-box">
                                  <i class="delete-id">70</i>
                                  <ul>
                                      <li>姓名：张三</li>
                                      <li class="middle">联系:1303030303</li>
                                      <li>地址:地球1</li>
                                  </ul>
                                  <ul class="my-site-text-right">
                                      <li class="blue-color active-color" onclick="defaultSite(this)">默认</li>
                                      <li class="middle compile blue-color" onclick="compileSite(this)">修改</li>
                                      <li class="delete-site" onclick="deleteSite(this)">删除</li>
                                  </ul>
                              </div>`
                  $('.my-site').append(mySite_box);
                  $('.compile-form').hide();
                  $('.my-site').show()
              }
          })