
import React from 'react';
import PersonalCon from './personalCon';
import PersonalZhanneixin1 from './personalWodejifen1';

class PersonalWodejifen2 extends React.Component {
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


export default PersonalWodejifen2;

