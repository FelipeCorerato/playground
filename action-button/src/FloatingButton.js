import React from 'react';
import { StyleSheet, View, Text, Animated, TouchableWithoutFeedback } from 'react-native';
import { AntDesign, Entypo } from '@expo/vector-icons';

export default class FloatingButton extends React.Component {
  animation = new Animated.Value(0);

  toggleMenu = () => {
    const toValue = this.open ? 0: 1;

    Animated.spring(this.animation, {
      toValue,
      friction: 5
    }).start();

    this.open = !this.open;
  }

  render() {
    const primaryColor = this.props.primaryColor;
    const secondaryColor = this.props.secondaryColor;
    const primaryIcon = this.props.primaryIcon;
    const secondaryIcons = this.props.secondaryIcons;

    const pinStyle = {
      transform: [
        { scale: this.animation },
        {
          translateY: this.animation.interpolate({
            inputRange: [0, 1],
            outputRange: [0, -80]
          })
        }
      ]
    }

    const thumbStyle = {
      transform: [
        { scale: this.animation },
        {
          translateY: this.animation.interpolate({
            inputRange: [0, 1],
            outputRange: [0, -140]
          })
        }
      ]
    }

    const heartStyle = {
      transform: [
        { scale: this.animation },
        {
          translateY: this.animation.interpolate({
            inputRange: [0, 1],
            outputRange: [0, -200]
          })
        }
      ]
    }

    const rotation = {
      transform: [{
        rotate: this.animation.interpolate({
          inputRange: [0, 1],
          outputRange: ['0deg', '45deg']
        })
      }]
    }

    const opacity = this.animation.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: [0, 0, 1]
    })

    return (
      <View style={[styles.container, this.props.style]}>
        {/* Botoes de dentro do ActionButton */}
        <TouchableWithoutFeedback>
          <Animated.View style={[
              styles.button, 
              styles.secondary, 
              heartStyle, 
              opacity,
              { backgroundColor: secondaryColor }
            ]}
          >
            <AntDesign name='hearto' size={20} color='#F02A4B' />
          </Animated.View>
        </TouchableWithoutFeedback>

        <TouchableWithoutFeedback>
          <Animated.View style={[
              styles.button, 
              styles.secondary, 
              thumbStyle, 
              opacity,
              { backgroundColor: secondaryColor }
            ]}
          >
            <Entypo name='thumbs-up' size={20} color='#F02A4B' />
          </Animated.View>
        </TouchableWithoutFeedback>

        <TouchableWithoutFeedback>
          <Animated.View style={[
              styles.button, 
              styles.secondary, 
              pinStyle, 
              opacity,
              { backgroundColor: secondaryColor }
            ]}
          >
            <Entypo name='location-pin' size={20} color='#F02A4B' />
          </Animated.View>
        </TouchableWithoutFeedback>

        {
          secondaryIcons.map((button, index) => {(
            <TouchableWithoutFeedback key={index}>
              <Animated.View style={[
                  styles.button, 
                  styles.secondary,  
                  opacity,
                  {
                    transform: [
                      { scale: this.animation },
                      {
                        translateY: this.animation.interpolate({
                          inputRange: [0, 1],
                          outputRange: [0, -80]
                        })
                      }
                    ]
                  },
                  { backgroundColor: secondaryColor }
                ]}
              >
                { button }
              </Animated.View>
            </TouchableWithoutFeedback>
          )})
        }

        {/* Botao principal */}
        <TouchableWithoutFeedback onPress={this.toggleMenu}>
          <Animated.View style={[
              styles.button, 
              styles.menu, 
              rotation,
              { backgroundColor: primaryColor }
            ]}
          >
            { primaryIcon }
          </Animated.View>
        </TouchableWithoutFeedback>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    position: 'absolute'
  },
  button: {
    position: 'absolute',
    width: 60,
    height: 60,
    borderRadius: 60 / 2,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#F02A4B',
    shadowOpacity: 0.3,
    shadowOffset: { height: 10 }
  },
  menu: {
    backgroundColor: '#F02A4B',
  },
  secondary: {
    width: 48,
    height: 48,
    borderRadius: 48 / 2,
    backgroundColor: '#FFF'
  }
});
