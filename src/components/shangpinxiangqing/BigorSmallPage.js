import React, {Component} from 'react';
import InterfaceUtil from '../../util/InterfaceUtil';
import './bigorSmallPage.css';
import $ from 'jquery';

class BigorSmallPage extends Component{
    constructor(props) {
        super(props);
        this.state = {
            lujin: InterfaceUtil.getImgUrl()
        }
    }
    render() {
        console.log(this.props)
        let datas = this.props;
        return (
            <div>
                <img src={this.state.lujin + datas.image} alt="" className='spxq_img'/>
            </div>
    )
    }
    componentDidUpdate (){


    }


    }
  //  {/*<img src={this.state.lujin + datas.image} alt="" className='spxq_img'/>*/}
    export default BigorSmallPage;











