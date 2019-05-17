import React from 'react';
import { View } from 'react-native';

const Card = (props) => (
        <View style={Styles.containerStyle}>
        {props.children}
        </View>
    );

const Styles = {
    containerStyle: {
        borderWidth: 1,
        borderRadius: 2,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        shadowColor: 'green',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 1,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 5,
        marginBottom: 10

    }
}; 

export { Card };
