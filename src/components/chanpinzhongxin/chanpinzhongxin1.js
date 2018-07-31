import React from 'react';
import Rank from '../zhongyao/zhongyao2';
import {Pagination, Switch} from 'antd';
import Tuijian from '../common/tuijian';
// import $ from '../../js/jquery.min';
import InterfaceUtil from '../../util/InterfaceUtil';
import LoginPage from '../../util/LoginPage';
import CoojiePage from '../../util/CoojiePage';
import {withRouter, Link} from "react-router-dom";

import {PubSub} from 'pubsub-js';
import $ from 'jquery';

class Chanpinzhongxin extends React.Component {
    constructor(props) {
        super(props); //调用父类的构造方法；
        this.loginPage = new LoginPage();
        this.state = {
            class: [],
            jx: [],
            class_z: [],
            xq: [],
            splist: [],
            rank1: [],
            rank2: [],
            top: [],
            title_fenlei: '',
            title_zilei: '',
            title_xiaoqi: '',
            title_jixing: '',
            lujin: InterfaceUtil.getImgUrl(),
            cons: 0,
            fenleiID: '',
            zileiID: '',
            xiaoqiID: '',
            jixingID: '',
            zonghe: 1,
            renqi: 1,
            xiaoliang: 1,
            jiage: 1,
            pingming: 1,
            changjia: 1,
            pxtype: '1',//排序名称
            title: '',//商品名称
            scqy: '',//生产企业
            page: 1,//页数
            pxnum: 1,
            is_kc: '',
        }
    }

    //加减
    jia1(e, num, id, max) {
        e = parseInt(e);
        num = parseInt(num);
        max = parseInt(max);
        var c = e + num;
        if (c < max) {
            this.changeStateZdw(c, id)
        } else {
            alert('已超出最大库存量!')
        }
    }

    jia2(e, num, id, max) {
        e = parseInt(e);
        num = parseInt(num);
        max = parseInt(max);
        var c = e + num;
        if (c < max) {
            this.changeStateZdw(c, id)
        } else {
            alert('已超出最大库存量!')
        }
    }

    /**
     *
     * @param e 当前输入框数量
     * @param num 中包装
     * @param id 当前对应id
     */
    jian1(e, num, id) {
        e = parseInt(e);
        num = parseInt(num);
        var c = e - num;
        if (c < 1) {

        } else {
            this.changeStateZdw(c, id)
        }
    }

    /**
     *
     * @param e 当前输入框数量
     * @param num 中包装
     * @param id 当前对应id
     */
    jian2(e, num, id) {
        e = parseInt(e);
        num = parseInt(num);
        var c = e - num;
        if (c < 1) {

        } else {
            this.changeStateZdw(c, id)
        }
    }

    /**
     *
     * @param min_buy_ 要修改的数量
     * @param id 对应的id
     */
    changeStateZdw(min_buy_, id) {
        var arr = this.state.splist;
        let show = false;
        for (var i = 0, len = arr.length; i < len; i++) {
            if (arr[i].id === id) {
                arr[i].min_buy_ = min_buy_;
                show = !show;
            }
        }
        if (show) {
            this.setState({splist: arr});
        }
    }

    //改变输入框的值
    /**
     * 输出框失去焦点判断是否符合中包装
     * @param e 当前输入框
     * @param moren 中包装
     * @param id 当前输入框的那个产品的id
     */
    shuliang(e, moren, id) {
        var a = e.target;
        var b = a.value;

        let min_buy_ = 0;

        moren = parseInt(moren);

        if (isNaN(b) != false || b <= 0) {
            min_buy_ = moren;
        } else {
            var as = parseInt(b % moren);
            if (as != 0) {
                b = b - as + moren;
                min_buy_ = b;

            } else {
                min_buy_ = b;
            }
        }
        var arr = this.state.splist;
        let show = false;
        for (var i = 0, len = arr.length; i < len; i++) {
            if (arr[i].id === id) {
                if (arr[i].min_buy_ === min_buy_) return;
                arr[i].min_buy_ = min_buy_;
                show = !show;
            }
        }
        if (show) {
            this.setState({splist: arr});
        }


    }

    //产品排序
    paixu(e) {
        var a = e.target;
        var b = a.children.length;
        //relative chanpinzhongxin_right_con_div_li_current chanpinzhongxin_right_con_div_li chanpinzhongxin_right_con_div_li3
        // relative chanpinzhongxin_right_con_div_li chanpinzhongxin_right_con_div_li3

        // $('.chanpinzhongxin_right_con_div_ul').find('li.relative').removeClass('chanpinzhongxin_right_con_div_li_current');
        // $(e).addClass('chanpinzhongxin_right_con_div_li_current');

        // $('.chanpinzhongxin_right_con_div_li3').removeClass('chanpinzhongxin_right_con_div_li3  ');
        if (b == 0) {
            var c = document.getElementsByClassName('chanpinzhongxin_right_con_div_li');
            for (var i = 0; i < c.length; i++) {
                c[i].firstChild.className = ''
                if (i < 6) {
                    c[i].className = 'chanpinzhongxin_right_con_div_li relative chanpinzhongxin_right_con_div_li3'
                } else {
                    c[6].className = 'chanpinzhongxin_right_con_div_li relative'
                }
            }
            // c[6].className = 'chanpinzhongxin_right_con_div_li relative chanpinzhongxin_right_con_div_li2';
            // c[7].className = 'chanpinzhongxin_right_con_div_li relative chanpinzhongxin_right_con_div_li2';
            a.parentNode.className = 'chanpinzhongxin_right_con_div_li_current relative chanpinzhongxin_right_con_div_li';
            a.parentNode.firstChild.className = 'chanpinzhongxin_right_con_div_span_current'
            if (a.innerText === '活动' || a.innerText === '只显示有货') {
                a.parentNode.className = 'relative chanpinzhongxin_right_con_div_li bgblue chanpinzhongxin_right_con_div_li2'
            }
        } else {
            var c = document.getElementsByClassName('chanpinzhongxin_right_con_div_li');
            for (var i = 0; i < c.length; i++) {
                c[i].firstChild.className = '';
                if (i < 6) {
                    c[i].className = 'chanpinzhongxin_right_con_div_li relative chanpinzhongxin_right_con_div_li3';

                } else {
                    c[i].className = 'chanpinzhongxin_right_con_div_li relative'
                }


            }
            // c[6].className = 'chanpinzhongxin_right_con_div_li relative chanpinzhongxin_right_con_div_li2';
            // c[7].className = 'chanpinzhongxin_right_con_div_li relative chanpinzhongxin_right_con_div_li2';
            a.className = 'chanpinzhongxin_right_con_div_li_current relative chanpinzhongxin_right_con_div_li';
            a.firstChild.className = 'chanpinzhongxin_right_con_div_span_current'

            if (a.innerText === '活动' || a.innerText === '只显示有货') {
                a.className = 'relative chanpinzhongxin_right_con_div_li bgblue chanpinzhongxin_right_con_div_li2'
            }
        }


    }

