import React from "react";
// import $ from '../../js/jquery.min';
import $ from 'jquery';
import {Link, withRouter} from "react-router-dom";
import InterfaceUtil from '../../util/InterfaceUtil';
// var forge = require('node-forge');
import {Input} from 'antd'
import '../../styles/common.css';
import '../../styles/personal.css';
import '../../styles/denglu/denglu.css'

// let isFocus,isFocus2;
class Denglu1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            isFocus: false,
            isFocus2: false,
        };
    }

    componentDidMount() {

    }

    post() {
        let _this = this;
        let psd = $('.denglu_con_kuang_box_p1_psd').val();
        let username = $('.denglu_con_kuang_box_p1_user').val();
        if (username === '' || !username) {
            alert('请输入账号')
            return false;
        } else {
            if (psd === '' || !psd) {
                alert('请输入密码')
                return false;
            } else {
                let data = {
                    username: username,
                    password: psd,
                };
                $.ajax({
                    // url:'http://192.168.1.49/index.php/index/user/api_login_user',
                    url: InterfaceUtil.getUrl(13),
                    type: 'post',
                    dataType: 'json',
                    data: InterfaceUtil.addTime(data),
                    beforeSend: function (xhr) {
                    },
                    success: function (data, textStatus, jqXHR) {
                        console.log(data)
                        var zhi = $('.denglu_con_kuang_box_p3_mima').prop('checked');
                        if (data.code === 1) {
                            // if (zhi === true) {
                            //     let exp = new Date();
                            //     // exp.setTime(exp.getTime() + 7 * 24 * 60 * 60 * 1000);
                            //     document.cookie = "user_id=" + data.data.id + ";expires=" + exp.toGMTString();
                            //     document.cookie = "username=" + data.data.username + ";expires=" + exp.toGMTString();
                            //     document.cookie = "token=" + data.data.token + ";expires=" + exp.toGMTString();
                            //     // document.cookie = "user_type=" + data.data.user_type + ";expires=" + exp.toGMTString();
                            //     // document.cookie = "jylx=" + data.data.jylx + ";expires=" + exp.toGMTString();
                            // } else {
                            document.cookie = "user_id=" + data.data.user_id;
                            document.cookie = "token=" + data.data.token;
                            document.cookie = "erp_id=" + data.data.erp_id;
                            document.cookie = "username=" + data.data.username;
                            // document.cookie = "user_type=" + data.data.user_type;
                            // document.cookie = "jylx=" + data.data.jylx;

                            // }
                            if (data.data.status == `1`) {
                                _this.props.history.push('/');
                            } else {
                                _this.props.history.push('/InformationPage');
                            }
                        } else {
                            alert(data.info)
                        }
                    },

                })
            }
        }

    }

    qiehuan(e) {
        var a = e.target.parentNode;
        a.className = 'denglu_con_kuang_box display ';
        a.nextSibling.className = 'denglu_con_kuang_box';
    }

    qiehuan1(e) {
        var a = e.target.parentNode;
        a.className = 'denglu_con_kuang_box display ';
        a.previousSibling.className = 'denglu_con_kuang_box';
    }

    qiehuan2(e) {
        var a = e.target.parentNode.parentNode;
        a.className = 'denglu_con_kuang_box display ';
        a.previousSibling.className = 'denglu_con_kuang_box';
    }

    denglu(e) {
        this.post();
        // var _this = this;
        // if (e.keyCode == "13") {
        //
        //     var psd = $('.denglu_con_kuang_box_p1_psd').val();
        //     var username = $('.denglu_con_kuang_box_p1_user').val();
        //     if (username == '') {
        //         alert('请输入账号')
        //         return false;
        //     } else {
        //         if (psd == '') {
        //             alert('请输入密码')
        //             return false;
        //         } else {
        //             $.ajax({
        //                 // url:'http://192.168.1.49/index.php/index/user/api_login_user',
        //                 url: InterfaceUtil.getUrl(13),
        //                 type: 'post',
        //                 dataType: 'json',
        //                 data: {
        //                     username: username,
        //                     userpass: psd,
        //                 },
        //                 beforeSend: function (xhr) {
        //                 },
        //                 success: function (data, textStatus, jqXHR) {
        //                     var zhi = $('.denglu_con_kuang_box_p3_mima').prop('checked');
        //                     // console.log(data);
        //                     if (data.code == 1) {
        //                         // if (zhi == true) {
        //                         //     var exp = new Date();
        //                         //     exp.setTime(exp.getTime() + 7 * 24 * 60 * 60 * 1000);
        //                         //     document.cookie = "user_id=" + data.data.id + ";expires=" + exp.toGMTString();
        //                         //     document.cookie = "username=" + data.data.username + ";expires=" + exp.toGMTString();
        //                         //     document.cookie = "token=" + data.data.token + ";expires=" + exp.toGMTString();
        //                         //     document.cookie = "user_type=" + data.data.user_type + ";expires=" + exp.toGMTString();
        //                         //     document.cookie = "jylx=" + data.data.jylx + ";expires=" + exp.toGMTString();
        //                         //     if (data.data.shzt === 1) {
        //                         //         _this.props.history.push('/InformationPage');
        //                         //     } else {
        //                         //         _this.props.history.push('/Index');
        //                         //     }
        //                         // } else {
        //                             document.cookie = "user_id=" + data.data.id;
        //                             document.cookie = "username=" + data.data.username;
        //                             document.cookie = "token=" + data.data.token;
        //                             document.cookie = "user_type=" + data.data.user_type;
        //                             document.cookie = "jylx=" + data.data.jylx;
        //                             if (data.data.status == 1) {
        //                                 _this.props.history.push('/InformationPage');
        //                             } else {
        //                                 _this.props.history.push('/Index');
        //                             }
        //                         }
        //                     } else {
        //                         alert(data.info)
        //                     }
        //                 },
        //
        //             })
        //         }
        //     }
        // }
    }

    isFocus(key) {
        if (key === 1) {
            this.setState({
                isFocus: !this.state.isFocus
            })
        } else {
            this.setState({
                isFocus2: !this.state.isFocus2
            })
        }

    }

    isBlur(key) {
        if (key === 1) {
            this.setState({
                isFocus: !this.state.isFocus
            })
        } else {
            this.setState({
                isFocus2: !this.state.isFocus2
            })
        }
    }

    render() {
        let isFoucs1 = this.state.isFocus ? 'denglu_con_kuang_box_p1 relative denglu_con_kuang_box_pP' : 'denglu_con_kuang_box_p1 relative';
        let isFoucs2 = this.state.isFocus2 ? 'denglu_con_kuang_box_p1 relative denglu_con_kuang_box_pP' : 'denglu_con_kuang_box_p1 relative';
        return (
            <div className='container bgWhite'>
                {/*头部*/}
                <div className='contain denglu_title'>
                    <Link to="/"><img src={require("../../images/logo1.png")} alt=""
                                      className='denglu_title_img'/></Link>
                    <ul className='denglu_title_ul'>
                        <li className='denglu_title_ul_li'>
                            <a href="http://sighttp.qq.com/msgrd?v=1&uin=2885052533" target="view_window">
                                <p className='denglu_title_ul_p2'>服务QQ</p>
                                <p className='denglu_title_ul_p2'>2885052533</p>
                            </a>
                        </li>
                        <li className='denglu_title_ul_li1'>
                            <p className='denglu_title_ul_p1'>客服电话</p>
                            <p className='denglu_title_ul_p1'>028-83211111</p>
                        </li>
                        <li className='denglu_title_ul_li2'>
                            <p>互联网药品交易服务资格证</p>
                            <p className='denglu_title_ul_p'>川B 20160006</p>
                        </li>
                        <div className='clear'></div>
                    </ul>
                </div>
                {/*内容*/}
                <div className='container denglu_con_bg '>
                    <div className='xian'></div>
                    <div className='contain'>
                        <div className='denglu_con_kuang relative'>
                            <div className='denglu_con_kuang_box'>
                                <p className='denglu_con_kuang_box_p'>欢迎登录</p>
                                <p className={isFoucs1}>
                                    <span className='denglu_con_kuang_box_p1_span'></span>
                                    <input type="text"
                                           className='denglu_con_kuang_box_p1_user'
                                           placeholder='请输入聚创淘药网账号'
                                           onFocus={() => {
                                               this.isFocus(1)
                                           }}
                                           onBlur={
                                               () => {
                                                   this.isBlur(1)
                                               }
                                           }

                                           autoFocus={true}
                                    />
                                </p>
                                <p className={isFoucs2}>
                                    <span className='denglu_con_kuang_box_p1_span1'></span>
                                    <Input type="password"
                                           className='denglu_con_kuang_box_p1_psd'
                                           placeholder='请输入密码'
                                           onPressEnter={(e) => this.post()
                                           }
                                           onFocus={() => {
                                               this.isFocus(2)
                                           }}
                                           onBlur={
                                               () => {
                                                   this.isBlur(2)
                                               }
                                           }
                                    />
                                </p>
                                <p className='denglu_con_kuang_box_p3'>
                                    <span className='denglu_con_kuang_box_p3_span'><input type="checkbox"
                                                                                          className='denglu_con_kuang_box_p3_mima'/> 记住密码</span>
                                    <span className=''><Link to="/Zhuce"
                                                             className='denglu_con_kuang_box_p3_span1'>快速注册</Link></span>
                                    <span className='clear'></span>
                                </p>
                                <p className='denglu_con_kuang_box_p4'>
                                    <button className='denglu_con_kuang_box_btn'
                                            onClick={() => this.post()
                                            }>登录
                                    </button>
                                </p>
                                <p className='denglu_con_kuang_box_p5'>
                                    <span className='denglu_con_kuang_box_p5_span'>忘记密码？</span>
                                    <Link to="/Zhaohui"><span
                                        className='denglu_con_kuang_box_p5_span1'>找回密码</span></Link>
                                </p>
                                <img src={require("../../images/denglu/tishi.png")} alt="" className='denglu_con_img'/>
                                <img src={require("../../images/denglu/erweima.png")} alt="" className='denglu_con_img1'
                                     onClick={(e) => {
                                         this.qiehuan(e)
                                     }}/>
                            </div>


                            <div className='denglu_con_kuang_box display'>
                                <p className='denglu_con_kuang_box_p'>扫码登录</p>
                                <p className='denglu_con_kuang_box_img'><img src="../../images/denglu/erweima1.png"
                                                                             alt=""/></p>
                                <p className='marginTop20 denglu_con_kuang_box_p6'>
                                    <span className='denglu_con_kuang_box_span'>欢迎使用聚创淘药网扫码功能，安全登录</span>
                                </p>
                                <p className='marginTop20 denglu_con_kuang_box_p7'>
                                    <Link to={"/Zhuce"}>
                                        <span>快速注册</span>
                                    </Link>
                                    <span onClick={(e) => {
                                        this.qiehuan2(e)
                                    }} className='floatRight denglu_con_kuang_box_p7_span'>账号登录</span>
                                </p>
                                <img src={require("../../images/denglu/zhanghao.png")} alt=""
                                     className='denglu_con_img'/>
                                <img src={require("../../images/denglu/diannao.png")} alt="" className='denglu_con_img1'
                                     onClick={(e) => {
                                         this.qiehuan1(e)
                                     }}/>
                            </div>

                        </div>
                    </div>
                </div>
                {/*尾部*/}
                <div className='contain'>
                    <ul className='denglu_footer_ul'>
                        <li className='denglu_footer_ul_li'>
                            <Link to={'/HelpZx'}>
                                <p className='denglu_footer_ul_p'>帮助中心</p>
                                <p className='denglu_footer_ul_p2'>查看常见用户问题</p>
                            </Link>
                        </li>
                        <li className='denglu_footer_ul_li1'>
                            <a href="http://www.scjuchuang.com/guanyuwomen.html" target="view_window">
                                <p className='denglu_footer_ul_p'>关于我们</p>
                                <p className='denglu_footer_ul_p2'>了解更多关于我们</p>
                            </a>
                        </li>
                        <li className='denglu_footer_ul_li2'>
                            <p className='denglu_footer_ul_p'>联系我们</p>
                            <p className='denglu_footer_ul_p2'>028-83211111</p>
                        </li>
                        <Link to="/Zhaohui">
                            <li className='denglu_footer_ul_li3'>
                                <p className='denglu_footer_ul_p'>找回密码</p>
                                <p className='denglu_footer_ul_p2'>自助找回账号密码</p>
                            </li>
                        </Link>
                        <div className='clear'/>
                    </ul>
                    <p className='center marginTop20 denglu_banquan1'>《互联网药品信息服务资格证》证书号：（川）-非经营性2015-0039
                        |《互联网药品交易服务资格证》 证书号：蜀ICP备15031161号</p>
                    <p className='center denglu_banquan'>版权所有：四川聚创医药有限公司</p>
                    <p className='center denglu_banquan'>本网站不从事麻醉药品、精神药品、医疗用毒性药品、放射性药品、戒毒药品和医疗机构制剂的产品的交易。</p>
                </div>
            </div>
        );
    }

}


export default withRouter(Denglu1);
