import React from 'react';
import {Link, withRouter} from 'react-router-dom';
import InterfaceUtil from '../../util/InterfaceUtil';
import $ from 'jquery';

import '../../styles/zhongyao/zhongyao.css';


class Zhongyao2 extends React.Component {
    constructor() {
        super(); //调用父类的构造方法；
        this.state = {
            count: 0,
            abc: 0,
            rank1: [],
            rank2: [],
            rank3: [],
            rank4: [],
            lujin: InterfaceUtil.getImgUrl(),
            show: false,
        }
    }

    //js事件
    rank(e) {
        if (this.state.abc == 0) {
            var a = e.target;
            if (a.children.length == 4) {
                a.className = 'zhongyao_rank_ul_li zhongyao_rank_ul_li_current';
                a.firstChild.className = 'zhongyao_rank_ul_yuan floatleft';
                a.firstChild.nextSibling.className = 'zhongyao_rank_ul_img_current floatleft';
                a.firstChild.nextSibling.nextSibling.className = 'zhongyao_rank_ul_span_current floatleft hid width100';
                a.firstChild.nextSibling.nextSibling.nextSibling.className = 'zhongyao_rank_ul_span_current floatleft';
                this.setState({abc: '1'});
            } else {
                a.parentNode.className = 'zhongyao_rank_ul_li zhongyao_rank_ul_li_current';
                a.parentNode.firstChild.className = 'zhongyao_rank_ul_yuan floatleft';
                a.parentNode.firstChild.nextSibling.className = 'zhongyao_rank_ul_img_current floatleft';
                a.parentNode.firstChild.nextSibling.nextSibling.className = 'zhongyao_rank_ul_span_current floatleft hid width100';
                a.parentNode.firstChild.nextSibling.nextSibling.nextSibling.className = 'zhongyao_rank_ul_span_current floatleft';
                this.setState({abc: '1'});
            }
        }
    }

    rank1(e) {
        if (this.state.abc == 1) {
            var a = e.target;
            if (a.children.length == 4) {
                a.className = 'zhongyao_rank_ul_li';
                a.firstChild.className = 'zhongyao_rank_ul_yuan floatleft';
                a.firstChild.nextSibling.className = 'zhongyao_rank_ul_img_current display floatleft';
                a.firstChild.nextSibling.nextSibling.className = 'floatleft hid width165';
                a.firstChild.nextSibling.nextSibling.nextSibling.className = 'floatRight marginRight20';
                this.setState({abc: '0'});
            } else {
                a.parentNode.className = 'zhongyao_rank_ul_li';
                a.parentNode.firstChild.className = 'zhongyao_rank_ul_yuan floatleft';
                a.parentNode.firstChild.nextSibling.className = 'zhongyao_rank_ul_img_current display floatleft';
                a.parentNode.firstChild.nextSibling.nextSibling.className = 'floatleft hid width165';
                a.parentNode.firstChild.nextSibling.nextSibling.nextSibling.className = 'floatRight marginRight20';
                this.setState({abc: '0'});
            }
        }

    }

    //跳转
    xiangqing1(e, id) {
        if (e.target.children != 0) {
            this.props.history.push('/Shangpinxiangqing?&id=' + id);
        } else if (e.target.children == 1) {
            var id = e.target.parentNode.parentNode.getAttribute('data');
            // window.location.href='/Shangpinxiangqing?&id='+id;
            this.props.history.push('/Shangpinxiangqing?&id=' + id);
        } else {
            var id = e.target.parentNode.getAttribute('data');
            this.props.history.push('/Shangpinxiangqing?&id=' + id);
        }
        this.setState({
            show: !this.state.show,
        })
        window.scrollTo(0, 0)
    }

