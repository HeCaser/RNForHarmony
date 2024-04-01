import * as React from 'react';
import { Text, View, Button, Alert } from 'react-native';
import SampleTurboModule from './SampleTurboModule';


const RnCallNative = () => {

    const bridge = () => {
        SampleTurboModule.rnLog('RN Call the rnLog function')
    }

    return (
        <View style={{ width: '100%', marginTop: 10, padding: 20, backgroundColor: 'gray' }}>
            <Button title='调用 Bridge' onPress={bridge}></Button>
        </View>
    );
}

export default RnCallNative