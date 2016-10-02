import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'


export default class Messages extends React.Component {

    render () {
        let messageTemplate = this.props.data.map(
            message =>
            <div key={message.id}>
                <div className="message-bubble" >
                    <span>{message.text}</span>
                </div>
                <div className="clearfix"></div>
            </div>
        );
        return (

            <div id="messages-wrapper" className="messages-wrapper">
                <ReactCSSTransitionGroup
                    component="div"
                    id="messages-scroll"
                    transitionName="message"
                    transitionEnterTimeout={500}
                    transitionLeaveTimeout={300}>
                    {messageTemplate}
                </ReactCSSTransitionGroup>
            </div>
        )
    }
}