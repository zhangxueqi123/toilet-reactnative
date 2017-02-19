import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ScrollView,
    NavigatorIOS
} from 'react-native';
import Category from './read/category';

import Recommend from './read/recommend';
import Topic from './read/topic';
import Search from './read/search';
import Util from './util';
class Hr extends Component{
    render(){
        return(
            <View>
                <View style={styles.hr}>

                </View>
            </View>
        );
    }
}
class  readView extends Component{
    constructor(){
        super();
        this.state = {
          isShow : false
        };
    }
    render(){
        return(
        <View style={styles.container}>
            <Search/>
            <Hr/>
            {
                this.state.isShow?
                    <ScrollView style={styles.container}>
                        <Topic data={this.state.recommendTopic} navigator={this.props.navigator}/>
                        <Hr/>
                        <Recommend name="热门推荐" data={this.state.hotTopic} navigator={this.props.navigator}/>
                        <Hr/>
                        <Category data={this.state.category} navigator={this.props.navigator}/>
                        <Hr/>
                        <Recommend name="清新一刻" data={this.state.other} navigator={this.props.navigator}/>
                        <View style={{height:55}}></View>
                    </ScrollView> :
                    null
            }

        </View>
        );
    }
    componentDidMount(){
        var that = this;

        Util.get('http://123.57.39.116:3000/data/read?type=config',function (data) {
            if(data.status === 1 ){
                let obj = data.data;
                let hotTopic = obj.hotTopic;
                let recommendTopic = obj.recommendTopic;
                let other = obj.other;
                let category = obj.category;
                that.setState({
                    isShow:true,
                    recommendTopic : recommendTopic,
                    hotTopic : hotTopic,
                    other : other,
                    category : category
                });
            }else{

            }
        }),
        function (err) {

        }
    }
}
class Read extends Component {
    render() {
        return (
            <NavigatorIOS
                initialRoute={{
                    component: readView,
                    title: '阅读',
                    navigationBarHidden:true,

                }}
                style={{flex: 1}}/>
        );

    }
}
var styles = StyleSheet.create({
    container:{
      flex:1
    },
    hr:{
       borderColor:'#F0F0F0',
       borderWidth:Util.pixel ,
       marginTop : 10
    }
});

module.exports = Read;