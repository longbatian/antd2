import React from 'react';
import $ from 'jquery';
import {Link,withRouter} from 'react-router-dom';
import {Input, message, Pagination} from 'antd';
import CoojiePage from './../../util/CoojiePage';
import InterfaceUtil from "../../util/InterfaceUtil";
import LoginPage from "../../util/LoginPage";
import {PubSub} from 'pubsub-js'
import Buyok from "./../../components/common/buycar_ok";


class Spikeactivity extends React.Component {
    constructor(props) {
        super(props);
        this.user_id = CoojiePage.getCoojie('user_id');
        this.token = CoojiePage.getCoojie('token');
        this.loginPage=new LoginPage();
        this.state = {
            goods_list: [],
            page: 1,
            nums: 1,
            activity_name: ``,
            isStart: false,
            imgs:null,
            // end_time:
        }
    }

    componentDidMount() {
        this.startAjax();
    }

    startAjax() {
        window.scrollTo(0, 0);
        const _this = this;
        let ids = InterfaceUtil.getHashParameters().id;
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
                        goods_list: datas.goods_list,
                        nums: datas.goods_count,
                        start_time: datas.start_time,
                        end_time: datas.end_time,
                        activity_name: datas.activity_name,
                        imgs:datas.image
                    })
                }else {
                    _this.loginPage.ajaxLogin(data.code,_this.props);
                }
            }
        })
    }

    suanshijian(start, end) {
        // const _this=this;
        var timesI=null;
        var start = start * 1000;
        var end = end * 1000;

        var timestamp = Date.parse(new Date());
        if (timestamp < start) {
            timesI= setInterval(function () {
                var countDownTime = '';
                var endTime = end;
                var nowTime = new Date();
                var t = start-nowTime.getTime();
                if(t===0) {
                    clearInterval(timesI);
                    return
                };
                var d = Math.floor(t / 1000 / 60 / 60 / 24);
                var hour = Math.floor(t / 1000 / 60 / 60 % 24);
                var min = Math.floor(t / 1000 / 60 % 60);
                var sec = Math.floor(t / 1000 % 60);
                d=Math.abs(d);
                hour=Math.abs(hour);
                min=Math.abs(min);
                sec=Math.abs(sec);
                if (d < 10) {
                    d = "0" + d;
                }
                if (hour < 10) {
                    hour = "0" + hour;
                }
                if (min < 10) {
                    min = "0" + min;
                }
                if (sec < 10) {
                    sec = "0" + sec;
                }
                // countDownTime =
                // $('.saTitRig').html(countDownTime)
                $('.saTitRigTimeSpan').eq(0).text(d)
                $('.saTitRigTimeSpan').eq(1).text(hour)
                $('.saTitRigTimeSpan').eq(2).text(min)
                $('.saTitRigTimeSpan').eq(3).text(sec)
            }, 1000);
            return <div className='saTitRigTime'>
                <span className="saTitRigSta">还有</span>
                <span className="saTitRigTimeSpan">  0</span>
                天
                <span className="saTitRigTimeSpan"> 0 </span>
                时
                <span className="saTitRigTimeSpan">0 </span>
                分
                <span className="saTitRigTimeSpan"> 0</span>
                秒  开始
            </div>;
        } else if (start < timestamp && timestamp < end) {
            timesI=setInterval(function () {
                var countDownTime = '';
                var endTime = end;
                var nowTime = new Date();
                var t = endTime - nowTime.getTime();
                if(t===0) {
                    clearInterval(timesI);
                    return
                };
                var d = Math.floor(t / 1000 / 60 / 60 / 24);
                var hour = Math.floor(t / 1000 / 60 / 60 % 24);
                var min = Math.floor(t / 1000 / 60 % 60);
                var sec = Math.floor(t / 1000 % 60);
                if (d < 10) {
                    d = "0" + d;
                }
                if (hour < 10) {
                    hour = "0" + hour;
                }
                if (min < 10) {
                    min = "0" + min;
                }
                if (sec < 10) {
                    sec = "0" + sec;
                }
                // countDownTime =
                // $('.saTitRig').html(countDownTime)
                $('.saTitRigTimeSpan').eq(0).text(d)
                $('.saTitRigTimeSpan').eq(1).text(hour)
                $('.saTitRigTimeSpan').eq(2).text(min)
                $('.saTitRigTimeSpan').eq(3).text(sec)
            }, 1000);
            return <div className='saTitRigTime'>
                <span className="saTitRigSta">仅剩</span>
                <span className="saTitRigTimeSpan">  0</span>
                天
                <span className="saTitRigTimeSpan"> 0 </span>
                时
                <span className="saTitRigTimeSpan">0 </span>
                分
                <span className="saTitRigTimeSpan"> 0</span>
                秒
            </div>
        } else {
            return '已结束'

        }

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

    render() {
        const data = this.state;
        let ntimes = null;
        let button = null;
        if (data.start_time) {
            ntimes = this.suanshijian(data.start_time, data.end_time, this);
        }

        let period_activity = data.goods_list.length > 0 ? data.goods_list.map((it, i) => {
            let time = InterfaceUtil.fmtDate(it.validity_time);
            var start = data.start_time * 1000;
            var end = data.end_time * 1000;
            var timestamp = Date.parse(new Date());
            if (timestamp < start) {
                button = <div
                    className="acul2ConFotbut"

                >
                    未开始
                </div>
            } else if (start < timestamp && timestamp < end) {
                button = <div
                    className="acul2ConFotbut"
                    onClick={() => this.joinCar(it.min_buy, it.id)}
                >
                    加入购物车
                </div>
            } else {
                button = <div
                    className="acul2ConFotbut"

                >
                    已结束
                </div>
            }
            let limits=it.activity_max_num===0?`不限购`:it.activity_max_num;
            let stock_num=it.stock_num>999?'充裕':it.stock_num;

            return <li key={it.id} className="skali">
                <Link to={'/Shangpinxiangqing?&id='+it.id}>
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
                                           it.id,
                                           `goods_list`)}
                               >-</span>
                                <span
                                    onClick={
                                        () => this.setUp(
                                            it.min_buy,
                                            it.min_buy_,
                                            it.stock_num,
                                            it.id,
                                            `goods_list`)}
                                >+</span>
                            </div>
                            <Input
                                type="text"
                                value={it.min_buy}
                                onChange={
                                    (value) => this.onChange2(value, it.id, `goods_list`)
                                }
                                onBlur={
                                    (e) => this.onChange(e, it.min_buy_, it.stock_num, it.id, `goods_list`)}
                            />
                        </div>
                        {button}
                    </div>
                </div>
            </li>
        }) : null;


        return <div className='saBoxs'>
            <img src={data.imgs} alt="" className="acImg"/>
            <div className="acbox acbox2">
                <div className="saTit">
                    <h2>{data.activity_name}</h2>
                    <div className="saTitRig">
                        {ntimes}
                        {/*{()=>this.suanshijian(data.data.start_time,data.data.end_time)}*/}
                        {/*<div className="saTitRigSta">活动未开始</div>*/}
                        {/*<div className="saTitRigTime">*/}
                        {/*<span className="saTitRigTimeSpan">02</span>*/}
                        {/*<span>天</span>*/}
                        {/*<span className="saTitRigTimeSpan">02</span>*/}
                        {/*<span>时</span>*/}
                        {/*<span className="saTitRigTimeSpan">02</span>*/}
                        {/*<span>秒</span>*/}
                        {/*</div>*/}
                    </div>
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

            </div>
            <div className="paginationboxs ">
                <Pagination showQuickJumper
                            defaultPageSize={20}
                            defaultCurrent={1} current={data.page} total={data.nums}
                            onChange={(e) => this.changesPage(e)}
                />
            </div>
            <Buyok/>
        </div>
    }
}

export default withRouter(Spikeactivity);
