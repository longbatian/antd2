import React from 'react';
import '../../styles/common.css';
import '../../styles/header.css';
import {Link} from 'react-router-dom';
import Fenlei from '../index/fenlei1';
import $ from 'jquery';

class Headbutt extends React.Component{
  constructor(props){
    super(props); //调用父类的构造方法；
    // console.log(this.props.location.query);
    this.state={
      fenlei:true,
    }
  }
  fenlei(e){
   if(this.state.fenlei){
     $('.fenlei').addClass('display');
     this.setState({
       fenlei:false,
     })
   }else{
     $('.fenlei').removeClass('display');
     this.setState({
       fenlei:true,
     })
   }
  }
  render(){
    return(
      <div className='container container_btn'>
      <div className='contain relative header_fenlei' data={this.props.data}>
        {/*药品分类*/}
         <div className='floatleft header_allfenlei'>
           <div className='header_allfenlei_div'onClick={(e)=>{this.fenlei(e)}}>全部商品分类</div>
         </div>
        {/*菜单栏*/}
        <div className="header_cd floatleft">
          <ul>
            <li>
              <Link to="/Index">
              首页
              </Link>
            </li>
            <li><Link to="/Chanpinzhongxin?&zjzx=2">产品中心</Link></li>
            <li><Link to="/Chanpinzhongxin?&zjzx=1">注射专区</Link></li>
            <li><Link to="/Chanpinzhongxin">采购直通车</Link></li>
            {/*<li>聚创金融</li>*/}
            {/*<li>特惠专区</li>*/}
            {/*<li>积分商城</li>*/}
            <div className='clear'></div>
          </ul>
        </div>
        {/*聚创社区*/}
        <div className='floatRight header_allfenlei'>
            <a href='http://www.scjuchuang.com/guanyuwomen.html' target='_target'>
                <img src={require("../../images/head/juchuangshequ.png")} className='header_allfenlei_img' alt=""/>
            </a>

        </div>
        {/*分类*/}
        <Fenlei/>
        <div className="clear"></div>
      </div>
      </div>
    )
  }
}
export default Headbutt
