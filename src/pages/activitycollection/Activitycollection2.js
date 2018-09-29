import React from 'react';
import $ from 'jquery';
import {Input, message} from 'antd';
import {Link} from 'react-router-dom';
import CoojiePage from './../../util/CoojiePage';
import InterfaceUtil from "../../util/InterfaceUtil";
import {PubSub} from 'pubsub-js'
import Buyok from "./../../components/common/buycar_ok";
import './components/activitycollection.css'


class Activitycollection extends React.Component {
    constructor(props) {
        super(props);
        this.user_id = CoojiePage.getCoojie('user_id');
        this.token = CoojiePage.getCoojie('token');
        this.state = {
            coupon_list: [],
            odds_activity: [],
            period_activity: [],
            traded_list: [],
        }
    }

    componentDidMount() {
        const _this = this;
        $.ajax({
            url: InterfaceUtil.getUrl(73),
            type: "post",
            data: InterfaceUtil.addTime({
                user_id: _this.user_id,
                token: _this.token,
            }),
            dataType: "json",
            success: function (data) {
                if (data.code === 1) {
                    let datas = data.data
                    _this.setState({
                        coupon_list: datas.coupon_list,
                        odds_activity: datas.odds_activity,
                        period_activity: datas.period_activity,
                        traded_list: datas.traded_list
                    })
                }
            }
        })
    }

    /**
     *焦点移除改变值
     *e当前数量，unit中包装，id，商品id，list数组名字，maxnum最大值
     */
    onChange(e, unit, maxnum, id, list) {
        var b = e.target.value;
        let min_buy_ = 0;
        unit = parseInt(unit);
        if (isNaN(b) != false || b <= 0) {
            min_buy_ = unit;
        } else {
            var as = parseInt(b % unit);
            if (as != 0) {
                b = b - as + unit;
                min_buy_ = b;
            } else {
                min_buy_ = b;
            }
        }
        if (b > maxnum) {
            min_buy_ = maxnum
        } else if (b < unit) {
            min_buy_ = unit
        }
        this.setStateList(min_buy_, id, list)
    }

    /**
     *输入改变
     *e this，id商品id，list数组名字
     */
    onChange2(e, id, lists) {
        let b = e.target.value;
        this.setStateList(b, id, lists)
    }

    /**
     *减数量
     *e当前数量，unit中包装，id，商品id，list数组名字
     */
    setDown(e, unit, maxnum, id, list) {
        let b = e;
        unit = parseInt(unit)
        maxnum = parseInt(maxnum)
        let num = 0;
        if (b - unit < unit) {
            num = unit
        } else {
            num = b - unit
        }
        this.setStateList(num, id, list)
    }

    /**
     *加数量
     *e当前数量，unit中包装，id，商品id，list数组名字
     */
    setUp(e, unit, maxnum, id, list) {
        let b = e;
        unit = parseInt(unit)
        maxnum = parseInt(maxnum)
        let num = 0;
        if (b + unit > maxnum) {
            num = maxnum
        } else {
            num = b + unit
        }
        this.setStateList(num, id, list)
    }

    /**
     *改变数组中的数量
     *num数量，id对应id，list数组的名字
     */
    setStateList(num, id, lists) {
        let list = this.state[lists];
        list.map((it, i) => {
            if (it.goods_id) {
                if (it.goods_id === id) {
                    it.goods.min_buy = num
                }
            } else {
                if (it.id === id) {
                    it.min_buy = num
                }
            }

        });
        let arr = {};
        arr[lists] = list;
        this.setState(arr);
    }

