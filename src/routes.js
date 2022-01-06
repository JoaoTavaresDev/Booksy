import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';

import Estante from './pages/Estante';
import LerLivro from './pages/LerLivro';
import ListaDeDesejos from './pages/ListaDeDesejos';
import LivroLidoPag from './pages/LivroLidoPag';
import NovoLivro from './pages/NovoLivro';
import TirarEmpoeirados from './pages/TirarEmpoeirados';

const Stack = createNativeStackNavigator();

function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Estante"
          component={Estante}
          options={{header: () => null}}
        />
        <Stack.Screen
          name="LerLivro"
          component={LerLivro}
          options={{header: () => null}}
        />
        <Stack.Screen
          name="ListaDeDesejos"
          component={ListaDeDesejos}
          options={{header: () => null}}
        />
        <Stack.Screen
          name="LivroLidoPag"
          component={LivroLidoPag}
          options={{header: () => null}}
        />
        <Stack.Screen
          name="NovoLivro"
          component={NovoLivro}
          options={{header: () => null}}
        />
        <Stack.Screen
          name="TirarEmpoeirados"
          component={TirarEmpoeirados}
          options={{header: () => null}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
