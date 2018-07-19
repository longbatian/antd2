import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import InterfaceUtil from './../../../util/InterfaceUtil';
import Greatvaluecoupon from './conponents/Greatvaluecoupon';
import IthTemplate from './conponents/IthTemplate';
import './conponents/integralHome.css'

class IntegralHome extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount() {

    }

    render() {
        return <div>
            <div className="ithHead">
                <div className="ithHeadBox">
                    <div className="ithHeadrig">
                        <div className="ithHeadrigcon">
                            <div className="ithHeadrigcontit">
                                <i className="ith_bg1"/>
                                <h2>四川聚创医药有限公司</h2>
                            </div>
                            <div className="ithStrip">
                                <span>3156/10000</span>
                            </div>
                            <p>还差6844积分即可升级成为金牌会员</p>
                        </div>
                        <div className="ithHeadrigrig">
                            <div>
                                <p>可用积分</p>
                                <p className="bigred">4698</p>
                            </div>
                        </div>
                        <div className="ithHeadrigImg">
                            <img src={require('../../../images/morenhead.png')} alt=""/>
                        </div>
                    </div>
                </div>

            </div>
            <div className="ithconBoxs">
                <div className="ithconbox">
                    <div className="ithconshopping">
                        <h2>购物</h2>
                        <p>成功下单并收货可获得积分奖励</p>
                        <Link to="Integral/home">
                            去购物 <span>></span>
                        </Link>
                    </div>
                    <div className="ithconshopping ithconSignin">
                        <h2>每日签到</h2>
                        <p>连续签到可获得积分奖励</p>
                        <Link to="Integral/home">
                            去签到<span>></span>
                        </Link>
                    </div>
                    <div className="ithconhua">
                        <h1>积分怎么用更划算?</h1>
                        <ul>
                            <li>
                                <div className="ithconhuaLef">
                                    抽奖
                                </div>
                                <div className="ithconhuaRig">
                                    <h2>小积分抽大奖</h2>
                                    <p>积分抽奖一次仅用<span>20积分</span></p>
                                </div>
                                <Link to="#">
                                    去抽奖
                                </Link>
                            </li>
                            <li>
                                <div className="ithconhuaLef">
                                    购券
                                </div>
                                <div className="ithconhuaRig">
                                    <h2>积分换优惠券</h2>
                                    <p>积分可以换取超值大额神券 </p>
                                </div>
                                <Link to="#">
                                    去购券
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <ul className="ithscollTit">
                    <li>
                        热门兑换
                    </li>
                    <li>
                        家用电器
                    </li>
                    <li>
                        移动电器
                    </li>
                    <li>
                        办公用品
                    </li>
                    <li>
                        户外运动
                    </li>
                </ul>
               <Greatvaluecoupon/>
               <IthTemplate/>
            </div>
        </div>
    }
}

export default IntegralHome;
