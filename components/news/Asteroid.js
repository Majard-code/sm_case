import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

const Asteroid = props => {

  return (
    <View
      style={props.currentElement === props.asteroid.id ? styles.selectedView : styles.view}
      onStartShouldSetResponder={() => props.selectAsteroidRun(props.asteroid.id)}
    >
      <Text style={styles.text}>id: {props.asteroid.id}</Text>
      <Text style={styles.text}>  |  Имя: {props.asteroid.name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: 'white',
  },
  text: {
    fontSize: 20,
  },
  view: {
    flexDirection: 'row',
    padding: 20,
    marginVertical: 10,
    marginHorizontal: 20,
    borderRadius: 5,
    elevation: 2,
    backgroundColor: 'white',
  },
  selectedView: {
    flexDirection: 'row',
    padding: 20,
    marginVertical: 10,
    marginHorizontal: 20,
    borderRadius: 5,
    elevation: 2,
    backgroundColor: 'lightgray',
  },
});

export default Asteroid;
