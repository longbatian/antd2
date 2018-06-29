// require('styles/common.css');
// require('styles/personal/personalZhanneixin.css')
// require('styles/personal/personalWodejifen.css')

import React from 'react';
import { Input,Button,Select,Pagination,Modal   } from 'antd';
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
        <div className='personal_Wodejifen_title marginBottom20'>
          <p className='marginLeft20 fontFamily fontWeight floatleft font20'>智能采购</p>
          <ul>
            <li className='orange'>智能采购</li>
            <div className='shu floatleft'></div>
            <li>采购计划</li>
            <div className='shu floatleft'></div>
            <li>求购信息</li>
          </ul>
        </div>

        {/*内容*/}
        <div className='white personal_xiangqing_title personal_caigou_height'>
          <div className='xian'></div>
          {/*全选删除*/}
          <div className='personal_zhanneixin_top marginLeft20'>
            <p>
              <span className='personal_caigou_top'>添加采购</span>
            </p>
            <div className='clear'></div>
          </div>
          <h1 className='center personal_caigou_margin'>亲,您当前还没有求购明细哦~</h1>
          <a href="" className='personal_caigou_a'>去添加求购</a>
          <div className='xian'></div>
        </div>
        {/*为您推荐*/}
        <div className='bgWhite marginTop20'>
          <div className='personalCon1_top1_con '>
            <div className='personal_line floatleft'></div>
            <span className='floatleft personal_line_p'>为您推荐</span>
            <table className='personalCon1_table1'>
              <tr>
                <td>
                  <img src={require("../../images/personal/loadpic.gif")} alt="" className='personalCon1_table_img'/>
                  <p>小儿感冒退烧贴</p>
                  <p>海南中化联合制药工业股</p>
                  <p className='orange'>￥6.20</p>
                </td>
                <td>
                  <img src{require("../../images/personal/loadpic.gif")} alt="" className='personalCon1_table_img'/>
                  <p>小儿感冒退烧贴</p>
                  <p>海南中化联合制药工业股</p>
                  <p className='orange'>￥6.20</p>
                </td>
                <td>
                  <img src={require("../../images/personal/loadpic.gif")} alt="" className='personalCon1_table_img'/>
                  <p>小儿感冒退烧贴</p>
                  <p>海南中化联合制药工业股</p>
                  <p className='orange'>￥6.20</p>
                </td>
                <td>
                  <img src={require("../../images/personal/loadpic.gif")} alt="" className='personalCon1_table_img'/>
                  <p>小儿感冒退烧贴</p>
                  <p>海南中化联合制药工业股</p>
                  <p className='orange'>￥6.20</p>
                </td>
                <td className='paddingRight5'>
                  <img src={require("../../images/personal/loadpic.gif")} alt="" className='personalCon1_table_img'/>
                  <p>小儿感冒退烧贴</p>
                  <p>海南中化联合制药工业股</p>
                  <p className='orange'>￥6.20</p>
                </td>
              </tr>
            </table>
            <div className='clear'></div>
          </div>
        </div>

      </div>
    );
  }
}


export default PersonalCaigou;
