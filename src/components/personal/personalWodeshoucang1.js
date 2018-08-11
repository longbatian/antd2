// import $ from "../../js/jquery.min";
import $ from 'jquery';
import React from 'react';
import {withRouter} from 'react-router-dom'
import {Modal, Pagination, Tabs} from 'antd';
import Tuijian from '../common/tuijian';
import InterfaceUtil from '../../util/InterfaceUtil';
import CoojiePage from '../../util/CoojiePage';
import LoginPage from '../../util/LoginPage'

const TabPane = Tabs.TabPane;
const confirm = Modal.confirm;

//tab切换
function callback(key) {

}

//查询事件
function handleChange(value) {

}

//确认框
function showConfirm() {
    var _this = this;
    confirm({
        title: '温馨提示',
        content: '确定从我的收藏中删除该商品',
        okText: '确定',
        cancelText: '取消',
        onOk() {

            var user_id = CoojiePage.getCoojie('user_id');
            var token = CoojiePage.getCoojie('token');
            var arr = $('.shoucang_inp');
            for (var i = 0; i < arr.length; i++) {
                var a = $('.shoucang_inp').eq(i).prop('checked');

                if (a == true) {
                    var id = $('.spid').eq(i).val();

                    $.ajax({
                        // url:'http://192.168.1.49/index.php/index/user/collection_goods_delete',
                        url: InterfaceUtil.getUrl(10),
                        type: 'post',
                        dataType: 'json',
                        data: InterfaceUtil.addTime({
                            user_id: user_id,
                            token: token,
                            goods_id: id,
                        }),
                        beforeSend: function (xhr) {
                        },
                        success: function (data, textStatus, jqXHR) {
                            _this.ajax2();
                        },

                    })
                }
            }

        },
        onCancel() {
        },
    });
}

//分页
function onChange(pageNumber) {

}

