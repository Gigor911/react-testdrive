import React from 'react'

export default class Image extends React.Component {

    imgClickHandler(photoData) {
        this.props.onSelect(photoData);
    };

    render() {
        let view = this.props.view;
        let imagesTemplate;
        if (view === 'grid') {
            imagesTemplate = this.props.data.photos.map(
                photoData =>
                    <div className='col-md-4 grid-element' key={photoData.id}>
                        <div className="card card-block">
                            <h4 className="card-title text-xs-center">{photoData.name}</h4>
                            <img onClick={this.imgClickHandler.bind(this, photoData)} src={photoData.url} alt={photoData.name}/>
                            <div className="card-block">
                                <p className="card-text text-justify">{photoData.description}</p>
                            </div>
                        </div>
                    </div>
            );
        } else {
            imagesTemplate = this.props.data.photos.map(
                photoData =>
                    <div className='col-md-12 grid-element' key={photoData.id}>
                        <div className="row">
                            <div className="col-md-2">
                                <img onClick={this.imgClickHandler.bind(this, photoData)} src={photoData.url} alt={photoData.name}/>
                            </div>
                            <div className="col-md-10">
                                <h4>{photoData.name}</h4>
                                <p>{photoData.description}</p>
                            </div>
                        </div>
                    </div>
            );
        }
        return  (
            <div>{imagesTemplate}</div>
        )
    }
}
