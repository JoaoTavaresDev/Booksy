import React, {useEffect, useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import Livro from './Livro';

import AsyncStorage from '@react-native-async-storage/async-storage';

const Prateleira = props => {
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
      nomeLivro: 'É assim que acaba',
      categoria: 'Lendo',
      nomeAutor: 'Emily Brontë',
      tempoLeitura: '13:30',
      nota: 2,
      comentarios: 'livro ruim',
      paginasTotal: '200',
      paginaAtual: '50',
    },
  ]);

  const findLivros = async () => {
    const result = await AsyncStorage.getItem('livros');
    setlivros(result);
    if (result !== null) {
      setlivros([...JSON.parse(result)]);
    }
  };

  const storeData = async () => {
    try {
      const jsonValue = JSON.stringify([
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
          nomeLivro: 'É assim que acaba',
          categoria: 'Lendo',
          nomeAutor: 'Emily Brontë',
          tempoLeitura: '13:30',
          nota: 2,
          comentarios: 'livro ruim',
          paginasTotal: '200',
          paginaAtual: '50',
        },
      ]);
      await AsyncStorage.setItem('livros', jsonValue);
    } catch (e) {
      // saving error
    }
  };

  useEffect(() => {
    storeData().then(findLivros());
  });

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
