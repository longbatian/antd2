require('styles/common.css');
require('styles/personal.css')
// require('styles/chanpinzhongxin/chanpinzhongxin.css');

import React from 'react';
import Shangpinxiangqing from '../shangpinxiangqing/shangpinxiangqing';
import Header from './HeadersPage';
import Footer from './footer';
import BuycarOk1 from '../common/buycar_ok';
import BuycarNo1 from '../common/buycar_no';

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
        {/*尾部*/}
        <Footer/>
      </div>
    );
  }
}


export default Shangpinxiangqing1;
