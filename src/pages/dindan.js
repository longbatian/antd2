
import React from 'react';

import CarTishi from '../components/buycar/carTishi'
import DingdanTitle from '../components/dingdan/dingdanTitle'

import Footer from './footer';
import Header from './Header1';
import Yincanglan from '../components/index/yincanglan';


class Dingdan1 extends React.Component {
  render() {
    return (
      <div>
        <Header/>
        {/*购物车提示*/}
        <DingdanTitle/>
        {/*右侧栏*/}
        <Yincanglan/>
        {/*尾部*/}
        <Footer/>
      </div>
    );
  }
}


export default Dingdan1;
