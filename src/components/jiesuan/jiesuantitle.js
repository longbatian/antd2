import React from 'react';
import $ from 'jquery';
import {Link, withRouter} from 'react-router-dom';
import InterfaceUtil from '../../util/InterfaceUtil';
import CoojiePage from '../../util/CoojiePage';
import Jiesuan1 from './sousuo'

class Jiesuan extends React.Component {
    constructor(props) {
        super(props); //调用父类的构造方法；
        this.state = {
            shxx: '',
            huodong: '',
            feiyong: '',
            coupon: [],
            sp: [],
            yunf: 500,
            cons: '',
            freight_price: 0,
            more: false,
            lujin: InterfaceUtil.getImgUrl(),
            isFavorite: false,
        }
    }

    wanzheng(e) {
        if (this.state.more === false) {
            this.setState({
                more: true,
            });
            $('.jiesuan_div_div3_div').text('收起清单')
            $('.jiesuan_div_div3_divImg')[0].src = '../../images/buycar/showOrderup.png';
        }
        else {

            this.setState({
                more: false,
            });
            $('.jiesuan_div_div3_div').text('查看完整清单');
            $('.jiesuan_div_div3_divImg')[0].src = '../../images/buycar/showOrdersDown.png';
        }
    }

    //优惠券
    youhuiquan(e) {
        var a = document.getElementsByClassName('jiesuan_sel');
        var b = a[0].value;
        var c = $('.jiesuan_sel_opt');
        for (var i = 0; i < c.length; i++) {
            var d = c.eq(i).attr('value');
            if (b == d) {
                var youhui = c.eq(i).attr('data');
                $('.jiesuan_youhui').text('优惠金额：￥' + youhui);
                var zongjia = this.state.feiyong;
                youhui = parseFloat(youhui);
                zongjia = parseFloat(zongjia);
                var shifu = zongjia - youhui;
                shifu=shifu.toFixed(2)
                $('.jiesuan_shifu').text('￥' + shifu);
            }
        }
    }


    componentDidMount() {
        var token = CoojiePage.getCoojie('token');
        var user_id = CoojiePage.getCoojie('user_id');
        var cart_id = CoojiePage.getCoojie('cart_id');
        var coupon_id = CoojiePage.getCoojie('coupon_id');
        let traded_goods_id = CoojiePage.getCoojie('traded_goods_id');
        const that = this;
        //全局
        $.ajax({
            url: InterfaceUtil.getUrl(1),
            type: "post",
            data: InterfaceUtil.addTime({}),
            dataType: "json",
            success: function (data) {
                that.setState({
                    yunf: data.data[10].exempt_freight
                });
            }
        });
        let datas = {};
        if (cart_id) {
            datas = {
                "user_id": user_id,
                "token": token,
                "cart_id": cart_id,
                traded_id: traded_goods_id

            }
        } else {
            datas = {"user_id": user_id, "token": token, "coupon_id": coupon_id}
        }
        $.ajax({
            url: InterfaceUtil.getUrl(29),
            type: "post",
            data: InterfaceUtil.addTime(datas),
            dataType: "json",
            success: function (data) {
                if (data.code !== 1) {
                    alert(data.msg);
                    that.props.history.push('/Buycar');
                    return;
                }
                that.setState({
                    shxx: data.data.user_address,
                    // huodong: data.data.activity,
                    feiyong: data.data.price,
                    freight_price: data.data.freight_price,
                    coupon: data.data.coupon_list,
                    sp: data.data.goods_list,
                }, () => {
                    that.youhuiquan()
                });
                if (data.data.goods_list.length < 11) {
                    var a = document.getElementsByClassName('jiesuan_div_div3_div');
                    a[0].className = 'jiesuan_div_div3_div display'
                }
            }
        });

    }

