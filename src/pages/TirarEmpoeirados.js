import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import BotaoHome from '../components/BotaoHome.js';

const TirarEmpoeirados = ({navigation, route}) => {
  const livro = route.params;
  return (
    <SafeAreaView style={styles.container}>
      <BotaoHome navigation={navigation} />
      <View>
        <View style={styles.info}>
          <Text style={styles.tituloPagina}>Livros Empoeirados</Text>
          <Text style={styles.tituloLivro}>{livro.Livro.nomeLivro}</Text>
          <Text style={styles.autorLivro}>{livro.Livro.nomeAutor}</Text>
          <TouchableOpacity
            style={styles.botaoComecarALer}
            onPress={() => navigation.goBack()}>
            <Text style={styles.textoBotao}>Começar a Ler</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={styles.botaoCancelar}
          onPress={() => navigation.goBack()}>
          <Text style={styles.textoBotao}>Cancelar</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2E5D0',
  },
  info: {
    backgroundColor: '#F9F3EE',
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    height: '85%',
  },
  appName: {
    backgroundColor: '#F9F3EE',
    color: '#2C1810',
    fontSize: 60,
    textAlign: 'center',
    fontFamily: 'Montserrat-SemiBold',
    width: '100%',
    borderColor: 'black',
    borderWidth: 2,
    textShadowColor: '#D9AA63',
    textShadowRadius: 40,
  },
  tituloPagina: {
    color: '#000',
    padding: 20,
    fontSize: 30,
    fontFamily: 'LibreCaslonText-Bold',
  },
  tituloLivro: {
    color: '#000',
    paddingLeft: 20,
    fontSize: 26,
    fontFamily: 'LibreCaslonText-Bold',
  },
  autorLivro: {
    color: '#000',
    paddingLeft: 20,
    paddingTop: 5,
    fontSize: 22,
    fontFamily: 'LibreCaslonText-Bold',
  },
  botaoComecarALer: {
    backgroundColor: '#2B1811',
    fontSize: 22,
    fontFamily: 'LibreCaslonText-Bold',
    alignItems: 'center',
    justifyContent: 'center',
    height: 60,
    width: '90%',
    alignSelf: 'center',
    borderRadius: 50,
    marginTop: 30,
  },
  botaoCancelar: {
    backgroundColor: '#2B1811',
    fontSize: 22,
    fontFamily: 'LibreCaslonText-Bold',
    alignItems: 'center',
    justifyContent: 'center',
    height: 60,
    width: '90%',
    alignSelf: 'center',
    borderRadius: 50,
    marginTop: 10,
  },
  textoBotao: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 22,
    fontFamily: 'Montserrat-SemiBold',
  },
});

export default TirarEmpoeirados;
