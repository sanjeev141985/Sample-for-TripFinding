import React from 'react';
import { Text, View, TextInput } from 'react-native';

const Input = ({ label, value, onChangeText, placeholder, secureTextEntry }) => {

    //console.log(label);
    const { inputStyle, labelStyle, containerStyle } = styles;

    return (
        <View style={containerStyle}>
            <Text style={labelStyle}> { label } </Text>
            <TextInput 
            secureTextEntry={secureTextEntry}
            placeholder={placeholder}
            style={inputStyle}
            value={value}
            onChangeText={onChangeText}
            />
        </View>
    );
};

const styles = {
    inputStyle: {
        color: '#2c2c2c',
        paddingRight: 5,
        paddingLeft: 5,
        fontSize: 20,
        lineHeight: 23,
        flex: 2,
        height: 30,
        width: 150
    },

    labelStyle: {
        fontSize: 20,
        paddingLeft: 10,
        flex: 1,
        color: '#2c2c2c'
    },

    containerStyle: {
        height: 50,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    }
};


export { Input };
