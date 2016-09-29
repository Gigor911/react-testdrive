import React from 'react';

export default class Lightbox extends React.Component {

    toggleHandler() {
        this.props.onToggle();
    }

    onImageChangeButtonClick(selected) {
        this.props.onImageChange(selected);
    };

    render() {
        let selected = this.props.selected;
        return (
            <div className="modal fade in" style={selected !== null ? {display: 'block'} : {}}>
            <div className="modal-dialog modal-lg" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <button onClick={::this.toggleHandler} type="button" className="close" ><span>×</span></button>
                    </div>
                    <div className="modal-body">
                        <div className="row">
                            <div className="col-md-2"><button onClick={this.onImageChangeButtonClick.bind(this, this.props.prev)} className="btn btn-danger">Prev</button></div>
                            <div className="col-md-8"><img src={selected !== null ? selected.url : ''} alt={selected !== null ? selected.name : ''}/></div>
                            <div className="col-md-2 text-xs-right"><button onClick={this.onImageChangeButtonClick.bind(this, this.props.next)} className="btn btn-danger">Next</button></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal-backdrop fade in"></div>
        </div>
        )
    }
}