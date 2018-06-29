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
        <div className='white personal_xiangqing_title '>
          <div className='xian'></div>
          {/*全选删除*/}
          <div className='personal_zhanneixin_top marginLeft20'>
            <p>
              <span className='personal_caigou_top'>添加采购</span>
            </p>
            <div className='clear'></div>
          </div>
          {/*内容*/}
          <table className='marginLeft20 personal_Caigou_table marginTop20'>
            <thead>
            <tr>
              <th width="175px">商品名称</th>
              <th width="155px">生产厂家</th>
              <th width="95px">规格</th>
              <th width="110px">求购有效期</th>
              <th width="65px">求购数量</th>
              <th width="348px">回复</th>
            </tr>
            </thead>
            <tbody>
              <tr>
                <td>卡介菌多糖核酸注射液</td>
                <td>吉林亚泰生物制药</td>
                <td>1ml*4支</td>
                <td>2020-12-03</td>
                <td>20</td>
                <td>等待回复</td>
              </tr>
              <tr className='relative'>
                <td>卡介菌多糖核酸注射液</td>
                <td>吉林亚泰生物制药</td>
                <td>1ml*4支</td>
                <td>2020-12-03</td>
                <td>20</td>
                <td className='hid blue'onMouseOver={(e)=>{this.tishi(e)}} onMouseOut={(e)=>{this.tishi1(e)}}>
                  您好，我公司暂未引进该品种，引进后客服会及时联系您，谢谢！
                </td>
                <div className='personal_caigou_xuanfu display'>
                  <span className='personal_caigou_xuanfu_span'>您好，我公司暂未引进该品种，引进后客服会及时联系您，谢谢！</span>
                  <span className='personal_caigou_xuanfu_san'></span>
                </div>
              </tr>
              <tr>
                <td>卡介菌多糖核酸注射液</td>
                <td>吉林亚泰生物制药</td>
                <td>1ml*4支</td>
                <td>2020-12-03</td>
                <td>20</td>
                <td className='hid blue'>您好，我公司暂未引进该品种，引进后客服会及时联系您，谢谢！</td>
              </tr>
              <tr>
                <td>卡介菌多糖核酸注射液</td>
                <td>吉林亚泰生物制药</td>
                <td>1ml*4支</td>
                <td>2020-12-03</td>
                <td>20</td>
                <td className='hid blue'>您好，我公司暂未引进该品种，引进后客服会及时联系您，谢谢！</td>
              </tr>
              <tr>
                <td>卡介菌多糖核酸注射液</td>
                <td>吉林亚泰生物制药</td>
                <td>1ml*4支</td>
                <td>2020-12-03</td>
                <td>20</td>
                <td className='hid blue'>您好，我公司暂未引进该品种，引进后客服会及时联系您，谢谢！</td>
              </tr>
              <tr>
                <td>卡介菌多糖核酸注射液</td>
                <td>吉林亚泰生物制药</td>
                <td>1ml*4支</td>
                <td>2020-12-03</td>
                <td>20</td>
                <td className='hid blue'>您好，我公司暂未引进该品种，引进后客服会及时联系您，谢谢！</td>
              </tr>
              <tr>
                <td>卡介菌多糖核酸注射液</td>
                <td>吉林亚泰生物制药</td>
                <td>1ml*4支</td>
                <td>2020-12-03</td>
                <td>20</td>
                <td className='hid blue'>您好，我公司暂未引进该品种，引进后客服会及时联系您，谢谢！</td>
              </tr>
              <tr>
                <td>卡介菌多糖核酸注射液</td>
                <td>吉林亚泰生物制药</td>
                <td>1ml*4支</td>
                <td>2020-12-03</td>
                <td>20</td>
                <td className='hid blue'>您好，我公司暂未引进该品种，引进后客服会及时联系您，谢谢！</td>
              </tr>
              <tr>
                <td>卡介菌多糖核酸注射液</td>
                <td>吉林亚泰生物制药</td>
                <td>1ml*4支</td>
                <td>2020-12-03</td>
                <td>20</td>
                <td className='hid blue'>您好，我公司暂未引进该品种，引进后客服会及时联系您，谢谢！</td>
              </tr>
              <tr>
                <td>卡介菌多糖核酸注射液</td>
                <td>吉林亚泰生物制药</td>
                <td>1ml*4支</td>
                <td>2020-12-03</td>
                <td>20</td>
                <td className='hid blue'>您好，我公司暂未引进该品种，引进后客服会及时联系您，谢谢！</td>
              </tr>
            </tbody>
          </table>
          <div className='xian '></div>
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
