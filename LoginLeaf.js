/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Dimensions,
  TextInput
} from 'react-native';
let widthOfMargin = Dimensions.get('window').width * 0.05;
const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class LoginLeaf extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      inputedNum: '',
      inputedPW: ''
    };
    this.updatePW = this.updatePW.bind(this);
  }
  changeNumDone() {
    console.log('React Native has changed inputed Num');
  }
  updateNum = (newText) => {
    this.setState((state) => {
      return {
        inputedNum:newText,
      };
    });
  }
  updatePW(newText) {
    this.setState(() => {
      return {
        inputedPW: newText,
      };
    });
  }
  render() {
    return (
      <View style={styles.container}>
        <TextInput style={styles.textInputStyle}
          placeholder={'请输入手机'}
          onChangeText = {this.updateNum}/>
        <Text style={styles.textPrompStyle}>
          您输入的手机号：{this.state.inputedNum}
        </Text>
        <TextInput style={styles.textInputStyle}
          placeholder={'请输入密码'}
          secureTextEntry={true}
          onChangeText={this.updatePW}/>
        <Text style={styles.bigTextPrompt}>
          确定
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  textInputStyle: {
    margin: widthOfMargin,
    backgroundColor: 'gray',
    fontSize: 20
  },
  textPrompStyle: {
    margin: widthOfMargin,
    fontSize: 20
  },
  bigTextPrompt: {
    margin: widthOfMargin,
    backgroundColor: 'gray',
    color: 'white',
    textAlign: 'center',
    fontSize: 30
  }
});
