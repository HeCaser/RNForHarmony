import * as React from 'react';
import { Text, View, StyleSheet, Pressable, Button } from 'react-native';

/**
 * RN 包裹异常提示 代表是 RN 区域
 * 
 */
const RnContainer = ({child}) => {

    return (
        <View style={{ width: '100%', height: '100%',  padding: 20 ,backgroundColor:'gray'}}>
            <Text style={{ marginTop: 20 ,fontSize:12}}>
              RN 渲染区域
            </Text>
            {child}
        </View>
    );
};
export default RnContainer;
