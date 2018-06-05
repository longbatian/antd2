require('styles/common.css');
require('styles/personal.css')

import React from 'react';
import Footer from './footer';
import Header from './HeadersPage'
import PersonalBox from '../personal/personalBox'

class Personal extends React.Component {
  render() {
    return (
      <div>
        {/*头部*/}
        <Header/>
        {/*内容*/}
        <PersonalBox/>
        {/*尾部*/}
        <Footer/>
      </div>
    );
  }
}


export default Personal;
