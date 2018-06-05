require('styles/common.css');
require('styles/personal.css')

import React from 'react';
import Footer from './footer';
import Header from './HeadersPage';
import PersonalDindan from '../personal/personalDindan'

class PersonalDiand extends React.Component {
  render() {
    return (
      <div>
        {/*头部*/}
        <Header/>
        {/*内容*/}
       <PersonalDindan/>
        {/*尾部*/}
        <Footer/>
      </div>
    );
  }
}


export default PersonalDiand;
