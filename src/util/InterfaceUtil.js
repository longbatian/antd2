// import React from 'react';
// var u='http://192.168.1.49/index.php/index/';
// var u='http://192.168.1.49/';
import forge from "node-forge";
import CoojiePage from "./CoojiePage";

// let u='http://jc.cx5201314.com/';
// let u='http://192.168.1.49/';
let rl='apis/index.php/index/';
let u='http://api.tyaow.com';
// let imgu='http://www.scjuchuang.com/';
let imgu='http://web.tyaow.com';
// let urls=[
//     'index/other','index/search','Cart/check_cart','Cart/check_cart','Cart/addcart', //5
//     'user/collection_goods_add','user_order/cartdelete','Cart/cart_list','goods/goods_list','goods/goods_search_type', //10
//     'user/collection_goods_delete','user_order/cartadd','cart/goods_rand','user/api_login_user','user/user_reg', //15
//     'user/get_user_city','user/goback_password','order/create_order','order/orderinfo_pay','help/helptitle', //20
//     'help/helplist','index/hot','index/week','index','index/drugstore', //25
//     'index/floor','index/brand','index/news','index/banners','Order/orderdetail', //30
//     'news/news_info','news/newlist','user_order/addcartall','user/zncg_list','user/index',//35
//     'user_order/getorder','user/collection_goods','order/close_order','user_order/cartaddall','user/changepassword',//40
//     'user/userinfo','user/jfls_log','user/luck_log','user_order/getorderinfo','order/order_wl',//45
//     'user/coupons','user/coupon_counts','user/delete_znx','user/get_znx','user/get_znx_info',//50
//     'goods/goods_info','coupon/get_coupon','user/get_coupon','goods/ranking','banners/',//55
//     '','user/userzz_update','user/is_username','order/wxpay_img','order/order_status',//60
//     'user/user_info_update','order/wxpay_img_virtual','order/coupon_order_status',
// ];
let urls=[

    '/index/sidebar',//0
    '/index/get_global',//1
    'Cart/check_cart',//2
    'Cart/check_cart',//3
    'Cart/addcart', //4
    '/users/goods_collect',//5
    // 'user_order/cartdelete',//6
    '/goods/remove_cart',//6
    // 'Cart/cart_list',//7
    '/goods/cart_list',//7
    // 'goods/goods_list',//8
    '/goods/goods_list',//8
    // 'goods/goods_search_type', //9
    '/goods/goods_rank', //9
    // 'user/collection_goods_delete',//10
    '/users/goods_collect_cancel',//10
    // 'user_order/cartadd',//11
    '/goods/append_cart',//11
    'cart/goods_rand',//12
    '/users/login'//13
    // ,'user/user_reg', //14
    ,'/users/register', //14
    // 'user/get_user_city',//15
    '/users/get_area',//15
    // 'user/goback_password',//16
    '/users/reset_password',//16
    // 'order/create_order',//17
    '/orders/create_order',//17
    // 'order/orderinfo_pay',//18
    '/orders/order_price',//18
    // 'help/helptitle', //19
    '/index/help_center', //19
    'help/helplist',//20
    // 'index/hot',//21
    '/index/spcarea',//21
    // 'index/week',//22
    '/index/recom_goods',//22
    '/index/goods_type',//23
    // 'index/drugstore', //24
    // '/index/necessary', //24
    '/goods/goods_recom', //24
    // 'index/floor',//25
    '/index/hierarchy',//25
    // 'index/brand',//26
    '/index/adv_brand',//26
    'index/news',//27
    '/index/get_banner',//28
    // 'Order/orderdetail', //29
    '/orders/build_order', //29
    '/index/news_detail',//30
    // 'news/news_info',//30
    // 'news/newlist',//31
    '/index/news_list',//31
    'user_order/addcartall',//32
    'user/zncg_list',//33
    // 'user/index',//34
    '/users/user_info',//34
    // 'user_order/getorder',//35
    '/orders/order_list',//35
    // 'user/collection_goods',//36
    '/users/goods_collect_list',//36
    // 'order/close_order',//37
    '/orders/close_order',//37
    'user_order/cartaddall',//38
    // 'user/changepassword',//39
    '/users/modify_password',//39
    'user/userinfo',//40
    'user/jfls_log',//41
    'user/luck_log',//42
    // 'user_order/getorderinfo',//43
    '/orders/order_detail',//43
    'order/order_wl',//44
    'user/coupons'//45
    ,'user/coupon_counts',//46
    'user/delete_znx',//47
    // 'user/get_znx',//48
    '/index/message',//48
    // 'user/get_znx_info',//49
    '/index/message_read',//49
    // 'goods/goods_info',//50
    '/goods/goods_info',//50
    // 'coupon/get_coupon',//51
    // 'coupon/get_coupon',//51
    '/goods/get_coupon',//51
    // 'user/get_coupon',//52
    '/goods/coupon_list',//52
    // 'goods/ranking',//53
    '/goods/goods_rank',//53
    'banners/',//54
    '',//55
    // 'user/userzz_update',//56
    '/users/user_data',//56
    // 'user/is_username',//57
    '/users/field_valid',//57
    '/orders/wechat_pay_qrcode'//58
    // ,'order/order_status',//59
    ,'/orders/order_pay_status',//59
    'user/user_info_update',//60
    'order/wxpay_img_virtual',//61
    'order/coupon_order_status',//62
    '/index/search_goods',//63
    '/goods/goods_agent',//64
    '/orders/alipay_pay_qrcode',//65
    '/goods/coupon_tickets',//66
];
// http://192.168.1.49/index.php/index/index/search
export default class InterfaceUtil{
    /**
     * ajax路径
     * @param i 传入数组的位置
     * @returns {string} url拼接
     */
    static getUrl(i){
        // alert(u+urls[i])
        return u+urls[i];
    }

