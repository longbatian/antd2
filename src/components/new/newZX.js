import React from 'react';
import {Link, withRouter} from 'react-router-dom';
import {Carousel, Pagination} from 'antd';
import InterfaceUtil from '../../util/InterfaceUtil';
import $ from 'jquery';

class NewZX1 extends React.Component {
    constructor(props) {
        super(props); //调用父类的构造方法；
        this.state = {
            news_title: [],
            news_con: [],
            cons: '',
            ids:1,
            page:1,
            lujin: 'http://www.scjuchuang.com/',
        }
    }

    xuanze(e,id) {

        this.setState({
            ids:id
        },()=>{
            this.startAjax()
        })
    }

    fenye(e) {

        this.setState({
            page:e
        },()=>{
            this.startAjax()
        })
    }
    startAjax(){
        // var pid = getCookie('pid');
        InterfaceUtil.goTop();
        const that = this;
        //  广告位
        $.ajax({
            url: InterfaceUtil.getUrl(31),
            type: "post",
            data: InterfaceUtil.addTime({
                type: that.state.ids,
                page: that.state.page,
                pageSize: 10
            }),
            dataType: "json",
            success: function (data) {
                console.log(data)
                if (data.data.length == 0) {

                } else {
                    that.setState({
                        news_title: data.data.news_type,
                        news_con: data.data.news_list,
                        cons: data.data.news_count,
                    });
                }
            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {

            }
        });
    }
    tiaozhan(e) {
        if (e.target.children.length == 0) {
            var a = e.target.parentNode.parentNode.getAttribute('data');
            document.cookie = "nid=" + a;
            this.props.history.push('/NewXq');
        } else {
            var a = e.target.parentNode.getAttribute('data');
            document.cookie = "nid=" + a;
            this.props.history.push('/NewXq');
            // window.location.replace('#/NewXq');
        }
    }

    tiaozhan1(e) {
        var a = e.target.parentNode.getAttribute('data');
        document.cookie = "nid=" + a;
        this.props.history.push('/NewXq/' + a);
        // window.location.replace('#/NewXq');
    }

    //跳转
    huanye1(e) {

        var nid = e.target.getAttribute('data');
        document.body.scrollTop = document.documentElement.scrollTop = 0;
        document.cookie = "nid=" + nid;
        this.props.history.push('/NewXq/' + nid);
        // window.location.replace('#/NewXq');
    }

    componentDidMount() {
        this.startAjax()
    }

    render() {
        return (
            <div className='container'>
                <div className='contain'>
                    {/*左侧导航栏*/}
                    <div className='news_zuo floatleft marginTop20'>
                        <div className='news_zuo_head'>
                            聚创新闻
                            <img src={require("../../images/xiajiantou.png")} className='news_zuo_head_img' alt=""/>
                        </div>
                        <ul>
                            {
                                this.state.news_title.map(function (item, i) {
                                    return (
                                        <li
                                            className='news_zuo_head_li'
                                            onClick={(e) => {
                                                this.xuanze(e,item.id)
                                            }}
                                            data={item.id}>
                                            {item.name}
                                        </li>
                                    )
                                }, this)
                            }
                        </ul>
                        <div className='news_zuo_head_div'>
                            热点新闻
                        </div>
                        <div className='news_zuo_head_div1'>
                            <Carousel autoplay dots={false}>
                                {
                                    this.state.news_con.map(function (item, i) {
                                        return (
                                            <div>
                                                <Link to={'/NewXq/' + item.id}>
                                                    <img
                                                        src={item.image}
                                                        className='news_zuo_head_div1'
                                                        data={item.id} alt=""
                                                        // onClick={(e) => {
                                                        //     this.huanye1(e)
                                                        // }}
                                                    />
                                                </Link>
                                            </div>
                                        )
                                    }, this)
                                }
                            </Carousel>
                        </div>
                    </div>
                    {/*右侧内容栏*/}
                    <div className='news_you floatRight marginTop20'>
                        <div className='news_you_div'>
                            <p className='marginLeft5'>当前位置 > <Link to="/Index">首页</Link> > 新闻中心 </p>
                        </div>
                        <ul>
                            {
                                this.state.news_con.map(function (item, i) {
                                    let time=InterfaceUtil.fmtDate(item.created_time);
                                    return (
                                        <li className='news_you_li cursor' key={item.id}>
                                            <div className='news_you_li_div floatleft'>
                                                <img src={item.image} className='news_you_li_div'
                                                     alt=""/>
                                            </div>
                                            <div className='floatleft marginLeft20' data={item.id}>
                                                <Link to={'/NewXq/' + item.id}>
                                                    <p className='marginBottom5'
                                                        //    onClick={(e) => {
                                                        //     // this.tiaozhan(e)
                                                        // }}
                                                    >

                                                        <span
                                                            className='news_you_li_p_span floatleft'>{item.title}</span>
                                                        <span
                                                            className='news_you_li_p_span1 floatRight'>[{time}]</span>
                                                        <div className='clear'></div>
                                                    </p>
                                                </Link>
                                                <Link to={'/NewXq/' + item.id}>
                                                    <p className='news_you_li_p'
                                                        //    onClick={(e) => {
                                                        //     this.tiaozhan1(e)
                                                        // }}
                                                    >
                                                        {item.re}
                                                    </p>
                                                </Link>

                                                <div className='clear'/>
                                            </div>
                                            <div className='clear'></div>
                                        </li>
                                    )
                                }, this)
                            }
                        </ul>
                        {/*分页*/}
                        <div className='marginTop20 marginBottom20 paddingBtm20'>
                            <span className='floatRight personal_zhanneixin_title_div3_span3'><Pagination
                                showQuickJumper={true} defaultCurrent={1} defaultPageSize={10} total={this.state.cons}
                                onChange={(e) => {
                                    this.fenye(e)
                                }}/></span>
                            <div className='clear'></div>
                        </div>
                    </div>
                    <div className='clear'></div>
                </div>

            </div>
        )
    }

}

export default withRouter(NewZX1);
