require('styles/chanpinzhongxin/chanpinzhongxin.css');

import React from 'react';
import Chanpinzhongxin from '../components/chanpinzhongxin/chanpinzhongxin'
import Header from './Header'
import Footer from './footer'
import Yincanglan from '../components/index/yincanglan'
import Chanpinzhongxin1 from '../components/chanpinzhongxin/chanpinzhongxin1';
import BuycarOk1 from '../components/common/buycar_ok';
import BuycarNo1 from '../components/common/buycar_no';

class ZhuSheZhuanQuPage extends React.Component {
  render() {
    return (
      <div>
        {/*头部*/}
        <Header/>
        {/*内容*/}
        <BuycarOk1/>
        <BuycarNo1/>
        <Chanpinzhongxin1/>
        <div className='clear'></div>
        {/*侧栏*/}
        <Yincanglan/>
        {/*尾部*/}
        <Footer/>
      </div>
    );
  }
}


export default ZhuSheZhuanQuPage;
