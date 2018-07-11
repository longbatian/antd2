import React from 'react';
import {Tabs, Checkbox} from 'antd';
import {PubSub} from 'pubsub-js';
import {withRouter, Link} from "react-router-dom";
import Rank from '../zhongyao/zhongyao2';
import InterfaceUtil from '../../util/InterfaceUtil';
import CoojiePage from '../../util/CoojiePage';
import $ from 'jquery';
import BigorSmallPage from './BigorSmallPage';
import '../../styles/shangpinxiangqing/shangpinxiangqing.css'


const TabPane = Tabs.TabPane;

class Shangpinxiangqing extends React.Component {

    constructor(props) {
        super(props); //调用父类的构造方法；
        this.username = CoojiePage.getCoojie('username');
        this.token = CoojiePage.getCoojie('token');
        this.user_id = CoojiePage.getCoojie('user_id');
        this.state = {
            spxq: [],
            com: [],
            lujin: InterfaceUtil.getImgUrl(),
            checked: '',
            cons: '',
            color: 1,
            color1: 1,
            com1: '',
            com0: '',
            com2: '',
            com3: '',
            com4: '',
            moneys: '',
            combination: [],
            arrTitle: [],
            arr2: {},

        }
    }

    //收藏的切换
    colorOrder(e, flag,i) {
        const that = this;
        let flags=flag !== 0 ? 10 : 5;
        let spid = InterfaceUtil.getHashParameters().id;

        $.ajax({
            url: InterfaceUtil.getUrl(flags),
            type: "post",
            data: {
                "username": that.username, "token": that.token, "user_id": that.user_id, "sp_id": spid, 'id': flag
            },
            dataType: "json",
            success: function (data) {
                if (data.status === 1) {
                    let datas = that.state.spxq;
                    if (data.data === 0) {
                        datas[i].is_f = 0;
                    } else {
                        datas[i].is_f = data.data;
                    }
                    that.setState({
                        spxq: datas,
                    })
                }
            }
        });

    }



    //改变输入框的值
    shuliang(e) {
        var a = e.target;
        var b = a.value;
        var moren = e.target.parentNode.firstChild.value;
        moren = parseInt(moren);
        // console.log(b);
        if (isNaN(b) != false || b < 0) {
            // console.log('aaa')
            a.value = moren;
        } else {
            var as = parseInt(b % moren);
            if (as != 0) {
                b = b - as + moren;
                a.setAttribute('value', b);
                a.value = b;
            }
        }
    }

    //加
    jia8(e) {
        var a = $('.shangpinxiangqing_sp_xinxi_ziliao_shuliang').val();
        var b = e.target.parentNode.firstChild.value;
        b = parseInt(b);
        a = parseInt(a);
        var c = a + b;
        $('.shangpinxiangqing_sp_xinxi_ziliao_shuliang').attr('value', c);
        // e.target.nextElementSibling.value=c;
        e.target.previousElementSibling.value = c;
    }

    jian8(e) {
        var a = $('.shangpinxiangqing_sp_xinxi_ziliao_shuliang').val();
        var b = e.target.parentNode.firstChild.value;
        b = parseInt(b);
        a = parseInt(a);
        var c = a - b;
        if (c <= 0) {
            $('.shangpinxiangqing_sp_xinxi_ziliao_shuliang').attr('value', a);
            e.target.nextElementSibling.value = a;
        } else {
            $('.shangpinxiangqing_sp_xinxi_ziliao_shuliang').attr('value', c);
            e.target.nextElementSibling.value = c;
        }

    }

    houtui(e) {
        this.props.history.goBack()
    }

//加入购物车
    buycar(e) {
        var shuliang = e.target.previousElementSibling.children[2].getAttribute('value');
        var id = InterfaceUtil.getHashParameters().id;
        var username = CoojiePage.getCoojie('username');
        var token = CoojiePage.getCoojie('token');
        var user_id = CoojiePage.getCoojie('user_id');
        const that = this;
        //搜索条件ajax

        $.ajax({
            url: InterfaceUtil.getUrl(11),
            type: "post",
            data: {
                "username": username, "token": token, "user_id": user_id, "goods_id": id, "spsl": shuliang
            },
            dataType: "json",
            success: function (data) {
                if (data.data == '1') {
                    CoojiePage.setBuyCarOk();
                    PubSub.publish('PubSubmessage');
                } else {
                    if (data.info != 'token过期') {
                        var no = document.getElementsByClassName('buycar_no');
                        var no_span = document.getElementsByClassName('buycar_no_con_span');
                        no[0].className = 'buycar_no';
                        no_span[0].innerText = data.info;
                    } else {
                        alert(data.info);
                        that.props.history.push('/Denglu');
                    }
                }
            }
        });
        PubSub.publish('PubSubmessage', '');
    }

