import React, {Component} from 'react';
import CoojiePage from './CoojiePage';
export default class LoginPage {
    /**
     * 判断是否token过期
     * @param flag  状态值
     * @param _props    this.props 里面有history
     */
    ajaxLogin(flag,_props){
      if(flag===-2){
        alert('有另一个账号把您挤出登录状态')
          _props.history.push('/Denglu');
      }
      return;
    }

    /**
     * 跳转判断是否登录
     * @param url 跳转的url,
     * @param flag 传入this.props 里面有history
     */
    loginGo(url,flag){
      if(CoojiePage.getCoojie('token')==''){
        alert('请登录');
        flag.history.push('/Denglu');
      }else {
          flag.history.push(url);
          this.openNewWindow();
      }

    }

    /**
     * 每次登录滚动到最高处
     */
    openNewWindow(){
        window.scrollTo(0,0)
    }
}
