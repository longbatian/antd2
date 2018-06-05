
import React from 'react';
import PersonalCon from './personalCon'
import PersonalXiangqing1 from './personalXiangqing1'
import '../../styles/personal/personalDindan.css'
import '../../styles/personal/personalXiangqing.css'
// 'styles/personal/personalDindan.css'
class PersonalXiangqing2 extends React.Component {
  render() {
    return (
      <div className='div'>
        <div className='contain'>
          <PersonalCon/>
          <PersonalXiangqing1/>
          <div className='clear'></div>
        </div>
      </div>
    );
  }
}


export default PersonalXiangqing2;

