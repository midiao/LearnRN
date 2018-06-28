import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Dimensions,
  TextInput,
  Alert
} from 'react-native';
let widthOfMargin = Dimensions.get('window').width * 0.05;
const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class LoginLeaf extends Component {
  static defaultProps: Props;
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
        <Text style={styles.bigTextPrompt} onPress={() => this.userPressConfirm()}>
            确 定
        </Text>
        <Text style={styles.bigTextPrompt} onPress={() => this.userPressAddressBook()}>
            通 讯 录
        </Text>
      </View>
    );
  }
  userPressConfirm() {
      this.props.onLoginPressed(this.state.inputedNum, this.state.inputedPW);
      // Alert.alert(
      //     '弹出框标题提示语',
      //     '弹出框正文提示语',
      //     [
      //         {text: '我知道了', onPress: this.option1Selected}
      //     ]
      // );
  }
  option1Selected() {
      console.log('option1Selected')
  }
  userPressAddressBook() {

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
