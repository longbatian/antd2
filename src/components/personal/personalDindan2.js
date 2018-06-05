// import $ from "../../js/jquery.min";
import $ from 'jquery';
require('styles/common.css');
require('styles/personal/personalDindan.css')

import React from 'react';
import { Input,Button,Select,Pagination,Timeline,   } from 'antd';
import {Link} from 'react-router-dom';
import InterfaceUtil from '../../util/InterfaceUtil';
const Option = Select.Option;



//分页
// function onChange(pageNumber) {
//   console.log('Page: ', pageNumber);
//   function getCookie(cookieName) {
//     var strCookie = document.cookie;
//     var arrCookie = strCookie.split("; ");
//     for(var i = 0; i < arrCookie.length; i++){
//       var arr = arrCookie[i].split("=");
//       if(cookieName == arr[0]){
//         return arr[1];
//       }
//     }
//     return "";
//   }
//   var username=getCookie('username');
//   var token=getCookie('token');
//   var user_id=getCookie('user_id');
//   var jylx=getCookie('jylx');
//   $.ajax({
//     url:'http://192.168.1.49/index.php/index/user_order/getorder',
//     type:'post',
//     dataType:'json',
//     data:{
//       username:username,
//       token:token,
//       page:pageNumber,
//       limit:18,
//       user_id:user_id,
//       jylx:jylx
//     },
//     beforeSend:function(xhr){
//     },
//     success:function(data,textStatus,jqXHR){
//       console.log(data);
//     },
//
//   })
// }

class PersonalDindan extends React.Component {

  constructor(props){
    super(props); //调用父类的构造方法；
    this.state={
      dingdan:[],
      ddzt:[]
    }
  }



  //js事件
  dingdangenzong(e){
    var a=e.target.parentNode;
    a.lastChild.className='personalCon1_xuanfu1 personalCon1_xuanfu ';
  }
  dingdangenzong1(e){
    var a=e.target.parentNode;
    a.lastChild.className='personalCon1_xuanfu1 personalCon1_xuanfu display'
  }
  //
  xiangqing(e){
    var a = e.target.parentNode.parentNode.firstChild.value;
    var order_id=a;
    document.cookie="order_id="+order_id;
  }

