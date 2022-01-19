import React, {createContext, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useState, useContext} from 'react';

const LivroContext = createContext();
const LivroProvider = ({children}) => {
  const [livros, setLivros] = useState([
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
    setLivros(result);
    if (result !== null) {
      setLivros([...JSON.parse(result)]);
    }
  };

  useEffect(() => {
    findLivros();
  }, []);

  return (
    <LivroContext.Provider value={{livros, setLivros, findLivros}}>
      {children}
    </LivroContext.Provider>
  );
};
export const useLivros = () => useContext(LivroContext);

export default LivroProvider;
