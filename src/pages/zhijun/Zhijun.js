import React,{Component} from 'react';
import {Link,withRouter} from 'react-router-dom';

class Zhijun extends Component {
    constructor(props){
        super(props)
    }
    handleClick(){
        window.scrollTo(0,0);
    }
    render(){
        return <div className='zjBox'>
            <img src={require('../../images/zhijun/01.png')} alt="" className="img1"/>
            <div className="zjBoxs">
                <Link to={'/Shangpinxiangqing?&id=21096'}>
                    <img src={require('../../images/zhijun/02.png')} className="zjimg1"/>
                </Link>
                <div className="zjimg2">
                    <Link to={'/Shangpinxiangqing?&id=26128'}>
                        <img src={require('../../images/zhijun/03.png')} className="zjimg2"/>
                    </Link>
                    <Link to={'/Shangpinxiangqing?&id=29932'}>
                        <img src={require('../../images/zhijun/04.png')} className="zjimg2"/>
                    </Link>
                </div>
                <div className="zjimg3">
                    <Link to={'/Shangpinxiangqing?&id=20873'}>
                        <img src={require('../../images/zhijun/05.png')} className="zjimg2"/>
                    </Link>
                    <Link to={'/Shangpinxiangqing?&id=20728'}>
                        <img src={require('../../images/zhijun/06.png')} className="zjimg2"/>
                    </Link>
                    <Link to={'/Shangpinxiangqing?&id=23927'}>
                        <img src={require('../../images/zhijun/07.png')} className="zjimg2"/>
                    </Link>
                </div>
                <div className="zjimg3">
                    <Link to={'/Shangpinxiangqing?&id=20464'}>
                        <img src={require('../../images/zhijun/08.png')} className="zjimg2"/>
                    </Link>
                    <Link to={'/Shangpinxiangqing?&id=24138'}>
                        <img src={require('../../images/zhijun/09.png')} className="zjimg2"/>
                    </Link>
                    <Link to={'/Shangpinxiangqing?&id=23845'}>
                        <img src={require('../../images/zhijun/10.png')} className="zjimg2"/>
                    </Link>
                </div>
                <div className="zjimg4">
                    <img
                        src={require('../../images/zhijun/11.png')}
                        className="zjimg2"
                        onClick={this.handleClick}
                    />
                </div>
            </div>
        </div>
    }
}

export default Zhijun;