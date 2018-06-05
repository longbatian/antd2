

import React from 'react';
import Footer from './footer';
import Header from './Header1';
import PersonalXiangqing from '../components/personal/personalXiangqing'
import BuycarOk1 from '../components/common/buycar_ok';
import BuycarNo1 from '../components/common/buycar_no';
import Yincanglan from '../components/index/yincanglan'
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
        {/*右侧栏*/}
        <Yincanglan/>
        {/*尾部*/}
        <Footer/>
      </div>
    );
  }
}


export default PersonalXiangqing1;
