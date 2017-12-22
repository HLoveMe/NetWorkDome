/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,Button
} from 'react-native';
import { NetWorkManager } from "./NetWork/NetWorkManager"

export default class NetWorkDome extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Button title="GET" onPress={ ()=>{
          NetWorkManager.GET("http://www.aaaa.com/asasa",{},{}).subscribe((result)=>{
            //json
            console.log(result);
          })
        }}></Button>
        <Button title="POST" onPress={()=>{
          NetWorkManager.POST("http://www.aaaa.com/asasa",{},{}).subscribe((result)=>{
            //json
            console.log(result);
          })
        }}></Button>
      </View>
    );
  }
}
/**
 *  必须加载 加载 rxjs  ( npm install rxjs)
 *
 *
 *  > 自定义拦截器   znzg_network/ZNZGInterceptor.js
 *    InterceptorManager.addInterceptor(AutoAuthorization);  在请求之前进行注册
 *
 *  > 自定义结果处理函数 znzg_network/ZNZGReponseResult.js
 *     ResponseResultActionManager.addAction(new ZNZGUserPowerAction(()=>{
            //未登入
        }));
 * */

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('NetWorkDome', () => NetWorkDome);
