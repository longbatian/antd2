import React from 'react';
import {Link} from 'react-router-dom';
import HelpCon from './content';
import InterfaceUtil from '../../util/InterfaceUtil';
import $ from 'jquery'
import '../../styles/helpZx/helpZx.css';

class HelpTitle extends React.Component {
    constructor(props) {
        super(props); //调用父类的构造方法；
        this.state = {
            title: [],
        }
    }

    bangzhu(e) {
        // var id =e.target.getAttribute('data');
        // window.location.href='#/HelpZx?&id='+id;
        // location.reload();
    }

    componentDidMount() {
        this.helpCenterAjax();

    }

    helpCenterAjax() {
        const that = this;
        //  广告位
        $.ajax({
            url: InterfaceUtil.getUrl(19),
            type: "post",
            data: {},
            dataType: "json",
            success: function (data) {
                if (data.data.length == 0) {

                } else {
                    that.setState({
                        title: data.data
                    });
                }
            }
        });
    }

    render() {
        return (
            <div className='contain'>
                <div className='help_div '>
                    <div className='help_div_div'>
                        帮助中心
                    </div>
                    {
                        this.state.title.map(function (item, i) {
                            return (
                                <div>
                                    <div className='help_div_div1'>
                                        <img src={require("../../images/helpZx/sanjiao.png")}
                                             className='marginRight10 marginTop3' alt=""/>{item.names}
                                    </div>

                                    <ul className='help_div_ul'>
                                        {
                                            this.state.title[i].res.map(function (item, i) {
                                                return (
                                                    <li data={item.id} data-index={item.pid} onClick={(e) => {
                                                        this.bangzhu(e)
                                                    }} className='help_div_ul_li'>
                                                        <Link to={'?&id=' + item.id}>
                                                            {item.title}
                                                        </Link>

                                                    </li>
                                                )
                                            }, this)
                                        }

                                    </ul>

                                </div>
                            )
                        }, this)
                    }
                    <div className='help_div_div help_div_div2 marginTop20'>
                        <img src={require("../../images/helpZx/dianhua.png")} className='marginRight10' alt=""/>联系我们
                    </div>
                    <div className='help_div_div3'>
                        <p>客服热线:028-83211111</p>
                        <p>传真:028-83211111</p>
                        <p>网址：www.scjuchuang.com</p>
                        <p>邮编:610036</p>
                        <p>Q Q:2885052533</p>
                    </div>
                </div>
                <HelpCon/>
                <div className='clear'></div>
            </div>
        )
    }

    componentDidUpdate() {
        var li = document.getElementsByClassName('help_div_ul_li');
        for (var i = 0; i < li.length; i++) {
            li[i].className = 'help_div_ul_li';
            var id = li[i].getAttribute('data');
            //获取地址栏的值

            var Zid = InterfaceUtil.getHashParameters().id;
            if (id == Zid) {
                li[i].className = 'help_div_ul_li blue'
                var Fid = li[i].getAttribute('data-index');
                var div = document.getElementsByClassName('help_div_div1');
                var span = document.getElementsByClassName('help_con_div_div_span');
                if (Fid == '1') {
                    var a = div[0].innerText;
                    span[0].innerText = a;
                } else if (Fid == '2') {
                    var a = div[1].innerText;
                    span[0].innerText = a;
                } else if (Fid == '3') {
                    var a = div[2].innerText;
                    span[0].innerText = a;
                } else if (Fid == '4') {
                    var a = div[3].innerText;
                    span[0].innerText = a;
                } else if (Fid == '5') {
                    var a = div[4].innerText;
                    span[0].innerText = a;
                }
            }
        }


    }
}

export default HelpTitle;
