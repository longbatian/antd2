// require('styles/common.css');
// require('styles/personal/personalDianzihetong.css')
import $ from 'jquery';
import React from 'react';
import {Pagination} from 'antd';
// import $ from '../../js/jquery.min';
import {Link,withRouter} from 'react-router-dom';
import InterfaceUtil from '../../util/InterfaceUtil';
import LoginPage from '../../util/LoginPage';
import '../../styles/personal/personalYouhuiquan.css'

class PersonalYouhuiquan extends React.Component {

  constructor(props) {
    super(props); //调用父类的构造方法；
    this.loginPage=new LoginPage();
    this.state = {
      yhq: [],
      lujin: 'http://www.scjuchuang.com/',
      count1: '',
      count0: '',
      count2: '',
      count3: '',
      cons: ''
    }
  }

  //显示优惠券的子集分类
  value(e) {
    var a = $('.personal_Youhuiquan_title_select').val();
    if (a == '全部优惠券') {
      a = 'null';
      $('.title_1').removeClass('orange');
    }
    else if (a == '已用优惠券') {
      a = '2';
      $('.title_2').removeClass('display');
      $('.title_1').removeClass('orange');
      $('.title_1').addClass('display');
      $('.title_3').addClass('display');
    }
    else if (a == '过期优惠券') {
      a = '3';
      $('.title_1').addClass('display');
      $('.title_1').removeClass('orange');
      $('.title_2').addClass('display');
      $('.title_3').removeClass('display');
    }
    else if (a == '可用优惠券') {
      a = '1';
      $('.title_2').addClass('display');
      $('.title_1').removeClass('display');
      $('.title_1').removeClass('orange');
      $('.title_3').addClass('display');
    }

    //获取cookie
    function getCookie(cookieName) {
      var strCookie = document.cookie;
      var arrCookie = strCookie.split('; ');
      for (var i = 0; i < arrCookie.length; i++) {
        var arr = arrCookie[i].split('=');
        if (cookieName == arr[0]) {
          return arr[1];
        }
      }
      return '';
    }

    var username = getCookie('username');
    var token = getCookie('token');
    var user_id = getCookie('user_id');
    const that = this;
    //我的收藏
    $.ajax({
                url: InterfaceUtil.getUrl(45),
                type: "post",
                data: {
    'username' : username , 'token' : token , 'page':1,'limit':12,'user_id' : user_id , 'coupon_type' : a
              },
                dataType: "json",
                success: function(data){
        if (data.data.length == 0) {

        } else {
          that.setState({
            yhq: data.data.list,
            length: data.data.counts
          });
          that.refs.youhuiquan.className = 'display'
        }

                },
                error: function (XMLHttpRequest, textStatus, errorThrown) {
                    // 状态码
                    console.log(XMLHttpRequest.status);
                    // 状态
                    console.log(XMLHttpRequest.readyState);
                    // 错误信息
                    console.log(textStatus);
                }
            });
    // ajax.open('post',"http://192.168.1.49/index.php/index/user/coupons",false);
    // ajax.open('post', InterfaceUtil.getUrl(45), false);
    // ajax.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    // ajax.onreadystatechange = function () {
    //   if (ajax.readyState == 4 && ajax.status == 200 || ajax.status == 304) { // readyState == 4说明请求已完成
    //     var data = ajax.responseText;
    //     data = JSON.parse(data);
    //     // console.log(data)

    //   }
    // };
    // ajax.send('username=' + username + '&token=' + token + '&page=1&limit=12&user_id=' + user_id + '&coupon_type=' + a);

    var a = $('.personal_Youhuiquan_title_select option:checked').text();
    // console.log(a.replace(/[^0-9]/ig, ''));
    var b = a.replace(/[^0-9]/ig, '');
    that.setState({
      cons: b
    });

  }

