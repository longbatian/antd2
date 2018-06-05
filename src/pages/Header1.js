import React from 'react';
import Headbutt from '../components/header/Headbutt1';
import Headcon from '../components/header/Headcon';
import HeaderTop from '../components/header/HeadTop';

class Headers5 extends React.Component {

  render(){
    return(
      <div className='container' id='header'>
        <HeaderTop></HeaderTop>
        <Headcon/>
        <Headbutt/>
      </div>

    )
  }
}
export default Headers5;
