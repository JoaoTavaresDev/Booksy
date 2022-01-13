import React, {useState} from 'react';
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

const Estante = ({navigation}) => {
  const [livros, setlivros] = useState([
    {
      key: 0,
      nomeLivro: 'É assim que acaba',
      categoria: 'Lendo',
      nomeAutor: 'Emily Brontë',
      tempoLeitura: '13:30',
      nota: 2,
      comentarios: 'livro ruim',
      paginasTotal: '200',
      paginaAtual: '50',
    },
    {
      key: 1,
      nomeLivro: 'Mentirosos',
      categoria: 'QueroLer',
      nomeAutor: 'Marcia',
      tempoLeitura: '10:30',
      nota: 4,
      comentarios: 'livro ótimo',
    },
    {
      key: 2,
      nomeLivro: 'Hamlet',
      categoria: 'Lido',
      nomeAutor: 'Maria',
      tempoLeitura: '09:30',
      nota: 5,
      comentarios: 'livro perfeito',
    },
    {
      key: 3,
      nomeLivro: 'Morro dos ventos Uivantes',
      categoria: 'Empoeirado',
      nomeAutor: 'Davi',
      tempoLeitura: '10:00',
      nota: 1,
      comentarios: 'odiei',
    },
  ]);

  return (
    <SafeAreaView style={styles.container}>
      <BotaoHome navigation={navigation} />
      <ScrollView style={styles.scrollView}>
        <View style={styles.estante}>
          <Prateleira
            nomePrateleira="Lendo"
            navigation={navigation}
            livros={livros}
          />
          <Prateleira
            nomePrateleira="QueroLer"
            navigation={navigation}
            livros={livros}
          />
          <Prateleira
            nomePrateleira="Lidos"
            navigation={navigation}
            livros={livros}
          />
          <Prateleira
            nomePrateleira="Empoeirados"
            navigation={navigation}
            livros={livros}
          />
        </View>
      </ScrollView>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('NovoLivro', {livros: livros})}>
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
