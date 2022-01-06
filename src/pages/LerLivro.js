import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View,
} from 'react-native';
import {Icon} from 'react-native-elements/dist/icons/Icon';

import ProgressBar from 'react-native-progress/Bar';
import moment from 'moment';
import 'moment/locale/pt-br';
import BotaoHome from '../components/BotaoHome.js';

const LerLivro = ({navigation}) => {
  const [horarioAtivo, setHorarioAtivo] = useState(false);
  const [progressoLivro, setProgressoLivro] = useState(0);
  const [estadoBotaoLeitura, setEstadoBotaoLeitura] = useState(1);
  const [paginasAtuais, setpaginasAtuais] = useState('');
  const [comecoLeitura, setComecoLeitura] = useState();
  const [fimLeitura, setFimLeitura] = useState();
  const [numeroPressTempoLeitura, setNumeroPressTempoLeitura] = useState(0);
  const [tempoDeLeituraParcial, setTempoDeLeituraParcial] = useState('00:00');
  const [tempoDeLeituraTotal, setTempoDeLeituraTotal] = useState('00:00');

  const numeroPaginasLivro = 200;

  const atualizarBarraProgresso = texto => {
    console.log(paginasAtuais);
    setProgressoLivro(texto / numeroPaginasLivro);
    setpaginasAtuais(texto);
  };

  const mudarEstadoLeitura = () => {
    if (numeroPressTempoLeitura === 0) {
      setComecoLeitura(new moment().format('HH:mm'));
      setHorarioAtivo(!horarioAtivo);
      setNumeroPressTempoLeitura(1);
      setEstadoBotaoLeitura(2);
    }
    if (numeroPressTempoLeitura === 1) {
      setFimLeitura(new moment().format('HH:mm'));
      setNumeroPressTempoLeitura(2);
      setEstadoBotaoLeitura(3);
    }
    if (numeroPressTempoLeitura === 2) {
      setComecoLeitura('');
      setFimLeitura('');
      setHorarioAtivo(!horarioAtivo);
      setNumeroPressTempoLeitura(0);
      setEstadoBotaoLeitura(1);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <BotaoHome navigation={navigation} />
      <View>
        <View style={styles.info}>
          <Text style={styles.tituloPagina}>Livros Empoeirados</Text>
          <Text style={styles.tituloLivro}>Morro dos ventos uivantes</Text>
          <Text style={styles.autorLivro}>Emily Brontë</Text>
          <ProgressBar
            progress={progressoLivro}
            width={null}
            color="#DAAA63"
            borderWidth={0}
            unfilledColor="#C4C4C4"
            height={20}
            borderRadius={30}
            style={styles.barraProgresso}
          />
          <View
            style={{
              flexDirection: 'row',
              width: '90%',
              alignSelf: 'center',
              marginBottom: 30,
            }}>
            <Text style={styles.paginaAtual}>Página atual:</Text>
            <TextInput
              numberOfLines={1}
              style={styles.atributosLivro}
              placeholder="0"
              placeholderTextColor={'#818181'}
              keyboardType="number-pad"
              onChangeText={texto => atualizarBarraProgresso(texto)}
            />
          </View>
          <View>
            <Text
              style={[
                styles.horario,
                horarioAtivo === true ? {display: 'none'} : {display: 'flex'},
              ]}>
              {tempoDeLeituraTotal}
            </Text>
            <View
              style={[
                {
                  flexDirection: 'row',
                  alignSelf: 'center',
                  alignItems: 'center',
                },
                horarioAtivo === true ? {display: 'flex'} : {display: 'none'},
              ]}>
              <Text style={styles.horario}>{comecoLeitura}</Text>
              <Icon name="arrow-right-alt" color="black" size={50} />
              <Text style={styles.horario}>{fimLeitura}</Text>
            </View>
            <TouchableHighlight
              style={styles.botaoComecarALer}
              onPress={() => mudarEstadoLeitura()}>
              <Text style={styles.textoBotao}>
                {estadoBotaoLeitura === 1
                  ? 'Marcar começo da leitura'
                  : estadoBotaoLeitura === 2
                  ? 'Marcar final da leitura'
                  : 'Ver resultados'}
              </Text>
            </TouchableHighlight>
            <TouchableHighlight
              style={styles.botaoAcabarLivro}
              onPress={() => navigation.goBack()}>
              <Text style={styles.textoBotao}>Acabei o livro!!</Text>
            </TouchableHighlight>
          </View>
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
  paginaAtual: {
    color: '#000',
    flex: 2,
    fontSize: 30,
    marginTop: 10,
    fontFamily: 'Montserrat-SemiBold',
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
  botaoAcabarLivro: {
    backgroundColor: '#DAAA63',
    fontSize: 22,
    fontFamily: 'LibreCaslonText-Bold',
    alignItems: 'center',
    justifyContent: 'center',
    height: 100,
    width: '90%',
    alignSelf: 'center',
    borderRadius: 45,
    marginTop: 60,
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
  barraProgresso: {
    margin: 20,
  },
  atributosLivro: {
    flex: 1.5,
    borderBottomWidth: 4,
    borderColor: '#D9AA63',
    fontSize: 26,
    color: '#000',
    fontFamily: 'Montserrat-SemiBold',
  },
  horario: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 50,
    alignItems: 'center',
    textAlign: 'center',
    color: 'black',
    paddingHorizontal: 20,
  },
});

export default LerLivro;
