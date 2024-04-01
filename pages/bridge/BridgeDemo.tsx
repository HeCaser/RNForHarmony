import * as React from 'react';
import { Text, View, Button } from 'react-native';
import RnCallNative from './rn_call_native/RnCallNative';


const BridgeDemo = () => {

 
    return (
        <View style={{ width: '100%', marginTop: 10, padding: 20, backgroundColor: 'gray' }}>
            <RnCallNative></RnCallNative>
        </View>
    );
}

export default BridgeDemo