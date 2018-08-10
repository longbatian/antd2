// import $ from "../../js/jquery.min";
import $ from 'jquery';
import React from 'react';
import {Button, Input, Pagination, Select,} from 'antd';
import {Link, withRouter} from 'react-router-dom';
import Tuijian from '../common/tuijian';
import InterfaceUtil from '../../util/InterfaceUtil';
import CoojiePage from '../../util/CoojiePage';

const Option = Select.Option;

class PersonalDindan extends React.Component {

    constructor(props) {
        super(props); //调用父类的构造方法；
        this.state = {
            dingdan: [],
            ddzt: [],
            cons: 1,
            page: 1
        }
    }


    //js事件
    dingdangenzong(e) {
        let a = e.target.parentNode;
        a.lastChild.className = 'personalCon1_xuanfu1 personalCon1_xuanfu ';
    }

    dingdangenzong1(e) {
        var a = e.target.parentNode;
        a.lastChild.className = 'personalCon1_xuanfu1 personalCon1_xuanfu display'
    }

    /**
     *传值订单id
     */
    xiangqing(e,a) {
        document.cookie = "order_id=" + a;
    }

    //切换颜色
    color(e) {
        $('.shoucang_head').removeClass('orange');
        e.target.className = 'shoucang_head orange cursor';
        var a = e.target.innerText;
        var zhongwen = /[\u4e00-\u9fa5]/g;
        var b = a.match(zhongwen).join('');
        if (b == '待付款') {
            document.cookie = "ddzt=" + '1';

            var username = CoojiePage.getCoojie('username');
            var token = CoojiePage.getCoojie('token');
            var user_id = CoojiePage.getCoojie('user_id');
            const that = this;
            //订单ajax
            $.ajax({
                url: InterfaceUtil.getUrl(35),
                type: "post",
                data: {
                    "username": username, "token": token, "page": 1, "limit": 5, "user_id": user_id, "ddzt": 1
                },
                dataType: "json",
                success: function (data) {
                    if (data.data.length == 0) {

                    } else {
                        that.setState({
                            dingdan: data.data.list,
                            cons: data.data.cons,
                        });
                        that.refs.dingdan.className = 'display'
                    }
                }
            });
            // ajax.open('post',"http://192.168.1.49/index.php/index/user_order/getorder",false);

        }
        else if (b == '待收货') {
            document.cookie = "ddzt=" + '3';

            var username = CoojiePage.getCoojie('username');
            var token = CoojiePage.getCoojie('token');
            var user_id = CoojiePage.getCoojie('user_id');
            const that = this;
            //订单ajax
            $.ajax({
                url: InterfaceUtil.getUrl(35),
                type: "post",
                data: {
                    "username": username, "token": token, "page": 1, "limit": 5, "user_id": user_id, "ddzt": 3
                    // "username="+username+"&token="+token+"&page=1&limit=5&user_id="+user_id+"&ddzt=3"
                },
                dataType: "json",
                success: function (data) {
                    if (data.data.length == 0) {

                    } else {
                        that.setState({
                            dingdan: data.data.list,
                            cons: data.data.cons,
                        });
                        that.refs.dingdan.className = 'display'
                    }
                }
            });


        }
        else if (b == '已完成') {
            document.cookie = "ddzt=" + '4';

            var username = CoojiePage.getCoojie('username');
            var token = CoojiePage.getCoojie('token');
            var user_id = CoojiePage.getCoojie('user_id');
            const that = this;
            //订单ajax
            $.ajax({
                url: InterfaceUtil.getUrl(35),
                type: "post",
                data: {
                    "username": username, "token": token, "page": 1, "limit": 5, "user_id": user_id, "ddzt": 4
                },
                dataType: "json",
                success: function (data) {
                    if (data.data.length == 0) {

                    } else {
                        that.setState({
                            dingdan: data.data.list,
                            cons: data.data.cons,
                        });
                        that.refs.dingdan.className = 'display'
                    }
                }
            });
            // ajax.send("username="+username+"&token="+token+"&page=1&limit=5&user_id="+user_id+"&ddzt=4");
        }
        else if (b == '全部') {
            document.cookie = "ddzt=" + '';

            var username = CoojiePage.getCoojie('username');
            var token = CoojiePage.getCoojie('token');
            var user_id = CoojiePage.getCoojie('user_id');
            const that = this;
            //订单ajax
            $.ajax({
                url: InterfaceUtil.getUrl(35),
                type: "post",
                data: {
                    "username": username, "token": token, "page": 1, "limit": 5, "user_id": user_id
                    // "username="+username+"&token="+token+"&page=1&limit=5&user_id="+user_id
                },
                dataType: "json",
                success: function (data) {
                    if (data.data.length == 0) {

                    } else {
                        that.setState({
                            dingdan: data.data.list,
                            cons: data.data.cons,
                        });
                        that.refs.dingdan.className = 'display'
                    }
                }
            });
            // ajax.send("username="+username+"&token="+token+"&page=1&limit=5&user_id="+user_id);
        }
    }

