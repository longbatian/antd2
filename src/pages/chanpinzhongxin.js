

import React from 'react';
import Chanpinzhongxin from '../components/chanpinzhongxin/chanpinzhongxin';
import Header from './Header1';
import Footer from './footer';
import Yincanglan from '../components/index/yincanglan';
import '../styles/chanpinzhongxin/chanpinzhongxin.css';


class Chanpinzhongxin1 extends React.Component {
  render() {
    return (
      <div>
        {/*头部*/}
        <Header/>
        {/*内容*/}
        <Chanpinzhongxin/>
        {/*侧栏*/}
        <Yincanglan/>
        {/*尾部*/}
        <Footer/>
      </div>
    );
  }
}


export default Chanpinzhongxin1;
