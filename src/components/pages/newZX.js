require('styles/common.css');
require('styles/personal.css')
require('styles/chanpinzhongxin/chanpinzhongxin.css');

import React from 'react';
import Header from './HeadersPage'
import Footer from './footer'
import NewZX1 from '../new/newZX'


class NewZX extends React.Component {
  render() {
    return (
      <div>
        {/*头部*/}
        <Header/>
        {/*新闻中心*/}
        <NewZX1/>
        <Footer/>
      </div>
    );
  }
}


export default NewZX;