    //大图列表切换
    qiehuan(e) {
        var a = e.target;
        var b = a.children.length;
        if (b == 0) {
            var c = document.getElementsByClassName('chanpinzhongxin_right_con_div_li1');
            if (a.innerText == '大图') {
                c[0].className = 'chanpinzhongxin_right_con_div_li1 chanpinzhongxin_right_con_div_li4'
                c[1].className = 'chanpinzhongxin_right_con_div_li1 chanpinzhongxin_right_con_div_li7'
                a.parentNode.className = 'chanpinzhongxin_right_con_div_li1 chanpinzhongxin_right_con_div_li5';
                $('.chanpinzhongxin_right_con_ul').removeClass('display');
                $('.chanpinzhongxin_con1_table').addClass('display');
            } else {
                c[0].className = 'chanpinzhongxin_right_con_div_li1 chanpinzhongxin_right_con_div_li4'
                c[1].className = 'chanpinzhongxin_right_con_div_li1 chanpinzhongxin_right_con_div_li7'
                a.parentNode.className = 'chanpinzhongxin_right_con_div_li1 chanpinzhongxin_right_con_div_li6';
                $('.chanpinzhongxin_right_con_ul').addClass('display');
                $('.chanpinzhongxin_con1_table').removeClass('display');
            }

        } else {
            var c = document.getElementsByClassName('chanpinzhongxin_right_con_div_li1');
            if (a.innerText == '大图') {
                c[0].className = 'chanpinzhongxin_right_con_div_li1 chanpinzhongxin_right_con_div_li4'
                c[1].className = 'chanpinzhongxin_right_con_div_li1 chanpinzhongxin_right_con_div_li7'
                a.className = 'chanpinzhongxin_right_con_div_li1 chanpinzhongxin_right_con_div_li5';
                $('.chanpinzhongxin_right_con_ul').removeClass('display');
                $('.chanpinzhongxin_con1_table').addClass('display');
            } else {
                c[0].className = 'chanpinzhongxin_right_con_div_li1 chanpinzhongxin_right_con_div_li4'
                c[1].className = 'chanpinzhongxin_right_con_div_li1 chanpinzhongxin_right_con_div_li7'
                a.className = 'chanpinzhongxin_right_con_div_li1 chanpinzhongxin_right_con_div_li6';
                $('.chanpinzhongxin_right_con_ul').addClass('display');
                $('.chanpinzhongxin_con1_table').removeClass('display');
            }

        }

    }

    //头部点击影藏
    cha(e) {
        var a = e.target;
        var zhengze = /[\u4e00-\u9fa5]/g;
        var b = e.target.parentNode.innerText;
        b = b.match(zhengze);
        var c = b[0] + b[1];

        if (c == '分类') {
            a.parentNode.className = 'display fenlei bbb';
            a.parentNode.nextSibling.className = 'display  zilei bbb';
            this.setState({
                title_fenlei: '',
                title_zilei: '',
                fenleiID: '',
                zileiID: '',
                page: 1,
            }, () => {
                this.ajaxProductLists();
            });
            $('.fenlei1').removeClass('blue');
            $('.zilei1').removeClass('blue');
            $('.title_zilei').addClass('display');
        } else if (c == '子类') {
            a.parentNode.className = 'display  zilei bbb';
            this.setState({
                title_zilei: '',
                zileiID: '',
                page: 1,
            }, () => {
                this.ajaxProductLists();
            });
            $('.zilei1').removeClass('blue');
        } else if (c == '剂型') {
            a.parentNode.className = 'display  jixing bbb';
            this.setState({
                title_jixing: '',
                jixingID: '',
                page: 1,
            }, () => {
                this.ajaxProductLists();
            });
            $('.jixing1').removeClass('blue');
        } else if (c == '效期') {
            a.parentNode.className = 'display  xiaoqi bbb';
            this.setState({
                title_xiaoqi: '',
                xiaoqiID: '',
                page: 1,
            }, () => {
                this.ajaxProductLists();
            });
            $('.xiaoqi1').removeClass('blue');
        }
    }

    cha1(e) {
        var a = document.getElementsByClassName('bbb');
        // for (var j=0;j<a.length;j++){
        //   a[j].className='display chanpinzhongxin_right_head_ul_li_current bbb';
        // }
        this.setState({
            title_fenlei: '',
            title_zilei: '',
            title_xiaoqi: '',
            title_jixing: '',
            fenleiID: '',
            zileiID: '',
            xiaoqiID: '',
            jixingID: '',
            title: '',
            scqy: '',
            page: 1,
        }, () => {
            this.ajaxProductLists();
        });
        this.removeBlue()

        //发起ajax

        var username = CoojiePage.getCoojie('username');
        var token = CoojiePage.getCoojie('token');
        var user_id = CoojiePage.getCoojie('user_id');
        var ddzt = CoojiePage.getCoojie('ddzt');
        const that = this;
        //订单ajax
        $.ajax({
            url: InterfaceUtil.getUrl(9),
            type: "post",
            data: {
                'username': username,
                'token': token
            },
            dataType: "json",
            success: function (data) {
                //callback;
                if (data.data.length == 0) {

                } else {
                    that.setState({
                        class: data.data.class,
                        jx: data.data.jx,
                        class_z: data.data.class_z,
                        xq: data.data.xq
                    });
                }
            }
        });
    }

    /**
     * 删除分类移除蓝色
     */
    removeBlue() {
        //影藏
        $('.fenlei').addClass('display');
        $('.zilei').addClass('display');
        $('.jixing').addClass('display');
        $('.xiaoqi').addClass('display');
        $('.title_zilei').addClass('display');
        //移除蓝色
        $('.fenlei1').removeClass('blue');
        $('.zilei1').removeClass('blue');
        $('.jixing1').removeClass('blue');
        $('.xiaoqi1').removeClass('blue');
    }

    //分类切换
    blue(e,pids) {
        var a = document.getElementsByClassName('fenlei1');
        $('.chanpinzhongxin_right_head_li .fenlei').removeClass('display');
        for (var i = 0; i < a.length; i++) {
            a[i].className = 'fenlei1'
        }
        e.target.className = 'fenlei1 blue';
        //    根据不同的分类显示不同的子类
        var b = e.target.getAttribute('data-index');
        //设置筛选栏字符
        if (e.target.innerText == '不限') {
            this.setState({
                title_fenlei: ''
            });
        } else {
            this.setState({
                title_fenlei: e.target.innerText,
                fenleiID: b,
                zileiID: '',
                page: 1,
            }, () => {
                this.ajaxProductLists()
            });
        }

        //  获得子类

        var username = CoojiePage.getCoojie('username');
        var token = CoojiePage.getCoojie('token');
        const that = this;
        var class_z=[];
        var data=this.state.class;
         for (var i=0;i<data.length;i++){
             if(pids === data[i].id){
                 class_z=data[i].next;
                 that.setState({
                     class_z: class_z,
                     title_zilei: ''
                 });
             }
         }
        if (class_z.length == 0) {
            $('.title_zilei').addClass('display')
        } else {
            var a = document.getElementsByClassName('zilei1');
            for (var i = 0; i < a.length; i++) {
                a[i].className = 'zilei1'
            }
            $('.title_zilei').removeClass('display')
            $('.zilei').addClass('display')
            that.setState({
                class_z: class_z,
                title_zilei: ''
            });
            // //隐藏分类
            // if (data.data.class.length < 10) {
            //     var e = document.getElementsByClassName('chanpinzhongxin_right_head_span');
            //     e[0].className = 'floatRight chanpinzhongxin_right_head_span display'
            // } else {
            //     var e = document.getElementsByClassName('chanpinzhongxin_right_head_span');
            //     e[0].className = 'floatRight chanpinzhongxin_right_head_span'
            // }
            // //显示子类
            // if(class_z>0){
            //     $('.title_zilei').removeClass('display');
            // }else {
            //     $('.title_zilei').addClass('display');
            // }
            //隐藏子类
            if (class_z.length < 10) {
                var e = document.getElementsByClassName('chanpinzhongxin_right_head_span1');
                e[0].className = 'floatRight chanpinzhongxin_right_head_span1 display'
            } else {
                var e = document.getElementsByClassName('chanpinzhongxin_right_head_span1');
                e[0].className = 'floatRight chanpinzhongxin_right_head_span1'
            }
        }

        // $.ajax({
        //     url: InterfaceUtil.getUrl(9),
        //     type: "post",
        //     data: {
        //         'username': username, 'token': token, 'pid': b
        //     },
        //     dataType: "json",
        //     success: function (data) {
        //
        //     }
        // });
    }

