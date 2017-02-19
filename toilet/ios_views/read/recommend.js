import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity
} from 'react-native';
import Util from './../util';
import TWebView from './../twebview';
class  Recommend extends Component{
    constructor(props){
        super(props);
        this.state = {
            name : props.name,
            data : props.data
        }
    }
    render(){
        var data = this.state.data;
        var views1 = [];
        var views2 = [];
        for(var i in data ){
            let  page = data[i];
            let item = (
            <TouchableOpacity style={styles.img_item} key={i} onPress={this._showWebPage.bind(this,page.url,page.title)}>
                <Image style={[styles.img,styles.shadow]} source={{url:page.img}}/>
                <Text style={styles.title} numberOfLines={2}>{data[i].title}</Text>
            </TouchableOpacity>
            );
            if(i < 4){
                views1.push(item);
            }else{
                views2.push(item);
            }
        }
        return(
            <View style={styles.container}>
                <View>
                    <Text style={[styles.text1,styles.title_top]}>{this.state.name}</Text>
                </View>
                <View style={styles.img_view}>
                    {views1}

                </View>

                <View style={styles.img_view}>
                    {views2}
                </View>
            </View>
        );
    }
    _showWebPage(url,title){
        this.props.navigator.push({
            component:TWebView,
            title:title,
            passProps:{
                url:url
            }
        });
    }
}
var styles = StyleSheet.create({
    container:{
      marginLeft:10,
        marginRight:10
    },
    img_view:{
        flexDirection:'row'
    },
    img_item:{
        flex:1,
        height:157
    },
    shadow:{
        shadowOpacity:1,
        shadowColor:'#ccc',
        shadowOffset:{width:1*Util.pixel,height:Util.pixel}
    },
    img:{
        height:120,
        width: (Util.size.width - 40)/4
    },
    text1:{
        color:'#5E5E5E',
        marginBottom:8,
        fontSize:16
    },
    title_top:{
        marginTop: 10
    },
    title:{
        marginTop:4,
        fontSize:14,
        color:'#818181'
    }

});

module.exports = Recommend;