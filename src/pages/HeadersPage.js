import React from 'react';
import Headbutt from '../components/header/Headbutt';
import Headcon from '../components/header/Headcon';
import HeaderTop from '../components/header/HeadTop';
class Headers6 extends React.Component {

  render(){
    return(
      <div className='container' id='header'>
        <HeaderTop/>
      <Headcon/>
        <Headbutt/>
      </div>

    )
  }
}
export default Headers6;
