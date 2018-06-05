import React from 'react';
import {withRouter,Link} from "react-router-dom";
import InterfaceUtil from '../../util/InterfaceUtil';
import LoginPage from '../../util/LoginPage';
import CoojiePage from '../../util/CoojiePage';
import $ from 'jquery';
import {PubSub} from "pubsub-js";

class Yincanglan extends React.Component{
  constructor(props){
    super(props); //调用父类的构造方法；
    this.loginPage=new LoginPage();
    this.state={
      car:'0',
      xiaoxi:'0',
    }
  }

  //回到顶部
  top(e){
    $("html,body").animate({scrollTop:0},500)
  }
  //改变颜色
  color(e){
    if(e.target.children.length==0){
      e.target.parentNode.className='yclBlue xuanxiang_li'
    }else{
      e.target.className='yclBlue xuanxiang_li'
    }
  }
  color1(e){
    if(e.target.children.length==0){
      e.target.parentNode.className=' xuanxiang_li'
    }else{
      e.target.className=' xuanxiang_li'
    }
  }
  color2(e){
    if(e.target.children.length==0){
      e.target.parentNode.parentNode.className='yclBlue perCar_li'
    }else if(e.target.children.length==2){
      e.target.parentNode.className='yclBlue perCar_li'
    }else {
      e.target.className='yclBlue perCar_li'
    }
  }
  color3(e){
    if(e.target.children.length==0){
      e.target.parentNode.parentNode.className=' perCar_li'
    }else if(e.target.children.length==2){
      e.target.parentNode.className=' perCar_li'
    }else {
      e.target.className=' perCar_li'
    }
  }
  color4(e){
    if(e.target.children.length==0){
      e.target.parentNode.className='yclBlue xuanxiang_li';
      $('.xuanxiang1_li').addClass('display');
      e.target.parentNode.lastChild.className=' xuanxiang1_li';
    }else{
      e.target.className='yclBlue xuanxiang_li';
      $('.xuanxiang1_li').addClass('display');
      e.target.lastChild.className=' xuanxiang1_li';
    }
  }
  color5(e){
    if(e.target.children.length==0){
      e.target.parentNode.className=' xuanxiang_li';
      $('.xuanxiang1_li').addClass('display');
    }else{
      e.target.className=' xuanxiang_li';
      $('.xuanxiang1_li').addClass('display');
    }
  }
  color6(e){
    if(e.target.children.length==0){
      $('.xuanxiang1_li1').removeClass('display');
      $('.xuanxiang_li').eq(4).addClass('yclBlue')
    }else{
      $('.xuanxiang_li').eq(4).addClass('yclBlue')
      $('.xuanxiang1_li1').removeClass('display');
    }
  }
  color7(e){
    if(e.target.children.length==0){
      $('.xuanxiang_li').eq(4).removeClass('yclBlue')
      $('.xuanxiang1_li1').addClass('display');
    }else{
      $('.xuanxiang_li').eq(4).removeClass('yclBlue')
      $('.xuanxiang1_li1').addClass('display');
    }
  }

