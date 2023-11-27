import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
} from 'react-native';
import { Header } from 'react-native-elements';
//import db from '../config';
import {
  TextAnimationFadeIn,
  TextAnimationZoom,
  TextAnimationRain,
  TextAnimationSlideDown,
  TextAnimationSlideUp,
  TextAnimationSlideLeft,
  TextAnimationSlideRight,
  TextAnimationShake,
  TextAnimationReverse,
  TextAnimationDeZoom,
} from 'react-native-text-effects';
export default class inputscreen extends Component {
  constructor() {
    super();
    this.state = {
      text: '',

      text1: '',
      text2: '',
      text3: '',
      text4: '',
      text5: '',
      text6: '',
      text7: '',
    };
  }
  submitButton = async () => {
    this.setState({ text: '' });
    this.setState({ text2: '' });
    this.setState({ text3: '' });
    this.setState({ text4: '' });
    this.setState({ text5: '' });
    this.setState({ text6: '' });
    this.setState({ text7: '' });
  };
  saveButton = async (
    text,
    text1,
    text2,
    text3,
    text4,
    text5,
    text6,
    text7
  ) => {
    this.props.navigation.navigate('outputscreen', { text: text });
    this.props.navigation.navigate('outputscreen', { text1: text1 });
    this.props.navigation.navigate('outputscreen', { text2: text2 });
    this.props.navigation.navigate('outputscreen', { text3: text3 });
    this.props.navigation.navigate('outputscreen', { text4: text4 });
    this.props.navigation.navigate('outputscreen', { text5: text5 });
    this.props.navigation.navigate('outputscreen', { text6: text6 });
    this.props.navigation.navigate('outputscreen', { text7: text7 });
  };

  render() {
    //var { text, text1, text2, text3, text4, text5, text6, text7 } = this.state;
    return (
      <View style={styles.container}>
        <Header
          backgroundColor={'purple'}
          centerComponent={{
            text: 'Calendar',
            style: { color: '#fff', fontSize: 20 },
          }}
        />

        <TextInput
          placeholder="FROM AND TO"
          placeholderTextColor="purple"
          style={styles.inputBox8}
          onChangeText={(text8) => {
            this.setState({ text8: text8 });
          }}
          value={this.state.text8}
        />

        <Image
          source={require('../assets/th.jpeg')}
          style={styles.imageIcon}
        />
    


<TextInput
placeholder='MONDAY'
placeholderTextColor='black'
style={styles.inputBox}
onChangeText={text =>{
  this.setState({text:text});
}}
value={this.state.text}
/>


<TextInput
placeholder="TUESDAY"
placeholderTextColor='black'
style={styles.inputBox1}
onChangeText={text1 =>{
  this.setState({text1:text1});
}}
value={this.state.text1}
/>

<TextInput
placeholder="WEDNESDAY"
placeholderTextColor="black"
style={styles.inputBox2}
onChangeText={text2=>{
  this.setState({text2:text2});
}}
value={this.state.text2}
/>

<TextInput
placeholder="THURSDAY"
placeholderTextColor="black"
style={styles.inputBox3}
onChangeText={text3=>{
  this.setState({text3:text3});
}}
value={this.state.text3}
/>

<TextInput
placeholder="THURSDAY"
placeholderTextColor="black"
style={styles.inputBox4}
onChangeText={text4=>{
  this.setState({text4:text4});
}}
value={this.state.text4}
/>

<TextInput
placeholder="FRIDAY"
placeholderTextColor="black"
style={styles.inputBox5}
onChangeText={text5=>{
  this.setState({text5:text5});
}}
value={this.state.text5}
/>

<TextInput
placeholder="SATURDAY"
placeholderTextColor="black"
style={styles.inputBox6}
onChangeText={text6=>{
  this.setState({text6:text6});
}}
value={this.state.text6}
/>

<TextInput
placeholder="SUNDAY"
placeholderTextColor="black"
style={styles.inputBox7}
onChangeText={text7=>{
  this.setState({text7:text7});
}}
value={this.state.text7}
/>

<TouchableOpacity
style={styles.goButton} onPress={()=>this.submitButton()}>

<Text style={styles.buttonText}>GO</Text>
</TouchableOpacity>



<TouchableOpacity
style={styles.submitButton} onPress={()=>this.saveButton
(this.state.text,this.state.text1,this.state.text2,this.state.text3,this.state.text4,)}>

<Text style={styles.buttonText}>SAVE</Text>
</TouchableOpacity>


</View>
    );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
imageIcon:{
  margin:5,
  fontSize:18,
  fontWeight:"bold",
  textAlign:"center",
},
imageIcon:{
  width:50,
  height:60,
  marginLeft:185,
},
inputBox:{
  marginLeft:-260,
  marginTop:22,
  width:"150%",
  alignSelf:"center",
  height:40,
  textAlign:"center",
  outline:"none",
  borderWidth:1
},
inputBox1:{
  marginLeft:-275,
  marginTop:22,
  width:"155%",
  alignSelf:"center",
  height:40,
  textAlign:"center",
  outline:"none",
  borderWidth:1
},
inputBox2:{
  marginLeft:-250,
  marginTop:22,
  width:"150%",
  alignSelf:"center",
  height:40,
  textAlign:"center",
  outline:"none",
  borderWidth:1
},

inputBox3:{
  marginLeft:-255,
  marginTop:22,
  width:"152%",
  alignSelf:"center",
  outline:"none",
  borderWidth:1
},

inputBox4:{
  marginLeft:-285,
  marginTop:22,
  width:"163%",
  alignSelf:"center",
  height:40,
  textAlign:"center",
  outline:"none",
  borderWidth:1
},

inputBox5:{
  marginLeft:-270,
  marginTop:22,
  width:"160%",
  alignSelf:"center",
  height:40,
  textAlign:"center",
  outline:"none",
  borderWidth:1
},

inputBox6:{
  marginLeft:-275,
  marginTop:22,
  width:"162%",
  alignSelf:"center",
  height:40,
  textAlign:"center",
  outline:"none",
  borderWidth:1
},

inputBox7:{
  marginLeft:-2,
  marginTop:40,
  width:"200%",
alignSelf:"center",
height:40,
textAlign:"center",
outline:"none",
borderWidth:2
},

imageIcon1:{
  width:30,
  height:30,
  marginLeft:-25,
  marginLeft:110
},

imageIcon2:{
width:30,
height:30,
marginTop:-25,
marginLeft:110,
},

buttonText:{
textAlign:"center",
fontSize:25,
fonWeight:"bold",
marginLeft:100,
marginTop:20,
color:"black",
},

});