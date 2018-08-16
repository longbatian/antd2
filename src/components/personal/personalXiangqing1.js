import $ from "jquery";
import React from 'react';
import {Pagination} from 'antd';
import Tuijian from '../common/tuijian';
import {withRouter} from 'react-router-dom';
import InterfaceUtil from '../../util/InterfaceUtil';
import CoojiePage from '../../util/CoojiePage';
import {PubSub} from 'pubsub-js';


class PersonalXiangqing extends React.Component {

    constructor(props) {
        super(props); //调用父类的构造方法；
        this.state = {
            ddxq: [],
            ddsj: [],
            sphj: '',
            lujin: InterfaceUtil.getImgUrl(),
            checked: '',
            cons: 1,
            orderno: [],
            e: 1,
        }
    }


    BuyCar(e, id) {

        var username = CoojiePage.getCoojie('username');
        var token = CoojiePage.getCoojie('token');
        var order_id = CoojiePage.getCoojie('order_id');
        var user_id = CoojiePage.getCoojie('user_id');

        const that = this;
        //我的收藏
        $.ajax({
            url: InterfaceUtil.getUrl(38),
            type: "post",
            data: InterfaceUtil.addTime({
                "token": token, "order_id": id, "user_id": user_id
            }),
            dataType: "json",
            success: function (data) {

                if (data.code === 1) {
                    PubSub.publish('PubSubmessage', data.status);
                    CoojiePage.setBuyCarOk()
                } else {
                    if (data.msg != 'token过期') {
                        var no = document.getElementsByClassName('buycar_no');
                        var no_span = document.getElementsByClassName('buycar_no_con_span');
                        no[0].className = 'buycar_no';
                        no_span[0].innerText = data.msg;
                    } else {
                        this.props.history.push('/Denglu');

                    }
                }

            }
        });
    }

