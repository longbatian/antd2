require('styles/common.css');
require('styles/personal.css')

import React from 'react';
import Footer from './footer';
import Header from './HeadersPage';
import PersonalJibenxinxi from '../personal/personalJibenxinxi'

class PersonalJibenxinxi1 extends React.Component {
  render() {
    return (
      <div>
        {/*头部*/}
        <Header/>
        {/*内容*/}
        <PersonalJibenxinxi/>
        {/*尾部*/}
        <Footer/>
      </div>
    );
  }
}


export default PersonalJibenxinxi1;
