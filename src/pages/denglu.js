import React from 'react';
import ReactDOM from 'react-dom';
// import Denglu from '../components/denglu/denglu'
import Denglu2 from '../components/denglu/denglu1';
import '../styles/common.css';
import '../styles/personal.css';
import '../styles/denglu/denglu.css'


class Denglu1 extends React.Component {
  render() {
    return (
      <div>
        {/*内容*/}
        <Denglu2 {...this.props}/>
      </div>
    );
  }
}


export default Denglu1;
