// import React from 'react';
// var u='http://192.168.1.49/index.php/index/';
// var u='http://192.168.1.49/';
import forge from "node-forge";

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
    'index/other',//0
    'index/search',//1
    'Cart/check_cart',//2
    'Cart/check_cart',//3
    'Cart/addcart', //4
    'user/collection_goods_add',//5
    'user_order/cartdelete',//6
    'Cart/cart_list',//7
    'goods/goods_list',//8
    'goods/goods_search_type', //9
    'user/collection_goods_delete',//10
    'user_order/cartadd',//11
    'cart/goods_rand',//12
    '/users/login'//13
    ,'user/user_reg', //14
    'user/get_user_city',//15
    'user/goback_password',//16
    'order/create_order',//17
    'order/orderinfo_pay',//18
    'help/helptitle', //19
    'help/helplist',//20
    'index/hot',//21
    'index/week',//22
    'index',//23
    'index/drugstore', //24
    'index/floor',//25
    'index/brand',//26
    'index/news',//27
    'index/banners',//28
    'Order/orderdetail', //29
    'news/news_info',//30
    'news/newlist',//31
    'user_order/addcartall',//32
    'user/zncg_list',//33
    'user/index',//34
    'user_order/getorder',//35
    'user/collection_goods',//36
    'order/close_order',//37
    'user_order/cartaddall',//38
    'user/changepassword',//39
    'user/userinfo',//40
    'user/jfls_log',//41
    'user/luck_log',//42
    'user_order/getorderinfo',//43
    'order/order_wl',//44
    'user/coupons'//45
    ,'user/coupon_counts',//46
    'user/delete_znx',//47
    'user/get_znx',//48
    'user/get_znx_info',//49
    'goods/goods_info',//50
    'coupon/get_coupon',//51
    'user/get_coupon',//52
    'goods/ranking',//53
    'banners/',//54
    '',//55
    'user/userzz_update',//56
    'user/is_username',//57
    'order/wxpay_img'//58
    ,'order/order_status',//59
    'user/user_info_update',//60
    'order/wxpay_img_virtual',//61
    'order/coupon_order_status',//62
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

    static md(flag){

        let sign_key='scjuchuang_85237790';
        let a=``;
        for(let i in flag){//用javascript的for/in循环遍历对象的属性
            a+=i+`=`+flag[i]+`&`
        }
        a+=`sign_key=`+sign_key;
        let md = forge.md.md5.create();
        md.update(a);
        flag[`sign`]=md.digest().toHex();
        // console.log(md.digest().toHex());
        console.log(flag);
        return flag;
    }
    static addTime(flag){
        let timestamp = (new Date()).getTime();
        flag[`time_stamp`]=timestamp;
        this.md(flag)
    }
}
