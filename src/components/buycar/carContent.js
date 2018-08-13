import React from 'react';
import {Link, withRouter} from 'react-router-dom';
import {PubSub} from 'pubsub-js';
import InterfaceUtil from '../../util/InterfaceUtil';
import CoojiePage from '../../util/CoojiePage';
import LoginPage from '../../util/LoginPage';
import $ from 'jquery';

class Gouwuche2 extends React.Component {
    constructor(props) {
        super(props); //调用父类的构造方法；
        this.loginPage = new LoginPage();
        this.state = {
            sp: [],
            cons: '',
            minMoey: 0,
            maxMoney: 500,
            lujin: InterfaceUtil.getImgUrl(),
        }
    }


    //加
    jia3(e, unit, id, unitM) {
        let list = this.state.sp;
        let maxnum = 0;
        unitM = parseFloat(unitM);
        list.map((it, i) => {
            if (it.goods_id !== 0) {
                if (it.goods_id === id) {
                    maxnum = it.stock_num;
                }
            } else {
                if (it.id === id) {
                    maxnum = it.package_num
                }
            }

        });
        let b = parseInt(e);
        ;
        unit = unit ? unit : 1;
        unit = parseInt(unit);
        maxnum = parseInt(maxnum);
        let num = 0;
        if (b === maxnum) return;
        if (b + unit > maxnum) {
            num = maxnum
        } else {
            num = b + unit
        }
        this.setStateList(num, id, unitM);
    }

    onChange2(e, unit, id, unitM, th) {
        let num = th.target.value;
        let list = this.state.sp;
        list.map((it, i) => {
            if (it.goods_id !== 0) {
                if (it.goods_id === id) {
                    it.goods_num = num;
                }
            } else {
                if (it.id === id) {
                    it.goods_num = num;
                }
            }

        });
        this.setState({
            sp: list
        });

    }

    setStateList(num, id, unitM) {

        var token = CoojiePage.getCoojie('token');
        var user_id = CoojiePage.getCoojie('user_id');
        let datas = {
            "token": token,
            "user_id": user_id,
            goods_num: num
        }
        let list = this.state.sp;
        list.map((it, i) => {
            if (it.goods_id !== 0) {
                if (it.goods_id === id) {
                    it.goods_num = num;
                    datas[`goods_id`] = id;
                    if (num <= it.activity_max_num - it.activity_user_num || activity_max_num === 0) {
                        let price_counts = num * it.activity_price;
                        it.price_count = price_counts.toFixed(2);
                    } else {
                        let price_counts = num * it.price;
                        it.price_count = price_counts.toFixed(2);
                    }
                }
            } else {
                if (it.id === id) {
                    it.goods_num = num;
                    it.price_count = num * unitM;
                    datas[`goods_package_id`] = id;
                }
            }

        });
        const that = this;
        // 改变数据库中
        that.setState({
            sp: list
        }, () => {
            $.ajax({
                url: InterfaceUtil.getUrl(11),
                type: "post",
                data: InterfaceUtil.addTime(datas),
                dataType: "json",
                success: function (data) {
                    if (data.code === 1) {

                    } else {

                    }
                }
            });
            that.setAllmoney();
        });


    }

    showJieSuan(heji) {
        var minM = this.state.minMoey;
        // parseInt
        heji = parseInt(heji)
        if (heji >= minM) {
            $('.tishi_anniu1,.tishi_anniu').hide();
            $('.tishi_anniu').show();
        } else {
            $('.tishi_anniu1,.tishi_anniu').hide();
            $('.tishi_anniu1').show();
        }
    }

//减
    jian3(e, unit, id, unitM) {
        let list = this.state.sp;
        let maxnum = 0;
        unitM = parseFloat(unitM);
        list.map((it, i) => {
            if (it.goods_id !== 0) {
                if (it.goods_id === id) {
                    maxnum = it.stock_num;
                }
            } else {
                if (it.id === id) {
                    maxnum = it.package_num
                }
            }

        });
        let b = e;
        unit = unit ? unit : 1;
        unit = parseInt(unit);
        maxnum = parseInt(maxnum);
        let num = 0;
        if (b === unit) return;
        if (b - unit < unit) {
            num = unit
        } else {
            num = b - unit
        }
        this.setStateList(num, id, unitM);
    }

//输入框
    shuliangBuy(e, unit, id, unitM, th) {
        let list = this.state.sp;
        let maxnum = 0;
        unitM = parseFloat(unitM);
        list.map((it, i) => {
            if (it.goods_id !== 0) {
                if (it.goods_id === id) {
                    maxnum = it.stock_num;
                }
            } else {
                if (it.id === id) {
                    maxnum = it.package_num
                }
            }

        });
        let b = e;
        unit = unit ? unit : 1;
        unit = parseInt(unit);
        maxnum = parseInt(maxnum);
        let num = 0;
        if (isNaN(b) != false || b <= 0) {
            num = unit;
        } else {
            var as = parseInt(b % unit);
            if (as != 0) {
                b = b - as + unit;
                num = b;
            } else {
                num = b;
            }
        }
        if (b > maxnum) {
            num = maxnum
        } else if (b < unit) {
            num = unit
        }
        this.setStateList(num, id, unitM);
    }

//选择
    fuxuankuang(e, nowNum) {
        var a = e.target.checked;
        const minM = this.state.minMoey;
        var ziCheck = $(e.target).parents('.car_content').find('input[type=checkbox]');
        if (a == false) {
            ziCheck.prop('checked', false);
        } else if (a == true) {
            ziCheck.prop('checked', true);


        }

        this.setAllmoney();
    }

