import React from 'react';
import ReactDOM from 'react-dom'
import Messages from './Messages'
import Input from './Input'


export default class Chat extends React.Component {

    state = {
        messages: this.props.data.messagesArray
    };

    updateMessagesHandler(message) {
        let newMessageArray = this.state.messages.concat([message]);
        if (newMessageArray.length > 51) {
            newMessageArray.shift();
        }
        this.setState({messages: newMessageArray});

        setTimeout(function () {
            document.getElementById('messages-wrapper').scrollTop = document.getElementById('messages-scroll').offsetHeight;
        }, 100);
    }

    render () {
        let messages = this.state.messages;
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-8 offset-md-2">
                        <Messages data={messages}/>
                        <Input updateMessages={::this.updateMessagesHandler}/>
                    </div>
                </div>
            </div>
        )
    }
}