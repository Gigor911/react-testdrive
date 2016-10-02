import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'


export default class Messages extends React.Component {
    render () {
        let messageTemplate = this.props.data.map(
            message =>
                <div className="alert alert-success" key={message.id}>
                    <span>{message.text}</span>
                </div>
        );
        return (

            <div className="messages-wrapper">
                <ReactCSSTransitionGroup
                    transitionName="message"
                    transitionEnterTimeout={500}
                    transitionLeaveTimeout={300}>
                    {messageTemplate}
                </ReactCSSTransitionGroup>
            </div>
        )
    }
}