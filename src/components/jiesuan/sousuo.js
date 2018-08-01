import React from 'react';
import {withRouter, Link} from "react-router-dom";
import InterfaceUtil from '../../util/InterfaceUtil';
import $ from 'jquery';
import CoojiePage from '../../util/CoojiePage';
import {PubSub} from "pubsub-js";


class Jiesuan1 extends React.Component {
    constructor(props) {
        super(props); //调用父类的构造方法；
         this.username = CoojiePage.getCoojie('username');
        this.token = CoojiePage.getCoojie('token');
        this.member_id = CoojiePage.getCoojie('user_id');
        this.cid = CoojiePage.getCoojie('cid');
        this.state = {
            feiyong1: {}
        }
    }


    componentDidMount() {
        var a = document.getElementsByClassName('jiesuan_sousuo');
        var b = a[0].offsetTop;
        b = b + 192;
        var c = document.body.offsetHeight;
        var d = b - c;
        window.onscroll = function () {
            if (window.scrollY < d) {
                $('.jiesuan_sousuo').eq(0).attr('class', 'container jiesuan_sousuo marginBottom20 jiesuan_sousuo_current')
            } else {
                $('.jiesuan_sousuo').eq(0).attr('class', 'container jiesuan_sousuo marginBottom20')
            }
        }


        var username = CoojiePage.getCoojie('username');
        var token = CoojiePage.getCoojie('token');
        var user_id = CoojiePage.getCoojie('user_id');
        var user_type = CoojiePage.getCoojie('user_type');
        var jylx = CoojiePage.getCoojie('jylx');
        var cid = CoojiePage.getCoojie('cid');
        const that = this;
        //  广告位
        $.ajax({
            url: InterfaceUtil.getUrl(29),
            type: "post",
            data: InterfaceUtil.addTime({
                "user_id": user_id, "token": token, "cart_id": cid
            }),
            dataType: "json",
            success: function (data) {
                if (data.data.length == 0) {

                } else {
                    that.setState({
                        feiyong1: data.data
                    });
                }
            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {

            }
        });
    }
    componentWillUnmount(){
        window.onscroll = '';

    }
    chuangjian(e) {
        // var a =document.getElementsByClassName('jiesuan_sel');
        var b = $('.jiesuan_sel').eq(0).val();
        var bz = $('.jiesuan_div_div4_inp').val();
        const that=this;
        let cid=CoojiePage.getCoojie('cid');
        $.ajax({
            url: InterfaceUtil.getUrl(17),
            type: "post",
            data: InterfaceUtil.addTime({
                "token":that.token,"user_id":that.member_id,"cart_id":cid,"user_remark":bz,user_coupon_id:b
            }),
            dataType: "json",
            success: function(data){
                console.log(data)
                if(data.code === 1){
                    sessionStorage.setItem("orderno",data.data.order_number);
                    PubSub.publish('PubSubmessage', data.code);
                    that.props.history.push('/Dingdan');
                }else {
                    alert(data.msg);
                }

            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {

            }
        });
    }

    render() {
        const data=this.state.feiyong1;
        return (
            <div className=' jiesuan_sousuo marginBottom20'>
                <div>
                    <div className=' jiesuan_sousuo_div1'>
                        <span className='jiesuan_sousuo_div_span' onClick={(e) => {
                            this.chuangjian(e)
                        }}>提交订单</span>
                    </div>
                    <div className=' jiesuan_sousuo_div'>
                        <div className='font20 jiesuan_sousuo_div_div'>应付总额：
                            <span className='red font20 jiesuan_shifu'>￥{data.price}</span></div>
                        <div className=''>
             <span className='marginRight20'>
             商品总价：￥{data.price}
             </span>
                            <span className='marginRight20'>
               运费：￥{data.freight_price}</span><span
                            className='jiesuan_youhui'>优惠金额：￥0</span></div>
                    </div>
                </div>

                {/*<div className='jiesuan_sousuo_div_xian container'></div>*/}

            </div>

        )
    }

    componentDidUpdate() {

    }
}

export default withRouter(Jiesuan1);
// export default Jiesuan1;
