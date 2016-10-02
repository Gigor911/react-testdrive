import React from 'react';
import Images from '../../sampleData/photos.json';
import Messages from '../../sampleData/messages.json'
import Gallery from '../components/Gallery/Gallery';
import Chat from '../components/Chat/Chat';
import Cropper from '../components/Cropper/Cropper';

export default class App extends React.Component {
    state = {
        app: null
    };
    onChangeApp(app) {
        this.setState({
            app: app
        });
    }
    render() {
        let app = this.state.app;

        switch (app) {
            case 'gallery' :
                return  (
                    <div>
                        <button onClick={::this.onChangeApp.bind(this, null)}  type="button" className="btn btn-secondary">Close</button>
                        <Gallery data={Images}/>
                    </div>
                );
                break;
            case 'chat' :
                return  (
                    <div>
                        <button onClick={::this.onChangeApp.bind(this, null)}  type="button" className="btn btn-secondary">Close</button>
                        <Chat data={Messages}/>
                    </div>
                );
                break;
            case 'cropper' :
                return  (
                    <div>
                        <button onClick={::this.onChangeApp.bind(this, null)}  type="button" className="btn btn-secondary">Close</button>
                        <Cropper />
                    </div>

                );
                break;
            default :
                return (
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 text-xs-center">
                                <div className="btn-group" role="group">
                                    <button onClick={this.onChangeApp.bind(this, 'gallery')}  type="button" className="btn btn-secondary">Gallery</button>
                                    <button onClick={::this.onChangeApp.bind(this, 'cropper')}  type="button" className="btn btn-secondary">Cropper</button>
                                    <button onClick={::this.onChangeApp.bind(this, 'chat')}  type="button" className="btn btn-secondary">Chat</button>
                                </div>
                            </div>
                        </div>
                    </div>
                )
        }

    }
}