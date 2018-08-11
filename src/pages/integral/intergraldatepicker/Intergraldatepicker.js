import React, {Component} from 'react';
import {withRouter} from 'react-router-dom'
import InterfaceUtil from './../../../util/InterfaceUtil';
import Datepicker from './components/Datepicker';
import {message} from 'antd';
import './components/intergraldatepicker.css';
import $ from "jquery";
import CoojiePage from "../../../util/CoojiePage";
import LoginPage from "../../../util/LoginPage";


class ComInfoPage extends Component {
    constructor(props) {
        super(props);
        this.user_id = CoojiePage.getCoojie('user_id');
        this.token = CoojiePage.getCoojie('token');
        this.loginPage = new LoginPage();
        this.state = {}
    }



    handleClick() {
        const _this = this;
        $.ajax({
            url: InterfaceUtil.getUrl(3),
            type: "post",
            data: InterfaceUtil.addTime({
                "token": _this.token, "user_id": _this.user_id
            }),
            dataType: "json",
            success: function (data) {
                if (data.code === 1) {
                    message.success(data.msg)
                } else {
                    message.success(data.msg);
                    _this.loginPage.ajaxLogin(data.code, _this.props);
                }
            }
        })


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
                                    <p>已经累计签到 <span>0</span>天</p>
                                    <p>连续签到 <span>0</span>天</p>
                                </div>
                            </div>
                            <button
                                onClick={
                                    () => this.handleClick()
                                }
                            >
                                签 到
                            </button>
                        </div>

                    </div>
                    <div className="ipdFot">
                        <p>每天客户可签到1次，获得签到积分奖励，</p>
                        <p>首日签到可获取30分，连续签到每日再递增30分，连续签到7天达到签到积分上限210分；</p>
                        <p>继续签到可以每日获取积分210分，如果断签将会重新开始累计；</p>
                        <p>签到积分自动存入积分账户，请在积分记录总查看；</p>
                        <p>更多积分活动请期待，如有疑问请拨打028-83211111咨询。</p>
                    </div>
                </div>

            </div>
        </div>
    }
}

export default withRouter(ComInfoPage);
