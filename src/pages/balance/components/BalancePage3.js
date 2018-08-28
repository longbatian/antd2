import React, {Component} from 'react';
import {Input, message} from 'antd';
import $ from 'jquery'
import './balanceLess.css'
import InterfaceUtil from "../../../util/InterfaceUtil";
import CoojiePage from "../../../util/CoojiePage";


class BalancePage1 extends Component {
    constructor(props) {
        super(props)
        this.user_id = CoojiePage.getCoojie('user_id');
        this.token = CoojiePage.getCoojie('token');
    }

    onClicks(e, num) {
        $('.bl3InputNum').val(num)
    }

    buttons() {
        const _this=this;
        let price=$('.bl3InputNum').val();
        let account_info=$('.bl3InputNum').val();
        let account_number=$('.bl3InputNameNum').val();
        let account_name=$('.bl3InputName').val();
        if (price !== `` &&  account_info!== `` && account_number !== `` &&  account_number!== ``) {
            $.ajax({
                type: "post",
                url: InterfaceUtil.getUrl(27),
                data: InterfaceUtil.addTime({
                    "token": _this.token,
                    "user_id": _this.user_id,
                    price:price,
                    account_info:account_info,
                    account_number:account_number,
                    account_name:account_name,
                }),
                dataType: "json",
                success: function (data, status) {
                    if (data.code===1){
                        message.success('提交成功，正在为您处理');
                        $('.bl3InputNum').val(``)
                        $('.bl3InputTit').val(``)
                        $('.bl3InputNameNum').val(``)
                        $('.bl3InputName').val(``);
                    }else {
                        message.warning(data.msg)
                    }
                }
            })

        } else {
            message.error('请填写必填项')
        }
    }

    render() {
        let data=this.props;
        return <div className="">
            <div className="bl3B">
                <div className="bl3Btit">
                    提现余额
                </div>
                <div className="bl3Bcon">
                    <Input className="bl3InputNum"/>
                    <span>当前余额：</span>
                    <span className='clored'>{data.price}</span>
                    <span>元</span>
                    <button
                        onClick={
                            (e) => this.onClicks(e, data.price)
                        }
                    >全部提现
                    </button>
                </div>
            </div>
            <div className="bl3B">
                <div className="bl3Btit">
                    开户信息：
                </div>
                <div className="bl3Bcon">
                    <Input className="bl3InputTit"/>
                    <span className="nl3T">
                        *请输入正确的银行卡开户行信息，如遗忘请联系银行客服确认后再输入
                    </span>
                </div>
            </div>
            <div className="bl3B">
                <div className="bl3Btit">
                    银行卡号：
                </div>
                <div className="bl3Bcon">
                    <Input className="bl3InputNameNum"/>
                    <span className="nl3T">
                        *请输入正确的银行卡号
                    </span>
                </div>
            </div>
            <div className="bl3B">
                <div className="bl3Btit">
                    开户人：
                </div>
                <div className="bl3Bcon">
                    <Input className="bl3InputName"/>
                    <span className="nl3T">
                        *请输入上面的银行卡号对应的户名
                    </span>
                </div>
            </div>
            <div className="bl3B">
                <div className="bl3Bcon">
                    <span className="clo188">提交申请后，我们将及时为您审核（工作日1-3天，遇节假日顺延），你可随时关注您的提现进度</span>
                    <button
                        onClick={
                            () => this.buttons()
                        }

                        className="bl3But">
                        提交申请
                    </button>
                </div>
            </div>
        </div>
    }
}

export default BalancePage1;