import React, { useState } from 'react';
import { ScrollView } from 'react-native';
import { DefaultTheme, Provider as PaperProvider, Appbar, Card } from 'react-native-paper';

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: '#1E90FF',
    accent: '#f1c40f',
  },
};

function Lojas({ navigation }) {
  return (
    <PaperProvider theme={theme}>
      <Appbar.Header>
        <Appbar.BackAction onPress={() => { navigation.navigate('Home') }} />
        <Appbar.Content title="Lojas" />
      </Appbar.Header>
      <ScrollView>
      <Card>
        <Card.Cover source={{ uri: 'https://images.unsplash.com/photo-1625426078245-6911839409dd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80'}}/>
        <Card.Title title="Brasília" subtitle="Endereço"/>
      </Card>
      <Card>
        <Card.Cover source={{ uri: 'https://images.unsplash.com/photo-1523214496-759e60a282d6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'}}/>
        <Card.Title title="São Paulo" subtitle="Endereço"/>
      </Card>
      <Card>
        <Card.Cover source={{ uri: 'https://images.unsplash.com/photo-1577039508937-99c3b639ba77?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80'}}/>
        <Card.Title title="Recife" subtitle="Endereço"/>
      </Card>
      </ScrollView>
    </PaperProvider>
  );
}

export default Lojas;