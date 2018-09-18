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

            <img
                src={'http://www.scjuchuang.com/images/activepage/ActivityPage3.png'}
                className='act2img1'/>
        </div>
    }
}

export default withRouter(ActivityPage2);
