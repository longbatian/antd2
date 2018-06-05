require('styles/common.css');
require('styles/personal.css')

import React from 'react';
import Footer from './footer';
import Header from './HeadersPage';
import PersonalZhanneixin from '../personal/personalZhanneixin'

class PersonalZhanneixin1 extends React.Component {
  render() {
    return (
      <div>
        {/*头部*/}
        <Header/>
        {/*内容*/}
        <PersonalZhanneixin/>
        {/*尾部*/}
        <Footer/>
      </div>
    );
  }
}


export default PersonalZhanneixin1;
