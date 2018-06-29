require('styles/common.css');
require('styles/personal/personalXiangqing.css')

import React from 'react';
import { Input,Button,Select,Pagination,Timeline   } from 'antd';

//查询事件
function handleChange(value) {

}
//分页
function onChange(pageNumber) {

}

class PersonalZhanneixin extends React.Component {

  constructor(){
    super(); //调用父类的构造方法；
  }

  //js事件
  dingdangenzong(e){
    var a=e.target.parentNode;
    a.lastChild.className='personalCon1_xuanfu1 personalCon1_xuanfu '
  }
  dingdangenzong1(e){
    var a=e.target.parentNode;
    a.lastChild.className='personalCon1_xuanfu1 personalCon1_xuanfu display'
  }


  render() {
    return (
      <div className=' width988 floatRight'>
        {/*最近订单标题*/}
        <div className='personal_Dindan_title marginBottom20'>
          <p className='marginLeft20 fontFamily fontWeight font20'>订单详情</p>
        </div>
        {/*内容*/}
        <div className='bgWhite personal_xiangqing_title'>
          <div className='xian'></div>
          {/*头部*/}
          <div className='width988 white'>
            {/*时间订单号*/}
            <div className='marginLeft20 marginBottom20 '>
              <p className='personal_xiangqing_con_p'>
                <span className='fontFamily marginLeft10'>2018-07-12 &nbsp;12:12:12&nbsp;&nbsp;&nbsp;</span>
                &nbsp;&nbsp;&nbsp;订单号:<span className='fontFamily'>&nbsp;sdd123123146546646</span>
                &nbsp;&nbsp;&nbsp;回复状态：<span  className='orange fontFamily'>已回复</span>
              </p>
            </div>
            <div className='clear'></div>
          </div>
          {/*物流详情*/}
          <div className='personal_caigou_title_con '>
            <p className='marginTop10'>采购计划有效期：<span>2018-01-03 13:26:30</span></p>
            <p>采购计划文件：<span className='blue'>下载</span><span className='orange marginLeft20'>预览</span></p>
            <p>采购计划图片：<span className='blue'>下载</span><span className='orange marginLeft20'>预览</span></p>
            <p>回复信息内容：<span className='red1'>已为您把计划整理好，请尽快下单</span></p>
            <div className='clear'></div>
          </div>
          <div className='clear'></div>
          {/*订单商品*/}
          <div className='personal_xiangqing_title_div3'>
            {/*全选删除*/}
            <div className='personal_zhanneixin_top marginLeft20'>
              <p>
                <span className='personal_wodechoucang_top_span marginRight5'><input type="checkbox"/></span>
                <span className='personal_zhanneixin_top_span1 cursor'>全选</span>
                <span className='personal_zhanneixin_top_span4 cursor'>加入购物车</span>
              </p>
            </div>
            {/*商品信息*/}
            <table className='personal_Dindan_con1_table marginTop20'>
              <thead>
              <tr>
                <th width="80px">商品信息</th>
                <th width="170px">商品名称</th>
                <th width="160px">生产厂家</th>
                <th width="85px">规格</th>
                <th width="45px">单位</th>
                <th width="70px">参与活动</th>
                <th width="75px">商品单价</th>
                <th width="45px">数量</th>
                <th width="100px">小计</th>
                <th width="120px">操作</th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td className='orange hid width130'><img src={require("../../images/personal/shnagpingxinxi.png")} alt=""/></td>
                <td>卡介菌多糖核酸注射液</td>
                <td>吉林亚泰生物药业</td>
                <td>ml*支</td>
                <td>瓶</td>
                <td><span className='red'>秒杀</span></td>
                <td className='personalCon1_table_tr'>￥19.50</td>
                <td>10</td>
                <td>￥195.00</td>
                <td><span className='personal_xiangqing_title_div3_span'>加入购物车</span></td>
              </tr>
              <tr>
                <td className='orange hid width130'><img src={require("../../images/personal/shnagpingxinxi.png")} alt=""/></td>
                <td>卡介菌多糖核酸注射液</td>
                <td>吉林亚泰生物药业</td>
                <td>ml*支</td>
                <td>瓶</td>
                <td><span className='red'>秒杀</span></td>
                <td className='personalCon1_table_tr'>￥19.50</td>
                <td>10</td>
                <td>￥195.00</td>
                <td><span className='personal_xiangqing_title_div3_span'>加入购物车</span></td>
              </tr>
              <tr>
                <td className='orange hid width130'><img src={require("../../images/personal/shnagpingxinxi.png")} alt=""/></td>
                <td>卡介菌多糖核酸注射液</td>
                <td>吉林亚泰生物药业</td>
                <td>ml*支</td>
                <td>瓶</td>
                <td><span className='red'>秒杀</span></td>
                <td className='personalCon1_table_tr'>￥19.50</td>
                <td>10</td>
                <td>￥195.00</td>
                <td><span className='personal_xiangqing_title_div3_span'>加入购物车</span></td>
              </tr>
              <tr>
                <td className='orange hid width130'><img src={require("../../images/personal/shnagpingxinxi.png")} alt=""/></td>
                <td>卡介菌多糖核酸注射液</td>
                <td>吉林亚泰生物药业</td>
                <td>ml*支</td>
                <td>瓶</td>
                <td><span className='red'>秒杀</span></td>
                <td className='personalCon1_table_tr'>￥19.50</td>
                <td>10</td>
                <td>￥195.00</td>
                <td><span className='personal_xiangqing_title_div3_span'>加入购物车</span></td>
              </tr>
              <tr>
                <td className='orange hid width130'><img src={require("../../images/personal/shnagpingxinxi.png")} alt=""/></td>
                <td>卡介菌多糖核酸注射液</td>
                <td>吉林亚泰生物药业</td>
                <td>ml*支</td>
                <td>瓶</td>
                <td><span className='red'>秒杀</span></td>
                <td className='personalCon1_table_tr'>￥19.50</td>
                <td>10</td>
                <td>￥195.00</td>
                <td><span className='personal_xiangqing_title_div3_span'>加入购物车</span></td>
              </tr>
              <tr>
                <td className='orange hid width130'><img src={require("../../images/personal/shnagpingxinxi.png")} alt=""/></td>
                <td>卡介菌多糖核酸注射液</td>
                <td>吉林亚泰生物药业</td>
                <td>ml*支</td>
                <td>瓶</td>
                <td><span className='red'>秒杀</span></td>
                <td className='personalCon1_table_tr'>￥19.50</td>
                <td>10</td>
                <td>￥195.00</td>
                <td><span className='personal_xiangqing_title_div3_span'>加入购物车</span></td>
              </tr>
              <tr>
                <td className='orange hid width130'>
                  <img src={require("../../images/personal/shnagpingxinxi.png")} alt=""/></td>
                <td>卡介菌多糖核酸注射液</td>
                <td>吉林亚泰生物药业</td>
                <td>ml*支</td>
                <td>瓶</td>
                <td><span className='red'>秒杀</span></td>
                <td className='personalCon1_table_tr'>￥19.50</td>
                <td>10</td>
                <td>￥195.00</td>
                <td><span className='personal_xiangqing_title_div3_span'>加入购物车</span></td>
              </tr>
              <tr>
                <td className='orange hid width130'><img src={require("../../images/personal/shnagpingxinxi.png")} alt=""/></td>
                <td>卡介菌多糖核酸注射液</td>
                <td>吉林亚泰生物药业</td>
                <td>ml*支</td>
                <td>瓶</td>
                <td><span className='red'>秒杀</span></td>
                <td className='personalCon1_table_tr'>￥19.50</td>
                <td>10</td>
                <td>￥195.00</td>
                <td><span className='personal_xiangqing_title_div3_span'>加入购物车</span></td>
              </tr>
              <tr>
                <td className='orange hid width130'><img src={require("../../images/personal/shnagpingxinxi.png" )} alt=""/></td>
                <td>卡介菌多糖核酸注射液</td>
                <td>吉林亚泰生物药业</td>
                <td>ml*支</td>
                <td>瓶</td>
                <td><span className='red'>秒杀</span></td>
                <td className='personalCon1_table_tr'>￥19.50</td>
                <td>10</td>
                <td>￥195.00</td>
                <td><span className='personal_xiangqing_title_div3_span'>加入购物车</span></td>
              </tr>
              <tr>
                <td className='orange hid width130'><img src={require("../../images/personal/shnagpingxinxi.png")} alt=""/></td>
                <td>卡介菌多糖核酸注射液</td>
                <td>吉林亚泰生物药业</td>
                <td>ml*支</td>
                <td>瓶</td>
                <td><span className='red'>秒杀</span></td>
                <td className='personalCon1_table_tr'>￥19.50</td>
                <td>10</td>
                <td>￥195.00</td>
                <td><span className='personal_xiangqing_title_div3_span'>加入购物车</span></td>
              </tr>
              <tr>
                <td className='orange hid width130'><img src={require("../../images/personal/shnagpingxinxi.png")} alt=""/></td>
                <td>卡介菌多糖核酸注射液</td>
                <td>吉林亚泰生物药业</td>
                <td>ml*支</td>
                <td>瓶</td>
                <td><span className='red'>秒杀</span></td>
                <td className='personalCon1_table_tr'>￥19.50</td>
                <td>10</td>
                <td>￥195.00</td>
                <td><span className='personal_xiangqing_title_div3_span'>加入购物车</span></td>
              </tr>
              </tbody>
              {/*分页*/}
              <div className='width988 marginTop20 marginBottom20'>
                <span className='floatRight personal_xiangqing_title_div3_span3'><Pagination showQuickJumper={true} defaultCurrent={1} total={500} onChange={onChange}  /></span>
                <div className='clear'></div>
              </div>
            </table>
          </div>
          <div className='clear'></div>
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


export default PersonalZhanneixin;
