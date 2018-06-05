import React,{Component} from 'react';
import $ from 'jquery';
export default class CoojiePage{
  /**
   * 获取cookei的具体数值
   * @param cookieName
   * @returns {string}
   */
  static getCoojie(cookieName){
    var strCookie = document.cookie;
    var arrCookie = strCookie.split("; ");
    for(var i = 0; i < arrCookie.length; i++){
      var arr = arrCookie[i].split("=");
      if(cookieName == arr[0]){
        return arr[1];
      }
    }
    return "";
  }

    /**
     * 加入购物车成功提示框
     */
  static setBuyCarOk(){
        var ok=$('.buycar_ok');
        // var ok = document.getElementsByClassName('buycar_ok');
        // ok.[0].className = 'buycar_ok';
        ok.eq(0).removeClass('display');
        var timer1 = setTimeout(function () {
            ok.eq(0).addClass('display');
        }, 2500);
    }
}
