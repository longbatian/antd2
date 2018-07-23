import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import InterfaceUtil from './../../../util/InterfaceUtil';

import './conponents/intergralUs.css'

class IntergralUs extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount() {

    }

    render() {
        return <div>
            <div className="itgBoxs">
                <div className="itgHead">
                    <div className="itgHeadlef">
                        <h2>总消费积分</h2>
                        <p>153151551</p>
                    </div>
                    <div className="itgHeadlef">
                        <h2>可用积分</h2>
                        <p>153151551</p>
                    </div>
                    <div className="itgHeadrig">
                        <Link to='#'>去购物</Link>
                        <Link to="#">去积分商城</Link>
                    </div>
                </div>
                <ul className="itgtableTit">
                    <li className="itg_act">积分兑换</li>
                    <li>积分流水</li>
                    <li>中奖记录</li>
                </ul>
                <div className="itgtableBox">
                    <table className="itgtable">
                        <thead>
                        <tr>
                            <th>兑换类型</th>
                            <th>兑换时间</th>
                            <th>消费积分</th>
                            <th>积分结余</th>
                            <th>兑换状态</th>
                            <th>备注信息</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>兑换礼品</td>
                            <td>2017.15.11 15.15.12</td>
                            <td>932210</td>
                            <td>932210</td>
                            <td>已兑换</td>
                            <td>兑换礼品单号:18000000000000</td>
                        </tr>
                        <tr>
                            <td>兑换礼品</td>
                            <td>2017.15.11 15.15.12</td>
                            <td>932210</td>
                            <td>932210</td>
                            <td>已兑换</td>
                            <td>兑换礼品单号:18000000000000</td>
                        </tr>
                        <tr>
                            <td>兑换礼品</td>
                            <td>2017.15.11 15.15.12</td>
                            <td>932210</td>
                            <td>932210</td>
                            <td>已兑换</td>
                            <td>兑换礼品单号:18000000000000</td>
                        </tr>
                        </tbody>
                    </table>
                </div>

                <div className="itgtablefot">
                    <ul>
                        <li> ←上一页 </li>
                        <li>1</li>
                        <li className='yellow'>2</li>
                        <li>3</li>
                        <li>下一页></li>
                    </ul>
                </div>
            </div>
        </div>
    }
}

export default IntergralUs;
