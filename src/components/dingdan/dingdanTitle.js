import React from 'react';
import $ from 'jquery';
import {Link, withRouter} from "react-router-dom";
import InterfaceUtil from '../../util/InterfaceUtil';
import CoojiePage from '../../util/CoojiePage';
import {Button, Modal, message} from 'antd';
import '../../styles/dingdan/dingdan.css';

class Dingdan extends React.Component {
    showModal = () => {
        this.setState({
            visible: true,
        });
        this.times = 1;
    }
    hideModal = () => {
        this.setState({
            visible: false
        });
        this.times = 90;
    }
    enterIconLoading = () => {
        this.setState({iconLoading: true});
        this.setTimeOver();
    }

    constructor(props) {
        super(props); //调用父类的构造方法；
        this.times = 1;
        this.state = {
            lujin: InterfaceUtil.getImgUrl(),
            zhifu: 1,
            chuangjian: {
                address: {
                    name: '',
                    address: '',
                    tel: '',
                    enterprise: ''
                }
            },
            loading: false,
            iconLoading: false,
            shdz: '',
            imgs: '',
            isOver: false,
            // payforId:1,
        }
    }

    zhifu(e) {
        // console.log(e.target)
        $('.ddcon>div').removeClass().addClass('dingdan_div_p_span2 marginLeft20');
        $(e.target).parent().removeClass().addClass('dingdan_div_p_span1 marginLeft20 dingdan_div_p_span3');

        this.setState({
            zhifu: $(e.target).parent().index() + 1
        })
        // if (e.target.children.length == 1) {
        //     e.target.className = 'dingdan_div_p_span1 marginLeft20 dingdan_div_p_span3'
        //     e.target.nextSibling.className = 'dingdan_div_p_span2 marginLeft20'
        //     this.setState({
        //         zhifu: 1
        //     })
        // } else {
        //     e.target.parentNode.className = 'dingdan_div_p_span1 marginLeft20 dingdan_div_p_span3'
        //     e.target.nextSibling.className = 'dingdan_div_p_span2 marginLeft20'
        //     this.setState({
        //         zhifu: 1
        //     })
        //
        // }
    }


