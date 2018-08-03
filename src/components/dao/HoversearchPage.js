import React, {Component} from 'react';
// import { Input } from 'antd';
import {Input} from 'antd';
import {PubSub} from 'pubsub-js'
import LoginPage from '../../util/LoginPage';
import InterfaceUtil from '../../util/InterfaceUtil';
import CoojiePage from '../../util/CoojiePage';
import $ from 'jquery';
import {Link, withRouter} from 'react-router-dom';
import "../../styles/dao/hoversearchpage.css";

const Search = Input.Search;

class HoversearchPage extends Component {
    constructor(props) {
        super(props);
        this.loginPage = new LoginPage();
        this.state = {
            car: '0',
            xianshi: [],
            top: [],
            values: '',
            scrollClass: 'containBoxs display',
        }
    }

    HoverSousuo(e) {
        var val = e.target.value;
        this.setState({
            values: val
        })
        var a = e.target.value;

        if (a == '') {
            $('.sousuokuang2').addClass('display')
        } else {
            $('.sousuokuang2').removeClass('display');
            const that = this;
            //  广告位
            $.ajax({
                // url:'http://192.168.1.49/index.php/index/user/user_reg',
                url: InterfaceUtil.getUrl(63),
                type: 'post',
                dataType: 'json',
                data: InterfaceUtil.addTime({
                    name:a
                }),
                beforeSend: function (xhr) {
                },
                success: function (data, textStatus, jqXHR) {

                    if (data.data.length == 0) {

                    } else {
                        that.setState({
                            xianshi: data.data
                        });
                    }

                }

            })
        }
    }

    sousuo1(e) {
        var a = e.target.innerText;
        // var b =e.target.parentNode.previousSibling;
        // b.setAttribute('value',a);
        // b.value=a;
        this.setState({
            values: a,
        }, () => {
            $('.hoverSeach input').focus();
        })

    }

    sousuo2(e) {
        // var a =e.target.value;

        // // location.replace('#/Chanpinzhongxin?titles='+a);
        if (!e || e == '') {
            alert('搜索不能为空');
        } else {
            this.props.history.push('/Chanpinzhongxin?&title=' + encodeURI(e))
        }
    }

    componentDidMount() {
        var user_id = CoojiePage.getCoojie('user_id');
        var token = CoojiePage.getCoojie('token');
        this.bycarNumber(user_id, token);

        PubSub.subscribe('PubSubmessage', () => {
            this.bycarNumber(user_id, token);
        });
        var _this = this;
        window.onscroll = function () {
            let a = $('.louceng_top');
            let b = $('.celan');
            let c = a.length;
            let scrollClass;

            if (window.scrollY < 204) {
                scrollClass = "containBoxs display";
            } else if (window.scrollY < 800) {
                b.eq(0).attr('class', 'celan display');
                // b[0].className='celan display'
                scrollClass = 'containBoxs';
            } else if (window.scrollY < 1250) {
                scrollClass = 'containBoxs';
                for (var i = 0; i < a.length; i++) {
                    b.eq(0).attr('class', 'celan')
                    // b[0].className='celan'
                    a[i].className = 'louceng_top';
                    a[i].firstChild.className = '';
                    a[0].className = 'celan_current louceng_top';
                    a[0].firstChild.className = 'celan_p_current';
                }
            } else if (window.scrollY < 2100) {
                scrollClass = 'containBoxs';
                for (var i = 0; i < a.length; i++) {
                    b[0].className = 'celan'
                    a[i].className = 'louceng_top';
                    a[i].firstChild.className = '';
                    a.eq(1).attr('class', 'celan_current louceng_top')
                    a.eq(1).children().attr('class', 'celan_p_current')
                    // a[1].className='celan_current louceng_top';
                    // className='celan_p_current';
                }
                ;
            } else if (window.scrollY < 2690) {
                scrollClass = 'containBoxs';
                for (var i = 0; i < a.length; i++) {
                    b[0].className = 'celan'
                    a[i].className = 'louceng_top';
                    a[i].firstChild.className = '';
                    a.eq(2).attr('class', 'celan_current louceng_top')
                    a.eq(2).children().attr('class', 'celan_p_current')
                    // a[2].className='celan_current louceng_top';
                    // a[2].firstChild.className='celan_p_current';
                };
            } else if (window.scrollY < 3270) {
                scrollClass = 'containBoxs';
                for (var i = 0; i < a.length; i++) {
                    b[0].className = 'celan'
                    a[i].className = 'louceng_top';
                    a[i].firstChild.className = '';
                    a.eq(3).attr('class', 'celan_current louceng_top')
                    a.eq(3).children().attr('class', 'celan_p_current')
                    // a[3].className='celan_current louceng_top';
                    // a[3].firstChild.className='celan_p_current';
                };
            } else if (window.scrollY < 3850) {
                scrollClass = 'containBoxs';
                for (var i = 0; i < a.length; i++) {
                    b[0].className = 'celan'
                    a[i].className = 'louceng_top';
                    a[i].firstChild.className = '';
                    a.eq(4).attr('class', 'celan_current louceng_top')
                    a.eq(4).children().attr('class', 'celan_p_current')
                    // a[4].className='celan_current louceng_top';
                    // a[4].firstChild.className='celan_p_current';
                };
            } else if (window.scrollY < 4200) {
                scrollClass = 'containBoxs';
                for (var i = 0; i < a.length; i++) {
                    b[0].className = 'celan'
                    a[i].className = 'louceng_top';
                    a[i].firstChild.className = '';
                    a.eq(5).attr('class', 'celan_current louceng_top')
                    a.eq(5).children().attr('class', 'celan_p_current')
                };
            } else if (window.scrollY < 4600) {
                scrollClass = 'containBoxs';
                for (var i = 0; i < a.length; i++) {
                    b[0].className = 'celan'
                    a[i].className = 'louceng_top';
                    a[i].firstChild.className = '';
                    a.eq(6).attr('class', 'celan_current louceng_top')
                    a.eq(6).children().attr('class', 'celan_p_current')
                    // a[6].className='celan_current louceng_top';
                    // a[6].firstChild.className='celan_p_current';
                };
            } else {
                scrollClass = 'containBoxs';
            }
            if (scrollClass !== _this.state.scrollClass) {

                _this.setState({
                    scrollClass: scrollClass
                })
            }
        }
    }

