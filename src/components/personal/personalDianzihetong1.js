
import React from 'react';
import { Input,Button,Select,Pagination,Modal   } from 'antd';
import {Link} from 'react-router-dom';
import '../../styles/personal/personalDianzihetong.css';

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

class PersonalDianzihetong extends React.Component {

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
      let myDate = new Date();
      let years= myDate.getFullYear();    //获取完整的年份(4位,1970-????)
      let month=  myDate.getMonth();       //获取当前月份(0-11,0代表1月)
      let date=  myDate.getDate();        //获取当前日(1-31)
      month=month>10?month:`0`+month;
      date=date>10?date:`0`+date;
      let todate=years+`年`+month+`月`+date+`日`;
    return (
      <div className=' width988 floatRight'>
        {/*电子合同标题*/}
        <div className='personal_Dindan_title'>
          <p className='marginLeft20 fontFamily fontWeight'>电子合同</p>
        </div>
        {/*电子合同内容*/}
        <div className='bgWhite marginTop20 personalDianzihetong marginBottom20'>
          <h1 className='personalDianzihetong_title'>网上交易合同</h1>
          <p className='qianyue'>甲方:聚创医药网（以下简称甲方）</p>
          <p className='qianyue'>乙方:<input type="text" className='personalDianzihetong_inp' /></p>
          <p>
            为建立并实行规范有序、公平交易的网上药品电子交易平台、甲方在为乙方提供服务的同时，规范双方
            的交易行为、保护双方的合法权利不受侵害，特制定本合同。
            根据《互联网药品交易服务审批暂行规定》，与本网站进行交易的购货单位（即乙方）为药品批发企业、
            零售药店、连锁药店、医疗机构等，本网站不得为个人提供服务。本着诚信、平等、自愿的原则，
            就乙方使用甲方的网上交易平台——聚创淘药网（<a href='http://www.scjuchuang.com/'>http：//www.scjuchuang.com</a>），
            进行网上商品交易事宜，以电子合同的形式在网上告知乙方，乙方在阅读本协议后如继续进行网上交易
            将视为乙方接受本协议规定，如不同意则交易终止。
          </p>
          <p>
            制定本合同的法律依据：国办发〔2005〕2号文件《关于加快电子商务发展的若干依据》；
            《关于实施互联网药品交易服务审批暂行规定有关问题的补充通知》；《中华人民共和国合同法》；
            《互联网信息服务管理法》；《消费者权益保护法》等法律法规的相关规定。
          </p>
          <p className='personalDianzihetong_title_biaoti1'> 第一部分：甲方的权利、义务和违约责任</p>
          <p>
            1、甲方所提供的交易网站即：聚创淘药网（<a href='http://www.scjuchuang.com/'>http：//www.scjuchuang.com</a>），
            须具备政府相关部门批准的各种资质，且资质均在有效期内。
            如甲方交易网站未获得政府相关部门批准的各种合法资质，或资质未在有效期内，
            乙方有权利到相关行政部门投诉，并解除交易关系。
          </p>
          <p>
            2、甲方所提供用来交易的药品，为企业经营的常备药品或为能从正规渠道采购的药品
            （不包括含二类精神药品）。且药品须为严格依据GSP管理规范进行采购、验收、养护并自行配送。
            如甲方所提供用来交易的药品，有任何质量问题，乙方有权利进行退货及追究甲方赔偿。
          </p>
          <p>
            甲方须严格依照国家食品药品监督管理局规定的商品录入及商品数据管理要求，
            确保网上发布的商品与库房商品实物相符，包括商品的图片、通用名、化学名、规格、单位、
            批准文号、生产厂家、价格、商品说明书及网上商品编码等数据信息。如甲方网上发布的商品信息，
            与订购的实际商品不符，乙方有权拒收或要求进行退换货。
          </p>
          <p>
            甲方严格按照网站公示的配送规定，为乙方进行商品配送服务，包括送货时间、发货条件、
            销售小票及发票、商品质量、包装等规定。如甲方未按网站公示的配送规定及相关服务标准，
            为乙方提供配送，乙方有权进行拒收或退货。
          </p>
          <p>
            甲方须确保乙方在网上交易的个人信息、交易记录不外泄、不用于其他商业用处。
            但在政府相关监管部门要求时，有义务将乙方交易的相关信息（如用户资料、所购商品、
            及网上动作等情况）提供给政府有关监管部门。如甲方将乙方在网上交易的个人信息、
            交易记录外泄或用于其它商业目的，使乙方信息被公开并造成乙方的不便或损失，
            乙方有权追究甲方的责任。
          </p>
          <p className='fontWeight'>甲方将提供货到付款与网上支付两种方式。</p>
          <p>
            （1）货到付款服务针对成都地区的购货单位，由本公司店员负责送货与收款。网上支付部分，
            针对成都以外地区购货单位，由本公司签订的第三方托运负责将商品托运到乙方手中。
          </p>
          <p>
            （2）网上支付方式，须保障乙方在线支付安全顺畅，提供银行的支付平台接口，
            由乙方通过银行的支付平台，将货款支付到甲方的账户。
            并在网站公示支付方式及相应的安全注意事项，提示乙方的注意网上支付风险。
            如甲方未按互联网药品交易服务审批规定提供银行支付平台接口，
            未在网站上公示支付方式及安全知识，造成乙方无法支付或货款损失等，
            乙方有权追究甲方相应的补偿责任。
          </p>
          <p className='fontWeight'>甲方在乙方确认订单并收货确认后，有权要求乙方按订单确认金额支付货款及配送费用。</p>
          <p className='fontWeight'>以下情况可办理商品退换：</p>
          <p>◆购货单位提供的地址不准确，使得商品未送达成功被退回的。</p>
          <p>◆由于本站原因失误造成发货错误或延迟发货的，而给消费者带来不便的。</p>
          <p>◆由于质量原因，经质量部门检验，确属产品本身存在质量问题的。</p>
          <p>◆国家监管部门发布公告的产品（如停售、收回等）。</p>
          <p>◆本站提供商品送货时外包装破损。</p>
          <p>◆本站售出商品超过有效期。</p>
          <p>
            乙方如遇上述情况需退货，成都地区客户，可以直接电话联系本公司客服
            （<span className='orange'>028-83211111</span>）经协商同意后填写采购退出单或拒收单，
            随货托运或交给配送员退回公司。
          </p>
          <p>
            成都以外的托运客户，可以直接电话联系本公司客服（<span className='orange'>028-83211111</span>），
            确认退货事宜后，填写采购退出单或拒收单，随货托运退回本公司。
          </p>
          <p>
            甲方在接到货物后通过网上支付平台，将货款全额退回到乙方的账户中，退款支付手续费由甲方承担。
          </p>
          <p>以下情况不予办理商品退货：</p>
          <p>◆除非药品经有关部门确认存在质量问题外，包装一经拆封将不予退换。</p>
          <p>◆商品因非正常使用和储藏而出现质量问题的。</p>
          <p>◆未经授权或任意的修理、改动而影响商品正常使用的。</p>
          <p>◆医用器械、成人用品。</p>
          <p>◆食物或液体溅落造成污染和损坏。</p>
          <p>◆产品的正常磨损。</p>
          <p>◆退回商品外包装或商品其他附属物不完整或有毁损。</p>
          <p>◆超出质量保证期的商品。</p>
          <p>◆退货商品的批号、型号与售出时不符，非本网站销售的商品。</p>
          <p>◆不能提供聚创医药网网上交易凭证的。</p>
          <p>甲方有权删除在线留言中的非法信息，包括广告、推销以及伤害其他人或国家名族的言论。</p>
          <p className='personalDianzihetong_title_biaoti1'>第二部分：乙方的权利、义务和违约责任</p>
          <p>
            1、乙方应按甲方的交易规定，进行用户注册及填写真实信息，
            并有责任保密自身的登录权限及密码等个人信息。如因乙方未填写真实信息，
            造成交易无法进行、导致其他不可预见的严重后果，
            或由于乙方未能保密个人的登录权限及密码导致乙方的账户被盗用，
            甲方有权注销乙方在甲方网站上的账户。
          </p>
          <p>
            2、乙方应按照甲方提供的网站帮助、操作手册（附件下载）等提示（详见网站首页的“帮助中心”）
            ，正确使用和操作甲方的网上药店平台，不得利用非法手段（如黑客等）破坏和攻击甲方的网站。
            如乙方未按甲方提供的网站帮助、操作手册等提示，使交易无法进行或交易失败，
            由乙方自行负责。如乙方采取非法方式，给甲方网站造成安全破坏或瘫痪，
            甲方有权追究乙方法律责任。
          </p>
          <p>3、乙方应保证对自己所下订单负责，不得恶意下订单。</p>
          <p>
            如乙方在甲方网站上下订单，出现信息不全，造成甲方无法进行订单确认及配送，
            或因乙方随意下单、重复下单，经甲方电话确认为无效订单时，甲方有权取消该订单。
          </p>
          <p>
            4、乙方在收到甲方网站订购的商品时，须仔细核对商品外观，
            通用名、规格、单位、批准文号、生产厂家、价格等信息，
            确保与所订购的商品相同。如乙方发现送货的商品在外观、通用名、
            规格、单位、批准文号、生产厂家、价格等信息与所下订单不同，
            乙方有权拒收或要求退货；退货后乙方如仍需购买，可以重新在网上下订单订购。
            如乙方已订购的商品，为国家有关部门已发布的质量问题等并要求停止销售的商品 ，
            乙方可拒收或凭销售凭据进行退货。
          </p>
          <p>
            5、乙方在收到甲方配送的商品时，应在送货人前当员面检查商品是否为自己所订购的商品、
            商品与订单的信息是否相符、外包装是否完好、商品是否在规定的效期内、
            是否按约定时间送到等。如未出现商品与订单的信息不符、外包装破坏、
            商品不在规定的效期内、送货时间未在规定时间内、
            该商品为国家有关部门已发布了质量问题等要求停止销售的，乙方不得拒收。
            如乙方强行拒收，则必须承担因此对甲方造成的损失。
          </p>
          <p>
            6、乙方应依据甲方所提供的支付方式选择支付，成都地区购货单位可以选择货到付款或网上支付。
            成都以外购货单位，目前仅提供款到发货服务，请您选择网上支付方式进行支付。
            选择网上支付的购货单位，须确保自身所使用的银联卡已开通网上支付功能；
            乙方应了解及主动防范网上支付的风险；乙方应对自己的银联卡信息进行保密。
            如因乙方自身所使用的银联卡未开通网上支付功能导致无法进行网上支付、
            因乙方未按银行的网上支付平台提示实时支付，造成无法支付或支付损失、
            或因乙方自身原因导致账户信息外泄，造成乙方损失的，由乙方自行承担。
          </p>
          <p>
            7、乙方有义务在收货确认后，支付甲方订单金额及配送费用，
            支付方式按照乙方确认订单时自行选择的支付方式。
          </p>
          <p className='personalDianzihetong_title_biaoti1'>第三部分：其他约定</p>
          <p>
            1、本合同适用范围：甲方即聚创医药网，
            乙方即在甲方网上交易平台（<a href='http://www.scjuchuang.com/'>http：//www.scjuchuang.com</a>）进行交易；
          </p>
          <p>
            2、网上交易，存在一定风险因素，主要集中在网站的合法资质、商品的质量、
            网上支付及网络的运营安全性等方面，四川聚创医药有限公司对本公司网站的合法性、
            商品的质量、网络的运营安全性方面（如：遭黑客攻击系统瘫痪、数据资料丢失、系统断电等）
            承担全部责任，网上支付选择的是正规银行的支付平台，购货单位选择网上支付的安全性由银行负责；
          </p>
          <p>3、未尽事宜，双方可致电或在线协商解决，协商不成可向甲方所在当地法院提供诉讼；</p>
          <p>4、本协议对甲乙双方具有同等的法律效力，乙方有权利在线打印本协议。</p>
          <p className='fontWeight'>本协议在乙方实施网上交易后生效。</p>
          <p className='qianyue1'><span className='personalDianzihetong_con'>甲方：四川聚创医药有限公司</span>
              <span>乙方：</span></p>
          <p className='qianyue relative'>
            <span className='personalDianzihetong_con1'>{todate}</span>
            <span>{todate}</span>
            <img src={require("../../images/personal/jldz.png")} className='personalDianzihetong_img' />
          </p>
          <p className='text'>
              <Link to='/Zhuce'>
                  <button className='personalDianzihetong_btn'>
                      确定签约
                  </button>
              </Link>

          </p>

        </div>
      </div>
    );
  }
}


export default PersonalDianzihetong;
