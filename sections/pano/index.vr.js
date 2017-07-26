import React from 'react';
import {
    AppRegistry,
    asset,
    Pano,
    Text,
    View,
} from 'react-vr';

export default class VRApp extends React.Component {
    render() {
        return ( 
            <View>
            <Pano source = { asset('starry-sky.jpg') }/>
            </View>
        );
    }
};

AppRegistry.registerComponent('VRApp', () => VRApp);