class PersonalWodejifen extends React.Component {

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
        this.loginPage = new LoginPage();
        this.state = {
            jylx: [],
            lujin: 'http://www.scjuchuang.com/',
            checked: ''
        }

    }

    showConfirm() {
        var _this = this;
        confirm({
            title: '温馨提示',
            content: '确定从我的收藏中删除该商品',
            okText: '确定',
            cancelText: '取消',
            onOk() {

                var user_id = CoojiePage.getCoojie('user_id');
                var token = CoojiePage.getCoojie('token');
                var arr = $('.shoucang_inp');
                for (var i = 0; i < arr.length; i++) {
                    var a = $('.shoucang_inp').eq(i).prop('checked');
                    if (a == true) {
                        var id = $('.spid').eq(i).val();

                        $.ajax({
                            // url:'http://192.168.1.49/index.php/index/user/collection_goods_delete',
                            url: InterfaceUtil.getUrl(10),
                            type: 'post',
                            dataType: 'json',
                            data: InterfaceUtil.addTime({
                                user_id: user_id,
                                token: token,
                                goods_id: id,
                            }),
                            beforeSend: function (xhr) {
                            },
                            success: function (data, textStatus, jqXHR) {

                                if (data.code == 1) {
                                    _this.ajax2();
                                }

                            },

                        })
                    }
                }

            },
            onCancel() {
            },
        });
    }

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

    //切换颜色
    color(e) {
        $('.shoucang_head').removeClass('orange');
        e.target.className = 'shoucang_head orange cursor'
    }

    //加入购物车
    buycar3(e) {
        let a = $('.caigou_tr');
        let value = $('.shoucang_inp');
        let id = [];
        let num = [];
        for (let i = 0; i < a.length; i++) {
            var val = value.eq(i).prop('checked');
            if (val === true) {
                let b = a.eq(i).attr('data');
                let c = a.eq(i).attr('data-index');
                id.push(b);
                num.push(c);
            }
        }

        // 请求

        var user_id = CoojiePage.getCoojie('user_id');
        var token = CoojiePage.getCoojie('token');
        const that = this;
        // num = JSON.stringify(num);
        // id = JSON.stringify(id);
        id = id.join(',');
        //智能采购
        $.ajax({
            url: InterfaceUtil.getUrl(11),
            type: "post",
            data: InterfaceUtil.addTime({
                "user_id": user_id, "token": token, "goods_id": id,
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
                        this.props.history.push('/Denglu');
                        // window.location.href='#/Denglu';
                    }
                }
            }
        });
        // ajax.open('post',"http://192.168.1.49/index.php/index/user_order/addcartall",false);

    }

    //取消收藏

    buycar4(e) {
        var id = e.target.parentNode.parentNode.getAttribute('data');
        var num = e.target.parentNode.parentNode.getAttribute('data-index');

        // 请求

        var username = CoojiePage.getCoojie('username');
        var token = CoojiePage.getCoojie('token');
        var user_id = CoojiePage.getCoojie('user_id');
        const that = this;
        //智能采购
        $.ajax({
            url: InterfaceUtil.getUrl(11),
            type: "post",
            data: InterfaceUtil.addTime({
                "token": token, "user_id": user_id, "goods_id": id, "goods_num": num
            }),
            dataType: "json",
            success: function (data) {
                if (data.code == '1') {
                    // var ok = document.getElementsByClassName('buycar_ok');
                    // ok[0].className = 'buycar_ok';
                    // var timer1 = window.setTimeout(function () {
                    //     ok[0].className = 'buycar_ok display';
                    // }, 3000);
                    CoojiePage.setBuyCarOk()
                } else {
                    if (data.msg != 'token过期') {
                        var no = document.getElementsByClassName('buycar_no');
                        var no_span = document.getElementsByClassName('buycar_no_con_span');
                        no[0].className = 'buycar_no';
                        no_span[0].innerText = data.msg;
                    } else {
                        this.props.history.push('/Denglu');
                        // window.location.href='#/Denglu';
                    }
                }
            }
        });
        // ajax.open('post',"http://192.168.1.49/index.php/index/user_order/cartadd",false);

    }

    //取消收藏
    quxiaoshoucang(e) {
        var a = $('.caigou_tr');
        var value = $('.shoucang_inp');
        var id = [];

        for (var i = 0; i < a.length; i++) {
            var val = value.eq(i).prop('checked');
            if (val == true) {
                var b = a.eq(i).attr('data-a');
                id.push(b);

            }
        }

        // 请求

        var username = CoojiePage.getCoojie('username');
        var token = CoojiePage.getCoojie('token');
        var user_id = CoojiePage.getCoojie('user_id');
        const that = this;
        //智能采购
        // id = JSON.stringify(id)
        id = id.join(',');

        $.ajax({
            url: InterfaceUtil.getUrl(10),
            type: "post",
            data: InterfaceUtil.addTime({
                "user_id": user_id, "token": token, "goods_id": id
            }),
            dataType: "json",
            success: function (data) {

                if (data.code == 1) {
                    that.ajax2();
                }
            }
        });

    }

    quxiaoshoucang1(e) {
        var id = e.target.parentNode.parentNode.parentNode.getAttribute('data-a');

        var username = CoojiePage.getCoojie('username');
        var token = CoojiePage.getCoojie('token');
        var user_id = CoojiePage.getCoojie('user_id');
        const that = this;
        //智能采购
        $.ajax({
            url: InterfaceUtil.getUrl(10),
            type: "post",
            data: InterfaceUtil.addTime({
                "user_id": user_id, "token": token, "goods_id": id
            }),
            dataType: "json",
            success: function (data) {
                alert(data.msg)
                if (data.code == 1) {
                    that.ajax2()
                }
            }
        });
        // // ajax.open('post',"http://192.168.1.49/index.php/index/user/collection_goods_delete",false);
        // ajax.open('post',InterfaceUtil.getUrl(10),false);
        // ajax.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
        // ajax.onreadystatechange = function() {
        //   if (ajax.readyState == 4 && ajax.status == 200 || ajax.status == 304) { // readyState == 4说明请求已完成
        //     var data=ajax.responseText;
        //     console.log(data)
        //     data=JSON.parse(data);


        //   }
        // };

        // ajax.send("username="+username+"&token="+token+"&id="+id);
    }

    //分页
    fenye(e) {

        var username = CoojiePage.getCoojie('username');
        var token = CoojiePage.getCoojie('token');
        var user_id = CoojiePage.getCoojie('user_id');
        var jylx = CoojiePage.getCoojie('jylx');
        const that = this;
        //订单ajax
        $.ajax({
            url: InterfaceUtil.getUrl(36),
            type: "post",
            data: {
                "username": username, "token": token, "page": e, "limit": 10, "user_id": user_id, "jylx": jylx
            },
            dataType: "json",
            success: function (data) {
                if (data.data.length == 0) {

                } else {
                    that.setState({
                        jylx: data.data.list,
                        cons: data.data.cons,
                    });
                    that.refs.dingdan.className = 'display'
                }
            }
        });
        // ajax.open('post',"http://192.168.1.49/index.php/index/user/collection_goods",false);
        // ajax.open('post',InterfaceUtil.getUrl(36),false);
        // ajax.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
        // ajax.onreadystatechange = function() {
        //   if (ajax.readyState == 4 && ajax.status == 200 || ajax.status == 304) { // readyState == 4说明请求已完成
        //     var data=ajax.responseText;
        //     data=JSON.parse(data);


        //   }
        // };
        // ajax.send("username="+username+"&token="+token+"&page="+e+"&limit=10&user_id="+user_id+"&jylx="+jylx);
    }

    componentDidMount() {
        this.ajax2();
        //我的收藏

    }

    ajax2() {
        var username = CoojiePage.getCoojie('username');
        var token = CoojiePage.getCoojie('token');
        var user_id = CoojiePage.getCoojie('user_id');
        var jylx = CoojiePage.getCoojie('jylx');
        const that = this;
        $.ajax({
            url: InterfaceUtil.getUrl(36),
            type: "post",
            data: InterfaceUtil.addTime({
                "user_id": user_id, "token": token, "page": 1, "pageSize": 10
            }),
            dataType: "json",
            success: function (data) {
                that.loginPage.ajaxLogin(data.status);
                if (data.data.length == 0) {

                } else {
                    that.setState({
                        jylx: data.data.collect_list,
                        cons: data.data.collect_count,
                    });
                    that.refs.shoucang.className = 'display shoucang'
                    // }

                }
            }
        });

    }

    render() {

        return (
            <div className=' width988 floatRight'>
                {/*最近订单标题*/}
                <div className='personal_Wodejifen_title marginBottom20'>
                    <p className='marginLeft20 fontFamily fontWeight floatleft font20'>我的收藏</p>
                    {/*<ul>*/}
                    {/*<li className='orange shoucang_head cursor' onClick={(e)=>{this.color(e)}}>全部</li>*/}
                    {/*<div className='shu floatleft'></div>*/}
                    {/*<li className='shoucang_head cursor'onClick={(e)=>{this.color(e)}}>普药</li>*/}
                    {/*<div className='shu floatleft'></div>*/}
                    {/*<li className='shoucang_head cursor'onClick={(e)=>{this.color(e)}}>针剂</li>*/}
                    {/*<div className='shu floatleft'></div>*/}
                    {/*<li className='shoucang_head cursor'onClick={(e)=>{this.color(e)}}>活动</li>*/}
                    {/*<div className='clear'></div>*/}
                    {/*</ul>*/}
                </div>
                {/*内容*/}
                <div className='white personal_xiangqing_title'>
                    <div className='xian'></div>
                    {/*输入框*/}
                    {/*<div className='personal_Dindan_con_inp'>*/}
                    {/*<div className="example-input floatRight marginRight20 marginTop20">*/}
                    {/*<Select defaultValue='全部' style={{ width: 200 }} onChange={handleChange}>*/}
                    {/*<Option value="全部">全部</Option>*/}
                    {/*<Option value="近一周">近一周</Option>*/}
                    {/*<Option value="近一月">近一月</Option>*/}
                    {/*<Option value="近三月">近三月</Option>*/}
                    {/*<Option value="近半年">近半年</Option>*/}
                    {/*<Option value="近一年">近一年</Option>*/}
                    {/*<Option value="一年以前">一年以前</Option>*/}
                    {/*</Select>*/}
                    {/*<Button icon="search" style={{ marginLeft: 10 }}>查询</Button>*/}
                    {/*</div>*/}
                    {/*<div className='clear'></div>*/}
                    {/*</div>*/}
                    {/*全选删除*/}
                    <div className='personal_zhanneixin_top marginTop20 marginLeft20'>
                        <p>
                            <span className='personal_wodechoucang_top_span marginRight5'><input type="checkbox"
                                                                                                 className='quanxuan'
                                                                                                 onClick={(e) => {
                                                                                                     this.quanxuan(e)
                                                                                                 }}/></span>
                            <span className='personal_zhanneixin_top_span1 cursor'>全选</span>
                            <span className='personal_zhanneixin_top_span4 cursor' onClick={(e) => {
                                this.buycar3(e)
                            }}>加入购物车</span>
                            <span className='personal_zhanneixin_top_span5 cursor' onClick={(e) => {
                                this.quxiaoshoucang(e)
                            }}>取消收藏</span>
                        </p>
                    </div>
                    {/*商品信息*/}
                    <table className='personal_Wodejifen_con1_table marginTop20'>
                        <thead>
                        <tr>
                            <th width="100px">商品信息</th>
                            <th width="160px">商品名称</th>
                            <th width="178px">生产厂家</th>
                            <th width="115px">规格</th>
                            <th width="75px">单位</th>
                            <th width="90px">参与活动</th>
                            <th width="70px">当前价格</th>
                            <th width="160px">操作</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            this.state.jylx.map(function (item) {

                                return (
                                    <tr key={item.index} data={item.goods_id} data-index={item.min_buy}
                                        data-a={item.goods_id}
                                        className='caigou_tr'>
                                        <td className='orange'>
                                            <input type="hidden" value={item.goods_id} className='spid'/>
                                            <input type="checkbox" className='marginRight5 shoucang_inp'/>
                                            <img src={this.state.lujin + item.image} alt="" className='shoucang_img'/>
                                        </td>
                                        <td className='xianzhi'>{item.name}</td>
                                        <td>{item.enterprise}</td>
                                        <td>{item.standard}</td>
                                        <td>{item.unit}</td>
                                        <td className='personalCon1_table_tr'>/</td>
                                        <td>{item.price}</td>
                                        <td>
                <span><img src={require("../../images/personal/lajitong.png")} alt=""
                           onClick={(e) => {
                               this.quxiaoshoucang1(e)
                           }}/></span>
                                            <span className='personal_Wodejifen_title_div3_span marginLeft20'
                                                  onClick={(e) => {
                                                      this.buycar4(e)
                                                  }}>加入购物车</span>
                                        </td>
                                    </tr>
                                )
                            }, this)
                        }
                        <tr rowSpan={8} className='shoucang' ref='shoucang'>
                            <td colSpan={8}>
                                <p className='font20'>亲，您还没有收藏哦~</p>
                                <p className='personalCon1_table_tr_p'><a href=""
                                                                          className='personalCon1_table_td'>去产品中心</a>
                                </p>
                            </td>
                        </tr>

                        </tbody>
                    </table>
                    {/*全选删除*/}
                    <div className='personal_zhanneixin_top2'>
                        <p>
                            <span className='personal_wodechoucang_top_span marginRight5'>
                                <input type="checkbox"
                                       className='quanxuan1'
                                       onClick={(e) => {
                                           this.quanxuan1(e)
                                       }}/></span>
                            <span className='personal_zhanneixin_top_span1 cursor'>全选</span>
                            <span className='personal_zhanneixin_top_span4 cursor'
                                  onClick={(e) => this.buycar3(e)}>加入购物车</span>
                            <span className='personal_zhanneixin_top_span5 cursor'
                                  onClick={() => this.showConfirm()}>取消收藏</span>
                        </p>
                    </div>
                    {/*分页*/}
                    <div className='width988 marginTop20 marginBottom20 paddingBtm20'>
                        <span className='floatRight personal_zhanneixin_title_div3_span3'><Pagination
                            showQuickJumper={true} defaultCurrent={1} defaultPageSize={10} total={this.state.cons}
                            onChange={(e) => {
                                this.fenye(e)
                            }}/></span>
                        <div className='clear'></div>
                    </div>
                </div>
                {/*推荐*/}
                <Tuijian data='5'/>

            </div>

        );
    }
}


export default withRouter(PersonalWodejifen);
