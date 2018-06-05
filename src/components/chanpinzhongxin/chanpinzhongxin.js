// require('styles/common.css');
// require('styles/personal.css');


import React from 'react';
import Chanpinzhongxin1 from './chanpinzhongxin1';
import BuycarOk1 from '../common/buycar_ok';
import BuycarNo1 from '../common/buycar_no';



class Chanpinzhongxin2 extends React.Component {
  render() {
    return (
      <div>
        <div>
          <BuycarOk1/>
          <BuycarNo1/>
          <Chanpinzhongxin1/>
          <div className='clear'></div>
        </div>
      </div>
    );
  }
}


export default Chanpinzhongxin2;