    buycar5(e) {
        var shuliang = e.target.previousElementSibling.previousElementSibling.children[2].getAttribute('value');

        var id = InterfaceUtil.getHashParameters().id;

        var username = CoojiePage.getCoojie('username');
        var token = CoojiePage.getCoojie('token');
        var user_id = CoojiePage.getCoojie('user_id');
        const _this = this;
        //搜索条件ajax
        $.ajax({
            url: InterfaceUtil.getUrl(11),
            type: "post",
            data: {
                "username": username, "token": token, "user_id": user_id, "goods_id": id, "spsl": shuliang
            },
            dataType: "json",
            success: function (data) {
                if (data.data == '1') {

                    // window.location.href = '/Buycar';
                    // window.location.href=;
                    _this.props.history.push('/Buycar')
                } else {
                    if (data.info != 'token过期') {
                        _this.props.history.push('/Buycar')
                        // window.location.href='/Buycar';
                    } else {

                        _this.props.history.push('/Denglu')
                    }
                }
            }
        });
    }

    //切换
    shuoming(e) {
        var a = document.getElementsByClassName('shangpinxiangqing_sp_dadang_title_span');
        for (var i = 0; i < a.length; i++) {
            a[i].className = 'shangpinxiangqing_sp_dadang_title_span';
        }
        e.target.className = 'shangpinxiangqing_sp_dadang_title_span shangpinxiangqing_sp_dadang_title_span_current'
    }


    componentDidMount() {
        this.ajaxSpXq();
        window.scrollTo(0, 0)
    }
    componentWillReceiveProps(nextProps) {
        this.ajaxSpXq()
        window.scrollTo(0, 0)
    }

    ajaxSpXq() {

        var jylx = CoojiePage.getCoojie('jylx');
        var user_id = CoojiePage.getCoojie('user_id');

        var id = InterfaceUtil.getHashParameters().id;
        const that = this;
        //智能采购
        $.ajax({
            url: InterfaceUtil.getUrl(50),
            type: "post",
            data: {
                "gid": id, "jylx": jylx, "member_id": user_id
            },
            dataType: "json",
            success: function (data) {
                if (data.status === 1) {
                    if (data.data.combination.length !== 0) {
                        that.setState({
                            spxq: data.data.info,
                            arrTilte: [],
                            combination: data.data.combination,
                            arr2: data.data.combination,
                        });
                        that.calculationMoney(data.data.combination);
                    } else {
                        that.setState({
                            spxq: data.data.info,
                            combination: [],
                            arrTilte: [],
                            arr2: []
                        })
                    }
                }
            }
        });

    }

    calculationMoney(data) {
        let moneys = 0;
        let hprice;
        let arrTitle = [];
        for (let i = 0, len = data.length; i < len; i++) {
            arrTitle.push(data[i].title);
            hprice = data[i].hprice ? hprice = parseFloat(data[i].hprice)
                : hprice = parseFloat(data[i].prices);
            moneys = moneys + hprice;
        }
        moneys = moneys.toFixed(2)
        this.setState({
            moneys: moneys,
            arrTitle: arrTitle
        })

    }

    changeVal(e, id) {
        var val = e.target.value;
        var arr = this.state.spxq;
        let show = false;

        for (var i = 0, len = arr.length; i < len; i++) {
            if (arr[i].id === id) {
                arr[i].zxdw1 = val;
                show = !show;
            }
        }
        if (show) {
            this.setState({splist: arr});
        }
    }

