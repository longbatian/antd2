import React from 'react';

import {Link} from 'react-router-dom';
import '../../styles/buycar/buycar.css'


class Gouwuche extends React.Component{
  constructor(props){
    super(props); //调用父类的构造方法；
    this.state={
    }
  }


  //添加

  componentDidMount(){

  }

  render(){
    return(
     <div className='container'>
       <div className='buycar_xian contain'></div>
       {/*头部进度条*/}
       <div className='contain marginTop20 '>
         <img src={require("../../images/buycar/buzhou1.png")} alt="" className='floatRight'/>
         <div className='clear'></div>
       </div>
       {/*头部名称*/}
       <div className='contain'>
         <p className='buycar_title'>我的购物车</p>
       </div>
     </div>
    )
  }
  componentDidUpdate(){

  }
}
export default Gouwuche