  //切换颜色
  color(e) {
    var a = $('.personal_Youhuiquan_title_select').val();
    if (a == '全部优惠券') {
      a = 'null';
      $('.title_1').removeClass('orange');
    }
    else if (a == '已用优惠券') {
      a = '2';
      $('.title_2').removeClass('display');
      $('.title_1').removeClass('orange');
      $('.title_1').addClass('display');
      $('.title_3').addClass('display');
    }
    else if (a == '过期优惠券') {
      a = '3';
      $('.title_1').addClass('display');
      $('.title_1').removeClass('orange');
      $('.title_2').addClass('display');
      $('.title_3').removeClass('display');
    }
    else if (a == '可用优惠券') {
      a = '1';
      $('.title_2').addClass('display');
      $('.title_1').removeClass('display');
      $('.title_1').removeClass('orange');
      $('.title_3').addClass('display');
    }
    $('.title_1').removeClass('orange');
    e.target.className = 'title_1 floatleft orange cursor';
    if (e.target.innerText == '即将过期') {
      //获取cookie
      function getCookie(cookieName) {
        var strCookie = document.cookie;
        var arrCookie = strCookie.split('; ');
        for (var i = 0; i < arrCookie.length; i++) {
          var arr = arrCookie[i].split('=');
          if (cookieName == arr[0]) {
            return arr[1];
          }
        }
        return '';
      }

      var username = getCookie('username');
      var token = getCookie('token');
      var user_id = getCookie('user_id');
      const that = this;
      //我的收藏
      $.ajax({
                url: InterfaceUtil.getUrl(45),
                type: "post",
                data: {
    'username' : username , 'token' : token , 'page':1,'limit':12,'user_id' : user_id , 'coupon_type':1, 'search_type':1
              },
                dataType: "json",
                success: function(data){
      if (data.data.length == 0) {

          } else {
            that.setState({
              yhq: data.data.list,
              length: data.data.counts
            });
            that.refs.youhuiquan.className = 'display'
          }
                },
                error: function (XMLHttpRequest, textStatus, errorThrown) {
                    // 状态码
                    console.log(XMLHttpRequest.status);
                    // 状态
                    console.log(XMLHttpRequest.readyState);
                    // 错误信息
                    console.log(textStatus);
                }
            });
      // ajax.open('post',"http://192.168.1.49/index.php/index/user/coupons",false);
      // ajax.open('post', InterfaceUtil.getUrl(45), false);
      // ajax.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
      // ajax.onreadystatechange = function () {
      //   if (ajax.readyState == 4 && ajax.status == 200 || ajax.status == 304) { // readyState == 4说明请求已完成
      //     var data = ajax.responseText;
      //     data = JSON.parse(data);
      //     // console.log(data)


      //   }
      // };
      // ajax.send('username=' + username + '&token=' + token + '&page=1&limit=12&user_id=' + user_id + '&coupon_type=1' + '&search_type=1');
    }
    else if (e.target.innerText == '最优惠') {
      //获取cookie
      function getCookie(cookieName) {
        var strCookie = document.cookie;
        var arrCookie = strCookie.split('; ');
        for (var i = 0; i < arrCookie.length; i++) {
          var arr = arrCookie[i].split('=');
          if (cookieName == arr[0]) {
            return arr[1];
          }
        }
        return '';
      }

      var username = getCookie('username');
      var token = getCookie('token');
      var user_id = getCookie('user_id');
      const that = this;
      //我的收藏
      $.ajax({
                url: InterfaceUtil.getUrl(45),
                type: "post",
                data: {
    'username' : username , 'token' : token , 'page':1,'limit':12,'user_id' : user_id , 'coupon_type' : a , 'search_type':2
               },
                dataType: "json",
                success: function(data){
             if (data.data.length == 0) {

          } else {
            that.setState({
              yhq: data.data.list,
              length: data.data.counts
            });
            that.refs.youhuiquan.className = 'display'
          }
                },
                error: function (XMLHttpRequest, textStatus, errorThrown) {
                    // 状态码
                    console.log(XMLHttpRequest.status);
                    // 状态
                    console.log(XMLHttpRequest.readyState);
                    // 错误信息
                    console.log(textStatus);
                }
            });
      // ajax.open('post',"http://192.168.1.49/index.php/index/user/coupons",false);
      // ajax.open('post', InterfaceUtil.getUrl(45), false);
      // ajax.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
      // ajax.onreadystatechange = function () {
      //   if (ajax.readyState == 4 && ajax.status == 200 || ajax.status == 304) { // readyState == 4说明请求已完成
      //     var data = ajax.responseText;
      //     data = JSON.parse(data);
      //     // console.log(data)


      //   }
      // };
      // ajax.send();
    }
    else if (e.target.innerText == '新到账') {
      //获取cookie
      function getCookie(cookieName) {
        var strCookie = document.cookie;
        var arrCookie = strCookie.split('; ');
        for (var i = 0; i < arrCookie.length; i++) {
          var arr = arrCookie[i].split('=');
          if (cookieName == arr[0]) {
            return arr[1];
          }
        }
        return '';
      }

      var username = getCookie('username');
      var token = getCookie('token');
      var user_id = getCookie('user_id');
      const that = this;
      //我的收藏
      $.ajax({
                url: InterfaceUtil.getUrl(45),
                type: "post",
                data: {
        'username' : username , 'token' : token , 'page':1,'limit':12,'user_id' : user_id , 'coupon_type' : a , 'search_type':3
         },
                dataType: "json",
                success: function(data){
          if (data.data.list.length == 0) {
            that.setState({
              yhq: data.data.list,
              cons: data.data.counts
            });
            that.refs.youhuiquan.className = 'center'
          } else {
            that.setState({
              yhq: data.data.list,
              cons: data.data.counts
            });
            that.refs.youhuiquan.className = 'display'
          }
                },
                error: function (XMLHttpRequest, textStatus, errorThrown) {
                    // 状态码
                    console.log(XMLHttpRequest.status);
                    // 状态
                    console.log(XMLHttpRequest.readyState);
                    // 错误信息
                    console.log(textStatus);
                }
            });
      // ajax.open('post',"http://192.168.1.49/index.php/index/user/coupons",false);
      // ajax.open('post', InterfaceUtil.getUrl(45), false);
      // ajax.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
      // ajax.onreadystatechange = function () {
      //   if (ajax.readyState == 4 && ajax.status == 200 || ajax.status == 304) { // readyState == 4说明请求已完成
      //     var data = ajax.responseText;
      //     data = JSON.parse(data);
      //     // console.log(data)


      //   }
      // };
      // ajax.send('username=' + username +
      // '&token=' + token + '&page=1&limit=12&user_id=' + user_id + '&coupon_type=' + a + '&search_type=3');
    }
  }

