
import React from 'react';
import Gouwuche from '../components/buycar/gouwuche'
import CarBiaoti from '../components/buycar/carBiaoti'
import CarContent from '../components/buycar/carContent'
import CarTishi from '../components/buycar/carTishi'
import Head1 from '../pages/Header1'
import Footer from './footer';
import Yincanglan from '../components/index/yincanglan'

class Index1 extends React.Component {
  render() {
    return (
      <div>
        {/*头部*/}
        <div className='container' id='header'>
        <Head1/>
        </div>
        {/*购物车头部*/}
        <Gouwuche/>
        {/*购物车表头*/}
        <CarBiaoti/>
        {/*购物车内容*/}
        <CarContent/>
        {/*购物车提示*/}
        <CarTishi/>
        {/*右侧栏*/}
        <Yincanglan/>
        {/*尾部*/}
        <Footer/>

      </div>
    );
  }
}


export default Index1;
