
import React from 'react';
import Footer from './footer';
import Header from './Header1';
import PersonalWodejifen from '../components/personal/personalWodejifen'

class PersonalWodejifen1 extends React.Component {
  render() {
    return (
      <div>
        {/*头部*/}
        <Header/>
        {/*内容*/}
        <PersonalWodejifen/>
        {/*尾部*/}
        <Footer/>
      </div>
    );
  }
}


export default PersonalWodejifen1;
