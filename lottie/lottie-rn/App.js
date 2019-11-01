import React from 'react';
import { Button, StyleSheet, SafeAreaView, View, Text, Animated, Easing } from 'react-native';
import LottieView from "lottie-react-native";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.animatedValue = new Animated.Value(0)
  }

  componentDidMount() {
    this.animation.play();
    this.animate();
  }

  resetAnimation = () => {
    this.animation.reset();
    this.animation.play();
  };

  animate() {
    this.animatedValue.setValue(0);

    Animated.timing(
      this.animatedValue, {
        toValue: 1,
        duration: 2000,
        ezasing: Easing.linear
      }
    ).start(() => this.animate())
  }

  openDoorAnimation() {
    this.animatedValue.setValue(0);

    //Animated.timing(

    //).start(() => this.openDoorAnimation());
  }

  render() {
    const movingMargin = this.animatedValue.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: [0, 200, 0]
    })

    return (
      <SafeAreaView style={styles.animationContainer}>
        <Animated.View 
          style={{ 
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: '-50%',
            zIndex: 2,
            width: '50%', 
            backgroundColor: 'rgba(69, 70, 71, 0.7)', 
            borderRightWidth: 20,
            borderColor: '#545758',
            marginLeft: movingMargin 
          }} 
        />
        {/*<Animated.View 
          style={{ 
            position: 'absolute',
            top: 0,
            bottom: 0,
            right: 0,
            zIndex: 2,
            width: '50%', 
            backgroundColor: 'rgba(69, 70, 71, 0.7)', 
            borderLeftWidth: 20,
            borderColor: '#545758',
            marginLeft: movingMargin 
          }} 
        />*/}

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
    backgroundColor: 'black',
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