    blue1(e) {
        var a = document.getElementsByClassName('zilei1');
        $('.zilei').removeClass('display');
        for (var i = 0; i < a.length; i++) {
            a[i].className = 'zilei1'
        }
        e.target.className = 'zilei1 blue';
        var b = e.target.getAttribute('data');
        //将点击的内容显示在筛选
        if (e.target.innerText == '不限') {
            this.setState({
                title_zilei: ''
            });
        } else {
            this.setState({
                title_zilei: e.target.innerText,
                zileiID: b,
                page: 1
            }, () => {
                this.ajaxProductLists();
            });
        }
    }

    blue2(e,jxs) {
        var a = document.getElementsByClassName('jixing1');
        $('.jixing').removeClass('display');
        for (var i = 0; i < a.length; i++) {
            a[i].className = 'jixing1'
        }
        e.target.className = 'jixing1 blue';

        if (e.target.innerText == '不限') {
            this.setState({
                title_jixing: ''
            });
        } else {
            this.setState({
                title_jixing: e.target.innerText,
                jixingID: e.target.innerText,
                page: 1,
            }, () => {
                this.ajaxProductLists()
            });
        }
    }

    blue3(e) {
        var a = document.getElementsByClassName('xiaoqi1');
        $('.xiaoqi').removeClass('display');
        for (var i = 0; i < a.length; i++) {
            a[i].className = 'xiaoqi1'
        }

        e.target.className = 'xiaoqi1 blue';
        var b = e.target.getAttribute('data');

        if (e.target.innerText == '不限') {
            this.setState({
                title_xiaoqi: ''
            });
        } else {
            this.setState({
                title_xiaoqi: e.target.innerText,
                xiaoqiID: b,
                page: 1
            }, () => {
                var a = $('.fenlei').eq(1).attr('data');
                var b = $('.zilei').attr('data');
                var c = $('.jixing').attr('data');
                var d = this.state.xiaoqiID;

                var username = CoojiePage.getCoojie('username');
                var token = CoojiePage.getCoojie('token');
                var jylx = CoojiePage.getCoojie('jylx');
                const that = this;
                //商品列表
                $.ajax({
                    url: InterfaceUtil.getUrl(8),
                    type: "post",
                    data: {
                        'username': username, 'token': token,
                        'page': 1, 'limit': 20, 'jylx': jylx,
                        'pid': a, 'jx': c, 'xq': d, 'sid=': b

                    },
                    dataType: "json",
                    success: function (data) {

                    }
                });
                $.ajax({
                    url: InterfaceUtil.getUrl(8),
                    type: "post",
                    data: {
                        'username': username, 'token': token, 'page': 1, 'limit': 20, 'jylx':
                        jylx, 'pid': a, 'jx': c, 'xq': d, 'sid': b
                    },
                    dataType: "json",
                    success: function (data) {
                        if (data.data.length == 0) {

                        } else {
                            that.setState({
                                splist: data.data.list,
                                cons: data.data.cons
                            });
                        }
                    }
                });
            });
        }
    }

    //更多
    more(e) {
        var a = e.target;
        if (a.innerText == '更多') {
            a.innerText = '收起';
            a.className = 'floatRight chanpinzhongxin_right_head_span2';
            e.target.nextSibling.className = 'chanpinzhongxin_right_head_li_ul kuangjia'
        } else {
            a.innerText = '更多';
            a.className = 'floatRight chanpinzhongxin_right_head_span1';
            e.target.nextSibling.className = 'chanpinzhongxin_right_head_li_ul height40 kuangjia'
        }

    }

    // c[6].className = 'chanpinzhongxin_right_con_div_li relative chanpinzhongxin_right_con_div_li2';
    //改变筛选栏的箭头
    top(e) {
        let num = null;
        if (e.target.parentNode.firstChild.innerText == '综合' || e.target.firstChild.innerText == '综合') {
            // var e = this.state.zonghe;

            if (this.state.zonghe == 0) {
                // 向下
                $('.chanpinzhongxin_right_con_div_li').eq(0).addClass('chanpinzhongxin_right_con_div_li9');
                //更改状态
                num = 1;
            } else {
                // 向上
                $('.chanpinzhongxin_right_con_div_li').eq(0).addClass('chanpinzhongxin_right_con_div_li_current');

                //更改状态
                num = 0;
            }
            this.setState({
                zonghe: num,
                pxnum: num,
                pxtype: 0
            }, function () {
                this.ajaxProductLists()
            });

        }
        else if (e.target.parentNode.firstChild.innerText == '人气' || e.target.firstChild.innerText == '人气') {
            // var e = this.state.renqi;


            //更改样式
            if (this.state.renqi == 0) {
                // 向下
                $('.chanpinzhongxin_right_con_div_li').eq(1).addClass('chanpinzhongxin_right_con_div_li9');
                //更改状态
                num = 1;

            } else {
                // 向上

                $('.chanpinzhongxin_right_con_div_li').eq(1).addClass('chanpinzhongxin_right_con_div_li_current');
                //更改状态
                num = 0;

            }
            this.setState({
                renqi: num,
                pxnum: num,
                pxtype: 1,
            }, function () {
                this.ajaxProductLists();
            });

        }
        else if (e.target.parentNode.firstChild.innerText == '销量' || e.target.firstChild.innerText == '销量') {

            // var e = this.state.xiaoliang;
            if (this.state.xiaoliang == 0) {
                // 向下
                $('.chanpinzhongxin_right_con_div_li').eq(2).addClass('chanpinzhongxin_right_con_div_li9');
                //更改状态
                num = 1;
            } else {
                // 向上
                $('.chanpinzhongxin_right_con_div_li').eq(2).addClass('chanpinzhongxin_right_con_div_li_current');
                //更改状态
                num = 0;
            }
            this.setState({
                xiaoliang: num,
                pxtype: 2,
                pxnum: num
            }, function () {
                this.ajaxProductLists()
            });

        }
        else if (e.target.parentNode.firstChild.innerText == '价格' || e.target.firstChild.innerText == '价格') {

            // var e = this.state.jiage;
            if (this.state.jiage == 0) {
                // 向下
                $('.chanpinzhongxin_right_con_div_li').eq(3).addClass('chanpinzhongxin_right_con_div_li9');

                //更改状态
                num = 1;
            } else {
                // 向上
                $('.chanpinzhongxin_right_con_div_li').eq(3).addClass('chanpinzhongxin_right_con_div_li_current');
                //更改状态
                num = 0;

            }
            this.setState({
                jiage: num,
                pxtype: 3,
                pxnum: num,
            }, function () {
                this.ajaxProductLists();
            });
        }
        else if (e.target.parentNode.firstChild.innerText == '品名' || e.target.firstChild.innerText == '品名') {
            // var e = this.state.pingming;
            if (this.state.pingming == 0) {
                // 向下
                $('.chanpinzhongxin_right_con_div_li').eq(4).addClass('chanpinzhongxin_right_con_div_li9');
                //更改状态
                num = 1;
            } else {
                // 向上
                $('.chanpinzhongxin_right_con_div_li').eq(4).addClass('chanpinzhongxin_right_con_div_li_current');
                //更改状态
                num = 0;
            }
            this.setState({
                pingming: num,
                pxtype: 4,
                pxnum: num,
            }, function () {
                this.ajaxProductLists();
            });
        }
        else if (e.target.parentNode.firstChild.innerText == '厂家' || e.target.firstChild.innerText == '厂家') {
            // var e = this.state.changjia;
            if (this.state.changjia == 0) {
                // 向下
                $('.chanpinzhongxin_right_con_div_li').eq(5).addClass('chanpinzhongxin_right_con_div_li9');
                //更改状态
                num = 1;
            } else {
                // 向上
                $('.chanpinzhongxin_right_con_div_li').eq(5).addClass('chanpinzhongxin_right_con_div_li_current');
                //更改状态
                num = 0;
            }
            this.setState({
                changjia: num,
                pxtype: 5,
                pxnum: num,
            }, function () {
                this.ajaxProductLists();
            });
        }
    }