    onChanges(e, title, i, id) {
        let moneys = this.state.moneys;
        let val = e.target.value;
        let arrTilte = this.state.arrTitle;
        let arr3 = [], arr2 = this.state.combination;
        arrTilte[i] = e.target.checked ? title : '';
        moneys = e.target.checked ? parseFloat(moneys) + parseFloat(val) : parseFloat(moneys) - parseFloat(val);
        moneys = moneys.toFixed(2);
        // for (let i=0,len=arr2.length;i<len;i++){
        //     // if(arr)
        // }
        this.setState({
            moneys: moneys,
            arrTilte: arrTilte,
        })
    }

    buycarBestGoods() {
        let checks = $('.bestBoxs2').find("input[type='checkbox']");
        let arr = this.state.combination, goods_id = [], goods_sl = [];
        for (let i = 0, len = checks.length; i < len; i++) {
            if ($(checks[i]).is(':checked')) {
                goods_id.push(arr[i].id);
                goods_sl.push(arr[i].zxdw);
            }
        }
        goods_id = JSON.stringify(goods_id);
        goods_sl = JSON.stringify(goods_sl);
        const _this = this;
        $.ajax({
            url: InterfaceUtil.getUrl(32),
            type: "post",
            data: {
                username: _this.username,
                token: _this.token,
                goods_id: goods_id,
                goods_sl: goods_sl,
            },
            dataType: "json",
            success: function (data) {
                // console.log(data);
                if (data.status === 1) {
                    CoojiePage.setBuyCarOk();
                } else {
                    alert(data.info);
                }
            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                // 状态码
                console.log(XMLHttpRequest.status);
                // 状态
                console.log(XMLHttpRequest.readyState);
                // 错误信息
                console.log(textStatus);
            }
        });

    }

