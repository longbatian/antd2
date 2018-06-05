require('styles/common.css');
require('styles/zhongyao/zhongyao.css');

import React from 'react';

class Zhongyao1 extends React.Component {
  render() {
    return (
      <div>
        {/*头部*/}
        <div className='contain marginTop20'>
            <div className='contain zhongyao_M23'><img src={require("../../images/zhongyao/banner_di.png")} alt=""/></div>
          <div className='contain zhongyao_title'>
              <span>所有中药</span>
              <span>普通中药饮片</span>
              <span>中药瓶装系列</span>
              <span>贵细中药饮片</span>
          </div>
          <div className='clear'></div>
        </div>
      </div>
    );
  }
}


export default Zhongyao1;
