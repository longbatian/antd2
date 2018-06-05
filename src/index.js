import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link,HashRouter } from "react-router-dom";
// import createBrowserHistory from 'history/createBrowserHistory'

// const history = createBrowserHistory()

// import './index.css';
// import App from './App';
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
import InformationPage from "./components/my/InformationPage"; //新用户填写信息

ReactDOM.render((
    <HashRouter>
        <div>
            <Route exact path="/" component={Index1}/>
            <Route path="/Denglu" component={Denglu} />
          	<Route path="/Index" component={Index1} />
          	<Route path="/Chanpinzhongxin" component={Chanpinzhongxin} />
            <Route  path="/Shangpinxiangqing" component={Shangpinxiangqing} />
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
        </div>
    </HashRouter>
), document.getElementById('root'));
registerServiceWorker();
