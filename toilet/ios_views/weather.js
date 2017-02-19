import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';
import TWebView from './twebview';
class  weather extends Component{
    render(){
        return(
            <View style={styles.container}>
                <TWebView url="http://localhost:63342/toilet/toilet/html/nearby.html?_ijt=sorgb05r3rcp68hth5cc97tbtq"/>
            </View>
        );
    }
}
var styles = StyleSheet.create({
    container : {
        flex : 1
    }
});

module.exports = weather;