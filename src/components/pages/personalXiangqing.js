require('styles/common.css');
require('styles/personal.css')

import React from 'react';
import Footer from './footer';
import Header from './HeadersPage';
import PersonalXiangqing from '../personal/personalXiangqing'
import BuycarOk1 from '../common/buycar_ok';
import BuycarNo1 from '../common/buycar_no';

class PersonalXiangqing1 extends React.Component {
  render() {
    return (
      <div>
        <BuycarOk1/>
        <BuycarNo1/>
        {/*头部*/}
        <Header/>
        {/*内容*/}
        <PersonalXiangqing/>
        {/*尾部*/}
        <Footer/>
      </div>
    );
  }
}


export default PersonalXiangqing1;
