import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View,
} from 'react-native';
import {Rating} from 'react-native-elements';

import BotaoHome from '../components/BotaoHome.js';

const LivroLidoPag = ({navigation, route}) => {
  const livro = route.params;
  return (
    <SafeAreaView style={styles.container}>
      <BotaoHome navigation={navigation} />
      <View>
        <View style={styles.info}>
          <Text style={styles.tituloPagina}>Livros Empoeirados</Text>
          <Text style={styles.tituloLivro}>{livro.Livro.nomeLivro}</Text>
          <Text style={styles.autorLivro}>{livro.Livro.nomeAutor}</Text>
          <TextInput
            multiline
            numberOfLines={6}
            style={styles.comentarios}
            placeholder="Comentários"
            placeholderTextColor={'#818181'}
          />
          <Rating
            startingValue={0}
            type="custom"
            imageSize={65}
            fractions={2}
            style={{paddingTop: 50, paddingBottom: 20}}
            ratingBackgroundColor="#FFF"
            ratingColor="#D9AA63"
            tintColor="#F9F3EE"
          />
          <Text style={styles.tempoDeLeituraTitulo}>Tempo de leitura</Text>
          <Text style={styles.tempoDeLeitura}>15:00</Text>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'center'}}>
          <TouchableHighlight
            onPress={() => navigation.goBack()}
            style={styles.botaoCancelar}>
            <Text style={styles.textoBotao}>Cancelar</Text>
          </TouchableHighlight>
          <TouchableHighlight
            onPress={() => navigation.goBack()}
            style={styles.botaoCancelar}>
            <Text style={styles.textoBotao}>Salvar</Text>
          </TouchableHighlight>
        </View>
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
    width: '45%',
    alignSelf: 'center',
    borderRadius: 50,
    margin: 10,
  },
  textoBotao: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 22,
    fontFamily: 'Montserrat-SemiBold',
  },
  comentarios: {
    padding: 10,
    alignSelf: 'center',
    width: '90%',
    borderBottomWidth: 8,
    borderColor: '#D9AA63',
    fontSize: 20,
    color: '#000',
    fontFamily: 'Montserrat-SemiBold',
    marginTop: 40,
  },
  tempoDeLeituraTitulo: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 31,
    alignItems: 'center',
    textAlign: 'center',
    color: 'black',
    marginTop: 20,
  },
  tempoDeLeitura: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 50,
    alignItems: 'center',
    textAlign: 'center',
    color: 'black',
  },
});

export default LivroLidoPag;
