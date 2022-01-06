import React from 'react';
import {StyleSheet, Text, Pressable, View} from 'react-native';

const Livro = props => {
  const livroPressHandler = () => {
    if (props.Livro.categoria === 'Lendo') {
      props.navigation.navigate('LerLivro');
    }
    if (props.Livro.categoria === 'QueroLer') {
      props.navigation.navigate('ListaDeDesejos');
    }
    if (props.Livro.categoria === 'Lido') {
      props.navigation.navigate('LivroLidoPag');
    }
    if (props.Livro.categoria === 'Empoeirado') {
      props.navigation.navigate('TirarEmpoeirados');
    }
  };

  return (
    <Pressable style={styles.book} onPress={() => livroPressHandler()}>
      <Text style={styles.bookName}>{props.Livro.nomeLivro}</Text>
    </Pressable>
  );
};

export default Livro;

const styles = StyleSheet.create({
  book: {
    backgroundColor: '#F2E5D0',
    height: 270,
    width: 170,
    margin: 30,
    padding: 10,
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.53,
    shadowRadius: 13.97,

    elevation: 21,
  },
  bookName: {
    color: 'black',
    fontFamily: 'LibreCaslonText-Regular',
    fontSize: 22,
  },
});
