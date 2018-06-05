
import React from 'react';
import PersonalCon from './personalCon'
import PersonalWodejifen1 from './personalWodeshoucang1';
import '../../styles/personal/personalWodeshoucang.css';

class PersonalWodejifen2 extends React.Component {
  render() {
    return (
      <div className='div'>
        <div className='contain'>
          <PersonalCon/>
          <PersonalWodejifen1/>
          <div className='clear'></div>
        </div>
      </div>
    );
  }
}


export default PersonalWodejifen2;

