import React, { Component, StyleSheet, Text, View } from 'react-native';

class Main extends Component {
  render() {
    return (
      <View style={styles.container}>

        <Greet person="Helena" />

        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>

        <ReloadText />

      </View>
    );
  }
}

function Greet(props) {

  return (
    <Text style={styles.welcome}>
      Welcome to React Native {props.person}!
    </Text>
  )
}

function ReloadText() {
  return (
    <Text style={styles.instructions}>
      Press Cmd+R to reload,{'\n'}
      Cmd+D or shake for dev menu
    </Text>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  text: {
    color: 'black',
    textAlign: 'center',
    fontSize: 20,
    margin: 10
  }
});

export default Main
