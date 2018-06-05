import { Modal, Button } from 'antd';
import React from 'react';
import Avatar from "./Upload";
import InterfaceUtil from '../util/InterfaceUtil'

class Modal1 extends React.Component {
  constructor(props){
    super(props); //调用父类的构造方法；
    this.state={
      lujin:InterfaceUtil.getImgUrl(),
    }
  }
  state = {
    loading: false,
    visible: false,
  }
  showModal = () => {
    this.setState({
      visible: true,
    });
  }
  handleOk = () => {
    this.setState({ loading: true });
    setTimeout(() => {
      this.setState({ loading: false, visible: false });
    }, 3000);
  }
  handleCancel = () => {
    this.setState({ visible: false });
  }

  head(e){
    var a=e.target.parentNode;
    a.lastChild.className='personalCon1_top_head_bg1'
  }
  head1(e){
    var a=e.target.parentNode;
    a.lastChild.className='personalCon1_top_head_bg1 display'
  }
  shangchuan(e){

    var files = e.target.files ;
    // console.log(files[0]);
    var aabb=e.target.getAttribute('data');
    function getCookie(cookieName) {
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
    var username=getCookie('username');
    var token=getCookie('token');

    var formData = new FormData();
    formData.append("file", files[0]);
    formData.append("username", username);
    formData.append("token", token);
    formData.append("type_img",aabb);
    var xhr = new XMLHttpRequest();
    xhr.onload = function ()
    {
      var data = xhr.responseText;    //得到返回值
      // alert(data);
      data = JSON.parse(data);
      console.log(data);
    }
    // xhr.open("post", 'http://192.168.1.49/index.php/index/user/userzz_update', true);
    xhr.open("post", InterfaceUtil.getUrl(56), true);
    xhr.send(formData);
  }

  render() {
    return (
      <div>
        <img src={this.state.lujin+this.props.data} alt=""  className='personalCon1_top_head_img' onMouseOver={(e)=>{this.head(e)}} onMouseOut={(e)=>{this.head1(e)}} onClick={this.showModal}/>
        <Modal
          visible={this.state.visible}
          title="更换头像"
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          footer={[
            <Button key="back" size="large" onClick={this.handleCancel}>取消</Button>,
            <Button key="submit" type="primary" size="large" loading={this.state.loading} onClick={this.handleOk}>
              确定
            </Button>,
          ]}
        >
          <p className='relative'>
            <input type="file" className='shangchuan_inp1 aaaa' accept="image/png, image/jpeg, image/jpg" id='shangchuan' data="user_photo"  onInput={(e)=>{this.shangchuan(e)}}/>
            <label htmlFor="shangchuan" className='shangchuan_btn cursor'>上传图片</label>
          </p>
          <p className='marginTop10 avatar-uploader_p1'>仅支持JPG、gif、png、jpeg格式，且文件小于4M</p>
        </Modal>
        <div className='personalCon1_top_head_bg1 display'onMouseOver={(e)=>{this.head(e)}} onMouseOut={(e)=>{this.head1(e)}} onClick={this.showModal}>更换头像</div>
      </div>
    );
  }
}
export default Modal1;
