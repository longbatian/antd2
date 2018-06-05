require('styles/common.css');
require('styles/personal.css')
require('styles/chanpinzhongxin/chanpinzhongxin.css');

import React from 'react';
import Chanpinzhongxin from '../chanpinzhongxin/chanpinzhongxin'
import Header from './HeadersPage'
import Footer from './footer'

class Chanpinzhongxin1 extends React.Component {
  render() {
    return (
      <div>
        {/*头部*/}
        <Header/>
        {/*内容*/}
        <Chanpinzhongxin/>
        {/*尾部*/}
        <Footer/>
      </div>
    );
  }
}


export default Chanpinzhongxin1;
