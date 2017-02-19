import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TextInput
} from 'react-native';
import Util from './../util';
class  search extends Component{
    render(){
        return(
            <View style={styles.container}>
                <TextInput style={styles.search_input} placeholder="搜索" placeholderTextColor="#5E6877"/>
            </View>
        );
    }
}
var styles = StyleSheet.create({
    container:{
      paddingLeft:10,
        paddingRight:10,
        marginTop:20
    },
    search_input:{
        height:35,
        borderWidth:1,
        borderColor:'#EEEEEE',
        paddingLeft:5,
        borderRadius:3,
        fontSize:15
    }
});

module.exports = search;