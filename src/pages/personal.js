
import React from 'react';
import Footer from './footer';
import Header from './Header1'
import PersonalBox from '../components/personal/personalBox'
import Yincanglan from '../components/index/yincanglan'

class Personal extends React.Component {
  render() {
    return (
      <div>
        {/*头部*/}
        <Header/>
        {/*内容*/}
        <PersonalBox/>
        {/*侧栏*/}
        <Yincanglan/>
        {/*尾部*/}
        <Footer/>
      </div>
    );
  }
}


export default Personal;
