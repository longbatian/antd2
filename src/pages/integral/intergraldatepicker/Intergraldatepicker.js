import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import InterfaceUtil from './../../../util/InterfaceUtil';
import Datepicker from './components/Datepicker';

import './components/intergraldatepicker.css';
import $ from "jquery";
import CoojiePage from "../../../util/CoojiePage";


class ComInfoPage extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }



    render() {
        return <div>
            <div className="ipd">
                <div className="ipdHead">
                    <div className="ipdHeadLef">
                        <Datepicker/>
                    </div>
                    <div className="ipdHeadRig">
                        <img src={require('../../../images/interl/intergraldatepicker/01.png')} alt=""/>
                        <div className="ipdHeadRigdiv">
                            <div className="ipdHeaddiv2">
                                <img src={require('../../../images/interl/intergraldatepicker/02.png')} alt=""/>
                                <div className="ipdHeaddiv2rig">
                                    <h2>四川聚创医药有限公司</h2>
                                    <p>已经累计签到 <span>23</span>天</p>
                                    <p>连续签到 <span>23</span>天</p>
                                </div>
                            </div>
                            <button>
                                签 到
                            </button>
                        </div>

                    </div>
                    <div className="ipdFot">
                        <p>标题文本标题文本标题文本标题文本标题文本标题文本标题文本</p>
                        <p>标题文本标题文本标题文本标题文本标题文本标题文本标题文本</p>
                        <p>标题文本标题文本标题文本标题文本标题文本标题文本标题文本</p>
                        <p>标题文本标题文本标题文本标题文本标题文本标题文本</p>
                        <p>标题文本标题文本标题文本标题文本标题文本标题题文本</p>
                        <p>标题文本标题文本标题文本标题文本标题文本标题文本标题文本</p>
                        <p>标题文本文本标题文本</p>
                    </div>
                </div>

            </div>
        </div>
    }
}

export default ComInfoPage;