    //查看时间
    time1() {
        var a = $('.ant-select-selection-selected-value').attr('title');
        var b = $('.dingdanbianhao').prop('value');
        if (a == '全部') {
            var a = '';
            document.cookie = "month=" + '';
        } else if (a == '近一周') {
            var a = '1';
            document.cookie = "month=" + '1';
        } else if (a == '近一月') {
            var a = '2';
            document.cookie = "month=" + '2';
        } else if (a == '近三月') {
            var a = '3';
            document.cookie = "month=" + '3';
        } else if (a == '近半年') {
            var a = '4';
            document.cookie = "month=" + '4';
        } else if (a == '近一年') {
            var a = '5';
            document.cookie = "month=" + '5';
        } else if (a == '一年以前') {
            var a = '6';
            document.cookie = "month=" + '6';
        }

        var username = CoojiePage.getCoojie('username');
        var token = CoojiePage.getCoojie('token');
        var user_id = CoojiePage.getCoojie('user_id');
        var ddzt = CoojiePage.getCoojie('ddzt');
        const that = this;
        //所有订单

        $.ajax({
            url: InterfaceUtil.getUrl(35),
            type: "post",
            data: {
                "username": username, "token": token, "user_id": user_id, "page": 1, "limit": 5,
                "timev": a, "orderno": b, "ddzt": ddzt
            },
            dataType: "json",
            success: function (data) {
                if (data.data.length == 0) {

                } else {
                    that.setState({
                        dingdan: data.data.list,
                    });
                }
            }
        });

    }

    qufukuan(e, id) {
        sessionStorage.setItem("orderno", id);
        this.props.history.push('/Dingdan')
    }

    //下拉框
    zhuangtai(e) {
        var b = $('.select').val();
        if (b == '订单状态') {
            // var a = 0
            document.cookie = "ddzt=" + '0';
        } else if (b == '待付款') {
            // var a = '1';
            document.cookie = "ddzt=" + '1';
        } else if (b == '待收货') {
            // var a = '3';
            document.cookie = "ddzt=" + '3';
        } else if (b == '已完成') {
            // var a = '4';
            document.cookie = "ddzt=" + '4';
        } else if (b == '已取消') {
            // var a = '5';
            document.cookie = "ddzt=" + '5';
        } else if (b == '出货中') {
            // var a = '2';
            document.cookie = "ddzt=" + '2';
        }

        var username = CoojiePage.getCoojie('username');
        var token = CoojiePage.getCoojie('token');
        var user_id = CoojiePage.getCoojie('user_id');
        var month = CoojiePage.getCoojie('month');
        const that = this;
        //所有订单
        // $.ajax({
        //     url: InterfaceUtil.getUrl(35),
        //     type: "post",
        //     data: {
        //         "username": username,
        //         "token": token,
        //         "user_id": user_id,
        //         "page": 1,
        //         "limit": 5,
        //         "ddzt": a,
        //         "timev": month
        //     },
        //     dataType: "json",
        //     success: function (data) {
        //         if (data.data.length == 0) {
        //
        //         } else {
        //             that.setState({
        //                 dingdan: data.data.list,
        //                 cons: data.data.cons,
        //             });
        //         }
        //     }
        // });
        this.ajaxPersonDingDan();

    }

