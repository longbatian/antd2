import React from 'react';
import {Link,withRouter} from 'react-router-dom';
import { message } from 'antd';
import InterfaceUtil from './../../util/InterfaceUtil';
import CoojiePage from './../../util/CoojiePage';
import BuycarOk1 from './../../components/common/buycar_ok';
import {PubSub} from 'pubsub-js'
import './components/redemption.css'
import $ from "jquery";

class Redemption extends React.Component {
    constructor(props) {
        super(props);
        this.user_id = CoojiePage.getCoojie('user_id');
        this.token = CoojiePage.getCoojie('token');
        this.img=InterfaceUtil.getImgUrl();
        this.state = {
            list: []
        }
    }

    componentDidMount() {
        const _this = this;
        $.ajax({
            url: InterfaceUtil.getUrl(74),
            type: "post",
            data: InterfaceUtil.addTime({
                user_id: _this.user_id, token: _this.token
            }),
            dataType: "json",
            success: function (data) {
                if (data.code === 1) {
                    _this.setState({
                        list: data.data.list
                    })
                }else {
                    message.warning(data.msg);
                }
            }
        })
    }
    handleClick(e,num){
        const _this = this;
        $.ajax({
            url: InterfaceUtil.getUrl(11),
            type: "post",
            data: InterfaceUtil.addTime({
                user_id: _this.user_id, token: _this.token,goods_num:num,goods_id:e
            }),
            dataType: "json",
            success: function (data) {
                console.log(data);
                if(data.code===1){
                    PubSub.publish('PubSubmessage', data.code);
                    CoojiePage.setBuyCarOk();
                }else {
                    message.warning(data.msg);
                }
            }
        })

    }
    render() {
        const data = this.state.list;
        const datas=this.state;
        let list = data.length > 0 ? data.map((it, i) => {
            let times=InterfaceUtil.fmtDate(it.goods.validity_time);
            return <li key={it.goods_id}>
                <div className="rdliimg">
                    <img src={datas.img+it.goods.image} className="rdimg1" alt={it.goods.name}/>
                    <img src={datas.img+it.traded_goods.image} className="rdimg2" alt={it.traded_goods.name}/>
                    <div className="rdimg3">
                        <p>+{it.traded_price}</p>
                        <p>换{it.traded_goods_num}{it.traded_goods.unit}</p>
                    </div>
                </div>
                <div className="rdTishi">
                    <span>每次购买本品</span>
                    <span>+{it.traded_price}元换{it.traded_goods_num}{it.traded_goods.unit}{it.traded_goods.name}</span>
                </div>
                <div className="rdlicon">
                    <div className="rdlicon_tit">
                        {it.goods.name}
                    </div>
                    <p>{it.goods.enterprise}</p>
                    <p>规格:{it.goods.standard}</p>
                    <p>效期:{times}</p>
                    <p>
                        价格:
                        <span className="colred rdbig">￥{it.goods.activity_price}</span>
                        {/*<span className="rdhen">原价：￥150.00</span>*/}
                    </p>
                    <div
                        className="rdbutton"
                        onClick={()=>this.handleClick(it.goods_id,it.goods_num)}
                    >
                        <span>立即购买</span>
                    </div>
                </div>
            </li>
        }) : null;
        return <div>
            <img src={require('../../images/redemption/02.png')} className="rdImg" alt=""/>
            <div className="rdBox">
                <ul>
                    {/*<li>*/}
                        {/*<div className="rdliimg">*/}
                            {/*<img src={require('../../images/redemption/02.png')} className="rdimg1" alt=""/>*/}
                            {/*<img src={require('../../images/redemption/03.png')} className="rdimg2" alt=""/>*/}
                            {/*<div className="rdimg3">*/}
                                {/*<p>+0.01</p>*/}
                                {/*<p>换4和</p>*/}
                            {/*</div>*/}
                        {/*</div>*/}
                        {/*<div className="rdTishi">*/}
                            {/*<span>每次购买本品</span>*/}
                            {/*<span>+0.01元换直射用克林阿迪我的我的我的</span>*/}
                        {/*</div>*/}
                        {/*<div className="rdlicon">*/}
                            {/*<div className="rdlicon_tit">*/}
                                {/*标题文本文本*/}
                            {/*</div>*/}
                            {/*<p>厂家厂家厂家厂家厂家</p>*/}
                            {/*<p>规格:262626</p>*/}
                            {/*<p>效期:2015151515</p>*/}
                            {/*<p>*/}
                                {/*价格:*/}
                                {/*<span className="colred rdbig">￥128.00</span>*/}
                                {/*<span className="rdhen">原价：￥150.00</span>*/}
                            {/*</p>*/}
                            {/*<div className="rdbutton">*/}
                                {/*<span>立即购买</span>*/}
                            {/*</div>*/}
                        {/*</div>*/}
                    {/*</li>*/}
                    {list}
                </ul>
            </div>
            <BuycarOk1/>
        </div>
    }

}

export default withRouter(Redemption)