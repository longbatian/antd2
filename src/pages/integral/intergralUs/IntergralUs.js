import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import InterfaceUtil from './../../../util/InterfaceUtil';
import {Pagination} from 'antd';
import './conponents/intergralUs.css'
import CoojiePage from "../../../util/CoojiePage";
import $ from "jquery";

class IntergralUs extends Component {
    constructor(props) {
        super(props);
        this.user_id = CoojiePage.getCoojie('user_id');
        this.token = CoojiePage.getCoojie('token');
        this.state = {
            type: 4,
            page: 1,
            pageNum: 1,
            con: [],
            arry: [
                {id: 4, title: '积分兑换', isTrue: true},
                {id: 2, title: '积分流水', isTrue: false},
                {id: 3, title: '抽奖记录', isTrue: false}
            ],
            integral:0,
            consume_integral:0
        }
    }

    componentDidMount() {
        const _this = this;
        this.startAjax();
        //个人信息总览
        $.ajax({
            url: InterfaceUtil.getUrl(34),
            type: "post",
            data: InterfaceUtil.addTime({
                "token": _this.token, "user_id": _this.user_id
            }),
            dataType: "json",
            success: function (data) {
                console.log(data)
                if (data.code === 1) {
                    _this.setState({
                        consume_integral: data.data.consume_integral,
                        integral: data.data.integral
                    })
                }

            }
        })
    }
    /**
     *积分记录
     */
    startAjax() {
        const _this = this;
        $.ajax({
            url: InterfaceUtil.getUrl(68),
            type: "post",
            data: InterfaceUtil.addTime({
                "token": _this.token, "user_id": _this.user_id, "type": _this.state.type,
                page: _this.state.page, pageSize: 10
            }),
            dataType: "json",
            success: function (data) {

                if (data.code === 1) {
                    if (_this.state.page === 1) {

                        _this.setState({
                            pageNum: data.data.count,
                            con: data.data.list
                        })
                    } else {

                        _this.setState({
                            con: data.data.list
                        })
                    }

                }
            }
        })
    }

    onChange(e) {
        this.setState({
            page: e
        }, () => this.startAjax())
    }

    onChanges(e) {
        let arrys = this.state.arry;
        arrys.map((item) => {
            item.id === e ? item.isTrue = true : item.isTrue = false
        });
        this.setState({
            type: e,
            page:1,
            arry: arrys
        }, () => this.startAjax())
    }

    render() {
        const data = this.state;
        let tr = null;
        tr = data.con.length > 0 ? data.con.map((item, i) => {
            let times = InterfaceUtil.fmtDate(item.created_time)
            return <tr key={i}>
                <td>{item.describe}</td>
                <td>{times}</td>
                <td></td>
                <td></td>
                <td>已兑换</td>
                <td></td>
            </tr>
        }) : null;
        let list = data.arry.map((item) => {
            let listClass = item.isTrue ? `itg_act` : null;
            return <li key={item.id} className={listClass} onClick={() => this.onChanges(item.id)}>{item.title}</li>
        })
        return <div>
            <div className="itgBoxs">
                <div className="itgHead">
                    <div className="itgHeadlef">
                        <h2>总消费积分</h2>
                        <p>{data.consume_integral}</p>
                    </div>
                    <div className="itgHeadlef">
                        <h2>可用积分</h2>
                        <p>{data.integral}</p>
                    </div>
                    <div className="itgHeadrig">
                        <Link to='/Integral/home'>去购物</Link>
                        <Link to="/Integral/home">去积分商城</Link>
                    </div>
                </div>
                <ul className="itgtableTit">
                    {list}
                    {/*<li>中奖记录</li>*/}
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
                        {/*<tr>*/}
                        {/*<td>兑换礼品</td>*/}
                        {/*<td>2017.15.11 15.15.12</td>*/}
                        {/*<td>932210</td>*/}
                        {/*<td>932210</td>*/}
                        {/*<td>已兑换</td>*/}
                        {/*<td>兑换礼品单号:18000000000000</td>*/}
                        {/*</tr>*/}
                        {tr}

                        </tbody>
                    </table>
                </div>

                <div className="itgtablefot">
                    <Pagination
                        showQuickJumper
                        defaultCurrent={1}
                        current={data.page}
                        total={data.pageNum}
                        hideOnSinglePage={true}
                        onChange={(e) => this.onChange(e)}
                    />
                </div>
            </div>
        </div>
    }
}

export default IntergralUs;
