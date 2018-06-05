import React from 'react';
import {withRouter,Link} from "react-router-dom";
import InterfaceUtil from '../../util/InterfaceUtil';
import $ from 'jquery';
import CoojiePage from '../../util/CoojiePage';



class Jiesuan1 extends React.Component{
  constructor(props){
    super(props); //调用父类的构造方法；
    this.state={
      feiyong1:''
    }
  }

  chuangjian(e){
      // var a =document.getElementsByClassName('jiesuan_sel');
      var b = $('.jiesuan_sel').eq(0).val();

      var bz=$('.jiesuan_div_div4_inp').val();

      console.log(bz)
      document.cookie ="bz=" + bz;
      document.cookie = "yhqid="+ b;

    // document.cookie = "yhqid" + bz;
    // console.log(CoojiePage.getCoojie("bz"));
    // console.log(CoojiePage.getCoojie("yhqid"));
    this.props.history.push('/Dingdan');

  }

  componentDidMount(){
    var a =document.getElementsByClassName('jiesuan_sousuo');
    var b=a[0].offsetTop;
    b=b+192;
    var c=document.body.offsetHeight;
    var d=b-c;
    window.onscroll = function() {
      if(window.scrollY<d){
        // a[0].className='container jiesuan_sousuo marginBottom20 jiesuan_sousuo_current'
        $('.jiesuan_sousuo').eq(0).attr('class','container jiesuan_sousuo marginBottom20 jiesuan_sousuo_current')
      }else {
        // a[0].className='container jiesuan_sousuo marginBottom20'
        // a[0].className='container jiesuan_sousuo marginBottom20'
        $('.jiesuan_sousuo').eq(0).attr('class','container jiesuan_sousuo marginBottom20')
      }
    }


    var username=CoojiePage.getCoojie('username');
    var token=CoojiePage.getCoojie('token');
    var member_id=CoojiePage.getCoojie('user_id');
    var user_type=CoojiePage.getCoojie('user_type');
    var jylx=CoojiePage.getCoojie('jylx');
    var cid=CoojiePage.getCoojie('cid');
    const that=this;
    //  广告位
    $.ajax({
                url: InterfaceUtil.getUrl(29),
                type: "post",
                data: {
    "user_type":user_type,"member_id":member_id,"username":username,"token":
token,"jylx":jylx,"cid":cid,"page":1,"limit":10
              },
                dataType: "json",
                success: function(data){
             if(data.data.length==0){

        }else{
          that.setState({
            feiyong1:data.data.goos_price_info,
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
    // ajax.open('post',"http://192.168.1.49/index.php/index/Order/orderdetail",false);
    // ajax.open('post',InterfaceUtil.getUrl(29),false);
    // ajax.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
    // ajax.onreadystatechange = function() {
    //   if (ajax.readyState == 4 && ajax.status == 200 || ajax.status == 304) { // readyState == 4说明请求已完成
    //     var data=ajax.responseText;
    //     data=JSON.parse(data);
    //     console.log(data);

    //   }
    // };n="+token+"&jylx="+jylx+"&cid="+cid+"&page=1"+"&limit=10");
  }

  render(){
    return(
     <div className=' jiesuan_sousuo marginBottom20'>
       <div>
         <div className=' jiesuan_sousuo_div1'>
           <span className='jiesuan_sousuo_div_span'  onClick={(e)=>{this.chuangjian(e)}}>提交订单</span>
         </div>
         <div className=' jiesuan_sousuo_div'>
           <div className='font20 jiesuan_sousuo_div_div'>应付总额：
             <span className='red font20 jiesuan_shifu'>￥{this.state.feiyong1.price_count}</span></div>
           <div className=''>
             <span className='marginRight20'>
             商品总价：￥{this.state.feiyong1.goos_price_count}
             </span>
             <span className='marginRight20'>
               运费：￥{this.state.feiyong1.yunfee}</span><span className='jiesuan_youhui'>优惠金额：￥{this.state.feiyong1.coupon_price}</span></div>
         </div>
       </div>

       {/*<div className='jiesuan_sousuo_div_xian container'></div>*/}

     </div>

    )
  }
  componentDidUpdate(){

  }
}
export default withRouter(Jiesuan1);
// export default Jiesuan1;
