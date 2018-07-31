
import React from 'react';
import {withRouter,Link} from "react-router-dom";
// import $ from '../../js/jquery.min';
import $ from 'jquery';
import InterfaceUtil from '../../util/InterfaceUtil';


class Zhaohui extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
  }

  zhaohui(e){
    var username=$('.zhaohui_div_inp1').val();
    const that = this;
    //头部ajax
    $.ajax({
                url: InterfaceUtil.getUrl(16),
                type: "post",
                data: InterfaceUtil.addTime({
                    username:username
                }),
                dataType: "json",
                success: function(data){
                      alert(data.info)
        if(data.status===1) that.props.history.push('/Denglu');
                }
            });
    // ajax.open('post',"http://192.168.1.49/index.php/index/user/goback_password",false);
    // ajax.open('post',InterfaceUtil.getUrl(16),false);
    // ajax.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
    // ajax.onreadystatechange = function() {
    //   if (ajax.readyState == 4 && ajax.status == 200 || ajax.status == 304) { // readyState == 4说明请求已完成
    //     var data=ajax.responseText;
    //     data=JSON.parse(data);
    //     console.log(data);
    //     alert(data.info)
    //     if(data.status===1) location.replace('#/Denglu');
    //   }
    // };
    // ajax.send("username="+username);
  }

  render() {
    return (
      <div className='container bgWhite'>
          {/*头部*/}
          <div className='contain denglu_title'>
            <Link to="/"> <img src={require("../../images/logo1.png" )} alt="" className='denglu_title_img'/></Link>
            <ul className='denglu_title_ul'>
              <li className='denglu_title_ul_li'>
                <a href="http://sighttp.qq.com/msgrd?v=1&uin=2885052533" target="view_window">
                  <p className='denglu_title_ul_p2'>服务QQ</p>
                  <p className='denglu_title_ul_p2'>2885052533</p>
                </a>
              </li>
              <li className='denglu_title_ul_li1'>
                <p className='denglu_title_ul_p1'>客服电话</p>
                <p className='denglu_title_ul_p1'>028-83211111</p>
              </li>
              <li className='denglu_title_ul_li2'>
                <p>互联网药品交易服务资格证</p>
                <p className='denglu_title_ul_p'>川B 20160006</p>
              </li>
              <div className='clear'></div>
            </ul>
          </div>
          {/*内容*/}
          <div className='container zhaohui_bg'>
            <div className='contain  '>
              <div className='zhaohui_bg_div'>
                <div className='zhaohui_bg_div_div'>
                  输入账号
                </div>
                <div>
                  <p className='zhaohui_con_kuang_box_p'>
                    请输入您绑定的手机号/用户名
                  </p>
                  <p className='relative marginTop10'>
                    <span className='zhaohui_div_span'></span>
                    <input type="text" className='zhaohui_div_inp1'placeholder='请输入用户名' />
                  </p>
                  {/*<p>*/}
                    {/*<input type="text" className='zhaohui_div_inp'placeholder='请输入图片中的字母或数字' />*/}
                  {/*</p>*/}
                  <p className='zhaohui_div_p'>
                    <span className='zhaohui_div_p_span'onClick={(e)=>{this.zhaohui(e)}}>找回密码</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/*尾部*/}
          <div className='container zhaohui_bg1'>
          <div className='contain '>
            <p className='center zhaohui_banquan1'>《互联网药品信息服务资格证》证书号：（川）-非经营性2015-0039 |《互联网药品交易服务资格证》 证书号：蜀ICP备15031161号</p>
            <p className='center denglu_banquan'>版权所有：四川聚创医药有限公司</p>
            <p className='center zhaohui_banquan'>本网站不从事麻醉药品、精神药品、医疗用毒性药品、放射性药品、戒毒药品和医疗机构制剂的产品的交易。</p>
          </div>
          </div>
      </div>
    );
  }

}

export default withRouter(Zhaohui);
