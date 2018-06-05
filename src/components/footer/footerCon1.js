
import React from 'react';

class FooterCon1 extends React.Component {
  render() {
    return (
      <div className='contain FooterCon1 marginTop20'>
          <p>《互联网药品信息服务资格证》证书号：
            <span className='color3'>（川）-非经营性2015-0039  </span>  | 《互联网药品交易服务资格证》证书号：<span className='color3'>川B 20160006</span></p>
          {/*<p><span className='color3'>蜀ICP备15031161号-1</span>*/}
          <p>
            {/*<span className='color3'>川B 20160006</span>*/}
            版权所有：四川聚创医药有限公司</p>
          <p>公司地址：成都市金牛区金府路799号金府国际大厦6楼</p>
          <p>Copyright www.scjuchuang.com 2014 All Rights Reserved</p>
          <p>本网站不从事麻醉药品、精神药品、医疗用毒性药品、放射性药品、戒毒药品和医疗机构制剂的产品的交易。</p>
          <p style={{marginBottom:0,paddingBottom:10}}>本公司网站不得发布未经国家批准的药品广告信息。</p>
      </div>
    );
  }
}


export default FooterCon1;
