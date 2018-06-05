import React from 'react';
import {Carousel} from 'antd';
import {Link,Redirect} from 'react-router-dom';
// import Fenlei from './fenlei';
import InterfaceUtil from '../../util/InterfaceUtil';
import $ from 'jquery';
import '../../styles/index/lunbo.css';


class Lunbo extends React.Component {
  constructor(props) {
    super(props); //调用父类的构造方法；
    this.state = {
      fenlei: [],
      zilei: [],
      banner: [],
      hy: [],
      news: [],
      guanggao: [],
      adv:  [],
      adv1: {url:'',},
      lujin:InterfaceUtil.getImgUrl(),
      redirect:false,
    }
  }


  //广告切换
  guanggao(e) {
    $('.guanggao').removeClass('guanggao_current')
    e.target.className = 'guanggao_current guanggao';
    var a = e.target.innerText;
    a = a.trim();
    a = a.trim()
    if (a == '公告') {
      $('.index_lunbo_div_guanggao_con_ul').addClass('display')
      $('.index_lunbo_div_guanggao_con_ul').eq(1).removeClass('display')
    } else if (a == '行业') {
      $('.index_lunbo_div_guanggao_con_ul').addClass('display')
      $('.index_lunbo_div_guanggao_con_ul').eq(0).removeClass('display')
    }
  }


  componentDidMount() {
    $('.fenlei').show();
    $('.header_cd').find('li').eq(0).addClass('btn_Header');
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

    var user_type = getCookie('user_type');
    var token = getCookie('token');
    var jylx = getCookie('jylx');
    const that = this;
    //搜索条件ajax
    $.ajax({
      // url:'http://192.168.1.49/index.php/index/user/user_reg',
      url: InterfaceUtil.getUrl(23),
      type: 'post',
      dataType: 'json',
      data: {
        "type=1":"",

      },
      beforeSend: function (xhr) {
      },
      success: function (data, textStatus, jqXHR) {
        var data = data;
        // data = JSON.parse(data);
        if (data.data.length == 0) {

        } else {
          that.setState({
            fenlei: data.data
          });
        }

      }

    })
    // try {
    //   window.ajax = new ActiveXObject('Msxml2.XMLHTTP');
    // } catch (e) {
    //   try {
    //     window.ajax = new ActiveXObject('Microsoft.XMLHTTP');
    //   } catch (e1) {
    //     window.ajax = new XMLHttpRequest();
    //   }
    // }
    // // ajax.open('post',"http://192.168.1.49/index.php/index/index",false);
    // ajax.open('post', InterfaceUtil.getUrl(23), false);
    // ajax.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    // ajax.onreadystatechange = function () {
    //   if (ajax.readyState == 4 && ajax.status == 200 || ajax.status == 304) { // readyState == 4说明请求已完成
    //     var data = ajax.responseText;
    //     data = JSON.parse(data);
    //     if (data.data.length == 0) {

    //     } else {
    //       that.setState({
    //         fenlei: data.data
    //       });
    //     }
    //   }
    // };
    // ajax.send('type=1');
    //  banner
    $.ajax({
      // url:'http://192.168.1.49/index.php/index/user/user_reg',
      url: InterfaceUtil.getUrl(28),
      type: 'post',
      dataType: 'json',
      data: {
        user_type: user_type,

      },
      beforeSend: function (xhr) {
      },
      success: function (data, textStatus, jqXHR) {
        var data = data;

       if(data.status===1){
         that.setState({
            banner: data.data.banner,
            hy: data.data.hy,
            news: data.data.news,
            adv: data.data.adv,
          });
       }

      }

    })
    // try {
    //   window.ajax = new ActiveXObject('Msxml2.XMLHTTP');
    // } catch (e) {
    //   try {
    //     window.ajax = new ActiveXObject('Microsoft.XMLHTTP');
    //   } catch (e1) {
    //     window.ajax = new XMLHttpRequest();
    //   }
    // }
    // // ajax.open('post',"http://192.168.1.49/index.php/index/index/banners",false);
    // ajax.open('post', InterfaceUtil.getUrl(28), false);
    // ajax.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    // ajax.onreadystatechange = function () {
    //   if (ajax.readyState == 4 && ajax.status == 200 || ajax.status == 304) { // readyState == 4说明请求已完成
    //     var data = ajax.responseText;
    //     // console.log(data)
    //     data = JSON.parse(data);
    //     if (data.data.length == 0) {

    //     } else {
    //       that.setState({
    //         banner: data.data.banner,
    //         hy: data.data.hy,
    //         news: data.data.news,
    //         adv: data.data.adv,
    //         adv1: data.data.adv1
    //       });
    //     }
    //   }
    // };
    // ajax.send('user_type=' + user_type);

  }
  /**
   *
   *
   */

