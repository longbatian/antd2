import React, {Component} from 'react';
import {Input} from 'antd';
import $ from 'jquery';
import CoojiePage from '../../../util/CoojiePage';
import Payfor from '../../../components/dingdan/dingdanTitle2'
import InterfaceUtil from '../../../util/InterfaceUtil';
import './balanceLess.css'


class BalancePage1 extends Component {
    constructor(props) {
        super(props);
        this.user_id = CoojiePage.getCoojie('user_id');
        this.token = CoojiePage.getCoojie('token');
        this.state = {

        }
    }

    onChange(e) {
        $('.bl2drigspan').find('span').removeClass();
        $(e.target).addClass('bl2drigspanact');
       $('.bl2drigspanpar').text($(e.target).text())
    }
    onBlur(e){
        $('.bl2drigspan').find('span').removeClass();
        let val=e.target.value;
        if(isNaN(val)){
            alert('请输入正确的金额')
        }else {
            $('.bl2drigspanpar').text( val)

        }
    }

    render() {
        return <div className="bods pad20">
            <div className="bl2d">
                <div className="bl2dlef">
                    充值金额
                </div>
                <div className="bl2drig">
                    <div className='bl2drigspan'>
                        <span

                            onClick={this.onChange}
                        >100元</span>
                        <span
                            onClick={this.onChange}
                        >200元</span>
                        <span
                            onClick={this.onChange}
                        >400元</span>
                        <span
                            onClick={this.onChange}
                        >600元</span>
                        <span
                            onClick={this.onChange}
                        >800元</span>
                        <span
                            onClick={this.onChange}
                            className="bl2drigspanact">1000元</span>
                        <Input
                            onBlur={
                                (e) => this.onBlur(e)
                            }
                            placehoder="请输入金额"/>
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
                         ￥<span className="bl2drigspanpar">500</span>
                    </span>

                </div>
            </div>
            <div className="bl2d">
                <div className="bl2dlef">
                </div>
                <div className="bl2drig">
                    <Payfor/>
                    {/*<button className="bl2drigButton">*/}
                        {/*立即支付*/}
                    {/*</button>*/}
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