    render() {
        let data = this.state.spxq.length === 1 ? this.state.spxq : null;
        let spxq = this.state.spxq.length === 1 ? (this.state.spxq)[0].title : null;
        let tab1, tab2, tab3;
        let datas = this.state;

        if (data) {
            tab1 = data[0].spjj ? data[0].spjj : null;
            tab2 = data[0].sms ? data[0].sms : null;
            tab3 = data[0].shhbzh ? data[0].shhbzh : null;
        }
        let _data = this.state.combination;
        let _isShowBestBoxs = _data.length === 0 ? 'display' : '';
        let _combination = _data.map((item, i) => {
            let _prices = item.hprice ? item.hprice : item.prices;
            return <div key={item.id + "_prices"}>
                <Checkbox onChange={(e) => this.onChanges(e, item.title, i, item.id)} defaultChecked value={_prices}>
                    <img src={this.state.lujin + item.image} alt="" className='spxq_dd_img1'/>
                    <p className='spxq_dd_p hid'>{item.title}</p>
                    <p className='spxq_dd_p hid'>{item.scqy}</p>
                    <p className='spxq_dd_p hid'>{item.sku}</p>
                    <p className='spxq_dd_p hid'>件装量：<span>{item.zxdw}</span></p>
                    <p className='spxq_dd_p orange'>￥<span className='orange'>{_prices}</span></p>
                </Checkbox>
            </div>
        });
        let _arrTitle = this.state.arrTitle.map((item, i) => {
            return <div key={i + '_arrTitle'}>
                {item}
            </div>
        });

        return (
            <div>
                {/*头部标题*/}
                <div className='contair shangpinxiangqing_header_biaoqian'>
                    <div className='contain'>
                        <span className='blue'>当前位置：</span>
                        <span className='blue cursor' onClick={(e) => {
                            this.houtui(e)
                        }}>返回上一页</span>
                        <span> >{spxq}</span>
                    </div>
                </div>
                {/*商品详情*/}
                {
                    datas.spxq.map(function (item, i) {
                        // console.log(item);
                        let islimit = item.activity_xgsl > 99999 ? `` : item.activity_xgsl;
                        let isActivity = item.hprice ? <span key={i + 'isActivity'}>
                          <span className='font20 orange'>{item.hprice}</span>
                          <span className='shangpinxiangqing_sp_xinxi_jiage_span'>￥{item.prices}</span>
                            <span className='red font13 bold'>( {item.activity_remark} {islimit})</span>
                        </span> :
                            <span className='font20 orange'>{item.prices}</span>;
                        let Collection2 = item.is_f !== 0 ? 'chanpinzhongxin_sp_img_shoucang chanpinzhongxin_sp_img_shoucang_current'
                            : 'chanpinzhongxin_sp_img_shoucang';
                        let isKcs=item.kcs>1000?`充裕`:item.kcs;
                        return (
                            <div className='contain marginTop20' key={item.id + '_isActivity'}>

                                {/*商品图片*/}
                                <div className='shangpinxiangqing_sp_img marginRight20 floatleft relative'
                                     data={item.is_f}>
                                    <BigorSmallPage {...this.state.spxq[i]}/>

                                    <div className={Collection2} data={item.is_f} onClick={(e) => {
                                        this.colorOrder(e, item.is_f,i)
                                    }}>
                                        <img src={require("../../images/shangpingxiangqing/xinBai.png")}
                                             className='marginRight10' alt=""/>收藏
                                    </div>
                                </div>
                                {/*商品信息*/}
                                <div className='shangpinxiangqing_sp_xinxi floatleft'>
                                    <div className='shangpinxiangqing_sp_xinxi_mingzi'>{item.title}</div>

                                    <div className='shangpinxiangqing_sp_xinxi_jiage'>
                                        <div className='paddingTop5'>
                                            零售价：<span
                                            className='shangpinxiangqing_sp_xinxi_jiage_span'>￥{item.scprice}</span>
                                        </div>
                                        <div>供货价：
                                            {isActivity}
                                        </div>
                                        <div>促&emsp;销：<span
                                            className='shangpinxiangqing_sp_xinxi_jiage_baoyou'>包邮</span>
                                        </div>
                                    </div>

                                    <div className='shangpinxiangqing_sp_xinxi_ziliao'>
                                        {/*规格*/}
                                        <div>
                                            <span
                                                className='shangpinxiangqing_sp_xinxi_ziliao_kuan hid'>商品规格：{item.sku}</span>
                                            <span
                                                className='shangpinxiangqing_sp_xinxi_ziliao_kuan'>批准文号：{item.pzwh}</span>

                                        </div>
                                        {/*厂家*/}
                                        <div>
                                            <span
                                                className='shangpinxiangqing_sp_xinxi_ziliao_kuan hid'>生产厂家：{item.scqy}</span>
                                            <span
                                                className='shangpinxiangqing_sp_xinxi_ziliao_kuan'>件装量：{item.jzl}{item.bzdw}/件</span>
                                        </div>
                                        {/*单位*/}
                                        <div>
                                            <span
                                                className='shangpinxiangqing_sp_xinxi_ziliao_kuan'>包装单位：{item.bzdw}</span>
                                            <span
                                                className='shangpinxiangqing_sp_xinxi_ziliao_kuan'>中包装：{item.zxdw}</span>
                                        </div>
                                        {/*效期*/}
                                        <div>
                                            {/*（已售{item.goods_ys}）*/}
                                            <span
                                                className='shangpinxiangqing_sp_xinxi_ziliao_kuan'>库存数量：{isKcs}</span>
                                            <span
                                                className='shangpinxiangqing_sp_xinxi_ziliao_kuan'>效期：{item.vstime}</span>
                                        </div>
                                        {/*加入购物车*/}
                                        <div className='inStockBox'>

                                            <span>购买数量：</span>
                                            <span>
                 <input type="hidden" value={item.zxdw}/>
                 <button className='shangpinxiangqing_sp_xinxi_ziliao_kuangao' onClick={(e) => {
                     this.jian8(e)
                 }}>-</button>
                  <input type="text" className='shangpinxiangqing_sp_xinxi_ziliao_shuliang' value={item.zxdw1}
                         onChange={(e) => this.changeVal(e, item.id)}
                         onBlur={(e) => {
                             this.shuliang(e)
                         }}/>
                 <button className='shangpinxiangqing_sp_xinxi_ziliao_kuangao' onClick={(e) => {
                     this.jia8(e)
                 }}>+</button>
               </span>
                                            <span className='shangpinxiangqing_sp_xinxi_ziliao_car' onClick={(e) => {
                                                this.buycar(e)
                                            }}>加入购物车</span>
                                            <span className='shangpinxiangqing_sp_xinxi_ziliao_buy' onClick={(e) => {
                                                this.buycar5(e)
                                            }}>立即购买</span>
                                        </div>
                                        {/*支付方式*/}
                                        <div>
                                            <span>支付方式：</span>
                                            <span><img src={require("../../images/shangpingxiangqing/zaixianzhifu.png")}
                                                       alt=""/></span>
                                            <span> 在线支付（微信、支付宝） </span>
                                            <span><img
                                                src={require("../../images/shangpingxiangqing/yinghangkazhifu.png")}
                                                alt=""/></span>
                                            <span> 银行汇款</span>
                                        </div>
                                    </div>
                                </div>
                                {/*客服热线*/}
                                <div className='shangpinxiangqing_sp_kehu floatRight'>
                                    {/*车*/}
                                    <div>
             <span className='shangpinxiangqing_sp_kehu_car'>
               <img src={require("../../images/shangpingxiangqing/che.png")}
                    className='shangpinxiangqing_sp_kehu_car_img' alt=""/>
               <div className='shangpinxiangqing_sp_kehu_car_xiadan'>
                 <span className='font18 white1'>满500元包邮</span>
                  <span className='white1'>满200即可下单</span>
               </div>
               <div className='clear'/>
             </span>
                                    </div>
                                    {/*二维码*/}
                                    <div className='shangpinxiangqing_sp_kehu_er'>
                                        <img src={require("../../images/shangpingxiangqing/erweima.png")}
                                             className='shangpinxiangqing_sp_kehu_er_xian' alt=""/>
                                    </div>
                                    {/*客户热线*/}
                                    <div className='marginLeft10 customerServiceHotline'>
                                        <p className='font16 marginBottom5'>客服热线：</p>
                                        <p className='font20'>028-83211111</p>
                                    </div>
                                </div>
                                {/*清除浮动*/}
                                <div className='clear'/>
                            </div>
                        )
                    }, this)
                }
                {/*最佳搭档*/}
                <div className='contain'>
                    {/*排行榜*/}
                    <Rank/>
                    {/*右侧推荐*/}

                    <div className='shangpinxiangqing_sp_dadang'>
                        <div className={_isShowBestBoxs}>
                            <div className='shangpinxiangqing_sp_dadang_title'>
                                <span
                                    className='shangpinxiangqing_sp_dadang_title_span shangpinxiangqing_sp_dadang_title_span_current'>最佳搭档</span>
                            </div>
                            {/*最佳搭档内容*/}
                            <div className="bestBoxs2">
                                {_combination}
                                <div className='shangpinxiangqing_sp_dadang_con_dadangneirong2'>
                                    <div className='shangpinxiangqing_sp_dadang_con_dadangneirong_div'>最佳搭档</div>
                                    {/*<p className='marginTop5 hid' data-index={this.state.com0.id}>{this.state.com0.title}</p>*/}
                                    <div className='arrTitleBox'>
                                        {_arrTitle}
                                    </div>
                                    <p className='shangpinxiangqing_sp_dadang_con_dadangneirong_p'>
                                        <span
                                            className='shangpinxiangqing_sp_dadang_con_dadangneirong_p_span3 zongjia'>
                                            {datas.moneys}</span>
                                        <span
                                            onClick={() => this.buycarBestGoods()}
                                            className='shangpinxiangqing_sp_dadang_con_dadangneirong_p_span4 marginTop10'>加入购物车</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="card-container">
                            <Tabs defaultActiveKey="card-container2">
                                <TabPane tab="商品详情" key="card-container1">
                                    <div dangerouslySetInnerHTML={{__html: tab1}}/>
                                </TabPane>
                                <TabPane tab="药品说明书" key="card-container2">
                                    <div dangerouslySetInnerHTML={{__html: tab2}}/>
                                </TabPane>
                                <TabPane tab="售后保障" key="card-container3">
                                    <div dangerouslySetInnerHTML={{__html: tab3}}/>
                                </TabPane>
                            </Tabs>
                        </div>
                    </div>
                    <div className='clear'/>
                </div>
            </div>
        );
    }

}

export default withRouter(Shangpinxiangqing);
// export default Shangpinxiangqing;
