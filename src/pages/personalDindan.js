
import React from 'react';
import Footer from './footer';
import Header from './Header1';
import PersonalDindan from '../components/personal/personalDindan'
import Yincanglan from '../components/index/yincanglan'

class PersonalDiand extends React.Component {
  render() {
    return (
      <div>
        {/*头部*/}
        <Header/>
        {/*内容*/}
       <PersonalDindan/>
        {/*右侧栏*/}
        <Yincanglan/>
        {/*尾部*/}
        <Footer/>
      </div>
    );
  }
}


export default PersonalDiand;
