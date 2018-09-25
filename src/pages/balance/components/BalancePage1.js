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
        this.state = {
            list: [],
            page: 1,
            nums: 1,
        }
    }

    componentDidMount() {
        this.startAjax()
    }
    startAjax(){
        const _this = this;
        $.ajax({
            url: InterfaceUtil.getUrl(41),
            type: "post",
            data: InterfaceUtil.addTime({
                user_id: _this.user_id,
                token: _this.token,
                page: _this.state.page,
                pageSize: 10
            }),
            dataType: "json",
            success: function (data) {
                if (data.code === 1) {
                    _this.setState({
                        list: data.data.list,
                        nums:data.data.count,
                    })
                } else {
                    message.error(data.msg)
                }
            }
        })
    }
    clickTitle(e) {
        $('.bl1ul').find('li').eq(e).click();
    }
    changesPage(e){
        this.setState({
            page:e
        },()=>{
            InterfaceUtil.goTop();
            this.startAjax()})
    }
    render() {
        let data = this.props;
        let list = this.state.list;
        const datas=this.state;
        let arry = list.length > 0 ? list.map((item, i) => {
            let type = 1;
            if (item.type === `1`) {
                type = `消费`
            } else if (item.type === `2`) {
                type = `充值`
            } else if (item.type === `3`) {
                type = `退款`
            } else if (item.type === `4`) {
                type = `提现`
            }
            let times = InterfaceUtil.fmtDate(item.created_time)
            return <tr key={item.stream_number+i}>
                <td>{type}</td>
                <td>{times}</td>
                <td>{item.stream_number}</td>
                <td>{item.price}</td>
                <td></td>
            </tr>
        }) : null;
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
                        <button
                            onClick={() => this.clickTitle(1)}
                        >充值
                        </button>
                        <button
                            onClick={() => this.clickTitle(2)}
                        >提现
                        </button>
                    </div>
                </div>
            </div>
            <table className="nTable">
                <thead>
                <tr>
                    <th>类型</th>
                    <th>时间</th>
                    <th>支付流水号</th>
                    <th>金额</th>
                    <th>备注信息</th>
                </tr>
                </thead>
                <tbody>
                {arry}
                {/*<tr>*/}
                {/*<td>退款</td>*/}
                {/*<td>201811111</td>*/}
                {/*<td>+金额</td>*/}
                {/*<td>5555</td>*/}
                {/*<td>啦啦啦啦啦</td>*/}
                {/*</tr>*/}
                </tbody>
            </table>
            <div className='paginationbox'>
                <Pagination showQuickJumper defaultPageSize={10}
                            defaultCurrent={1} current={datas.page} total={datas.nums}
                            onChange={(e) => this.changesPage(e)}
                />
            </div>

        </div>
    }
}

export default BalancePage1;
