import React from 'react';
import PersonalCon from './personalCon';
import PersonalCaigou1 from './personalCaigou1';
import BuycarOk1 from '../common/buycar_ok';
import BuycarNo1 from '../common/buycar_no';

class PersonalCaigou2 extends React.Component {
  render() {
    return (
      <div className='div'>
        <BuycarOk1/>
        <BuycarNo1/>
        <div className='contain'>
          <PersonalCon/>
          <PersonalCaigou1/>
          <div className='clear'></div>
        </div>
      </div>
    );
  }
}


export default PersonalCaigou2;

