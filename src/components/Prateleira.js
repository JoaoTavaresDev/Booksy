import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import Livro from './Livro';

const Prateleira = props => {
  let livrosLendo = [];
  props.livros.map(item => {
    if (item.categoria === 'Lendo') {
      livrosLendo.push(item);
    }
  });

  let livrosQueroLer = [];
  props.livros.map(item => {
    if (item.categoria === 'QueroLer') {
      livrosQueroLer.push(item);
    }
  });

  let livrosLido = [];
  props.livros.map(item => {
    if (item.categoria === 'Lido') {
      livrosLido.push(item);
    }
  });

  let livrosEmpoeirados = [];
  props.livros.map(item => {
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
