

import React from 'react';
import Lunbo from '../components/index/lunbo'
import Benzhoujinxuan from '../components/index/benzhoujinxuan'
import Louceng1 from '../components/index/louceng1'
import Louceng2 from '../components/index/louceng2'
import Celan from '../components/index/celan'
import Yincanglan from '../components/index/yincanglan'
import HoversearchPage from '../components/dao/HoversearchPage';
import Header from './Header1'
import Foooter from './footer'
// var {registerObserver} = require('react-perf-devtool');
import '../styles/chanpinzhongxin/chanpinzhongxin.css';
import '../styles/personal/personalDindan.css';



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
        {/*悬浮搜索框*/}
        <HoversearchPage/>
        {/*尾部*/}
        <Foooter/>
      </div>
    );
  }
  shouldComponentUpdate(){
    // registerObserver()
  }
}


export default Index1;
