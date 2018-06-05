

import React from 'react';
import Footer from './footer';
import Header from './Header1';
import PersonalJibenxinxi from '../components/personal/personalJibenxinxi'

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
