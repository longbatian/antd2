require('antd/dist/antd.css');
require('styles/components/Upload.css');
require('styles/common.css');
require('styles/footer.css');



import React from 'react';
import FooterTitle from '../footer/footerTitle';
import FooterCon from '../footer/footerCon';
import FooterCon1 from "../footer/footerCon1";


class Footer extends React.Component {
  render() {
    return (
      <div>
        <FooterTitle />
        <FooterCon />
        <FooterCon1/>
      </div>
    );
  }
}


export default Footer;
