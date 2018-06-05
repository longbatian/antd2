require('styles/common.css');
require('styles/personal.css')
require('styles/chanpinzhongxin/chanpinzhongxin.css');

import React from 'react';
import Gouwuche from '../buycar/gouwuche'
import CarBiaoti from '../buycar/carBiaoti'
import CarContent from '../buycar/carContent'
import CarTishi from '../buycar/carTishi'
import Head from '../header/HeadTop'
import Head1 from '../header/Headcon'
import Footer from './footer';


class Index1 extends React.Component {
  render() {
    return (
      <div>
        {/*头部*/}
        <div className='container' id='header'>
        <Head/>
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
        {/*尾部*/}
        <Footer/>

      </div>
    );
  }
}


export default Index1;
