// import $ from '../../js/jquery.min';
import $ from 'jquery';


import React from 'react';
import {Link, withRouter} from "react-router-dom";
import '../../styles/personal.css'

class personalBox extends React.Component {

    //跳转到订单页面
    dingdan(e) {
        if (e.target.innerText == '待付款订单') {
            document.cookie = 'ddzt=' + 1;
            this.props.history.push('/Dindan?待付款订单')
        } else if (e.target.innerText == '待收货订单') {
            document.cookie = 'ddzt=' + 2;
            this.props.history.push('/Dindan?待收货订单')
        } else if (e.target.innerText == '已完成订单') {
            document.cookie = 'ddzt=' + 4;
            this.props.history.push('/Dindan?已完成订单')
        } else if (e.target.innerText == '已取消订单') {
            document.cookie = 'ddzt=' + 5;
            this.props.history.push('/Dindan?已取消订单')
        } else if (e.target.innerText == '所有订单') {
            document.cookie = 'ddzt=' + '';
            this.props.history.push('/Dindan?所有订单')
        }
    }

    //侧边栏点击事件
    color1(e) {
        // console.log(e.target);
        $('.color1_qiehuan,.color1_qiehuan span').removeClass('red');
        $(e.target).addClass('red');
    }

    render() {
        return (
            <div className='floatleft'>
                {/*会员中心*/}
                <div>
                    <div className='personal_title'>
                        <Link to="/Personal" className='black'>
                            <div className='personal_title1 floatleft'>会员中心</div>
                        </Link>
                        <ul className='personal_title_ul floatleft'>
                            <li>
                                <img className='myPageImg' src={require('../../images/mypage/myorder.png')} alt=""/>
                                <span>我的订单</span>
                                <div className='dashed marginTop10'/>
                                <ul className='personal_title_ul1'>
                                    <li onClick={(e) => {
                                        this.dingdan(e);
                                        this.color1(e)
                                    }} className='color1_qiehuan'>
                                        <span>所有订单</span>
                                        <i className='myPageI'/>
                                    </li>
                                    <li onClick={(e) => {
                                        this.dingdan(e);
                                        this.color1(e)
                                    }} className='color1_qiehuan'>
                                        <span>待付款订单</span>
                                        <i className='myPageI'/>
                                    </li>
                                    <li onClick={(e) => {
                                        this.dingdan(e);
                                        this.color1(e)
                                    }} className='color1_qiehuan'>
                                        <span>待收货订单</span>
                                        <i className='myPageI'/>
                                    </li>
                                    <li onClick={(e) => {
                                        this.dingdan(e);
                                        this.color1(e)
                                    }} className='color1_qiehuan'>
                                        <span>已完成订单</span>
                                        <i className='myPageI'/>
                                    </li>
                                    <li onClick={(e) => {
                                        this.dingdan(e);
                                        this.color1(e)
                                    }} className='color1_qiehuan'>
                                        <span>已取消订单</span>
                                        <i className='myPageI'/>
                                    </li>
                                    {/*<li>退货</li>*/}
                                </ul>
                            </li>
                            <li>
                                <img className='myPageImg' src={require('../../images/mypage/mynews.png')} alt=""/>
                                <span>我的消息</span>

                                <div className='dashed marginTop10'/>
                                <ul className='personal_title_ul1'>
                                    <li><Link to="/Zhanneixin" className='black'>
                                        <span>站内信</span>
                                        <i className='myPageI'/>
                                    </Link></li>
                                </ul>
                            </li>
                            <li className=''>
                                <img className='myPageImg' src={require('../../images/mypage/mynews.png')} alt=""/>
                                <span>我的账户</span>
                                <div className='dashed marginTop10'/>
                                <ul className='personal_title_ul1'>
                                    <li><Link to="/Jibenxinxi" className='black color1_qiehuan' onClick={(e) => {
                                        this.color1(e)
                                    }}>
                                        <span>基本资料</span>
                                        <i className='myPageI'/>
                                    </Link></li>
                                    <li><Link to="/Wodeshoucang" className='black color1_qiehuan' onClick={(e) => {
                                        this.color1(e)
                                    }}>
                                        <span>我的收藏</span>
                                        <i className='myPageI'/>
                                    </Link></li>
                                    <li><Link to="/Dianzihetong" className='black color1_qiehuan' onClick={(e) => {
                                        this.color1(e)
                                    }}>
                                        <span>电子合同</span>
                                        <i className='myPageI'/>
                                    </Link></li>
                                    <li><Link to="/Wodejifen" className='black color1_qiehuan' onClick={(e) => {
                                        this.color1(e)
                                    }}>
                                        <span>我的积分</span>
                                        <i className='myPageI'/>
                                    </Link></li>
                                    <li><Link to="/Caigou" className='black color1_qiehuan' onClick={(e) => {
                                        this.color1(e)
                                    }}>
                                        <span>智能采购</span>
                                        <i className='myPageI'/>
                                    </Link></li>
                                    <li>
                                        <span>资质下载</span>
                                        <i className='myPageI'/>
                                    </li>
                                    <li>
                                        <Link to="/Youhuiquan" className='black color1_qiehuan' onClick={(e) => {
                                            this.color1(e)
                                        }}>
                                            <span>优惠券</span>
                                            <i className='myPageI'/>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/all/person/Balance" className='black color1_qiehuan' onClick={(e) => {
                                            this.color1(e)
                                        }}>
                                            <span>余额</span>
                                            <i className='myPageI'/>
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                        <div className='clear'/>
                    </div>

                </div>
            </div>
        );
    }

}


export default withRouter(personalBox);