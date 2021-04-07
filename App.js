import React, { Component } from 'react';
import Message from './componentes/message/Message';
import Body from './componentes/body/Body';
import { StyleSheet, 
  Text, 
  View, 
  TouchableOpacity, 
  Image,
  TextInput } from 'react-native';

const provincias = [
  {
    id:1,
    name: 'Arequipa',
  },
  {
    id:2,
    name: 'Puno',
  },
  {
    id:3,
    name: 'Cuzco',
  }
];

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textValue: "",
      count: 0,
    };
  }

  changeTextInput = text => {
    console.log(text)
    this.setState({textValue: text});
  };
  


  render() {
    return(
      <View style = {styles.container}>

        <Message style={styles.mes}/>        
        <View style={styles.text}>
          <Text style={styles.text}>Hola Jose Cancino Ingrese su edad</Text>
        </View> 
        
        <TextInput
          style = {{height: 40, borderColor: 'gray', borderWidth:1, width: 150, textAlign: 'center'}}
          onChangeText = {text => this.changeTextInput(text)}
          value = {this.state.textValue}
        /> 
        <Body textBody={'TEXTO EN BODY'} onBodyPress={this.onPress}/>

        <View style={[styles.countContainer]}>
          <Text style={[styles.countText]}>{this.state.count}</Text>
        </View>

        {provincias.map(item => (
           <View>
             <Text>{item.name}</Text>
           </View>    
        ))}
      </View> 

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  
  text: {
    fontSize: 45,
    color: 'blue',
    textAlign: 'center'
  },

  textb: {
    color: 'white',
    
  },
  
  button: {
    top: 10,
    color: 'white',
    borderColor: 'black',
    alignItems: 'center',
    backgroundColor: 'blue',
    padding: 10,
  },
  countContainer: {
    alignItems: 'center',
    padding: 10,
  },
  countText: {
    color: 'red',
  },   

  img:{
    maxWidth: 400,
    maxHeight: 400,
  },
});
