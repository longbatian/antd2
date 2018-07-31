import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link,HashRouter,Switch} from "react-router-dom";
import Denglu from './pages/denglu';
import Index1 from './pages/index1';
import registerServiceWorker from './registerServiceWorker';
import Chanpinzhongxin from './pages/chanpinzhongxin';//产品中心
import Shangpinxiangqing from './pages/shangpinxiangqing';  //商品详情
import Zhuce from './pages/zhuce';  //注册
import Zhaohui from './pages/zhaohui'; //召回
import Dindan from './pages/personalDindan.js'; //订单
import Personal from './pages/personal'; //个人
import Dingdan from './pages/dindan'; //结算详情
import Buycar from './pages/buycar'; //购物车
import Jiesuan from './pages/jiesuan';  //结算
import Zhanneixin from "./pages/personalZhanneixin.js"; //站内信
import Jibenxinxi from "./pages/personalJibenxinxi.js"; //基本信息
import Wodeshoucang from "./pages/personalWodeshoucang"; //我的收藏
import Dianzihetong from "./pages/personalDianzihetong"; //电子合同
import Wodejifen from "./pages/personalWodejifen"; //我的积分
import Caigou from "./pages/personalCaigou"; //采购
import Youhuiquan from "./pages/personalYouhuiquan"; //优惠券
import Lingqu1 from './pages/lingquyouhuiquan';
import ActivityPage from "./pages/activityPage";
import HelpZx from './pages/helpZx';
import Xiangqing from "./pages/personalXiangqing"; //详情
import NewXq from './pages/newXQ';
import NewZX from './pages/newZX';
import Integralpage from './pages/Integralpage';//积分商城
import InformationPage from "./components/my/InformationPage"; //新用户填写信息
import InterlpageHead from './pages/integral/components/InterlpageHead';
import Activitycollection from './pages/activitycollection/Activitycollection';
import IntegralHome from './pages/integral/IntegralHome/IntegralHome';
import IntergralUs from './pages/integral/intergralUs/IntergralUs';
import ComInfoPage from './pages/integral/comInfo/ComInfoPage';
import IntergralPay from './pages/integral/intergralPay/IntergralPay';
import Intergraldatepicker from './pages/integral/intergraldatepicker/Intergraldatepicker';
import Redemption from './pages/redemption/Redemption';//换购
import Bundle from './pages/bundle/Bundle';//换购
import Footer from './pages/footer'; //尾部
import Header from './pages/Header1'; //头部
ReactDOM.render((
    <HashRouter>
        <div>
            <Route path="/Denglu" component={Denglu}/>
            <Route exact path="/" component={Index1}/>
            <Route exact path="/Index" component={Index1}/>
            <Route path="/Chanpinzhongxin" component={Chanpinzhongxin} />
            <Route path="/Shangpinxiangqing" component={Shangpinxiangqing} />
            <Route path="/Zhuce" component={Zhuce} />
            <Route  path="/Zhaohui" component={Zhaohui} />
            <Route path="/Personal" component={Personal} />
            <Route  path="/Dingdan" component={Dingdan} />
            <Route  path="/Dindan" component={Dindan} />
            <Route  path="/Buycar" component={Buycar} />
            <Route  path="/Jiesuan" component={Jiesuan} />
            <Route  path="/Zhanneixin" component={Zhanneixin} />
            <Route  path="/Jibenxinxi" component={Jibenxinxi} />
            <Route  path="/Wodeshoucang" component={Wodeshoucang} />
            <Route  path="/Dianzihetong" component={Dianzihetong} />
            <Route  path="/Wodejifen" component={Wodejifen} />
            <Route  path="/Caigou" component={Caigou} />
            <Route  path="/Youhuiquan" component={Youhuiquan} />
            <Route  path="/Lingqu" component={Lingqu1} />
            <Route  path="/ActivityPage" component={ActivityPage} />
            <Route  path="/HelpZx" component={HelpZx} />
            <Route  path="/Xiangqing" component={Xiangqing} />
            <Route  path="/InformationPage" component={InformationPage} />
            <Route  path="/NewXq" component={NewXq} />
            <Route  path="/NewZX" component={NewZX} />
            <Route  path="/all">
                <div>
                    <Route component={Header}/>
                    <Route  path="/all/Allactivity" component={Activitycollection}/>
                    <Route  path="/all/Redemption" component={Redemption}/>
                    <Route  path="/all/Bundle" component={Bundle}/>
                    <Route component={Footer}/>
                </div>
            </Route>
            <Route  path="/Integral" >
                <div>
                    <Route component={InterlpageHead}/>
                    <Route path="/Integral/lottery" component={Integralpage}/>
                    <Route path="/Integral/Home" component={IntegralHome}/>
                    <Route path="/Integral/Us" component={IntergralUs}/>
                    <Route path="/Integral/Info" component={ComInfoPage}/>
                    <Route path="/Integral/pay" component={IntergralPay}/>
                    <Route path="/Integral/data" component={Intergraldatepicker}/>
                    <Route component={Footer}/>
                </div>

            </Route>
        </div>
    </HashRouter>
), document.getElementById('root'));
registerServiceWorker();
