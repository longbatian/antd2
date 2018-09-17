import React from 'react';
import Header from './Header1'
import Footer from './footer'
import NewXq from '../components/new/newXQ'


class NewXq1 extends React.Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
    }
    render() {
        return (
            <div>
                {/*头部*/}
                <Header/>
                {/*新闻中心*/}
                <NewXq {...this.props}/>
                <Footer/>
            </div>
        );
    }
}


export default NewXq1;
