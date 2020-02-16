import React from 'react';
import {
  StyleSheet,
  ScrollView,
  Text,
  View,
  Linking,
} from 'react-native';
import { connect } from 'react-redux';
import { fetchAsteroidById } from '../../store/asteroid/AsteroidActions';
import { fetchAllAsteroids } from '../../store/asteroids/AsteroidsActions';
import Preloader from '../preloader/Preloader';

const Info = props => {
  const { currentElement, isFetching, data } = props;

  if (!currentElement) {
    return <Text style={styles.h1}>Астероид не выбран.</Text>
  } else {
    if (isFetching) {
      return <Preloader />
    } else {
      return (
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}
        >
          <View style={styles.view}>
            <Text style={styles.h1}>Астероид № {currentElement}:</Text>
          </View>
          <View style={styles.view}>
            <Text style={styles.text}>Имя: {data.name}</Text>
            <Text style={styles.text}>Абсолютная звездная величина: {data.absolute_magnitude_h}</Text>
            <Text style={styles.text}>Расчетный диаметр: </Text>
            <Text style={styles.text}>Километров: {data.estimated_diameter.kilometers.estimated_diameter_min} - {data.estimated_diameter.kilometers.estimated_diameter_max}</Text>
            <Text style={styles.text}>Метров: {data.estimated_diameter.meters.estimated_diameter_min} - {data.estimated_diameter.meters.estimated_diameter_max}</Text>
            <Text style={styles.text}>Миль: {data.estimated_diameter.miles.estimated_diameter_min} - {data.estimated_diameter.miles.estimated_diameter_max}</Text>
            <Text style={styles.text}>Футов: {data.estimated_diameter.feet.estimated_diameter_min} - {data.estimated_diameter.feet.estimated_diameter_max}</Text>
            <Text style={styles.text}>Орбитальный идентификатор: {data.orbital_data.orbit_id}</Text>
            <Text style={styles.text}>Дата определения орбиты: {data.orbital_data.orbit_determination_date}</Text>
            <Text style={styles.text}>Дата первого наблюдения: {data.orbital_data.first_observation_date}</Text>
            <Text style={styles.text}>Дата последнего наблюдения: {data.orbital_data.last_observation_date}</Text>
            <Text style={styles.text}>Наклон: {data.orbital_data.inclination}</Text>
            <Text style={styles.text}>Орбитальный период: {data.orbital_data.orbital_period}</Text>
            <Text style={styles.text}>Равноденствие: {data.orbital_data.equinox}</Text>
            <Text style={styles.text}>Орбитальный класс: {data.orbital_data.orbit_class.orbit_class_type}</Text>
          </View>
          <View style={styles.view}>
            <Text style={styles.text}>Личная страничка в NASA:</Text>
            <Text style={styles.url} onPress={() => Linking.openURL(data.nasa_jpl_url)}>{data.nasa_jpl_url}</Text>
          </View>
          <View style={styles.view}>
            {data.is_potentially_hazardous_asteroid ?
              <Text style={styles.red}>Мог уничтожить всё живое на планете!!!</Text>
              :
              <Text style={styles.green}>Опасности не представлял.</Text>}
          </View>
        </ScrollView>
      );
    }
  }
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: 'lightgray',
  },
  h1: {
    fontSize: 20,
    fontWeight: '700',
  },
  text: {
    marginVertical: 10,
    fontSize: 20,
  },
  red: {
    color: 'red',
    fontSize: 20,
    fontWeight: '700',
  },
  green: {
    color: 'green',
    fontSize: 20,
    fontWeight: '700',
  },
  url: {
    color: 'blue',
    fontSize: 20,
  },
  view: {
    marginTop: 10,
    padding: 20,
    elevation: 5,
    backgroundColor: 'white',
  },
});

export default connect(state => ({
  isFetching: state.asteroid.isFetching,
  currentElement: state.asteroids.currentElement,
  data: state.asteroid.data,
}), {
  fetchAsteroidById,
  fetchAllAsteroids,
})(Info);
