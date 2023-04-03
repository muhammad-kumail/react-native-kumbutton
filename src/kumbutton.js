import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';

Button.defaultProps = {
    buttonType: 'solid',
    text: 'Click Me!',
    clickOpacity: 0.2,
    onPress:()=>console.log('Button Clicked!')
}

export default function Button({buttonType,style,text,textStyle,clickOpacity,onPress}){
    return(
        <View style={{ justifyContent: 'center',alignItems: 'center'}}>
          <TouchableOpacity 
            onPress={onPress}
            style={[buttonType === 'outline'?styles.Outline:styles.Solid,style]}
            activeOpacity={clickOpacity}>
            <Text style={[{color: buttonType === 'outline'?'black':'white'},textStyle]}>{text}</Text>
          </TouchableOpacity>
        </View>
    );
}
const styles = StyleSheet.create({
    Solid:{
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 10,
        borderColor: 'black',
        backgroundColor: 'black',
        padding: 8
    },
    Outline:{
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 10,
        borderColor: 'black',
        padding: 8
    }
})
