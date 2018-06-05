require('styles/common.css');
require('styles/personal.css')

import React from 'react';
import Zhaohui1 from '../denglu/zhaohui'

class Zhaohui2 extends React.Component {
  render() {
    return (
      <div>
        {/*内容*/}
        <Zhaohui1/>
      </div>
    );
  }
}


export default Zhaohui2;
