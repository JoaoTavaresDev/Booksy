import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View,
} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import BotaoHome from '../components/BotaoHome.js';

const NovoLivro = ({navigation, route}) => {
  const [selectedLanguage, setSelectedLanguage] = useState();
  const [nomeLivro, setNomeLivro] = React.useState('');
  const [nomeAutor, setNomeAutor] = React.useState('');
  const [numeroPaginas, setNumeroPaginas] = React.useState('');

  const {livros} = route.params;
  console.log(livros[1]);

  const salvarLivro = () => {
    livros.push({
      nomeLivro: 'É assim que acaba',
      categoria: 'Lendo',
      nomeAutor: 'Emily Brontë',
      tempoLeitura: '13:30',
      nota: 2,
      comentarios: 'livro ruim',
      paginasTotal: '200',
      paginaAtual: '50',
    });
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      <BotaoHome navigation={navigation} />
      <View>
        <View style={styles.info}>
          <Text style={styles.tituloPagina}>Adicionar livro </Text>
          <TextInput
            multiline
            numberOfLines={1}
            style={styles.atributosLivro}
            placeholder="Título"
            placeholderTextColor={'#818181'}
            onChangeText={text => setNomeLivro(text)}
          />
          <TextInput
            multiline
            numberOfLines={1}
            style={styles.atributosLivro}
            placeholder="Autor"
            placeholderTextColor={'#818181'}
            onChangeText={text => setNomeAutor(text)}
          />
          <TextInput
            multiline
            numberOfLines={1}
            style={styles.atributosLivro}
            placeholder="Numero de Páginas"
            placeholderTextColor={'#818181'}
            onChangeText={text => setNumeroPaginas(text)}
          />
          <View style={styles.dropdown}>
            <Picker
              itemStyle={styles.dropdown}
              mode="dropdown"
              selectedValue={selectedLanguage}
              onValueChange={(itemValue, itemIndex) =>
                setSelectedLanguage(itemValue)
              }
              style={styles.dropdown}>
              <Picker.Item
                label="Ler"
                value="Ler"
                style={styles.dropdownItem}
              />
              <Picker.Item
                label="Lista de desejos"
                value="Quero Ler"
                style={styles.dropdownItem}
              />
              <Picker.Item
                label="Lidos"
                value="Lidos"
                style={styles.dropdownItem}
              />
            </Picker>
          </View>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'center'}}>
          <TouchableHighlight
            onPress={() => navigation.goBack()}
            style={styles.botaoCancelar}>
            <Text style={styles.textoBotao}>Cancelar</Text>
          </TouchableHighlight>
          <TouchableHighlight
            onPress={() => salvarLivro()}
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
  atributosLivro: {
    padding: 10,
    alignSelf: 'center',
    width: '90%',
    borderBottomWidth: 4,
    borderColor: '#D9AA63',
    fontSize: 20,
    color: '#000',
    fontFamily: 'Montserrat-SemiBold',
    marginTop: 40,
  },
  dropdown: {
    backgroundColor: '#FFF',
    color: '#818181',
    fontSize: 20,
    fontFamily: 'LibreCaslonText-Bold',
    alignItems: 'center',
    justifyContent: 'center',
    height: 60,
    width: '90%',
    alignSelf: 'center',
    borderRadius: 5,
    margin: 40,
  },
  dropdownItem: {
    backgroundColor: '#FFF',
    color: '#818181',
    fontSize: 20,
    fontFamily: 'LibreCaslonText-Bold',
    alignItems: 'center',
    justifyContent: 'center',
    height: 60,
    alignSelf: 'center',
    borderRadius: 5,
    margin: 10,
  },
});

export default NovoLivro;
