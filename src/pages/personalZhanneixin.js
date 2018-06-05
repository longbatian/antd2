
import React from 'react';
import Footer from './footer';
import Header from './Header1';
import Yincanglan from '../components/index/yincanglan'
import PersonalZhanneixin from '../components/personal/personalZhanneixin'

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
          {/*侧栏*/}
          <Yincanglan/>
      </div>
    );
  }
}


export default PersonalZhanneixin1;
