require('styles/common.css');
require('styles/personal/personalZhanneixin.css')

import React from 'react';
import { Input,Button,Select,Pagination,Modal   } from 'antd';
const confirm = Modal.confirm;

//查询事件
function handleChange(value) {

}
//分页
function onChange(pageNumber) {

}
//确认框
function showConfirm() {
  confirm({
    title: '温馨提示',
    content: '你确认删除该条留言',
    okText:'确定',
    cancelText:'取消',
    onOk() {
      return new Promise((resolve, reject) => {
        setTimeout(Math.random() > 0.5 ? resolve : reject, 1000);
      }).catch();
    },
    onCancel() {},
  });
}

class PersonalZhanneixin extends React.Component {

  constructor(){
    super(); //调用父类的构造方法；
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



  render() {
    return (
      <div className=' width988 floatRight'>
        {/*最近订单标题*/}
        <div className='personal_Dindan_title marginBottom20'>
          <p className='marginLeft20 fontFamily fontWeight font20'>站内信</p>
        </div>
        {/*内容*/}

      </div>
    );
  }
}


export default PersonalZhanneixin;
