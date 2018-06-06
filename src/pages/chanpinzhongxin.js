

import React from 'react';
import Chanpinzhongxin from '../components/chanpinzhongxin/chanpinzhongxin1';
import Header from './Header1';
import Footer from './footer';
import BuycarOk1 from '../components/common/buycar_ok';
import BuycarNo1 from '../components/common/buycar_no';
import Yincanglan from '../components/index/yincanglan';
import HoversearchPage from '../components/dao/HoversearchPage';
import '../styles/chanpinzhongxin/chanpinzhongxin.css';

class Chanpinzhongxin1 extends React.Component {
  render() {
    return (
      <div>
        {/*头部*/}
        <Header/>
        {/*内容*/}
          <BuycarOk1/>
          <BuycarNo1/>
        <Chanpinzhongxin/>
        <HoversearchPage/>
        {/*侧栏*/}
        <Yincanglan/>
        {/*尾部*/}
        <Footer/>
      </div>
    );
  }
}


export default Chanpinzhongxin1;
