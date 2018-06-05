
import React from 'react';
import Footer from './footer';
import Header from './Header1';
import PersonalWodejifen from '../components/personal/personalWodeshoucang'
import BuycarOk1 from '../components/common/buycar_ok';
import BuycarNo1 from '../components/common/buycar_no';

class PersonalWodejifen1 extends React.Component {
  render() {
    return (
      <div>
        <BuycarOk1/>
        <BuycarNo1/>
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
