import React from 'react';
import { Button, StyleSheet, SafeAreaView, View, Text } from 'react-native';
import LottieView from "lottie-react-native";

export default class App extends React.Component {
  componentDidMount() {
    this.animation.play();
  }

  resetAnimation = () => {
    this.animation.reset();
    this.animation.play();
  };

  render() {
    return (
      <SafeAreaView style={styles.animationContainer}>
        <Text>R.E.I</Text>
        <LottieView
          ref={animation => {
            this.animation = animation;
          }}
          style={{
            width: 400,
            height: 400,
            backgroundColor: '#fff',
          }}
          source={require('./assets/bus.json')}
        />

        <View style={styles.buttonContainer} />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  animationContainer: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  buttonContainer: {
    backgroundColor: '#8AC348',
    width: '100%',
    paddingTop: 20,
    flex: 2
  },
});
