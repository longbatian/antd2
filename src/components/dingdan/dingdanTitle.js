import React from 'react';
import $ from 'jquery';
import {withRouter, Link} from "react-router-dom";
import InterfaceUtil from '../../util/InterfaceUtil';
import CoojiePage from '../../util/CoojiePage';
import {Modal, Button} from 'antd';
import '../../styles/dingdan/dingdan.css';

class Dingdan extends React.Component {
    constructor(props) {
        super(props); //调用父类的构造方法；
        this.times = 1;
        this.state = {
            lujin: InterfaceUtil.getImgUrl(),
            zhifu: 1,
            chuangjian: {
                "orderno": '',
                "ddsfje": '',
                "goods_price": '',
                "member_id": '',
                "userinfo": {
                    "shr": '',
                    "shdz": '',
                    "lxdh": '',
                    "shyb": '',
                    "dwmc": ''
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
        if (e.target.children.length == 1) {
            e.target.className = 'dingdan_div_p_span1 marginLeft20 dingdan_div_p_span3'
            e.target.nextSibling.className = 'dingdan_div_p_span2 marginLeft20'
            this.setState({
                zhifu: 1
            })
        } else {
            e.target.parentNode.className = 'dingdan_div_p_span1 marginLeft20 dingdan_div_p_span3'
            e.target.nextSibling.className = 'dingdan_div_p_span2 marginLeft20'
            this.setState({
                zhifu: 1
            })

        }
    }

    zhifu1(e) {
        if (e.target.children.length == 1) {
            e.target.previousSibling.className = 'dingdan_div_p_span1 marginLeft20';
            e.target.className = 'dingdan_div_p_span2 marginLeft20 dingdan_div_p_span3'
            this.setState({
                zhifu: 2
            })
        } else {
            e.target.previousSibling.className = 'dingdan_div_p_span1 marginLeft20';
            e.target.parentNode.className = 'dingdan_div_p_span2 marginLeft20 dingdan_div_p_span3';
            this.setState({
                zhifu: 2
            })
        }
    }

    componentDidMount() {
        let token = CoojiePage.getCoojie('token');
        // let user_id=CoojiePage.getCoojie('user_id');
        let username = CoojiePage.getCoojie('username');
        window.scrollTo(0, 0);
        let orderno = sessionStorage.getItem("orderno");
        const that = this;
        //智能采购
        $.ajax({
            url: InterfaceUtil.getUrl(18),
            type: "post",
            data: {
                "token": token, "orderno": orderno, "username": username
            },
            dataType: "json",
            success: function (data) {
                if (data.status !== 1) {
                    alert(data.info);
                    that.props.history.push('/Buycar');
                    return;
                }
                that.setState({
                    chuangjian: data.data,
                    shdz: data.data.userinfo.shdz,
                }, () => {
                    function delCookie(name) {
                        var exp = new Date();
                        exp.setTime(exp.getTime() - 1);
                        var cval = CoojiePage.getCoojie(name);
                        if (cval != null)
                            document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString();
                    }

                    delCookie('order_id');
                    sessionStorage.setItem("orderno", '');
                });
            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {

            }
        });


    }

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
        this.times = 60;
    }

    payFor() {
        let token = CoojiePage.getCoojie('token');
        let username = CoojiePage.getCoojie('username');
        let _payId = this.state.zhifu;
        let orderno = this.state.chuangjian.orderno;
        let _this = this;
        // console.log(token+'--'+username+'--'+orderno);
        if (_payId === 2) {
            this.showModal();
            $.ajax({
                type: "post",
                url: InterfaceUtil.getUrl(58),
                data: {
                    "token": token,
                    "username": username,
                    "orderno": orderno,
                },
                dataType: "json",
                success: function (data, status) {
                    if (data.status === 1) {
                        // console.log(data)
                        _this.setState({
                            imgs: data.data,
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
            window.open('http://www.scjuchuang.com/apis/index.php/index/order/alipay?orderno=' + orderno);
        }

    }

    setTimeOver() {
        var token = CoojiePage.getCoojie('token');
        var username = CoojiePage.getCoojie('username');
        var orderno = this.state.chuangjian.orderno;
        var _this = this;
        var timesOut = setInterval(function () {
            $.ajax({
                type: "post",
                url: InterfaceUtil.getUrl(59),
                data: {
                    "token": token,
                    "username": username,
                    "orderno": orderno,
                },
                dataType: "json",
                success: function (data, status) {
                    if (data.status === 1) {
                        if (data.data === 2) {
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
                        }
                    } else {
                        alert(data.info);

                    }

                }
            });
            if (_this.times > 59) {
                clearInterval(timesOut);
                _this.hideModal()
            }
            _this.times++;
        }, 2000);

    }

    enterIconLoading = () => {
        this.setState({iconLoading: true});
        this.setTimeOver();
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
                         {this.state.chuangjian.orderno}
                        </span>
                    </p>
                    <p className='marginLeft20'>
                        <span className='dingdan_div_p_span'>
                            商品总金额：
                         </span>
                        <span className='red'>￥{this.state.chuangjian.goods_price}</span></p>
                    <p className='marginLeft20'>
                        <span className='dingdan_div_p_span'>应付金额：</span>
                        <span className='red'>￥{this.state.chuangjian.ddsfje}
                            </span>
                    </p>
                    <p className='marginLeft20'>
                        <span className='dingdan_div_p_span'>配送信息：</span>
                        <span className=''>{data.userinfo.shdz}</span>
                    </p>
                    <p className='marginLeft20'>
                        <span className='dingdan_div_p_span'>单位名称：</span>
                        <span className=''>{data.userinfo.dwmc}</span>
                    </p>
                    <p className='marginLeft20'>
                        <span className='dingdan_div_p_span'>选择支付方式：</span>
                        <span className='dingdan_div_p_span1 marginLeft20 dingdan_div_p_span3' onClick={(e) => {
                            this.zhifu(e)
                        }}>
             <img src={require("../../images/buycar/zfb.png")} className='marginRight10 dingdan_div_p_span1_img'
                  alt=""/>支付宝</span>
                        <span className='dingdan_div_p_span2 marginLeft20' onClick={(e) => {
                            this.zhifu1(e)
                        }}>
             <img src={require("../../images/buycar/weixin.png")} className='marginRight10 dingdan_div_p_span1_img'
                  alt=""/>微信支付</span>
                    </p>
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

    componentDidUpdate() {

    }
}

export default withRouter(Dingdan);
// export default Dingdan;
