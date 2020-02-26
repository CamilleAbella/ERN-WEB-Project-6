
import React from 'react'
import Page from './Page'
import Message from '../components/Message'

export default class NotFound extends React.Component {
    render() {
        return <Page content={<Message content="Not Found..."/>}/>
    }
}