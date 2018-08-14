import React,{Component} from 'react';
import './components/zhijun.css'
class Zhijun extends Component {
    constructor(props){
        super(props)
    }
    render(){
        return <div className='zjBox'>
            <img src={require('../../images/zhijun/01.png')} alt="" className="img1"/>
            <div className="zjBoxs">

            </div>
        </div>
    }
}

export default Zhijun;