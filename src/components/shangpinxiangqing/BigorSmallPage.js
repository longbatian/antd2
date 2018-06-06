import React, {Component} from 'react';
import InterfaceUtil from '../../util/InterfaceUtil';
import ReactImageZoom from 'react-image-zoom';

class BigorSmallPage extends Component{
    constructor(props) {
        super(props);
        this.state = {
            lujin: InterfaceUtil.getImgUrl()
        }
    }
    render() {
        let datas = this.props;
        const props = {width: 346, height: 346, zoomWidth: 500, img: this.state.lujin + datas.image};
        return (
            <div>
                <ReactImageZoom {...props} />
            </div>
    )
    }

    }
  //  {/*<img src={this.state.lujin + datas.image} alt="" className='spxq_img'/>*/}
    export default BigorSmallPage;











