import React from 'react';
import {Link} from 'react-router-dom';
import InterfaceUtil from '../../util/InterfaceUtil';
import CoojiePage from '../../util/CoojiePage';
import $ from 'jquery';
import '../../styles/index/benzhoujingxuan.css'

class Benzhoujinxuan extends React.Component {
    constructor(props) {
        super(props); //调用父类的构造方法；
        this.state = {
            guanggao: [],
            jingxuan: [],
            length1: '',
            week: '',
            lujin: InterfaceUtil.getImgUrl(),
            timeOver: false,
        }
    }

    jingxuan(e) {

        $(e.target).parents('.jingxuan_div_ul').find('li').removeClass('jingxuan_div_ul_li_current ');
        $(e.target).parents('.jingxuan_div_ul_li').addClass('jingxuan_div_ul_li_current');
        var index = $(e.target).parents('.jingxuan_div_ul_li').index();
        $('.jingxuan_div_ul1').hide();
        $('.jingxuan_div_ul1').eq(index).show();
        $('.jingxuan_div_ul1').eq(index).find('li').show();
    }

    xiangqing2(e) {
        var id = e.target.getAttribute('data');
        window.location.href = '/Shangpinxiangqing?&id=' + id;
        window.scrollTo(0, 0);
    }


    componentDidMount() {

        var user_id = CoojiePage.getCoojie('user_id');
        var token = CoojiePage.getCoojie('token');
        const that = this;
        //  广告位
        $.ajax({
            url: InterfaceUtil.getUrl(21),
            type: 'post',
            dataType: 'json',
            data: InterfaceUtil.addTime({
                user_id: user_id,
                token: token
            }),
            beforeSend: function (xhr) {
            },
            success: function (data, textStatus, jqXHR) {
                var data = data;
                // console.log(JSON.stringify(data.data))
                if (data.data.length == 0 || data.data.length == undefined || data.data.length == null) {

                } else {
                    that.setState({
                        guanggao: data.data
                    });
                }

            }

        });

        $.ajax({
            url: InterfaceUtil.getUrl(22),
            type: 'post',
            dataType: 'json',
            data: InterfaceUtil.addTime({
                user_id: user_id,
                token: token
            }),
            success: function (data) {
                var data = data;
                if (data.data.length == 0) {

                } else {
                    that.setState({
                        jingxuan: data.data.group,
                        // length1: data.data[0].model,
                        week: data.title
                    }, () => {
                        var a = document.getElementsByClassName('jingxuan_div_ul_li');
                        $('.jingxuan_div_ul_li').eq(0).attr('class', 'jingxuan_div_ul_li jingxuan_div_ul_li_current');
                        // a[0].className = 'jingxuan_div_ul_li jingxuan_div_ul_li_current'
                        for (var i = 0; i < 5; i++) {
                            var li = document.getElementsByClassName('jingxuan_div_ul1_li');
                            li[i].className = 'jingxuan_div_ul1_li';
                            if (that.state.timeOver) return;
                            //  本周精选设置时间
                            //获取今天星期几
                            var days = new Date().getDay();
                            //当前时间的时间戳
                            var now = Math.round(new Date().getTime() / 1000);
                            var time = document.getElementsByClassName('jingxuan_div_ul_li_input');
                            var end1 = parseInt(time[0].getAttribute('data-index'));
                            var start1 = parseInt(time[0].getAttribute('data'));
                            var end2 = parseInt(time[1].getAttribute('data-index'));
                            var start2 = parseInt(time[1].getAttribute('data'));
                            var end3 = parseInt(time[2].getAttribute('data-index'));
                            var start3 = parseInt(time[2].getAttribute('data'));
                            if (start1 < now && now < end1) {

                                var days1 = 0;
                                var hours = 0;
                                var minutes = 0;
                                var seconds = 0;

                                function getTimeReamin(endtime) {

                                    endtime = endtime * 1000;
                                    //剩余的秒数
                                    var remainSec = (endtime - Date.parse(new Date())) / 1000;
                                    var a = Date.parse(new Date());
                                    days = Math.floor(remainSec / (3600 * 24));
                                    hours = Math.floor(remainSec / 3600 % 24);
                                    minutes = Math.floor(remainSec / 60 % 60);
                                    seconds = Math.floor(remainSec % 60);

                                    return {
                                        'remainSec': remainSec,
                                        'days': days,
                                        'hours': hours,
                                        'minutes': minutes,
                                        'seconds': seconds
                                    }

                                }

                                var timeid = setInterval(function () {

                                    var t = getTimeReamin(end1);
                                    //判断时间格式
                                    days1 = t.days >= 0 && t.days < 10 ? '0' + t.days : t.days;
                                    hours = t.hours >= 0 && t.hours < 10 ? '0' + t.hours : t.hours;
                                    minutes = t.minutes >= 0 && t.minutes < 10 ? '0' + t.minutes : t.minutes;
                                    seconds = t.seconds >= 0 && t.seconds < 10 ? '0' + t.seconds : t.seconds;
                                    //设置时间
                                    $('.days').eq(0).text(days1);
                                    $('.hours').eq(0).text(hours);
                                    $('.minutes').eq(0).text(minutes);
                                    $('.seconds').eq(0).text(seconds);
                                    $('.timeDiv').eq(0).show();
                                    $('.mingzi').eq(0).text('仅剩');
                                    if (t.remainSec <= 0) {
                                        window.clearInterval(timeid);
                                    }
                                }, 1000)
                            }
                            else if (now < start1) {
                                $('.timeDiv').eq(0).hide();
                                $('.mingzi').eq(0).text('预告');
                            }
                            else if (now > end1) {
                                $('.timeDiv').eq(0).hide();
                                $('.mingzi').eq(0).text('已结束');
                            }

                            // console.log(now, start2)
                            if (end2 > now && now > start2) {
                                var days1 = 0;
                                var hours = 0;
                                var minutes = 0;
                                var seconds = 0;

                                function getTimeReamin(endtime) {
                                    endtime = endtime * 1000;
                                    //剩余的秒数
                                    var remainSec = (endtime - Date.parse(new Date())) / 1000;
                                    var a = Date.parse(new Date());
                                    days = Math.floor(remainSec / (3600 * 24));
                                    hours = Math.floor(remainSec / 3600 % 24);
                                    minutes = Math.floor(remainSec / 60 % 60);
                                    seconds = Math.floor(remainSec % 60);

                                    return {
                                        'remainSec': remainSec,
                                        'days': days,
                                        'hours': hours,
                                        'minutes': minutes,
                                        'seconds': seconds
                                    }

                                }

                                var timeid = setInterval(function () {
                                    var t = getTimeReamin(end2);
                                    //判断时间格式
                                    days1 = t.days >= 0 && t.days < 10 ? '0' + t.days : t.days;
                                    hours = t.hours >= 0 && t.hours < 10 ? '0' + t.hours : t.hours;
                                    minutes = t.minutes >= 0 && t.minutes < 10 ? '0' + t.minutes : t.minutes;
                                    seconds = t.seconds >= 0 && t.seconds < 10 ? '0' + t.seconds : t.seconds;
                                    $('.days').eq(1).text(days1);
                                    $('.hours').eq(1).text(hours);
                                    $('.minutes').eq(1).text(minutes);
                                    $('.seconds').eq(1).text(seconds);
                                    $('.timeDiv').eq(1).show();
                                    $('.mingzi').eq(1).text('仅剩');
                                    if (t.remainSec <= 0) {
                                        window.clearInterval(timeid);
                                    }
                                }, 1000)
                            }
                            else if (now < start2) {
                                $('.timeDiv').eq(1).hide();
                                $('.mingzi').eq(1).text('预告');
                            }
                            else if (now > end2) {
                                $('.timeDiv').eq(1).hide();
                                $('.mingzi').eq(1).text('已结束');
                            }
                            if (now < start3) {
                                $('.timeDiv').eq(2).hide();
                                $('.mingzi').eq(2).text('预告');
                            }
                            else if (end3 > now && now > start3) {
                                var days1 = 0;
                                var hours = 0;
                                var minutes = 0;
                                var seconds = 0;

                                function getTimeReamin(endtime) {

                                    endtime = endtime * 1000;
                                    //剩余的秒数
                                    var remainSec = (endtime - Date.parse(new Date())) / 1000;
                                    var a = Date.parse(new Date());
                                    days = Math.floor(remainSec / (3600 * 24));
                                    hours = Math.floor(remainSec / 3600 % 24);
                                    minutes = Math.floor(remainSec / 60 % 60);
                                    seconds = Math.floor(remainSec % 60);

                                    return {
                                        'remainSec': remainSec,
                                        'days': days,
                                        'hours': hours,
                                        'minutes': minutes,
                                        'seconds': seconds
                                    }

                                }

                                var timeid = setInterval(function () {
                                    var t = getTimeReamin(end3);
                                    //判断时间格式
                                    days1 = t.days >= 0 && t.days < 10 ? '0' + t.days : t.days;
                                    hours = t.hours >= 0 && t.hours < 10 ? '0' + t.hours : t.hours;
                                    minutes = t.minutes >= 0 && t.minutes < 10 ? '0' + t.minutes : t.minutes;
                                    seconds = t.seconds >= 0 && t.seconds < 10 ? '0' + t.seconds : t.seconds;

                                    var day = document.getElementsByClassName('days');
                                    var hour = document.getElementsByClassName('hours');
                                    var minute = document.getElementsByClassName('minutes');
                                    var second = document.getElementsByClassName('seconds');
                                    $('.days').eq(2).text(days1);
                                    $('.hours').eq(2).text(hours);
                                    $('.minutes').eq(2).text(minutes);
                                    $('.seconds').eq(2).text(seconds);
                                    $('.timeDiv').eq(2).show();
                                    $('.mingzi').eq(2).text('仅剩');
                                    if (t.remainSec <= 0) {
                                        window.clearInterval(timeid);
                                    }
                                }, 1000)
                            }
                            else if (now > end3) {
                                $('.time').eq(2).text('已结束');
                                $('.timeDiv').eq(2).hide();
                            }

                        }
                    });
                }
                that.setState({
                    timeOver: true,
                })

            }

        })


    }

