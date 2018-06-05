import React from 'react';
import Lunbo from '../index/lunbo'
import Benzhoujinxuan from '../index/benzhoujinxuan'
import Louceng1 from '../index/louceng1'
import Louceng2 from '../index/louceng2'
import Celan from '../index/celan'
import Yincanglan from '../index/yincanglan'
import Header from './Header1'
import Foooter from './footer'
import '../../styles/chanpinzhongxin/chanpinzhongxin.css';

class Index1 extends React.Component {
  render() {
    return (
      <div>
        {/*头部*/}
        <Header/>
        {/*内容*/}
        <Lunbo/>
        {/*本周精选*/}
        <Benzhoujinxuan/>
        {/*楼层1*/}
        <Louceng1/>
        {/*楼层2*/}
        <Louceng2/>
        {/*侧栏*/}
        <Celan/>
        {/*侧栏*/}
        <Yincanglan/>
        {/*尾部*/}
        <Foooter/>
      </div>
    );
  }
}


export default Index1;
