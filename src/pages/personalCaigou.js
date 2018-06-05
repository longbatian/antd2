
import React from 'react';
import Footer from './footer';
import Header from './Header1';
import PersonalCaigou from '../components/personal/personalCaigou'

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
