
import React from 'react';
import Header from './Header1'
import Footer from './footer'
import NewZX1 from '../components/new/newZX'


class NewZX extends React.Component {
  render() {
    return (
      <div>
        {/*头部*/}
        <Header/>
        {/*新闻中心*/}
        <NewZX1/>
        <Footer/>
      </div>
    );
  }
}


export default NewZX;
