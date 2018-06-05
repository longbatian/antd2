import $ from "jquery";
import React from 'react';
import { Input,Button,Select,Pagination,Timeline   } from 'antd';
import Tuijian from '../common/tuijian';
import {Link,withRouter} from 'react-router-dom';
import InterfaceUtil from '../../util/InterfaceUtil';
import CoojiePage from '../../util/CoojiePage';
import {PubSub} from 'pubsub-js';

//查询事件
function handleChange(value) {
  console.log(`selected ${value}`);
}
//分页
function onChange(pageNumber) {
  console.log('Page: ', pageNumber);
}

class PersonalXiangqing extends React.Component {

  constructor(props){
    super(props); //调用父类的构造方法；
    this.state={
      ddxq:[],
      ddsj:[],
      sphj:'',
      lujin:InterfaceUtil.getImgUrl(),
      checked:'',
      cons:1,
      orderno:[],
    }
  }

  //分页
  fenye(e){
    function getCookie(cookieName) {
      var strCookie = document.cookie;
      var arrCookie = strCookie.split("; ");
      for(var i = 0; i < arrCookie.length; i++){
        var arr = arrCookie[i].split("=");
        if(cookieName == arr[0]){
          return arr[1];
        }
      }
      return "";
    }
    var username=getCookie('username');
    var token=getCookie('token');
    var user_id=getCookie('user_id');
     var order_id=CoojiePage.getCoojie('order_id');
    const that=this;
    //订单ajax
   $.ajax({
                url: InterfaceUtil.getUrl(43),
                type: "post",
                data: {
    "username":username,"token":token,"order_id":order_id
              },
                dataType: "json",
                success: function(data){
                       if(data.data.length==0){

        }else{
          that.setState({
            ddxq:data.data.order_info,
            ddsj:data.data.order,
          });
          that.refs.dingdan.className='display'
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
    // ajax.open('post',"http://192.168.1.49/index.php/index/user_order/getorderinfo",false);
    // ajax.open('post',InterfaceUtil.getUrl(43),false);
    // ajax.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
    // ajax.onreadystatechange = function() {
    //   if (ajax.readyState == 4 && ajax.status == 200 || ajax.status == 304) { // readyState == 4说明请求已完成
    //     var data=ajax.responseText;
    //     data=JSON.parse(data);
       
    //   }
    // };
    // ajax.send("username="+username+"&token="+token+"&order_id="+order_id);
  }

  BuyCar(e){

    var username=CoojiePage.getCoojie('username');
    var token=CoojiePage.getCoojie('token');
    var order_id=CoojiePage.getCoojie('order_id');
    var user_id=CoojiePage.getCoojie('user_id');
    const that = this;
    //我的收藏
    $.ajax({
                url: InterfaceUtil.getUrl(38),
                type: "post",
                data: {
    "username":username,"token":token,"order_id":order_id,"user_id":user_id
              },
                dataType: "json",
                success: function(data){
          if(data.status===1){
          PubSub.publish('PubSubmessage', data.status);
        }
        if(data.data=='1'){
          var ok =document.getElementsByClassName('buycar_ok');
          ok[0].className='buycar_ok';
          var timer1 =window.setTimeout(function(){
            ok[0].className='buycar_ok display';
          },3000);
        }else{
          if(data.info!='token过期'){
            var no =document.getElementsByClassName('buycar_no');
            var no_span =document.getElementsByClassName('buycar_no_con_span');
            no[0].className='buycar_no';
            no_span[0].innerText=data.info;
          }else{
              this.props.history.push('/Denglu');
            // window.location.href='#/Denglu';
          }
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
    // ajax.open('post',"http://192.168.1.49/index.php/index/user_order/cartaddall",false);
    // ajax.open('post',InterfaceUtil.getUrl(38),false);
    // ajax.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
    // ajax.onreadystatechange = function() {
    //   if (ajax.readyState == 4 && ajax.status == 200 || ajax.status == 304) { // readyState == 4说明请求已完成
    //     var data=ajax.responseText;
    //     data=JSON.parse(data);
       

    //   }
    // };
    // ajax.send("username="+username+"&token="+token+"&order_id="+order_id+"&user_id="+user_id);
  }

  BuyCar8(e){
    var id=e.target.getAttribute('data');
    var num=e.target.getAttribute('data-index');
    function getCookie(cookieName) {
      var strCookie = document.cookie;
      var arrCookie = strCookie.split("; ");
      for(var i = 0; i < arrCookie.length; i++){
        var arr = arrCookie[i].split("=");
        if(cookieName == arr[0]){
          return arr[1];
        }
      }
      return "";
    }
    var username=getCookie('username');
    var token=getCookie('token');
    var user_id=getCookie('user_id');
    const that = this;
    //我的收藏
   $.ajax({
                url: InterfaceUtil.getUrl(11),
                type: "post",
                data: {
    "username":username,"token":token,"user_id":user_id,"goods_id":id,"spsl":num
              },
                dataType: "json",
                success: function(data){
                  if(data.data=='1'){
          var ok =document.getElementsByClassName('buycar_ok');
          ok[0].className='buycar_ok';
          var timer1 =window.setTimeout(function(){
            ok[0].className='buycar_ok display';
          },3000);
        }else{
          if(data.info!='token过期'){
            var no =document.getElementsByClassName('buycar_no');
            var no_span =document.getElementsByClassName('buycar_no_con_span');
            no[0].className='buycar_no';
            no_span[0].innerText=data.info;
          }else{
              this.props.history.push('/Denglu');
            // window.location.href='#/Denglu';
          }
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
    // ajax.open('post',"http://192.168.1.49/index.php/index/user_order/cartadd",false);
    // ajax.open('post',InterfaceUtil.getUrl(11),false);
    // ajax.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
    // ajax.onreadystatechange = function() {
    //   if (ajax.readyState == 4 && ajax.status == 200 || ajax.status == 304) { // readyState == 4说明请求已完成
    //     var data=ajax.responseText;
    //     data=JSON.parse(data);
       
    //   }
    // };
    // ajax.send("username="+username+"&token="+token+"&user_id="+user_id+"&goods_id="+id+"&spsl="+num);
  }

  componentDidMount(){
    function getCookie(cookieName) {
      var strCookie = document.cookie;
      var arrCookie = strCookie.split("; ");
      for(var i = 0; i < arrCookie.length; i++){
        var arr = arrCookie[i].split("=");
        if(cookieName == arr[0]){
          return arr[1];
        }
      }
      return "";
    }
    var username=getCookie('username');
    var token=getCookie('token');
    var order_id=getCookie('order_id');
    const that = this;
    //我的收藏
    $.ajax({
                url: InterfaceUtil.getUrl(43),
                type: "post",
                data: {
    "username":username,"token":token,"order_id":order_id,"page":1,"limit":10
              },
                dataType: "json",
                success: function(data){
           if(data.data.length==0){

        }else{
          that.setState({
            ddxq:data.data.order_info,
            ddsj:data.data.order,
            sphj:data.data.order[0].ddprice,
          },()=> {
            var a=document.getElementsByClassName('xiangqing_ddzt');
            var b=a[0].innerText;
            if (b=='待付款'){
              var c=document.getElementsByClassName('personal_xiangqing_con_span1');
              c[0].className='personal_xiangqing_con_span1 fontFamily'
            }
          });
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
    // ajax.open('post',"http://192.168.1.49/index.php/index/user_order/getorderinfo",false);
    // ajax.open('post',InterfaceUtil.getUrl(43),false);
    // ajax.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
    // ajax.onreadystatechange = function() {
    //   if (ajax.readyState == 4 && ajax.status == 200 || ajax.status == 304) { // readyState == 4说明请求已完成
    //     var data=ajax.responseText;
    //     data=JSON.parse(data);
    //     console.log(data.data)
       

    //   }
    // };
    // ajax.send("username="+username+"&token="+token+"&order_id="+order_id+"&page=1&limit=10");

    //物流信息
     $.ajax({
                url: InterfaceUtil.getUrl(44),
                type: "post",
                data: {
    "username":username,"token":token,"limit":100,"orderno":order_id
              },
                dataType: "json",
                success: function(data){
            if(data.data.length==0){

        }else{
          that.setState({
            orderno:data.data
          },()=>{

          });
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
    // ajax.open('post',"http://192.168.1.49/index.php/index/order/order_wl",false);
    // ajax.open('post',InterfaceUtil.getUrl(44),false);
    // ajax.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
    // ajax.onreadystatechange = function() {
    //   if (ajax.readyState == 4 && ajax.status == 200 || ajax.status == 304) { // readyState == 4说明请求已完成
    //     var data=ajax.responseText;
    //     data=JSON.parse(data);
    //     console.log(data)
      

    //   }
    // };
    // ajax.send("username="+username+"&token="+token+"&limit=100&orderno="+order_id);
  }

  render() {
    return (
      <div className=' width988 floatRight'>
        {/*最近订单标题*/}
        <div className='personal_Dindan_title marginBottom20'>
          <p className='marginLeft20 fontFamily fontWeight font20'>订单详情</p>
        </div>
        {/*内容*/}
        <div className='bgWhite personal_xiangqing_title'>
          <div className='xian'></div>
          {
            this.state.ddsj.map(function (item){

              return(
          <div>
          {/*头部*/}
          <div className='width988 white'>
            {/*时间订单号*/}
            <div className='timeOrder'>
              <div className='personal_xiangqing_con_p'>
                <span className='fontFamily marginLeft10'>{item.addtime}</span>
                &nbsp;&nbsp;&nbsp;订单号:<span className='fontFamily xiangqing_ddh'>&nbsp;{item.orderno}</span>
                &nbsp;&nbsp;&nbsp;状态：<span  className='orange fontFamily xiangqing_ddzt'>{item.ddzt}</span>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <Link to="/Dingdan"
              ><span  className='personal_xiangqing_con_span1 fontFamily display'>去付款</span></Link>
              </div>
              <p className='personal_xiangqing_con_p1'>用户备注：<span>{item.bz}</span></p>
              <p className='personal_xiangqing_con_p1'>系统备注：<span className='red1'>{item.sysbz}</span></p>
            </div>
            <div className='clear'></div>
          </div>
          {/*物流详情*/}
          <div className='personal_xiangqing_title_con'>
            <div className='personal_xiangqing_title_con_div'>
              <p>配送方式：<span>自提</span></p>
              <p>发票信息：<span>增值税专用发票</span></p>
            </div>
            <div className='personal_xiangqing_title_con_div1'>
              {/*<Timeline>*/}
                {/*{*/}
                  {/*this.state.orderno.map(function (item){*/}
                    {/*return(*/}
                {/*<Timeline.Item></Timeline.Item>*/}
                    {/*)*/}
                  {/*},this )*/}
                {/*}*/}
              {/*</Timeline>*/}
              {/*{*/}
                {/*this.state.orderno.map(function (item){*/}
                  {/*return(*/}
              {/*<p className=''>{item.createtime}  {item.wldw}</p>*/}
                  {/*)*/}
                {/*},this )*/}
              {/*}*/}
              <Timeline className='wlxx'>
                {
                  this.state.orderno.map(function (item,i){
                    return(
                      <Timeline.Item>
                        <span className='wlxx_span'>
                        {item.createtime}\
                        {item.wldw}
                        </span>
                      </Timeline.Item>
                    )
                  },this )
                }

              </Timeline>
              <Timeline  className='ZWwlxx display'>
                <Timeline.Item><span className='wlxx_span'> 暂无物流信息</span></Timeline.Item>
              </Timeline>
            </div>
            <div className='clear'></div>
          </div>
          {/*收货信息*/}
          <div className='marginLeft20 marginTop20 personal_xiangqing_title_div2'>
            <p className='personal_xiangqing_title_div2_p1'>收货信息</p>
            <div className='personal_xiangqing_title_div2_div2'>收货人：</div><div className='personal_xiangqing_title_div2_div1'>{item.shr}</div>
            <br/>
            <div className='personal_xiangqing_title_div2_div'>联系方式：</div><div className='personal_xiangqing_title_div2_div1'>{item.shdh}</div>
            <br/>
            <div className='personal_xiangqing_title_div2_div'>收货地址：</div><div className='personal_xiangqing_title_div2_div1'>{item.shdz}</div>
            <div className='clear'></div>
          </div>
          {/*费用总计*/}
          <div className='marginTop20 personal_xiangqing_title_div2'>
            <p className='personal_xiangqing_title_div2_p1'>费用总计</p>
            <div className='personal_xiangqing_title_div2_div2'>商品金额：</div>
            <div className='personal_xiangqing_title_div2_div1'>{item.ddprice}</div>
            <br/>
            <div className='personal_xiangqing_title_div2_div'>+运费：</div><div className='personal_xiangqing_title_div2_div1'>￥<span>{item.ddyf}</span></div>
            <br/>
            <div className='personal_xiangqing_title_div2_div'>-优惠：</div><div className='personal_xiangqing_title_div2_div1'>￥<span>{item.yhqje}</span></div>
            <br/>
            <div className='personal_xiangqing_title_div2_div orange1'>实付金额：</div>
            <div className='personal_xiangqing_title_div2_div1 orange1'>￥<span className='orange1'>{item.sfje}</span></div>
            <div className='clear'></div>
          </div>
          </div>
              )
            },this )
          }

          <div className='clear'></div>
          {/*订单商品*/}
          <div className='personal_xiangqing_title_div3'>
            {/*商品信息头部*/}
            <div className='marginLeft20'>
              <span className='floatleft personal_xiangqing_title_div3_span1'>订单商品</span>
              <span className='floatRight marginRight20 personal_xiangqing_title_div3_span2' onClick={(e)=>{this.BuyCar(e)}}>全部加入购物车</span>
              <div className='clear'></div>
            </div>
            {/*商品信息*/}
            <table className='personal_Dindan_con1_table marginTop20'>
              <thead>
              <tr>
                <th width="80px">商品信息</th>
                <th width="170px">商品名称</th>
                <th width="160px">生产厂家</th>
                <th width="85px">规格</th>
                <th width="45px">单位</th>
                <th width="70px">参与活动</th>
                <th width="75px">商品单价</th>
                <th width="45px">数量</th>
                <th width="100px">小计</th>
                <th width="120px">操作</th>
              </tr>
              </thead>
              <tbody>
              {
                this.state.ddxq.map(function (item){
                  return(
              <tr key={item.index}>
                <td className='orange hid width130'><img src={this.state.lujin+item.sp_image} className='xiangqing_img' alt=""/></td>
                <td className='hid'>{item.sp_name}</td>
                <td className='hid'>{item.sp_name}</td>
                <td className='hid'>{item.sp_sku}</td>
                <td>{item.sp_dw}</td>
                <td><span className='red'>{item.act}</span></td>
                <td className='personalCon1_table_tr'>￥{item.sp_price}</td>
                <td>{item.sp_sl}</td>
                <td>￥{item.price_count}</td>
                <td><span className='personal_xiangqing_title_div3_span' data={item.sp_id} data-index={item.zxdw} onClick={(e)=>{this.BuyCar8(e)}}>加入购物车</span></td>
              </tr>
                  )
                },this )
              }

              </tbody>
              {/*商品合计*/}
              <div className='marginTop10'>
                <p className='personal_xiangqing_title_div3_p'><span className='personal_xiangqing_title_div3_p_span'>商品合计：</span><span className='red'>￥{this.state.sphj}</span></p>
              </div>
              {/*分页*/}
              <div className='width988 marginTop20 marginBottom20 paddingBtm20'>
                <span className='floatRight personal_zhanneixin_title_div3_span3'><Pagination showQuickJumper={true}  defaultCurrent={1} defaultPageSize={5} total={this.state.cons} onChange={(e)=>{this.fenye(e)}}  /></span>
                <div className='clear'></div>
              </div>
            </table>
          </div>
          <div className='clear'></div>
        </div>
        {/*推荐*/}
        <Tuijian data='5'/>

      </div>

    );
  }
  componentDidUpdate(){

    var ZWwlxx=document.getElementsByClassName('ZWwlxx');
    var wlxx=document.getElementsByClassName('wlxx');
    console.log('aaaaa');
    if(wlxx[0].children.length==0){
      ZWwlxx[0].className='ant-timeline ZWwlxx '
    }
  }
}


export default withRouter(PersonalXiangqing);
