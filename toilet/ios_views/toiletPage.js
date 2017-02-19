
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    WebView
} from 'react-native';
import TWebView from './twebview'
class  toiletPage extends Component{
    render(){
        return(
        <View style={styles.container}>
            <TWebView url="http://localhost:63342/toilet/toilet/html/nearby.html"/>
        </View>
        );
    }
}
var styles = StyleSheet.create({
    container : {
        flex : 1
    }
});

module.exports = toiletPage;