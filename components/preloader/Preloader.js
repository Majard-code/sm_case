import React from 'react';
import {
  StyleSheet,
  Image,
  View,
} from 'react-native';

const Preloader = () => {
  return (
    <View style={styles.view}>
      <Image style={styles.image} source={require('../../imgs/preloader.gif')} />
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    borderRadius: 5,
    elevation: 2,
    backgroundColor: 'white',
    fontSize: 150,
  },
  image: {
    width: 64,
    height: 64,
    marginVertical: 'auto',
  }
});

export default Preloader;