  //分页
  fenye(e) {
    //判断类型
    var a = $('.personal_Youhuiquan_title_select').val();
    if (a == '全部优惠券') {
      a = 'null';
    }
    else if (a == '已用优惠券') {
      a = '2';
    }
    else if (a == '过期优惠券') {
      a = '3';
    }
    else if (a == '可用优惠券') {
      a = '1';
    }

    function getCookie(cookieName) {
      var strCookie = document.cookie;
      var arrCookie = strCookie.split('; ');
      for (var i = 0; i < arrCookie.length; i++) {
        var arr = arrCookie[i].split('=');
        if (cookieName == arr[0]) {
          return arr[1];
        }
      }
      return '';
    }

    var username = getCookie('username');
    var token = getCookie('token');
    var user_id = getCookie('user_id');
    const that = this;
    //订单ajax
    $.ajax({
                url: InterfaceUtil.getUrl(45),
                type: "post",
                data: {
      'username' : username , 'token' : token , 'page' : e , 'limit':12,'user_id' : user_id , 'coupon_type' : a
              },
                dataType: "json",
                success: function(data){

         if (data.data.list.length == 0) {

        } else {
          that.setState({
            yhq: data.data.list,
            length: data.data.counts
          });
          that.refs.youhuiquan.className = 'display'
        }
                },
                error: function (XMLHttpRequest, textStatus, errorThrown) {
                    // 状态码
                    console.log(XMLHttpRequest.status);
                    // 状态
                    console.log(XMLHttpRequest.readyState);
                    // 错误信息
                    console.log(textStatus);
                }
            });
    // ajax.open('post',"http://192.168.1.49/index.php/index/user/coupons",false);
    // ajax.open('post', InterfaceUtil.getUrl(45), false);
    // ajax.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    // ajax.onreadystatechange = function () {
    //   if (ajax.readyState == 4 && ajax.status == 200 || ajax.status == 304) { // readyState == 4说明请求已完成
    //     var data = ajax.responseText;
    //     // console.log(data)
    //     data = JSON.parse(data);



    //   }
    // };
    // ajax.send('username=' + username + '&token=' + token + '&page=' + e + '&limit=12&user_id=' + user_id + '&coupon_type=' + a);
  }

