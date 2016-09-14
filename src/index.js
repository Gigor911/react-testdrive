import React from 'react';
import ReactDOM from 'react-dom';

var App = React.createClass({
    render: function () {
        return (
            <div>
                'Hello world'
            </div>
        )
    }
});

ReactDOM.render(
    <App />,
    document.getElementById('root')
);