    /**
     * 图片接口
     * @returns {string}
     */
    static getImgUrl(){
        // return 'http://192.168.1.49/';
        return imgu;
    }
    static getHashParameters(){
        let url = document.location.href;
        url= decodeURI(url);
        let arr = (url || '').replace(/^\#/, '').split('&');
        let params = {};
        for (let i = 0; i < arr.length; i++) {
            let data = arr[i].split('=');
            if (data.length === 2) {
                params[data[0]] = data[1];
            }
        }
        return params;
    }
    static getHashParameter(key){
        let params = this.getHashParameters();
        return params[key]
    }

    /**
     * 加密md5，增加sign属性，并返回
     * @param flag
     * @returns {*}
     */

    static md(flag){
        let sign_key=`scjuchuang_85237790`;
        let a='';
        for(let i in flag){//用javascript的for/in循环遍历对象的属性
            a+=i+`=`+flag[i]+`&`
        }
        a+=`sign_key=`+sign_key;
        let md = forge.md.md5.create();
        md.update(a);
        flag[`sign`]=md.digest().toHex().toUpperCase();
        return flag;
    }

    /**
     * 增加时间戳
     * @param flag
     */
    static addTime(flag){
        let timestamp = (new Date()).getTime();
        flag[`time_stamp`]=timestamp;
        this.md(flag);

        return flag;
    }

    /**
     * 时间戳转换时间- - -格式
     * @param obj
     * @returns {string}
     */
    static fmtDate(obj){
        var date = new Date();
        date.setTime(obj * 1000);
        var y = date.getFullYear();
        var m = date.getMonth() + 1;
        m = m < 10 ? ('0' + m) : m;
        var d = date.getDate();
        d = d < 10 ? ('0' + d) : d;
        var h = date.getHours();
        h = h < 10 ? ('0' + h) : h;
        var minute = date.getMinutes();
        var second = date.getSeconds();
        minute = minute < 10 ? ('0' + minute) : minute;
        second = second < 10 ? ('0' + second) : second;
        return y + '-' + m + '-' + d;
    }

    /**
     * 删除coikie
     * @param name
     */
    static delCookie(name) {
        var exp = new Date();
        exp.setTime(exp.getTime() - 1);
        var cval = CoojiePage.getCoojie(name);
        if (cval != null)
            document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString();
    }
}
