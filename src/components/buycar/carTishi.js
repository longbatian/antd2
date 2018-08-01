import React from 'react';
import {withRouter, Link} from "react-router-dom";
import {Modal, Button} from 'antd';
import Tuijian from '../common/tuijian'
import $ from 'jquery'
import InterfaceUtil from '../../util/InterfaceUtil';
import CoojiePage from '../../util/CoojiePage';

const confirm = Modal.confirm;

class Gouwuche3 extends React.Component {
    constructor(props) {
        super(props); //调用父类的构造方法；
        this.state = {
            checkbox: false,
            cons: '',
            minMoey: 0,
            maxMoney: 500,
        }
    }


    //全选
    quanxuan(e) {
        var a = $('.buycar_input').eq(0).prop('checked');
        var che = document.getElementsByClassName('buycar_input1')
        if (a == false) {
            for (var i = 0; i < che.length; i++) {
                che[i].setAttribute('checked', false);
            }
            $('.buycar_input').prop('checked', false);
            $('.buycar_input1').prop('checked', false);
            $('.buycar_input2').prop('checked', false);
        } else if (a == true) {
            for (var i = 0; i < che.length; i++) {
                che[i].setAttribute('checked', true);
            }
            $('.tishi_anniu1,.tishi_anniu').hide();
            $('.tishi_anniu').show();
            $('.buycar_input').prop('checked', true);
            $('.buycar_input1').prop('checked', true);
            $('.buycar_input2').prop('checked', true);
        }

        var inp = $('.buycar_input1');
        var heji = 0;
        var cid = [];
        var is_check = '0';
        for (var i = 0; i < inp.length; i++) {
            var check = $('.buycar_input1').eq(i).prop('checked');
            if (check == true) {
                var xiaoji = $('.car_title_div11_xiaoji').eq(i).text();
                xiaoji = xiaoji.slice(1);
                xiaoji = parseFloat(xiaoji);
                heji = parseFloat(heji);
                heji = heji + xiaoji;
                heji = heji.toFixed(2);
                $('.car_Heji_div1_span').text("￥" + heji);

                var cld = $('.buycar_input1').eq(i).parent().attr('data');
                cid.push(cld);
                is_check = '1'

            } else {
                $('.car_Heji_div1_span').text("￥" + heji);
                var cld = $('.buycar_input1');
                for (var i = 0; i < cld.length; i++) {
                    var data = cld.eq(i).parent().attr('data');
                    cid.push(data);
                    is_check = '0'
                }

            }
        }
        this.showJiesuan(heji)
        //ajax

        var username = CoojiePage.getCoojie('username');
        var token = CoojiePage.getCoojie('token');
        cid = JSON.stringify(cid);
        //搜索条件ajax
        // $.ajax({
        //     url: InterfaceUtil.getUrl(3),
        //     type: "post",
        //     data: {
        //         "username": username, "token": token, "cid": cid, "is_check": is_check
        //     },
        //     dataType: "json",
        //     success: function (data) {
        //
        //     },
        //     error: function (XMLHttpRequest, textStatus, errorThrown) {
        //         // 状态码
        //         console.log(XMLHttpRequest.status);
        //         // 状态
        //         console.log(XMLHttpRequest.readyState);
        //         // 错误信息
        //         console.log(textStatus);
        //     }
        // });

        $('.shangpingshuliang').text("已选择" + $('.car_content input:checked').length + "件商品");
    }

    showJiesuan(heji) {
        var minM = this.state.minMoey;
        if (heji >= minM) {
            $('.tishi_anniu1,.tishi_anniu').hide();
            $('.tishi_anniu').show();
        } else {
            $('.tishi_anniu1,.tishi_anniu').hide();
            $('.tishi_anniu1').show();
        }
    }

    //下架
    xiajia(e) {
        var a = $('.car_content');
        var b = e.target.checked;
        if (b == true) {
            for (var i = 0; i < a.length; i++) {

                var kcs = a.eq(i).attr('data-kcs');
                var xiajia = a.eq(i).attr('data-index');
                if (kcs == '0' || xiajia == '0') {
                    $('.buycar_input1').eq(i).prop('checked', true);
                    var cid = $('.car_title_div1').eq(i + 1).attr('data');
                    //ajax
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

                }else {
                    $('.buycar_input1').eq(i).prop('checked', false);
                }
            }
        } else {
            for (var i = 0; i < a.length; i++) {
                var kcs = a.eq(i).attr('data-kcs');
                var xiajia = a.eq(i).attr('data-index');
                if (kcs == '0' || xiajia == '0') {
                    $('.buycar_input1').eq(i).prop('checked', false);
                    var cid = $('.car_title_div1').eq(i + 1).attr('data');
                    // console.log(cid)
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
                    // ajax.open('post',"http://192.168.1.49/index.php/index/Cart/check_cart",false);
                }
            }
        }


    }

