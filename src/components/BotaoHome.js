import React from 'react';
import {Pressable, StyleSheet, Text} from 'react-native';
import Svg from 'react-native-svg';

const BotaoHome = props => {
  return (
    <Pressable
      style={styles.appName}
      onPress={() => props.navigation.navigate('Estante')}>
      <Text style={styles.appNameText}>BOOKSY</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  appName: {
    backgroundColor: '#F9F3EE',
    width: '100%',
    borderColor: 'black',
    borderWidth: 2,
  },
  appNameText: {
    color: '#2C1810',
    fontSize: 60,
    textAlign: 'center',
    fontFamily: 'Montserrat-SemiBold',
    width: '100%',
    textShadowColor: '#D9AA63',
    textShadowRadius: 40,
  },
});

export default BotaoHome;
