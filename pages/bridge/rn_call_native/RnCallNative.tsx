import React, { useEffect, useState } from "react"
import { Text, View, Button, Alert, StyleSheet, Keyboard } from 'react-native';
import SampleTurboModule from './SampleTurboModule';

const RnCallNative = () => {

    const [result1, setResult1] = useState('')
    const [result2, setResult2] = useState('')
    const [result3, setResult3] = useState('')

    const rnLog = () => {
        SampleTurboModule.rnLog('RN Call the rnLog function')
    }

    const pushStringToHarmony = () => {
        let result = SampleTurboModule.pushStringToHarmony('rn 传递的参数', 999)
        setResult1(result)
    }

    const registerFunction = () => {
        let start = new Date().getTime()
        SampleTurboModule.registerFunction((value) => {
            let end = new Date().getTime()
            setResult2(`\n${end - start}ms 后, 函数回调 value = ${value}`)
        })
    }

    const doAsyncJob = () => {
        SampleTurboModule.doAsyncJob(true).then((value => {
            // 成功接收到字符串类型  resolve('resolved on native side')
            setResult3(`\n promise 成功 value = ${value}`)
        })).catch((value: object) => {
            // 失败接收到 object 类型  reject('rejected on native side');
            setResult3(`\n promise 失败 value = ${JSON.stringify(value)}`)
        })
    
    }

    interface ItemProp {
        title: string,
        onPress: () => void
    }

    const Item = ({ title, onPress }: ItemProp) => {
        return <View>
            <View style={{ height: 16 }}></View>
            <Button title={title} onPress={onPress}></Button>
        </View>

    }

    return (
        <View style={{ width: '100%',  padding: 16, backgroundColor: 'gray' }}>
            <Item title={'调用 rnLog, 可传参数, 无返回'} onPress={rnLog}></Item>
            <Item title={`调用 pushStringToHarmony, 可传两个参数, 接收 string 返回值: ${result1}`} onPress={pushStringToHarmony}></Item>
            <Item title={`调用 registerFunction, 传递一个回调函数 (value: string) => void  ${result2}`} onPress={registerFunction}></Item>
            <Item title={`调用 doAsyncJob, 传递 boolen 参数, 回调为 Promise 类型 ${result3}`} onPress={doAsyncJob}></Item>
        </View>
    );
}

export default RnCallNative