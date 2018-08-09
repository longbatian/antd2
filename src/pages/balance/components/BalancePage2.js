import React, {Component} from 'react';
import {Input} from 'antd';
import './balanceLess.css'


class BalancePage1 extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return <div className="bods pad20">
            <div className="bl2d">
                <div className="bl2dlef">
                    充值金额
                </div>
                <div className="bl2drig">
                    <div className='bl2drigspan'>
                        <span>100元</span>
                        <span>200元</span>
                        <span>400元</span>
                        <span>600元</span>
                        <span>600元</span>
                        <span className="bl2drigspanact">10000元</span>
                        <Input placehoder="请输入金额"/>
                    </div>

                </div>
            </div>
            <div className="bl2d">
                <div className="bl2dlef">
                    优惠信息
                </div>
                <div className="bl2drig">
                    <div className="bl2drigtabs">
                        <ul className="bl2drigtabstit">
                            <li>活动</li>
                        </ul>
                        <div className="bl2drigtabscon">
                            充值后可获得500积分
                        </div>
                    </div>
                </div>
            </div>
            <div className="bl2d">
                <div className="bl2dlef">
                    支付金额
                </div>
                <div className="bl2drig">
                    <span className='bl2drigSpan'>
                         ￥500
                    </span>

                </div>
            </div>
            {/*<div className="bl2d">*/}
                {/*<div className="bl2dlef">*/}
                    {/*充值金额*/}
                {/*</div>*/}
                {/*<div className="bl2drig">*/}
                    {/*<div*/}
                        {/*className='dingdan_div_p_span1 dingdan_div_p_span3'*/}
                        {/*onClick={(e) => {*/}
                            {/*this.zhifu(e)*/}
                        {/*}}>*/}
                        {/*<img src={require("../../../images/buycar/zfb.png")}*/}
                             {/*className='marginRight10 dingdan_div_p_span1_img'*/}
                             {/*alt=""/>支付宝*/}
                    {/*</div>*/}
                    {/*<div className='dingdan_div_p_span2' onClick={(e) => {*/}
                        {/*this.zhifu1(e)*/}
                    {/*}}>*/}
                        {/*<img src={require("../../../images/buycar/weixin.png")}*/}
                             {/*className='marginRight10 dingdan_div_p_span1_img'*/}
                             {/*alt=""/>微信支付*/}
                    {/*</div>*/}
                {/*</div>*/}
            {/*</div>*/}
            <div className="bl2d">
                <div className="bl2dlef">
                </div>
                <div className="bl2drig">
                    <button className="bl2drigButton">
                        立即支付
                    </button>
                </div>
            </div>
            <div className="bl2Fot">
                <p>
                    客服电话：028-8321111
                    （工作时间：周一至周五8:30-17:30节假日除外）
                </p>
               <p className='bl2FotTit'>
                   温馨提示:
               </p>
                <p>支付宝、微信充值后及时到账，无需等到</p>
                <p>用户鱼儿永久有效，充值余额可以提现，根据需要充值！</p>
            </div>
        </div>
    }
}

export default BalancePage1;