    fuxuankuang2(e, nowNum) {
        var a = e.target.checked;
        const minM = this.state.minMoey;
        var ziCheck = $(e.target).parents('.car_content').find('input[type=checkbox]');
        if (a == false) {

        } else if (a == true) {
            ziCheck.prop('checked', true);
        }
        this.setAllmoney();

    }

    /**
     *
     * 重新计算总价
     */
    setAllmoney() {
        let arr = $('.buycar_input1');
        let mon = [];
        arr.map((it, i) => {
            if ($(i).prop('checked')) {
                let num = parseFloat($(i).attr('money'));
                mon.push(num)
            }
        });
        let all = 0;
        mon.map((t, i) => {
            all += t;
        });
        all = all.toFixed(2);
        $('.car_Heji_div1_span').text("￥" + all);
        $('.shangpingshuliang').text("已选择" + $('.car_content input:checked').length + "件商品");
        this.showJieSuan(all)
    }

//收藏
    shoucang(e) {
        var a = e.target.parentNode.getAttribute('data');
        //ajax
        var username = CoojiePage.getCoojie('username');
        var token = CoojiePage.getCoojie('token');
        var user_id = CoojiePage.getCoojie('user_id');
        //搜索条件ajax
        $.ajax({
            url: InterfaceUtil.getUrl(5),
            type: "post",
            data: {
                "username": username, "token": token, "user_id": user_id, "sp_id": a
            },
            dataType: "json",
            success: function (data) {
                alert(data.info)
            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {

            }
        });
    }

//删除
    shanchu(e) {
        var a = e.target.parentNode.getAttribute('data-index');
        var username = CoojiePage.getCoojie('username');
        var token = CoojiePage.getCoojie('token');
        var user_id = CoojiePage.getCoojie('user_id');
        var jylx = CoojiePage.getCoojie('jylx');
        const that = this;
        //搜索条件ajax
        $.ajax({
            url: InterfaceUtil.getUrl(6),
            type: "post",
            data: InterfaceUtil.addTime({
                "user_id": user_id, "token": token, "cart_id": a
            }),
            dataType: "json",
            success: function (data) {

                alert(data.msg);
                that.removeBuyOrder(a);
                PubSub.publish('PubSubmessage');
                PubSub.publish('carTishiMoney');
            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {

            }
        });
    }

    /**
     * 删除state.sp中指定数组
     * @param e 数组中对应cid值
     */
    removeBuyOrder(e) {
        let arr = this.state.sp,
            arr1 = [];
        for (var i = 0, len = arr.length; i < len; i++) {
            if (arr[i].cart_id != e) {
                arr1.push(arr[i])
            }
        }
        this.setState({
            sp: arr1
        }, () => {
            this.setAllmoney();
            // this.catTishiMoney();
        })
    }

    componentDidMount() {
        var username = CoojiePage.getCoojie('username');
        var token = CoojiePage.getCoojie('token');
        var user_id = CoojiePage.getCoojie('user_id');
        const that = this;
        //全局配置
        $.ajax({
            url: InterfaceUtil.getUrl(1),
            type: "post",
            data: InterfaceUtil.addTime({
                "token": token, "user_id": user_id
            }),
            dataType: "json",
            success: function (data) {
                if (data.data[9].initial_amount) {
                    that.setState({
                        minMoey: data.data[9].initial_amount,
                        maxMoney: data.data[10].exempt_freight
                    })
                }
            }
        })
        //购物车数量
        $.ajax({
            url: InterfaceUtil.getUrl(7),
            type: "post",
            data: InterfaceUtil.addTime({
                "token": token, "user_id": user_id
            }),
            dataType: "json",
            success: function (data) {

                that.loginPage.ajaxLogin(data.status, that.props);
                if (data.data.length == 0) {

                } else {
                    if (!data.data) return;
                    that.setState({
                        sp: data.data,
                        // minMoey: data.data.list.free.lowest,
                        // maxMoney: data.data.list.free.myunfee
                    }, () => {
                        // that.catTishiMoney();
                        that.setAllmoney();


                    });
                }
            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {

            }
        });

    }

    catTishiMoney() {

    }

    render() {
        return (
            <div className='container'>
                {
                    this.state.sp.map(function (item, i) {
                        let times = item.validity_time ? InterfaceUtil.fmtDate(item.validity_time) : null;
                        let isAc = item.activity_price ? `是` : `否`;
                        let id = null;
                        let isAcClass = null;
                        let isAcHeadClass = `display`;
                        let isAcHeadText = null;
                        let arrs = [];
                        let headT = `特价套餐`;
                        let stock_nums = null;
                        if (item.mold === `goods`) {
                            id = item.goods_id;
                            if (item.activity_price) {

                                if (item.traded_goods.length < 1) {
                                    isAcClass = null;
                                    isAcHeadClass = `display`;
                                    isAcHeadText = null;
                                    arrs = [];
                                } else {
                                    isAcClass = `ccnactivity`;
                                    isAcHeadClass = `ccnRedemption`;
                                    isAcHeadText = `换购`;
                                    headT = `每次购买本品` +
                                        item.goods_num + item.unit +
                                        item.traded_goods[0].traded_price + `换购` +
                                        item.traded_goods[0].traded_goods_num +
                                        item.traded_goods[0].unit +
                                        item.traded_goods[0].name;
                                    arrs = item.traded_goods;
                                }
                            } else {
                                isAcClass = null;
                                isAcHeadClass = `display`;
                                isAcHeadText = null;
                                arrs = [];
                            }
                            stock_nums = item.stock_num;
                        } else {
                            isAcClass = `ccnactivity`;
                            isAcHeadClass = `ccnRedemption`;
                            isAcHeadText = `套餐`;
                            arrs = item.goods_list;
                            id = item.id;
                        }


                        let activity_price = item.activity_price ? <div className='car_title_div13 '>
                                <div className='car_title_div13_span text_del'>￥{item.price}</div>
                                <div className='car_title_div13_span1 red'>￥{item.activity_price}</div>
                            </div>
                            : <div className='car_title_div14'>
                                ￥{item.price}
                            </div>;
                        let activity_prices = item.activity_price ? item.activity_price : item.price;
                        arrs = arrs.length > 0 ? arrs.map((it, i) => {
                            let num = it.traded_goods_num ? it.traded_goods_num : it.min_buy;
                            let money = it.traded_price ? `￥` + it.traded_price : null;
                            let moneyClass = it.traded_price ? `car_title_div11_xiaoji` : null;
                            let checks = it.traded_price ? <input
                                defaultChecked={true}
                                type="checkbox"
                                data-index={it.traded_id}
                                className='buycar_input1 ccnChildInput'
                                money={it.traded_price}
                                onClick={(e) => {
                                    this.fuxuankuang2(e, it.traded_price)
                                }}
                            /> : <i className="ccn_bg2"/>
                            return <div className="ccnTradedBox" key={it.id}>
                                <div className="ccnTraded">
                                    <div className='car_title_div1 ' data={it.id}>
                                        {checks}
                                        {/*<div>*/}
                                        <img src={it.image}
                                             className='car_title_div1_img'/>
                                        {/*</div>*/}

                                    </div>
                                    <div className='car_title_div2 '>
                                        <Link to={`/Shangpinxiangqing?&id=` + it.id}>
                                            {it.name}
                                        </Link>
                                    </div>
                                    <div className='car_title_div3 '>
                                        {it.standard}
                                    </div>
                                    <div className='car_title_div4 '>
                                        {it.enterprise}
                                    </div>
                                    <div className='car_title_div5'>
                                        {it.unit}
                                    </div>
                                    <div className='car_title_div5'>
                                        {it.unit_num}
                                    </div>
                                    <div className='car_title_div6'>

                                    </div>
                                    <div className='car_title_div7 car_title_div7_kcs'>
                                        {it.stock_num}
                                    </div>
                                    <div className='car_title_div15'>

                                    </div>
                                    <div className='car_title_div14'>
                                        {money}
                                    </div>
                                    <div className='car_title_div10 '>
                                        {num}
                                    </div>
                                    <div className={'car_title_div11 ' + moneyClass}>
                                        {money}
                                    </div>
                                </div>
                            </div>
                        }) : null;
                        // console.log(item)
                        let maxnums=item.activity_max_num? <div
                            className='car_content_div orange '>
                            本品限购{item.activity_max_num}{item.unit}，
                            {item.activity_max_num}{item.unit}以内活动价￥{item.activity_price}出售，
                            {item.activity_max_num}{item.unit}以上按原价￥{item.price}出售
                            {/*， 活动结束时间：*/}
                            {/*{item.end_time}*/}
                        </div>:null;
                        return (
                            <div key={i} className={isAcClass}>
                                <div className={isAcHeadClass}>
                                    <div className="ccnRedemptionHead">
                                        <span className="ccm_Bg1">{isAcHeadText}</span>
                                        <span className="ccn_blu">{headT}</span>
                                    </div>
                                </div>
                                <div key={item.goods_id}
                                     className='contain car_content relative'
                                     data={item.is_check}
                                     data-index={item.goods_id}
                                     data-kcs={item.stock_num}>
                                    <div className='car_title_div1 ' data={item.goods_id}>
                                        <input
                                            type="checkbox"
                                            data={item.cart_id}
                                            defaultChecked={true}
                                            className='buycar_input1 ccnInput'
                                            money={item.price_count}
                                            onClick={(e) => {
                                                this.fuxuankuang(e, item.price_count)

                                            }}
                                        />
                                        {/*<div>*/}
                                        <img src={this.state.lujin + item.image} className='car_title_div1_img'/>
                                        {/*</div>*/}

                                    </div>
                                    <div className='car_title_div2 '>
                                        <Link to={`/Shangpinxiangqing?&id=` + item.id}>
                                            {item.name}
                                        </Link>

                                    </div>
                                    <div className='car_title_div3 '>
                                        {item.standard}
                                    </div>
                                    <div className='car_title_div4 '>
                                        {item.enterprise}
                                    </div>
                                    <div className='car_title_div5'>
                                        {item.unit}
                                    </div>
                                    <div className='car_title_div5'>
                                        {item.unit_num}
                                    </div>
                                    <div className='car_title_div6'>
                                        {times}
                                    </div>
                                    <div className='car_title_div7 car_title_div7_kcs'>
                                        {item.stock_num}
                                    </div>
                                    <div className='car_title_div15'>
                                        {isAc}
                                    </div>
                                    {activity_price}
                                    <div className='car_title_div10 carCon10' data={item.min_buy} data-index={item.id}
                                         data-a={item.stock_num}>
                                        <button className='car_title_div10_btn' onClick={(e) => {
                                            this.jian3(item.goods_num,
                                                item.min_buy_,
                                                id,
                                                activity_prices)
                                        }}>-
                                        </button>
                                        <input type="text"
                                               value={item.goods_num}
                                               className='car_title_div10_inp'
                                               onChange={(e) => this.onChange2(item.goods_num,
                                                   item.min_buy_,
                                                   id,
                                                   activity_prices,
                                                   e
                                               )}
                                               onBlur={(e) => {
                                                   this.shuliangBuy(item.goods_num,
                                                       item.min_buy_,
                                                       id,
                                                       activity_prices,
                                                       e)
                                               }}/>
                                        <button className='car_title_div10_btn' onClick={(e) => {
                                            this.jia3(item.goods_num,
                                                item.min_buy_,
                                                id,
                                                activity_prices
                                            )
                                        }}>+
                                        </button>
                                        <div className='clear'></div>
                                    </div>

                                    <div className='car_title_div11 car_title_div11_xiaoji'>
                                        ￥{item.price_count}
                                    </div>
                                    <div className='car_title_div12_con' data-index={item.cart_id} data={item.id}>
                                    <span className='car_title_div12_span' onClick={(e) => {
                                        this.shanchu(e)
                                    }}>删除</span>
                                        <span onClick={(e) => {
                                            this.shoucang(e)
                                        }}>添加收藏</span>
                                    </div>
                                    {maxnums}
                                    {arrs}

                                </div>
                            </div>

                        )
                    }, this)
                }

            </div>
        )
    }

}

export default withRouter(Gouwuche2);
