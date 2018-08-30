import React, {Component} from 'react';
import {Link, withRouter} from 'react-router-dom';


class ActivityPage2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount() {

    }


    render() {

        return <div>
            <img src={require('../../images/activepagesimage/003.png')}
                 className='act2img1'/>
            <div className="act2div">
                <Link to={'/Chanpinzhongxin?&title=%E5%B9%BF%E4%B8%9C%E7%88%B1%E8%BF%AA%E5%8C%BB%E7%96%97%E7%A7%91%E6%8A%80%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8'}>
                    <img
                        className="act2img2"
                        src={require('../../images/activepagesimage/001.png')} alt=""/>
                </Link>
                <Link to={'/Shangpinxiangqing?&id=23492'}>
                    <img
                        className="act2img2"
                        src={require('../../images/activepagesimage/002.png')} alt=""/>
                </Link>

            </div>
            <img
                src={require('../../images/activepagesimage/005.png')}
                className='act2img1'/>
        </div>
    }
}

export default withRouter(ActivityPage2);
