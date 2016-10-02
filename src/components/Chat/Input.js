import React from 'react';
import id from 'shortid'

export default class Input extends React.Component {
    onSubmitClick () {
        let message = {
            id: id.generate(),
            text: this.refs.message.value
        };
        this.props.updateMessages(message);
    }

    render () {
        return (
            <div>
                <div className="form-group">
                    <label htmlFor="enterMessage">Message</label>
                    <textarea placeholder="Enter message" ref="message" className="form-control" id="enterMessage" rows="3"/>
                </div>
                <button onClick={::this.onSubmitClick} className="btn btn-primary">Submit</button>
            </div>
        )
    }
}