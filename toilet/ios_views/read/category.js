import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableOpacity
} from 'react-native';
import Util from './../util';
import List from './list';
class  category extends Component{
    constructor(props){
        super(props);
        this.state = {
          data : props.data,
            navigator:props.navigator
        };
    }
    render(){
        let data = this.state.data;
        let views1 = [];
        let views2 = [];
        for(var i in data ){
            let item = (
                <View style={styles.row_item} key={i}>
                    <TouchableOpacity style={styles.item} onPress={this._goToList.bind(this,data[i].text)}>
                        <Text style={styles.title}>
                            {data[i].text}
                        </Text>
                    </TouchableOpacity>
                </View>
            );
            if( i < 2){
                views1.push(item);
            }else{
                views2.push(item);
            }

        }
        return(
            <View style={styles.container}>
                <Text style={styles.text1}>
                    分类
                </Text>
                <View style={styles.row}>
                    {views1}
                </View>
                <View style={styles.row}>
                    {views2}
                </View>
            </View>
        );
    }
    _goToList(name){
        let type =this._getType(name);
        let url = 'http://123.57.39.116:3000/data/read?type=' + type;
           this.state.navigator.push({
               component:List,
               title:name ,
               barTintColor:'#fff',
               passProps:{
                   url:url

               }
           });
    }
    _getType(name){
        let type ='it';
        switch(name){
            case '互联网':
                type = 'it';
                break;
            case '笑话':
                type = 'cookies';
                break;
            case '管理':
                type = 'manager';
                break;
            case '散文':
                type = 'sanwen';
                break;
            default:
                type = 'it';

        }
        return type;
    }
}
var styles = StyleSheet.create({
    container:{
      marginLeft:10,
        marginRight:10,
        marginTop:10
    },
    text1:{
        color:'#5E5E5E',
        marginBottom:8,
        fontSize:16
    },
    row:{
        flexDirection:'row',
        marginTop:5
    },
    item:{
        flex:1,
        height:81,
        width:(Util.size.width - 40)/2,
        borderColor:'#F1F1F1',
        borderWidth:Util.pixel,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:5
    },
    row_item:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    title:{
        color:'#707070',
        fontSize:17,
        fontWeight:'400'
    }
});

module.exports = category;
