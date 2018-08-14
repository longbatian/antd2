import React from 'react';
import '../../styles/common.css';
import '../../styles/header.css';
import {Link, withRouter} from "react-router-dom";
import CoojiePage from '../../util/CoojiePage';
import InterfaceUtil from '../../util/InterfaceUtil';
import LoginPage from '../../util/LoginPage';
import $ from 'jquery';


class HeadTop extends React.Component {
    constructor(props) {
        super(props); //调用父类的构造方法；
        this.loginPage = new LoginPage();
        this.erp_id = CoojiePage.getCoojie('erp_id');
        this.user_id = CoojiePage.getCoojie('user_id');
        this.token = CoojiePage.getCoojie('token');
        this.state = {
            lujin: InterfaceUtil.getImgUrl(),
        }
    }

    rexian(e) {
        $('.head_rexian_ul').removeClass('display');
        $('.head_rexian').addClass('head_rexian_current');
    }

    rexian1(e) {
        $('.head_rexian_ul').addClass('display')
        $('.head_rexian').removeClass('head_rexian_current');
    }

    erweima(e) {
        $('.shoujiban').removeClass('display');
        $('.head_shoujiban').addClass('head_rexian_current');
    }

    erweima1(e) {
        $('.shoujiban').addClass('display')
        $('.head_shoujiban').removeClass('head_rexian_current');
    }

    tuichu(e) {
        InterfaceUtil.delCookie('user_id');
        InterfaceUtil.delCookie('token');
        InterfaceUtil.delCookie('erp_id');
        InterfaceUtil.delCookie('username');
        // this.props.history.push('/Index');
        window.location.reload();
    }

    huiyuan(e) {
        this.loginPage.loginGo('/Personal', this.props);
    }

    componentDidMount() {
        var username = CoojiePage.getCoojie('username');
        if (username == '') {
            var top = document.getElementsByClassName('TOP');
            var denglu = document.getElementsByClassName('denglu');
            top[0].className = 'blue TOP display'
            top[1].className = 'blue TOP display'
            denglu[0].className = 'marginLeft10 denglu'
            denglu[1].className = 'marginLeft10 denglu'
        } else {
            var top = document.getElementsByClassName('TOP');
            var denglu = document.getElementsByClassName('denglu');
            top[0].className = 'blue TOP'
            top[1].className = 'blue TOP'
            denglu[0].className = 'marginLeft10 denglu display'
            denglu[1].className = 'marginLeft10 denglu display'
            var name = document.getElementsByClassName('header_name');
            name[0].innerText = username;
        }
        // this.startAjax()
    }

    // startAjax() {
    //     const _this = this;
    //     $.ajax({
    //         url: InterfaceUtil.getUrl(1),
    //         type: "post",
    //         data: InterfaceUtil.addTime({
    //             user_id: _this.user_id,
    //             token: _this.token,
    //         }),
    //         dataType: "json",
    //         success: function (data) {
    //             console.log(data,data.data[8])
    //         }
    //     })
    // }

    componentWillReceiveProps() {

    }

    render() {
        return (
            <div className='head_box'>
                <div className='contain header_top hidden '>
                    {/*--左边--*/}
                    <div>
                        <span className='blue TOP display'><Link to="/Personal"
                                                                 className='red header_name'>13698224259</Link>：</span>
                        <span><Link to="/Index" className='gray'>您好！欢迎来到【聚创医药网--淘药网】-淘！我所药 |</Link></span>
                        <a className='blue TOP display' onClick={(e) => {
                            this.tuichu(e)
                        }}> 安全退出</a>
                        <span className='marginLeft10 denglu'><Link to="/Denglu" className='blue'>登录</Link></span>
                        <span className='marginLeft10 denglu'><Link to="/Zhuce" className='gray'>注册</Link></span>
                    </div>
                    <ul className='floatRight hidden relative'>
                        <li className='cursor' onClick={(e) => {
                            this.huiyuan(e)
                        }}>会员中心&nbsp;<span>|</span>&nbsp;</li>
                        <li className='gray blue cursor'>
                            <a href='http://scjcyy.e-fapiao.cc:91/Account/Login' target='_target'>
                                电子发票查询&nbsp;<span>|</span>&nbsp;
                            </a>
                        </li>
                        <li className='gray blue cursor'>
                            <a href={'http://www.51yywd.com/User/jsapi?business_id=29603&dwid=' + this.erp_id}
                               target='_target'>
                                质检报告查询&nbsp;<span>|</span>&nbsp;
                            </a>
                        </li>
                        <li className='gray cursor'>
                            <Link to={"/HelpZx?&id=44"}>
                                互联网药品交易许可证
                            </Link>
                        </li>
                        <li
                            className='marginLeft10  head_rexian cursor'
                            onMouseMove={(e) => {
                                this.rexian(e)
                            }}
                            onMouseOut={(e) => {
                                this.rexian1(e)
                            }}>服务热线
                        </li>
                        <li
                            className='marginLeft10 head_shoujiban cursor'
                            onMouseMove={(e) => {
                                this.erweima(e)
                            }}
                            onMouseOut={(e) => {
                                this.erweima1(e)
                            }}>
                            <img src={require("../../images/head/shouji.png")} className='' alt=""/>手机版
                        </li>
                        <div className='head_shouji display'>
                        </div>
                        <ul className='head_rexian_ul display'>

                            <li>终端部：028-83211111</li>
                            <li>医院部：13739496688</li>
                            <li>后勤部：028-83223311</li>
                            {/*<li>药监局：12331</li>*/}
                        </ul>
                        <div className='shoujiban display'>
                            <span className='floatleft marginRight10'><img src={require("../../images/head/btm1.png")}
                                                                           alt=""/>聚创医药网</span>
                            <span className='floatleft'><img src={require("../../images/head/btm2.png")}
                                                             alt=""/>聚创订阅号</span>
                        </div>
                        <span className='clear'></span>
                    </ul>
                    <span className='clear'></span>
                </div>
            </div>
        )
    }
}

export default withRouter(HeadTop);
// export default HeadTop;
