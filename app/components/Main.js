import React from 'react'
import { 
  Image,
  StyleSheet, 
  Text, 
  View,
  StatusBar,
  TextInput,
  TouchableHighlight,
  TouchableOpacity
} from 'react-native';



export default class Main extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text> Hello  world </Text>
      </View>
    )
  }
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'stretch',
      justifyContent: 'flex-start',
      paddingTop:20,
      backgroundColor:'#aaa'

    }
});