  getNews(id){
    document.cookie = 'nid=' + id;
    this.setState({redirect: true});
    // ='#/NewXq';
  }
  render() {
    const _state=this.state;
    const a = [];
    if (this.state.redirect) {
      return <Redirect push to="/NewXq" target="_blank"/>; //or <Redirect push to="/sample?a=xxx&b=yyy" /> 传递更多参数
    }

    let adv=_state.adv.length>0?_state.adv.map((item,i)=>{
        return<Link key={item.id} to={item.href}>
            <img src={_state.lujin + item.image}
                 className='index_lunbo_div_guanggao_con_img' alt=""/>
        </Link>
    }):null;
    return (
      <div className='container index_lunbo relative'>
        {/*轮播*/}
        <div className='index_lunbo_div'>

          <Carousel autoplay >
            {
              this.state.banner.map(function (item, i) {
                // console.log(item)
                var imgUrl={
                  background:"url("+this.state.lujin + item.image+")",
                  backgroundPosition:"center center",
                }
                return (
                  <div className='index_lunbo_div_img' key={item.id}>
                    <Link to={item.href} className='index_lunbo_div_img'>
                      {/*<img src={this.state.lujin + item.image} className='index_lunbo_div_img'*/}
                                               {/*alt=""/>*/}
                      <i style={imgUrl} className='index_lunbo_div_img'>

                      </i>
                    </Link>
                  </div>
                )
              }, this)
            }
          </Carousel>

        </div>
        {/*版心的内容*/}
        <div className='contain relative'>

          {/*广告位*/}
          <div className='index_lunbo_div_guanggao'>
            <div className='index_lunbo_div_guanggao_con'>
                {adv}
              {/*<a href={this.state.adv1.url}><img src={this.state.lujin + this.state.adv1.image}*/}
                                                 {/*className='marginTop5 index_lunbo_div_guanggao_con_img' alt=""/></a>*/}
              <div className='marginTop10 index_lunbo_div_guanggao_con_div'>
                <span className='guanggao_current guanggao' onClick={(e) => {
                  this.guanggao(e)
                }}>&nbsp;公告&nbsp;</span><span>|</span><span className='guanggao' onClick={(e) => {
                this.guanggao(e)
              }}>&nbsp;行业</span>
                <Link to={'/NewZX'} target="_blank">
                  <span className='floatRight'>更多>></span>
                </Link>

                <div className='clear'></div>
              </div>
              <ul className='index_lunbo_div_guanggao_con_ul display'>
                {
                  this.state.hy.map(function (item, i) {
                    return (
                      <li
                        onClick={(e)=>this.getNews(item.id)}
                        key={item.id+'lunBoXin'}
                        className='hid'
                      >{item.title}</li>
                    )
                  }, this)
                }
              </ul>
              <ul className='index_lunbo_div_guanggao_con_ul '>
                {
                  this.state.news.map(function (item) {
                    return (
                      <li key={item.id+'lunbo2'}
                          onClick={(e)=>this.getNews(item.id)}
                          className='hid'>{item.title}</li>
                    )
                  }, this)
                }
              </ul>
            </div>
          </div>
          <div className='clear'></div>
        </div>
      </div>
    )
  }
}

export default Lunbo
