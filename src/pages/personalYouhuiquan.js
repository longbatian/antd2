
import React from 'react';
import Footer from './footer';
import Header from './Header1';
import PersonalYouhuiquan from '../components/personal/personalYouhuiquan'
import Yincanglan from '../components/index/yincanglan'

class PersonalYouhuiquan1 extends React.Component {
  render() {
    return (
      <div>
        {/*头部*/}
        <Header/>
        {/*内容*/}
        <PersonalYouhuiquan/>
        {/*侧栏*/}
        <Yincanglan/>
        {/*尾部*/}
        <Footer/>
      </div>
    );
  }
}


export default PersonalYouhuiquan1;
