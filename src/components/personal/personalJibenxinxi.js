

import React from 'react';
import PersonalCon from './personalCon'
import PersonalJibenxinxi1 from './personalJibenxinxi1'

class PersonalJibenxinxi2 extends React.Component {
  render() {
    return (
      <div className='div'>
        <div className='contain'>
          <PersonalCon/>
          <PersonalJibenxinxi1/>
          <div className='clear'></div>
        </div>
      </div>
    );
  }
}


export default PersonalJibenxinxi2;
