
import React from 'react';
import PersonalCon from './personalCon';
import PersonalZhanneixin1 from './personalZhanneixin1';

class PersonalZhanneixin2 extends React.Component {
  render() {
    return (
      <div className='div'>
        <div className='contain'>
          <PersonalCon/>
          <PersonalZhanneixin1/>
          <div className='clear'></div>
        </div>
      </div>
    );
  }
}


export default PersonalZhanneixin2;

