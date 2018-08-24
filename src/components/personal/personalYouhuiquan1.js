// require('styles/common.css');
// require('styles/personal/personalDianzihetong.css')
import $ from 'jquery';
import React from 'react';
import {Pagination} from 'antd';
// import $ from '../../js/jquery.min';
import {Link, withRouter} from 'react-router-dom';
import InterfaceUtil from '../../util/InterfaceUtil';
import CoojiePage from '../../util/CoojiePage';
import LoginPage from '../../util/LoginPage';
import '../../styles/personal/personalYouhuiquan.css'

class PersonalYouhuiquan extends React.Component {

    constructor(props) {
        super(props); //调用父类的构造方法；
        this.loginPage = new LoginPage();
        this.state = {
            yhq: [],
            lujin: InterfaceUtil.getImgUrl(),
            count1: '',
            count0: '',
            count2: '',
            count3: '',
            cons: 1,
            page: 1,
            status: 1,
            order: 1
        }
    }

    //显示优惠券的子集分类
    value(e) {
        this.setState({
            status: e.target.value
        },()=>this.startAjax())


    }

    //切换颜色
    color(e,id) {

        $('.title_1').removeClass('orange');
        $(e.target).addClass('orange');
        this.setState({
            order: id
        },()=>this.startAjax())
    }

    //分页
    fenye(e) {
        this.setState({
            page: e
        },()=>this.startAjax())


    }


    componentDidMount() {
        this.startAjax();
    }

    startAjax() {
        var token = CoojiePage.getCoojie('token');
        var user_id = CoojiePage.getCoojie('user_id');
        const that = this;
        //优惠券内容

        $.ajax({
            url: InterfaceUtil.getUrl(45),
            type: "post",
            data: InterfaceUtil.addTime({
                'token': token, 'page': that.state.page, 'user_id': user_id, pageSize: 12,
                status: that.state.status, order: that.state.order
            }),
            dataType: "json",
            success: function (data) {

                that.loginPage.ajaxLogin(data.status, that.props);
                if (data.data.length == 0) {

                } else {
                    that.setState({
                        yhq: data.data.list,
                        cons: data.data.count
                    });
                    that.refs.youhuiquan.className = 'display'
                }
            }
        });
    }

