
import React from 'react'
import Message from './Message'

export default class List extends React.Component {

    render(){
        if(!this.props.array || this.props.array.length === 0)
        return <Message content="Aucun élément..."/>
        return (
            <ol className='list'>
                {this.props.array.map( item => <li className='list-item'> {this.props.prop ? item[this.props.prop] : item} </li>)}
            </ol>
        )
    }

}