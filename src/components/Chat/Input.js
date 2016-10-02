import React from 'react';
import id from 'shortid'

export default class Input extends React.Component {

    state = {
        buttonDisabled: true
    };

    onSubmitClick () {
        let message = {
            id: id.generate(),
            text: this.refs.message.value
        };
        this.props.updateMessages(message);
        this.refs.message.value = '';
    }

    checkInput (e) {
        if (e.target.value.trim().length > 0) {
            this.setState({buttonDisabled: false});
        } else {
            this.setState({buttonDisabled: true});
        }
    };

    render () {
        let buttonDisabled = this.state.buttonDisabled;
        return (
            <div className="row">
                <div className="form-group col-md-10">
                    <textarea onChange={::this.checkInput} defaultValue="" placeholder="Enter message" ref="message" className="form-control" id="enterMessage" rows="3"/>
                </div>
                <div className="form-group col-md-2 text-xs-right">
                    <button onClick={::this.onSubmitClick} className="btn btn-primary" disabled={buttonDisabled}><i className="fa fa-paper-plane"></i></button>
                </div>
            </div>
        )
    }
}