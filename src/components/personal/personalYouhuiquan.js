
import React from 'react';
import PersonalCon from './personalCon';
import PersonalYouhuiquan1 from './personalYouhuiquan1';

class PersonalYouhuiquan2 extends React.Component {
  render() {
    return (
      <div className='div'>
        <div className='contain'>
          <PersonalCon/>
          <PersonalYouhuiquan1/>
          <div className='clear'></div>
        </div>
      </div>
    );
  }
}


export default PersonalYouhuiquan2;