    componentWillUnmount() {
        PubSub.unsubscribe('PubSubmessage');
        window.onscroll = "";

    }

    bycarNumber(id, token) {
        let that = this;
        $.ajax({
            url: InterfaceUtil.getUrl(0),
            type: 'post',
            dataType: 'json',
            data: InterfaceUtil.addTime({
                user_id:id,
                token:token
            }),
            beforeSend: function (xhr) {
            },
            success: function (data, textStatus, jqXHR) {
                if (data.data.length == 0) {

                } else {
                    if (data.data.cart_count != undefined) {
                        that.setState({
                            car: data.data.cart_count,
                        });
                    }

                }

            }

        })
    }

    headConBlur() {
        setTimeout(function () {
            $('.sousuokuang2').addClass('display')
        }, 300)

    }

    render() {
        // scrollClass=scrollTop>706?'containBoxs':'containBoxs display';
        return <div className={this.state.scrollClass}>
            <div>
                <div className='logo_c'>
                    <Link to="/">
                        <img className='headLogoB' src={require("../../images/head/logoB.png")} alt=""/>
                    </Link>
                </div>
                <div className='logo_b floatleft relative '>
                    {/*<input type="text" placeholder='拼音首字母检索或者中文检索' className='hover_search floatleft'*/}
                    {/*onChange={(e)=>{this.HoverSousuo(e)}}*/}
                    {/*onBlur={()=>this.headConBlur()}*/}
                    {/*/>*/}
                    <Search className='hoverSeach'
                            placeholder="拼音首字母检索或者中文检索" enterButton="搜索" size="large"
                            onChange={(e) => {
                                this.HoverSousuo(e)
                            }}
                            onBlur={() => this.headConBlur()}
                            onSearch={(value) => {
                                this.sousuo2(value)
                            }}
                            value={this.state.values}
                    />

                    <ul className='sousuokuang2 display'>
                        {
                            this.state.xianshi.map(function (item, i) {
                                return (
                                    <li key={item.id} onClick={(e) => {
                                        this.sousuo1(e)
                                    }}>{item.name}</li>
                                )
                            }, this)
                        }
                    </ul>
                    {/*<input type="button" value='搜索' className='h_btn floatleft font16 cursor' onClick={(e)=>{this.sousuo2(e);}}/>*/}

                    <span className='clear'></span>
                </div>
                {/*购物车*/}
                <div className='head_car floatleft' onClick={() => this.loginPage.loginGo('/Buycar', this.props)}>
                    <img src={require("../../images/head/gouwuche.png")} className='head_car_img' alt=""/>
                    <span className='marginLeft5'>购物车<span className='red'>（{this.state.car}）</span></span>
                </div>
                <div className="clear"></div>
            </div>
        </div>
    }
}

export default withRouter(HoversearchPage);
