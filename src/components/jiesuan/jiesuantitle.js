import React from 'react';
import $ from 'jquery';
import {Link, withRouter} from 'react-router-dom';
import InterfaceUtil from '../../util/InterfaceUtil';
import CoojiePage from '../../util/CoojiePage';


class Jiesuan extends React.Component {
    constructor(props) {
        super(props); //调用父类的构造方法；
        this.state = {
            shxx: '',
            huodong: '',
            feiyong: '',
            coupon: [],
            sp: [],
            cons: '',
            more: false,
            lujin: InterfaceUtil.getImgUrl(),
            isFavorite: false,
        }
    }

    wanzheng(e) {
        if (this.state.more == false) {

            var username = CoojiePage.getCoojie('username');
            var token = CoojiePage.getCoojie('token');
            var member_id = CoojiePage.getCoojie('user_id');
            var user_type = CoojiePage.getCoojie('user_type');
            var jylx = CoojiePage.getCoojie('jylx');
            var cid = CoojiePage.getCoojie('cid');
            const that = this;
            //  广告位
            $.ajax({
                url: InterfaceUtil.getUrl(29),
                type: "post",
                data: {
                    "user_type": user_type, "member_id": member_id, "username": username,
                    "token": token, "jylx": jylx, "cid": cid, "page": 1, "limit": that.state.cons
                },
                dataType: "json",
                success: function (data) {
                    if (data.data.length == 0) {

                    } else {
                        that.setState({
                            sp: data.data.list,
                            more: true,
                        });
                        // if(data.data.list.length<11){
                        //   var a =document.getElementsByClassName('jiesuan_div_div3_div');
                        //   a[0].className='jiesuan_div_div3_div display'
                        // }
                    }
                },
                error: function (XMLHttpRequest, textStatus, errorThrown) {
                    // 状态码
                    console.log(XMLHttpRequest.status);
                    // 状态
                    console.log(XMLHttpRequest.readyState);
                    // 错误信息
                    console.log(textStatus);
                }
            });
            // er_id="+member_id+"&username="+username+"&token="+token+"&jylx="+jylx+"&cid="+cid+"&page=1"+"&limit="+this.state.cons);
            $('.jiesuan_div_div3_div').text('收起清单')
            $('.jiesuan_div_div3_divImg')[0].src = '../../images/buycar/showOrderup.png';
        }
        else {

            var username = CoojiePage.getCoojie('username');
            var token = CoojiePage.getCoojie('token');
            var member_id = CoojiePage.getCoojie('user_id');
            var user_type = CoojiePage.getCoojie('user_type');
            var jylx = CoojiePage.getCoojie('jylx');
            var cid = CoojiePage.getCoojie('cid');
            const that = this;
            //  广告位
            $.ajax({
                url: InterfaceUtil.getUrl(29),
                type: "post",
                data: {
                    "user_type": user_type, "member_id": member_id, "username": username, "token":
                    token, "jylx": jylx, "cid": cid, "page": 1, "limit": 10
                },
                dataType: "json",
                success: function (data) {
                    if (data.data.length == 0) {

                    } else {
                        that.setState({
                            shxx: data.data.address_data,
                            huodong: data.data.activity,
                            feiyong: data.data.goos_price_info,
                            coupon: data.data.coupon,
                            sp: data.data.list,
                            more: false,
                        });
                        // if(data.data.list.length<11){
                        //   var a =document.getElementsByClassName('jiesuan_div_div3_div');
                        //   a[0].className='jiesuan_div_div3_div display'
                        // }
                    }
                },
                error: function (XMLHttpRequest, textStatus, errorThrown) {
                    // 状态码
                    console.log(XMLHttpRequest.status);
                    // 状态
                    console.log(XMLHttpRequest.readyState);
                    // 错误信息
                    console.log(textStatus);
                }
            });
            // ajax.open('post',"http://192.168.1.49/index.php/index/Order/orderdetail",false);
            // ajax.open('post',InterfaceUtil.getUrl(29),false);
            // ajax.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
            // ajax.onreadystatechange = function() {
            //   if (ajax.readyState == 4 && ajax.status == 200 || ajax.status == 304) { // readyState == 4说明请求已完成
            //     var data=ajax.responseText;
            //     data=JSON.parse(data);
            //     console.log(data);

            //   }
            // };
            // // ajax.send();
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
                var zongjia = this.state.feiyong.goos_price_count;
                youhui = parseFloat(youhui);
                zongjia = parseFloat(zongjia);
                var shifu = zongjia - youhui;
                $('.jiesuan_shifu').text('￥' + shifu);
            }
        }
    }


    componentDidMount() {

        var username = CoojiePage.getCoojie('username');
        var token = CoojiePage.getCoojie('token');
        var member_id = CoojiePage.getCoojie('user_id');
        var user_type = CoojiePage.getCoojie('user_type');
        var jylx = CoojiePage.getCoojie('jylx');
        var cid = CoojiePage.getCoojie('cid');
        const that = this;
        //  广告位
        $.ajax({
            url: InterfaceUtil.getUrl(29),
            type: "post",
            data: {
                "user_type": user_type, "member_id": member_id, "username": username, "token":
                token, "jylx": jylx, "cid": cid, "page": 1, "limit": 10
            },
            dataType: "json",
            success: function (data) {
                if (data.data.length == 0) {

                } else {
                    if (data.status !== 1) {
                        alert(data.info);
                        that.props.history.push('/Buycar');
                        return;
                    }
                    that.setState({
                        shxx: data.data.address_data,
                        huodong: data.data.activity,
                        feiyong: data.data.goos_price_info,
                        coupon: data.data.coupon,
                        sp: data.data.list,
                        cons: data.data.cont,
                    });
                    if (data.data.cont < 11) {
                        var a = document.getElementsByClassName('jiesuan_div_div3_div');
                        a[0].className = 'jiesuan_div_div3_div display'
                    }
                }
            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                // 状态码
                console.log(XMLHttpRequest.status);
                // 状态
                console.log(XMLHttpRequest.readyState);
                // 错误信息
                console.log(textStatus);
            }
        });
        // ajax.open('post',"http://192.168.1.49/index.php/index/Order/orderdetail",false);
        // ajax.open('post',InterfaceUtil.getUrl(29),false);
        // ajax.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
        // ajax.onreadystatechange = function() {
        //   if (ajax.readyState == 4 && ajax.status == 200 || ajax.status == 304) { // readyState == 4说明请求已完成
        //     var data=ajax.responseText;
        //     data=JSON.parse(data);
        //     console.log(data);

        //   }
        // };
        // ajax.send();
    }

    render() {
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
                            return (
                                <div className='jiesuan_div_div2'>
                                    <div className='jiesuan_div_div1_div'><img src={this.state.lujin + item.image}
                                                                               className='jiesuan_div_div1_div_img'
                                                                               alt=""/></div>
                                    <div className='jiesuan_div_div1_div1 hid'>{item.title}</div>
                                    <div className='jiesuan_div_div1_div2 hid'>{item.sku}</div>
                                    <div className='jiesuan_div_div1_div3 hid'>{item.scqy}</div>
                                    <div className='jiesuan_div_div1_div4'>{item.bzdw}</div>
                                    <div className='jiesuan_div_div1_div5'>{item.vstime}</div>
                                    <div className='jiesuan_div_div1_div6'>{item.prices}</div>
                                    <div className='jiesuan_div_div1_div7'>{item.spsl}</div>
                                    <div className='jiesuan_div_div1_div8'>{item.hj}</div>
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
                            className='red'>￥{this.state.feiyong.goos_price_count}</span></div>
                    </div>
                    {/*收货信息*/}
                    <div className='jiesuan_div_div4'>
                        <div className='jiesuan_div_div4_div'>收货信息</div>
                        <div className='marginTop5'>
            <span className='jiesuan_div_div4_div_span floatleft relative'>
              {this.state.shxx.shr}
                <img src={require("../../images/buycar/gou.png")} className='jiesuan_div_div4_div_span_img' alt=""/>
            </span>
                            <span className='floatleft marginLeft10 jiesuan_div_div4_div_span1'>
              {this.state.shxx.shr}
            </span>
                            <span className='floatleft marginLeft10 jiesuan_div_div4_div_span1'>
            {this.state.shxx.shdz}
            </span>
                            <span className='floatleft marginLeft10 jiesuan_div_div4_div_span1'>
             {this.state.shxx.lxdh}
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
                            实际运费：<span className='red marginRight20'>￥{this.state.feiyong.yunfee}</span>订单满<span
                            className='red'>{this.state.feiyong.myunfee}</span>元 <span
                            className='marginLeft10'>免运费</span>
                        </div>
                        <div className='clear'></div>
                    </div>
                    {/*参加活动*/}
                    <div className='jiesuan_div_div4 jiesuan_padding'>
                        <div className='jiesuan_div_div4_div'>参加活动</div>
                        <div className='marginTop10 marginLeft20'>{this.state.huodong}</div>
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
                            <select className='jiesuan_sel' onChange={(e) => {
                                this.youhuiquan(e)
                            }}>
                                {
                                    this.state.coupon.map(function (item, i) {
                                        return (
                                            <option
                                                key={item.id + "coupon"}
                                                value={item.id} data={item.yhje}
                                                className='jiesuan_sel_opt'>{item.title}</option>
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
            </div>
        )
    }

    componentDidUpdate() {

    }
}

export default withRouter(Jiesuan);
