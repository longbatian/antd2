import React from 'react';
import {Link} from 'react-router-dom';
import InterfaceUtil from '../../util/InterfaceUtil';
import CoojiePage from '../../util/CoojiePage';
import $ from 'jquery'

class HelpCon extends React.Component {
    constructor(props) {
        super(props); //调用父类的构造方法；
        this.state = {
            con: [],
            conTitle: '',
        }
    }


    componentDidMount() {
        this.helpContentAjax();
    }

    helpContentAjax() {
        //获取地址栏的值

        var id = InterfaceUtil.getHashParameters().id;
        if (id == undefined) {
            id = '';
        }
        const that = this;
        //  广告位
        $.ajax({
            url: InterfaceUtil.getUrl(20),
            type: "post",
            data: {
                "id": id
            },
            dataType: "json",
            success: function (data) {
                if (data.data.length == 0) {

                } else {
                    that.setState({
                        con: data.data.content,
                        conTitle: data.data.title,
                    });
                }
            }
        });

    }

    componentWillMount() {

    }

    componentWillReceiveProps() {
        this.helpContentAjax()
        window.scrollTo(0, 0)
    }

    render() {
        return (
            <div className='help_con_div marginTop20'>
                <div className='marginLeft20 help_con_div_div'>
                    当前位置：首页 > <span className='help_con_div_div_span'>关于支付</span> > <span>{this.state.conTitle}</span>
                </div>
                <div className='help_con_div_div1'>
                    <h2 className='help_con_div_div1_h2'>{this.state.conTitle}</h2>
                    <div dangerouslySetInnerHTML={{__html: this.state.con}}></div>
                </div>
            </div>

        )
    }
}

export default HelpCon;
