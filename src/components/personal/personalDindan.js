
import React from 'react';
import PersonalCon from './personalCon'
import PersonalDindan1 from './personalDindan1'
import BuycarOk1 from '../common/buycar_ok';
import BuycarNo1 from '../common/buycar_no';
import '../../styles/personal/personalDindan.css';

class personalDindan extends React.Component {
  render() {
    return (
      <div className='div' style={{paddingTop:20}}>
        <BuycarOk1/>
        <BuycarNo1/>
        <div className='contain'>
          <PersonalCon/>
          <PersonalDindan1/>

          <div className='clear'></div>
        </div>
      </div>
    );
  }
}


export default personalDindan;

