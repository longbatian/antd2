import React from 'react';
import {Carousel} from 'antd';
import {Link, Redirect} from 'react-router-dom';
import InterfaceUtil from '../../util/InterfaceUtil';
import $ from 'jquery';
import CoojiePage from "../../util/CoojiePage";

class Louceng2 extends React.Component {
  constructor(props) {
    super(props); //调用父类的构造方法；
    this.state = {
      lujin: InterfaceUtil.getImgUrl(),
      pinpai: [],
      banner1: [],
      banner2: '',
      news1: [],
      news3: [],
      news2: '',
      video_title: '',
      video_src: '',
      redirect: false
    }
  }

  componentDidMount() {
      var user_id = CoojiePage.getCoojie('user_id');
      var token = CoojiePage.getCoojie('token');
    const that = this;
    //品牌
    $.ajax({
      // url:'http://192.168.1.49/index.php/index/user/user_reg',
      url: InterfaceUtil.getUrl(26),
      type: 'post',
      dataType: 'json',
      data:  InterfaceUtil.addTime({

      }),
      beforeSend: function (xhr) {
      },
      success: function (data, textStatus, jqXHR) {
         var data = data;
        // data = JSON.parse(data);
        //   console.log(JSON.stringify(data));
        if (data.data.length == 0) {

        } else {
          that.setState({
            pinpai: data.data.brand,
            banner2: data.data.adv
          });

        }

      }

    })

    //新闻
    // $.ajax({
    //   // url:'http://192.168.1.49/index.php/index/user/user_reg',
    //   url: InterfaceUtil.getUrl(27),
    //   type: 'post',
    //   dataType: 'json',
    //   data: {
    //     // user_type: user_type,
    //
    //   },
    //   beforeSend: function (xhr) {
    //   },
    //   success: function (data, textStatus, jqXHR) {
    //     var data = data;
    //     // data = JSON.parse(data);
    //     // console.log(data.data)
    //     if (data.data.length == 0) {
    //
    //     } else {
    //       that.setState({
    //         banner1: data.data.news_img,
    //         news1: data.data.news,
    //         news3: data.data.news1,
    //         news2: data.data.news2.content,
    //         video_title: data.data.video.video_content,
    //         video_src: data.data.video.video_src
    //       });
    //
    //     }
    //
    //   }
    //
    // })

  }

  getNews(id) {
    document.cookie = 'nid=' + id;
    this.setState({redirect: true});
    // ='#/NewXq';
  }