    //删除
    shanchu(e) {
        var _this = this;
        var cid = new Array();
        var msg = "您确定要删除吗？";
        confirm({
            title: '您确定要删除吗？?',
            content: '',
            okText: '删除',
            okType: 'danger',
            cancelText: '取消',
            onOk() {
                var a = $('.buycar_input1');
                for (var i = 0; i < a.length; i++) {
                    var b = a[i].checked;
                    if (b == true) {
                        var c = $('.car_title_div12_con').eq(i).attr('data-index');
                        cid.push(c);

                    }
                }
                _this.okAjax(cid)
            },
            onCancel() {
                return false;
            },
        });

    }

    okAjax(cid) {
        cid =  cid.join(','); //a-b-c-d-e  使用-拼接数组元素
        var username = CoojiePage.getCoojie('username');
        var token = CoojiePage.getCoojie('token');
        var user_id = CoojiePage.getCoojie('user_id');
        var jylx = CoojiePage.getCoojie('jylx');
        const that = this;
        console.log(cid)
        $.ajax({
            url: InterfaceUtil.getUrl(6),
            type: "post",
            data: InterfaceUtil.addTime({
                "user_id": user_id, "token": token, "cart_id": cid
            }),
            dataType: "json",
            success: function (data) {
                console.log(data)
                if (data.code === 1) {
                    window.location.reload()
                }
            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {

            }
        });
    }

    //去结算
    jiesuan(e) {
        var cid = [];
        var a = $('.buycar_input1');
        for (var i = 0; i < a.length; i++) {
            var b = a[i].checked;
            if (b == true) {
                var c = $('.car_title_div12_con').eq(i).attr('data-index');
                cid.push(c);
            }
        }
        document.cookie = "cid=" + cid;
        this.props.history.push('/Jiesuan');
    }

    componentDidMount() {
        let username = CoojiePage.getCoojie('username');
        let token = CoojiePage.getCoojie('token');
        let user_id = CoojiePage.getCoojie('user_id');
        let jylx = CoojiePage.getCoojie('jylx');
        // carTishiMoney
        var _this = this;
        $.ajax({
            url: InterfaceUtil.getUrl(1),
            type: "post",
            data:  InterfaceUtil.addTime({
                "token": token, "user_id": user_id
            }),
            dataType: "json",
            success: function (data) {
                // console.log(data)
                if (data.code === 1) {
                    _this.setState({
                        minMoey: data.data[9].initial_amount,
                        maxMoney: data.data[10].exempt_freight
                    })
                }

            },
            error: function () {
            }
        });
    }

    render() {
        return (
            <div className='container'>
                <div className='contain car_Tishi'>
                    <span className='orange floatleft marginLeft10'>温馨提示：请仔细核对商品数量及有效期，药品非质量问题概不退换！</span>
                    <span className='floatRight marginRight20'>全网满
        <span className='red'>{this.state.minMoey}</span>起发，满
        <span className='red car_baoyou'>{this.state.maxMoney}</span>包邮</span>
                </div>
                <div className='contain car_Heji relative'>
                    <div className='car_Heji_div'>
                        <div><input type="checkbox" className='marginLeft20 marginRight10 buycar_input'
                                    onClick={(e) => {
                                        this.quanxuan(e)
                                    }}/>全选
                        </div>
                        <div><input type="checkbox"
                                    className='marginLeft20 marginRight10'
                                    onClick={(e) => {
                                        this.xiajia(e)
                                    }}/>无库存和下架商品
                        </div>
                        <div onClick={(e) => {
                            this.shanchu(e)
                        }} className='blue cursor'>
                            <img src={require("../../images/buycar/cha1.png")} className='marginLeft20 car_Heji_div_img'
                                 alt=""/>删除选中商品
                        </div>
                    </div>
                    <div className='car_Heji_div1'>
                        <div>
                            <span className='marginRight10 shangpingshuliang'>已选择1件商品</span>
                            <span className=''>总价(不含运费)：<span
                                className='red font20 car_Heji_div1_span'>￥0.00</span></span>
                        </div>
                        <div className='floatRight car_Heji_div1_div marginTop5'>
                            <span>已节省：</span>
                            <span className='car_Heji_div1_div_span'>-￥0.00</span>
                        </div>
                        <div className='clear'></div>
                    </div>
                </div>
                {/*去结算*/}
                <div className='contain marginTop20 display tishi_anniu'>
                    <button className='tishi_gouwu floatleft'>继续购物</button>
                    <button className='floatRight tishi_jiesuan' onClick={(e) => {
                        this.jiesuan(e)
                    }}>去结算
                    </button>
                    <div className='clear'></div>
                </div>
                <div className='contain marginTop20 tishi_anniu1'>
                    <Link to="/Chanpinzhongxin">
                        <button className='tishi_gouwu floatleft'>继续购物</button>
                    </Link>
                    <span className='floatRight marginRight20'>
           在购买<span className='red tishi_jiage'>￥0.00</span>元才能发货
           <Link to="/Chanpinzhongxin"><button className='marginLeft5 tishi_coudan'>去凑单</button></Link>
         </span>
                    <div className='clear'></div>
                </div>

                <div className='contain'>
                    {/*推荐*/}
                    <Tuijian data='6'/>
                </div>
            </div>
        )
    }

}

export default withRouter(Gouwuche3);
// export default Gouwuche3;