    componentDidMount() {

        let token = CoojiePage.getCoojie('token');
        // let user_id=CoojiePage.getCoojie('user_id');
        let user_id = CoojiePage.getCoojie('user_id');
        window.scrollTo(0, 0);
        let orderno = sessionStorage.getItem("orderno");
        const that = this;
        if(/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
            document.cookie = "orderno=" + orderno;
            window.location.href = "http://www.scjuchuang.com/wap/compents/paymentdetails.html"
        }
        //智能采购
        $.ajax({
            url: InterfaceUtil.getUrl(18),
            type: "post",
            data: InterfaceUtil.addTime({
                "token": token, "order_number": orderno, "user_id": user_id
            }),
            dataType: "json",
            success: function (data) {
                console.log(data)
                if (data.code !== 1) {
                    alert(data.msg);
                    that.props.history.push('/Buycar');
                    return;
                }
                that.setState({
                    chuangjian: data.data,
                    // shdz: data.data.userinfo.shdz,
                }, () => {
                    function delCookie(name) {
                        var exp = new Date();
                        exp.setTime(exp.getTime() - 1);
                        var cval = CoojiePage.getCoojie(name);
                        if (cval != null)
                            document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString();
                    }

                    // delCookie('order_id');
                    // sessionStorage.setItem("orderno", '');
                });
            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {

            }
        });


    }

    payFor() {
        let token = CoojiePage.getCoojie('token');
        let username = CoojiePage.getCoojie('username');
        let user_id = CoojiePage.getCoojie('user_id');
        let _payId = this.state.zhifu;
        let orderno = this.state.chuangjian.order_number;
        let _this = this;
        // console.log(token+'--'+username+'--'+orderno);
        if (_payId === 2) {
            this.showModal();
            $.ajax({
                type: "post",
                url: InterfaceUtil.getUrl(58),
                data: InterfaceUtil.addTime({
                    "token": token,
                    "user_id": user_id,
                    "order_number": orderno
                }),
                dataType: "json",
                success: function (data, status) {
                    if (data.code === 1) {
                        _this.setState({
                            imgs: data.data.qrcode_img,
                            isOver: !_this.state.isOver
                        })
                    } else {
                        _this.setState({
                            imgs: ``,
                        })
                    }
                    _this.setTimeOver()
                }
            });
        } else if (_payId === 1) {
            // window.open('http://www.scjuchuang.com/apis/index.php/index/order/alipay?orderno=' + orderno);
            $.ajax({
                type: "post",
                url: InterfaceUtil.getUrl(65),
                data: InterfaceUtil.addTime({
                    "token": token,
                    "user_id": user_id,
                    "order_number": orderno,
                }),
                dataType: "json",
                success: function (data, status) {
                    if (data.code === 1) {
                        var openwin = window.open('http://' + data.data.url);
                        if (openwin == null) {
                            window.location.href = 'http://' + data.data.url;
                        }

                    }
                }
            });
        } else if (_payId === 3) {
            // window.open('http://www.scjuchuang.com/apis/index.php/index/order/alipay?orderno=' + orderno);
            $.ajax({
                type: "post",
                url: InterfaceUtil.getUrl(62),
                data: InterfaceUtil.addTime({
                    "token": token,
                    "user_id": user_id,
                    "order_number": orderno,
                }),
                dataType: "json",
                success: function (data, status) {
                    if (data.code === 1) {
                        message.success(data.msg);
                        _this.props.history.push('/Personal');
                    } else {
                        message.error(data.msg)
                    }
                }
            });
        }

    }

    setTimeOver() {
        var token = CoojiePage.getCoojie('token');
        var user_id = CoojiePage.getCoojie('user_id');
        let orderno = this.state.chuangjian.order_number;
        var _this = this;
        var timesOut = setInterval(function () {

            $.ajax({
                type: "post",
                url: InterfaceUtil.getUrl(59),
                data: InterfaceUtil.addTime({
                    "token": token,
                    "user_id": user_id,
                    "pay_order_number": orderno
                }),
                dataType: "json",
                success: function (data, status) {

                    if (data.code === 1) {
                        // let modal;
                        clearInterval(timesOut);
                        _this.hideModal();
                        const modal = Modal.success({
                            title: '支付成功！',
                            content: '页面会在3秒后跳转，或者点击跳转',
                            onOk() {
                                _this.props.history.push('/Personal')
                                // location.replace('/Personal');
                            }
                        });
                        setTimeout(() => {
                            modal.destroy();
                            _this.props.history.push('/Personal')
                        }, 3000);
                    } else {
                        // alert(data.msg);

                    }

                }
            });

            if (_this.times > 89) {
                clearInterval(timesOut);
                _this.hideModal()
            }
            _this.times++;
        }, 1500);

    }

    render() {
        let data = this.state.chuangjian;
        let imgs = this.state.imgs ? <img className="payImgs" src={this.state.imgs}/> :
            <Button type="primary"
                    loading={this.state.iconLoading}
                    onClick={this.enterIconLoading}>
                二维码加载失败点击重新加载
            </Button>;
        return (
            <div className='container'>
                {/*头部进度条*/}
                <div className='contain marginTop20 '>
                    <img src={require("../../images/buycar/buzhou3.png")} alt="" className='floatRight'/>
                    <div className='clear'></div>
                </div>
                <div className='contain dingdan_div marginTop20'>
                    <p className='blue dingdan_div_p'>感谢您在本网站购买商品，您的订单已成功提交</p>
                    <div className='dingdan_div_div'>
                        <p className='red marginTop10 marginLeft20 marginBottom10'>温馨提示</p>
                        <p className='marginLeft20 marginBottom10 dingdan_div_div_p'>
                            为保证您所选的商品库存，请尽快付款，未付款的订单系统会在
                            <span className='red'>48小时</span>以后自动取消</p>
                        <p className='marginLeft20 marginBottom10'>为了您的货款安全，请不要将货款转到公司指定以外的账户</p>
                    </div>
                    <p className='marginLeft20 marginTop10'>
                        <span className='dingdan_div_p_span'>订单编号：</span>
                        <span>
                         {data.order_number}
                        </span>
                    </p>
                    <p className='marginLeft20'>
                        <span className='dingdan_div_p_span'>
                            商品总金额：
                         </span>
                        <span className='red'>￥{data.origin_price}</span></p>
                    <p className='marginLeft20'>
                        <span className='dingdan_div_p_span'>应付金额：</span>
                        <span className='red'>￥{data.price}
                            </span>
                    </p>
                    <p className='marginLeft20'>
                        <span className='dingdan_div_p_span'>配送信息：</span>
                        <span className=''>
                            {data.address.name} {data.address.address} {data.address.tel}
                            </span>
                    </p>
                    <p className='marginLeft20'>
                        <span className='dingdan_div_p_span'>单位名称：</span>
                        <span className=''>
                            {data.address.enterprise}
                            </span>
                    </p>
                    <div className='marginLeft20'>
                        <span className='dingdan_div_p_span'>选择支付方式：</span>
                        <div className="ddcon">
                            <div

                                className='dingdan_div_p_span1 marginLeft20 dingdan_div_p_span3'>
                                {/*<img src={require("../../images/buycar/zfb.png")}*/}
                                {/*className='marginRight10 dingdan_div_p_span1_img'*/}
                                {/*alt=""/>*/}
                                <div
                                    onClick={(e) => {
                                        this.zhifu(e)
                                    }}
                                    className="dingdan_div_p_span2Img1">支付宝
                                </div>

                            </div>
                            <div

                                className='dingdan_div_p_span2 marginLeft20'>
                                {/*<img src={require("../../images/buycar/weixin.png")}*/}
                                {/*className='marginRight10 dingdan_div_p_span1_img'*/}
                                {/*alt=""/>*/}
                                <div
                                    onClick={(e) => {
                                        this.zhifu(e)
                                    }}
                                    className="dingdan_div_p_span2Img2">微信支付
                                </div>
                                {/*微信支付*/}
                            </div>
                            <div

                                className='dingdan_div_p_span2 marginLeft20'>
                                {/*<img src={require("../../images/buycar/003.png")}*/}
                                {/*className='marginRight0 dingdan_div_p_span1_img'*/}
                                {/*alt=""/>*/}
                                <div
                                    onClick={(e) => {
                                        this.zhifu(e)
                                    }}
                                    className="dingdan_div_p_span2Img3">余额支付
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className='dingdan_div_div1'>
           <span className='dingdan_div_div1_div'
                 onClick={() => this.payFor()}
           >立即支付</span>
                        <Modal
                            title="正在进行微信支付，请用微信扫一下二维码"
                            visible={this.state.visible}
                            onCancel={this.hideModal}
                            okText="支付成功"
                            footer={[<Button key="back" onClick={this.hideModal}>取消支付</Button>, null]}
                        >
                            {imgs}
                        </Modal>
                    </div>
                </div>
                <p className='contain marginTop20 marginBottom10'>返回 <Link to="/Index"><span
                    className='dingdan_p_span'>首页</span></Link> 或者返回 <Link to="/Chanpinzhongxin"><span
                    className='dingdan_p_span'>会员中心</span></Link></p>
            </div>
        )
    }


}

export default withRouter(Dingdan);
// export default Dingdan;
