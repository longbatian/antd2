require('styles/common.css');
require('styles/personal.css')

import React from 'react';
import Footer from './footer';
import Header from './HeadersPage';
import PersonalYouhuiquan from '../personal/personalYouhuiquan'

class PersonalYouhuiquan1 extends React.Component {
  render() {
    return (
      <div>
        {/*头部*/}
        <Header/>
        {/*内容*/}
        <PersonalYouhuiquan/>
        {/*尾部*/}
        <Footer/>
      </div>
    );
  }
}


export default PersonalYouhuiquan1;
