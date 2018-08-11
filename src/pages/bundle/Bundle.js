import React from 'react';
import InterfaceUtil from '../../util/InterfaceUtil';
import CoojiePage from '../../util/CoojiePage';
import {Input, message} from "antd";
import Buyok from "./../../components/common/buycar_ok";
import '../../styles/newjuchuang.css'
import $ from "jquery";
import {PubSub} from "pubsub-js";

class Bundle extends React.Component {
    constructor(props) {
        super(props);
        this.user_id = CoojiePage.getCoojie('user_id');
        this.token = CoojiePage.getCoojie('token');
        this.state = {
            list: []
        }
    }

    componentDidMount() {
        const _this = this;
        $.ajax({
            url: InterfaceUtil.getUrl(75),
            type: "post",
            data: InterfaceUtil.addTime({
                user_id: _this.user_id, token: _this.token, page: 1, pageSize: 20
            }),
            dataType: "json",
            success: function (data) {

                if (data.code === 1) {
                    _this.setState({
                        list: data.data
                    })
                } else {
                    message.warning(data.msg);
                }
            }
        })
    }

    onChange(e, id) {
        let a = e.target.value;
        this.setNum(a, id);
    }

    setUp(num, id, max) {
        num++;
        num = num > max ? max : num;
        this.setNum(num, id)
    }

    setDown(num, id) {
        num--;
        num = num < 0 ? 1 : num;
        this.setNum(num, id)
    }

    setNum(num, id) {
        let arr = this.state.list;
        arr.map((i, j) => {
            if (i.id === id) {
                i[`min_buy`] = num;
            }
        });
        this.setState({
            list: arr
        });
    }

    buycar(num, id) {
        const _this = this;
        $.ajax({
            url: InterfaceUtil.getUrl(11),
            type: "post",
            data: InterfaceUtil.addTime({
                user_id: _this.user_id,
                token: _this.token,
                goods_package_id: id,
                goods_num:num
            }),
            dataType: "json",
            success: function (data) {
                if (data.code === 1) {
                    CoojiePage.setBuyCarOk();
                    PubSub.publish('PubSubmessage', data.code);
                } else {
                    message.warning(data.msg);
                }
            }
        })
    }

