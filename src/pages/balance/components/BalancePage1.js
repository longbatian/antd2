import React, {Component} from 'react';
import {Pagination} from 'antd';
import './balanceLess.css'
import InterfaceUtil from '../../../util/InterfaceUtil'
import CoojiePage from '../../../util/CoojiePage'
import {message} from "antd/lib/index";
import $ from "jquery";

class BalancePage1 extends Component {
    constructor(props) {
        super(props);
        this.user_id = CoojiePage.getCoojie('user_id');
        this.token = CoojiePage.getCoojie('token');
        this.state={
            list:[]
        }
    }

    componentDidMount() {
        const _this = this;
        $.ajax({
            url: InterfaceUtil.getUrl(41),
            type: "post",
            data: InterfaceUtil.addTime({
                user_id:_this.user_id,
                token:_this.token,
                page:1,
                pageSize:10
            }),
            dataType: "json",
            success: function (data) {

                if (data.code === 1) {
                    _this.setState({
                        list:data.data.list,
                    })
                } else {
                    message.error(data.msg)
                }
            }
        })


    }

    render() {
        let data = this.props;
        return <div className="">
            <div className="bl1Head">
                <div className="bl1Headlef">
                    <p>我的账户余额</p>
                    <p>
                        <span className="bghsmall">￥</span>
                        {data.price}
                    </p>
                </div>
                <div className="bl1HeadRig">
                    <div className="bl1HeadRiglef">
                        <p>充值余额:
                            {data.price}
                        </p>
                        <p>赠送余额:0</p>
                    </div>
                    <div className="bl1HeadRigrig">
                        <button>充值</button>
                        <button>提现</button>
                    </div>
                </div>
            </div>
            <table className="nTable">
                <thead>
                <tr>
                    <th>类型</th>
                    <th>时间</th>
                    <th>金额</th>
                    <th>余额</th>
                    <th>备注信息</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    {/*<td>退款</td>*/}
                    {/*<td>201811111</td>*/}
                    {/*<td>+金额</td>*/}
                    {/*<td>5555</td>*/}
                    {/*<td>啦啦啦啦啦</td>*/}
                </tr>
                </tbody>
            </table>
            <div className='paginationbox'>
                <Pagination showQuickJumper defaultCurrent={2} total={10}/>
            </div>

        </div>
    }
}

export default BalancePage1;