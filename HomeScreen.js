import React, { Component } from 'react';
import {
  Text,
  SafeAreaView,
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  TextInput,
} from 'react-native';
import { Header } from 'react-native-elements';

export default class HomeScreen extends Component {
  render() {
    return (
      //<SafeAreaProvider>
      <View style={styles.container}>
        <Header
          backgroundColor={'#9c8210'}
          centerComponent={{
            text: 'Calendar App',
            style: { color: '#fff', fontSize: 25 },
          }}
        />

        <Image
          source={require('../assets/Logo.png')}
          style={styles.imageIcon}
        />

        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate('inputscreen');
          }}
          style={styles.button}>
          <Text style={styles.buttonText}>click</Text>
        </TouchableOpacity>
      </View>
      //</SafeAreaProvider>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  imageIcon: {
    width: 350,
    height: 280,
    marginLeft: -10,
  },

  button: {
    width: '50%',
    height: '55',
    backgroundColor: 'green',
    alignSelf: 'center',
    padding: 10,
    margin: 10,
  },

  buttonText: {
    fontSize: 20,
    textAlign: 'center',
  },
});
