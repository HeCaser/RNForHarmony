
 import * as React from 'react';
 import {Text, View, StyleSheet, Pressable} from 'react-native';//注入组件
 const App = (): React.Node => {
   return (
    <Pressable onPress={() => {
      console.log("Hello World")
    }}>
    <View style={styles.container}>
      <Text style={styles.title}>
        Hello World~
      </Text>
      <Text style={styles.content}>
        在 VSCode222 的控制台上输入d，便可看到手机上弹出了React Nactive Dev Menu对话框。
        开发者可通过Element Inspector查看RN元素的盒子模型及样式。
      </Text>
    </View>
  </Pressable>
   );
 };
 export default App;
 const styles = StyleSheet.create({//创建样式
  container: {
    backgroundColor: 'white',
    height: '100%',
    justifyContent: 'center',
    padding: 20,
  },
  title:{
    textAlign: 'left',
    fontSize:40
  },
  content:{
    marginTop: 10,
    fontSize: 16,
    textAlign: 'left'
  }
 });
 