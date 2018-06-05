require('styles/common.css');
require('styles/personal.css')
// require('styles/chanpinzhongxin/chanpinzhongxin.css');

import React from 'react';

import DingdanTitle from '../dingdan/dingdanTitle'

import Footer from './footer';
import Header from './HeadersPage';


class Dingdan1 extends React.Component {
  render() {
    return (
      <div>
        <Header/>
        {/*购物车提示*/}
        <DingdanTitle/>
        {/*尾部*/}
        <Footer/>
      </div>
    );
  }
}


export default Dingdan1;
