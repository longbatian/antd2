
import React from 'react';
import HelpZx from '../components/helpZX/daohang'
import Header from './Header1'
import Yincanglan from '../components/index/yincanglan';
import Footer from './footer';


class HelpZx1 extends React.Component {
  render() {
    return (
      <div>
        {/*头部*/}
        <Header/>
        {/*帮助中心侧栏*/}
        <HelpZx/>
        {/*右侧栏*/}
        <Yincanglan/>
        {/*尾部*/}
        <Footer/>

      </div>
    );
  }
}


export default HelpZx1;
