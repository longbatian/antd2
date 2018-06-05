require('styles/common.css');
require('styles/personal/personalZhanneixin.css')
require('styles/personal/personalWodejifen.css')

import React from 'react';
import { Input,Button,Select,Pagination,Modal   } from 'antd';
const confirm = Modal.confirm;

//查询事件
function handleChange(value) {
  console.log(`selected ${value}`);
}
//分页
function onChange(pageNumber) {
  console.log('Page: ', pageNumber);
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
      }).catch(() => console.log('Oops errors!'));
    },
    onCancel() {},
  });
}

class PersonalWodejifen extends React.Component {

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
          <p className='marginLeft20 fontFamily fontWeight floatleft font20'>我的积分</p>
          <ul>
            <li className='orange'>积分流水</li>
            <div className='shu floatleft'></div>
            <li>积分兑换</li>
            <div className='shu floatleft'></div>
            <li>中奖纪录</li>
          </ul>
        </div>
        {/*内容*/}
        <div className='white personal_xiangqing_title center'>
          <div className='xian'></div>
          <div className=' personal_jifen_title '>
            <div className='personal_jifen_title_div1 floatleft'>
              <p className='personal_jifen_title_div1_p'>总消费积分</p>
              <p className='personal_jifen_title_div1_p1'>1878464</p>
            </div>
            <div className='personal_jifen_title_div1 floatleft'>
              <p className='personal_jifen_title_div1_p'>可使用积分</p>
              <p className='personal_jifen_title_div1_p1'>1878464</p>
            </div>
            <div className='personal_jifen_title_div2 floatleft'>
              <a href="" className='personal_jifen_title_div2_a'>去积分商城兑换礼品</a>
            </div>
            <div className='clear'></div>
          </div>
          {/*输入框*/}
          <div className='personal_Dindan_con_inp'>
            <div className="example-input floatRight marginRight20">
              兑换类型：
              <Select defaultValue='兑换礼品' style={{ width: 200 }} onChange={handleChange}>
                <Option value="兑换礼品">兑换礼品</Option>
                <Option value="兑换礼品">兑换商品</Option>
                <Option value="其他">其他</Option>
              </Select>
              {/*积分类型：*/}
              {/*<Select defaultValue='所有积分' style={{ width: 200 }} onChange={handleChange}>*/}
              {/*<Option value="所有积分">所有积分</Option>*/}
              {/*<Option value="消费积分">消费积分</Option>*/}
              {/*<Option value="采购积分">采购积分</Option>*/}
              {/*<Option value="介绍积分">介绍积分</Option>*/}
              {/*<Option value="消费积分">消费积分</Option>*/}
              {/*<Option value="其他">其他</Option>*/}
              {/*</Select>*/}

              <Button icon="search" style={{ marginLeft: 10 }}>查询</Button>
            </div>
            <div className='clear'></div>
          </div>
          <h1>亲，您当前还没有积分明细哦~</h1>
          <p><a href="" className='personal_jifen_title_div2_a'>去积分商城</a></p>
          <div className='xian marginBottom20'></div>
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
                  <img src={require("../../images/personal/loadpic.gif" )} alt="" className='personalCon1_table_img'/>
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


export default PersonalWodejifen;
