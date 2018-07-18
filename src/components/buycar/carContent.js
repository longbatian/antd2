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
    jia3(e) {
        var a = e.target.parentNode.getAttribute('data');
        var kucun = e.target.parentNode.getAttribute('data-a');
        a = parseInt(a);
        var b = e.target.parentNode.children[1].getAttribute('value');
        b = parseInt(b);
        var minM = this.state.minMoey;
        var c = b + a;
        if (c > kucun) {
            alert('库存数量不足');
            e.target.parentNode.children[1].value = kucun;
        } else {
            e.target.parentNode.children[1].setAttribute('value', c);
            e.target.parentNode.children[1].value = c;

            var heji = e.target.parentNode;
            heji = heji.nextSibling;
            var id = e.target.parentNode.getAttribute('data-index');
            id = parseInt(id);

            var username = CoojiePage.getCoojie('username');
            var token = CoojiePage.getCoojie('token');
            var user_id = CoojiePage.getCoojie('user_id');
            var jylx = CoojiePage.getCoojie('jylx');
            const that = this;
            //  广告位
            $.ajax({
                url: InterfaceUtil.getUrl(4),
                type: "post",
                data: {
                    "username": username, "token": token, "member_id": user_id, "jylx": jylx, "spsl": c, "goods_id": id
                },
                dataType: "json",
                success: function (data) {
                    heji.innerText = '￥' + data.data.hj;
                    //  是否选中
                    var check = document.getElementsByClassName('car_content');
                    var inp = document.getElementsByClassName('buycar_input1');
                    var heji1 = document.getElementsByClassName('car_title_div11_xiaoji');
                    var zongjia1 = document.getElementsByClassName('car_Heji_div1_span');
                    var zongjia = 0;
                    for (var i = 0; i < check.length; i++) {
                        var xuanzhong = inp[i].getAttribute('checked');

                        if (xuanzhong == 'true') {
                            // console.log(xuanzhong)
                            // inp[i].setAttribute('checked',true);
                            var xiaoji = heji1[i].innerText;

                            xiaoji = xiaoji.slice(1);
                            xiaoji = parseFloat(xiaoji);
                            zongjia = parseFloat(zongjia);
                            zongjia = zongjia + xiaoji;
                            zongjia = zongjia.toFixed(2);
                            zongjia1[0].innerText = "￥" + zongjia;
                            //判断去结算
                            var a = document.getElementsByClassName('car_Heji_div1_span');
                            var b = a[0].innerText;
                            b = b.slice(1);
                            b = parseFloat(b);
                            if (b < minM) {
                                var c = document.getElementsByClassName('tishi_anniu');
                                var d = document.getElementsByClassName('tishi_anniu1');
                                var e = document.getElementsByClassName('tishi_jiage');
                                var f = minM - b;
                                f = f.toFixed(2);
                                e[0].innerText = '￥' + f;
                            } else {
                                var c = document.getElementsByClassName('tishi_anniu');
                                var d = document.getElementsByClassName('tishi_anniu1');
                            }
                            that.showJieSuan(b)
                        } else {

                        }
                    }
                }
            });


        }

    }

    showJieSuan(heji) {
        var minM = this.state.minMoey;
        if (heji >= minM) {
            $('.tishi_anniu1,.tishi_anniu').hide();
            $('.tishi_anniu').show();
        } else {
            $('.tishi_anniu1,.tishi_anniu').hide();
            $('.tishi_anniu1').show();
        }
    }

    //减
    jian3(e) {
        var a = e.target.parentNode.getAttribute('data');
        a = parseInt(a);
        var b = e.target.parentNode.children[1].getAttribute('value');
        var kucun = e.target.parentNode.getAttribute('data-a');
        a = parseInt(a);
        b = parseInt(b);
        var c = b - a;
        if (c < kucun) {
            if (c < 1) {
                e.target.parentNode.children[1].setAttribute('value', b);
                e.target.parentNode.children[1].value = b;

            } else {
                e.target.parentNode.children[1].setAttribute('value', c);
                e.target.parentNode.children[1].value = c;


                var heji = e.target.parentNode;
                heji = heji.nextSibling;
                var id = e.target.parentNode.getAttribute('data-index');
                id = parseInt(id);
                var username = CoojiePage.getCoojie('username');
                var token = CoojiePage.getCoojie('token');
                var user_id = CoojiePage.getCoojie('user_id');
                var jylx = CoojiePage.getCoojie('jylx');
                const that = this;
                const minM = this.state.minMoey;
                //  广告位
                $.ajax({
                    url: InterfaceUtil.getUrl(4),
                    type: "post",
                    data: {
                        "username": username,
                        "token": token,
                        "member_id": user_id,
                        "jylx": jylx,
                        "spsl": c,
                        "goods_id": id
                    },
                    dataType: "json",
                    success: function (data) {
                        heji.innerText = '￥' + data.data.hj;
                        //  是否选中
                        var check = document.getElementsByClassName('car_content');
                        var inp = document.getElementsByClassName('buycar_input1');
                        var heji1 = document.getElementsByClassName('car_title_div11_xiaoji');
                        var zongjia1 = document.getElementsByClassName('car_Heji_div1_span');
                        var zongjia = 0;
                        for (var i = 0; i < check.length; i++) {
                            var xuanzhong = inp[i].getAttribute('checked');
                            if (xuanzhong == 'true') {
                                // inp[i].setAttribute('checked',true);
                                var xiaoji = heji1[i].innerText;

                                xiaoji = xiaoji.slice(1);
                                xiaoji = parseFloat(xiaoji);
                                zongjia = parseFloat(zongjia);
                                zongjia = zongjia + xiaoji;
                                zongjia = zongjia.toFixed(2);
                                zongjia1[0].innerText = "￥" + zongjia;

                                //判断去结算
                                var a = document.getElementsByClassName('car_Heji_div1_span');
                                var b = a[0].innerText;
                                b = b.slice(1);
                                b = parseFloat(b);
                                if (b < minM) {
                                    var c = document.getElementsByClassName('tishi_anniu');
                                    var d = document.getElementsByClassName('tishi_anniu1');
                                    var e = document.getElementsByClassName('tishi_jiage');

                                    var f = minM - b;
                                    f = f.toFixed(2);
                                    e[0].innerText = '￥' + f;
                                } else {
                                    var c = document.getElementsByClassName('tishi_anniu');
                                    var d = document.getElementsByClassName('tishi_anniu1');
                                }
                                that.showJieSuan(b);
                            } else {

                            }
                        }
                    }
                });

            }
        }


    }

    //输入框
    shuliangBuy(e) {
        let a = e.target;
        let b = a.value;
        let moren = e.target.parentNode.getAttribute('data');
        let kucun = e.target.parentNode.getAttribute('data-a');
        moren = parseInt(moren);
        kucun = parseInt(kucun);
        let heji = e.target.parentNode;
        heji = heji.nextSibling;
        let id = e.target.parentNode.getAttribute('data-index');
        id = parseInt(id);
        const minM = this.state.minMoey;
        if (isNaN(b) !== false || b < 0) {
            a.value = moren;
        } else {
            if (b > kucun) {
                alert('库存数量不足');
                a.value = kucun;
            } else {
                var as = parseInt(b % moren);
                if (as !== 0) {
                    b = b - as + moren;
                    a.setAttribute('value', b);
                    a.value = b;


                    let username = CoojiePage.getCoojie('username');
                    let token = CoojiePage.getCoojie('token');
                    let user_id = CoojiePage.getCoojie('user_id');
                    let jylx = CoojiePage.getCoojie('jylx');
                    const that = this;
                    //  广告位
                    $.ajax({
                        url: InterfaceUtil.getUrl(4),
                        type: "post",
                        data: {
                            "username": username,
                            "token": token,
                            "member_id": user_id,
                            "jylx": jylx,
                            "spsl": b,
                            "goods_id": id
                        },
                        dataType: "json",
                        success: function (data) {
                            heji.innerText = '￥' + data.data.hj;

                            //  是否选中
                            let check = document.getElementsByClassName('car_content');
                            let inp = document.getElementsByClassName('buycar_input1');
                            let heji1 = document.getElementsByClassName('car_title_div11_xiaoji');
                            let zongjia1 = document.getElementsByClassName('car_Heji_div1_span');
                            let zongjia = 0;
                            for (let i = 0; i < check.length; i++) {
                                let xuanzhong = check[i].getAttribute('data');
                                if (xuanzhong == '1') {
                                    inp[i].setAttribute('checked', true);
                                    var xiaoji = heji1[i].innerText;

                                    xiaoji = xiaoji.slice(1);
                                    xiaoji = parseFloat(xiaoji);
                                    zongjia = parseFloat(zongjia);
                                    zongjia = zongjia + xiaoji;
                                    zongjia = zongjia.toFixed(2);
                                    zongjia1[0].innerText = "￥" + zongjia;

                                    //判断去结算
                                    let a = document.getElementsByClassName('car_Heji_div1_span');
                                    let b = a[0].innerText;
                                    b = b.slice(1);
                                    b = parseFloat(b);
                                    if (b < minM) {
                                        let c = document.getElementsByClassName('tishi_anniu');
                                        let d = document.getElementsByClassName('tishi_anniu1');
                                        let e = document.getElementsByClassName('tishi_jiage');

                                        let f = minM - b;
                                        f = f.toFixed(2);
                                        e[0].innerText = '￥' + f;
                                    } else {
                                        let c = document.getElementsByClassName('tishi_anniu');
                                        let d = document.getElementsByClassName('tishi_anniu1');

                                    }
                                    that.showJieSuan(b)
                                } else {

                                }
                            }
                        }
                    });

                }
                else {
                    a.setAttribute('value', b);
                    a.value = b;

                    let username = CoojiePage.getCoojie('username');
                    let token = CoojiePage.getCoojie('token');
                    let user_id = CoojiePage.getCoojie('user_id');
                    let jylx = CoojiePage.getCoojie('jylx');
                    const that = this;
                    //  广告位
                    $.ajax({
                        url: InterfaceUtil.getUrl(4),
                        type: "post",
                        data: {
                            "username": username,
                            "token": token,
                            "member_id": user_id,
                            "jylx": jylx,
                            "spsl": b,
                            "goods_id": id
                        },
                        dataType: "json",
                        success: function (data) {
                            heji.innerText = '￥' + data.data.hj;

                            //  是否选中
                            let check = document.getElementsByClassName('car_content');
                            let inp = document.getElementsByClassName('buycar_input1');
                            let heji1 = document.getElementsByClassName('car_title_div11_xiaoji');
                            let zongjia1 = document.getElementsByClassName('car_Heji_div1_span');
                            let zongjia = 0;
                            for (let i = 0; i < check.length; i++) {
                                let xuanzhong = check[i].getAttribute('data');
                                if (xuanzhong == '1') {
                                    inp[i].setAttribute('checked', true);
                                    var xiaoji = heji1[i].innerText;

                                    xiaoji = xiaoji.slice(1);
                                    xiaoji = parseFloat(xiaoji);
                                    zongjia = parseFloat(zongjia);
                                    zongjia = zongjia + xiaoji;
                                    zongjia = zongjia.toFixed(2);
                                    zongjia1[0].innerText = "￥" + zongjia;

                                    //判断去结算
                                    let a = document.getElementsByClassName('car_Heji_div1_span');
                                    let b = a[0].innerText;
                                    b = b.slice(1);
                                    b = parseFloat(b);
                                    if (b < minM) {
                                        let c = document.getElementsByClassName('tishi_anniu');
                                        let d = document.getElementsByClassName('tishi_anniu1');
                                        let e = document.getElementsByClassName('tishi_jiage');

                                        let f = minM - b;
                                        f = f.toFixed(2);
                                        e[0].innerText = '￥' + f;
                                    } else {
                                        let c = document.getElementsByClassName('tishi_anniu');
                                        let d = document.getElementsByClassName('tishi_anniu1');

                                    }
                                    that.showJieSuan(b)
                                } else {

                                }
                            }
                        }
                    });
                }
            }
        }
    }

    //选择
    fuxuankuang(e) {
        var a = e.target.checked;
        const minM = this.state.minMoey;
        if (a == false) {
            var b = e.target.parentNode.parentNode.children;
            var c = b[12].innerText;
            c = c.slice(1);
            c = parseFloat(c);
            var zongjia = $('.car_Heji_div1_span').text();
            zongjia = zongjia.slice(1);
            zongjia = parseFloat(zongjia);
            var zongjia1 = zongjia - c;
            zongjia1 = zongjia1.toFixed(2);
            $('.car_Heji_div1_span').text("￥" + zongjia1);

            e.target.setAttribute('checked', false);
            var cid = e.target.parentNode.getAttribute('data');
            ;

            //设置总价
            var a = document.getElementsByClassName('car_Heji_div1_span');
            var b = a[0].innerText;
            b = b.slice(1);
            b = parseFloat(b);

            if (b < minM) {

                var e = document.getElementsByClassName('tishi_jiage');
                var f = minM - b;
                f = f.toFixed(2);
                e[0].innerText = '￥' + f;
            } else {

            }
            //ajax

            var username = CoojiePage.getCoojie('username');
            var token = CoojiePage.getCoojie('token');
            //搜索条件ajax
            $.ajax({
                url: InterfaceUtil.getUrl(3),
                type: "post",
                data: {
                    "username": username, "token": token, "cid": cid, "is_check": 0
                },
                dataType: "json",
                success: function (data) {

                }
            });
            // ajax.open('post',"http://192.168.1.49/index.php/index/Cart/check_cart",false);

        } else if (a == true) {

            var b = e.target.parentNode.parentNode.children;
            var c = b[12].innerText;
            c = c.slice(1);
            c = parseFloat(c);
            var zongjia = $('.car_Heji_div1_span').text();
            zongjia = zongjia.slice(1);
            zongjia = parseFloat(zongjia);

            var zongjia1 = zongjia + c;
            zongjia1 = zongjia1.toFixed(2);
            $('.car_Heji_div1_span').text("￥" + zongjia1);
            e.target.setAttribute('checked', true);
            var cid = e.target.parentNode.getAttribute('data');

            //设置总价
            var a = document.getElementsByClassName('car_Heji_div1_span');
            var b = a[0].innerText;
            b = b.slice(1);
            b = parseFloat(b);
            if (b < minM) {
                var e = document.getElementsByClassName('tishi_jiage');
                var f = 200 - b;
                f = f.toFixed(2);
                e[0].innerText = '￥' + f;
            } else {


            }


            var username = CoojiePage.getCoojie('username');
            var token = CoojiePage.getCoojie('token');
            //搜索条件ajax
            $.ajax({
                url: InterfaceUtil.getUrl(3),
                type: "post",
                data: {
                    "username": username, "token": token, "cid": cid, "is_check": 1
                },
                dataType: "json",
                success: function (data) {

                }
            });
            // ajax.open('post',"http://192.168.1.49/index.php/index/Cart/check_cart",false);

        }
        $('.shangpingshuliang').text("已选择" + $('.car_content input:checked').length + "件商品");
        this.showJieSuan(zongjia1)
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
                // 状态码
                console.log(XMLHttpRequest.status);
                // 状态
                console.log(XMLHttpRequest.readyState);
                // 错误信息
                console.log(textStatus);
            }
        });
    }

    //删除
    shanchu(e) {
        var a = e.target.parentNode.getAttribute('data-index');
        var username = CoojiePage.getCoojie('username');
        var token = CoojiePage.getCoojie('token');
        var member_id = CoojiePage.getCoojie('user_id');
        var jylx = CoojiePage.getCoojie('jylx');
        const that = this;
        //搜索条件ajax
        $.ajax({
            url: InterfaceUtil.getUrl(6),
            type: "post",
            data: {
                "username": username, "token": token, "cid": a, "is_check": 1
            },
            dataType: "json",
            success: function (data) {
                alert(data.info);
                that.removeBuyOrder(a);
                PubSub.publish('PubSubmessage');
                PubSub.publish('carTishiMoney');
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
    }

    /**
     * 删除state.sp中指定数组
     * @param e 数组中对应cid值
     */
    removeBuyOrder(e) {
        let arr = this.state.sp,
            arr1 = [];
        for (var i = 0, len = arr.length; i < len; i++) {
            if (arr[i].cid != e) {
                arr1.push(arr[i])
            }
        }
        this.setState({
            sp: arr1
        }, () => {
            this.catTishiMoney();
        })
    }

    componentDidMount() {
        var username = CoojiePage.getCoojie('username');
        var token = CoojiePage.getCoojie('token');
        var user_id = CoojiePage.getCoojie('user_id');
        var jylx = CoojiePage.getCoojie('jylx');
        const that = this;
        //  广告位
        $.ajax({
            url: InterfaceUtil.getUrl(7),
            type: "post",
            data: {
                "username": username, "token": token, "member_id": user_id, "jylx": jylx
            },
            dataType: "json",
            success: function (data) {
                that.loginPage.ajaxLogin(data.status, that.props);
                if (data.data.length == 0) {

                } else {
                    if (!data.data.list) return;
                    that.setState({
                        sp: data.data.list.plist,
                        minMoey: data.data.list.free.lowest,
                        maxMoney: data.data.list.free.myunfee
                    }, () => {
                        var a = document.getElementsByClassName('car_title_div15');
                        var c = document.getElementsByClassName('car_title_div13');
                        var d = document.getElementsByClassName('car_title_div14');
                        var e = document.getElementsByClassName('car_title_div13_span1');
                        var f = document.getElementsByClassName('car_title_div13_span');
                        var y = document.getElementsByClassName('car_content_div');
                        const minM = that.state.minMoey;
                        for (var i = 0; i < a.length; i++) {
                            var b = a[i].innerText;
                            if (b == '无') {
                                c[i].className = 'car_title_div13 display';
                                d[i].className = 'car_title_div14'
                            } else {
                                c[i].className = 'car_title_div13 ';
                                e[i].className = 'car_title_div13_span1 red';
                                f[i].className = 'car_title_div13_span text_del';
                                d[i].className = 'car_title_div14 display '
                            }
                        }

                        for (var i = 0; i < a.length; i++) {
                            var x = a[i].getAttribute('data');
                            if (x == 1) {
                                y[i].className = 'car_content_div orange'
                            }
                        }

                        //  是否选中
                        var check = document.getElementsByClassName('car_content');
                        var inp = document.getElementsByClassName('buycar_input1');
                        var heji = document.getElementsByClassName('car_title_div11_xiaoji');
                        var zongjia1 = document.getElementsByClassName('car_Heji_div1_span');
                        var zongjia = 0;
                        var shuliang = 0;
                        that.catTishiMoney();

                        // 无库存
                        var kucun = document.getElementsByClassName('car_title_div7_kcs');
                        for (var i = 0; i < kucun.length; i++) {
                            var kucun1 = kucun[i].innerText;
                            if (kucun1 == 0) {
                                check[i].className = 'contain car_content relative car_content_current'
                            }
                        }


                    });
                    // var qifa=document.getElementsByClassName('car_qifa');
                    // var baoyou=document.getElementsByClassName('car_baoyou');
                    $('.car_qifa').eq(0).text(data.data.list.free.lowest + '元');
                    // baoyou[0].innerText=
                    $('.car_baoyou').eq(0).text(data.data.list.free.myunfee + '元')

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
    }

    catTishiMoney() {
        const minM = this.state.minMoey;
        var check = $('.car_content');
        var inp = document.getElementsByClassName('buycar_input1');
        var heji = document.getElementsByClassName('car_title_div11_xiaoji');
        var zongjia1 = document.getElementsByClassName('car_Heji_div1_span');
        var zongjia = 0;
        var shuliang = 0;
        if (check.length === 0) {
            zongjia1[0].innerText = "￥" + 0;
            $('.shangpingshuliang').eq(0).text('已选择' + 0 + '件商品')
            // spsl[0].innerText = '已选择' + shuliang + '件商品';
        }
        for (var i = 0; i < check.length; i++) {
            var xuanzhong = check[i].getAttribute('data');
            if (xuanzhong == '1') {
                inp[i].setAttribute('checked', true);
                var xiaoji = heji[i].innerText;
                xiaoji = xiaoji.slice(1);
                xiaoji = parseFloat(xiaoji);
                zongjia = parseFloat(zongjia);
                zongjia = zongjia + xiaoji;
                zongjia = zongjia.toFixed(2);
                zongjia1[0].innerText = "￥" + zongjia;
                shuliang = shuliang + 1;
                var spsl = document.getElementsByClassName('shangpingshuliang');
                spsl[0].innerText = '已选择' + shuliang + '件商品';
            }
        }
        //总价
        var a = document.getElementsByClassName('car_Heji_div1_span');
        var b = a[0].innerText;
        b = b.slice(1);
        b = parseFloat(b);
        if (b < minM) {
            var c = document.getElementsByClassName('tishi_anniu');
            var d = document.getElementsByClassName('tishi_anniu1');
            var e = document.getElementsByClassName('tishi_jiage');
            c[0].className = 'contain marginTop20 display tishi_anniu';
            d[0].className = 'contain marginTop20 tishi_anniu1';
            var f = minM - b;
            f = f.toFixed(2);
            e[0].innerText = '￥' + f;

        } else {
            var c = document.getElementsByClassName('tishi_anniu');
            var d = document.getElementsByClassName('tishi_anniu1');
            c[0].className = 'contain marginTop20  tishi_anniu';
            d[0].className = 'contain marginTop20 tishi_anniu1 display';
        }
    }

    render() {
        return (
            <div className='container'>
                {
                    this.state.sp.map(function (item, i) {

                        return (
                            <div key={item.id}
                                 className='contain car_content relative'
                                 data={item.is_check}
                                 data-index={item.isxs}
                                 data-kcs={item.kcs}>
                                <div className='car_title_div1 hid' data={item.cid}>
                                    <input type="checkbox" className='buycar_input1'
                                           onClick={(e) => {
                                               this.fuxuankuang(e)
                                           }}/>
                                           {/*<div>*/}
                                               <img src={this.state.lujin + item.image} className='car_title_div1_img'/>
                                           {/*</div>*/}

                                </div>
                                <div className='car_title_div2 hid'>
                                    <Link to={`/Shangpinxiangqing?&id=`+item.id}>
                                        {item.title}
                                    </Link>

                                </div>
                                <div className='car_title_div3 hid'>
                                    {item.sku}
                                </div>
                                <div className='car_title_div4 hid'>
                                    {item.scqy}
                                </div>
                                <div className='car_title_div5'>
                                    {item.bzdw}
                                </div>
                                <div className='car_title_div5'>
                                    {item.jzl}
                                </div>
                                <div className='car_title_div6'>
                                    {item.vstime}
                                </div>
                                <div className='car_title_div7 car_title_div7_kcs'>
                                    {item.kcs}
                                </div>
                                <div className='car_title_div15' data={item.is_activity}>
                                    {item.activity_remark}
                                </div>
                                <div className='car_title_div13 '>
                                    <div className='car_title_div13_span'>￥{item.prices}</div>
                                    <div className='car_title_div13_span1'>￥{item.activity_price}</div>
                                </div>
                                <div className='car_title_div14'>
                                    ￥{item.prices}
                                </div>
                                <div className='car_title_div10 carCon10' data={item.zxdw} data-index={item.id}
                                     data-a={item.kcs}>
                                    <button className='car_title_div10_btn' onClick={(e) => {
                                        this.jian3(e)
                                    }}>-
                                    </button>
                                    <input type="text" defaultValue={item.spsl} className='car_title_div10_inp'
                                           onBlur={(e) => {
                                               this.shuliangBuy(e)
                                           }}/>
                                    <button className='car_title_div10_btn' onClick={(e) => {
                                        this.jia3(e)
                                    }}>+
                                    </button>
                                    <div className='clear'></div>
                                </div>
                                <div className='car_title_div11 car_title_div11_xiaoji'>
                                    ￥{item.hj}
                                </div>
                                <div className='car_title_div12_con' data-index={item.cid} data={item.id}>
                                    <span className='car_title_div12_span' onClick={(e) => {
                                        this.shanchu(e)
                                    }}>删除</span>
                                    <span onClick={(e) => {
                                        this.shoucang(e)
                                    }}>添加收藏</span>
                                </div>
                                <div
                                    className='car_content_div orange display'>
                                    本品限购{item.activity_xgsl}{item.bzdw}，
                                    {item.activity_xgsl}{item.bzdw}以内活动价￥{item.activity_price}出售，
                                    {item.activity_xgsl}{item.bzdw}以上按原价￥{item.prices}出售，活动结束时间：
                                    {item.activity_endtime}
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
