
import React from 'react';
import FooterTitle from '../components/footer/footerTitle';
import FooterCon from '../components/footer/footerCon';
import FooterCon1 from "../components/footer/footerCon1";


class Footer extends React.Component {
  render() {
    return (
      <div style={{background:'#f2f2f2'}}>
        <FooterTitle />
        <FooterCon />
        <FooterCon1/>
      </div>
    );
  }
}


export default Footer;
