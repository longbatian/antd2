

import React from 'react';
import PersonalCon from './personalCon'
import PersonalCon1 from './personalCon1'
import BuycarOk1 from '../common/buycar_ok';
import BuycarNo1 from '../common/buycar_no';

class personalBox extends React.Component {
  render() {
    return (
      <div className='div'>
        <BuycarOk1/>
        <BuycarNo1/>
        <div className='contain'>
          <PersonalCon/>
          <PersonalCon1/>
          <div className='clear'></div>
        </div>
      </div>
    );
  }
}


export default personalBox;
