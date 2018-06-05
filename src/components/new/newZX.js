import React from 'react';
import {Link,withRouter} from 'react-router-dom';
import { Carousel,Pagination } from 'antd';
import InterfaceUtil from '../../util/InterfaceUtil';
import $ from 'jquery';

class NewZX1 extends React.Component{
  constructor(props){
    super(props); //调用父类的构造方法；
    this.state={
      news_title:[],
      news_con:[],
      cons:'',
      lujin:'http://www.scjuchuang.com/',
    }
  }

  xuanze(e){
    $('.news_zuo_head_li').removeClass('blue');
    e.target.className='news_zuo_head_li blue';
    var pid = e.target.getAttribute('data');
    document.cookie="pid="+pid;
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
    const that=this;
    //  广告位
     $.ajax({
                url: InterfaceUtil.getUrl(31),
                type: "post",
                data: {
    "page":1,"limit":8,"pid":pid
              },
                dataType: "json",
                success: function(data){
           if(data.data.length==0){

        }else{
          that.setState({
            news_con:data.data.list,
            cons:data.data.cont,
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
    // ajax.open('post',"http://192.168.1.49/index.php/index/news/newlist",false);
    // ajax.open('post',InterfaceUtil.getUrl(31),false);
    // ajax.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
    // ajax.onreadystatechange = function() {
    //   if (ajax.readyState == 4 && ajax.status == 200 || ajax.status == 304) { // readyState == 4说明请求已完成
    //     var data=ajax.responseText;
    //     data=JSON.parse(data);
    //     console.log(data);
        
    //   }
    // };
    // ajax.send("&page=1"+"&limit=8&pid="+pid);
  }

  fenye(e){
    document.body.scrollTop = document.documentElement.scrollTop = 0;
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
    var pid=getCookie('pid');
    const that=this;
    //订单ajax
    $.ajax({
                url: InterfaceUtil.getUrl(31),
                type: "post",
                data: {
                  "page":e,"limit":8,"pid":pid
              },
                dataType: "json",
                success: function(data){
                if(data.data.length==0){

        }else{
          that.setState({
            news_con:data.data.list,
            cons:data.data.cont,
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
    // ajax.open('post',"http://192.168.1.49/index.php/index/news/newlist",false);
    // ajax.open('post',InterfaceUtil.getUrl(31),false);
    // ajax.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
    // ajax.onreadystatechange = function() {
    //   if (ajax.readyState == 4 && ajax.status == 200 || ajax.status == 304) { // readyState == 4说明请求已完成
    //     var data=ajax.responseText;
    //     data=JSON.parse(data);
    //     console.log(data);
        
    //   }
    // };
    // ajax.send("&page="+e+"&limit=8&pid="+pid);
  }
  tiaozhan(e){
    if(e.target.children.length==0){
      var a =e.target.parentNode.parentNode.getAttribute('data');
      document.cookie="nid="+a;
      this.props.history.push('/NewXq');
    }else{
      var a =e.target.parentNode.getAttribute('data');
      document.cookie="nid="+a;
        this.props.history.push('/NewXq');
      // window.location.replace('#/NewXq');
    }
  }
  tiaozhan1(e){
    var a =e.target.parentNode.getAttribute('data');
    document.cookie="nid="+a;
      this.props.history.push('/NewXq');
    // window.location.replace('#/NewXq');
  }

  //跳转
  huanye1(e){
    console.log(e.target);
    var nid = e.target.getAttribute('data');
    document.body.scrollTop = document.documentElement.scrollTop = 0;
    document.cookie="nid="+nid;
      this.props.history.push('/NewXq');
    // window.location.replace('#/NewXq');
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
    var pid=getCookie('pid');
    const that=this;
    //  广告位
     $.ajax({
                url: InterfaceUtil.getUrl(31),
                type: "post",
                data: {
    "page":1,"limit":8,"pid":pid
              },
                dataType: "json",
                success: function(data){
              if(data.data.length==0){

        }else{
          that.setState({
            news_title:data.data.new_type,
            news_con:data.data.list,
            cons:data.data.cont,
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
    // ajax.open('post',"http://192.168.1.49/index.php/index/news/newlist",false);
    // ajax.open('post',InterfaceUtil.getUrl(31),false);
    // ajax.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
    // ajax.onreadystatechange = function() {
    //   if (ajax.readyState == 4 && ajax.status == 200 || ajax.status == 304) { // readyState == 4说明请求已完成
    //     var data=ajax.responseText;
    //     data=JSON.parse(data);
    //     console.log(data);
       
    //   }
    // };
    // ajax.send("&page=1"+"&limit=8&pid="+pid);
  }

  render(){
    return(
     <div className='container'>
       <div className='contain'>
          {/*左侧导航栏*/}
          <div className='news_zuo floatleft marginTop20'>
            <div className='news_zuo_head'>
              聚创新闻
              <img src={require("../../images/xiajiantou.png")} className='news_zuo_head_img' alt=""/>
            </div>
            <ul>
              {
                this.state.news_title.map(function (item,i){
                  return(
              <li className='news_zuo_head_li' onClick={(e)=>{this.xuanze(e)}} data={item.pid}>{item.name}</li>
                  )
                },this )
              }
            </ul>
            <div className='news_zuo_head_div'>
              热点新闻
            </div>
            <div className='news_zuo_head_div1'>
              <Carousel autoplay dots={false}>
                {
                  this.state.news_con.map(function (item,i){
                    return(
                <div> <img src={this.state.lujin+item.logo} className='news_zuo_head_div1' data={item.id} alt="" onClick={(e)=>{this.huanye1(e)}}/></div>
                    )
                  },this )
                }
              </Carousel>
            </div>
          </div>
         {/*右侧内容栏*/}
         <div className='news_you floatRight marginTop20'>
           <div className='news_you_div'>
             <p className='marginLeft5'>当前位置 > <Link to="/Index">首页</Link> > 新闻中心 </p>
           </div>
           <ul>
             {
               this.state.news_con.map(function (item,i){
                 return(
             <li className='news_you_li cursor'>
               <div className='news_you_li_div floatleft'>
                 <img src={this.state.lujin+item.logo} className='news_you_li_div' alt=""/>
               </div>
               <div className='floatleft marginLeft20' data={item.id}>
                 <p className='marginBottom5' onClick={(e)=>{this.tiaozhan(e)}}>
                   <span className='news_you_li_p_span floatleft'>{item.title}</span>
                   <span className='news_you_li_p_span1 floatRight'>[2017-03-04]</span>
                   <div className='clear'></div>
                 </p>
                 <p className='news_you_li_p'onClick={(e)=>{this.tiaozhan1(e)}}>
                   {item.re}
                 </p>
                 <div className='clear'></div>
               </div>
               <div className='clear'></div>
             </li>
                 )
               },this )
             }
           </ul>
           {/*分页*/}
           <div className='marginTop20 marginBottom20 paddingBtm20'>
             <span className='floatRight personal_zhanneixin_title_div3_span3'><Pagination showQuickJumper={true}  defaultCurrent={1} defaultPageSize={5} total={this.state.cons} onChange={(e)=>{this.fenye(e)}}  /></span>
             <div className='clear'></div>
           </div>
         </div>
         <div className='clear'></div>
       </div>

     </div>
    )
  }
  componentDidUpdate(){

  }
}
export default withRouter(NewZX1);
