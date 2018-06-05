require('styles/common.css');
require('styles/personal.css')

import React from 'react';
import Denglu from '../denglu/denglu'

class Denglu1 extends React.Component {
  render() {
    return (
      <div>
        {/*内容*/}
        <Denglu/>
      </div>
    );
  }
}


export default Denglu1;