  render() {
    if (this.state.redirect) {
      return <Redirect push to="/NewXq" target="_blank"/>; //or <Redirect push to="/sample?a=xxx&b=yyy" /> 传递更多参数
    }
    // if()
    return (
      <div className='contain3'>
        {/*广告位*/}
        <div className='louceng2_banner'>
          <img src={this.state.lujin + this.state.banner2} className='' alt=""/>
        </div>
        {/*品牌专区*/}
        <div className='contain4'>
          <div className='louceng2_con'>
            <p className='louceng2_con_p scrollTop8'>品牌专区</p>
            <ul className='louceng2_con_ul'>
              {
                this.state.pinpai.map(function (item,i) {

                  return (
                    <li
                    key={i+item+'pinpai'}
                    >
                        <img src={this.state.lujin + item.image} className='louceng2_con_ul_img' alt=""/></li>
                  )
                }, this)
              }
              <div className='clear'></div>
            </ul>
          </div>
          {/*新闻资讯*/}
          {/*<div className='louceng3_con'>*/}
            {/*<p className='louceng3_con_p'>新闻资讯</p>*/}
            {/*<div className='louceng3_con_div'>*/}
              {/*<div className='louceng3_con_div_con1'>*/}
                {/*<p className='louceng3_con_div_con1_title'>*/}
                  {/*聚创新闻/NEW*/}
                  {/*<Link to="/NewZX" className='black'>*/}
                    {/*<img src="../../images/index/newsJT.png" className='louceng3_con_div_con1_title_img' alt=""/></Link>*/}
                {/*</p>*/}
                {/*<div className='louceng3_con_div_con1_lunbo'>*/}
                  {/*<Carousel autoplay>*/}
                    {/*{*/}
                      {/*this.state.banner1.map(function (item) {*/}

                        {/*return (*/}
                          {/*<div*/}
                          {/*key={item.id+item.langpic+'banner1'}*/}
                          {/*><img src={this.state.lujin + item.langpic} className='' alt=""/></div>*/}
                        {/*)*/}
                      {/*}, this)*/}
                    {/*}*/}
                  {/*</Carousel>*/}
                {/*</div>*/}
                {/*<ul className='louceng3_con_div_con1_ul'>*/}
                  {/*{*/}
                    {/*this.state.news1.map(function (item) {*/}

                      {/*return (*/}
                        {/*<li key={item.id+item.title}>*/}
                          {/*<span className='louceng3_con_div_con1_ul_span'></span>*/}
                          {/*<span className='marginLeft10 hid width210 color2'*/}
                                {/*onClick={() => this.getNews(item.id)}>{item.title}</span>*/}
                          {/*<span className='floatRight'>{item.addtime}</span>*/}
                          {/*<div className='clear'></div>*/}
                        {/*</li>*/}
                      {/*)*/}
                    {/*}, this)*/}
                  {/*}*/}
                {/*</ul>*/}
              {/*</div>*/}
              {/*<div className='louceng3_con_div_con2'>*/}
                {/*<div className='louceng3_con_div_con2_div '>*/}

                  {/*<p dangerouslySetInnerHTML={{__html: this.state.news2}} className='louceng3_con_div_con2_div_hid'></p>*/}
                {/*</div>*/}
                {/*<div>*/}
                  {/*<Link to="/NewZX" className='black'><span className='floatRight blue'>更多行业资讯</span></Link>*/}
                  {/*<div className='clear'></div>*/}
                {/*</div>*/}
                {/*<ul className='louceng3_con_div_con2_ul'>*/}
                  {/*{*/}
                    {/*this.state.news3.map(function (item) {*/}

                      {/*return (*/}
                        {/*<li key={item.id+item.title}>*/}
                          {/*<div className='louceng3_con_div_con2_ul_div'>*/}
                            {/*{item.addtime}*/}
                          {/*</div>*/}
                          {/*<span*/}
                            {/*onClick={() => this.getNews(item.id)}*/}
                            {/*className='floatleft louceng3_con_div_con2_ul_span hid color2'>{item.title}</span>*/}
                          {/*<div className='clear'></div>*/}
                        {/*</li>*/}
                      {/*)*/}
                    {/*}, this)*/}
                  {/*}*/}
                  {/*<div className='clear'></div>*/}
                {/*</ul>*/}

              {/*</div>*/}
              {/*<div className='louceng3_con_div_con3'>*/}
                {/*<p className='louceng3_con_div_con1_title'>企业视频/VIDEO <Link to="/NewZX" className='black'><img*/}
                  {/*src="../../images/index/newsJT.png" className='louceng3_con_div_con1_title_img' alt=""/></Link></p>*/}
                {/*<div className='louceng3_con_div_con1_div'>*/}
                  {/*<video src={this.state.lujin + this.state.video_src} controls*/}
                         {/*className='louceng3_con_div_con1_div_video'></video>*/}
                {/*</div>*/}
                {/*<div className='louceng3_con_div_con1_xian'></div>*/}
                {/*<div className='louceng3_con_div_con1_div1 '>*/}
                  {/*{this.state.video_title}*/}
                {/*</div>*/}
              {/*</div>*/}
            {/*</div>*/}
          {/*</div>*/}
        </div>

      </div>
    )
  }
}

export default Louceng2;
