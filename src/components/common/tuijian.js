import React from 'react';
import {Link} from 'react-router-dom';
import InterfaceUtil from '../../util/InterfaceUtil';
import CoojiePage from '../../util/CoojiePage';
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
    var user_id=CoojiePage.getCoojie('user_id');
    var token=CoojiePage.getCoojie('token');
    const that = this;
    //智能采购
        $.ajax({
                url: InterfaceUtil.getUrl(24),
                type: "post",
                data: InterfaceUtil.addTime({
                    pageSize:5,
                    user_id:user_id,
                    token:token
                }),
                dataType: "json",
                success: function(data){

                       that.setState({
                        tuijian:data.data
                      });
                },
                error: function (XMLHttpRequest, textStatus, errorThrown) {

                }
            });
  }
    //跳转
    xiangqingSix(e){

    }
  render(){
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
                <p>{item.name}</p>
                <p>{item.enterprise}</p>
                <p className='orange'>￥{item.goods_price}</p>
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
