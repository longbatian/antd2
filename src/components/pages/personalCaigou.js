require('styles/common.css');
require('styles/personal.css')

import React from 'react';
import Footer from './footer';
import Header from './HeadersPage';
import PersonalCaigou from '../personal/personalCaigou'

class PersonalCaigou1 extends React.Component {

  render() {
    return (
      <div>
        {/*头部*/}
        <Header/>
        {/*内容*/}
        <PersonalCaigou/>
        {/*尾部*/}
        <Footer/>
      </div>
    );
  }
}


export default PersonalCaigou1;
