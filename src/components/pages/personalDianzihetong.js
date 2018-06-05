require('styles/common.css');
require('styles/personal.css')

import React from 'react';
import Footer from './footer';
import Header from './HeadersPage';
import PersonalDianzihetong from '../personal/personalDianzihetong'

class PersonalDianzihetong3 extends React.Component {
  render() {
    return (
      <div>
        {/*头部*/}
        <Header/>
        {/*内容*/}
        <PersonalDianzihetong/>
        {/*尾部*/}
        <Footer/>
      </div>
    );
  }
}


export default PersonalDianzihetong3;
