import React from 'react';
import '../../styles/common.css';
import '../../styles/header.css';
import {withRouter, Link} from "react-router-dom";
import InterfaceUtil from '../../util/InterfaceUtil';
import CoojiePage from '../../util/CoojiePage';
import LoginPage from '../../util/LoginPage';
import {PubSub} from 'pubsub-js';
import $ from 'jquery';
import {Input} from 'antd';

const Search = Input.Search;

class Headcon extends React.Component {
    constructor(props) {
        super(props); //调用父类的构造方法；
        this.pubsub_token;
        this.loginPage = new LoginPage();
        this.state = {
            car: '0',
            xianshi: [],
            top: [],
            values: '',
        }
    }

    sousuo(e) {
        var a = e.target.value;
        this.setState({
            values: a
        })
        // console.log(a)
        if (a == '') {
            $('.sousuokuang').addClass('display')
        } else {
            $('.sousuokuang').removeClass('display');
            const that = this;
            //  广告位
            $.ajax({
                type: "post",
                url: InterfaceUtil.getUrl(1),
                data: {
                    "key": a
                },
                dataType: "json",
                success: function (data) {
                    var data = data;
                    if (data.data.length == 0) {

                    } else {
                        that.setState({
                            xianshi: data.data.search
                        });
                    }
                }
            });
        }
    }

    sousuo1(e) {

        var a = e.target.innerText;
        this.setState({
            values: a,
        }, () => {
            $('.h_search input').focus();
        })
    }

    sousuo2(e) {
        if (!e || e == '') {
            alert('搜索不能为空');
        } else {
            $('.sousuokuang').addClass('display');
            this.props.history.push('/Chanpinzhongxin?&title=' +encodeURI(e))
        }

    }

    componentDidMount() {


        var user_type = CoojiePage.getCoojie('user_type');
        var id = CoojiePage.getCoojie('user_id');
        const that = this;
        //  广告位
        $.ajax({
            url: InterfaceUtil.getUrl(1),
            type: "post",
            data: {},
            dataType: "json",
            success: function (data) {
                //callback;
                var data = data;
                // data=JSON.parse(data);
                // console.log(data);
                that.setState({
                    top: data.data.top,
                });
            }
        });
        this.bycarNumber(id, user_type);
        // this.pubsub_token = PubSub.subscribe('PubSubmessage', function () {
        //     this.bycarNumber(id, user_type);
        // }.bind(this));
        PubSub.subscribe('PubSubmessage',() =>{
            this.bycarNumber(id, user_type);
        });
    }

    componentWillUnmount() {
        PubSub.unsubscribe('PubSubmessage')
    }

    bycarNumber(id, user_type) {
        let that = this;
        $.ajax({
            url: InterfaceUtil.getUrl(0),
            type: "post",
            data: {
                'member_id': id,
                "user_type": user_type
            },
            dataType: "json",
            success: function (data) {
                var data = data;

                // console.log(data);
                if (data.data.length == 0) {

                } else {
                    if (data.data.cart_number != undefined) {
                        // console.log('aaaa')
                        that.setState({
                            car: data.data.cart_number,
                        });
                    }

                }
            }
        });
    }

    headConBlur() {
        setTimeout(function () {
            $('.sousuokuang').addClass('display')
        }, 300)

    }

    componentWillReceiveProps() {
        var user_type = CoojiePage.getCoojie('user_type');
        var id = CoojiePage.getCoojie('user_id');
        this.bycarNumber(id, user_type);
    }

    render() {
        return (
            <div className='container'>
                <div className='contain head_logo hidden'>
                    <div className='floatleft logo_a'>
                        <Link to="/#" className='black'><img src={require("../../images/logo1.png")} alt=""/></Link>
                    </div>
                    <div className='logo_b floatleft relative'>
                        {/*<input type="text" placeholder='拼音首字母检索或者中文检索' className='h_search floatleft'*/}
                        {/*onChange={(e)=>{this.sousuo(e)}}*/}
                        {/*onBlur={()=>this.headConBlur()}*/}
                        {/*/>*/}
                        <Search className='h_search floatleft'
                                placeholder="拼音首字母检索或者中文检索" enterButton="搜索" size="large"
                                onChange={(e) => {
                                    this.sousuo(e)
                                }}
                                onBlur={() => this.headConBlur()}
                                onSearch={(value) => {
                                    this.sousuo2(value)
                                }}
                                value={this.state.values}
                        />
                        <ul className='sousuokuang display'>
                            {
                                this.state.xianshi.map(function (item, i) {
                                    return (
                                        <li key={i + 'head'} onClick={(e) => {
                                            this.sousuo1(e)
                                        }}>{item.title}</li>
                                    )
                                }, this)
                            }
                        </ul>
                        {/*<input type="button" value='搜索' className='h_btn floatleft font16 cursor' onClick={(e)=>{this.sousuo2(e);}}/>*/}
                        <div className='floatleft head_logo_div'>
                            热门：
                            {
                                this.state.top.map(function (item, i) {
                                    return (
                                        <Link key={item.id + 'head'} to={'/Shangpinxiangqing/?&id=' + item.id}>
                                            <span className='marginRight10'>{item.title}</span>
                                        </Link>
                                    )
                                }, this)
                            }
                        </div>
                        <span className='clear'></span>
                    </div>
                    {/*购物车*/}
                    <div className='head_car floatleft' onClick={() => this.loginPage.loginGo('/Buycar', this.props)}>
                        <img src={require("../../images/head/gouwuche.png")} className='head_car_img' alt=""/>
                        <span className='marginLeft5'>购物车<span className='red'>（{this.state.car}）</span></span>
                    </div>
                    {/*在线客服*/}

                    <div className='head_tel floatleft'>
                        <a href="http://sighttp.qq.com/msgrd?v=1&uin=2885052533">
                            <img src={require("../../images/head/erji.png")} className='floatleft head_tel_img' alt=""/>
                            <div className='floatleft marginLeft5'>
                                <p>欢迎使用</p>
                                <p className='orange'>在线客服</p>
                            </div>
                        </a>
                    </div>

                </div>
            </div>
        )
    }
}

export default withRouter(Headcon);