    //取消订单
    quxiaoDD(e,id) {
        var zhi = e.target.innerText;
        // var id = e.target.parentNode.firstChild.value;
        if (zhi == '取消订单') {
            let user_id = CoojiePage.getCoojie('user_id');
            let token = CoojiePage.getCoojie('token');
            const that = this;
            //订单ajax
            $.ajax({
                url: InterfaceUtil.getUrl(37),
                type: "post",
                data:InterfaceUtil.addTime( {
                    "user_id": user_id, "token": token, "order_id": id
                }),
                dataType: "json",
                success: function (data) {

                    if (data.code == 1) {
                        that.ajaxPersonDingDan();
                    }
                }
            });
        } else if (zhi == '再次购买') {

            var username = CoojiePage.getCoojie('username');
            var token = CoojiePage.getCoojie('token');
            var user_id = CoojiePage.getCoojie('user_id');
            const that = this;
            //订单ajax
            $.ajax({
                url: InterfaceUtil.getUrl(38),
                type: "post",
                data: InterfaceUtil.addTime({
                   "token": token, "user_id": user_id, "order_id": id
                }),
                dataType: "json",
                success: function (data) {

                    if (data.code == '1') {
                       CoojiePage.setBuyCarOk();
                    } else {
                        var no = document.getElementsByClassName('buycar_no');
                        var no_span = document.getElementsByClassName('buycar_no_con_span');
                        no[0].className = 'buycar_no';
                        no_span[0].innerText = data.msg;
                    }
                }
            });
        }

    }

    //分页
    fenye(e) {
        this.setState({
            page: e
        }, () => {
            this.ajaxPersonDingDan();
        })

    }

    componentDidMount() {
        this.ajaxPersonDingDan();
    }

    componentWillReceiveProps() {
        this.ajaxPersonDingDan();
    }

    ajaxPersonDingDan() {
        let username = CoojiePage.getCoojie('username');
        let token = CoojiePage.getCoojie('token');
        let user_id = CoojiePage.getCoojie('user_id');
        let ddzt = CoojiePage.getCoojie('ddzt');
        const that = this;
        let e = this.state.page;
        //订单ajax
        $.ajax({
            url: InterfaceUtil.getUrl(35),
            type: "post",
            data: InterfaceUtil.addTime({
                "token": token, "page": e, "user_id": user_id, "status": ddzt,
                pageSize: 10
            }),
            dataType: "json",
            success: function (data) {
                if (data.code === 0) {
                    that.props.history.push("#/Denglu");
                    return;
                }
                if (data.data.length == 0) {

                } else {
                    that.setState({
                        dingdan: data.data.order_list,
                        //     ddzt0: data.data.ddzt.ddzt0,
                        //     ddzt1: data.data.ddzt.ddzt1,
                        //     ddzt2: data.data.ddzt.ddzt2,
                        cons: data.data.order_count,
                    }, () => {
                        //
                    });
                    that.refs.dingdan.className = 'display'
                }

            }
        });
        // ajax.open('post',"http://192.168.1.49/index.php/index/user_order/getorder",false);

    }

