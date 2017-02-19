import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    WebView
} from 'react-native';
class TWebView extends Component{
    constructor(props){
        super(props);
        this.state = {
            url : this.props.url,
            isError : false
        };
    }
    render(){
        return(
            <View style={styles.container}>
                {
                    this.state.isError?
                        <View style={styles.errorInfo}>
                            <Text style={styles.text}>
                                网络有问题，请检查网络情况，再刷新
                            </Text>
                        </View> :
                        <WebView
                            onError={this._showError.bind(this)}
                            startInLoadingState={true}
                            source={{url:this.state.url}}
                            style={{marginTop:-20}}/>
                }


            </View>
        );
    }
    _showError(){
        this.setState({
            isError : true
        });
    }
}
const styles = StyleSheet.create({
    container : {
        flex : 1
    },
    errorInfo : {
        flex : 1,
        justifyContent:'center',
        alignItems:'center'
    },
    text:{
        fontSize:16,
        fontWeight:'300'
    }
});
module.exports = TWebView;