  //大图列表切换
  qiehuan(e) {
    var a = e.target;
    var b = a.children.length;
    if (b == 0) {
      var c = document.getElementsByClassName('chanpinzhongxin_right_con_div_li1');
      if (a.innerText == '大图') {
        c[0].className = 'chanpinzhongxin_right_con_div_li1 chanpinzhongxin_right_con_div_li4'
        c[1].className = 'chanpinzhongxin_right_con_div_li1 chanpinzhongxin_right_con_div_li7'
        a.parentNode.className = 'chanpinzhongxin_right_con_div_li1 chanpinzhongxin_right_con_div_li5';
        $('.chanpinzhongxin_right_con_ul').removeClass('display');
        $('.chanpinzhongxin_con1_table').addClass('display');
      } else {
        c[0].className = 'chanpinzhongxin_right_con_div_li1 chanpinzhongxin_right_con_div_li4'
        c[1].className = 'chanpinzhongxin_right_con_div_li1 chanpinzhongxin_right_con_div_li7'
        a.parentNode.className = 'chanpinzhongxin_right_con_div_li1 chanpinzhongxin_right_con_div_li6';
        $('.chanpinzhongxin_right_con_ul').addClass('display');
        $('.chanpinzhongxin_con1_table').removeClass('display');
      }

    } else {
      var c = document.getElementsByClassName('chanpinzhongxin_right_con_div_li1');
      if (a.innerText == '大图') {
        c[0].className = 'chanpinzhongxin_right_con_div_li1 chanpinzhongxin_right_con_div_li4'
        c[1].className = 'chanpinzhongxin_right_con_div_li1 chanpinzhongxin_right_con_div_li7'
        a.className = 'chanpinzhongxin_right_con_div_li1 chanpinzhongxin_right_con_div_li5';
        $('.chanpinzhongxin_right_con_ul').removeClass('display');
        $('.chanpinzhongxin_con1_table').addClass('display');
      } else {
        c[0].className = 'chanpinzhongxin_right_con_div_li1 chanpinzhongxin_right_con_div_li4'
        c[1].className = 'chanpinzhongxin_right_con_div_li1 chanpinzhongxin_right_con_div_li7'
        a.className = 'chanpinzhongxin_right_con_div_li1 chanpinzhongxin_right_con_div_li6';
        $('.chanpinzhongxin_right_con_ul').addClass('display');
        $('.chanpinzhongxin_con1_table').removeClass('display');
      }

    }

  }

  componentDidMount() {
    function getCookie(cookieName) {
      var strCookie = document.cookie;
      var arrCookie = strCookie.split('; ');
      for (var i = 0; i < arrCookie.length; i++) {
        var arr = arrCookie[i].split('=');
        if (cookieName == arr[0]) {
          return arr[1];
        }
      }
      return '';
    }

    var username = getCookie('username');
    var token = getCookie('token');
    var user_id = getCookie('user_id');
    const that = this;
    //优惠券内容
     $.ajax({
                url: InterfaceUtil.getUrl(45),
                type: "post",
                data: {
    'username' : username , 'token' : token , 'page':1,'limit':12,'user_id' : user_id , 'coupon_type':1              },
                dataType: "json",
                success: function(data){
                 that.loginPage.ajaxLogin(data.status,that.props);
        if (data.data.length == 0) {

        } else {
          that.setState({
            yhq: data.data.list,
            length: data.data.counts
          });
          that.refs.youhuiquan.className = 'display'
        }
                },
                error: function (XMLHttpRequest, textStatus, errorThrown) {
                    // 状态码
                    console.log(XMLHttpRequest.status);
                    // 状态
                    console.log(XMLHttpRequest.readyState);
                    // 错误信息
                    console.log(textStatus);
                }
            });
    // ajax.open('post',"http://192.168.1.49/index.php/index/user/coupons",false);
    // ajax.open('post', InterfaceUtil.getUrl(45), false);
    // ajax.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    // ajax.onreadystatechange = function () {
    //   if (ajax.readyState == 4 && ajax.status == 200 || ajax.status == 304) { // readyState == 4说明请求已完成
    //     var data = ajax.responseText;
    //     data = JSON.parse(data);
    //     // console.log(data)


    //   }
    // };
    // ajax.send('username=' + username + '&token=' + token + '&page=1&limit=12&user_id=' + user_id + '&coupon_type=1');


    //总数
    $.ajax({
                url: InterfaceUtil.getUrl(46),
                type: "post",
                data: {
  'username' : username , 'token' : token , 'user_id' : user_id
              },
                dataType: "json",
                success: function(data){
        if (data.data.length == 0) {
          that.refs.youhuiquan.className = ''
        } else {
          that.setState({
            count0: data.data.count0,
            count1: data.data.count1,
            count2: data.data.count2,
            count3: data.data.count3,
            cons: data.data.count0
          }, function () {

          });
          that.refs.youhuiquan.className = 'display'
        }
                },
                error: function (XMLHttpRequest, textStatus, errorThrown) {
                    // 状态码
                    console.log(XMLHttpRequest.status);
                    // 状态
                    console.log(XMLHttpRequest.readyState);
                    // 错误信息
                    console.log(textStatus);
                }
            });
    // ajax.open('post',"http://192.168.1.49/index.php/index/user/coupon_counts",false);
    // ajax.open('post', InterfaceUtil.getUrl(46), false);
    // ajax.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    // ajax.onreadystatechange = function () {
    //   if (ajax.readyState == 4 && ajax.status == 200 || ajax.status == 304) { // readyState == 4说明请求已完成
    //     var data = ajax.responseText;
    //     // console.log(data)
    //     data = JSON.parse(data);
    //     // console.log(data)


    //   }
    // };
    // ajax.send('username=' + username + '&token=' + token + '&user_id=' + user_id);
  }


