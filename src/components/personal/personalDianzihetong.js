
import React from 'react';
import PersonalCon from './personalCon';
import PersonalDianzihetong1 from './personalDianzihetong1';

class PersonalDianzihetong2 extends React.Component {
  render() {
    return (
      <div className='div'>
        <div className='contain'>
          <PersonalCon/>
          <PersonalDianzihetong1/>
          <div className='clear'></div>
        </div>
      </div>
    );
  }
}


export default PersonalDianzihetong2;

