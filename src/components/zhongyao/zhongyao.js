require('styles/common.css');
require('styles/zhongyao/zhongyao.css');

import React from 'react';
import Zhongyao1 from './zhongyao1';
import Zhongyao2 from './zhongyao2';
import Zhongyao3 from './zhongyao3';

class Zhongyao extends React.Component {
  render() {
    return (
      <div className='zhongyao_bg'>
        <div className='contain white'>
          <Zhongyao1/>
          <Zhongyao2/>
          <Zhongyao3/>
          <div className='clear'></div>
        </div>
      </div>
    );
  }
}


export default Zhongyao;
