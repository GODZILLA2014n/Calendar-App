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

import HomeScreen from "./screens/HomeScreen";
import inputscreen from './screens/inputscreen';
import outputscreen from './screens/outputscreen';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

export default class App extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <AppContainer />
      </View>
    );
  }
}

var switchContainer = createSwitchNavigator({
  HomeScreen: HomeScreen,
  inputscreen: inputscreen,
  outputscreen: outputscreen,
});
const AppContainer = createAppContainer(switchContainer);
