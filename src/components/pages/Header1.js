import React from 'react';
import Headbutt from '../header/Headbutt1';
import Headcon from '../header/Headcon';
import HeaderTop from '../header/HeadTop';
require('styles/common.css');
require('styles/header.css')
class Header5 extends React.Component {

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
export default Header5;
