import React, {Component} from 'react';
import {Link, withRouter} from 'react-router-dom';
import {Carousel} from 'antd';

class ActivityGoldPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isTrue:true,
            isZhong:false,
        }
    }

    componentDidMount() {

    }
    handleImgClick(){
       this.setState({
           isTrue:!this.state.isTrue
       })
    }

    render() {
        const data=this.state;
        let isTrue=data.isTrue?'display':``;
        let isFlase=data.isTrue?'':'display';
        let isZhong1=data.isZhong?'':'display';
        let isZhong2=data.isZhong?'display':'';
        return <div>
            <div className={'agobox'}>
                <div className="agoboxtit">
                    砸金蛋
                </div>
                <div className={"agolayer "+isTrue+' '+isZhong1}>
                    <img
                        onClick={()=>this.handleImgClick()}
                        src="http://www.scjuchuang.com/images/antd/022.png" alt=""/>
                    <button
                        onClick={()=>this.handleImgClick()}
                    >领取礼品</button>
                </div>
                <div className={"agolayer2 "+isTrue+" "+isZhong2}>
                    <p>没有抽到奖</p>
                    <button
                        onClick={()=>this.handleImgClick()}
                    >继续抽奖</button>
                </div>
                <div className="agoboxlef">
                    <div className={'agoboxlefCarousel '+isFlase}>
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

        </div>
    }
}

export default withRouter(ActivityGoldPage);