  render() {

    return (
      <div className=' width988 floatRight'>
        {/*电子合同标题*/}
        <div className='personal_Dindan_title'>
          <p className='marginLeft20 fontFamily fontWeight'>
            优惠券
            <Link to="/Lingqu"><span className='floatRight personal_Youhuiquan_title_a'>去领取更多优惠券</span></Link>
            <div className='clear'></div>
          </p>
        </div>
        {/*内容*/}
        <div className='marginTop20 bgWhite'>
          <div className='xian'></div>
          <div className='personal_Youhuiquan_title_div marginBottom20'>
            <select name="" className='personal_Youhuiquan_title_select' onChange={(e) => {
              this.value(e)
            }}>
              <option value="可用优惠券">可用优惠券（{this.state.count0}）</option>
              <option value="已用优惠券">已用优惠券（{this.state.count1}）</option>
              <option value="过期优惠券">过期优惠券（{this.state.count2}）</option>
            </select>
            <span className='floatleft title_1 cursor' onClick={(e) => {
              this.color(e)
            }}>即将过期</span>
            <span className='floatleft title_1 cursor' onClick={(e) => {
              this.color(e)
            }}>最优惠</span>
            <span className='floatleft title_1 cursor' onClick={(e) => {
              this.color(e)
            }}>新到账</span>
            <span className='floatleft title_2 cursor display'>(仅展示最近使用优惠券)</span>
            <span className='floatleft title_3 cursor display'>(仅展示最近过期优惠券)</span>
            {/*<span className='floatRight marginRight20 personal_Youhuiquan_title_div_span'><img src="../../images/personal/liebiao1.png" alt="" className='marginRight5' onClick={(e)=>{this.qiehuan(e)}}/>列表</span>*/}
            {/*<span className='floatRight personal_Youhuiquan_title_div_span'><img src="../../images/personal/liebiao.png" alt="" className='marginRight5' onClick={(e)=>{this.qiehuan(e)}}/>大图</span>*/}
            <div className='clear'></div>
          </div>
          <div className='personal_Youhuiquan_title_div1'>
            <ul>
              {
                this.state.yhq.map(function (item) {
                  let isUsed2 = item.is_use == 0 ?
                    <Link to={'/Chanpinzhongxin'} className='personal_Youhuiquan_title_div1_p_a'>
                      立即使用</Link> : null;
                  let isUsed = item.is_time == 3 ? null : isUsed2;
                  return (
                    <li key={item.index} data={item.is_time} data-index={item.is_use} data-a={item.type}
                        className='personal_Youhuiquan_li'>
                      <div className='personal_Youhuiquan_title_div1_p' key={item.activity_id}>
                        <span className='personal_Youhuiquan_title_div1_p_span'>￥</span>
                        <span className='personal_Youhuiquan_title_div1_p_span1'>{item.give_more}{item.rebate}</span>
                        <span className='youhuiquan_span youhuiquan_display'>折</span>
                        <span className='personal_Youhuiquan_title_div1_p_span2'></span>
                        <span className='personal_Youhuiquan_title_div1_p_span3'>优惠券 <span
                          className='white1'>【满{item.buy_more}元可以使用】</span></span>
                        <span className='personal_Youhuiquan_title_div1_p_span4'>{item.group_title}可用</span>
                        <span
                          className='personal_Youhuiquan_title_div1_p_span5'>有效期【{item.start_time}-{item.end_time}】</span>
                        {isUsed}
                        <img src={require("../../images/personal/jijiangguoqi.png")} alt=""
                             className='personal_Youhuiquan_title_div1_p_img  youhuiquan_jijiangguoqi display'/>
                        <img src={require("../../images/personal/yiguoqi.png")} alt=""
                             className='personal_Youhuiquan_title_div1_p_img2 display youhuiquan_yiguoqi'/>
                        <img src={require("../../images/personal/yishanchu.png")} alt=""
                             className='personal_Youhuiquan_title_div1_p_img2 display'/>
                        <img src={require("../../images/personal/yishiyong.png")} alt=""
                             className='personal_Youhuiquan_title_div1_p_img2 youhuiquan_yishiyong display'/>
                        <img src={require("../../images/youhuiquan/dazhe.png")} alt=""
                             className='personal_Youhuiquan_title_div1_p_img6 display'/>
                      </div>
                    </li>
                  )
                }, this)
              }
              <div ref='youhuiquan' className='center'>
                <p className='font20'>亲，您没有该类别的优惠券哦~</p>
                <div className='personalCon1_table_tr_p'><Link to="/Chanpinzhongxin"><span
                  className='personalCon1_table_td'>去产品中心</span></Link></div>
              </div>
              <div className='clear'></div>
            </ul>
            <div className='xian'></div>
          </div>
          {/*分页*/}
          <div className='width988 marginTop20 marginBottom20 paddingBtm20'>
            <span className='floatRight personal_zhanneixin_title_div3_span3'><Pagination showQuickJumper={true}
                                                                                          defaultCurrent={1}
                                                                                          defaultPageSize={10}
                                                                                          total={this.state.cons}
                                                                                          onChange={(e) => {
                                                                                            this.fenye(e)
                                                                                          }}/></span>
            <div className='clear'></div>
          </div>
          <div className='xian'></div>

        </div>
      </div>
    );
  }