    render() {
        const data = this.state;
        const list = data.list;
        let lists = list.length > 0 ? list.map((it, i) => {
            let arr = it.goods_list.map((j) => {
                return <div
                    key={j.id}
                    className="bdliCon">
                    <span className="bd_bg1"/>
                    <span className="bdnames">{j.name}</span>
                    <span className="bdnum">{j.standard}</span>
                    <span className="bdchang">{j.enterprise}</span>
                    <span className="bdczd">{j.min_buy}{j.unit}</span>
                    <span className="bdmoy">￥{j.price}</span>
                </div>
            });
            let value = it.min_buy ? it.min_buy : 1;
            return <li key={it.id}>
                <div className="bdboxlef">
                    <img src={it.image} className='rdImg'/>
                </div>
                <div className="bdboxrig">
                    <div className="bdboxrigTit">
                        <span>特惠套餐</span>
                        <h3>{it.title}</h3>
                    </div>
                    <div className="bdliConBox">
                        {/*<div className="bdliCon">*/}
                        {/*<span className="bd_bg1"/>*/}
                        {/*<span className="bdnames">感冒颗粒</span>*/}
                        {/*<span className="bdnum">255656</span>*/}
                        {/*<span className="bdchang">厂家厂家厂家厂家厂家</span>*/}
                        {/*<span className="bdczd">15he</span>*/}
                        {/*<span className="bdmoy">￥6.50</span>*/}
                        {/*</div>*/}
                        {arr}
                    </div>
                    <div className="bdliFot">
                        <div className="bdliFotlef">
                            <span className="bd_big">￥{it.price}</span>
                            {/*<span className="bd_hen">￥356.00</span>*/}
                        </div>
                        <div className="bdliFotrig">
                            <div className="bdliFotrigInputBox">
                                <div className="bdliFotrigInputBoxRig">
                                    <span
                                        onClick={() => this.setUp(value, it.id, it.package_num)
                                        }
                                    >+</span>
                                    <span
                                        onClick={() => this.setDown(value, it.id)}
                                    >-</span>
                                </div>
                                <Input
                                    defaultValue={value}
                                    type="text"
                                    value={value}
                                    onChange={(e) => this.onChange(e, it.id)}
                                />
                            </div>
                            <div
                                className="bdliFotrigBut"
                                onClick={() => this.buycar(value, it.id)}
                            >
                                加入购物车
                            </div>
                        </div>
                    </div>
                </div>
            </li>
        }) : null;
        return <div>
            <img src={require('../../images/redemption/01.png')} className='rdImg' alt=""/>
            <div className="bdbox">
                <ul className='bdboxul'>
                    {/*<li>*/}
                    {/*<div className="bdboxlef">*/}
                    {/*<img src={require('../../images/redemption/01.png')} className='rdImg'/>*/}
                    {/*</div>*/}
                    {/*<div className="bdboxrig">*/}
                    {/*<div className="bdboxrigTit">*/}
                    {/*<span>特惠套餐</span>*/}
                    {/*<h3>3简装仅需dwdwd元</h3>*/}
                    {/*</div>*/}
                    {/*<div className="bdliConBox">*/}
                    {/*<div className="bdliCon">*/}
                    {/*<span className="bd_bg1"/>*/}
                    {/*<span className="bdnames">感冒颗粒</span>*/}
                    {/*<span className="bdnum">255656</span>*/}
                    {/*<span className="bdchang">厂家厂家厂家厂家厂家</span>*/}
                    {/*<span className="bdczd">15he</span>*/}
                    {/*<span className="bdmoy">￥6.50</span>*/}
                    {/*</div>*/}
                    {/*<div className="bdliCon">*/}
                    {/*<span className="bd_bg1"/>*/}
                    {/*<span className="bdnames">感冒颗粒</span>*/}
                    {/*<span className="bdnum">255656</span>*/}
                    {/*<span className="bdchang">厂家厂家厂家厂家厂家</span>*/}
                    {/*<span className="bdczd">15he</span>*/}
                    {/*<span className="bdmoy">￥6.50</span>*/}
                    {/*</div>*/}
                    {/*<div className="bdliCon">*/}
                    {/*<span className="bd_bg1"/>*/}
                    {/*<span className="bdnames">感冒颗粒</span>*/}
                    {/*<span className="bdnum">255656</span>*/}
                    {/*<span className="bdchang">厂家厂家厂家厂家厂家</span>*/}
                    {/*<span className="bdczd">15he</span>*/}
                    {/*<span className="bdmoy">￥6.50</span>*/}
                    {/*</div>*/}
                    {/*<div className="bdliCon">*/}
                    {/*<span className="bd_bg1"/>*/}
                    {/*<span className="bdnames">感冒颗粒</span>*/}
                    {/*<span className="bdnum">255656</span>*/}
                    {/*<span className="bdchang">厂家厂家厂家厂家厂家</span>*/}
                    {/*<span className="bdczd">15he</span>*/}
                    {/*<span className="bdmoy">￥6.50</span>*/}
                    {/*</div>*/}
                    {/*<div className="bdliCon">*/}
                    {/*<span className="bd_bg1"/>*/}
                    {/*<span className="bdnames">感冒颗粒</span>*/}
                    {/*<span className="bdnum">255656</span>*/}
                    {/*<span className="bdchang">厂家厂家厂家厂家厂家</span>*/}
                    {/*<span className="bdczd">15he</span>*/}
                    {/*<span className="bdmoy">￥6.50</span>*/}
                    {/*</div>*/}

                    {/*</div>*/}
                    {/*<div className="bdliFot">*/}
                    {/*<div className="bdliFotlef">*/}
                    {/*<span className="bd_big">￥356.00</span>*/}
                    {/*<span className="bd_hen">￥356.00</span>*/}
                    {/*</div>*/}
                    {/*<div className="bdliFotrig">*/}
                    {/*<div className="bdliFotrigInputBox">*/}
                    {/*<div className="bdliFotrigInputBoxRig">*/}
                    {/*<span>+</span>*/}
                    {/*<span>-</span>*/}
                    {/*</div>*/}
                    {/*<input type="text"/>*/}
                    {/*</div>*/}
                    {/*<div className="bdliFotrigBut">*/}
                    {/*加入购物车*/}
                    {/*</div>*/}
                    {/*</div>*/}
                    {/*</div>*/}
                    {/*</div>*/}
                    {/*</li>*/}
                    {lists}
                </ul>
            </div>
            <Buyok/>
        </div>
    }

}

export default Bundle