    render() {
        return (
            <div className=' width988 floatRight'>
                {/*最近订单标题*/}
                <div className='personal_Dindan_title'>
                    <p className='marginLeft20 fontFamily fontWeight floatleft'>所有订单</p>
                    <ul>
                        <li className='shoucang_head cursor orange' onClick={(e) => {
                            this.color(e)
                        }}>全部
                        </li>
                        <div className='shu floatleft'/>
                        <li className='shoucang_head cursor' onClick={(e) => {
                            this.color(e)
                        }}>待付款&nbsp;&nbsp;&nbsp;{this.state.ddzt0}</li>
                        <div className='shu floatleft'/>
                        <li className='shoucang_head cursor' onClick={(e) => {
                            this.color(e)
                        }}>待收货&nbsp;&nbsp;&nbsp;{this.state.ddzt1}</li>
                        <div className='shu floatleft'/>
                        <li className='shoucang_head cursor' onClick={(e) => {
                            this.color(e)
                        }}>已完成&nbsp;&nbsp;&nbsp;{this.state.ddzt2}</li>
                        <div className='clear'/>
                    </ul>
                </div>
                <div className='bgWhite'>
                    {/*编号查询*/}
                    <div className='width988 white'>
                        {/*输入框*/}
                        <div className='personal_Dindan_con_inp'>
                            <div className="example-input floatRight marginRight20">
                                <Input placeholder="订单编号" className='dingdanbianhao'/>
                                <Select defaultValue='全部' style={{width: 200}}>
                                    <Option value="全部">全部</Option>
                                    <Option value="近一周">近一周</Option>
                                    <Option value="近一月">近一月</Option>
                                    <Option value="近三月">近三月</Option>
                                    <Option value="近半年">近半年</Option>
                                    <Option value="近一年">近一年</Option>
                                    <Option value="一年以前">一年以前</Option>
                                </Select>
                                <Button icon="search" style={{marginLeft: 10}} onClick={(e) => {
                                    this.time1(e)
                                }}>查询</Button>
                            </div>
                            <div className='clear'></div>
                        </div>
                    </div>
                    {/*订单详情*/}
                    <div className='width988 bgWhite'>
                        <table className='personal_Dindan_con1_table'>
                            <thead>
                            <tr>
                                <th width="130px">订单号</th>
                                <th width="140px">订单时间</th>
                                <th width="75px">收货人</th>
                                <th width="110px">订单金额</th>
                                <th width="110px">实付金额</th>
                                <th width="65px">参与活动</th>
                                <th width="125px">
                                    <select className="select" onChange={(e) => {
                                        this.zhuangtai(e)
                                    }}>
                                        <option value="订单状态">订单状态</option>
                                        <option value="待付款">待付款</option>
                                        <option value="待收货">待收货</option>
                                        <option value="已完成">已完成</option>
                                        <option value="已取消">已取消</option>
                                        <option value="出货中">出货中</option>
                                        {/*<option value="已退货">已退货</option>*/}
                                    </select>
                                </th>
                                <th width="195px">操作</th>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                this.state.dingdan.map(function (item, i) {
                                    let dingdanState = '再次购买';
                                    let dingdanClassName = 'dingdan_goumai orange';
                                    let personalCon1_table = <span className='nulls'></span>;
                                    if (item.order_status === `2`) {
                                        dingdanState = '收货';
                                    } else if (item.order_status === `1`) {

                                        dingdanState = '取消订单';
                                        dingdanClassName = 'dingdan_goumai';
                                        personalCon1_table = <span className='personalCon1_table_tr_span1'
                                                                   onClick={(e) => {
                                                                       this.qufukuan(e, item.order_number)
                                                                   }}>去付款</span>
                                    } else if (item.order_status === `3`) {
                                        personalCon1_table = <span className='personalCon1_table_tr_span1'
                                                                   onClick={(e) => {
                                                                       this.qufukuan(e, item.order_number)
                                                                   }}>收货</span>;

                                    }
                                    let times = InterfaceUtil.fmtDate(item.created_time);
                                    return (
                                        <tr key={item.id}>
                                            <td className='orange hid width130'>{item.order_number}</td>
                                            <td>{times}</td>
                                            <td>{item.name}</td>
                                            <td>{item.price}</td>
                                            <td>{item.price}</td>
                                            <td className='red'>/</td>
                                            <td className='personalCon1_table_tr'>
                                                {/*<span className='orange dingdan_ddzt'>{item.ddzt}</span> <span*/}
                                                {/*className='marginLeft5 blue' onMouseOver={(e) => {*/}
                                                {/*this.dingdangenzong(e)*/}
                                                {/*}} onMouseOut={(e) => {*/}
                                                {/*this.dingdangenzong1(e)*/}
                                                {/*}}>订单跟踪</span>*/}

                                                订单跟踪
                                                {/*订单跟踪*/}
                                                {/*<div className='personalCon1_xuanfu1 display'>*/}
                                                {/*<Timeline className='wlxx'>*/}
                                                {/*{*/}
                                                {/*this.state.dingdan[i].wl.map(function (item) {*/}

                                                {/*return (*/}
                                                {/*<Timeline.Item>*/}
                                                {/*<span*/}
                                                {/*className=''>{item.createtime} {item.wldw}</span>*/}
                                                {/*</Timeline.Item>*/}
                                                {/*)*/}
                                                {/*}, this)*/}
                                                {/*}*/}
                                                {/*/!*<Timeline.Item>【已付款】 2017-12-07 13:30:30 您的订单商家正在积极备货中。</Timeline.Item>*!/*/}
                                                {/*/!*<Timeline.Item>【已提交】 2017-12-07 13:30:30 您的订单已提交，请尽快完成付款。</Timeline.Item>*!/*/}
                                                {/*</Timeline>*/}
                                                {/*<Timeline className='ZWwlxx display'>*/}
                                                {/*<Timeline.Item><span> 暂无物流信息</span></Timeline.Item>*/}
                                                {/*</Timeline>*/}
                                                {/*</div>*/}
                                            </td>
                                            <td>
                                                <input type="hidden" value={item.order_number}/>
                                                {/*<Link to="/Dingdan" className=''>*/}
                                                {personalCon1_table}
                                                {/*<span className='personalCon1_table_tr_span1'onClick={(e)=>{this.qufukuan(e)}}>去付款</span>*/}
                                                {/*</Link>*/}
                                                &nbsp;
                                                <Link to="/Xiangqing" className='black'><span className='orange'
                                                                                              onClick={(e) => {
                                                                                                  this.xiangqing(e,item.id)
                                                                                              }}>查看订单</span></Link>&nbsp;
                                                <span className={dingdanClassName} onClick={(e) => {
                                                    this.quxiaoDD(e,item.id)
                                                }}>{dingdanState}</span>
                                            </td>
                                        </tr>
                                    )
                                }, this)
                            }
                            <tr rowSpan={8} ref='dingdan'>
                                <td colSpan={8}>
                                    <p className='font20'>亲，您还没有订单哦~</p>
                                    <p className='personalCon1_table_tr_p'><a href=""
                                                                              className='personalCon1_table_td'>去产品中心</a>
                                    </p>
                                </td>
                            </tr>


                            </tbody>
                        </table>

                        {/*分页*/}
                        <div className='width988 marginTop20 marginBottom20 paddingBtm20'>
                            <span className='floatRight personal_zhanneixin_title_div3_span3'><Pagination
                                showQuickJumper={true} defaultCurrent={1} defaultPageSize={5} total={this.state.cons}
                                onChange={(e) => {
                                    this.fenye(e)
                                }}/></span>
                            <div className='clear'></div>
                        </div>

                    </div>
                </div>

                {/*推荐*/}
                <Tuijian data='5'/>
            </div>
        );
    }

    componentDidUpdate() {

        //物流
        var ZWwlxx = document.getElementsByClassName('ZWwlxx');
        var wlxx = document.getElementsByClassName('wlxx');
        for (var i = 0; i < ZWwlxx.length; i++) {
            if (wlxx[i].children.length == 0) {
                ZWwlxx[i].className = 'ant-timeline ZWwlxx '
            }
        }

        //根据状态显示对应操作
        var a = document.getElementsByClassName('dingdan_ddzt');

    }
}


export default withRouter(PersonalDindan);