    /**
     * 商品头部排序
     * @param e 排序值
     */
    ajaxProductLists() {
        //ajax
        let data = this.state;
        let pid = data.fenleiID,
            jx = data.jixingID,
            xq = data.xiaoqiID,
            sid = data.zileiID,
            title = data.title,
            scqy = data.scqy,
            page = data.page,
            zjzx = data.zjzx,
            pxnum = data.pxnum,
            is_kc = data.is_kc;
        let b = $('.zilei').attr('data');
        let c = $('.jixing').attr('data');
        let d = $('.xiaoqi').attr('data');
        let user_id = CoojiePage.getCoojie('user_id');
        let token = CoojiePage.getCoojie('token');
        let jylx = CoojiePage.getCoojie('jylx');
        let pxtype = this.state.pxtype;
        const that = this;
        //商品列表

        $.ajax({
            url: InterfaceUtil.getUrl(8),
            type: "post",
            data: InterfaceUtil.addTime({
                'user_id': user_id, 'token': token, 'page': page, 'pageSize': 20,
                type: zjzx, search: title, type_id: pid, is_stock: is_kc,
                sort_order: pxtype, sort_type: pxnum
            }),
            // {
            //     'username': username, 'token': token, 'page': page, 'limit': 20, 'jylx': jylx,
            //     'sid': sid, 'pid': pid, 'jx': jx, 'xq': xq, 'pxnum': pxnum, 'pxtype': pxtype,
            //     'title': title, 'scqy': scqy, 'zjzx': zjzx, is_kc: is_kc
            // },
            dataType: "json",
            success: function (data) {

                if (data.data.length == 0) {

                } else {

                    that.setState({
                        splist: data.data.goods_list,
                        cons: data.data.goods_count,
                    });
                }
            }
        });
    }

    //分页
    fenye(e) {
        this.setState({
            page: e
        }, () => {
            this.ajaxProductLists()
        });
        window.scrollTo(0, 0);
    }

    //查询
    chaxun(e) {

        var e = $('.chanpinzhongxin_right_head_inp').eq(0).val();
        var f = $('.chanpinzhongxin_right_head_inp').eq(1).val();
        this.setState({
            title: e,
            scqy: f,
        }, () => {
            this.ajaxProductLists();
        })

        // ajax.send('username=' + username + '&token=' + token + '&page=1&limit=20' + '&title=' + e + '&scqy=' + f);
    }

    chaxun1(e) {
        //ajax

        var a = $('.fenlei').attr('data');
        var b = $('.zilei').attr('data');
        var c = $('.jixing').attr('data');
        var d = $('.xiaoqi').attr('data');
        var e = $('.chanpinzhongxin_bottom_inp').val();

        var username = CoojiePage.getCoojie('username');
        var token = CoojiePage.getCoojie('token');
        var member_id = CoojiePage.getCoojie('user_id');
        const that = this;
        //商品列表
        $.ajax({
            url: InterfaceUtil.getUrl(8),
            type: "post",
            data: {
                'username': username, 'token': token,
                'page': 1, 'limit': 20, 'title': e, 'member_id': member_id
            },
            dataType: "json",
            success: function (data) {
                if (data.data.length == 0) {

                } else {
                    that.setState({
                        splist: data.data.list,
                        cons: data.data.cons
                    });
                }

            }
        });

    }

    //收藏
    color10(e, is_collect) {
        var a = e.target;
        if (a.children.length == 1) {
            var b = a.getAttribute('data');
            if (is_collect == '0') {
                // a.className = 'chanpinzhongxin_sp_img_shoucang chanpinzhongxin_sp_img_shoucang_current';
                var spid = a.parentNode.parentNode.firstChild.getAttribute('data');
                // alert(b)
                //    发起请求

                var username = CoojiePage.getCoojie('username');
                var token = CoojiePage.getCoojie('token');
                var user_id = CoojiePage.getCoojie('user_id');
                const that = this;
                $.ajax({
                    url: InterfaceUtil.getUrl(5),
                    type: "post",
                    data: InterfaceUtil.addTime({
                        'user_id': user_id, 'token': token, 'goods_id': b
                    }),
                    dataType: "json",
                    success: function (data) {

                        that.getCollection(b, 0);
                    }
                });

            } else {
                // a.className = 'chanpinzhongxin_sp_img_shoucang ';
                var spid = a.getAttribute('data');

                //    发起请求
                var username = CoojiePage.getCoojie('username');
                var token = CoojiePage.getCoojie('token');
                var user_id = CoojiePage.getCoojie('user_id');
                const that = this;

                $.ajax({
                    url: InterfaceUtil.getUrl(10),
                    type: "post",
                    data: InterfaceUtil.addTime({
                        'user_id': user_id, 'token': token, 'goods_id': is_collect
                    }),
                    dataType: "json",
                    success: function (data) {

                        // data = JSON.parse(data);
                        that.getCollection(spid, spid);

                    }
                });
            }
        } else {
        }
    }

    //显示隐藏收藏
    img(e) {
        var a = e.target;
        var b = a.parentNode.lastChild;
        b = b.getAttribute('data')


    }

    img1(e) {
        var a = e.target;
        var b = a.parentNode.lastChild;
        b = b.getAttribute('data')
    }


    //跳转
    xiangqing(e) {
        var id = e.target.parentNode.parentNode.firstChild.getAttribute('data');
        // window.location.href = '/Shangpinxiangqing?&id=' + id;
        this.props.history.push('/Shangpinxiangqing?&id=' + id);
        window.scrollTo(0, 0);
    }

    tiaozhuan1(e) {
        var id = e.target.parentNode.firstChild.getAttribute('data');
        this.props.history.push('/Shangpinxiangqing?&id=' + id);
        window.scrollTo(0, 0);
    }

