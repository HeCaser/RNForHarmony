
import * as React from 'react';
import { Text, View, StyleSheet, Pressable, Modal, TouchableOpacity, Alert } from 'react-native';//注入组件
const App = () => {

  const [msg, setMsg] = React.useState('-')
  return (
    <Pressable onPress={() => {
      console.log("Hello World RN")
    }}>
      <View style={styles.container}>
        <Text style={styles.title}>
          Hello World ~ RN
        </Text>
        <Text style={styles.content}>
          这里是 RN 开发的页面, 用一个 Text 展示文案11
        </Text>

        <Modal
        collapsable={false}
          visible>

          <TouchableOpacity style={{height:100,width:'300',backgroundColor:'red'}} onPress={() => {
            console.log(`hepan 点击了`)
            setMsg(new Date().getMilliseconds().toString())
          }}>
            <Text>点击+{msg}</Text>
          </TouchableOpacity>
        </Modal>
      </View>
    </Pressable>
  );
};
export default App;
const styles = StyleSheet.create({//创建样式
  container: {
    backgroundColor: 'gray',
    height: '95%',
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
