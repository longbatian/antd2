import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import InterfaceUtil from './../../../util/InterfaceUtil';

import './components/comInfo.css';


class ComInfoPage extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount() {

    }

    render() {
        return <div>
            <div className="cmiBox">
                <div className="cmiHead">
                    <img src={require('../../../images/interl/03.png')} alt=""/>
                    <div className="cmiHeaddiv">
                        <h2>标题文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本</h2>
                        <div className="cmiHeaddivcon">
                            <p>参考价：<span className="hen">￥12.6</span></p>
                            <p>积分数: <span className="yellow">499999</span></p>
                            <p>库存数:20</p>
                        </div>
                        <div className="cmiHeaddivfot">
                            <div className="cmiHeaddivconlef">
                                <span>-</span>
                                <span>+</span>

                                <input type="text"/>
                            </div>
                            <button>立即兑换</button>
                        </div>
                        <div className="cmiHeaddivconyijing">
                            已有 8888 人兑换
                        </div>
                    </div>
                </div>
                <div className="cmiCon">
                    <div className="cmiContit">
                        礼品详情
                    </div>
                </div>
            </div>
        </div>
    }
}

export default ComInfoPage;
