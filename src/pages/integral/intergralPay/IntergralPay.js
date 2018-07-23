import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import InterfaceUtil from './../../../util/InterfaceUtil';

import './components/intergralPay.css';


class ComInfoPage extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount() {

    }

    render() {
        return <div>
            <div className="itp">
                <div className="itpHead">
                    <ul>
                        <li>
                            <span>1</span>
                            <div/>
                            <p>确认积分兑换清单</p>
                        </li>
                        <li>
                            <span>2</span>
                            <div/>
                            <p>确认收货人信息</p>
                        </li>
                        <li>
                            <span className="weiwan">3</span>
                            <div className='weiwan'/>
                            <p className='weiwan'>兑换完成</p>
                        </li>
                    </ul>
                </div>
                <div className="itpTable">
                    <div className="itpTabletit">
                        兑换清单
                    </div>
                    <table>
                        <thead>
                            <tr>
                                <th>礼品</th>
                                <th>名称</th>
                                <th>数量</th>
                                <th>小计</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <img src={require('../../../images/interl/03.png')} alt=""/>
                                </td>
                                <td>标题文本文本文本文本文本文本文本文本文本文本文本</td>
                                <td>1</td>
                                <td>1121212</td>
                            </tr>
                        </tbody>
                    </table>
                    <div className="itpTableFot">
                        <div>
                            共
                            <span>1</span>
                            个礼品
                        </div>
                        <div>
                            积分合计:
                            <span>11111</span>
                        </div>
                    </div>
                </div>
                <div className="itpname">
                    <div className="itpTabletit">
                        收货人信息
                    </div>
                    <div className='itpnamecon'>
                        <span className="itpusername">
                            张三xingxing
                             <img src={require("../../../images/buycar/gou.png")}/>
                        </span>
                        <span>四川省 程度会死 金牛区 盛大盛大所多所多</span>
                        <span>13988888888</span>
                        <span className="itpdd">默认地址</span>
                    </div>

                </div>
                <div className="itpBei">
                    <div className="itpTabletit">
                        订单备注
                    </div>
                    <textarea/>
                </div>
                <div className="itpFotBox">
                    <div className='itpFot'>
                        <button>确认支付</button>
                        <div>
                            应付积分:
                            <span>111111</span>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    }
}

export default ComInfoPage;
