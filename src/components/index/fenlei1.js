import React from 'react';
import {withRouter,Link} from "react-router-dom";
import InterfaceUtil from '../../util/InterfaceUtil';
// import $ from '../../js/jquery.min';
import $ from 'jquery';

class Fenlei11 extends React.Component {
  constructor(props) {
    super(props); //调用父类的构造方法；
    this.state = {
      fenlei: [],
      lujin:InterfaceUtil.getImgUrl(),
    }
  }


  fenlei(e) {
    // console.log(e.target.children.length)
    // if (e.target.children.length != 0) {
    //
    //   var index = e.target.getAttribute('data');
    //   index = parseInt(index)
    //   $('.index_lunbo_ul_zilei').addClass('display');
    //   $('.index_lunbo_ul_zilei').eq(index).removeClass('display');
    //   $('.aaa1').addClass('aaa1_current');
    //   $('.aaa1').eq(index).addClass('borderRight');
    // } else {
    //   var index = e.target.parentNode.getAttribute('data');
    //   $('.index_lunbo_ul_zilei').addClass('display');
    //   $('.index_lunbo_ul_zilei').eq(index).removeClass('display');
    //   $('.aaa1').eq(index).addClass('borderRight');
    // }
    var index = $(e.target).parents('li').attr('data');
    $('.index_lunbo_ul_zilei').addClass('display');
    $('.index_lunbo_ul_zilei').eq(index).removeClass('display');
    $('.aaa1').eq(index).addClass('borderRight');
  }

  fenlei1(e) {
    $('.index_lunbo_ul_zilei').addClass('display');
    $('.aaa1').removeClass('borderRight');
  }

  fenlei2(e) {
    var a = e.target.getAttribute('class');
    if (a == null) {
      var index = e.target.parentNode.parentNode.parentNode.getAttribute('data');
      $('.index_lunbo_ul_zilei').addClass('display');
      $('.index_lunbo_ul_zilei').eq(index).removeClass('display');
      $('.aaa1').eq(index).addClass('borderRight');
    } else if (a == 'disanji') {
      var index = e.target.parentNode.parentNode.getAttribute('data');
      $('.index_lunbo_ul_zilei').addClass('display');
      $('.index_lunbo_ul_zilei').eq(index).removeClass('display');
      $('.aaa1').eq(index).addClass('borderRight');
    }
    else if (a == 'index_lunbo_ul_zilei_dl') {
      var index = e.target.parentNode.getAttribute('data');
      $('.index_lunbo_ul_zilei').addClass('display');
      $('.index_lunbo_ul_zilei').eq(index).removeClass('display');
      $('.aaa1').eq(index).addClass('borderRight');
    } else if (a == 'zuixiaji') {
      var index = e.target.parentNode.parentNode.parentNode.getAttribute('data');
      $('.index_lunbo_ul_zilei').addClass('display');
      $('.index_lunbo_ul_zilei').eq(index).removeClass('display');
      $('.aaa1').eq(index).addClass('borderRight');
    } else {
      var index = e.target.getAttribute('data');
      $('.index_lunbo_ul_zilei').addClass('display');
      $('.index_lunbo_ul_zilei').eq(index).removeClass('display');
      $('.aaa1').eq(index).addClass('borderRight');
    }
  }

  //点击跳转
  chaxun(e,pid) {
    // var a = e.target.children.length;
    // if (a != 0) {
    //    pid = pid
    //   console.log('1'+pid)
    console.log(this.props.history)
    this.props.history.push('/Chanpinzhongxin?&zjzx=2?&pid=' + pid)
    //   // window.location.href = '#/Chanpinzhongxin?pid=' + pid;
    // } else {
    //   console.log(sid+'2'+pid)
    //   // var pid = e.target.parentNode.getAttribute('data-pid');
    //   // window.location.href = '#/Chanpinzhongxin?pid=' + pid;
    // }
  }

  chaxun1(e,sid) {
    // var pid = e.target.getAttribute('data-sid');
    var index=e.target.parentNode.parentNode.getAttribute('data');
    var pid = $('.aaa1').eq(index).attr('data-class');
    this.props.history.push('/Chanpinzhongxin?&zjzx=2&pid=' + pid + '&sid=' + sid)
    // window.location.href = '#/Chanpinzhongxin?&pid=' + pid + '&sid=' + sid;
  }

  chaxun2(e,did) {
    // var did = e.target.getAttribute('data-did');
    var index = e.target.parentNode.parentNode.parentNode.getAttribute('data');
    var sid = e.target.parentNode.parentNode.firstChild.getAttribute('data-sid');
    var pid = $('.aaa1').eq(index).attr('data-class');
    // console.log(pid + '&sid=' + sid + '&did=' + did)
    // window.location.href = '#/Chanpinzhongxin?&pid=' + pid + '&sid=' + sid + '&did=' + did;
    this.props.history.push( '/Chanpinzhongxin?&zjzx=2&pid=' + pid + '&sid=' + sid + '&did=' + did)
  }


