// require('styles/common.css');
// require('styles/personal/personalZhanneixin.css')
// require('styles/personal/personalWodejifen.css')

import React from 'react';
import Tuijian from '../common/tuijian';
import {Button, Modal, Pagination, Select} from 'antd';
import InterfaceUtil from '../../util/InterfaceUtil';
import CoojiePage from '../../util/CoojiePage';
import Shoppinglist from './Shoppinglist'
import Shoppinglist2 from './Shoppinglist2'
import $ from 'jquery';
import '../../styles/personal/personalCaigou.css'
// import $ from "../../js/jquery.min";
const confirm = Modal.confirm;

//查询事件
function handleChange(value) {

}


class PersonalCaigou extends React.Component {

    state = {
        loading: false,
        visible: false,
    }
    showModal = () => {
        this.setState({
            visible: true,
        });
    }
    handleOk = () => {
        this.setState({loading: true});
        setTimeout(() => {
            this.setState({loading: false, visible: false});
        }, 3000);
    }
    handleCancel = () => {
        this.setState({visible: false});
    }

    constructor(props) {
        super(props); //调用父类的构造方法；
        this.state = {
            zncg: [],
            lujin: InterfaceUtil.getImgUrl(),
            checked: '',
            cons: '',
            page: 1,
        }
    }

    //全选
    quanxuan(e) {
        var a = $('.quanxuan').eq(0).prop('checked');
        if (a == true) {
            $('.shoucang_inp').prop('checked', true);
            $('.quanxuan1').eq(0).prop('checked', true);
        } else if (a == false) {
            $('.shoucang_inp').prop('checked', false);
            $('.quanxuan1').eq(0).prop('checked', false);
            return;
        }
    }

    quanxuan1(e) {
        var a = $('.quanxuan1').eq(0).prop('checked');
        if (a == true) {
            $('.shoucang_inp').prop('checked', true);
            $('.quanxuan').eq(0).prop('checked', true);
        } else if (a == false) {
            $('.shoucang_inp').prop('checked', false);
            $('.quanxuan').eq(0).prop('checked', false);
            return;
        }
    }

