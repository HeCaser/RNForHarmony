import * as React from 'react';
import { Text, View, Button } from 'react-native';

/**
 * 展示从鸿蒙带入的初始化参数
 * 
 */
const InitParam = (prop: object) => {
    const printProp = () => {
        console.log(`hepan 参数 = ${JSON.stringify(prop)}`)
    }
    return (
        <View style={{ width: '100%', height: '100%', marginTop: 10, padding: 20, backgroundColor: 'gray' }}>
            <Button title='点击打印初始化参数' onPress={printProp}></Button>
            <Text style={{ marginTop: 20 }}>
                初始化参数:{JSON.stringify(prop)}
            </Text>
        </View>
    );
};
export default InitParam;