  //切换颜色
  color(e){
    $('.shoucang_head').removeClass('orange');
    e.target.className='shoucang_head orange cursor';
    var a=e.target.innerText;
    var zhongwen=/[\u4e00-\u9fa5]/g;
    var b=a.match(zhongwen).join('');
    if(b=='待付款'){
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
      const that=this;
      //订单ajax
      try {
        window.ajax = new ActiveXObject("Msxml2.XMLHTTP");
      } catch(e) {
        try {
          window.ajax = new ActiveXObject("Microsoft.XMLHTTP");
        } catch(e1) {
          window.ajax = new XMLHttpRequest();
        }
      }
      // ajax.open('post',"http://192.168.1.49/index.php/index/user_order/getorder",false);
      ajax.open('post',InterfaceUtil.getUrl(35),false);
      ajax.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
      ajax.onreadystatechange = function() {
        if (ajax.readyState == 4 && ajax.status == 200 || ajax.status == 304) { // readyState == 4说明请求已完成
          var data=ajax.responseText;
          data=JSON.parse(data);
          if(data.data.length==0){

          }else{
            that.setState({
              dingdan:data.data.list,
            });
            that.refs.dingdan.className='display'
          }

        }
      };
      ajax.send("username="+username+"&token="+token+"&page=1&limit=18&user_id="+user_id+"&ddzt=1");
    }
    else if(b=='待收货'){
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
      const that=this;
      //订单ajax
      try {
        window.ajax = new ActiveXObject("Msxml2.XMLHTTP");
      } catch(e) {
        try {
          window.ajax = new ActiveXObject("Microsoft.XMLHTTP");
        } catch(e1) {
          window.ajax = new XMLHttpRequest();
        }
      }
      // ajax.open('post',"http://192.168.1.49/index.php/index/user_order/getorder",false);
      ajax.open('post',InterfaceUtil.getUrl(35),false);
      ajax.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
      ajax.onreadystatechange = function() {
        if (ajax.readyState == 4 && ajax.status == 200 || ajax.status == 304) { // readyState == 4说明请求已完成
          var data=ajax.responseText;
          data=JSON.parse(data);
          if(data.data.length==0){

          }else{
            that.setState({
              dingdan:data.data.list,
            });
            that.refs.dingdan.className='display'
          }

        }
      };
      ajax.send("username="+username+"&token="+token+"&page=1&limit=18&user_id="+user_id+"&ddzt=3");
    }
    else if(b=='已完成'){
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
      const that=this;
      //订单ajax
      try {
        window.ajax = new ActiveXObject("Msxml2.XMLHTTP");
      } catch(e) {
        try {
          window.ajax = new ActiveXObject("Microsoft.XMLHTTP");
        } catch(e1) {
          window.ajax = new XMLHttpRequest();
        }
      }
      // ajax.open('post',"http://192.168.1.49/index.php/index/user_order/getorder",false);
      ajax.open('post',InterfaceUtil.getUrl(35),false);
      ajax.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
      ajax.onreadystatechange = function() {
        if (ajax.readyState == 4 && ajax.status == 200 || ajax.status == 304) { // readyState == 4说明请求已完成
          var data=ajax.responseText;
          data=JSON.parse(data);
          if(data.data.length==0){

          }else{
            that.setState({
              dingdan:data.data.list,
            });
            that.refs.dingdan.className='display'
          }

        }
      };
      ajax.send("username="+username+"&token="+token+"&page=1&limit=18&user_id="+user_id+"&ddzt=4");
    }
    else if(b=='全部'){
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
      const that=this;
      //订单ajax
      try {
        window.ajax = new ActiveXObject("Msxml2.XMLHTTP");
      } catch(e) {
        try {
          window.ajax = new ActiveXObject("Microsoft.XMLHTTP");
        } catch(e1) {
          window.ajax = new XMLHttpRequest();
        }
      }
      ajax.open('post',InterfaceUtil.getUrl(36),false);
      ajax.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
      ajax.onreadystatechange = function() {
        if (ajax.readyState == 4 && ajax.status == 200 || ajax.status == 304) { // readyState == 4说明请求已完成
          var data=ajax.responseText;
          data=JSON.parse(data);
          console.log(data.data);
          if(data.data.length==0){

          }else{
            that.setState({
              dingdan:data.data.list,
              ddzt:data.data.ddzt,
            });
            that.refs.dingdan.className='display'
          }

        }
      };
      ajax.send("username="+username+"&token="+token+"&page=1&limit=18&user_id="+user_id);
    }
  }

  //查看时间
  time1(){
    var a =$('.ant-select-selection-selected-value').attr('title');
    var b =$('.dingdanbianhao').prop('value');
    console.log(a,b);
    // if(a=='全部信息'){
    //   var a=''
    // }else if(a=='已读信息'){
    //   var a='2'
    // }else if(a=='未读信息'){
    //   var a='1'
    // }
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
    // //站内信
    // try {
    //   window.ajax = new ActiveXObject("Msxml2.XMLHTTP");
    // } catch(e) {
    //   try {
    //     window.ajax = new ActiveXObject("Microsoft.XMLHTTP");
    //   } catch(e1) {
    //     window.ajax = new XMLHttpRequest();
    //   }
    // }
    // ajax.open('post',"http://192.168.1.49/index.php/index/user/get_znx",false);
    // ajax.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
    // ajax.onreadystatechange = function() {
    //   if (ajax.readyState == 4 && ajax.status == 200 || ajax.status == 304) { // readyState == 4说明请求已完成
    //     var data=ajax.responseText;
    //     data=JSON.parse(data);
    //     if(data.data.length==0){
    //
    //     }else{
    //       that.setState({
    //         znx:data.data,
    //       });
    //     }
    //
    //   }
    // };
    // ajax.send("username="+username+"&token="+token+"&user_id="+user_id+"&page=1"+"&limit=10&status="+a);
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
    var user_id=getCookie('user_id');
    const that=this;
    //订单ajax
    try {
      window.ajax = new ActiveXObject("Msxml2.XMLHTTP");
    } catch(e) {
      try {
        window.ajax = new ActiveXObject("Microsoft.XMLHTTP");
      } catch(e1) {
        window.ajax = new XMLHttpRequest();
      }
    }
    ajax.open('post',"http://192.168.1.49/index.php/index/user_order/getorder",false);
    ajax.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
    ajax.onreadystatechange = function() {
      if (ajax.readyState == 4 && ajax.status == 200 || ajax.status == 304) { // readyState == 4说明请求已完成
        var data=ajax.responseText;
        data=JSON.parse(data);
        console.log(data.data);
        if(data.data.length==0){

        }else{
          that.setState({
            dingdan:data.data.list,
            ddzt:data.data.ddzt,
          });
          that.refs.dingdan.className='display'
        }

      }
    };
    ajax.send("username="+username+"&token="+token+"&page=1&limit=18&user_id="+user_id);
  }