  componentDidUpdate() {
    var a = document.getElementsByClassName('personal_Youhuiquan_li');
    for (var i = 0; i < a.length; i++) {
      var b = a[i].getAttribute('data-index');
      var c = a[i].getAttribute('data');
      var d = a[i].getAttribute('data-a');
      if (b == '1') {
        a[i].className = 'youhuiquan_img personal_Youhuiquan_li'
        var yishiyong = document.getElementsByClassName('youhuiquan_yishiyong');
        yishiyong[i].className = 'youhuiquan_yishiyong personal_Youhuiquan_title_div1_p_img2';
      } else {
        a[i].className = 'personal_Youhuiquan_li'
        if (c == '2') {
          var jijiangguoqi = document.getElementsByClassName('youhuiquan_jijiangguoqi');
          jijiangguoqi[i].className = 'personal_Youhuiquan_title_div1_p_img youhuiquan_jijiangguoqi'
        } else if (c == '3') {
          a[i].className = 'youhuiquan_img personal_Youhuiquan_li'
          var yiguoqi = document.getElementsByClassName('youhuiquan_yiguoqi');
          yiguoqi[i].className = 'personal_Youhuiquan_title_div1_p_img2 youhuiquan_yiguoqi'
        }
        if (d == '4') {
          var danwei = document.getElementsByClassName('personal_Youhuiquan_title_div1_p_span');
          var zhekou = document.getElementsByClassName('youhuiquan_span');
          var jiage = document.getElementsByClassName('personal_Youhuiquan_title_div1_p_span1');
          var zhe = document.getElementsByClassName('personal_Youhuiquan_title_div1_p_img6');
          danwei[i].className = 'personal_Youhuiquan_title_div1_p_span youhuiquan_display';
          zhekou[i].className = 'youhuiquan_span';
          jiage[i].className = 'personal_Youhuiquan_title_div1_p_span1 youhuiquan_zhe';
          zhe[i].className = 'personal_Youhuiquan_title_div1_p_img6';
        }
      }

    }
  }
}


export default withRouter(PersonalYouhuiquan);
