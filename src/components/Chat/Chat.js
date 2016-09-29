import React from 'react';
import Messages from './Messages'
import Input from './Input'

export default class Chat extends React.Component {
    state = {
        messages: []
    };
    componentWillMount() {
        if (!localStorage.getItem('messages')){
            localStorage.setItem('messages', ['1', '2']);
            this.setState({messages: localStorage.getItem('messages')})
        }
        else {
            this.setState({messages: localStorage.getItem('messages')})
        }
    };
    render () {
        let messages = this.state.messages;
        return (
            <div className="container">Work in progress
                <div className="row">
                    <div className="col-md-8 offset-md-2">
                        <Messages data={messages}/>
                        <Input />
                    </div>
                </div>
            </div>
        )
    }
}