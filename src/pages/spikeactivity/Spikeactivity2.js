import React from 'react';
import $ from 'jquery';
import {Link, withRouter} from 'react-router-dom';
import {Input, message, Pagination} from 'antd';
import CoojiePage from './../../util/CoojiePage';
import InterfaceUtil from "../../util/InterfaceUtil";
import LoginPage from "../../util/LoginPage";
import {PubSub} from 'pubsub-js'
import Buyok from "./../../components/common/buycar_ok";


class Spikeactivity2 extends React.Component {
    constructor(props) {
        super(props);
        this.user_id = CoojiePage.getCoojie('user_id');
        this.token = CoojiePage.getCoojie('token');
        this.loginPage = new LoginPage();
        this.state = {
            goods_list: [],
            page: 1,
            nums: 1,
            activity_name: ``,
            isStart: false,
            imgs: null,
            arry: []
            // end_time:
        }
    }

    componentDidMount() {
        // if (/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
        //     window.location.href = InterfaceUtil.wapUrl() +
        //         "/wap/compents/generaldrugs.html?&id=" +
        //         InterfaceUtil.getHashParameters().id;
        // }
        this.startAjax();
    }

    startAjax() {
        window.scrollTo(0, 0);
        const _this = this;
        // let ids = InterfaceUtil.getHashParameters().id;
        let ids = _this.props.match.params.id;
        $.ajax({
            url: InterfaceUtil.getUrl(2),
            type: "post",
            data: InterfaceUtil.addTime({
                user_id: _this.user_id,
                token: _this.token,
                page: _this.state.page,
                pageSize: 20,
                group_id: ids

            }),
            dataType: "json",
            success: function (data) {
                if (data.code == 1) {
                    let datas = data.data;
                    _this.setState({
                        arry: datas,
                    })
                } else {
                    _this.loginPage.ajaxLogin(data.code, _this.props);
                }
            }
        })
    }

    suanshijian(start, end) {


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
        let b = parseInt(e);
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
    setUp(e, unit, maxnum, id) {
        let b = parseInt(e);

        unit = parseInt(unit)
        maxnum = parseInt(maxnum)
        let num = 0;
        if (b + unit > maxnum) {
            num = maxnum
        } else {
            num = b + unit
        }
        this.setStateList(num, id)
    }

    /**
     *改变数组中的数量
     *num数量，id对应id，list数组的名字
     */
    setStateList(num, id) {
        let list = this.state.arry;
        list.map((item) => {
            item.goods_list.map((it) => {
                if (it.goods_id) {
                    if (it.goods_id === id) {
                        it.goods.min_buy = num
                    }
                } else {
                    if (it.id === id) {
                        it.min_buy = num
                    }
                }
            })


        });
        // let arr = {};
        // arr[lists] = list;
        this.setState({
            arry: list
        });
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
                if (data.code === 1) {
                    message.success(data.msg)
                } else {
                    message.warning(data.msg)
                }
            }
        });
    }

    /**
     * 分页
     */
    changesPage(e) {

        this.setState({
            page: e
        }, () => this.startAjax())
    }

    componentWillReceiveProps() {
        window.location.reload();
    }
    onGoScoll(e){
        let X = $('.saTit').eq(e).offset().top;
        window.scrollTo(0,X)
    }
    render() {
        const data = this.state;
        let ntimes = null;
        let button = null;
        if (data.start_time) {
            ntimes = this.suanshijian(data.start_time, data.end_time, this);
        }
        var imgs = data.arry.length > 0 ? data.arry[0].image : null;
        let titles = data.arry.length > 0 ? data.arry.map((item, i) => {
            return <li onClick={()=>this.onGoScoll(i)}>
                {item.activity_name}
            </li>
            }):null;
        let boxs = data.arry.length > 0 ? data.arry.map((item, j) => {

            let period_activity = item.goods_list.length > 0 ?
                item.goods_list.map((it, i) => {
                    let time = InterfaceUtil.fmtDate(it.validity_time);

                    let limits = it.activity_max_num === 0 ? `不限购` : it.activity_max_num;
                    let stock_num = it.stock_num > 999 ? '充裕' : it.stock_num;

                    return <li key={it.id} className="skali">
                        <Link to={'/Shangpinxiangqing?&id=' + it.id}>
                            <img src={it.image}/>
                        </Link>

                        <div className="acul2Con">
                            <p className="acul2ConTit">{it.name}</p>
                            <p>{it.enterprise}</p>
                            <p>规格：{it.standard}</p>
                            <p className="colred">效期：{time}</p>
                            <p>限购：{limits}</p>
                            <p>库存：{stock_num}</p>
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
                                           it.stock_num,
                                           it.id)}
                               >-</span>
                                        <span
                                            onClick={
                                                () => this.setUp(
                                                    it.min_buy,
                                                    it.min_buy_,
                                                    it.stock_num,
                                                    it.id)}
                                        >+</span>
                                    </div>
                                    <Input
                                        type="text"
                                        value={it.min_buy}
                                        onChange={
                                            (value) => this.onChange2(value, it.id)
                                        }
                                        onBlur={
                                            (e) => this.onChange(e, it.min_buy_, it.stock_num, it.id)}
                                    />
                                </div>
                                {/*{button}*/}
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

            return <div>
                <img src={item.imgs} alt="" className="acImg"/>
                <div className="acbox acbox2">
                    <div className="saTit">
                        <h2>{item.activity_name}</h2>

                    </div>

                    <ul className="acUl2">

                        {period_activity}
                    </ul>

                </div>
            </div>
        }) : null;
        return <div className='saBoxs'>
            <img src={imgs} className='saBoxsimg1' alt=""/>
            {boxs}
            <div className="saboxrig">
                <ul>
                    {titles}
                </ul>
                <div
                    onClick={()=>InterfaceUtil.goTop()}
                >置顶</div>
            </div>
            <Buyok/>
        </div>
    }
}

export default withRouter(Spikeactivity2);
