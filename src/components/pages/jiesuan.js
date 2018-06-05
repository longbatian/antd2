require('styles/common.css');
require('styles/personal.css')
require('styles/chanpinzhongxin/chanpinzhongxin.css');

import React from 'react';
import Header from './HeadersPage'
import Footer from './footer'
import Jiesuan from '../jiesuan/jiesuantitle'
import Jiesuan1 from '../jiesuan/sousuo'


class Index1 extends React.Component {
  render() {
    return (
      <div>
        {/*头部*/}
        <Header/>
        {/*购物车头部*/}
        <Jiesuan/>
        {/*搜索*/}
        <Jiesuan1/>
        <Footer/>
      </div>
    );
  }
}


export default Index1;