    render() {
        const data = this.state;
        const datas = this.props;
        return (
            <div className='container'>
                {/*进度条*/}
                <div className='contain marginTop20'>
                    <img src={require("../../images/buycar/buzhou2.png")} alt="" className='floatRight'/>
                    <div className='clear'></div>
                </div>
                {/*商品清单*/}
                <div className='jiesuan_div contain'>
                    <div className='jiesuan_div_div'>
                        <div className='floatleft jiesuan_div_div_div1'>采购清单</div>
                        <Link to="/Buycar">
                            <div className='floatRight jiesuan_div_div_div2'>返回修改购物车</div>
                        </Link>
                        <div className='clear'></div>
                    </div>
                    {/*清单标题*/}
                    <div className='jiesuan_div_div1'>
                        <div className='jiesuan_div_div1_div'>商品</div>
                        <div className='jiesuan_div_div1_div1'>名称</div>
                        <div className='jiesuan_div_div1_div2'>规格</div>
                        <div className='jiesuan_div_div1_div3'>厂家</div>
                        <div className='jiesuan_div_div1_div4'>单位</div>
                        <div className='jiesuan_div_div1_div5'>效期</div>
                        <div className='jiesuan_div_div1_div6'>会员价</div>
                        <div className='jiesuan_div_div1_div7'>数量</div>
                        <div className='jiesuan_div_div1_div8'>小计</div>
                        <div className='clear'></div>
                    </div>
                    {/*清单列表*/}
                    {
                        this.state.sp.map(function (item, i) {
                            let activity_price = item.activity_price ? item.activity_price : item.price;

                            return (
                                <div key={item.id + `sp` + i} className='jiesuan_div_div2'>
                                    <div className='jiesuan_div_div1_div'><img src={this.state.lujin + item.image}
                                                                               className='jiesuan_div_div1_div_img'
                                                                               alt=""/></div>
                                    <div className='jiesuan_div_div1_div1 hid'>{item.name}</div>
                                    <div className='jiesuan_div_div1_div2 hid'>{item.standard}</div>
                                    <div className='jiesuan_div_div1_div3 hid'>{item.enterprise}</div>
                                    <div className='jiesuan_div_div1_div4'>{item.unit}</div>
                                    <div className='jiesuan_div_div1_div5'>{item.validity_time}</div>
                                    <div className='jiesuan_div_div1_div6'>{activity_price}</div>
                                    <div className='jiesuan_div_div1_div7'>{item.goods_num}</div>
                                    <div className='jiesuan_div_div1_div8'>{item.price_count}</div>
                                </div>
                            )
                        }, this)
                    }
                    {/*查看更多*/}
                    <div className='jiesuan_div_div3'>
                        <div className='jiesuan_div_div3_divBox' onClick={(e) => {
                            this.wanzheng(e)
                        }}>
                            <div className='jiesuan_div_div3_div'>查看完整清单</div>
                            <img className='jiesuan_div_div3_divImg'
                                 src={require('../../images/buycar/showOrdersDown.png')}/>
                        </div>
                        <div className='jiesuan_div_div3_div1'>商品总价：<span
                            className='red'>￥{data.feiyong}</span></div>
                    </div>
                    {/*收货信息*/}
                    <div className='jiesuan_div_div4'>
                        <div className='jiesuan_div_div4_div'>收货信息</div>
                        <div className='marginTop5'>
            <span className='jiesuan_div_div4_div_span floatleft relative'>
              {data.shxx.name}
                <img src={require("../../images/buycar/gou.png")} className='jiesuan_div_div4_div_span_img' alt=""/>
            </span>
                            <span className='floatleft marginLeft10 jiesuan_div_div4_div_span1'>
              {data.shxx.name}
            </span>
                            <span className='floatleft marginLeft10 jiesuan_div_div4_div_span1'>
            {data.shxx.address}
            </span>
                            <span className='floatleft marginLeft10 jiesuan_div_div4_div_span1'>
             电话 {data.shxx.tel} 邮编 {data.shxx.post_code}
            </span>
                            <span className='jiesuan_div_div4_div_span2'>
              默认地址
            </span>
                            <span className='clear'></span>
                        </div>
                        <div className='red marginLeft20 marginTop20 marginBottom20'>
                            收货信息与配送方式填写后只能让客服修改，所有货物请在送货员在场时开箱验货再签收，如有破损请及时联系客服人员，如未当面开箱验货，破损不予赔付，自行承担。
                        </div>
                        <div className='clear'></div>
                    </div>
                    {/*商品运费*/}
                    <div className='jiesuan_div_div4'>
                        <div className='jiesuan_div_div4_div'>商品运费</div>
                        <div className='marginLeft20 marginTop20 marginBottom20'>
                            实际运费：<span className='red marginRight20'>￥{data.freight_price}</span>订单满<span
                            className='red'>{data.yunf}</span>元 <span
                            className='marginLeft10'>免运费</span>
                        </div>
                        <div className='clear'></div>
                    </div>
                    {/*参加活动*/}
                    <div className='jiesuan_div_div4 jiesuan_padding'>
                        <div className='jiesuan_div_div4_div'>参加活动</div>
                        <div className='marginTop10 marginLeft20'>{data.huodong}</div>
                        <div className='clear'></div>
                    </div>
                    {/*订单备注*/}
                    <div className='jiesuan_div_div4'>
                        <div className='jiesuan_div_div4_div'>订单备注</div>
                        <div><input type="text" className='jiesuan_div_div4_inp marginTop20 marginLeft20 marginBottom20'
                                    placeholder='若有特殊要求请填写'/></div>
                        <div className='clear'></div>
                    </div>
                    {/*使用优惠券*/}
                    <div className='jiesuan_div_div4'>
                        <div className='jiesuan_div_div4_div'>使用优惠券</div>
                        <div className='marginBottom20 marginTop20 marginLeft20'>
                            <select
                                className='jiesuan_sel'
                                onChange={(e) => {
                                    this.youhuiquan(e)
                                }}>

                                <option
                                    value='0'
                                    data="0"
                                    className='jiesuan_sel_opt'>无
                                </option>
                                {
                                    data.coupon.map(function (item, i) {
                                        let sele = i === 0 ? true : false;
                                        return (
                                            <option
                                                selected={sele}
                                                key={item.user_coupon_id + "coupon"}
                                                value={item.user_coupon_id}
                                                data={item.coupon_price}
                                                className='jiesuan_sel_opt'>{item.name}</option>
                                        )
                                    }, this)
                                }

                            </select>
                            <span className='red marginLeft20'>单个优惠券一次性使用不找零</span>
                        </div>
                        <div className='clear'/>
                    </div>
                    <div className='clear'/>
                </div>
                <Jiesuan1 {...data}/>
            </div>
        )
    }
}

export default withRouter(Jiesuan);
