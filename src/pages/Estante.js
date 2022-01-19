import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import {Icon} from 'react-native-elements';

import Prateleira from '../components/Prateleira.js';
import BotaoHome from '../components/BotaoHome.js';

import {useLivros} from '../livrosProvider';

const Estante = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <BotaoHome navigation={navigation} />
      <ScrollView style={styles.scrollView}>
        <View style={styles.estante}>
          <Prateleira nomePrateleira="Lendo" navigation={navigation} />
          <Prateleira nomePrateleira="QueroLer" navigation={navigation} />
          <Prateleira nomePrateleira="Lidos" navigation={navigation} />
          <Prateleira nomePrateleira="Empoeirados" navigation={navigation} />
        </View>
      </ScrollView>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('NovoLivro')}>
        <Icon name="add" color="white" size={50} />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F3EE',
  },
  scrollView: {
    flex: 1,
    height: 7000,
    flexDirection: 'column',
    marginHorizontal: 0,
    padding: 0,
  },
  estante: {
    flex: 1,
    flexDirection: 'column',
  },
  prateleira: {
    paddingTop: 20,
    backgroundColor: 'green',
  },
  prateleiraTitle: {
    paddingLeft: 20,
    fontSize: 22,
    fontFamily: 'LibreCaslonText-Bold',
  },
  appName: {
    color: '#2C1810',
    fontSize: 60,
    textAlign: 'center',
    fontFamily: 'Montserrat-SemiBold',
    width: '100%',
    borderColor: 'black',
    borderWidth: 2,
  },
  button: {
    position: 'absolute',
    bottom: '10%',
    right: '10%',
    alignItems: 'center',
    justifyContent: 'center',
    width: 85,
    height: 85,
    backgroundColor: '#2B1811',
    borderRadius: 50,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    elevation: 10,
  },
});

export default Estante;
