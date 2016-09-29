import React from 'react';
import Image from '../../components/Gallery/Image';
import Lightbox from '../../components/Gallery/Lightbox';

export default class Gallery extends React.Component {
    state = {
        view: 'grid',
        selected: null
    };

    gridBtnClick() {
        this.setState({view: 'grid'})
    };

    listBtnClick() {
        this.setState({view: 'list'})
    };

    onSelectHandler(selected) {
        this.setState({selected: selected});
    };

    toggleHandler() {
       this.setState({selected: null});
    }

    imageChangeHandler(selected) {
        this.setState({selected: selected})
    }

    render() {
        let Images = this.props.data;
        let imageArray = this.props.data.photos;
        let selected = this.state.selected;
        return (
            <div className='container'>
                <h1 className='text-xs-center'>Images:</h1>
                <div className='row'>
                    <div className='col-md-12 text-xs-center'>
                        <div className='btn-group' role='group'>
                            <button type='button' className='btn btn-secondary' onClick={::this.gridBtnClick}><i className="fa fa-th"></i></button>
                            <button type='button' className='btn btn-secondary' onClick={::this.listBtnClick}><i className="fa fa-list"></i></button>
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <Image
                        onSelect={::this.onSelectHandler}
                        data={Images}
                        view={this.state.view}
                    />
                </div>
                <Lightbox
                    data={Images}
                    selected={selected}
                    next={selected !== null ? (imageArray[selected.id + 1] ? imageArray[selected.id + 1] : imageArray[selected.id - imageArray.length + 1]) : null}
                    prev={selected !== null ? (imageArray[selected.id - 1] ? imageArray[selected.id - 1] : imageArray[selected.id + imageArray.length - 1]) : null}
                    onToggle={::this.toggleHandler}
                    onImageChange={::this.imageChangeHandler}
                />
            </div>
        )
    }
}