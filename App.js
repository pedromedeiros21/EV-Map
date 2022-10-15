import 'react-native-gesture-handler';
import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, StatusBar } from 'react-native';

  /* Importamos os recursos necessarios para nossa navegação */
  import { NavigationContainer } from '@react-navigation/native';
  import { createStackNavigator } from '@react-navigation/stack';

  /* Importamos nossas páginas criadas para inserir dentro da navegação */
  import Home from './src/pages/Home';
  import Lojas from './src/pages/Lojas';
  import Localizacao from './src/pages/Localizacao';

  /* Criamos nosso navegador com a variavel Stack */
  const Stack = createStackNavigator();

  function App() {  
    return(
      /* Abre container da navegação */
      <NavigationContainer>
        {/* Insere a navegação Stack dentro container */}
        <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
        >
          {/*Insere as páginas dentro da navegação*/}
          <Stack.Screen name="Home" component={Home} 
          options={{ title: 'Localcars: Pontos de recarga e lojas',
          headerStyle: {backgroundColor: '#1371ff'},
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 20
          }
          }}/>
          <Stack.Screen name="Lojas" component={Lojas}
          options={{ title: 'Lojas',
          headerStyle: {backgroundColor: '#1371ff'},
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 20
          }
          }} />
           <Stack.Screen name="Localizacao" component={Localizacao}
          options={{ title: 'Localização',
          headerStyle: {backgroundColor: '#1371ff'},
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 20
          }
          }} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }

  export default App;
