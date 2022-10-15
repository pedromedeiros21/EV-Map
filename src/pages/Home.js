import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { DefaultTheme, Provider as PaperProvider, Button, Appbar } from 'react-native-paper';
import Modal from "react-native-modal";

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: '#1E90FF',
    accent: '#f1c40f',
  },
};

function Home({ navigation }) {
  const [isModalVisibleBrasilia, setModalVisibleBrasilia] = useState(false);
  const [isModalVisibleSaoPaulo, setModalVisibleSaoPaulo] = useState(false);
  const [isModalVisibleMaceio, setModalVisibleMaceio] = useState(false);
  const [isModalVisibleFlorianopolis, setModalVisibleFlorianopolis] = useState(false);
  const [isModalVisibleAracaju, setModalVisibleAracaju] = useState(false);
  const [isModalVisibleRecife, setModalVisibleRecife] = useState(false);

  const toggleModalBrasilia = () => {
    setModalVisibleBrasilia(!isModalVisibleBrasilia);
  };

  const toggleModalSaoPaulo = () => {
    setModalVisibleSaoPaulo(!isModalVisibleSaoPaulo);
  };

  const toggleModalMaceio = () => {
    setModalVisibleMaceio(!isModalVisibleMaceio);
  };

  const toggleModalFlorianopolis = () => {
    setModalVisibleFlorianopolis(!isModalVisibleFlorianopolis);
  };

  const toggleModalAracaju = () => {
    setModalVisibleAracaju(!isModalVisibleAracaju);
  };

  const toggleModalRecife = () => {
    setModalVisibleRecife(!isModalVisibleRecife);
  };
  return (
    <PaperProvider theme={theme}>
      <Appbar.Header>
        <Appbar.Content title="Localcars: Pontos de recarga e lojas" />
        <Appbar.Action icon="store" />
        <Appbar.Action icon="car" />
        <Appbar.Action icon="lightning-bolt" />
      </Appbar.Header>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'space-evenly' }}>
        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Capitais</Text>
        <Button button icon="chair-rolling" mode="contained" onPress={toggleModalBrasilia}>Brasília</Button>
        <Modal isVisible={isModalVisibleBrasilia}>
          <Text style={{ fontWeight: 'bold', fontSize: 20, color: '#ffffff' }}>Há 3 pontos de carregamento: 'endereço'/'endereço'/'endereço'</Text>
          <Button mode="contained" onPress={toggleModalBrasilia}>Voltar</Button>
        </Modal>
        <Button icon="city-variant-outline" mode="contained" onPress={toggleModalSaoPaulo}>São Paulo</Button>
        <Modal isVisible={isModalVisibleSaoPaulo}>
          <Text style={{ fontWeight: 'bold', fontSize: 20, color: '#ffffff' }}>Há 2 pontos de carregamento: 'endereço'/'endereço'</Text>
          <Button mode="contained" onPress={toggleModalSaoPaulo}>Voltar</Button>
        </Modal>
        <Button icon="beach" mode="contained" onPress={toggleModalMaceio}>Maceió</Button>
        <Modal isVisible={isModalVisibleMaceio}>
          <Text style={{ fontWeight: 'bold', fontSize: 20, color: '#ffffff' }}>Há 1 pontos de carregamento: 'endereço'</Text>
          <Button mode="contained" onPress={toggleModalMaceio}>Voltar</Button>
        </Modal>
        <Button icon="island" mode="contained" onPress={toggleModalFlorianopolis}>Florianópolis</Button>
        <Modal isVisible={isModalVisibleFlorianopolis}>
          <Text style={{ fontWeight: 'bold', fontSize: 20, color: '#ffffff' }}>Há 3 pontos de carregamento: 'endereço'/'endereço'/'endereço'</Text>
          <Button mode="contained" onPress={toggleModalFlorianopolis}>Voltar</Button>
        </Modal>
        <Button icon="diving-helmet" mode="contained" onPress={toggleModalAracaju}>Aracaju</Button>
        <Modal isVisible={isModalVisibleAracaju}>
          <Text style={{ fontWeight: 'bold', fontSize: 20, color: '#ffffff' }}>Há 1 pontos de carregamento: 'endereço'</Text>
          <Button mode="contained" onPress={toggleModalAracaju}>Voltar</Button>
        </Modal>
        <Button icon="lighthouse" mode="contained" onPress={toggleModalRecife}>Recife</Button>
        <Modal isVisible={isModalVisibleRecife}>
          <Text style={{ fontWeight: 'bold', fontSize: 20, color: '#ffffff' }}>Há 4 pontos de carregamento: 'endereço'/'endereço'/'endereço'/'endereço'</Text>
          <Button mode="contained" onPress={toggleModalRecife}>Voltar</Button>
        </Modal>
        <Button icon="car" mode="contained" onPress={() => { navigation.navigate('Lojas') }}>Ir para Lojas</Button>
        <Text style={{ fontSize: 16, fontWeight: 'bold', paddingLeft: 30, paddingTop: 20 }}>Para encontrar uma Localcars próxima, veja sua localização</Text>
        <Button icon="map-marker-right" mode="contained" onPress={() => { navigation.navigate('Localizacao') }}>Ver sua localização</Button>
      </View>
    </PaperProvider>
  );
}

export default Home;