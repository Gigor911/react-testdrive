import React from 'react';

export default class Messages extends React.Component {
    render () {
        return (
            <div>Messages array : {this.props.data}</div>
        )
    }
}