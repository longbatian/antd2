import React from 'react';
import {Link} from 'react-router-dom';
import InterfaceUtil from '../../util/InterfaceUtil';
import $ from 'jquery';

import CoojiePage from "../../util/CoojiePage";

class Celan extends React.Component{
  constructor(props){
    super(props); //调用父类的构造方法；
    this.state={
      celan:[],
    }
  }

  //侧栏点击
  louceng(e,is){
    var gao=$('.scrollTop'+is).offset().top-80;
    $("html,body").animate({scrollTop:gao},200);

  }
  //回到顶部
  top(e){
    $("html,body").animate({scrollTop:0},500)
  }

  componentDidMount(){

      var user_id = CoojiePage.getCoojie('user_id');
      var token = CoojiePage.getCoojie('token');
    const that=this;
    //  广告位
    $.ajax({
      // url:'http://192.168.1.49/index.php/index/user/user_reg',
      url: InterfaceUtil.getUrl(0),
      type: 'post',
      dataType: 'json',
      data: InterfaceUtil.addTime({
          user_id:user_id,
          token:token
      }),
      beforeSend: function (xhr) {
      },
      success: function (data, textStatus, jqXHR) {
        var data=data;

        // data=JSON.parse(data);
        if(data.data.length==0){

        }else{
          that.setState({
            celan:data.data.list,
          });
        }

      }

    })

    // try {
    //   window.ajax = new ActiveXObject("Msxml2.XMLHTTP");
    // } catch(e) {
    //   try {
    //     window.ajax = new ActiveXObject("Microsoft.XMLHTTP");
    //   } catch(e1) {
    //     window.ajax = new XMLHttpRequest();
    //   }
    // }
    // // ajax.open('post',"http://192.168.1.49/index.php/index/index/other",false);
    // ajax.open('post',InterfaceUtil.getUrl(0),false);
    // ajax.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
    // ajax.onreadystatechange = function() {
    //   if (ajax.readyState == 4 && ajax.status == 200 || ajax.status == 304) { // readyState == 4说明请求已完成
    //     var data=ajax.responseText;
    //     data=JSON.parse(data);
    //     if(data.data.length==0){

    //     }else{
    //       that.setState({
    //         celan:data.data.floors,
    //       });
    //     }
    //   }
    // };
    // ajax.send("user_type="+user_type+"&member_id="+member_id);
  }

  render(){
    return(
     <div>
       <ul className='celan display'>

         {/*<li className='celan_current louceng_top'onClick={(e)=>{this.louceng(e)}}><p className='celan_p_current'>本周精选</p></li>*/}
         {
           this.state.celan.map(function (item,i){

             return(
         <li
           key={i+item}
           className='louceng_top'
           onClick={(e)=>{this.louceng(e,i)}} data={i}>
           <p>{item.name}</p>
         </li>
             )
           },this )
         }
         <li className='louceng_top'
             onClick={(e)=>{this.louceng(e,8)}} ><p className='celan_p_current'>品牌专区</p></li>
         {/*<li className='louceng_top'*/}
             {/*onClick={(e)=>{this.louceng(e,9)}}><p className='celan_p_current'>新闻资讯  </p></li>*/}
         <li onClick={(e)=>{this.top(e)}}>
           <p>
             <img src={require("../../images/index/celanBTM.png")} alt=""/>
             TOP
           </p>
         </li>
       </ul>
     </div>
    )
  }
  componentDidUpdate(){

  }
}
export default Celan