  render() {
    return (
      <div className=' width988 floatRight'>
        {/*最近订单标题*/}
        <div className='personal_Dindan_title'>
            <p className='marginLeft20 fontFamily fontWeight floatleft'>所有订单</p>
          <ul>
            <li className='shoucang_head cursor orange'onClick={(e)=>{this.color(e)}}>全部</li>
            <div className='shu floatleft'></div>
            <li className='shoucang_head cursor'onClick={(e)=>{this.color(e)}}>待付款&nbsp;&nbsp;&nbsp;4</li>
            <div className='shu floatleft'></div>
            <li className='shoucang_head cursor'onClick={(e)=>{this.color(e)}}>待收货&nbsp;&nbsp;&nbsp;5</li>
            <div className='shu floatleft'></div>
            <li className='shoucang_head cursor'onClick={(e)=>{this.color(e)}}>已完成&nbsp;&nbsp;&nbsp;6</li>
            <div className='clear'></div>
          </ul>
        </div>
        <div className='bgWhite'>
        {/*编号查询*/}
        <div className='width988 white'>
          {/*输入框*/}
          <div className='personal_Dindan_con_inp'>
            <div className="example-input floatRight marginRight20">
              <Input placeholder="订单编号" className='dingdanbianhao' />
              <Select defaultValue='全部' style={{ width: 200 }}>
                <Option value="全部">全部</Option>
                <Option value="近一周">近一周</Option>
                <Option value="近一月">近一月</Option>
                <Option value="近三月">近三月</Option>
                <Option value="近半年">近半年</Option>
                <Option value="近一年">近一年</Option>
                <Option value="一年以前">一年以前</Option>
              </Select>
              <Button icon="search" style={{ marginLeft: 10 }} onClick={(e)=>{this.time1(e)}}>查询</Button>
            </div>
            <div className='clear'></div>
          </div>
        </div>
        {/*订单详情*/}
        <div className='width988 bgWhite'>
          <table className='personal_Dindan_con1_table'>
              <thead>
                <tr>
                  <th width="130px">订单号</th>
                  <th width="140px">订单时间</th>
                  <th width="75px">收货人</th>
                  <th width="110px">订单金额</th>
                  <th width="110px">实付金额</th>
                  <th width="65px">参与活动</th>
                  <th width="125px">
                    <select className="select" id="">
                      <option value="订单状态">订单状态</option>
                      <option value="待付款">待付款</option>
                      <option value="待收货">待收货</option>
                      <option value="已完成">已完成</option>
                      <option value="已取消">已取消</option>
                      <option value="已退货">已退货</option>
                    </select>
                  </th>
                  <th width="195px">操作</th>
                </tr>
              </thead>
              <tbody>
              {
                this.state.dingdan.map(function (item){
                  return(
                <tr key={item.index}>
                  <td className='orange hid width130'>{item.orderno}</td>
                  <td>{item.addtime}</td>
                  <td>{item.shr}</td>
                  <td>{item.ddprice}</td>
                  <td>{item.sfje}</td>
                  <td className='red'>{item.is_act}</td>
                  <td className='personalCon1_table_tr'>
                    <span className='orange dingdan_ddzt'>{item.ddzt} </span> <span className='marginLeft5 blue' onMouseOver={(e)=>{this.dingdangenzong(e)}} onMouseOut={(e)=>{this.dingdangenzong1(e)}}>订单跟踪</span>
                    {/*订单跟踪*/}
                    <div className='personalCon1_xuanfu1 display'>
                      <Timeline>
                        <Timeline.Item color="#f68c00"><span className='orange'>【已开票】 2017-12-07 13:30:30 您的订单商家已开票。</span></Timeline.Item>
                        <Timeline.Item>【已付款】 2017-12-07 13:30:30 您的订单商家正在积极备货中。</Timeline.Item>
                        {/*<li className='personalCon1_xuanfu_li'>查看全部订单</li>*/}
                        <Timeline.Item>【已提交】 2017-12-07 13:30:30 您的订单已提交，请尽快完成付款。</Timeline.Item>
                      </Timeline>
                    </div>
                  </td>
                  <td><input type="hidden" value={item.orderno}/>
                    <span className='personalCon1_table_tr_span1'>去付款</span>&nbsp;
                    <Link to="/Xiangqing" className='black'><span className='orange' onClick={(e)=>{this.xiangqing(e)}}>查看订单</span></Link>&nbsp;
                    <span className=''>取消订单</span></td>
                </tr>
                  )
                },this )
              }
              <tr rowSpan={8} ref='dingdan'>
                <td colSpan={8}>
                  <p className='font20'>亲，您还没有订单哦~</p>
                  <p className='personalCon1_table_tr_p'><a href=""  className='personalCon1_table_td'>去产品中心</a></p>
                </td>
              </tr>


              </tbody>
          </table>

          <div className='width988 marginTop20 marginBottom20 paddingBtm20'>
            <span className='floatRight personal_xiangqing_title_div3_span3'><Pagination showQuickJumper={true} defaultCurrent={1} total={500} onChange={this.onChange}  /></span>
            <div className='clear'></div>
          </div>
          {/*为您推荐*/}
          <div className='personalCon1_top1_con'>
            <div className='personal_line floatleft'></div>
            <span className='floatleft personal_line_p'>为您推荐</span>
            <table className='personalCon1_table1'>
              <tr>
                <td>
                  <img src={require("../../images/personal/loadpic.gif")} alt="" className='personalCon1_table_img'/>
                  <p>小儿感冒退烧贴</p>
                  <p>海南中化联合制药工业股</p>
                  <p className='orange'>￥6.20</p>
                </td>
                <td>
                  <img src={require("../../images/personal/loadpic.gif")} alt="" className='personalCon1_table_img'/>
                  <p>小儿感冒退烧贴</p>
                  <p>海南中化联合制药工业股</p>
                  <p className='orange'>￥6.20</p>
                </td>
                <td>
                  <img src={require("../../images/personal/loadpic.gif")} alt="" className='personalCon1_table_img'/>
                  <p>小儿感冒退烧贴</p>
                  <p>海南中化联合制药工业股</p>
                  <p className='orange'>￥6.20</p>
                </td>
                <td>
                  <img src={require("../../images/personal/loadpic.gif")} alt="" className='personalCon1_table_img'/>
                  <p>小儿感冒退烧贴</p>
                  <p>海南中化联合制药工业股</p>
                  <p className='orange'>￥6.20</p>
                </td>
                <td className='paddingRight5'>
                  <img src={require("../../images/personal/loadpic.gif")} alt="" className='personalCon1_table_img'/>
                  <p>小儿感冒退烧贴</p>
                  <p>海南中化联合制药工业股</p>
                  <p className='orange'>￥6.20</p>
                </td>
              </tr>
            </table>
            <div className='clear'></div>
          </div>
        </div>
        </div>
      </div>
    );
  }


}


export default PersonalDindan;
