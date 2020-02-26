
import React from 'react'
import Header from '../components/Header'
import Body from '../components/Body'
import Footer from '../components/Footer'

export default class Page extends React.Component {

    render(){
        return (
            <div className="page">
                <Header/>
                <Body content={this.props.content}/>
                <Footer/>
            </div>
        )
    }

}
      
      