import React,{Component} from 'react';
import $ from 'jquery';
import { Input } from 'antd';
const { TextArea } = Input;
class Questionnaire extends Component {
    constructor(e){
        super()

    }
    render(){
        return <div className="qtBox">
            <div className="qtboxs">
                <div className="qtboxHead">
                    <h1>问券调查</h1>
                    <p>功能操作不方便？使用是遇到系统问题？或有更好的功能建议？欢迎您随时提出来！</p>
                    <p>如需投诉，请联系在线客服，您会获得更专业快速的解决方案！</p>
                </div>
                <div className="qtCon">
                    <div className="qtContit">1.我们存在哪些不足</div>
                    <div className="qtConcon">
                        <TextArea
                            placeholder="请将您的建议或您遇到的问题告诉我们，我们会认真听取并及时反馈"
                                  autosize={{ minRows: 6, maxRows: 10 }} />
                    </div>
                    <div className="qtContit">2.请留下您的信息，以便我们及时反馈，并有机会获得小礼物</div>
                    <div className="qtConcon">
                       <p>
                           您的手机：
                           <Input className="qtConcontel"/>
                       </p>
                    </div>
                    <div className="qtConcon">
                        <button className="bl2drigButton">提交</button>
                    </div>
                </div>
            </div>

        </div>
    }

}
export default Questionnaire

