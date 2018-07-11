// import React from 'react';
// var u='http://192.168.1.49/index.php/index/';
// var u='http://192.168.1.49/';
let u='http://jc.cx5201314.com/';
// let u='http://192.168.1.49/';
let rl='apis/index.php/index/';
let imgu='http://www.scjuchuang.com/';
let urls=[
    'index/other','index/search','Cart/check_cart','Cart/check_cart','Cart/addcart', //5
    'user/collection_goods_add','user_order/cartdelete','Cart/cart_list','goods/goods_list','goods/goods_search_type', //10
    'user/collection_goods_delete','user_order/cartadd','cart/goods_rand','user/api_login_user','user/user_reg', //15
    'user/get_user_city','user/goback_password','order/create_order','order/orderinfo_pay','help/helptitle', //20
    'help/helplist','index/hot','index/week','index','index/drugstore', //25
    'index/floor','index/brand','index/news','index/banners','Order/orderdshangpinxiangqing_sp_xinxi_jiageetail', //30
    'news/news_info','news/newlist','user_order/addcartall','user/zncg_list','user/index',//35
    'user_order/getorder','user/collection_goods','order/close_order','user_order/cartaddall','user/changepassword',//40
    'user/userinfo','user/jfls_log','user/luck_log','user_order/getorderinfo','order/order_wl',//45
    'user/coupons','user/coupon_counts','user/delete_znx','user/get_znx','user/get_znx_info',//50
    'goods/goods_info','coupon/get_coupon','user/get_coupon','goods/ranking','banners/',//55
    '','user/userzz_update','user/is_username','order/wxpay_img','order/order_status',//60
    'user/user_info_update','order/wxpay_img_virtual','order/coupon_order_status',
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
        return u+rl+urls[i];
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
}
