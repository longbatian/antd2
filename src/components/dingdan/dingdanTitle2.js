import React from 'react';
import $ from 'jquery';
import {withRouter} from "react-router-dom";
import InterfaceUtil from '../../util/InterfaceUtil';
import CoojiePage from '../../util/CoojiePage';
import {Button, Modal} from 'antd';
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
        if (e.target.children.length == 1) {
            e.target.className = 'dingdan_div_p_span1  dingdan_div_p_span3'
            e.target.nextSibling.className = 'dingdan_div_p_span2 '
            this.setState({
                zhifu: 1
            })
        } else {
            e.target.parentNode.className = 'dingdan_div_p_span1  dingdan_div_p_span3'
            e.target.nextSibling.className = 'dingdan_div_p_span2 '
            this.setState({
                zhifu: 1
            })

        }
    }

    zhifu1(e) {
        if (e.target.children.length == 1) {
            e.target.previousSibling.className = 'dingdan_div_p_span1 ';
            e.target.className = 'dingdan_div_p_span2  dingdan_div_p_span3'
            this.setState({
                zhifu: 2
            })
        } else {
            e.target.previousSibling.className = 'dingdan_div_p_span1 ';
            e.target.parentNode.className = 'dingdan_div_p_span2  dingdan_div_p_span3';
            this.setState({
                zhifu: 2
            })
        }
    }


    payFor() {
        let token = CoojiePage.getCoojie('token');
        let username = CoojiePage.getCoojie('username');
        let user_id = CoojiePage.getCoojie('user_id');
        let _payId = this.state.zhifu;
        let  price= $('.bl2drigspanpar').text()
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
                    price:price
                }),
                dataType: "json",
                success: function (data, status) {

                    if (data.code === 1) {
                        _this.setState({
                            imgs: data.data.qrcode_img,
                            isOver: !_this.state.isOver,
                            pay_order_number:data.data.pay_order_number
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
                    price:price
                }),
                dataType: "json",
                success: function (data, status) {

                    if (data.code === 1) {
                        var openwin=window.open('http://' + data.data.url);
                        if(openwin==null){
                            window.location.href='http://' + data.data.url;
                        }
                    }
                }
            });
        }

    }

    setTimeOver() {
        var token = CoojiePage.getCoojie('token');
        var user_id = CoojiePage.getCoojie('user_id');
        let orderno = this.state.chuangjian.order_number;
        let  price= $('.bl2drigspanpar').text()
        var _this = this;
        var timesOut = setInterval(function () {
            $.ajax({
                type: "post",
                url: InterfaceUtil.getUrl(59),
                data: InterfaceUtil.addTime({
                    "token": token,
                    "user_id": user_id,
                    pay_order_number:_this.state.pay_order_number
                }),
                dataType: "json",
                success: function (data, status) {
                    console.log(data)
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
            <div>
                <div className=''>

                    <div
                        className='dingdan_div_p_span1  dingdan_div_p_span3'
                        onClick={(e) => {
                            this.zhifu(e)
                        }}>
                        <img src={require("../../images/buycar/zfb.png")}
                             className='marginRight10 dingdan_div_p_span1_img'
                             alt=""/>支付宝
                    </div>
                    <div className='dingdan_div_p_span2 ' onClick={(e) => {
                        this.zhifu1(e)
                    }}>
                        <img src={require("../../images/buycar/weixin.png")}
                             className='marginRight10 dingdan_div_p_span1_img'
                             alt=""/>微信支付
                    </div>
                </div>
                <div className='bl2drigButtonBx'>
                   <span
                       className='bl2drigButton'
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
        )
    }

}

export default withRouter(Dingdan);
// export default Dingdan;