  componentDidMount(){

    var user_type=CoojiePage.getCoojie('user_type');
    var id=CoojiePage.getCoojie('user_id');
    this.ajaxBuyCarYinCang(id,user_type);
    this.pubsub_token=PubSub.subscribe('PubSubmessage', (topic,message)=> {
          this.ajaxBuyCarYinCang(id,user_type);
    })
    //  广告位

  }
  ajaxBuyCarYinCang(id,user_type){
      const that=this;
      $.ajax({
          // url:'http://192.168.1.49/index.php/index/user/user_reg',
          url: InterfaceUtil.getUrl(0),
          type: 'post',
          dataType: 'json',
          data: {
              'member_id':id,
              "user_type":user_type
          },
          beforeSend: function (xhr) {
          },
          success: function (data, textStatus, jqXHR) {
              var data=data;
              // console.log(data)
              // data=JSON.parse(data);
              if(data.data.length==0){

              }else{
                  if (data.data.cart_number!=undefined){
                      that.setState({
                          car:data.data.cart_number,
                          xiaoxi:data.data.znx_count,
                      });
                  }
              }

          }

      })
  }
    componentWillUnmount(){
        PubSub.unsubscribe(this.pubsub_token);
    }
  render(){
    return(
     <div className='sidebars'>
       {/*会员中心与购物车*/}
       <ul className='perCar'>

         <li className='perCar_li' onClick={()=>this.loginPage.loginGo("/Personal",this.props)}
             onMouseOver={(e)=>{this.color2(e)}} onMouseOut={(e)=>{this.color3(e)}}>
           {/*<Link to="/Chanpinzhongxin">*/}
           <p>
             <img src={require("../../images/index/huiyuan.png")} alt=""/>
            会员中心
             <span></span>
           </p>
           {/*</Link>*/}
         </li>
         <li className='perCar_li' onClick={()=>this.loginPage.loginGo("/Buycar",this.props)}
         onMouseOver={(e)=>{this.color2(e)}} onMouseOut={(e)=>{this.color3(e)}}>

             <p>
             <img src={require("../../images/index/buyCar.png")} className='perCar_li1_img' alt=""/>
             购物车
             <span className='perCar_li1_span'>{this.state.car}</span>
           </p>

         </li>
       </ul>
       {/*选项栏*/}
       <ul className='xuanxiang'>
         {/*<li className='xuanxiang_li' onMouseOver={(e)=>{this.color4(e)}} onMouseOut={(e)=>{this.color5(e)}}>*/}
         <li className='xuanxiang_li'>
           <a href="http://sighttp.qq.com/msgrd?v=1&uin=2885052533" target='_target'>
             <img src={require("../../images/index/kefu.png")} alt=""/>
             <span className='xuanxiang1_li display'>
              客服咨询
              </span>
           </a>
         </li>

         <li className='xuanxiang_li'
             onClick={()=>this.loginPage.loginGo("/Youhuiquan",this.props)}
             >
           <img src={require("../../images/index/youhuiquan.png")} alt=""/>
           <div className='xuanxiang1_li '>优惠券</div>
         </li>
         <li className='xuanxiang_li'
             onClick={()=>this.loginPage.loginGo("/Wodeshoucang",this.props)}
             >
           <img src={require("../../images/index/xin.png")} alt=""/>
           <div className='xuanxiang1_li '>我的收藏</div>
         </li>

         <li className='xuanxiang_li relative'
             onClick={()=>this.loginPage.loginGo("/Zhanneixin",this.props)}
            >
           <img src={require("../../images/index/xiaoxi.png")} alt=""/>
           {/*消息提示*/}
           <div className='xiaoxi_tishi'>{this.state.xiaoxi}</div>
           <div className='xuanxiang1_li '>我的消息</div>
         </li>

         {/*<li className='xuanxiang_li' onMouseOver={(e)=>{this.color6(e)}} onMouseOut={(e)=>{this.color7(e)}}>*/}
         <li className='xuanxiang_li'>
           <img src={require("../../images/index/erweima.png")} alt=""/>
           <div className='xuanxiang1_li1 '><img src={require("../../images/index/shoujierweima.png")} alt=""/></div>
         </li>
       </ul>

       {/*回到顶部*/}
       <ul className='yclTop'>
         <li className='xuanxiang_li borderA' onMouseOver={(e)=>{this.color(e)}} onMouseOut={(e)=>{this.color1(e)}} onClick={(e)=>{this.top(e)}}>
           <img src={require("../../images/index/celanBTM.png")} alt=""/>
         </li>
         <li className='xuanxiang_li display' onMouseOver={(e)=>{this.color(e)}} onMouseOut={(e)=>{this.color1(e)}}>
           <img src={require("../../images/index/xie.png")} alt=""/></li>
       </ul>
     </div>
    )
  }
  componentDidUpdate(){

  }
}
// export default Yincanglan
export default withRouter(Yincanglan);
