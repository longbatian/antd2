
// require('styles/chanpinzhongxin/chanpinzhongxin.css');
import React from 'react';
import HelpZx from '../helpZX/daohang'
import Header from './HeadersPage'

import Footer from './footer';


class HelpZx1 extends React.Component {
  render() {
    return (
      <div>
        {/*头部*/}
        <Header/>
        {/*帮助中心侧栏*/}
        <HelpZx/>
        {/*尾部*/}
        <Footer/>

      </div>
    );
  }
}


export default HelpZx1;
