import React from 'react';

export default class Input extends React.Component {
    onSubmitClick () {
        console.log('message should me sent')
    }
    render () {
        return (
            <div>
                <div className="form-group">
                <label htmlFor="enterMessage">Message</label>
                <textarea className="form-control" id="enterMessage" rows="3"/>
            </div>
                <button onClick={this.onSubmitClick} className="btn btn-primary">Submit</button>
            </div>
        )
    }
}