    joinCar(num, id) {
        const _this = this;
        $.ajax({
            url: InterfaceUtil.getUrl(11),
            type: "post",
            data: InterfaceUtil.addTime({
                "token": _this.token,
                "user_id": _this.user_id,
                goods_id: id,
                goods_num: num
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
    lingqu(e, id) {

        const _this = this;
        //  优惠券领取
        $.ajax({
            url: InterfaceUtil.getUrl(51),
            type: "post",
            data: InterfaceUtil.addTime({
                "token": _this.token, "user_id": _this.user_id, coupon_id: id
            }),
            dataType: "json",
            success: function (data) {
                if(data.code===1){
                    message.success(data.msg)
                }else {
                    message.warning(data.msg)
                }
            }
        });
    }
    render() {
        const data = this.state;
        let coupon_list = data.coupon_list.length > 0 ? data.coupon_list.map((it, i) => {
            let time1 = InterfaceUtil.fmtDate(it.start_time)
            let time2 = InterfaceUtil.fmtDate(it.end_time)
            return <li key={it.id}>
                <div className="acBig">
                    <span>¥</span>
                    <p>{it.name}</p>
                </div>
                <div className='acP'>
                    <span className="acLei">优惠券</span>
                    <span className="acYuan">【满{it.use_condition}元可以使用】</span>
                </div>
                <p className="acUse">{it.describe}可用 </p>
                <p className="acTime">有效期【{time1}-{time2}】</p>
                <button
                    onClick={(e) => {
                        this.lingqu(e, it.id)
                    }}
                >立即领取
                </button>
            </li>
        }) : null;
        let odds_activity = data.odds_activity.length > 0 ? data.odds_activity.map((it, i) => {
            let time = InterfaceUtil.fmtDate(it.validity_time);
            return <li key={it.id}>
                <img src={it.image}/>
                <div className="acUl2Titmoy">立省:{it.activity_price}</div>
                <div className="acul2Con">
                    <p className="acul2ConTit">{it.name}</p>
                    <p>{it.enterprise}</p>
                    <p>规格：{it.standard}</p>
                    <p>效期：{time}</p>
                    <p>限购：<span className="colred">{it.activity_max_num}{it.unit}</span></p>
                    <p>价格：
                        <span className="acbigs colred">{it.activity_price}</span>
                        <span className="acYuan">原价：{it.price}</span>
                    </p>
                    <div className="acul2ConFot">
                        <div className="acul2ConFotLef">
                            <div className="acul2ConFotLefspan">
                                <span
                                    onClick={
                                        () => this.setDown(
                                            it.min_buy,
                                            it.min_buy_,
                                            it.activity_max_num,
                                            it.id,
                                            `odds_activity`)}
                                >-</span>
                                <span
                                    onClick={
                                        () => this.setUp(
                                            it.min_buy,
                                            it.min_buy_,
                                            it.activity_max_num,
                                            it.id,
                                            `odds_activity`)}
                                >+</span>
                            </div>
                            <Input
                                type="text"
                                value={it.min_buy}
                                onChange={
                                    (value) => this.onChange2(value, it.id, `odds_activity`)
                                }
                                onBlur={
                                    (e) => this.onChange(e, it.min_buy_, it.activity_max_num, it.id, `odds_activity`)}
                            />
                        </div>
                        <div
                            className="acul2ConFotbut"
                            onClick={() => this.joinCar(it.min_buy, it.id)}
                        >
                            加入购物车
                        </div>
                    </div>
                </div>
            </li>
        }) : null;

        let period_activity = data.period_activity.length > 0 ? data.period_activity.map((it, i) => {
            let time = InterfaceUtil.fmtDate(it.validity_time);
            return <li key={it.id}>
                <img src={it.image}/>
                <div className="acul2Con">
                    <p className="acul2ConTit">{it.name}</p>
                    <p>{it.name}</p>
                    <p>规格：{it.standard}</p>
                    <p className="colred">效期：{time}</p>
                    <p>价格：
                        <span className="acbigs colred">{it.activity_price}</span>
                        <span className="acYuan">原价：{it.price}</span>
                    </p>
                    <div className="acul2ConFot">
                        <div className="acul2ConFotLef">
                            <div className="acul2ConFotLefspan">
                               <span
                                   onClick={
                                       () => this.setDown(
                                           it.min_buy,
                                           it.min_buy_,
                                           it.activity_max_num,
                                           it.id,
                                           `period_activity`)}
                               >-</span>
                                <span
                                    onClick={
                                        () => this.setUp(
                                            it.min_buy,
                                            it.min_buy_,
                                            it.activity_max_num,
                                            it.id,
                                            `period_activity`)}
                                >+</span>
                            </div>
                            <Input
                                type="text"
                                value={it.min_buy}
                                onChange={
                                    (value) => this.onChange2(value, it.id, `period_activity`)
                                }
                                onBlur={
                                    (e) => this.onChange(e, it.min_buy_, it.activity_max_num, it.id, `period_activity`)}
                            />
                        </div>
                        <div
                            className="acul2ConFotbut"
                            onClick={() => this.joinCar(it.min_buy, it.id)}
                        >
                            加入购物车
                        </div>
                    </div>
                </div>
            </li>
        }) : null;

        let traded_list = data.traded_list.length > 0 ? data.traded_list.map((it, i) => {
            let time = InterfaceUtil.fmtDate(it.goods.validity_time);
            return <li key={it.goods.id}>
                <img src={it.goods.image}/>
                <div className="acUl2Titmoy2">
                    <span>每次购买本品{it.goods_num}{it.goods.unit}</span>
                    <span>
                        +{it.traded_price}换购
                        {it.traded_goods_num}
                        {it.traded_goods.unit}
                        {it.traded_goods.name}
                        </span>
                </div>
                <div className="acul2Con">
                    <p className="acul2ConTit">{it.goods.name}</p>
                    <p>{it.goods.enterprise}</p>
                    <p>规格：{it.goods.standard}</p>
                    <p>效期：{time}</p>
                    <p>价格：
                        <span className="acbigs colred">{it.goods.price}</span>
                        {/*<span className="acYuan">原价：150.00</span>*/}
                    </p>
                    <div className="acul2ConFot">
                        <div className="acul2ConFotLef">
                            <div className="acul2ConFotLefspan">
                                <span
                                    onClick={
                                        () => this.setDown(
                                            it.goods.min_buy,
                                            it.goods.min_buy_,
                                            it.goods.stock_num,
                                            it.goods_id,
                                            `traded_list`)}
                                >-</span>
                                <span
                                    onClick={
                                        () => this.setUp(
                                            it.goods.min_buy,
                                            it.goods.min_buy_,
                                            it.goods.stock_num,
                                            it.goods_id,
                                            `traded_list`)}
                                >+</span>
                            </div>
                            <Input
                                type="text"
                                value={it.goods.min_buy}
                                data={it.goods.min_buy_}
                                onChange={
                                    (value) => this.onChange2(value, it.goods_id, `traded_list`)
                                }
                                onBlur={
                                    (e) => this.onChange(e, it.goods.min_buy_, it.goods.stock_num, it.goods_id, `traded_list`)}
                            />
                        </div>
                        <div
                            className="acul2ConFotbut"
                            onClick={() => this.joinCar(it.goods.min_buy, it.goods_id)}
                        >
                            加入购物车
                        </div>
                    </div>
                </div>
            </li>
        }) : null;

        return <div>
            <img src={require('../../images/activitycollection/01.png')} alt="" className="acImg"/>
            <div className="acbox">
                <div className="acboxTit">
                    <img src={require('../../images/activitycollection/10.png')}/>
                </div>

                <ul className="acul">
                    {/*<li>*/}
                    {/*<div className="acBig">*/}
                    {/*<span>¥</span>*/}
                    {/*<p>30</p>*/}
                    {/*</div>*/}
                    {/*<div className='acP'>*/}
                    {/*<span className="acLei">文本文</span>*/}
                    {/*<span className="acYuan">文本文本文本文本文本</span>*/}
                    {/*</div>*/}
                    {/*<p className="acUse">文本文本文本文本文本</p>*/}
                    {/*<p className="acTime">121212212121212</p>*/}
                    {/*<button>立即领取</button>*/}
                    {/*</li>*/}
                    {coupon_list}
                </ul>
                <div className="acLink">
                    <Link to="/Lingqu">
                        <i className="ac_bg1"/>
                        <span>点击查看所有优惠券</span>
                    </Link>
                </div>
            </div>
            <div className="acbox">
                <img src={require('../../images/activitycollection/04.png')} className='acImg'/>
                <div className="acboxTit">
                    <img src={require('../../images/activitycollection/05.png')}/>
                </div>
                <ul className="acUl2">
                    {/*<li>*/}
                    {/*<img src={require('../../images/activitycollection/05.png')}/>*/}
                    {/*<div className="acUl2Titmoy">立省:15515</div>*/}
                    {/*<div className="acul2Con">*/}
                    {/*<p className="acul2ConTit">感冒灵颗粒感冒灵颗粒感冒灵颗粒</p>*/}
                    {/*<p>公司公司公司公司公司</p>*/}
                    {/*<p>规格：232</p>*/}
                    {/*<p>效期：12121212121</p>*/}
                    {/*<p>限购：<span className="colred">500he</span></p>*/}
                    {/*<p>价格：*/}
                    {/*<span className="acbigs colred">5000.00</span>*/}
                    {/*<span className="acYuan">原价：150.00</span>*/}
                    {/*</p>*/}
                    {/*<div className="acul2ConFot">*/}
                    {/*<div className="acul2ConFotLef">*/}
                    {/*<div className="acul2ConFotLefspan">*/}
                    {/*<span>-</span>*/}
                    {/*<span>+</span>*/}
                    {/*</div>*/}
                    {/*<input type="text"/>*/}
                    {/*</div>*/}
                    {/*<div className="acul2ConFotbut">*/}
                    {/*加入购物车*/}
                    {/*</div>*/}
                    {/*</div>*/}
                    {/*</div>*/}
                    {/*</li>*/}
                    {odds_activity}

                </ul>
                <div className="acLink">
                    <Link to="./youhuiyan">
                        <i className="ac_bg3"/>
                        <span>点击查看所有优惠券</span>
                    </Link>
                </div>
            </div>
            <div className="acbox acbox2">
                <div className="acboxTit">
                    <img src={require('../../images/activitycollection/06.png')}/>
                </div>
                <div className="acTishi">
                    <img src={require('../../images/activitycollection/07.png')}/>
                </div>
                <ul className="acUl2">
                    {/*<li>*/}
                    {/*<img src={require('../../images/activitycollection/05.png')}/>*/}
                    {/*<div className="acul2Con">*/}
                    {/*<p className="acul2ConTit">感冒灵颗粒感冒灵颗粒感冒灵颗粒</p>*/}
                    {/*<p>公司公司公司公司公司</p>*/}
                    {/*<p>规格：232</p>*/}
                    {/*<p className="colred">效期：12121212121</p>*/}
                    {/*<p>价格：*/}
                    {/*<span className="acbigs colred">5000.00</span>*/}
                    {/*<span className="acYuan">原价：150.00</span>*/}
                    {/*</p>*/}
                    {/*<div className="acul2ConFot">*/}
                    {/*<div className="acul2ConFotLef">*/}
                    {/*<div className="acul2ConFotLefspan">*/}
                    {/*<span>-</span>*/}
                    {/*<span>+</span>*/}
                    {/*</div>*/}
                    {/*<input type="text"/>*/}
                    {/*</div>*/}
                    {/*<div className="acul2ConFotbut">*/}
                    {/*加入购物车*/}
                    {/*</div>*/}
                    {/*</div>*/}
                    {/*</div>*/}
                    {/*</li>*/}
                    {period_activity}


                </ul>
                <div className="acLink">
                    <Link to="./youhuiyan">
                        <i className="ac_bg3"/>
                        <span>点击查看所有优惠券</span>
                    </Link>
                </div>
            </div>
            <div className="acbox acbox3">
                <div className="acboxTit">
                    <img src={require('../../images/activitycollection/09.png')}/>
                </div>
                <ul className="acUl2">
                    {/*<li>*/}
                    {/*<img src={require('../../images/activitycollection/05.png')}/>*/}
                    {/*<div className="acUl2Titmoy2">*/}
                    {/*<span>每次购买本品</span>*/}
                    {/*<span>+0.01文本文本文本文本文本文本文本文本</span>*/}
                    {/*//     </div>*/}
                    {/*//     <div className="acul2Con">*/}
                    {/*//         <p className="acul2ConTit">感冒灵颗粒感冒灵颗粒感冒灵颗粒</p>*/}
                    {/*//         <p>公司公司公司公司公司</p>*/}
                    {/*<p>规格：232</p>*/}
                    {/*<p>效期：12121212121</p>*/}
                    {/*<p>价格：*/}
                    {/*<span className="acbigs colred">5000.00</span>*/}
                    {/*<span className="acYuan">原价：150.00</span>*/}
                    {/*</p>*/}
                    {/*<div className="acul2ConFot">*/}
                    {/*//             <div className="acul2ConFotLef">*/}
                    {/*//                 <div className="acul2ConFotLefspan">*/}
                    {/*//                     <span>-</span>*/}
                    {/*//                     <span>+</span>*/}
                    {/*</div>*/}
                    {/*<input type="text"/>*/}
                    {/*</div>*/}
                    {/*<div className="acul2ConFotbut">*/}
                    {/*加入购物车*/}
                    {/*</div>*/}
                    {/*</div>*/}
                    {/*</div>*/}
                    {/*</li>*/}
                    {traded_list}
                </ul>
                <div className="acLink">
                    <Link to="./youhuiyan">
                        <i className="ac_bg3"/>
                        <span>点击查看所有优惠券</span>
                    </Link>
                </div>
            </div>
            <Buyok/>
        </div>
    }
}

export default Activitycollection;