    render() {
        const data = this.state
        return (
            <div className=' width988 floatRight'>
                {/*电子合同标题*/}
                <div className='personal_Dindan_title'>
                    <p className='marginLeft20 fontFamily fontWeight'>
                        优惠券
                        <Link to="/Lingqu">
                            <span
                                className='floatRight personal_Youhuiquan_title_a'>去领取更多优惠券</span>
                        </Link>
                        <div className='clear'/>
                    </p>
                </div>
                {/*内容*/}
                <div className='marginTop20 bgWhite'>
                    <div className='xian'/>
                    <div className='personal_Youhuiquan_title_div marginBottom20'>
                        <select name="" className='personal_Youhuiquan_title_select' onChange={(e) => {
                            this.value(e)
                        }}>
                            <option value="1">可用优惠券</option>
                            <option value="2">已用优惠券</option>
                            <option value="3">过期优惠券</option>
                        </select>
                        <span className='floatleft title_1 cursor' onClick={(e) => {
                            this.color(e,2)
                        }}>即将过期</span>
                        {/*<span className='floatleft title_1 cursor' onClick={(e) => {*/}
                        {/*this.color(e)*/}
                        {/*}}>最优惠</span>*/}
                        <span className='floatleft title_1 cursor' onClick={(e) => {
                            this.color(e,1)
                        }}>新到账</span>
                        <span className='floatleft title_2 cursor display'>(仅展示最近使用优惠券)</span>
                        <span className='floatleft title_3 cursor display'>(仅展示最近过期优惠券)</span>

                        <div className='clear'/>
                    </div>
                    <div className='personal_Youhuiquan_title_div1'>
                        <ul>
                            {
                                this.state.yhq.map(function (item) {
                                    let isUsed = item.use_status == 1 ?
                                        <Link to={'/Chanpinzhongxin'} className='personal_Youhuiquan_title_div1_p_a'>
                                            立即使用</Link> : null;
                                    // let isUsed = item.is_time == 3 ? null : isUsed2;
                                    // if()
                                    let type = null;
                                    type = item.coupon_type === `1` ? <div>
                                        <span className='personal_Youhuiquan_title_div1_p_span'>￥</span>
                                        <span
                                            className='personal_Youhuiquan_title_div1_p_span1'>
                                                    {item.name}
                                                    </span>
                                    </div> : <div>
                                         <span
                                             className='personal_Youhuiquan_title_div1_p_span1'>
                                                    {item.name}
                                                    </span>
                                        <span
                                            className='youhuiquan_span'>折</span>
                                    </div>
                                    return (
                                        <li key={item.id} data={item.is_time} data-index={item.is_use}
                                            data-a={item.type}
                                            className='personal_Youhuiquan_li'>
                                            <div className='personal_Youhuiquan_title_div1_p' key={item.id}>
                                                {type}
                                                <span
                                                    className='personal_Youhuiquan_title_div1_p_span2'>

                                                </span>
                                                <span className='personal_Youhuiquan_title_div1_p_span3'>
                                                    优惠券
                                                    <span
                                                        className='white1'>【满{item.use_condition}元可以使用】</span>
                                                </span>
                                                <span
                                                    className='personal_Youhuiquan_title_div1_p_span4'>{item.describe}可用</span>
                                                <span
                                                    className='personal_Youhuiquan_title_div1_p_span5'>
                                                    有效期【{InterfaceUtil.fmtDate(item.start_time)}-{InterfaceUtil.fmtDate(item.end_time)}】
                                                </span>
                                                {isUsed}
                                                <img
                                                    src={require("../../images/personal/jijiangguoqi.png")}
                                                    alt=""
                                                    className='personal_Youhuiquan_title_div1_p_img  youhuiquan_jijiangguoqi display'/>
                                                <img
                                                    src={require("../../images/personal/yiguoqi.png")}
                                                    alt=""
                                                    className='personal_Youhuiquan_title_div1_p_img2 display youhuiquan_yiguoqi'/>
                                                <img
                                                    src={require("../../images/personal/yishanchu.png")}
                                                    alt=""
                                                    className='personal_Youhuiquan_title_div1_p_img2 display'/>
                                                <img
                                                    src={require("../../images/personal/yishiyong.png")}
                                                    alt=""
                                                    className='personal_Youhuiquan_title_div1_p_img2 youhuiquan_yishiyong display'/>
                                                <img src={require("../../images/youhuiquan/dazhe.png")}
                                                     alt=""
                                                     className='personal_Youhuiquan_title_div1_p_img6 display'/>
                                            </div>
                                        </li>
                                    )
                                }, this)
                            }
                            <div ref='youhuiquan' className='center'>
                                <p className='font20'>亲，您没有该类别的优惠券哦~</p>
                                <div className='personalCon1_table_tr_p'><Link to="/Chanpinzhongxin"><span
                                    className='personalCon1_table_td'>去产品中心</span></Link></div>
                            </div>
                            <div className='clear'/>
                        </ul>
                        <div className='xian'></div>
                    </div>
                    {/*分页*/}
                    <div className='width988 marginTop20 marginBottom20 paddingBtm20'>
                        <div className='floatRight personal_zhanneixin_title_div3_span3'>
                            <Pagination showQuickJumper={true}
                                        defaultCurrent={1}
                                        defaultPageSize={12}
                                        total={data.cons}
                                        onChange={(e) => {
                                            this.fenye(e)
                                        }}/>
                        </div>
                        <div className='clear'></div>
                    </div>
                    <div className='xian'></div>

                </div>
            </div>
        );
    }


}


export default withRouter(PersonalYouhuiquan);