    //收藏
    tiaozhuan(e, is_collect) {
        var id = e.target.getAttribute('data');
        var username = CoojiePage.getCoojie('username');
        var token = CoojiePage.getCoojie('token');
        var user_id = CoojiePage.getCoojie('user_id');
        const that = this;
        //搜索条件ajax
        $.ajax({
            url: InterfaceUtil.getUrl(5),
            type: "post",
            data: {
                'username': username, 'token': token, 'user_id': user_id, 'sp_id': id
            },
            dataType: "json",
            success: function (data) {
                alert(data.info);
            }
        });

        if (is_collect === 0) {
            this.getCollection(id, is_collect);
        }

    }

    /**
     * 改变收藏图标
     *id 项目id
     * is_collect收藏状态true,0
     * */
    getCollection(id, is_collect) {
        let is_fs = is_collect > 0 ? 0 : id;
        let arry2 = this.state.splist;
        // alert(typeof(id))
        for (let i = 0, len = arry2.length; i < len; i++) {
            if (arry2[i].id == id) {
                arry2[i].is_collect = is_fs;
            }
        }
        this.setState({
            splist: arry2,
        })
    }

    //加入购物车
    buycar(e) {
        var shuliang = e.target.parentNode.firstChild.getAttribute('value');
        var id = e.target.parentNode.parentNode.firstChild.getAttribute('data');
        var username = CoojiePage.getCoojie('username');
        var token = CoojiePage.getCoojie('token');
        var user_id = CoojiePage.getCoojie('user_id');
        const that = this;
        //搜索条件ajax

        $.ajax({
            url: InterfaceUtil.getUrl(11),
            type: "post",
            data: {
                'username': username, 'token': token, 'user_id': user_id, 'goods_id': id, 'spsl': shuliang
            },
            dataType: "json",
            success: function (data) {

                if (data.status === 1) {
                    PubSub.publish('PubSubmessage', data.status);
                }
                if (data.data == '1') {
                    var ok = document.getElementsByClassName('buycar_ok');
                    $('.buycar_ok').eq(0).attr('class', 'buycar_ok')
                    // ok[0].className = 'buycar_ok';
                    var timer1 = setTimeout(function () {
                        // ok[0].className = 'buycar_ok display';
                        $('.buycar_ok').eq(0).attr('class', 'buycar_ok display')
                    }, 2500);
                } else {
                    if (data.info != 'token过期') {
                        var no = document.getElementsByClassName('buycar_no');
                        var no_span = document.getElementsByClassName('buycar_no_con_span');
                        no[0].className = 'buycar_no';
                        no_span[0].innerText = data.info;
                    } else {
                        alert('您的账号被另外的电脑挤出登录状态');
                        that.props.history.push('/Denglu')
                    }
                }
            }
        });

    }

