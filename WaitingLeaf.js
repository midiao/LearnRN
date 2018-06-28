import React, { Component } from 'react';
import {
    StyleSheet, Text, View
} from 'react-native';
import PropTypes from 'prop-types';
export default class WaitingLeaf extends Component{
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.textPrompStyle}>
                    登录使用手机号:{this.props.phoneNumber}
                </Text>
                <Text style={styles.textPrompStyle}>
                    登录使用密码:{this.props.userPW}
                </Text>
                <Text style={styles.bigTextPrompt} onPress={() => this.onGobackPressed()}>
                    返 回
                </Text>
            </View>
        )
    }
    onGobackPressed() {
        this.props.onGobackPressed();
    }
}
let styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    textPrompStyle: {
        fontSize: 20
    },
    bigTextPrompt: {
        width: 300,
        backgroundColor: 'gray',
        color: 'white',
        textAlign: 'center',
        fontSize: 60
    }
})
WaitingLeaf.propTypes = {
    phoneNumber: PropTypes.string,
    userPW: PropTypes.string
}
