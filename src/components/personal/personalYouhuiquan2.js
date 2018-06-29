// require('styles/common.css');
// require('styles/personal/personalDianzihetong.css')

import React from 'react';
import { Pagination,Icon,Button,Modal } from 'antd';

//分页
function onChange(pageNumber) {

}


class PersonalYouhuiquan extends React.Component {

  constructor(){
    super(); //调用父类的构造方法；
  }
  state = { visible: false }
  showModal = () => {
    this.setState({
      visible: true,
    });
  }
  handleOk = (e) => {

    this.setState({
      visible: false,
    });
  }
  handleCancel = (e) => {

    this.setState({
      visible: false,
    });
  }





  render() {
    return (
      <div className=' width988 floatRight'>
        {/*电子合同标题*/}
        <div className='personal_Dindan_title'>
          <p className='marginLeft20 fontFamily fontWeight'>
            优惠券
            <a href='' className='floatRight personal_Youhuiquan_title_a'>去领取更多优惠券</a>
            <div className='clear'></div>
          </p>
        </div>
        {/*内容*/}
        <div className='marginTop20 bgWhite'>
            <div className='xian'></div>
            <div className='personal_Youhuiquan_title_div marginBottom20'>
              <select name="" className='personal_Youhuiquan_title_select'>
                <option value="可用优惠券">可用优惠券（50）</option>
                <option value="可用优惠券">已用优惠券（10）</option>
                <option value="可用优惠券">过期优惠券（10）</option>
                <option value="可用优惠券">回收站优惠券（10）</option>
              </select>
              <span className='floatleft'>（仅展示最近删除的优惠券）</span>
              <span className='floatRight marginRight20 personal_Youhuiquan_title_div_span'><Icon type="bars" />列表</span>
              <span className='floatRight personal_Youhuiquan_title_div_span '><Icon type="appstore" />大图</span>
              <div className='clear'></div>
            </div>
            <div className='personal_Youhuiquan_title_div1'>
              <ul>
                <li>
                  <div className='personal_Youhuiquan_title_div1_p'>
                    <span className='personal_Youhuiquan_title_div1_p_span'>￥</span>
                    <span className='personal_Youhuiquan_title_div1_p_span1'>30</span>
                    <span className='personal_Youhuiquan_title_div1_p_span2'></span>
                    <span className='personal_Youhuiquan_title_div1_p_span3'>优惠券 <span className='white1'>【满600元可以使用】</span></span>
                    <span className='personal_Youhuiquan_title_div1_p_span4'>部分商品可用</span>
                    <span className='personal_Youhuiquan_title_div1_p_span5'>有效期【09.20-11.06】</span>
                    <span className='personal_Youhuiquan_title_div1_p_span6'onClick={this.showModal}>撤回优惠券</span>
                    <Modal title="温馨提示" visible={this.state.visible}
                           onOk={this.handleOk}
                           onCancel={this.handleCancel}
                           okText='确定'
                           cancelText='取消'
                    >
                      <p>确定将该优惠券恢复到可使用状态？</p>
                    </Modal>
                    <img src={require("../../images/personal/yishanchu.png")} alt="" className='personal_Youhuiquan_title_div1_p_img2'/>
                  </div>
                </li>
                <li className='personal_Youhuiquan_title_div1_li'>
                  <p className='personal_Youhuiquan_title_div1_p'>
                    <span className='personal_Youhuiquan_title_div1_p_span'>￥</span>
                    <span className='personal_Youhuiquan_title_div1_p_span1'>30</span>
                    <span className='personal_Youhuiquan_title_div1_p_span2'></span>
                    <span className='personal_Youhuiquan_title_div1_p_span3'>优惠券 <span className='white1'>【满600元可以使用】</span></span>
                    <span className='personal_Youhuiquan_title_div1_p_span4'>部分商品可用</span>
                    <span className='personal_Youhuiquan_title_div1_p_span5'>有效期【09.20-11.06】</span>
                    <img src={require("../../images/personal/yishanchu.png")} alt="" className='personal_Youhuiquan_title_div1_p_img2'/>
                  </p>
                </li>
                <li className='personal_Youhuiquan_title_div1_li'>
                  <p className='personal_Youhuiquan_title_div1_p'>
                    <span className='personal_Youhuiquan_title_div1_p_span'>￥</span>
                    <span className='personal_Youhuiquan_title_div1_p_span1'>30</span>
                    <span className='personal_Youhuiquan_title_div1_p_span2'></span>
                    <span className='personal_Youhuiquan_title_div1_p_span3'>优惠券 <span className='white1'>【满600元可以使用】</span></span>
                    <span className='personal_Youhuiquan_title_div1_p_span4'>部分商品可用</span>
                    <span className='personal_Youhuiquan_title_div1_p_span5'>有效期【09.20-11.06】</span>
                    <img src={require("../../images/personal/yiguoqi.png")} alt="" className='personal_Youhuiquan_title_div1_p_img2'/>
                  </p>
                </li>
                <li className='personal_Youhuiquan_title_div1_li'>
                  <p className='personal_Youhuiquan_title_div1_p'>
                    <span className='personal_Youhuiquan_title_div1_p_span'>￥</span>
                    <span className='personal_Youhuiquan_title_div1_p_span1'>30</span>
                    <span className='personal_Youhuiquan_title_div1_p_span2'></span>
                    <span className='personal_Youhuiquan_title_div1_p_span3'>优惠券 <span className='white1'>【满600元可以使用】</span></span>
                    <span className='personal_Youhuiquan_title_div1_p_span4'>部分商品可用</span>
                    <span className='personal_Youhuiquan_title_div1_p_span5'>有效期【09.20-11.06】</span>
                    <img src={require("../../images/personal/yishiyong.png")} alt="" className='personal_Youhuiquan_title_div1_p_img2'/>
                  </p>
                </li>
                <li>
                  <p className='personal_Youhuiquan_title_div1_p'>
                    <span className='personal_Youhuiquan_title_div1_p_span'>￥</span>
                    <span className='personal_Youhuiquan_title_div1_p_span1'>30</span>
                    <span className='personal_Youhuiquan_title_div1_p_span2'></span>
                    <span className='personal_Youhuiquan_title_div1_p_span3'>优惠券 <span className='white1'>【满600元可以使用】</span></span>
                    <span className='personal_Youhuiquan_title_div1_p_span4'>部分商品可用</span>
                    <span className='personal_Youhuiquan_title_div1_p_span5'>有效期【09.20-11.06】</span>
                    <a href="" className='personal_Youhuiquan_title_div1_p_a'>立即使用</a>
                    <img src={require("../../images/personal/jijiangguoqi.png")} alt="" className='personal_Youhuiquan_title_div1_p_img'/>
                  </p>
                </li>
                <li>
                  <p className='personal_Youhuiquan_title_div1_p'>
                    <span className='personal_Youhuiquan_title_div1_p_span'>￥</span>
                    <span className='personal_Youhuiquan_title_div1_p_span1'>30</span>
                    <span className='personal_Youhuiquan_title_div1_p_span2'></span>
                    <span className='personal_Youhuiquan_title_div1_p_span3'>优惠券 <span className='white1'>【满600元可以使用】</span></span>
                    <span className='personal_Youhuiquan_title_div1_p_span4'>部分商品可用</span>
                    <span className='personal_Youhuiquan_title_div1_p_span5'>有效期【09.20-11.06】</span>
                    <a href="" className='personal_Youhuiquan_title_div1_p_a'>立即使用</a>
                    <img src={require("../../images/personal/jijiangguoqi.png")} alt="" className='personal_Youhuiquan_title_div1_p_img'/>
                  </p>
                </li>
                <li>
                  <p className='personal_Youhuiquan_title_div1_p'>
                    <span className='personal_Youhuiquan_title_div1_p_span'>￥</span>
                    <span className='personal_Youhuiquan_title_div1_p_span1'>30</span>
                    <span className='personal_Youhuiquan_title_div1_p_span2'></span>
                    <span className='personal_Youhuiquan_title_div1_p_span3'>优惠券 <span className='white1'>【满600元可以使用】</span></span>
                    <span className='personal_Youhuiquan_title_div1_p_span4'>部分商品可用</span>
                    <span className='personal_Youhuiquan_title_div1_p_span5'>有效期【09.20-11.06】</span>
                    <a href="" className='personal_Youhuiquan_title_div1_p_a'>立即使用</a>
                    <img src={require("../../images/personal/jijiangguoqi.png")} alt="" className='personal_Youhuiquan_title_div1_p_img'/>
                  </p>
                </li>
                <li>
                  <p className='personal_Youhuiquan_title_div1_p'>
                    <span className='personal_Youhuiquan_title_div1_p_span'>￥</span>
                    <span className='personal_Youhuiquan_title_div1_p_span1'>30</span>
                    <span className='personal_Youhuiquan_title_div1_p_span2'></span>
                    <span className='personal_Youhuiquan_title_div1_p_span3'>优惠券 <span className='white1'>【满600元可以使用】</span></span>
                    <span className='personal_Youhuiquan_title_div1_p_span4'>部分商品可用</span>
                    <span className='personal_Youhuiquan_title_div1_p_span5'>有效期【09.20-11.06】</span>
                    <a href="" className='personal_Youhuiquan_title_div1_p_a'>立即使用</a>
                    <img src={require("../../images/personal/cha.png")} alt="" className='personal_Youhuiquan_title_div1_p_img1'/>
                  </p>
                </li>
                <div className='clear'></div>
              </ul>
              <div className='xian'></div>
            </div>
          {/*分页*/}
          <div className='width988 marginTop20 marginBottom20'>
            <span className='floatRight personal_xiangqing_title_div3_span3'><Pagination showQuickJumper={true} defaultCurrent={1} total={500} onChange={onChange}  /></span>
            <div className='clear'></div>
          </div>
            <div className='xian'></div>

        </div>
      </div>
    );
  }
}


export default PersonalYouhuiquan;
