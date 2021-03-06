import React, {Component} from 'react';
import Header from './Header1'
import Foooter from './footer'
import '../styles/activipage.css'
import InterfaceUtil from '../util/InterfaceUtil';
import LoginPage from '../util/LoginPage';


class ActivityPage extends Component {
    constructor(props) {
        super(props);
        this.loginPage = new LoginPage();
        this.state = {
            src: '',
            height: 750,
        }
    }

    componentDidMount() {
        this.openIframe();

    }
    componentWillReceiveProps(){
        this.openIframe();
    }
    openIframe() {
        this.loginPage.openNewWindow();
        let aaa = InterfaceUtil.getHashParameters().para;
        let names = InterfaceUtil.getHashParameters().names;
        let src = names + '?' + aaa
            + '=' + InterfaceUtil.getHashParameter(aaa);
        let heights;
        if (names === 'actNew1.php') {
            heights = 3120;
        } else if (names === 'newYearnew1.php') {
            heights = 2640;
        } else if (names === 'goldEggsnew.php') {
            heights = 1665;
        } else if (names === 'zhijun.php') {
            heights = 3270
        } else if (names === 'beihuojie3.html') {
            heights = 3200
        }
        var domain = window.location.host;
        this.setState({
            src: 'http://' + domain + "/activitys/" + src,
            height: heights,
        })
    }

    render() {
        let heights = this.state.height;
        let height = {'height': heights};
        return <div className="iframesBoxs" style={{height: '100%'}}>
            <Header/>
            <iframe className='iframes'
                    style={height}
                    src={this.state.src} frameborder="0"/>
            <Foooter/>
            <div id='topdiv2s'/>
        </div>
    }
}

export default ActivityPage;