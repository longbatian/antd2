import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import { Modal, Button } from 'antd';
import InterfaceUtil from '../../util/InterfaceUtil';
import $ from 'jquery';
import '../../styles/youhuiquan/youhuiquan.css'
import CoojiePage from "../../util/CoojiePage";

class Lingqu extends Component {
    constructor(props) {
        super(props); //调用父类的构造方法；
        this.times = 1;
        this.state = {
            youhuiquan: [],
            modal1Visible: false,
            modal2Visible: false,
            imgs: '',
        }
    }

    lingqu(e,id) {
        let yhqid = e.target.parentNode.parentNode.getAttribute('data');
        let username = CoojiePage.getCoojie('username');
        let token =  CoojiePage.getCoojie('token');
        let user_id =  CoojiePage.getCoojie('user_id');
        let user_type =  CoojiePage.getCoojie('user_type');
        const that = this;
        //  广告位
        $.ajax({
            url: InterfaceUtil.getUrl(51),
            type: "post",
            data: {
                "username": username, "token": token, "member_id": user_id, "acid": yhqid, "user_type": user_type
            },
            dataType: "json",
            success: function (data) {
                if (data.data.length == 0) {

                } else {
                    alert(data.info);
                    if (data.status === '1') {
                       that.removeClassStates(id);
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
    }
    removeClassStates(id){
        let arr2=this.state.youhuiquan;
        for (let i=0,len=arr2.length;i<len;i++){
            if(arr2[i].list){
                let arr3=arr2[i].list;
                for(let j=0,lens=arr3.length;j<lens;j++){
                    if(arr3[j].id===id){
                        arr3[j].is_lq=1;
                    }
                }
            }
        }
        this.setState({
            youhuiquan:arr2,
        })
    }
    componentDidMount() {
        let username = CoojiePage.getCoojie('username');
        let token = CoojiePage.getCoojie('token');
        let user_id = CoojiePage.getCoojie('user_id');
        let user_type = CoojiePage.getCoojie('user_type');
        const that = this;
        //  广告位
        $.ajax({
            url: InterfaceUtil.getUrl(52),
            type: "post",
            data: {
                "username": username, "token": token, "user_id": user_id, "user_type": user_type
            },
            dataType: "json",
            success: function (data) {
                // console.log(data)
                if (data.data.length == 0) {

                } else {
                    that.setState({
                        youhuiquan: data.data
                    });
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
    lingquGomai(e,id){
        this.payFor(id);

    }
    setModal2Visible(modal2Visible) {
        this.times=modal2Visible?1:60;
        this.setState({ modal2Visible });
    }
    payFor(id) {
        let token = CoojiePage.getCoojie('token');
        let username = CoojiePage.getCoojie('username');
        let _payId = this.state.zhifu;
        let _this = this;
        // console.log(token+'--'+username+'--'+orderno);
            this.setModal2Visible(true);

            $.ajax({
                type: "post",
                url: InterfaceUtil.getUrl(61),
                data: {
                    "token": token,
                    "username": username,
                    coupon_id: id,
                },
                dataType: "json",
                success: function (data, status) {
                    if (data.status === 1) {
                        _this.setState({
                            imgs: data.data.img,
                            isOver: !_this.state.isOver
                        })
                    } else {
                        _this.setState({
                            imgs: ``,
                        })
                    }
                    _this.setTimeOver(data.data.order_v,id)
                }
            });


    }

    setTimeOver(ids,id) {
        let token = CoojiePage.getCoojie('token');
        let username = CoojiePage.getCoojie('username');
        // let orderno = this.state.chuangjian.orderno;
        let _this = this;
        let timesOut = setInterval(function () {
            $.ajax({
                type: "post",
                url: InterfaceUtil.getUrl(62),
                data: {
                    "token": token,
                    "username": username,
                    orderno_v: ids,
                },
                dataType: "json",
                success: function (data, status) {
                    // console.log(data)
                    if (data.status === 1) {
                        if (data.data === 1) {
                            // let modal;
                            clearInterval(timesOut);
                            _this.setModal2Visible(false);


                            const modal = Modal.success({
                                title: '支付成功！',
                                content: '',
                                onOk() {
                                    _this.removeClassStates(id);
                                }
                            });
                            setTimeout(() => {
                            modal.destroy();
                                _this.removeClassStates(id);
                        }, 3000);
                        }
                    } else {
                        alert(data.info);

                    }

                }
            });
            if (_this.times > 59) {
                clearInterval(timesOut);
                _this.setModal2Visible(false);
            }
            _this.times++;
        }, 2000);

    }
    render() {
        let data = this.state;
        let imgs = this.state.imgs ? <img className="payImgs" src={this.state.imgs}/> :
            <Button type="primary"
                    loading={this.state.iconLoading}
                    onClick={this.enterIconLoading}>
                二维码加载失败点击重新加载
            </Button>;
        return (
            <div className='container youhuiquan paddingBottom20'>
                {/*头部banner*/}
                <div className='container'>
                    <i className="bgLingQuHead"/>
                    {/*<img className='allImages' src="../../images/youhuiquan/banner.png" alt=""/>*/}
                </div>
                {/*内容*/}
                <Modal
                    title="目前只支持微信支付"
                    wrapClassName="vertical-center-modal"
                    visible={this.state.modal2Visible}
                    onOk={() => this.setModal2Visible(false)}
                    onCancel={() => this.setModal2Visible(false)}
                    footer={[<Button key="back" onClick={() => this.setModal2Visible(false)}>取消支付</Button>, null]}
                >
                    {imgs}
                </Modal>
                <div className='contain youhuiquan_bg'>
                    {
                        data.youhuiquan.map(function (item, i) {
                            let youhuyan = data.youhuiquan[i].list ? data.youhuiquan[i].list.map(function (item, i) {
                                let isYes = item.is_lq === 1 ? 'youhuiquan_img2 youhuiquan_li relative' : 'youhuiquan_li relative';

                                let isOk = item.is_lq === 1 ?
                                    <Link to='./Youhuiquan' className='personal_Youhuiquan_title_div1_p_a1'>
                                        我的优惠券
                                    </Link> : <a className='personal_Youhuiquan_title_div1_p_a1'
                                                 onClick={(e) => {
                                                     this.lingqu(e,item.id)
                                                 }}>立即领取</a>;

                                let numbers;
                                if(item.type===`4`){
                                    numbers = <div>
                                        <span className='personal_Youhuiquan_title_div1_p_span12'>{item.give_more}{item.rebate}</span>
                                        <span className='youhuiquan_span'>折</span>
                                    </div>
                                }else if(item.type===`1`){
                                    numbers = <div>
                                        <span className='personal_Youhuiquan_title_div1_p_span'>￥</span>
                                        <span className='personal_Youhuiquan_title_div1_p_span12'>{item.give_more}{item.rebate}</span>
                                    </div>
                                }
                                let moneys;
                                if(item.is_virtual === 1){
                                    isOk=item.is_lq === 1 ?
                                        <Link to='./Youhuiquan' className='personal_Youhuiquan_title_div1_p_a1'>
                                            我的优惠券
                                        </Link> : <a className='personal_Youhuiquan_title_div1_p_a1'
                                                     onClick={(e) => {
                                                         this.lingquGomai(e,item.id)
                                                     }}>立即购买</a>

                                    moneys=<div>
                                        售价: {item.price}
                                    </div>
                                }
                                return (
                                    <li key={item.id+'lin1'} className={isYes} data={item.id} data-index={item.type} data-a={item.is_lq}>
                                        <div className='personal_Youhuiquan_title_div1_p'>
                                            {numbers}

                                            <span className='personal_Youhuiquan_title_div1_p_span9'></span>
                                            <span className='personal_Youhuiquan_title_div1_p_span3'>优惠券 <span
                                                className='white1'>【满{item.buy_more}元可以使用】</span></span>
                                            <span
                                                className='personal_Youhuiquan_title_div1_p_span11'>{item.group_title}可用 </span>
                                            <span
                                                className='personal_Youhuiquan_title_div1_p_span10'>有效期【{item.start_time}-{item.end_time}】</span>
                                            {moneys}
                                            {isOk}

                                            {/*<img src={require("../../images/youhuiquan/dazhe.png")} alt=""*/}
                                                 {/*className='personal_Youhuiquan_title_div1_p_img display'/>*/}
                                        </div>
                                    </li>
                                )
                            }, this) : null;
                            return (
                                <div key={i+'lin2'} className='youhuiquan_con'>
                                    <div className='youhuiquan_con_title'>{item.name}</div>
                                    <ul>
                                        {youhuyan}
                                        <div className='clear'></div>
                                    </ul>
                                </div>
                            )
                        }, this)
                    }
                </div>
                <div className='contain marginTop20 youhuiquan_bg'>
                    <div className='youhuiquan_con'>
                        <p className='font20'>优惠券说明：</p>
                        <p>1.优惠券不能兑换现金，优惠券金额不能开具发票。</p>
                        <p>2.优惠券应在券面标明的有效期内使用，过期作废。</p>
                        <p>3.如使用满减类优惠券的订单发生售后退货，优惠券不予退还。此外，如有其它明确不予退还优惠券的情形时则不予退还。</p>
                        <p>4.如淘药网已发放的优惠券存在显示公平等不符合运营目的的情形（包括但不限于发券类别失误、价格配置失误），淘药网有权将您的优惠券或使用优惠券的订单进行冻结或关闭。您已领取未使用的优惠券将进行冻结；已使用优惠券并支付的订单，
                            将按交易失败处理，您已实际支付的款项将进行退款，优惠券不予退还。</p>
                        <p>5.优惠券券面对同一用户领取优惠券有规定时，如您违反该规定，淘药网有权将您已使用优惠券的订单关闭并按交易失败处理，您已实际支付的款项将进行退款，优惠券不予退还。同一用户是指：根据用户登录或使用的淘药网账号，
                            淘药网根据其关联信息判断实际为同一用户的。关联信息包括但不限于：同一手机号或同一支付账号或同一身份证号或同一设备号。</p>
                        <p>
                            6.优惠券的具体使用应满足每张优惠券券面标明的使用规则。
                        </p>
                        <p>7.优惠券的最终解释权归聚创淘药网所有。</p>
                    </div>
                </div>
            </div>
        )
    }

    componentDidUpdate() {

    }
}

export default Lingqu;
