import React from 'react';
import Header from './Header1'
import Footer from './footer'
import Jiesuan from '../components/jiesuan/jiesuantitle'
import Jiesuan1 from '../components/jiesuan/sousuo'
import Tuijian from '../components/common/tuijian'

class Index1 extends React.Component {
  render() {
    return (
      <div>
        {/*头部*/}
        <Header/>
        {/*购物车头部*/}
        <Jiesuan/>
        {/*搜索*/}
        <Jiesuan1/>
        <Footer/>
      </div>
    );
  }
}


export default Index1;