  componentDidMount() {
    function getCookie(cookieName) {
      var strCookie = document.cookie;
      var arrCookie = strCookie.split('; ');
      for (var i = 0; i < arrCookie.length; i++) {
        var arr = arrCookie[i].split('=');
        if (cookieName == arr[0]) {
          return arr[1];
        }
      }
      return '';
    }

    var user_type = getCookie('user_type');
    var token = getCookie('token');
    var jylx = getCookie('jylx');
    const that = this;
    //搜索条件ajax
    // try {
    //   window.ajax = new ActiveXObject('Msxml2.XMLHTTP');
    // } catch (e) {
    //   try {
    //     window.ajax = new ActiveXObject('Microsoft.XMLHTTP');
    //   } catch (e1) {
    //     window.ajax = new XMLHttpRequest();
    //   }
    // }
    // ajax.open('post',"http://192.168.1.49/index.php/index/index",false);
        $.ajax({
                url: InterfaceUtil.getUrl(23),
                type: "post",
                data: {
                  "type":"1"
                },
                dataType: "json",
                success: function(data){
                      var data =data;
        // data = JSON.parse(data);
        if (data.data.length == 0) {

        } else {
          that.setState({
            fenlei: data.data
          });
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
    // ajax.open('post', InterfaceUtil.getUrl(23), false);
    // ajax.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    // ajax.onreadystatechange = function () {
    //   if (ajax.readyState == 4 && ajax.status == 200 || ajax.status == 304) { // readyState == 4说明请求已完成
    //     var data = ajax.responseText;
    //     data = JSON.parse(data);
    //     if (data.data.length == 0) {

    //     } else {
    //       that.setState({
    //         fenlei: data.data
    //       });
    //     }
    //   }
    // };
    // ajax.send('type=1');
  }

  render() {
    return (
      <div className='fenlei relative display'>
        {/*分类*/}
        <ul className='index_lunbo_ul_fenlei'>
          {
            this.state.fenlei.map(function (item, i) {
              return (
                <li key={item.title} className='aaa1 aaa1_current'
                   data-class={item.id}
                >
                  <div className='dashed2' onClick={(e) => {
                    this.chaxun(e,item.id)
                  }}>
                    <img src={this.state.lujin + item.logo} alt=""/>
                    <span className='marginLeft5'>{item.title}</span>
                    <img src={require('../../images/index/xiangyou.png')}
                         className='index_lunbo_ul_fenlei_img' alt=""/>
                    <div className='clear'></div>
                  </div>

                  <div className='index_lunbo_ul_zilei ' data={i} onMouseMove={(e) => {
                    this.fenlei2(e)
                  }} onMouseOut={(e) => {
                    this.fenlei1(e)
                  }}>
                    {/*中西成药*/}
                    {
                      this.state.fenlei[i].d.map(function (item, j) {
                        return (
                          <dl key={item.id} className='index_lunbo_ul_zilei_dl'>
                            <dt className='disanji' data-sid={item.id} onClick={(e) => {
                              this.chaxun1(e,item.id)
                            }}
                            >{item.title}</dt>
                            <dd className='disanji'>
                              {
                                this.state.fenlei[i].d[j].d1.map(function (item) {

                                  return (
                                    <span className='zuixiaji' key={item.id}
                                          data-did={item.id} onClick={(e) => {
                                      this.chaxun2(e,item.id)

                                    }}>{item.title}</span>
                                  )
                                }, this)
                              }
                            </dd>

                          </dl>
                        )
                      }, this)
                    }
                  </div>

                </li>
              )
            }, this)
          }

          <li className='aaa1 aaa1_current'></li>
        </ul>
        {/*子类*/}

        {/*{*/}
          {/*this.state.fenlei.map(function (item, i) {*/}
            {/*// return (*/}
            {/*//   <div className='index_lunbo_ul_zilei display' data={i} onMouseMove={(e) => {*/}
            {/*//     this.fenlei2(e)*/}
            {/*//   }} onMouseOut={(e) => {*/}
            {/*//     this.fenlei1(e)*/}
            {/*//   }}>*/}
            {/*//     /!*中西成药*!/*/}
            {/*//     {*/}
            {/*//       this.state.fenlei[i].d.map(function (item, j) {*/}
            {/*//         return (*/}
            {/*//           <dl className='index_lunbo_ul_zilei_dl'>*/}
            {/*//             <dt className='disanji' data-sid={item.id} onClick={(e) => {*/}
            {/*//               this.chaxun1(e)*/}
            {/*//             }}>{item.title}</dt>*/}
            {/*//             <dd className='disanji'>*/}
            {/*//               {*/}
            {/*//                 this.state.fenlei[i].d[j].d1.map(function (item) {*/}
            {/*//                   return (*/}
            {/*//                     <span className='zuixiaji' data-did={item.id} onClick={(e) => {*/}
            {/*//                       this.chaxun2(e)*/}
            {/*//                     }}>{item.title}&emsp;|&emsp;</span>*/}
            {/*//                   )*/}
            {/*//                 }, this)*/}
            {/*//               }*/}
            {/*//             </dd>*/}
            {/*//*/}
            {/*//           </dl>*/}
            {/*//         )*/}
            {/*//       }, this)*/}
            {/*//     }*/}
            {/*//   </div>*/}
            {/*// )*/}
          {/*}, this)*/}
        {/*}*/}
      </div>
    )
  }

  componentDidUpdate() {

  }
}

// export default Fenlei11
export default withRouter(Fenlei11);