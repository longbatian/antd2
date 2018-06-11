
import React from 'react';
import { Input,Button,Select,Pagination,Modal   } from 'antd';
import '../../styles/personal/personalWodejifen.css'
import InterfaceUtil from '../../util/InterfaceUtil';
import Tuijian from '../common/tuijian';
import $ from 'jquery'
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

  constructor(props){
    super(props); //调用父类的构造方法；
    this.state={
      wdjf:[],
      lujin:InterfaceUtil.getImgUrl(),
      wdjf1:[],
      zjjl:[],
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

  //切换颜色
  color(e){
    $('.shoucang_head').removeClass('orange');
    e.target.className='shoucang_head orange cursor';
    if(e.target.innerText=='积分流水'){
      $('.personal_xiangqing_title').addClass('display');
      $('.con1').removeClass('display')
    }else if(e.target.innerText=='积分兑换'){
      $('.personal_xiangqing_title').addClass('display');
      $('.con2').removeClass('display')
    }else if(e.target.innerText=='中奖纪录'){
      $('.personal_xiangqing_title').addClass('display');
      $('.con3').removeClass('display')
    }
  }

  //分页
  fenye(e){
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
    var user_id=getCookie('user_id');
    const that=this;
    //订单ajax
     $.ajax({
                url: InterfaceUtil.getUrl(41),
                type: "post",
                data: {
    "username":username,"token":token,"page":e,"limit":15,"user_id":user_id
              },
                dataType: "json",
                success: function(data){
            if(data.data.length==0){

        }else{
          that.setState({
            wdjf:data.data.list,
            xfcount:data.data.xfcount,
            jfye:data.data.jfye,
            cons:data.data.cons,
          });
          that.refs.dingdan.className='display'
        }
                },
                error: function (XMLHttpRequest, textStatus, errorThrown) {
                    // 状态码
                    console.log(XMLHttpRequest.status);
                    // 状态
                    console.log(XMLHttpRequest.readyState);
                    // 错误信息
                    console.log(textStatus);
                }
            });
    // ajax.open('post',"http://192.168.1.49/index.php/index/user/jfls_log",false);
    // ajax.open('post',InterfaceUtil.getUrl(41),false);
    // ajax.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
    // ajax.onreadystatechange = function() {
    //   if (ajax.readyState == 4 && ajax.status == 200 || ajax.status == 304) { // readyState == 4说明请求已完成
    //     var data=ajax.responseText;
    //     data=JSON.parse(data);


    //   }
    // };
    // ajax.send("username="+username+"&token="+token+"&page="+e+"&limit=15&user_id="+user_id);
  }

  componentDidMount(){
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
    var user_id=getCookie('user_id');
    const that = this;
    //头部ajax
    $.ajax({
                url: InterfaceUtil.getUrl(41),
                type: "post",
                data: {
    "username":username,"token":token,"page":1,"limit":18,"user_id":user_id
              },
                dataType: "json",
                success: function(data){
          if(data.data.list.length==0){
          that.refs.jifen.className=''
        }else{
          that.setState({
            wdjf:data.data.list,
            xfcount:data.data.xfcount,
            jfye:data.data.jfye,
            cons:data.data.cons,
          });
          that.refs.jifen.className='display'
        }
                },
                error: function (XMLHttpRequest, textStatus, errorThrown) {
                    // 状态码
                    console.log(XMLHttpRequest.status);
                    // 状态
                    console.log(XMLHttpRequest.readyState);
                    // 错误信息
                    console.log(textStatus);
                }
            });
    // ajax.open('post',"http://192.168.1.49/index.php/index/user/jfls_log",false);
    // ajax.open('post',InterfaceUtil.getUrl(41),false);
    // ajax.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
    // ajax.onreadystatechange = function() {
    //   if (ajax.readyState == 4 && ajax.status == 200 || ajax.status == 304) { // readyState == 4说明请求已完成
    //     var data=ajax.responseText;
    //     data=JSON.parse(data);


    //   }
    // };
    // ajax.send("username="+username+"&token="+token+"&page=1&limit=18&user_id="+user_id);
  //  中奖纪录
  //   ajax.open('post',"http://192.168.1.49/index.php/index/user/luck_log",false);

     $.ajax({
                url: InterfaceUtil.getUrl(42),
                type: "post",
                data: {
    "username":username,"token":token,"page":1,"limit":15
              },
                dataType: "json",
                success: function(data){
        if(data.data.list.length==0){
          that.refs.jifen1.className=''
        }else{
          that.setState({
            zjjl:data.data.list,
            cons:data.data.cons,
          });
          that.refs.jifen.className='display'
        }
                },
                error: function (XMLHttpRequest, textStatus, errorThrown) {
                    // 状态码
                    console.log(XMLHttpRequest.status);
                    // 状态
                    console.log(XMLHttpRequest.readyState);
                    // 错误信息
                    console.log(textStatus);
                }
            });
    // ajax.open('post',InterfaceUtil.getUrl(42),false);
    // ajax.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
    // ajax.onreadystatechange = function() {
    //   if (ajax.readyState == 4 && ajax.status == 200 || ajax.status == 304) { // readyState == 4说明请求已完成
    //     var data=ajax.responseText;
    //     data=JSON.parse(data);
    //     console.log(data)


    //   }
    // };
    // ajax.send("username="+username+"&token="+token+"&page=1&limit=15");
  }

  render() {
    let xfcount=this.state.xfcount?this.state.xfcount:0;
    let jfye=this.state.jfye?this.state.jfye:0;
    return (
      <div className=' width988 floatRight'>
        {/*最近订单标题*/}
        <div className='personal_Wodejifen_title marginBottom20 personal_Wodejifen_title1'>
          <p className='marginLeft20 fontFamily fontWeight floatleft font20'>我的积分</p>
          <ul>
            <li className='orange shoucang_head cursor' onClick={(e)=>{this.color(e)}}>积分流水</li>
            <div className='shu floatleft'></div>
            <li className='shoucang_head cursor'onClick={(e)=>{this.color(e)}}>积分兑换</li>
            <div className='shu floatleft'></div>
            <li className='shoucang_head cursor'onClick={(e)=>{this.color(e)}}>中奖纪录</li>
          </ul>
        </div>
        {/*内容1*/}
        <div className='white personal_xiangqing_title con1'>
          <div className='xian'></div>
          {/*总积分*/}
          <div className=' personal_jifen_title '>
            <div className='personal_jifen_title_div1 floatleft'>
              <p className='personal_jifen_title_div1_p'>总消费积分</p>
              <p className='personal_jifen_title_div1_p1'>{xfcount}</p>
            </div>
            <div className='personal_jifen_title_div1 floatleft'>
              <p className='personal_jifen_title_div1_p'>可使用积分</p>
              <p className='personal_jifen_title_div1_p1'>{jfye}</p>
            </div>
            <div className='personal_jifen_title_div2 floatleft'>
              <a className='personal_jifen_title_div2_a'>积分商城即将上线</a>
            </div>
            <div className='clear'></div>
          </div>
          {/*输入框*/}
          <div className='personal_Dindan_con_inp'>
            <div className="example-input floatRight marginRight20">
              {/*兑换类型：*/}
              {/*<Select defaultValue='兑换礼品' style={{ width: 200 }} onChange={handleChange}>*/}
                {/*<Option value="兑换礼品">兑换礼品</Option>*/}
                {/*<Option value="兑换礼品">兑换商品</Option>*/}
                {/*<Option value="其他">其他</Option>*/}
              {/*</Select>*/}
              积分类型：
              <Select defaultValue='所有积分' style={{ width: 200 }} onChange={handleChange}>
                <option value="所有积分">所有积分</option>
                <option value="消费积分">消费积分</option>
                <option value="采购积分">采购积分</option>
                <option value="介绍积分">介绍积分</option>
                <option value="消费积分">消费积分</option>
                <option value="其他">其他</option>
              </Select>

              <Button icon="search" style={{ marginLeft: 10 }}>查询</Button>
            </div>
            <div className='clear'></div>
          </div>
          {/*积分信息*/}
          <table className='personal_Jifen_con1_table'>
            <thead>
            <tr>
              <th width="130px">积分类型</th>
              <th width="210px">操作时间</th>
              <th width="170px">消费积分</th>
              <th width="150px">当前积分</th>
              <th width="285px">备注信息</th>
            </tr>
            </thead>
            <tbody>
            {
              this.state.wdjf.map(function (item,i){
                return(
              <tr key={item.residue_jf+i+`wdjff`}>
                <td>{item.jflx}</td>
                <td>{item.addtime}</td>
                <td>589546</td>
                <td>{item.residue_jf}</td>
                <td>兑换礼品单号：{item.bz}</td>
              </tr>
                )
              },this )
            }
            <tr rowSpan={6} ref='jifen'>
              <td colSpan={7}>
                <p className='font20'>亲，您当前还没有积分明细哦~</p>
                <p className='personalCon1_table_tr_p'><a href=""  className='personalCon1_table_td'>去产品中心</a></p>
              </td>
            </tr>

            </tbody>
          </table>
          {/*分页*/}
          <div className='width988 marginTop20 marginBottom20 paddingBtm20'>
            <span className='floatRight personal_zhanneixin_title_div3_span3'><Pagination showQuickJumper={true}  defaultCurrent={1} defaultPageSize={15} total={this.state.cons} onChange={(e)=>{this.fenye(e)}}  /></span>
            <div className='clear'></div>
          </div>
          <div className='xian'></div>
        </div>

        {/*内容2*/}
        <div className='white personal_xiangqing_title center display con2'>
          <div className='xian'></div>
          <div className=' personal_jifen_title '>
            <div className='personal_jifen_title_div1 floatleft'>
              <p className='personal_jifen_title_div1_p'>总消费积分</p>
              <p className='personal_jifen_title_div1_p1'>{xfcount}</p>
            </div>
            <div className='personal_jifen_title_div1 floatleft'>
              <p className='personal_jifen_title_div1_p'>可使用积分</p>
              <p className='personal_jifen_title_div1_p1'>{jfye}</p>
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
                <option value="兑换礼品">兑换礼品</option>
                <option value="兑换礼品">兑换商品</option>
                <option value="其他">其他</option>
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
          {/*积分信息*/}
          <table className='personal_Jifen_con1_table'>
            <thead>
            <tr>
              <th width="130px">兑换类型</th>
              <th width="210px">操作时间</th>
              <th width="170px">消费积分</th>
              <th width="150px">兑换状态</th>
              <th width="285px">备注信息</th>
            </tr>
            </thead>
            <tbody>
            {
              this.state.wdjf.map(function (item,i){
                return(
            <tr key={i+'wdjfs'}>
              <td>兑换礼品</td>
              <td>{item.addtime}</td>
              <td><img src={require("../../images/personal/shang.png")} alt="" className='jiantou'/>{item.xfcount}</td>
              <td className='orange'>已兑换</td>
              <td>{item.bz}</td>
            </tr>
                )
              })
            }


            </tbody>
          </table>
          {/*分页*/}
          {/*分页*/}
          <div className='width988 marginTop20 marginBottom20 paddingBtm20'>
            <span className='floatRight personal_zhanneixin_title_div3_span3'><Pagination showQuickJumper={true}  defaultCurrent={1} defaultPageSize={15} total={this.state.cons} onChange={(e)=>{this.fenye(e)}}  /></span>
            <div className='clear'/>
          </div>
          <div className='xian'/>
        </div>

        {/*内容3*/}
        <div className='white personal_xiangqing_title con3 display'>
          <div className='xian'/>
          {/*总积分*/}
          <div className=' personal_jifen_title '>
            <div className='personal_jifen_title_div1 floatleft'>
              <p className='personal_jifen_title_div1_p'>总消费积分</p>
              <p className='personal_jifen_title_div1_p1'>{xfcount}</p>
            </div>
            <div className='personal_jifen_title_div1 floatleft'>
              <p className='personal_jifen_title_div1_p'>可使用积分</p>
              <p className='personal_jifen_title_div1_p1'>{jfye}</p>
            </div>
            <div className='personal_jifen_title_div2 floatleft'>
              <a href="" className='personal_jifen_title_div2_a'>去积分商城兑换礼品</a>
            </div>
            <div className='clear'></div>
          </div>
          {/*输入框*/}
          <div className='personal_Dindan_con_inp'>
            <div className="example-input floatRight marginRight20">
              {/*兑换类型：*/}
              {/*<Select defaultValue='兑换礼品' style={{ width: 200 }} onChange={handleChange}>*/}
                {/*<Option value="兑换礼品">兑换礼品</Option>*/}
                {/*<Option value="兑换礼品">兑换商品</Option>*/}
                {/*<Option value="其他">其他</Option>*/}
              {/*</Select>*/}
              {/*积分类型：*/}
              {/*<Select defaultValue='所有积分' style={{ width: 200 }} onChange={handleChange}>*/}
              {/*<Option value="所有积分">所有积分</Option>*/}
              {/*<Option value="消费积分">消费积分</Option>*/}
              {/*<Option value="采购积分">采购积分</Option>*/}
              {/*<Option value="介绍积分">介绍积分</Option>*/}
              {/*<Option value="消费积分">消费积分</Option>*/}
              {/*<Option value="其他">其他</Option>*/}
              {/*</Select>*/}

              {/*<Button icon="search" style={{ marginLeft: 10 }}>查询</Button>*/}
            </div>
            <div className='clear'></div>
          </div>
          {/*积分信息*/}
          <table className='personal_Jifen_con1_table'>
            <thead>
            <tr>
              <th width="230px">奖品名称</th>
              <th width="260px">中奖时间</th>
              <th width="170px">奖品状态</th>
              <th width="285px">备注信息</th>
            </tr>
            </thead>
            <tbody>
            {
              this.state.zjjl.map(function (item,i){
                return(
                  <tr key={i+'zjjl'}>
                    <td>{item.name}</td>
                    <td>{item.createtime}</td>
                    <td>{item.is_luck}</td>
                    <td>兑换礼品单号：未渲染</td>
                  </tr>
                )
              },this )
            }
            <tr rowSpan={6} ref='jifen1'>
              <td colSpan={7}>
                <p className='font20'>亲，您当前还没有兑换礼品哦~</p>
                <p className='personalCon1_table_tr_p'><a href=""  className='personalCon1_table_td'>去产品中心</a></p>
              </td>
            </tr>
            </tbody>
          </table>

          {/*分页*/}
          <div className='width988 marginTop20 marginBottom20 paddingBtm20'>
            <span className='floatRight personal_zhanneixin_title_div3_span3'>
                <Pagination showQuickJumper={true}
                            defaultCurrent={1} defaultPageSize={15} total={this.state.cons}
                            onChange={(e)=>{this.fenye(e)}}  />
            </span>
            <div className='clear'></div>
          </div>
          <div className='xian'></div>
        </div>
        {/*推荐*/}
        <Tuijian data='5'/>

      </div>
    );
  }
}


export default PersonalWodejifen;
