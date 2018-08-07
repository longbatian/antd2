import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import $ from 'jquery';
import CoojiePage from "../../util/CoojiePage";
import InterfaceUtil from "../../util/InterfaceUtil";


// Item组件--所有格子的操作都可以在此进行，如果这些操作都能与"activedId"关联就更好了
class RowItem extends Component {

    render() {
        const {content, activedId} = this.props;
        // var Win = require('../../' + popWinPath + '.js')
        //
        // console.log('Win', Win, popWinPath)
        return (
            <div className={activedId === content.id ? 'row__item row__item-active' : 'row__item'}
                 id={`row_item_${content.id}`}>
                <div>
                    <img src={content.imgUrl}/>
                </div>


            </div>
        )
    }
}

class Integralpage extends React.Component {
    constructor() {
        super();
        this.user_id=CoojiePage.getCoojie('user_id');
        this.token=CoojiePage.getCoojie('token');
        this.state = {
            // 九宫格内容list
            list: [
                {
                    id: 0,
                    imgUrl: require('../../images/interl/03.png')
                },
                {
                    id: 1,
                    imgUrl: require('../../images/interl/04.png')
                },
                {
                    id: 2,
                    imgUrl: require('../../images/interl/07.png')
                },
                {
                    id: 3,
                    imgUrl: require('../../images/interl/03.png')
                },
                {
                    id: 4,
                    imgUrl: require('../../images/interl/03.png')
                },
                {
                    id: 5,
                    imgUrl: require('../../images/interl/07.png')
                },
                {
                    id: 6,
                    imgUrl: require('../../images/interl/08.png')
                },
                {
                    id: 7,
                    imgUrl: require('../../images/interl/08.png')
                },
                {
                    id: 8,
                    imgUrl: require('../../images/interl/07.png')
                },
                {
                    id: 9,
                    imgUrl: require('../../images/interl/04.png')
                },
                {
                    id: 10,
                    imgUrl: require('../../images/interl/09.png')
                },
                {
                    id: 11,
                    imgUrl: require('../../images/interl/07.png')
                },
                {
                    id: 12,
                    imgUrl: require('../../images/interl/05.png')
                }

            ],
            // 被选中的格子的ID
            activedId: '',
            // 中奖ID
            prizeId: null,
            // 获得prizeId之后计算出的动画次数
            times: 0,
            // 当前动画次数
            actTimes: 0,
            // 是否正在抽奖
            isRolling: false
        }
    }

    handleBegin() {
        const _this=this
        // this.state.isRolling为false的时候才能开始抽，不然会重复抽取，造成无法预知的后果
        if (!this.state.isRolling) {
            // 点击抽奖之后，我个人做法是将于九宫格有关的状态都还原默认
            this.setState({
                activedId: '',
                prizeId: null,
                times: 0,
                actTimes: 0,
                isRolling: true
            }, () => {
                $.ajax({
                    url: InterfaceUtil.getUrl(70),
                    type: "post",
                    data: InterfaceUtil.addTime({
                        "token": _this.token, "user_id": _this.user_id
                    }),
                    dataType: "json",
                    success: function (data) {
                        console.log(data)
                        if(data.code===1){
                            // 状态还原之后才能开始真正的抽奖
                            _this.handlePlay( data.data.id)
                        }else {
                            _this.handlePlay(0)
                        }
                    }
                })

            })
        }
    }

    handlePlay(id) {
        // 随机获取一个中奖ID
        let prize = id;
        // let prize = 5;
        console.log(prize);
        this.setState({
            prizeId: prize,
            activedId: 0
        })
        // 随机算出一个动画执行的最小次数，这里可以随机变更数值，按自己的需求来
        let times = this.state.list.length * Math.floor(Math.random() * 8 + 4)
        this.setState({
            times: times
        })
        // 抽奖正式开始↓↓
        this.begin = setInterval(() => {
            let num;

            if (this.state.activedId === this.state.prizeId && this.state.actTimes > this.state.times) {
                // 符合上述所有条件时才是中奖的时候，两个ID相同并且动画执行的次数大于(或等于也行)设定的最小次数
                clearInterval(this.begin)
                this.setState({
                    isRolling: false
                })
                return
            }

            // 以下是动画执行时对id的判断
            if (this.state.activedId === '') {
                num = 0
                this.setState({
                    activedId: num
                })
            } else {
                num = this.state.activedId
                if (num === 11) {
                    num = 0
                    this.setState({
                        activedId: num
                    })
                } else {
                    num = num + 1
                    this.setState({
                        activedId: num
                    })
                }
            }

            this.setState({
                actTimes: this.state.actTimes + 1
            })

        }, 40)
    }
    componentDidMount(){
        const _this=this
        $.ajax({
            url: InterfaceUtil.getUrl(69),
            type: "post",
            data: InterfaceUtil.addTime({
                "token": _this.token, "user_id": _this.user_id
            }),
            dataType: "json",
            success: function (data) {
                console.log(JSON.stringify(data))
            }
        })
    }
    render() {
        const {list, activedId} = this.state;
        return (
            <div className="App">
                <div className="prize">
                    <div className="prize__container">
                        <div className="container__area">
                            <div className="begin__btn">
                                <div>
                                    <img
                                        src={require('../../images/interl/10.png')}
                                        alt="" onClick={() => this.handleBegin()}
                                    />
                                    <span>抽奖消耗200积分/次</span>
                                </div>

                            </div>
                            <div className="area__row">
                                <RowItem content={list[0]} activedId={activedId}/>
                                <RowItem content={list[1]} activedId={activedId}/>
                                <RowItem content={list[2]} activedId={activedId}/>
                                <RowItem content={list[3]} activedId={activedId}/>
                            </div>
                            <div className="area__row">
                                <RowItem content={list[11]} activedId={activedId}/>
                                <RowItem content={list[4]} activedId={activedId}/>
                            </div>
                            <div className="area__row">
                                <RowItem content={list[10]} activedId={activedId}/>
                                <RowItem content={list[5]} activedId={activedId}/>
                            </div>
                            <div className="area__row">
                                <RowItem content={list[9]} activedId={activedId}/>
                                <RowItem content={list[8]} activedId={activedId}/>
                                <RowItem content={list[7]} activedId={activedId}/>
                                <RowItem content={list[6]} activedId={activedId}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Integralpage;