    componentDidMount() {
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
        var jylx = getCookie('jylx');
        const that = this;
        //  本周销量排行
        $.ajax({
            url: InterfaceUtil.getUrl(53),
            type: "post",
            data: InterfaceUtil.addTime({}),
            dataType: "json",
            success: function (data) {

                if (data.data.length == 0) {

                } else {
                    that.setState({
                        rank1:data.data.week_rank,
                        rank2:data.data.month_rank
                    });
                }
            }
        });




    }

    render() {
        return (
            <div className='floatleft marginBottom20'>
                {/*销量排行榜*/}
                <div className='marginTop20 zhongyao_rank'>
                    <div className='zhongyao_rank_title'>
                        <p>本周销量排行</p>
                    </div>
                    <ul className='zhongyao_rank_ul' id='cd'>
                        {
                            this.state.rank1.map(function (item, i) {
                                return (
                                    <li key={item.id + 'zhY2rank1'} className='relative' data={item.id}
                                        onClick={(e) => {
                                            this.xiangqing1(e, item.id)
                                        }}>
                                        <div className='zhongyao_rank_con_zheng floatleft'><img
                                            src={this.state.lujin + item.image} className='width69' alt=""/></div>
                                        <div className='zhongyao_rank_ul_rank'>{i + 1}</div>
                                        <span className='floatleft hid width110'>{item.name}</span>
                                        <span className='floatleft hid width110'>精选{item.sku}</span>
                                        <span className='floatleft hid width110'>{item.scqy}</span>
                                        <div className='clear'></div>

                                    </li>
                                )
                            }, this)
                        }
                        {/*{*/}
                            {/*this.state.rank1.map(function (item, i) {*/}
                                {/*return (*/}
                                    {/*<li key={item.id + 'zhYrank2'} className='zhongyao_rank_ul_li'*/}
                                        {/*onMouseOver={(e) => {*/}
                                            {/*this.rank(e)*/}
                                        {/*}}*/}
                                        {/*onMouseOut={(e) => {*/}
                                            {/*this.rank1(e)*/}
                                        {/*}} data={item.id}*/}
                                        {/*onClick={(e) => {*/}
                                            {/*this.xiangqing1(e, item.id)*/}
                                        {/*}}>*/}
                                        {/*/!*<Link to={'/Shangpinxiangqing?&id='+item.id}>*!/*/}
                                        {/*<div className='zhongyao_rank_ul_yuan floatleft'>{i + 4}</div>*/}
                                        {/*<img src={this.state.lujin + item.image} alt=""*/}
                                             {/*className='zhongyao_rank_ul_img_current display floatleft'/>*/}
                                        {/*<span className='floatleft width165 hid'>{item.name}</span>*/}
                                        {/*<div className='clear'/>*/}
                                        {/*/!*</Link>*!/*/}

                                    {/*</li>*/}
                                {/*)*/}
                            {/*}, this)*/}
                        {/*}*/}
                        {/*<li className='zhongyao_rank_ul_li 'onMouseOver={(e)=>{this.rank(e)}} onMouseOut={(e)=>{this.rank1(e)}}>*/}
                        {/*<div className='zhongyao_rank_ul_yuan floatleft'>5</div>*/}
                        {/*<img src="../../images/zhongyao/pingzhuang_main_b.png" alt="" className='zhongyao_rank_ul_img_current display floatleft'/>*/}
                        {/*<span className='floatleft '>枸杞子</span>*/}
                        {/*<span className='floatRight marginRight20 '>50g</span>*/}
                        {/*<div className='clear'></div>*/}
                        {/*</li>*/}
                        {/*<li className='zhongyao_rank_ul_li'>*/}
                        {/*<div className='zhongyao_rank_ul_yuan floatleft'>6</div>*/}
                        {/*<span className='floatleft'>枸杞子</span>*/}
                        {/*<span className='floatRight marginRight20'>50g</span>*/}
                        {/*</li>*/}
                        {/*<li className='zhongyao_rank_ul_li'>*/}
                        {/*<div className='zhongyao_rank_ul_yuan floatleft'>7</div>*/}
                        {/*<span className='floatleft'>枸杞子</span>*/}
                        {/*<span className='floatRight marginRight20'>50g</span>*/}
                        {/*</li>*/}
                        {/*<li className='zhongyao_rank_ul_li'>*/}
                        {/*<div className='zhongyao_rank_ul_yuan floatleft'>8</div>*/}
                        {/*<span className='floatleft'>枸杞子</span>*/}
                        {/*<span className='floatRight marginRight20'>50g</span>*/}
                        {/*</li>*/}
                        {/*<li className='zhongyao_rank_ul_li'>*/}
                        {/*<div className='zhongyao_rank_ul_yuan floatleft'>9</div>*/}
                        {/*<span className='floatleft'>枸杞子</span>*/}
                        {/*<span className='floatRight marginRight20'>50g</span>*/}
                        {/*</li>*/}
                        {/*<li className='zhongyao_rank_ul_li'>*/}
                        {/*<div className='zhongyao_rank_ul_yuan floatleft'>10</div>*/}
                        {/*<span className='floatleft'>枸杞子</span>*/}
                        {/*<span className='floatRight marginRight20'>50g</span>*/}
                        {/*</li>*/}
                        <div className='clear'></div>
                    </ul>
                    <div className='zhongyao_rank_title marginTop20'>
                        <p>本月销量排行</p>
                    </div>
                    <ul className='zhongyao_rank_ul'>
                        {
                            this.state.rank2.map(function (item, i) {
                                return (
                                    <li className='relative' key={item.id + 'zhYrank3'} data={item.id} onClick={(e) => {
                                        this.xiangqing1(e, item.id)
                                    }}>
                                        <div className='zhongyao_rank_con_zheng floatleft'><img
                                            src={this.state.lujin + item.image} className='width69' alt=""/></div>
                                        <div className='zhongyao_rank_ul_rank'>{i + 1}</div>
                                        <span className='floatleft hid width110'>{item.name}</span>
                                        <span className='floatleft hid width110'>精选{item.standard}</span>
                                        <span className='floatleft hid width110'>{item.enterprise}</span>
                                        <div className='clear'></div>
                                    </li>
                                )
                            }, this)
                        }
                        {/*{*/}
                            {/*this.state.rank2.map(function (item, i) {*/}
                                {/*return (*/}
                                    {/*<li key={item.id + 'zhYrank4'} className='zhongyao_rank_ul_li'*/}
                                        {/*onMouseOver={(e) => {*/}
                                            {/*this.rank(e)*/}
                                        {/*}} onMouseOut={(e) => {*/}
                                        {/*this.rank1(e)*/}
                                    {/*}} key={i} data={item.id}*/}
                                        {/*onClick={(e) => {*/}
                                            {/*this.xiangqing1(e, item.id)*/}
                                        {/*}}>*/}
                                        {/*<div className='zhongyao_rank_ul_yuan floatleft'>{i + 5}</div>*/}
                                        {/*<img src={this.state.lujin + item.image} alt=""*/}
                                             {/*className='zhongyao_rank_ul_img_current display floatleft'/>*/}
                                        {/*<span className='floatleft width165 hid'>{item.name}</span>*/}
                                        {/*<div className='clear'></div>*/}
                                    {/*</li>*/}
                                {/*)*/}
                            {/*}, this)*/}
                        {/*}*/}

                    </ul>
                    {/*<div className='zhongyao_rank_title marginTop20 aaa'>*/}
                    {/*<p>特别推荐</p>*/}
                    {/*</div>*/}
                    {/*<ul className='zhongyao_rank_ul aaa'>*/}
                    {/*<li className='zhongyao_rank_ul_li1'></li>*/}
                    {/*<li className='zhongyao_rank_ul_li1'></li>*/}
                    {/*<li className='zhongyao_rank_ul_li1'></li>*/}
                    {/*</ul>*/}
                </div>
            </div>
        );
    }
}

export default withRouter(Zhongyao2);
