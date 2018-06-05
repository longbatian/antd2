require('styles/common.css');
require('styles/personal.css')
require('styles/chanpinzhongxin/chanpinzhongxin.css');

import React from 'react';
import Header from './HeadersPage'
import Footer from './footer'
import NewXq from '../new/newXQ'


class NewXq1 extends React.Component {
  render() {
    return (
      <div>
        {/*头部*/}
        <Header/>
        {/*新闻中心*/}
        <NewXq/>
        <Footer/>
      </div>
    );
  }
}


export default NewXq1;
