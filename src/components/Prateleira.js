import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import Livro from './Livro';

const Prateleira = props => {
  let livros = [
    {
      key: 0,
      nomeLivro: 'É assim que acaba',
      categoria: 'Lendo',
      autor: 'João',
      TempoLeitura: '13:30',
      nota: 2,
      comentarios: 'livro ruim',
    },
    {
      key: 1,
      nomeLivro: 'Mentirosos',
      categoria: 'QueroLer',
      autor: 'Marcia',
      TempoLeitura: '10:30',
      nota: 4,
      comentarios: 'livro ótimo',
    },
    {
      key: 2,
      nomeLivro: 'Hamlet',
      categoria: 'Lido',
      autor: 'Maria',
      TempoLeitura: '09:30',
      nota: 5,
      comentarios: 'livro perfeito',
    },
    {
      key: 3,
      nomeLivro: 'Morro dos ventos Uivantes',
      categoria: 'Empoeirado',
      autor: 'Davi',
      TempoLeitura: '10:00',
      nota: 1,
      comentarios: 'odiei',
    },
  ];

  let livrosLendo = [];
  livros.map(item => {
    if (item.categoria === 'Lendo') {
      livrosLendo.push(item);
    }
  });

  let livrosQueroLer = [];
  livros.map(item => {
    if (item.categoria === 'QueroLer') {
      livrosQueroLer.push(item);
    }
  });

  let livrosLido = [];
  livros.map(item => {
    if (item.categoria === 'Lido') {
      livrosLido.push(item);
    }
  });

  let livrosEmpoeirados = [];
  livros.map(item => {
    if (item.categoria === 'Empoeirado') {
      livrosEmpoeirados.push(item);
    }
  });

  let livrosMostrar = [];

  if (props.nomePrateleira === 'Lendo') {
    livrosMostrar = livrosLendo;
  }
  if (props.nomePrateleira === 'QueroLer') {
    livrosMostrar = livrosQueroLer;
  }
  if (props.nomePrateleira === 'Lidos') {
    livrosMostrar = livrosLido;
  }
  if (props.nomePrateleira === 'Empoeirados') {
    livrosMostrar = livrosEmpoeirados;
  }

  return (
    <View style={styles.prateleira}>
      <Text style={styles.prateleiraTitle}>{props.nomePrateleira}</Text>
      <ScrollView horizontal={true}>
        {livrosMostrar.map(item => (
          <Livro Livro={item} navigation={props.navigation} key={item.key} />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  prateleira: {
    paddingTop: 20,
    paddingBottom: 20,
    backgroundColor: '#F9F3EE',
  },
  prateleiraTitle: {
    color: '#000',
    paddingLeft: 20,
    fontSize: 22,
    fontFamily: 'LibreCaslonText-Bold',
  },
});

export default Prateleira;
