import React from 'react';
import { Navigation } from "react-native-navigation";
import Asteroids from "./news/Asteroids";
import Info from "./news/Info";
import store from "../store/store";
import { Provider } from "react-redux";

Navigation.registerComponent('Asteroids', () => (props) => (
  <Provider store={store}>
    <Asteroids {...props} />
  </Provider>
), () => Asteroids);

Navigation.registerComponent(`Info`, () => (props) => (
  <Provider store={store}>
    <Info {...props} />
  </Provider>
), () => Info);

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      bottomTabs: {
        children: [{
          component: {
            name: 'Asteroids',
            options: {
              bottomTab: {
                text: 'Астероиды',
                icon: require('../imgs/img1.png'),
                testID: 'FIRST_TAB_BAR_BUTTON'
              }
            }
          }
        },
        {
          component: {
            name: 'Info',
            options: {
              bottomTab: {
                text: 'Инфо',
                icon: require('../imgs/img2.png'),
                testID: 'SECOND_TAB_BAR_BUTTON'
              }
            }
          }
        }]
      }
    }
  });
});