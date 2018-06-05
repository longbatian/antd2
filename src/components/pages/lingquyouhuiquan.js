require('styles/common.css');
require('styles/personal.css')
require('styles/chanpinzhongxin/chanpinzhongxin.css');

import React from 'react';
import Footer from './footer';
import Header from './HeadersPage';
import Lingqu from '../youhuiquan/lingqu';


class Lingqu1 extends React.Component {
  render() {
    return (
      <div>
        {/*头部*/}
        <Header/>
        {/*内容*/}
        <Lingqu/>
        {/*尾部*/}
        <Footer/>

      </div>
    );
  }
}


export default Lingqu1;
