
import * as React from 'react';
import { Text, View, StyleSheet, Pressable } from 'react-native';//注入组件
const App = () => {
  return (
    <Pressable onPress={() => {
      console.log("Hello World RN")
    }}>
      <View style={styles.container}>
        <Text style={styles.title}>
          Hello World ~ RN
        </Text>
        <Text style={styles.content}>
          这里是 RN 开发的页面, 用一个 Text 展示文案
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
  title: {
    textAlign: 'left',
    fontSize: 40
  },
  content: {
    marginTop: 10,
    fontSize: 16,
    textAlign: 'left'
  }
});
