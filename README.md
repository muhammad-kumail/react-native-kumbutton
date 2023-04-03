# react-native-kumbutton
Create Stylish button instantly and efficiently 
## Installation
Native Cli: npm install react-native-kumbutton

Expo: expo install react-native-kumbutton
## Demo
![ezgif com-resize (1)](https://user-images.githubusercontent.com/56933027/229501832-9906efd1-b7d8-4104-9ae3-7655cf37af28.gif)

## Sample code
```javascript
import {Button} from 'react-native-kumbutton'
export default function App(){
    return(
      <View style={{justifyContent: 'center',alignItems: 'center'}}>
        <Text>Default (Solid)</Text>
        <Button
          text={'Hello world!'}
        />
        <Text>Default (Outline)</Text>
        <Button
          buttonType={'outline'} //default 'solid'
          text={'Hello world!'}
          //default onpress -> console.log('Button Clicked!')
        />
        <Text>Stylish (Solid)</Text>
        <Button
            buttonType={'solid'}
            style={{borderRadius: 20,borderColor: 'blue',backgroundColor: 'blue',padding: 10}}
            text={'Hello world!'}
            textStyle={{color: 'white',fontSize: 16}}
            clickOpacity={0.4}
            onPress={()=>console.log('Hello world (Solid)')}
          />
          <Text>Stylish (Outline)</Text>
        <Button
            buttonType={'outline'}
            style={{borderRadius: 20,borderColor: 'blue',padding: 10}}
            text={'Hello world!'}
            textStyle={{color: 'blue',fontSize: 16}}
            clickOpacity={0.4}
            onPress={()=>console.log('Hello world (Outline)')}
          />
    </View>
    );
}
```
## Properties
|Props|Type|Default|Description|
|---|---|---|---|
|buttonType|String|'solid'|valid values: ['solid','outline']|
|style|Object|null|
|text|String|'Click Me!'|
|textStyle|Object|null|
|clickOpacity|Number|0.2|value range (0-1)|
|onPress|Function|()=>console.log('Button Clicked!')|
