

import React from 'react';
import Denglu1 from './denglu1';
import '../../styles/denglu/denglu.css'


class Denglu2 extends React.Component {
  render() {
    return (
      <div>
        <div>
          <Denglu1/>
          <div className='clear'></div>
        </div>
      </div>
    );
  }
}


export default Denglu2;

