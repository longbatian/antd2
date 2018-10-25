import React, {Component} from 'react';
import {Link, withRouter} from 'react-router-dom';
import {Carousel} from 'antd';

class ActivityGoldPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount() {

    }
    handleImgClick(){
        alert(1212)
    }

    render() {

        return <div>
            <div className={'agobox'}>
                <div className="agoboxtit">
                    砸金蛋
                </div>
                <div className="agoboxlef">
                    <div className={'agoboxlefCarousel'} style={{display:'none'}}>
                        <Carousel
                            dots={false}
                            autoplay>
                            <div>
                                <img
                                    onClick={()=>this.handleImgClick()}
                                    src="http://www.scjuchuang.com/images/antd/017.png" alt=""/>
                                <img
                                    onClick={()=>this.handleImgClick()}
                                    src="http://www.scjuchuang.com/images/antd/017.png" alt=""/>
                                <img
                                    onClick={()=>this.handleImgClick()}
                                    src="http://www.scjuchuang.com/images/antd/017.png" alt=""/>
                            </div>
                            <div>
                                <img
                                    onClick={()=>this.handleImgClick()}
                                    src="http://www.scjuchuang.com/images/antd/017.png" alt=""/>
                                <img
                                    onClick={()=>this.handleImgClick()}
                                    src="http://www.scjuchuang.com/images/antd/017.png" alt=""/>
                                <img
                                    onClick={()=>this.handleImgClick()}
                                    src="http://www.scjuchuang.com/images/antd/017.png" alt=""/>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
            <div className="agolayer">
                <img
                    onClick={()=>this.handleImgClick()}
                    src="http://www.scjuchuang.com/images/antd/017.png" alt=""/>
            </div>
        </div>
    }
}

export default withRouter(ActivityGoldPage);
