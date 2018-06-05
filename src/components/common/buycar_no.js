import React from 'react';
import $ from 'jquery';
import {Link} from 'react-router-dom';



class Buycar_no extends React.Component{
  constructor(props){
    super(props); //调用父类的构造方法；
    this.state={
    }
  }


  //影藏
  yincang(e){
    $('.buycar_no').addClass('display');
  }

  componentDidMount(){

  }

  render(){
    return(
      <div className='container'>
        <div className='buycar_no display'>
          <div className='buycar_no_title'>
            <span>温馨提示</span>
            <img src={require("../../images/personal/cha.png")} className='buycar_no_cha tipsImg' onClick={(e)=>{this.yincang(e)}} alt=""/>
          </div>
          <div className='buycar_no_con'>
            <p className='buycar_no_con_p'><img src={require("../../images/jingao.png")} alt=""/><span className='buycar_no_con_span'>该商品库存不足</span></p>
            <p className='buycar_no_con_p1'><span className='buycar_no_con_span1' onClick={(e)=>{this.yincang(e)}}>确定</span></p>
          </div>
        </div>
      </div>
    )
  }
  componentDidUpdate(){

  }
}
export default Buycar_no;
