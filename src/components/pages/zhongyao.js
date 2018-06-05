require('styles/common.css');
require('styles/zhongyao/zhongyao.css')

import React from 'react';
import Footer from './footer';
import Header from './HeadersPage';
import Zhongyao from '../zhongyao/zhongyao'

class ZhongyaoMain extends React.Component {
  render() {
    return (
      <div>
        {/*头部*/}
        {/*<Header/>*/}
        {/*内容*/}
        <Zhongyao/>
        {/*尾部*/}
        <Footer/>
      </div>
    );
  }
}


export default ZhongyaoMain;
