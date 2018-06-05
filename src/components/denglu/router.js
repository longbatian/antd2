
import React from 'react';
import { Radio,Modal } from 'antd';
import {Link,withRouter} from 'react-router-dom';
const RadioGroup = Radio.Group;
import InterfaceUtil from '../../util/InterfaceUtil';

class Zhuce extends React.Component {
  constructor () {
    super();
    this.state={
      jylx:'',
      username:'',
      userpass:'',
      password1:'',
      dwmc:'',
      lxr:'',
      lxdh:'',
      yx:'',
      qq:'',
      region:'',
      jieshou:'',
      tjr:''
    };
  }
  state = {
    value: 1,
  }
  //表单验证
  query = {
    jylx:{
      value:'',
      validata:[
        {
          errMessage:'经营类型必须选择一项',
          test:(value) => {
            return value;
          }
        }
      ]
    },
    username:{
      value:'',
      validata:[
        {
          errMessage:'用户名必须填写',
          test:(value) => {
            return value;
          }
        },
        {
          errMessage:'用户名长度在3-15位之间',
          test:(value) => {
            return value.length >= 3&&value.length <= 15;
          }
        },
        {
          errMessage:'用户名格式不正确',
          test:(value) => {
            var patrn=/^[a-zA-Z0-9]{3,15}$/;
            if(patrn.test(value)){
              return value;
            }else {
              return false;
            }
          }
        }
      ]
    },
    userpass:{
      value:'',
      validata:[
        {
          errMessage:'密码必须填写',
          test:(value) => {
            return value;
          }
        },
        {
          errMessage:'密码长度在6-15位之间',
          test:(value) => {
            return value.length >= 6&&value.length <= 15;
          }
        }
      ]
    },
    password1:{
      value:'',
      validata:[
        {
          errMessage:'两次密码输入不一致',
          test:(value) => {
            return value;
          }
        },
        {
          errMessage:'两次密码输入不一致',
          test:(value) => {
            var a =$('.zhuce_con_form_inp');
            return value ==a[1].value ;
          }
        }
      ]
    },
    dwmc:{
      value:'',
      validata:[
        {
          errMessage:'企业名称必须填写',
          test:(value) => {
            return value;
          }
        },
        // {
        //   errMessage:'企业名称格式不正确',
        //   test:(value) => {
        //     var patrn=/[\u4e00-\u9fa5]/;
        //     console.log(patrn.test(value));
        //     if(patrn.test(value)){
        //       return value;
        //     }else {
        //       return false;
        //     }
        //   }
        // }
      ]
    },
    lxr:{
      value:'',
      validata:[
        {
          errMessage:'姓名必须填写',
          test:(value) => {
            return value;
          }
        },
        {
          errMessage:'姓名格式不正确',
          test:(value) => {
            var patrn=/[\u4e00-\u9fa5]/;
            if(patrn.test(value)){
              return value;
            }else {
              return false;
            }
          }
        }
      ]
    },
    lxdh:{
      value:'',
      validata:[
        {
          errMessage:'手机号必须填写',
          test:(value) => {
            return value;
          }
        },
        {
          errMessage:'手机号格式不正确',
          test:(value) => {
            if(isNaN(value)!=false){
              return false;
            }else{
              return value;
            }
          }
        }
      ]
    },
    yx:{
      value:'',
      validata:[
        {
          errMessage:'邮箱格式不正确',
          test:(value) => {
            if(value==''){
              return 1;
            }else {
              var patrn=/[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/;
              if(patrn.test(value)){
                return value;
              }else {
                return false;
              }
            }

          }
        },
      ]
    },
    qq:{
      value:'',
      validata:[
        {
          errMessage:'QQ号格式不正确',
          test:(value) => {
            if(value==''){
              return 1;
            }else {
              if(isNaN(value)!=false){
                return false;
              }else{
                return value;
              }
            }
          }
        },
        {
          errMessage:'QQ号格式不正确',
          test:(value) => {
            if(value==''){
              return 1;
            }else{
              return value.length >= 5&&value.length <= 15;
            }
          }
        }
      ]
    },
    tjr:{
      value:'',
      validata:[
        {
          errMessage:'用户名长度在3-16位之间',
          test:(value) => {
            if(value==''){
              return 1;
            }else{
              return value.length >= 3&&value.length <= 15;
            }
          }
        },
        {
          errMessage:'推荐人用户名格式不正确',
          test:(value) => {
            if(value==''){
              return 1;
            }else{
              var patrn=/^[a-zA-Z0-9]{3,15}$/;
              if(patrn.test(value)){
                return value;
              }else {
                return false;
              }
            }
          }
        }
      ]
    },
    region:{
      value:'',
      validata:[
        {
          errMessage:'必须选择地区',
          test:(value) => {
            let a =$('.province').val();
            let b =$('.city').val();
            let c =$('.county').val();
            // console.log(a[0].val());
            // console.log(a[1].val());
            // console.log(a[2].val());
            if(a!=-1&&b!=-1&&c!=-1){
              value+=a;
              value+=b;
              value+=c;
            }
            return value;
          }
        },
      ]
    },
    jieshou:{
      value:'',
      validata:[
        {
          errMessage:'请认真阅读用户协议',
          test:(value) => {
            return value;
          }
        },
      ]
    },
  };
  errWoring =(text) => {
    if(text=='经营类型必须选择一项'){
      $('.tishi').text('');
      $('.tishi').eq(0).text('经营类型必须选择一项');
    }else if(text=='用户名必须填写'){
      $('.tishi').text('');
      $('.tishi').eq(1).text('请填写用户名');
      $('.xingxing').removeClass('display');
      $('.xingxing').eq(0).addClass('display');
    }else if(text=='用户名长度在3-15位之间'){
      $('.tishi').text('');
      $('.tishi').eq(1).text('用户名长度在3-15位之间');
      $('.xingxing').removeClass('display');
      $('.xingxing').eq(0).addClass('display');
    }else if(text=='用户名格式不正确'){
      $('.tishi').text('');
      $('.tishi').eq(1).text('用户名格式不正确');
      $('.xingxing').removeClass('display');
      $('.xingxing').eq(0).addClass('display');
    }else if(text=='密码必须填写'){
      $('.tishi').text('');
      $('.tishi').eq(2).text('请填写密码');
      $('.xingxing').removeClass('display');
      $('.xingxing').eq(1).addClass('display');
    }else if(text=='密码长度在6-15位之间'){
      $('.tishi').text('');
      $('.tishi').eq(2).text('密码长度在6-15位之间');
      $('.xingxing').removeClass('display');
      $('.xingxing').eq(1).addClass('display');
    }else if(text=='两次密码输入不一致'){
      $('.tishi').text('');
      $('.tishi').eq(3).text('两次密码输入不一致');
      $('.xingxing').removeClass('display');
      $('.xingxing').eq(2).addClass('display');
    }else if(text=='企业名称必须填写'){
      $('.tishi').text('');
      $('.tishi').eq(4).text('请填写企业名称');
      $('.xingxing').removeClass('display');
      $('.xingxing').eq(3).addClass('display');
    }else if(text=='姓名必须填写'){
      $('.tishi').text('');
      $('.tishi').eq(5).text('请填写姓名');
      $('.xingxing').removeClass('display');
      $('.xingxing').eq(4).addClass('display');
    }else if(text=='姓名格式不正确'){
      $('.tishi').text('');
      $('.tishi').eq(5).text('姓名格式不正确');
      $('.xingxing').removeClass('display');
      $('.xingxing').eq(4).addClass('display');
    }else if(text=='手机号必须填写'){
      $('.tishi').text('');
      $('.tishi').eq(6).text('请填写手机号');
      $('.xingxing').removeClass('display');
      $('.xingxing').eq(5).addClass('display');
    }else if(text=='手机号格式不正确'){
      $('.tishi').text('');
      $('.tishi').eq(6).text('手机号格式不正确');
      $('.xingxing').removeClass('display');
      $('.xingxing').eq(5).addClass('display');
    }else if(text=='手机号格式不正确'){
      $('.tishi').text('');
      $('.tishi').eq(6).text('手机号格式不正确');
      $('.xingxing').removeClass('display');
      $('.xingxing').eq(5).addClass('display');
    }else if(text=='邮箱格式不正确'){
      $('.tishi').text('');
      $('.tishi').eq(7).text('邮箱格式不正确');
    }else if(text=='QQ号格式不正确'){
      $('.tishi').text('');
      $('.tishi').eq(8).text('QQ号格式不正确');
    }else if(text=='用户名长度在3-16位之间'){
      $('.tishi').text('');
      $('.tishi').eq(9).text('推荐人用户名长度在3-15位之间');
    }else if(text=='推荐人用户名格式不正确'){
      $('.tishi').text('');
      $('.tishi').eq(9).text('推荐人用户名格式不正确');
    }else if(text=='必须选择地区'){
      $('.tishi').text('');
      $('.tishi4').text('请选择地区');
      $('.xingxing1').eq(0).addClass('display');
    }else if(text=='请认真阅读用户协议'){
      $('.tishi').text('');
      $('.tishi4').text('');
      $('.tishi').eq(10).text('请认真阅读用户协议');
      $('.xingxing1').eq(0).removeClass('display');
    }
  }
  handleChange =(name,event) => {
    var newState = {};
    // console.log(name,event.target);
    // event.target.checked?newState[name] = event.target.checked:newState[name] = event.target.value;
    if(name == 'checkboxs'){
      if(event.target.checked){
        checkbox.push(event.target.value);
        newState[name] = checkbox;
      }else{
        let newArray=[];
        for(let i=0;i<checkbox.length;i++){
          newArray.push(checkbox[i]);
        }
        newState[name] = newArray;
      }
    }else{
      newState[name] = event.target.value;
    }

    this.setState(newState);
    for(let key in this.query){
      if(key == name){
        this.query[key].value = event.target.value;
      }
    }
  };
  valiForm =() => {
    for(let key in this.query){
      // console.log(this.query[key]);
      let item = this.query[key];
      let valiItem = item.validata;
      if(valiItem !== undefined){
        for(let k in valiItem){
          let valis = valiItem[k];
          if(!valis.test(item.value)){
            this.errWoring(valis.errMessage);
            return false;
          }
        }
      }
    }
    return true;
  }
  submitFun =() => {
    //提交前先前端验证
    // this.valiForm();
    // alert(this.valiForm())
    if(this.valiForm() !== true){
      return false;
    }
    let c =$('.county option:checked').attr('id');
    $.ajax({
      // url:'http://192.168.1.49/index.php/index/user/user_reg',
      url:InterfaceUtil.getUrl(14),
      type:'post',
      dataType:'json',
      data:{
        username:this.state.username,
        userpass:this.state.userpass,
        jylx:this.state.jylx,
        dwmc:this.state.dwmc,
        lxr:this.state.lxr,
        lxdh:this.state.lxdh,
        qq:this.state.qq,
        tjr:this.state.tjr,
        yx:this.state.yx,
        address_id:c,

      },
      beforeSend:function(xhr){
      },
      success:function(data,textStatus,jqXHR){
        if (data.status=='0'){
          $('.tishi').text('');
          $('.tishi').eq(1).text('用户名已注册');
          $('.xingxing').removeClass('display');
          $('.xingxing').eq(0).addClass('display');
        }else{
          location.replace('#/Denglu');
        }
        console.log(data);
      },

    })
    // alert('提交了');
    // console.log(this.username.value);
  };

  onChange = (e) => {
    this.setState({
      value: e.target.value,
    });
  }
  render() {
    return (
      <div className='container bgWhite'>
        {/*头部*/}
        <div className='container bgF5'>
          <div className='contain denglu_title'>
            <img src={require("../../images/logo1.png")} alt="" className='denglu_title_img'/>
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
        </div>
        {/*内容*/}
        <div className='contain'>
          {/*注册资料填写*/}
          <div className='zhuce_con_form floatleft'>
            <p className='zhuce_con_form_p  tishi1'>
              <span className='floatleft zhuce_con_form_p_span'>经营类型：</span>
              <input type="radio" name="jylx" value='1' onChange={this.handleChange.bind(this,'jylx')}/>商业公司
              <input type="radio" name="jylx" value='2' onChange={this.handleChange.bind(this,'jylx')}/>医院
              <input type="radio" name="jylx" value='3' onChange={this.handleChange.bind(this,'jylx')}/>门诊部
              <input type="radio" name="jylx" value='4' onChange={this.handleChange.bind(this,'jylx')}/>诊所
              <input type="radio" name="jylx" value='5' onChange={this.handleChange.bind(this,'jylx')}/>连锁
              <input type="radio" name="jylx" value='6' onChange={this.handleChange.bind(this,'jylx')}/>药店
              <span className='red1 font14  tishi tishi2'></span>
              <div className='clear'></div>
            </p>
            <p className='zhuce_con_form_p'>
              <span className='floatleft zhuce_con_form_p_span1 '>用户名：</span>
              <input type="text" name='username' value={this.state.username} onChange={this.handleChange.bind(this,'username')} className='zhuce_con_form_inp'placeholder='请输入用户名'/>
              <span className='red1 font18 fontWeight xingxing'>*</span>
              <span className='red1 font14  tishi '></span>
              <div className='clear'></div>
            </p>
            <p className='zhuce_con_form_p'>
              <span className='floatleft zhuce_con_form_p_span1 '>密码：</span>
              <input type="password" name="userpass" value={this.state.userpass} onChange={this.handleChange.bind(this,'userpass')} className='zhuce_con_form_inp'placeholder='请输入密码'/>
              <span className='red1 font18 fontWeight xingxing'>*</span>
              <span className='red1 font14  tishi'></span>
              <div className='clear'></div>
            </p>
            <p className='zhuce_con_form_p'>
              <span className='floatleft zhuce_con_form_p_span1 '>确认密码：</span>
              <input type="password" name='password1' value={this.state.password1} onChange={this.handleChange.bind(this,'password1')} className='zhuce_con_form_inp'placeholder='请再次输入密码'/>
              <span className='red1 font18 fontWeight xingxing'>*</span>
              <span className='red1 font14  tishi'></span>
              <div className='clear'></div>
            </p>
            <p className='zhuce_con_form_p'>
              <span className='floatleft zhuce_con_form_p_span1 '>企业名称：</span>
              <input type="text"  name='dwmc' value={this.state.dwmc} onChange={this.handleChange.bind(this,'dwmc')} className='zhuce_con_form_inp'placeholder='请填写与营业执照上名称一致，以便尽快通过审核'/>
              <span className='red1 font18 fontWeight xingxing'>*</span>
              <span className='red1 font14  tishi'></span>
              <div className='clear'></div>
            </p>
            <p className='zhuce_con_form_p'>
              <span className='floatleft zhuce_con_form_p_span1 '>真实姓名：</span>
              <input type="text" name='lxr' value={this.state.lxr} onChange={this.handleChange.bind(this,'lxr')} className='zhuce_con_form_inp'placeholder='请填写真实姓名'/>
              <span className='red1 font18 fontWeight xingxing'>*</span>
              <span className='red1 font14  tishi'></span>
              <div className='clear'></div>
            </p>
            <p className='zhuce_con_form_p'>
              <span className='floatleft zhuce_con_form_p_span1 '>联系电话：</span>
              <input type="text" name='lxdh' value={this.state.lxdh} onChange={this.handleChange.bind(this,'lxdh')} className='zhuce_con_form_inp'placeholder='请输入正确的电话号码，座机格式：xxx-xxxxxx'/>
              <span className='red1 font18 fontWeight xingxing'>*</span>
              <span className='red1 font14  tishi'></span>
              <div className='clear'></div>
            </p>
            <p className='zhuce_con_form_p'>
              <span className='floatleft zhuce_con_form_p_span1 '>电子邮箱：</span>
              <input type="text" name='yx' value={this.state.yx} onChange={this.handleChange.bind(this,'yx')} className='zhuce_con_form_inp'placeholder='请输入电子邮箱'/>
              <span className='red1 font18 fontWeight xingxing'></span>
              <span className='red1 font14  tishi'></span>
              <div className='clear'></div>
            </p>
            <p className='zhuce_con_form_p'>
              <span className='floatleft zhuce_con_form_p_span1 '>QQ：</span>
              <input type="text" name='qq' value={this.state.qq} onChange={this.handleChange.bind(this,'qq')} className='zhuce_con_form_inp'placeholder='请输入QQ号'/>
              <span className='red1 font18 fontWeight xingxing'></span>
              <span className='red1 font14  tishi'></span>
              <div className='clear'></div>
            </p>
            <p className='zhuce_con_form_p'>
              <span className='floatleft zhuce_con_form_p_span1 '>推荐人：</span>
              <input type="text" name='tjr' value={this.state.tjr} onChange={this.handleChange.bind(this,'tjr')} className='zhuce_con_form_inp'placeholder='请输入推荐人用户名'/>
              <span className='red1 font18 fontWeight xingxing'></span>
              <span className='red1 font14  tishi'></span>
              <div className='clear'></div>
            </p>
            <p className='zhuce_con_form_p'>
              <span className='floatleft zhuce_con_form_p_span1 '>所在地区：</span>
              <span id='aaa' name='region'  onChange={this.handleChange.bind(this,'region')}></span>
              <Sanji></Sanji>
              <div className='clear'></div>
            </p>
            <p className='zhuce_con_form_p1 relative'>
              <span className='floatleft zhuce_con_form_p_span1 '></span>
              <span> <input type="checkbox" name="jieshou" value="接受" onChange={this.handleChange.bind(this,'jieshou')}/>我以看过并接收<a href="" className='red'>《用户协议》</a></span>
              <span className='red1 font14  tishi tishi2'></span>
              <div className='clear'></div>
            </p>
            <p className='zhuce_con_form_p1'>
              <span className='floatleft zhuce_con_form_p_span1 '></span>
              <span className='zhuce_con_form_p_span2'><button className='zhuce_con_form_p_btn' onClick={this.submitFun}>注册</button></span>
              <div className='clear'></div>
            </p>
          </div>
          {/*右部导航*/}
          <div className='floatleft zhuce_con_you'>
            <p>已有账号?请直接登录 <span className='zhuce_con_you_btn'><Link to="/" className='black'>登录</Link></span></p>
            {/*<p className='zhuce_con_you_btn1'>买家服务</p>*/}
            <p className='zhuce_con_you_p'>只要您是合法经营的药店、诊所、医院、门诊部或医药公司，在聚创淘药网注册并认证后，可以享受以下服务：</p>
            <p className='zhuce_con_you_p1'>在聚创淘药网购买合法经营的商品</p>
            <p className='zhuce_con_you_p1'>享受一站式药品采购服务</p>
            <p className='zhuce_con_you_p1'>获得平台的活动补贴</p>
            <p className='zhuce_con_you_p1'>参与平台的促销活动</p>
          </div>
          <div className='clear'></div>
        </div>
        <div className='xian1'></div>
        {/*尾部*/}
        <div className='contain'>
          <p className='center marginTop20 denglu_banquan1'>《互联网药品信息服务资格证》证书号：（川）-非经营性2015-0039 |《互联网药品交易服务资格证》 证书号：蜀ICP备15031161号</p>
          <p className='center denglu_banquan'>版权所有：四川聚创医药有限公司</p>
          <p className='center denglu_banquan'>本网站不从事麻醉药品、精神药品、医疗用毒性药品、放射性药品、戒毒药品和医疗机构制剂的产品的交易。</p>
        </div>
      </div>
    );
  }
  componentDidMount(){
    $.ajax({
      // url:'http://192.168.1.49/index.php/index/user/get_user_city',
      url:InterfaceUtil.getUrl(15),
      type:'post',
      dataType:'json',
      async:false,
      data:{

      },
      beforeSend:function(xhr){
      },
      success:function(data,textStatus,jqXHR){
        window.data=data.data;
      },

    })
  }
}


export default withRouter(Zhuce);
