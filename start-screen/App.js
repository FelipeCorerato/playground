import React from 'react';
import { StyleSheet, View } from 'react-native';
import { AppLoading } from 'expo';
import { Asset } from 'expo-asset';

import LoginApp from './src/index';

function cacheImages(images) {
  return images.map(image => {
    // typeof image === 'string' ? Image.prefetch(image) : Asset.fromModule(image).downloadAsync();

    if (typeof image === 'string') {
      return Image.prefetch(image);
    } else {
      return Asset.fromModule(image).downloadAsync();
    }
  })
}

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isReady: false
    }
  }

  async _loadAssetsAsync() {
    const imageAssets = cacheImages([ require('./assets/bg.jpg') ]);
    await Promise.all([...imageAssets]);
  }
  
  render() {
    if (!this.state.isReady) {
      return (
        <AppLoading 
          startAsync={this._loadAssetsAsync}
          onFinish={() => this.setState({ isReady: true })}
          onError={console.warn}
        />
      );
    }

    return (
      <LoginApp bgUrl={require('./assets/bg.jpg')}>
        {/* <MainOptions />

        <SignInForm /> */}
      </LoginApp>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
