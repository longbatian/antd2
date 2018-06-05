require('styles/common.css');
require('styles/personal.css')

import React from 'react';
import Zhuce from '../denglu/zhuce'

class Zhuce1 extends React.Component {
  render() {
    return (
      <div>
        {/*内容*/}
        <Zhuce/>
      </div>
    );
  }
}


export default Zhuce1;
