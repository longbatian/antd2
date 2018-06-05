import React from 'react';
import Headbutt1 from '../header/Headbutt';
import Headcon from '../header/Headcon';
import HeaderTop from '../header/HeadTop';
require('styles/common.css');
require('styles/header.css')
class Headers4 extends React.Component {

  render(){
    return(
      <div className='container' id='header'>
        <HeaderTop/>
        <Headcon/>
        <Headbutt1/>
      </div>

    )
  }
}
export default Headers4;
