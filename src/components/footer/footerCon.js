

import React from 'react';
import {Link} from 'react-router-dom';
import '../../styles/footer.css'

class FooterCon extends React.Component {
  constructor(props) {
    super(props); //调用父类的构造方法；
    this.state = {
      title: []
    }
  }

  componentDidMount() {

    // const that = this;
    // //  广告位
    // try {
    //   window.ajax = new ActiveXObject('Msxml2.XMLHTTP');
    // } catch (e) {
    //   try {
    //     window.ajax = new ActiveXObject('Microsoft.XMLHTTP');
    //   } catch (e1) {
    //     window.ajax = new XMLHttpRequest();
    //   }
    // }
    // // ajax.open('post',"http://192.168.1.49/index.php/index/help/helptitle",false);
    // ajax.open('post', InterfaceUtil.getUrl(19), false);
    // ajax.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    // ajax.onreadystatechange = function () {
    //   if (ajax.readyState == 4 && ajax.status == 200 || ajax.status == 304) { // readyState == 4说明请求已完成
    //     var data = ajax.responseText;
    //     data = JSON.parse(data);
    //     // console.log(data);
    //     if (data.data.length == 0) {
    //
    //     } else {
    //       that.setState({
    //         title: data.data
    //       });
    //     }
    //   }
    // };
    // ajax.send();
  }

  render() {
    return (
      <div className='container' style={{borderBottom: '1px solid #ddd', paddingBottom: '20px'}}>
        <div className='contain paddingTops1'>
          <div className='footerCon_div floatleft '>
            {/*{*/}
            {/*this.state.title.map(function (item, i) {*/}

            {/*return (*/}
            {/*<div key={item.names+'headCon1'} className='footerCon185 marginLeft50 fotBg'>*/}
            {/*<dl className='marginTop5'>*/}
            {/*<dt>*/}
            {/*<Link to={"/HelpZx?&id=27"}>*/}
            {/*{item.names}*/}
            {/*</Link>*/}

            {/*</dt>*/}
            {/*{*/}
            {/*this.state.title[i].res.map(function (item, i) {*/}
            {/*return (*/}
            {/*<dd key={item.id+'foCon'} data={item.id}>*/}
            {/*<Link to={"/HelpZx?&id="+item.id}>*/}
            {/*{item.title}*/}
            {/*</Link>*/}
            {/*</dd>*/}
            {/*)*/}
            {/*}, this)*/}
            {/*}*/}
            {/*</dl>*/}
            {/*</div>*/}
            {/*)*/}
            {/*}, this)*/}
            {/*}*/}
            <div className='footerCon185 marginLeft50'>
              <dl className='marginTop5'>
                <dt>新手上路</dt>
                <dd><Link to={'HelpZx?&id=27'}>常见问题</Link></dd>
                <dd><Link to={'HelpZx?&id=28'}>注册登录</Link></dd>
                <dd><Link to={'HelpZx?&id=29'}>用户协议</Link></dd>
                <dd><Link to={'HelpZx?&id=30'}>安全购药</Link></dd>
              </dl>
            </div>
            <div className='footerCon185 marginLeft50'>
              <dl className='marginTop5'>
                <dt>采购指南</dt>
                <dd><Link to={'HelpZx?&id=31'}>购物流程</Link></dd>
                <dd><Link to={'HelpZx?&id=32'}>药瓶配送</Link></dd>
                <dd><Link to={'HelpZx?&id=33'}>配送验收</Link></dd>
              </dl>
            </div>
            <div className='footerCon185 marginLeft50'>
              <dl className='marginTop5'>
                <dt>关于支付</dt>
                <dd><Link to={'HelpZx?&id=34'}>发票制度</Link></dd>
                <dd><Link to={'HelpZx?&id=35'}>线上支付</Link></dd>
              </dl>
            </div>
            <div className='footerCon185 marginLeft50'>
              <dl className='marginTop5'>
                <dt>售后服务</dt>
                <dd><Link to={'HelpZx?&id=37'}>取消订单</Link></dd>
                <dd><Link to={'HelpZx?&id=38'}>退货流程</Link></dd>
                <dd><Link to={'HelpZx?&id=39'}>退款说明</Link></dd>
                <dd><Link to={'HelpZx?&id=44'}>资质荣誉</Link></dd>
              </dl>
            </div>
            <div className='footerCon185 marginLeft50'>
              <dl className='marginTop5'>
                <dt>关于聚创</dt>
                <dd>
                  <a href="http://www.scjuchuang.com/mien.html" target="view_window">
                    员工风采
                  </a>
                </dd>
                <dd>
                  <a href="http://www.scjuchuang.com/commonweal.html" target="view_window">
                    聚创公益
                  </a>
                </dd>
                <dd>
                  <a href="http://www.scjuchuang.com/guanyuwomen.html" target="view_window">
                    关于聚创
                  </a>
                </dd>
              </dl>
            </div>
            <div className='clear'></div>
          </div>
        </div>

        <div className='floatleft footerCon_div1'>
          <div className='floatleft width130 footerCon_div1_div'>
            <img src={require("../../images/head/btm1.png")} alt=""/>
            聚创淘药网
          </div>
          <div className='floatleft width130 footerCon_div1_div1'>
            <img src={require("../../images/head/btm2.png")} className='' alt=""/>
            聚创订阅号
          </div>

        </div>
        <div className='clear'></div>
      </div>
    );
  }
}


export default FooterCon;
