import React from 'react';
import $ from 'jquery';
import {Link,withRouter} from 'react-router-dom';
import { Carousel } from 'antd';
import InterfaceUtil from '../../util/InterfaceUtil';
import '../../styles/news/news.css';

class NewXq2 extends React.Component{
  constructor(props){
    super(props); //调用父类的构造方法；
    this.state={
      news_con:[],
      news_title:[],
      con1:'',
      title:'',
      pre:'',
      next:'',
      lujin:InterfaceUtil.getImgUrl(),
    }
  }

  xuanze(e){
      this.props.history.push('/NewZX')
    // window.location.replace('#/NewZX');
    $('.news_zuo_head_li').removeClass('blue');
    e.target.className='news_zuo_head_li blue';
    var pid = e.target.getAttribute('data');
    document.cookie="pid="+pid;
  }

  huanye(e){
    var a = e.target.getAttribute('data');
    document.body.scrollTop = document.documentElement.scrollTop = 0;
    document.cookie = 'nid=' + a;

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

    var nid = getCookie('nid');
    const that = this;
    //  广告位
    $.ajax({
                url: InterfaceUtil.getUrl(30),
                type: "post",
                data: {
           'nid': nid
              },
                dataType: "json",
                success: function(data){
             if (data.data.length == 0) {

        } else {
          alert(JSON.stringify(data.data.pre)+'--'+JSON.stringify(data.data.next));
          that.setState({
            con1: data.data.list.content,
            title: data.data.list.title,
            pre: data.data.pre,
            next: data.data.next,
          }, () => {

            var pre = document.getElementsByClassName('news_pre');
            var next = document.getElementsByClassName('news_next');
            var a = pre[0].getAttribute('data');
            var b = next[0].getAttribute('data');
            a = '' + a;
            b = '' + b;
            // console.log(a);
            if (a == 'null') {
              // console.log('aaaa')
              pre[0].className = 'marginBottom10 news_pre display cursor'
            } else {
              pre[0].className = 'marginBottom10 news_pre cursor'
            }
            if (b == 'null') {
              // console.log('bbbb')
              next[0].className = 'news_next display cursor'
            } else {
              next[0].className = 'news_next cursor'
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
    // ajax.open('post',"http://192.168.1.49/index.php/index/news/news_info",false);
    // ajax.open('post', InterfaceUtil.getUrl(30), false);
    // ajax.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    // ajax.onreadystatechange = function () {
    //   if (ajax.readyState == 4 && ajax.status == 200 || ajax.status == 304) { // readyState == 4说明请求已完成
    //     var data = ajax.responseText;
    //     data = JSON.parse(data);

    //   }
    // };
    // ajax.send('&nid=' + nid);
  }

  huanye1(e){
    var a =e.target.parentNode.getAttribute('data');
    document.body.scrollTop = document.documentElement.scrollTop = 0;
    document.cookie="nid="+a;
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
    var nid=getCookie('nid');
    const that=this;
    //  广告位
     $.ajax({
                url: InterfaceUtil.getUrl(30),
                type: "post",
                data: {
     'nid' : nid
              },
                dataType: "json",
                success: function(data){
            if(data.data.length==0){

        }else{
          that.setState({
            con1:data.data.list.content,
            title:data.data.list.title,
            pre:data.data.pre,
            next:data.data.next,
          },()=> {
            var pre=document.getElementsByClassName('news_pre');
            var next=document.getElementsByClassName('news_next');
            var a=pre[0].getAttribute('data');
            var b=next[0].getAttribute('data');
            a=''+a;
            b=''+b;
            // console.log(a);
            if(a=='null'){
              console.log('aaaa')
              pre[0].className='marginBottom10 news_pre display cursor'
            }else{
              pre[0].className='marginBottom10 news_pre cursor'
            }
            if(b=='null'){
              // console.log('bbbb')
              next[0].className='news_next display cursor'
            }else{
              next[0].className='news_next cursor'
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
    // ajax.open('post',"http://192.168.1.49/index.php/index/news/news_info",false);
    // ajax.open('post',InterfaceUtil.getUrl(30),false);
    // ajax.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
    // ajax.onreadystatechange = function() {
    //   if (ajax.readyState == 4 && ajax.status == 200 || ajax.status == 304) { // readyState == 4说明请求已完成
    //     var data=ajax.responseText;
    //     data=JSON.parse(data);

    //   }
    // };
    // ajax.send("&nid="+nid);
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
    var nid=getCookie('nid');
    var pid=getCookie('pid');
    const that=this;
    //  广告位
     $.ajax({
                url: InterfaceUtil.getUrl(30),
                type: "post",
                data: {
     'nid' : nid
              },
                dataType: "json",
                success: function(data){
            if(data.data.length==0){

        }else{
          that.setState({
            con1:data.data.list.content,
            title:data.data.list.title,
            pre:data.data.pre,
            next:data.data.next,
          },()=> {
            var pre=document.getElementsByClassName('news_pre');
            var next=document.getElementsByClassName('news_next');
            var a=pre[0].getAttribute('data');
            var b=next[0].getAttribute('data');
            a=''+a;
            b=''+b;
            // console.log(a);
            if(a=='null'){
              // console.log('aaaa')
              pre[0].className='marginBottom10 news_pre display'
            }
            if(b=='null'){
              // console.log('bbbb')

              next[0].className='news_next display'
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
    // ajax.open('post',"http://192.168.1.49/index.php/index/news/news_info",false);
    // ajax.open('post',InterfaceUtil.getUrl(30),false);
    // ajax.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
    // ajax.onreadystatechange = function() {
    //   if (ajax.readyState == 4 && ajax.status == 200 || ajax.status == 304) { // readyState == 4说明请求已完成
    //     var data=ajax.responseText;
    //     data=JSON.parse(data);

    //   }
    // };
    // ajax.send("&nid="+nid);

    // ajax.open('post',"http://192.168.1.49/index.php/index/news/newlist",false);
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
    // ajax.open('post',InterfaceUtil.getUrl(31),false);
    // ajax.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
    // ajax.onreadystatechange = function() {
    //   if (ajax.readyState == 4 && ajax.status == 200 || ajax.status == 304) { // readyState == 4说明请求已完成
    //     var data=ajax.responseText;
    //     data=JSON.parse(data);
    //     if(data.data.length==0){

    //     }else{
    //       that.setState({
    //         news_title:data.data.new_type,
    //         news_con:data.data.list,
    //       });
    //     }
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
                <div  data={item.id} onClick={(e)=>{this.huanye1(e)}}> <img src={this.state.lujin+item.logo} className='news_zuo_head_div1' alt=""/></div>
                    )
                  },this )
                }
              </Carousel>
            </div>
          </div>
         {/*右侧内容栏*/}
         <div className='news_you1 news_you floatRight marginTop20'>
           <div className='news_you_div'>
             <p className='marginLeft5'>当前位置 > <Link to="/Index">首页</Link> > 新闻中心 </p>
           </div>
           <div className='news_you_div1'>
             <h1 className='news_you_div1_h1'>{this.state.title}</h1>
             <p   dangerouslySetInnerHTML={{__html:this.state.con1}}></p>
           </div>
         </div>
         <div className='news_you floatRight marginTop10'>
           <p className='marginBottom10 news_pre cursor' data={this.state.pre.id} onClick={(e)=>{this.huanye(e)}}>
             上一篇:{this.state.pre.title}</p>
           <p className='news_next cursor'data={this.state.next.id} onClick={(e)=>{this.huanye(e)}}>
             下一篇:{this.state.next.title}</p>
         </div>
         <div className='clear'></div>
       </div>

     </div>
    )
  }
  componentDidUpdate(){

  }
}
export default withRouter(NewXq2);