    buycar1(e) {
        var shuliang = e.target.parentNode.previousElementSibling.children[1].getAttribute('value');
        // var id = e.target.parentNode.parentNode.firstChild.firstChild.getAttribute('data');
        var id = $(e.target).parents('tr').find('input').eq(0).attr('data');

        var username = CoojiePage.getCoojie('username');
        var token = CoojiePage.getCoojie('token');
        var user_id = CoojiePage.getCoojie('user_id');
        const that = this;
        //搜索条件ajax

        $.ajax({
            url: InterfaceUtil.getUrl(11),
            type: "post",
            data: {
                'username': username, 'token': token, 'user_id': user_id, 'goods_id': id, 'spsl': shuliang
            },
            dataType: "json",
            success: function (data) {
                if (data.status === 1) {
                    PubSub.publish('PubSubmessage', data.status);
                }

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
                        that.props.history.push('/Denglu')
                        // window.location.href = '#/Denglu';
                    }
                }
            }
        });

    }

    tr1(e) {
        if (e.target.children.length == 0) {
            var a = e.target.parentNode.parentNode.getAttribute('data');
            if (a == 1) {

                e.target.parentNode.className = 'CP_gray CP_tr'
            }
        } else if (e.target.children.length < 4) {
            var a = e.target.parentNode.getAttribute('data');
            if (a == 1) {
                e.target.parentNode.className = 'CP_gray CP_tr'
            }
        } else {
            var a = e.target.getAttribute('data');
            if (a == 1) {
                e.target.parentNode.className = 'CP_gray CP_tr'
            }
        }
    }

    tr2(e) {
        if (e.target.children.length == 0) {
            var a = e.target.parentNode.parentNode.getAttribute('data');
            if (a == 1) {

                e.target.parentNode.className = 'CP_tr'
            }
        } else if (e.target.children.length < 4) {
            var a = e.target.parentNode.getAttribute('data');
            if (a == 1) {
                e.target.parentNode.className = 'CP_tr'
            }
        } else {
            var a = e.target.getAttribute('data');
            if (a == 1) {
                e.target.parentNode.className = 'CP_tr'
            }
        }
    }

    componentDidMount() {
        var username = CoojiePage.getCoojie('username');
        var token = CoojiePage.getCoojie('token');
        const that = this;

        $.ajax({
            url: InterfaceUtil.getUrl(23),
            type: "post",
            data: InterfaceUtil.addTime({}),
            dataType: "json",
            success: function (data) {
                if (data.data.length == 0) {

                } else {
                    that.setState({
                        class: data.data,
                        // class_z: data.data.next,
                        //     jx: data.data.jx,

                        //     xq: data.data.xq
                    });
                    // //隐藏分类
                    // if (data.data.class.length < 8) {
                    //     // var e = document.getElementsByClassName('chanpinzhongxin_right_head_span');
                    //     // e[0].className = 'floatRight chanpinzhongxin_right_head_span display'
                    //     $('.chanpinzhongxin_right_head_span').eq(0).attr('class', 'floatRight chanpinzhongxin_right_head_span display');
                    //     // document.getElementsByClassName('chanpinzhongxin_right_head_span').className='floatRight chanpinzhongxin_right_head_span display'
                    // }
                    // //隐藏子类
                    // if (data.data.class_z.length < 8) {
                    //     $('.chanpinzhongxin_right_head_span1').eq(0).attr('class', 'floatRight chanpinzhongxin_right_head_span1 display');
                    //     // var e = document.getElementsByClassName('chanpinzhongxin_right_head_span1');
                    //     // e[0].className = 'floatRight chanpinzhongxin_right_head_span1 display'
                    // }
                    // //隐藏剂型
                    // if (data.data.jx.length < 8) {
                    //     $('.chanpinzhongxin_right_head_span2').eq(0).attr('class', 'floatRight chanpinzhongxin_right_head_span2 display');
                    //
                    //     // var e = document.getElementsByClassName('chanpinzhongxin_right_head_span2');
                    //     // e[0].className = 'floatRight chanpinzhongxin_right_head_span2 display'
                    // }
                }
            }
        });
        /**
         * 商品剂型
         */
        $.ajax({
            url: InterfaceUtil.getUrl(64),
            type: "post",
            data: InterfaceUtil.addTime({}),
            dataType: "json",
            success: function (data) {
                if (data.data.length == 0) {

                } else {
                    // console.log(JSON.stringify(data))
                    that.setState({
                        jx: data.data
                    });
                }
            }
        })
        //热门
        // ajax.open('post', 'http://192.168.1.49/index.php/index/index/search', false);
        $.ajax({
            url: InterfaceUtil.getUrl(1),
            type: "post",
            data: InterfaceUtil.addTime({}),
            dataType: "json",
            success: function (data) {

                // that.setState({
                //     top: data.data.top
                // });
            }
        });

        this.ajaxProductList();
        window.scrollTo(0, 0)
    }

    ajaxProductList() {
        let token = CoojiePage.getCoojie('token');
        let jylx = CoojiePage.getCoojie('jylx');
        let user_id = CoojiePage.getCoojie('user_id');
        //获取地址栏的值
        let did = InterfaceUtil.getHashParameters().did;
        let pid = InterfaceUtil.getHashParameters().pid;
        let sid = InterfaceUtil.getHashParameters().sid;
        let c = InterfaceUtil.getHashParameters().jx;
        let d = InterfaceUtil.getHashParameters().xq;
        let e = InterfaceUtil.getHashParameters().title;
        let f = InterfaceUtil.getHashParameters().scqy;
        let zjzx = InterfaceUtil.getHashParameters().zjzx;
        let pxnum = InterfaceUtil.getHashParameters().pxnum,
            pxtype = this.state.pxtype,
            is_kc = this.state.is_kc;
        $('.header_cd').find('li').removeClass();
        if (zjzx == "2") {
            $('.header_cd').find('li').eq(2).addClass('btn_Header');
        } else {
            $('.header_cd').find('li').eq(1).addClass('btn_Header');
        }
        if (did == undefined) {
            did = '';
        }
        if (pid == undefined) {
            pid = '';
        }
        if (sid == undefined) {
            sid = '';
        }
        if (c == undefined) {
            c = '';
        }
        if (d == undefined) {
            d = '';
        }
        if (f == null || f == undefined) {
            f = '';
        }
        if (e == null || e == undefined) {
            e = '';
        }
        if (pxnum = '' || pxnum == undefined || !pxnum) {
            pxnum = 1;
        }
        let arr = this.state.class,
            title_fenlei = '';
        for (var i = 0, len = arr.length; i < len; i++) {
            if (arr[i].id == pid) {
                title_fenlei = arr[i].title;
            }
        }
        this.setState({
            fenleiID: pid,
            xiaoqiID: d,
            jixingID: c,
            title: e,
            scqy: f,
            zileiID: sid,
            title_fenlei: title_fenlei,
            zjzx: zjzx,
            page: 1,
            is_kc: '',
        }, () => {
            if (e != null || !e) {

            }
        })
        const that = this;
        //  商品列表ajax
        $.ajax({
            url: InterfaceUtil.getUrl(8),
            type: "post",
            data: InterfaceUtil.addTime({
                'user_id': user_id, 'token': token, 'page': 1, 'pageSize': 20,
                type: zjzx, search: e, type_id: pid, is_stock: is_kc,
                sort_order: 1, sort_type: pxnum
            }),
            // 'user_id': user_id, 'token': token, 'page': 1, 'pageSize': 20,
            // 'type_id': pid, 'did': did, 'sid': sid,
            // 'member_id': user_id, 'jx': c, 'xq': d, 'search': e
            // , 'scqy': f, 'pxnum': pxnum, 'pxtype': pxtype, 'type': zjzx, is_kc: is_kc
            dataType: "json",
            success: function (data) {
                if (data.data.length == 0) {

                } else {
                    that.setState({
                        splist: data.data.goods_list,
                        cons: data.data.goods_count
                    });
                }
            }
        });

    }

    componentWillReceiveProps() {
        this.ajaxProductList();
        this.loginPage.openNewWindow();
    }

    changeVal(e, id) {
        var val = e.target.value;
        var arr = this.state.splist;
        let show = false;
        for (var i = 0, len = arr.length; i < len; i++) {
            if (arr[i].id === id) {
                arr[i].min_buy_ = val;
                show = !show;
            }
        }
        if (show) {
            this.setState({splist: arr});
        }
    }

    /**
     * checked
     */
    changeSwitch(checked) {
        // console.log(`switch to ${checked}`);
        let iskc = checked ? 1 : '';
        this.setState({
            is_kc: iskc
        }, () => {
            this.ajaxProductLists();
        })
    }

    render() {
        let data = this.state;
        return (
            <div className='contain chanpinzhongxin'>

                {/*排行榜*/}
                <Rank/>
                {/*右侧内容*/}
                <div className='chanpinzhongxin_right marginTop20'>
                    {/*右侧头部*/}
                    <div className='chanpinzhongxin_right_head'>
                        <ul>
                            <li className='chanpinzhongxin_right_head_li'>
                                <span className='floatleft'>筛选：</span>
                                <ul className='floatleft chanpinzhongxin_right_head_ul'>
                                    <li className='bbb fenlei display'
                                        data={data.fenleiID}>分类：{data.title_fenlei}<span
                                        onClick={(e) => {
                                            this.cha(e)
                                        }} className='cursor'>×</span></li>
                                    <li className='bbb zilei display'
                                        data={data.zileiID}>子类：{data.title_zilei}<span
                                        onClick={(e) => {
                                            this.cha(e)
                                        }} className='cursor'>×</span></li>
                                    <li className='bbb jixing display'
                                        data={data.jixingID}>剂型：{data.title_jixing}<span
                                        onClick={(e) => {
                                            this.cha(e)
                                        }} className='cursor'>×</span></li>
                                    <li className='bbb xiaoqi display'
                                        data={data.xiaoqiID}>效期：{data.title_xiaoqi}<span
                                        onClick={(e) => {
                                            this.cha(e)
                                        }} className='cursor'>×</span></li>

                                    <div className='clear'/>
                                </ul>
                                <span className='floatRight relative marginRight20 cursor' onClick={(e) => {
                                    this.cha1(e)
                                }}>
                  <img src={require("../../images/chanpinzhongxin/lajitong.png")} alt=""
                       className='chanpinzhongxin_right_head_li_img'/>
                  清除条件
                </span>
                                <div className='clear'/>
                            </li>
                            <li>
                                <span className='floatleft'>分类：</span>
                                {/*<span className='floatRight chanpinzhongxin_right_head_span' onClick={(e) => {*/}
                                    {/*this.more(e)*/}
                                {/*}}>更多</span>*/}
                                <ul className='chanpinzhongxin_right_head_li_ul'>
                                    {
                                        data.class.map(function (item) {
                                            return (
                                                <li key={item.id + 'fenlei1'} className='fenlei1' onClick={(e) => {
                                                    this.blue(e,item.id)
                                                }} data-index={item.id}>{item.name}</li>
                                            )
                                        }, this)
                                    }
                                    <div className='clear'></div>
                                </ul>
                                <div className='clear'></div>
                            </li>
                            <li className='title_zilei display'>
                                <span className='floatleft'>子类：</span>
                                <span className='floatRight chanpinzhongxin_right_head_span1' onClick={(e) => {
                                    this.more(e)
                                }}>更多</span>
                                <ul className='chanpinzhongxin_right_head_li_ul height40 kuangjia'>
                                    {
                                        data.class_z.map(function (item) {
                                            return (
                                                <li key={item.id + 'class_z'} className='zilei1' onClick={(e) => {
                                                    this.blue1(e)
                                                }} data={item.id}>{item.name}</li>
                                            )
                                        }, this)
                                    }
                                    <div className='clear'></div>
                                </ul>
                                <div className='clear'></div>
                            </li>
                            <li>
                                <span className='floatleft'>剂型：</span>
                                <span className='floatRight chanpinzhongxin_right_head_span1' onClick={(e) => {
                                    this.more(e)
                                }}>更多</span>
                                <ul className='chanpinzhongxin_right_head_li_ul height40 kuangjia'>
                                    {
                                        data.jx.map(function (item, i) {
                                            return (
                                                <li key={item.id} className='jixing1' onClick={(e) => {
                                                    this.blue2(e,item.id)
                                                }}>{item.name}</li>
                                            )
                                        }, this)
                                    }
                                    <div className='clear'></div>
                                </ul>
                                <div className='clear'></div>
                            </li>
                            <li>
                                <span className='floatleft'>效期：</span>
                                <ul className='chanpinzhongxin_right_head_li_ul'>
                                    <li className="xiaoqi1" data="2" onClick={(e) => {
                                        this.blue3(e,2)
                                    }}>常规效期</li>
                                    <li className="xiaoqi1" data="1"
                                        onClick={(e) => {
                                            this.blue3(e,1)
                                        }}>近效期</li>

                                </ul>
                                <div className='clear'></div>
                            </li>
                            <li>
                                <span className='floatleft'>搜索：</span>
                                <input type="text" className='chanpinzhongxin_right_head_inp' placeholder='药品名称搜索'/>
                                <input type="text" className='chanpinzhongxin_right_head_inp' placeholder='药品厂家搜索'/>
                                <button className='chanpinzhongxin_right_head_btn relative'>
                                    <img src={require("../../images/chanpinzhongxin/fangdajing.png")} alt=""
                                         className='chanpinzhongxin_right_head_btn_img'/>
                                    <span onClick={(e) => {
                                        this.chaxun(e)
                                    }}>查询</span>
                                </button>
                                <div className='clear'></div>
                            </li>
                            <div className='clear'></div>
                        </ul>
                    </div>
                    {/*右侧内容*/}
                    <div className='chanpinzhongxin_right_con'>
                        {/*商品筛选*/}
                        <div className='chanpinzhongxin_right_con_div'>
                            <ul className='chanpinzhongxin_right_con_div_ul'>
                                <li
                                    className='relative chanpinzhongxin_right_con_div_li_current chanpinzhongxin_right_con_div_li chanpinzhongxin_right_con_div_li3'
                                    onClick={(e) => {
                                        this.paixu(e);
                                        this.top(e);
                                    }}
                                    data-class="1"
                                >
                                    <span
                                        className='chanpinzhongxin_span'>综合</span>
                                    {/*<img src="../../images/chanpinzhongxin/tobtm.png" alt="" className='chanpinzhongxin_right_con_div_img'/>*/}
                                    {/*<img src="../../images/chanpinzhongxin/tobtm1.png" alt="" className='chanpinzhongxin_right_con_div_img display'/>*/}
                                    <div className='clear'></div>
                                </li>
                                <li

                                    className='relative chanpinzhongxin_right_con_div_li chanpinzhongxin_right_con_div_li3'
                                    onClick={(e) => {
                                        this.paixu(e);
                                        this.top(e)
                                    }}>
                                    <span className='chanpinzhongxin_span'>人气</span>
                                </li>
                                <li

                                    className='relative chanpinzhongxin_right_con_div_li chanpinzhongxin_right_con_div_li3'
                                    onClick={(e) => {
                                        this.paixu(e);
                                        this.top(e)
                                    }}>
                                    <span className='chanpinzhongxin_span'>销量</span>
                                </li>
                                <li

                                    className='relative chanpinzhongxin_right_con_div_li chanpinzhongxin_right_con_div_li3'
                                    onClick={(e) => {
                                        this.paixu(e);
                                        this.top(e)
                                    }}>
                                    <span className='chanpinzhongxin_span'>价格</span>
                                </li>
                                <li

                                    className='relative chanpinzhongxin_right_con_div_li chanpinzhongxin_right_con_div_li3'
                                    onClick={(e) => {
                                        this.paixu(e);
                                        this.top(e)
                                    }}>
                                    <span className='chanpinzhongxin_span'>品名</span>
                                </li>
                                <li

                                    className='relative chanpinzhongxin_right_con_div_li chanpinzhongxin_right_con_div_li3'
                                    onClick={(e) => {
                                        this.paixu(e);
                                        this.top(e)
                                    }}>
                                    <span className='chanpinzhongxin_span'>厂家</span>
                                </li>


                                <li className='chanpinzhongxin_right_con_div_li1 chanpinzhongxin_right_con_div_li4'
                                    onClick={(e) => {
                                        this.qiehuan(e)
                                    }}>
                                    <span className='chanpinzhongxin_right_con_div_li4_span'>列表</span>
                                </li>
                                <li className='chanpinzhongxin_right_con_div_li1 chanpinzhongxin_right_con_div_li5'
                                    onClick={(e) => {
                                        this.qiehuan(e)
                                    }}>
                                    <span className='chanpinzhongxin_right_con_div_li4_span'>大图</span>
                                </li>
                                <li className='isInStock'>
                                    <span>只显示有货：</span>
                                    <Switch size="small" onChange={(e) => this.changeSwitch(e)}/>
                                </li>
                            </ul>
                        </div>
                        {/*商品信息*/}
                        <ul className='chanpinzhongxin_right_con_ul'>
                            {this.state.splist.map(function (item) {
                                // console.log(item)
                                let islimit = item.activity_num > 99999 ? `` : item.activity_num;
                                let hprice = item.activity_price ?
                                    <div>价格：<span
                                        className='shangpinxiangqing_personal_Dindan_con1_tablesp_xinxi_jiage_span'>
                                                    {item.price}
                                                    </span>
                                        活动：<span className='red fontS1'>{item.activity_price}</span>
                                        <span
                                            className='red font13 bold'>( `限购` {islimit} )</span>
                                    </div> :
                                    <div>价格：<span className='red fontS1'>{item.price}</span></div>;
                                let Collection2 = item.is_collect !== 0 ? 'chanpinzhongxin_sp_img_shoucang chanpinzhongxin_sp_img_shoucang_current'
                                    : 'chanpinzhongxin_sp_img_shoucang';
                                let maxNum = item.stock_num > 1000 ? `充裕` : item.stock_num;
                                let hot_img = item.hot_img ? <div className="hotImg">
                                    <img src={this.state.lujin + item.hot_img} alt=""/>
                                </div> : null;

                                let times = InterfaceUtil.fmtDate(item.validity_time);
                                return (
                                    <li key={item.id + 'cp1'}>
                                        <input type="hidden" value={item.min_buy} data={item.id}/>
                                        <div className='chanpinzhongxin_right_con_ul_div relative'>
                                            {hot_img}
                                            <img src={this.state.lujin + item.image} alt=""
                                                 className='chanpinzhongxin_right_con_ul_img'
                                                 onMouseMove={(e) => {
                                                     this.img(e)
                                                 }} onMouseOut={(e) => {
                                                this.img1(e)
                                            }} onClick={(e) => {
                                                this.xiangqing(e)
                                            }}/>
                                            <div className={Collection2} data={item.id} onClick={(e) => {
                                                this.color10(e, item.is_collect)
                                            }}>
                                                <img src={require("../../images/shangpingxiangqing/xinBai.png")}
                                                     className='marginRight5'
                                                     alt=""/>收藏
                                            </div>
                                        </div>
                                        <p className='chanpinzhongxin_right_con_ul_p hid'>{item.name}</p>
                                        <p className='hid'>{item.enterprise}</p>
                                        <p className='hid'>规格：{item.standard}</p>
                                        <div><span>单位：{item.unit}</span><span
                                            className='marginLeft20'>件装量：{item.unit_num}</span>
                                            <div className='clear'/>
                                        </div>
                                        <div>
                                            <span>库存：{maxNum}</span>
                                            <span
                                                className='marginLeft20 zhongbaozhuang'>中包装：{item.min_buy}</span>
                                            <div className='clear'/>
                                        </div>
                                        {hprice}
                                        <p>效期：{times}</p>
                                        <div>
                                            {/*<InputNumber min={2} value={3} onChange={onChange} className='floatleft' id='num' />*/}
                                            <input type="text" id='num'
                                                   className='floatleft chanpinzhongxin_right_con_ul_inp'
                                                   value={item.min_buy_}
                                                   onBlur={(e) => {
                                                       this.shuliang(e, item.min_buy_, item.id)
                                                   }} onChange={(e) => this.changeVal(e, item.id)}
                                            />
                                            <span className='chanpinzhongxin_right_con_ul_span floatleft'>
                      <button className='floatleft chanpinzhongxin_right_con_ul_span1' onClick={(e) => {
                          this.jia1(item.min_buy_, item.min_buy, item.id, item.stock_num)
                      }}/>
                      <button
                          className='floatleft chanpinzhongxin_right_con_ul_span2'
                          onClick={(e) => {
                              this.jian1(item.min_buy_, item.min_buy, item.id)
                          }}/>
                    </span>
                                            <button className='chanpinzhongxin_right_con_ul_btn floatleft'
                                                    onClick={(e) => {
                                                        this.buycar(e)
                                                    }}><i className='shoppingCart'></i>加入购物车
                                            </button>
                                            <div className='clear'></div>
                                        </div>
                                    </li>
                                )
                            }, this)
                            }
                            <div className='clear'></div>
                        </ul>
                        {/*商品信息2*/}
                        <table className='chanpinzhongxin_con1_table display'>
                            <thead>
                            <tr>
                                <th width="50px">活动标识</th>
                                <th width="167px">产品名称</th>
                                <th width="75px">规格</th>
                                <th width="35px">单位</th>
                                <th width="150px">生产厂家</th>
                                <th width="40px">件装量</th>
                                <th width="50px">中包装</th>
                                <th width="70px">价格</th>
                                <th width="40px">库存</th>
                                <th width="80px">效期</th>
                                <th width="85px">数量</th>
                                <th width="120px">操作</th>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                this.state.splist.map(function (item) {
                                    let Collection = item.is_collect !== 0 ? 'blue2 cursor' : 'blue cursor';
                                    let times = InterfaceUtil.fmtDate(item.validity_time);
                                    return (
                                        <tr key={item.id + 'spcap'} onMouseOver={(e) => {
                                            this.tr1(e)
                                        }} onMouseOut={(e) => {
                                            this.tr2(e)
                                        }} data="1" className='CP_tr'>

                                            <td><input type="hidden" value={item.min_buy_} data={item.id}/></td>
                                            <td className='blue tableImageTds cursor' onClick={(e) => {
                                                this.tiaozhuan1(e)
                                            }}>
                                                {item.name}
                                                <img className="tableImage" src={this.state.lujin + item.image}/>
                                            </td>
                                            <td className='hid'>{item.standard}<span></span></td>
                                            <td>{item.unit}<span></span></td>
                                            <td className='hid'>{item.enterprise}<span></span></td>
                                            <td>{item.unit_num}<span></span></td>
                                            <td>{item.min_buy}</td>
                                            <td className='red1'>{item.price}<span></span></td>
                                            <td className='hid'>{item.stock_num}<span></span></td>
                                            <td className='hid'>{times}<span></span></td>
                                            <td>
                                                <button className='chanpinzhongxin_con1_table_btn' onClick={(e) => {
                                                    this.jian2(item.min_buy_, item.min_buy, item.id)
                                                }}>-
                                                </button>
                                                <input type="text" value={item.min_buy_}
                                                       className='chanpinzhongxin_con1_table_inp'
                                                       onBlur={(e) => {
                                                           this.shuliang(e, item.min_buy, item.id)
                                                       }}
                                                       onChange={(e) => this.changeVal(e, item.id)}/>
                                                <button className='chanpinzhongxin_con1_table_btn' onClick={(e) => {
                                                    this.jia2(item.min_buy_, item.min_buy, item.id, item.stock_num)
                                                }}>+
                                                </button>
                                            </td>
                                            <td>
                        <span className='chanpinzhongxin_con1_table_span' onClick={(e) => {
                            this.buycar1(e)
                        }}>加入购物车</span>
                                                <span
                                                    className={Collection}
                                                    // className='blue cursor'
                                                    data={item.id}
                                                    onClick={(e) => {
                                                        this.tiaozhuan(e, item.is_collect)
                                                    }}

                                                >收藏</span>
                                            </td>
                                        </tr>
                                    )
                                }, this)
                            }
                            </tbody>
                        </table>
                        <div className='clear'></div>
                    </div>
                    {/*分页*/}
                    <div className='width988 marginTop20 marginBottom20 paddingBtm20'>
                        <div className='floatRight personal_zhanneixin_title_div3_span3'>
                            <Pagination showQuickJumper={true}
                                        defaultCurrent={1}
                                        defaultPageSize={20}
                                        total={this.state.cons}
                                        onChange={(e) => {
                                            this.fenye(e)
                                        }}/>
                        </div>
                        <div className='clear'/>
                    </div>
                </div>
                {/*底部内容*/}
                <div className='clear'/>
                <div className='contain chanpinzhongxin_bottom'>
                    <div className='xian'/>
                    <div className="chanpinzhongxin_bottom_div">
                        <span className='floatleft marginRight20'>您是不是要找:</span>
                        <div className='floatleft'>
                            {
                                this.state.top.map(function (item) {
                                    return (
                                        <div key={item.id + 'cp2'} className='chanpinzhongxin_bottom_span'>
                                            <Link to={"/Shangpinxiangqing?&id=" + item.id}>
                                                <span>{item.title}</span>
                                            </Link>

                                        </div>
                                    )
                                }, this)
                            }
                            {/*<span className='chanpinzhongxin_bottom_span'><a href="">注射用克林霉素磷酸脂</a></span>丨*/}
                            {/*<span className='chanpinzhongxin_bottom_span'><a href="">注射用脑蛋白水解物</a></span>丨*/}
                            {/*<span className='chanpinzhongxin_bottom_span'><a href="">注射用头孢他啶</a></span>丨*/}
                            {/*<span className='chanpinzhongxin_bottom_span'><a href="">乳酸左氧氟沙星氯化钠注射</a></span>*/}
                        </div>
                        <div className='clear'></div>
                    </div>
                    <div className='chanpinzhongxin_bottom_div'>
                        <span>重新搜索：</span>
                        <input type="text" className='chanpinzhongxin_bottom_inp'/>
                        <button className='chanpinzhongxin_bottom_btn' onClick={(e) => {
                            this.chaxun1(e)
                        }}>搜索
                        </button>
                    </div>
                </div>
                {/*推荐*/}
                <div className=''>
                    <Tuijian data='6'/>
                </div>

                <div className='clear'/>
            </div>
        );
    }
}

export default withRouter(Chanpinzhongxin);