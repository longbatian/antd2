import React from 'react';
import {Carousel} from 'antd';
import {Link,Redirect} from 'react-router-dom';
// import Fenlei from './fenlei';
import InterfaceUtil from '../../util/InterfaceUtil';
import CoojiePage from '../../util/CoojiePage';
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

    var user_type = CoojiePage.getCoojie('user_type');
    let token = CoojiePage.getCoojie('token');
    let user_id = CoojiePage.getCoojie('user_id')
    var jylx = CoojiePage.getCoojie('jylx');
    const that = this;
      if(/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
          window.location.href = InterfaceUtil.wapUrl()+"/wap/compents/home.html"
      }

    //  banner
    $.ajax({
      // url:'http://192.168.1.49/index.php/index/user/user_reg',
      url: InterfaceUtil.getUrl(28),
      type: 'post',
      dataType: 'json',
      data: InterfaceUtil.addTime({
          user_id:user_id,
          token:token
      }),
      beforeSend: function (xhr) {
      },
      success: function (data, textStatus, jqXHR) {
        var data = data;
          // console.log(data.data.industry)
       if(data.code===1){
         that.setState({
            banner: data.data.banner,
            hy: data.data.industry,
            news: data.data.notice,
            adv: data.data.adv,
          });
       }

      }

    })


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
      return <Redirect push to="/NewXq"/>; //or <Redirect push to="/sample?a=xxx&b=yyy" /> 传递更多参数
    }

    let adv=_state.adv.length>0?_state.adv.map((item,i)=>{
        return<Link key={item.id} to={item.url}>
            <img src={_state.lujin + item.image}
                 className='index_lunbo_div_guanggao_con_img' alt=""/>
        </Link>
    }):null;
    return (
      <div className='container index_lunbo relative'>
        {/*轮播*/}
        <div className='index_lunbo_div'>

          <Carousel autoplay>

            {
              _state.banner.map(function (item, i) {
                let imgUrl={
                  background:"url("+this.state.lujin + item.image+")",
                  backgroundPosition:"center center",
                }
                return (
                  <div className='index_lunbo_div_img' key={i}>
                    <Link to={item.url} className='index_lunbo_div_img'>
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

                <div className='clear'/>
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
