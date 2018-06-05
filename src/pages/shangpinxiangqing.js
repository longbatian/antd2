
import React from 'react';
import Shangpinxiangqing from '../components/shangpinxiangqing/shangpinxiangqing';
import Header from './Header1';
import Footer from './footer';
import BuycarOk1 from '../components/common/buycar_ok';
import BuycarNo1 from '../components/common/buycar_no';
import Yincanglan from '../components/index/yincanglan'
import '../styles/chanpinzhongxin/chanpinzhongxin.css';

class Shangpinxiangqing1 extends React.Component {
  render() {
    return (
      <div>
        <BuycarOk1/>
        <BuycarNo1/>
        {/*头部*/}
        <Header/>
        {/*内容*/}
        <Shangpinxiangqing/>
        {/*侧栏*/}
        <Yincanglan/>
        {/*尾部*/}
        <Footer/>
      </div>
    );
  }
}


export default Shangpinxiangqing1;
