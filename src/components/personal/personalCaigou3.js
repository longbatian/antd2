// require('styles/common.css');
// require('styles/personal/personalZhanneixin.css')
// require('styles/personal/personalWodejifen.css')

import React from 'react';
import { Input,Button,Select,Pagination,Modal,Tooltip   } from 'antd';
const confirm = Modal.confirm;


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

class PersonalCaigou extends React.Component {

  constructor(){
    super(); //调用父类的构造方法；
  }
  tishi(e){
    var a=e.target.parentNode;
    a.lastChild.className='personal_caigou_xuanfu'
  }
  tishi1(e){
    var a=e.target.parentNode;
    a.lastChild.className='personal_caigou_xuanfu display'
  }



  render() {
    return (
      <div className=' width988 floatRight'>

      </div>
    );
  }
}


export default PersonalCaigou;