    //加入购物车
    buycar3(e) {
        var a = $('.caigou_tr');
        var value = $('.shoucang_inp');
        var id = [];
        var num = [];
        for (var i = 0; i < a.length; i++) {
            var val = value.eq(i).prop('checked');
            if (val == true) {
                var b = a.eq(i).attr('data');
                var c = a.eq(i).attr('data-index');
                id.push(b);
                num.push(c);
            }
        }

        // 请求
        function getCookie(cookieName) {
            var strCookie = document.cookie;
            var arrCookie = strCookie.split("; ");
            for (var i = 0; i < arrCookie.length; i++) {
                var arr = arrCookie[i].split("=");
                if (cookieName == arr[0]) {
                    return arr[1];
                }
            }
            return "";
        }

        var username = getCookie('username');
        var token = getCookie('token');
        const that = this;
        //智能采购
        id = JSON.stringify(id)
        num = JSON.stringify(num)
        $.ajax({
            url: InterfaceUtil.getUrl(32),
            type: "post",
            data: {
                "username": username, "token": token, "goods_id": id, "goods_sl": num
            },
            dataType: "json",
            success: function (data) {
                if (data.data == '1') {
                    var ok = document.getElementsByClassName('buycar_ok');
                    ok[0].className = 'buycar_ok';
                    var timer1 = window.setTimeout(function () {
                        ok[0].className = 'buycar_ok display';
                    }, 3000);
                } else {
                    if (data.info != 'token过期') {
                        var no = document.getElementsByClassName('buycar_no');
                        var no_span = document.getElementsByClassName('buycar_no_con_span');
                        no[0].className = 'buycar_no';
                        no_span[0].innerText = data.info;
                    } else {
                        window.location.href = '#/Denglu';
                    }
                }
            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {

            }
        });
        // ajax.open('post',"http://192.168.1.49/index.php/index/user_order/addcartall",false);
        // ajax.open('post',InterfaceUtil.getUrl(32),false);
        // ajax.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
        // ajax.onreadystatechange = function() {
        //   if (ajax.readyState == 4 && ajax.status == 200 || ajax.status == 304) { // readyState == 4说明请求已完成
        //     var data=ajax.responseText;
        //     data=JSON.parse(data);

        //   }
        // };


        // ajax.send("username="+username+"&token="+token+"&goods_id="+id+"&goods_sl="+num);
    }

    buycar4(e) {
        var id = e.target.parentNode.parentNode.getAttribute('data');
        var num = e.target.parentNode.parentNode.getAttribute('data-index');

        // 请求


        var token = CoojiePage.getCoojie('token');
        var user_id = CoojiePage.getCoojie('user_id');
        const that = this;
        //智能采购
        $.ajax({
            url: InterfaceUtil.getUrl(11),
            type: "post",
            data: InterfaceUtil.addTime({
                "token": token, "goods_id": id, "user_id": user_id
            }),
            dataType: "json",
            success: function (data) {
                if (data.code == '1') {
                    CoojiePage.setBuyCarOk()
                } else {
                    if (data.msg != 'token过期') {
                        var no = document.getElementsByClassName('buycar_no');
                        var no_span = document.getElementsByClassName('buycar_no_con_span');
                        no[0].className = 'buycar_no';
                        no_span[0].innerText = data.msg;
                    } else {
                        window.location.href = '#/Denglu';
                    }
                }
            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {

            }
        });
    }

    //分页
    fenye(e) {
        this.setState({
            page: e
        }, () => this.startAjax())

    }

    componentDidMount() {
        this.startAjax()
    }

    startAjax() {
        var token = CoojiePage.getCoojie('token');
        var user_id = CoojiePage.getCoojie('user_id');
        const that = this;
        //智能采购
        $.ajax({
            url: InterfaceUtil.getUrl(33),
            type: "post",
            data: InterfaceUtil.addTime({
                "token": token, "user_id": user_id, "page": that.state.page, "pageSize": 10
            }),
            dataType: "json",
            success: function (data) {

                if (data.code == 1) {
                    // that.setState({
                    //     zncg: data.data.list,
                    //     cons: data.data.cons
                    // });
                    that.refs.shoucang.className = 'display'
                }
            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {

            }
        });
    }
    onClicks(e){
        $('.zcUl').find('li').removeClass();
        $(e.target).addClass('orange');
        let index=$(e.target).attr('data-class');
        $('.zcB').hide();
        $('.'+index).show();
    }
    render() {
        return (
            <div className=' width988 floatRight'>
                {/*最近订单标题*/}
                <div className='personal_Wodejifen_title marginBottom20 margin13'>
                    <p className='marginLeft20 fontFamily fontWeight floatleft font20 '>智能采购</p>
                    <ul className="zcUl">
                        <li
                            data-class="a"
                            className='orange'
                            onClick={this.onClicks}
                        >
                            智能采购
                        </li>
                        <li
                            data-class="b"
                            onClick={this.onClicks}
                        >
                            采购计划
                        </li>
                        <li
                            data-class="c"
                            onClick={this.onClicks}
                        >
                            求购信息
                        </li>
                    </ul>
                </div>

                {/*内容*/}
                <div className="zcB a">
                    <div className='white personal_xiangqing_title'>
                        {/*输入框*/}
                        <div className='personal_Dindan_con_inp'>
                            <div className="example-input floatRight marginRight20 ">
                                <Select defaultValue='全部' style={{width: 200}} onChange={handleChange}>
                                    <option value="全部">全部</option>
                                    <option value="近一周">近一周</option>
                                    <option value="近一月">近一月</option>
                                    <option value="近三月">近三月</option>
                                    <option value="近半年">近半年</option>
                                    <option value="近一年">近一年</option>
                                    <option value="一年以前">一年以前</option>
                                </Select>
                                <Button icon="search" style={{marginLeft: 10}}>查询</Button>
                            </div>
                            <div className='clear'></div>
                        </div>
                        {/*全选删除*/}
                        <div className='personal_zhanneixin_top marginLeft20'>
                            <p>
                            <span className='personal_wodechoucang_top_span marginRight5'><
                                input type="checkbox"
                                      onClick={(e) => {
                                          this.quanxuan(e)
                                      }}
                                      className='quanxuan'/></span>
                                <span className='personal_zhanneixin_top_span1 cursor'>全选</span>
                                <span className='personal_zhanneixin_top_span4 cursor' onClick={(e) => {
                                    this.buycar3(e)
                                }}>加入购物车</span>
                            </p>
                        </div>
                        {/*输入框*/}
                        <table className='personal_Caigou_table marginTop20'>
                            <thead>
                            <tr>
                                <th width="90px">商品</th>
                                <th width="167px">商品名称</th>
                                <th width="166px">生产厂家</th>
                                <th width="90px">规格</th>
                                <th width="75px">参与活动</th>
                                <th width="50px">单位</th>
                                <th width="80px">当前价格</th>
                                <th width="85px">采购次数</th>
                                <th width="145px">操作</th>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                this.state.zncg.map(function (item) {
                                    return (
                                        <tr data={item.id} data-index={item.min_buy} className='caigou_tr'>
                                            <td>
                                                <input type="checkbox" className='marginRight5 shoucang_inp'/>
                                                <img src={this.state.lujin + item.image} alt=""
                                                     className='xiangqing_img'/>
                                            </td>
                                            <td className='hid'>{item.name}</td>
                                            <td className='hid'>{item.enterprise}</td>
                                            <td className='hid'>{item.standard}</td>
                                            <td>/</td>
                                            <td>{item.bzdw}</td>
                                            <td>{item.price}</td>
                                            <td>{item.c}</td>
                                            <td>
                                                <div className='personal_Caigou_table_btn' onClick={(e) => {
                                                    this.buycar4(e)
                                                }}>加入购物车
                                                </div>
                                            </td>
                                        </tr>
                                    )
                                }, this)
                            }
                            <tr rowSpan={9} className='shoucang' ref='shoucang'>
                                <td colSpan={9}>
                                    <p className='font20'>亲，您还没有收藏哦~</p>
                                    <p className='personalCon1_table_tr_p'><a href=""
                                                                              className='personalCon1_table_td'>去产品中心</a>
                                    </p>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                        <div className='personal_zhanneixin_top marginTop20 marginLeft20'>
                            <p>
                            <span className='personal_wodechoucang_top_span marginRight5'><input type="checkbox"
                                                                                                 className='quanxuan1'
                                                                                                 onClick={(e) => {
                                                                                                     this.quanxuan1(e)
                                                                                                 }}/></span>
                                <span className='personal_zhanneixin_top_span1 cursor'>全选</span>
                                <span className='personal_zhanneixin_top_span4 cursor' onClick={(e) => {
                                    this.buycar3(e)
                                }}>加入购物车</span>
                            </p>
                        </div>
                        {/*分页*/}
                        <div className='width988 marginTop20 marginBottom20 paddingBtm20'>
                        <span className='floatRight personal_zhanneixin_title_div3_span3'><Pagination
                            showQuickJumper={true} defaultCurrent={1} defaultPageSize={12} total={this.state.cons}
                            onChange={(e) => {
                                this.fenye(e)
                            }}/></span>
                            <div className='clear'></div>
                        </div>
                        <div className='xian'></div>
                    </div>
                </div>
                <div className="zcB b display">
                    <Shoppinglist/>
                </div>
                <div className="zcB c display">
                    <Shoppinglist2/>
                </div>
                <div className="blBoxs ">
                    <Tuijian data='5'/>
                </div>
                {/*推荐*/}

            </div>
        );
    }

    componentDidUpdate() {

    }
}


export default PersonalCaigou;