    BuyCar8(e) {
        var id = e.target.getAttribute('data');
        var num = e.target.getAttribute('data-index');
        var token = CoojiePage.getCoojie('token');
        var user_id = CoojiePage.getCoojie('user_id');
        const that = this;
        //我的收藏
        $.ajax({
            url: InterfaceUtil.getUrl(11),
            type: "post",
            data: InterfaceUtil.addTime({
                "token": token, "user_id": user_id, "goods_id": id, "goods_num": num
            }),
            dataType: "json",
            success: function (data) {
                if (data.code == '1') {
                    CoojiePage.setBuyCarOk();
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
    }

    componentDidMount() {
        this.startAjax();
        //物流
        // $.ajax({
        //     url: InterfaceUtil.getUrl(44),
        //     type: "post",
        //     data: InterfaceUtil.addTime({
        //         "user_id": user_id, "token": token, "pageSize": 5, "orderno": order_id
        //     }),
        //     dataType: "json",
        //     success: function (data) {
        //
        //         if (data.data.length == 0) {
        //
        //         } else {
        //             that.setState({
        //                 orderno: data.data
        //             }, () => {
        //
        //             });
        //         }
        //     }
        // });

    }

    startAjax() {
        let user_id = CoojiePage.getCoojie('user_id');
        let token = CoojiePage.getCoojie('token');
        let order_id = CoojiePage.getCoojie('order_id');
        const that = this;
        //我的收藏
        $.ajax({
            url: InterfaceUtil.getUrl(43),
            type: "post",
            data: InterfaceUtil.addTime({
                "user_id": user_id, "token": token, "order_id": order_id, "page": that.state.e, "pageSize": 10
            }),
            dataType: "json",
            success: function (data) {
                if (data.data.length == 0) {

                } else {
                    let datas = data.data;
                    that.setState({
                        ddxq: datas.goods_list,
                        ddsj: datas,
                        // sphj: data.data.order[0].ddprice,
                        // cons: data.data.cons
                    }, () => {
                        var a = document.getElementsByClassName('xiangqing_ddzt');
                        var b = a[0].innerText;
                        if (b == '待付款') {
                            var c = document.getElementsByClassName('personal_xiangqing_con_span1');
                            c[0].className = 'personal_xiangqing_con_span1 fontFamily'
                        }
                    });
                }
            }
        });
    }

    //分页
    fenye(e) {
        this.setState({
            e: e
        })
        this.startAjax();

    }

    dingdanxiangqingJiesuan(id) {
        sessionStorage.setItem("orderno", id);
        this.props.history.push('/Dingdan')
    }

    render() {
        let item = this.state.ddsj;
        let moneyss = parseFloat(item.price) + parseFloat(item.coupon_price);
        moneyss.toFixed(2)
        let times = null;
        let address = item.address ? item.address : {};
        let connum = item.goods_list ? item.goods_list.length + 1 : 1;
        times = InterfaceUtil.fmtDate(item.created_time);

        return (
            <div className=' width988 floatRight'>
                {/*最近订单标题*/}
                <div className='personal_Dindan_title marginBottom20'>
                    <p className='marginLeft20 fontFamily fontWeight font20'>订单详情</p>
                </div>
                {/*内容*/}
                <div className='bgWhite personal_xiangqing_title'>
                    <div className='xian'></div>
                    {/*{*/}
                    {/*this.state.ddsj.map(function (item) {*/}

                    {/*return (*/}
                    <div>
                        {/*头部*/}
                        <div className='width988 white'>
                            {/*时间订单号*/}
                            <div className='timeOrder'>
                                <div className='personal_xiangqing_con_p'>
                                    <span className='fontFamily marginLeft10'>创建时间： {times}</span>
                                    &nbsp;&nbsp;&nbsp;订单号:<span
                                    className='fontFamily xiangqing_ddh'>&nbsp;{item.order_number}</span>
                                    &nbsp;&nbsp;&nbsp;状态：<span
                                    className='orange fontFamily xiangqing_ddzt'>{item.order_type}</span>
                                    &nbsp;&nbsp;&nbsp;&nbsp;

                                    <span
                                        className='personal_xiangqing_con_span1 fontFamily display'
                                        onClick={() => this.dingdanxiangqingJiesuan(item.order_number)}
                                    >
                                                    去付款
                                                </span>
                                </div>
                                <p className='personal_xiangqing_con_p1'>用户备注：<span>{item.bz}</span></p>
                                <p className='personal_xiangqing_con_p1'>系统备注：<span
                                    className='red1'>{item.sysbz}</span></p>
                            </div>
                            <div className='clear'></div>
                        </div>
                        {/*物流详情*/}
                        <div className='personal_xiangqing_title_con'>
                            <div className='personal_xiangqing_title_con_div'>
                                <p>配送方式：<span>自提</span></p>
                                <p>发票信息：<span>增值税专用发票</span></p>
                            </div>
                            <div className='personal_xiangqing_title_con_div1'>
                                {/*<Timeline>*/}
                                {/*{*/}
                                {/*this.state.orderno.map(function (item){*/}
                                {/*return(*/}
                                {/*<Timeline.Item></Timeline.Item>*/}
                                {/*)*/}
                                {/*},this )*/}
                                {/*}*/}
                                {/*</Timeline>*/}
                                {/*{*/}
                                {/*this.state.orderno.map(function (item){*/}
                                {/*return(*/}
                                {/*<p className=''>{item.createtime}  {item.wldw}</p>*/}
                                {/*)*/}
                                {/*},this )*/}
                                {/*}*/}
                                {/*<Timeline className='wlxx'>*/}
                                {/*{*/}
                                {/*this.state.orderno.map(function (item, i) {*/}
                                {/*return (*/}
                                {/*<Timeline.Item>*/}
                                {/*<span className='wlxx_span'>*/}
                                {/*{item.createtime}\{item.wldw}*/}
                                {/*</span>*/}
                                {/*</Timeline.Item>*/}
                                {/*)*/}
                                {/*}, this)*/}
                                {/*}*/}

                                {/*</Timeline>*/}


                                {/*<Timeline className='ZWwlxx display'>*/}
                                {/*<Timeline.Item><span*/}
                                {/*className='wlxx_span'> 暂无物流信息</span></Timeline.Item>*/}
                                {/*</Timeline>*/}
                            </div>
                            <div className='clear'></div>
                        </div>
                        {/*收货信息*/}
                        <div className='marginLeft20 marginTop20 personal_xiangqing_title_div2'>
                            <p className='personal_xiangqing_title_div2_p1'>收货信息</p>
                            <div className='personal_xiangqing_title_div2_div2'>收货人：</div>
                            <div className='personal_xiangqing_title_div2_div1'>{address.name}</div>
                            <br/>
                            <div className='personal_xiangqing_title_div2_div'>联系方式：</div>
                            <div className='personal_xiangqing_title_div2_div1'>{address.tel}</div>
                            <br/>
                            <div className='personal_xiangqing_title_div2_div'>收货地址：</div>
                            <div className='personal_xiangqing_title_div2_div1'>{address.address}</div>
                            <div className='clear'></div>
                        </div>
                        {/*费用总计*/}
                        <div className='marginTop20 personal_xiangqing_title_div2'>
                            <p className='personal_xiangqing_title_div2_p1'>费用总计</p>
                            <div className='personal_xiangqing_title_div2_div2'>商品金额：</div>
                            <div
                                className='personal_xiangqing_title_div2_div1'>
                                {moneyss}
                            </div>
                            <br/>
                            <div className='personal_xiangqing_title_div2_div'>+运费：</div>
                            <div
                                className='personal_xiangqing_title_div2_div1'>
                                ￥<span>{item.freight_price}</span>
                            </div>
                            <br/>
                            <div className='personal_xiangqing_title_div2_div'>-优惠：</div>
                            <div className='personal_xiangqing_title_div2_div1'>￥<span>{item.coupon_price}</span>
                            </div>
                            <br/>
                            <div className='personal_xiangqing_title_div2_div orange1'>实付金额：</div>
                            <div className='personal_xiangqing_title_div2_div1 orange1'>￥<span
                                className='orange1'>{item.price}</span></div>
                            <div className='clear'/>
                        </div>
                    </div>
                    {/*)*/}
                    {/*}, this)*/}
                    {/*}*/}

                    <div className='clear'/>
                    {/*订单商品*/}
                    <div className='personal_xiangqing_title_div3'>
                        {/*商品信息头部*/}
                        <div className='marginLeft20'>
                            <span className='floatleft personal_xiangqing_title_div3_span1'>订单商品</span>
                            <span className='floatRight marginRight20 personal_xiangqing_title_div3_span2'
                                  onClick={(e) => {
                                      this.BuyCar(e, item.id)
                                  }}>全部加入购物车</span>
                            <div className='clear'/>
                        </div>
                        {/*商品信息*/}
                        <table className='personal_Dindan_con1_table marginTop20'>
                            <thead>
                            <tr>
                                <th width="80px">商品信息</th>
                                <th width="170px">商品名称</th>
                                <th width="160px">生产厂家</th>
                                <th width="85px">规格</th>
                                <th width="45px">单位</th>
                                <th width="70px">参与活动</th>
                                <th width="75px">商品单价</th>
                                <th width="45px">数量</th>
                                <th width="100px">小计</th>
                                <th width="120px">操作</th>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                this.state.ddxq.map(function (item) {
                                    let moneys = null;

                                    if (item.goods_num && item.goods_price) {
                                        moneys = parseFloat(item.goods_price) / parseFloat(item.goods_num);
                                        moneys=moneys.toFixed(2);
                                    }

                                    return (
                                        <tr key={item.id}>
                                            <td className='orange hid width130'>
                                                <img src={this.state.lujin + item.image} className='xiangqing_img'
                                                     alt=""/>
                                            </td>
                                            <td className='hid'>{item.name}</td>
                                            <td className='hid'>{item.enterprise}</td>
                                            <td className='hid'>{item.standard}</td>
                                            <td>{item.unit}</td>
                                            <td><span className='red'>/</span></td>
                                            <td className='personalCon1_table_tr'>￥{moneys}</td>
                                            <td>{item.goods_num}</td>
                                            <td>￥{item.goods_price}</td>
                                            <td><span className='personal_xiangqing_title_div3_span'
                                                      data={item.goods_id}
                                                      data-index={item.goods_num} onClick={(e) => {
                                                this.BuyCar8(e)
                                            }}>加入购物车</span></td>
                                        </tr>
                                    )
                                }, this)
                            }

                            </tbody>


                        </table>

                        {/*分页*/}
                        <div className='width988 marginTop20 '>
                            <div className='floatRight personal_zhanneixin_title_div3_span3'>
                                <Pagination
                                    showQuickJumper={true} defaultCurrent={1} defaultPageSize={10}
                                    total={connum} onChange={(e) => {
                                    this.fenye(e)
                                }}/></div>
                            <div className='clear'/>
                        </div>
                    </div>
                    {/*商品合计*/}
                    <div className='marginTop10'>
                        <p className='personal_xiangqing_title_div3_p'><span
                            className='personal_xiangqing_title_div3_p_span'>商品合计：</span><span
                            className='red'>￥{item.price}</span></p>
                    </div>
                    <div className='clear'/>
                </div>
                {/*推荐*/}
                <Tuijian data='5'/>

            </div>

        );
    }


}


export default withRouter(PersonalXiangqing);
