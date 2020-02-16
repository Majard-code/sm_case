import React, { useEffect } from 'react';
import {
  StyleSheet,
  ScrollView,
  Text,
} from 'react-native';
import { connect } from 'react-redux';
import { fetchAllAsteroids, selectAsteroidRun } from '../../store/asteroids/AsteroidsActions';
import Asteroid from './Asteroid';
import Preloader from '../preloader/Preloader';

const Asteroids = props => {

  const { data, fetchAllAsteroids, isFetching, currentElement, selectAsteroidRun } = props;

  useEffect(() => {
    if (!data) {
      fetchAllAsteroids();
    }
  }, [data, fetchAllAsteroids])

  if (isFetching) {
    return <Preloader />
  } else {
    return (
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.scrollView}>
        <Text style={styles.h1}>Астероиды, пролетавшие над Землей 1&nbsp;января&nbsp;2020&nbsp;года:</Text>
        {data.near_earth_objects['2020-01-01'].map(asteroid =>
          <Asteroid
            key={asteroid.id}
            asteroid={asteroid}
            currentElement={currentElement}
            selectAsteroidRun={selectAsteroidRun}
          />)}
      </ScrollView>
    );
  }
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: 'white',
  },
  h1: {
    marginVertical: 10,
    textAlign: "center",
    fontSize: 20,
    fontWeight: '700',
  },
});

export default connect(state => ({
  data: state.asteroids.data,
  isFetching: state.asteroids.isFetching,
  currentElement: state.asteroids.currentElement,
}), {
  fetchAllAsteroids,
  selectAsteroidRun,
})(Asteroids);