    render() {
        let data = this.state;
        return (
            <div className='contain'>
                {/*广告位*/}
                <div className='guanggao_4'>
                    <ul>
                        {
                            data.guanggao.map(function (item, i) {
                                return (
                                    <li key={i}>
                                        <a href={item.url}>
                                            <img src={this.state.lujin + item.image} className='guanggao_4_img'
                                                 alt=""/>
                                        </a>
                                    </li>
                                )
                            }, this)
                        }
                        <div className='clear'></div>
                    </ul>
                </div>
                {/*本周精选*/}
                <div className='marginTop20'>
                    {/*本周精选标题*/}
                    <div className='jingxuan_title scrollTop0'>
                        <img src={require("../../images/index/jingxuanZuo.png")} alt=""/>
                        {this.state.week}
                        <img src={require("../../images/index/jingxuanYou.png")} alt=""/>
                    </div>
                    {/*内容*/}
                    <div className='jingxuan_div '>
                        <ul className='jingxuan_div_ul'>
                            {
                                data.jingxuan.map(function (item, i) {
                                    return (
                                        <li
                                            key={i + 'jingxuan'}
                                            className=' jingxuan_div_ul_li ' onClick={(e) => {
                                            this.jingxuan(e)
                                        }} data={i}>
                                            <div>
                                                <input type="hidden" data={item.start_time} data-index={item.end_time}
                                                       className='jingxuan_div_ul_li_input'/>
                                                {item.title}
                                                <span className='marginLeft10 mingzi'>已结束</span>
                                                <div className='blue timeDiv '>
                                                    {/*<span className='blue display time'></span>*/}
                                                    <span className='days'>{data.days}</span>
                                                    <span>天</span><span className='hours'>{data.hours}</span>
                                                    <span>:</span><span className='minutes'>{data.minutes}</span>
                                                    <span>:</span><span className='seconds'>{data.seconds}</span>
                                                </div>


                                            </div>


                                        </li>
                                    )
                                }, this)
                            }
                            {/*<li className='jingxuan_div_ul_li' onClick={(e)=>{this.jingxuan(e)}} data="2">周三周四特惠场*/}
                            {/*<span className='marginLeft10 mingzi'>仅剩</span>*/}
                            {/*<span className='blue time' >{this.state.days}天{this.state.hours}:{this.state.minutes}:{this.state.seconds}</span>*/}
                            {/*</li>*/}
                            {/*<li className='jingxuan_div_ul_li' onClick={(e)=>{this.jingxuan(e)}} data="3">周五至周天特惠场*/}
                            {/*<span className='marginLeft10 mingzi'>预告</span>*/}
                            {/*<span className='blue display time'>{this.state.days}天{this.state.hours}:{this.state.minutes}:{this.state.seconds}</span>*/}
                            {/*</li>*/}

                        </ul>
                        {/*15个*/}
                        {
                            data.jingxuan.map(function (item, i) {

                                return (
                                    <ul className='jingxuan_div_ul1 ' key={i}>
                                        {
                                            data.jingxuan[i].goods_list.map(function (item, i) {
                                                let price=item.activity_price||item.price;
                                                return (
                                                    <li key={i}
                                                        className='jingxuan_div_ul1_li display'
                                                        data={item.id + 'goods_list'}>

                                                        <div className='jingxuan_div1_box'>
                                                            <Link to={'/Shangpinxiangqing?&id=' + item.goods_id}>
                                                                <img src={data.lujin + item.image}
                                                                     className='jingxuan_div1_img' alt=""
                                                                     data={item.goods_id}
                                                                    // onClick={(e) => {
                                                                    //   this.xiangqing2(e)
                                                                    // }}
                                                                />
                                                            </Link>
                                                        </div>
                                                        <p className='jingxuan_div_ul1_p'>{price}</p>
                                                        <p className='hid font16 oneWeekgive'>{item.name}</p>
                                                        <p className='hid oneWeekgiveP'>{item.standard}</p>
                                                        <p className='hid oneWeekgiveP'>{item.enterprise}</p>
                                                    </li>
                                                )
                                            }, this)
                                        }
                                    </ul>
                                )
                            }, this)
                        }
                        {/*18个*/}
                        <div className='relative display'>
                            <div className='jingxuan_tu1'/>
                            <div className='jingxuan_tu2'/>
                            <div className='jingxuan_tu3'/>
                            <div className='jingxuan_tu4'/>
                            <div className='jingxuan_tu5'/>
                            <div className='jingxuan_tu6'/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }


}

export default Benzhoujinxuan;
