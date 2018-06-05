import React from 'react';
import {Link} from 'react-router-dom';
import InterfaceUtil from '../../util/InterfaceUtil';
import $ from 'jquery';

class Tuijian extends React.Component{
  constructor(props){
    super(props); //调用父类的构造方法；
    this.state={
      tuijian:[],
      lujin:InterfaceUtil.getImgUrl(),
    }
  }



  //添加

  componentDidMount(){
    var a=document.getElementsByClassName('personalCon1_top1_con_aaaa');
    a=a[0].getAttribute('data');

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
    var jylx=getCookie('jylx');
    const that = this;
    //智能采购
        $.ajax({
                url: InterfaceUtil.getUrl(12),
                type: "post",
                data: {
                 "jylx":jylx,"limit":a
                },
                dataType: "json",
                success: function(data){
                       that.setState({
                        tuijian:data.data
                      });
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

    // try {
    //   window.ajax = new ActiveXObject("Msxml2.XMLHTTP");
    // } catch(e) {
    //   try {
    //     window.ajax = new ActiveXObject("Microsoft.XMLHTTP");
    //   } catch(e1) {
    //     window.ajax = new XMLHttpRequest();
    //   }
    // }
    // // ajax.open('post',"http://192.168.1.49/index.php/index/cart/goods_rand",false);
    // ajax.open('post',InterfaceUtil.getUrl(12),false);
    // ajax.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
    // ajax.onreadystatechange = function() {
    //   if (ajax.readyState == 4 && ajax.status == 200 || ajax.status == 304) { // readyState == 4说明请求已完成
    //     var data=ajax.responseText;
    //     data=JSON.parse(data);
    //       that.setState({
    //         tuijian:data.data
    //       });
    //   }
    // };
    // ajax.send("&jylx="+jylx+"&limit="+a);
  }
    //跳转
    xiangqingSix(e){

    }
  render(){
      // console.log(this.state.tuijian.length)
      // let tujian;
      let _this=this;
      let tujian= this.state.tuijian.length===0?null: this.state.tuijian.map(function (item){
            return <td key={item.id+'cao'}>
                <div className='personalCon1_table_div' >
                    <Link to={'/Shangpinxiangqing?&id='+item.id}>
                        <img src={_this.state.lujin+item.image} alt="" className='personalCon1_table_img'
                             // onClick={(e)=>_this.xiangqingSix(e)}
                        />
                    </Link>
                </div>
                <p>{item.title}</p>
                <p>{item.scqy}</p>
                <p className='orange'>￥{item.prices}</p>
            </td>
        });
    return(
      <div className='container'>
        {/*为您推荐*/}
        <div className='bgWhite tuijian_border'>
          <div className='personalCon1_top1_con personalCon1_top1_con_aaaa' data={this.props.data}>
            <div className='personal_line floatleft'></div>
            <span className='floatleft personal_line_p'>为您推荐</span>
            <table className='personalCon1_table1'>
                <tbody>
                    <tr>
                        {tujian}
                    </tr>
                </tbody>

            </table>
            <div className='clear'></div>
          </div>
        </div>
      </div>
    )
  }
  componentDidUpdate(){

  }
}
export default Tuijian;
