import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, StatusBar } from 'react-native';
import * as Location from 'expo-location';
import { DefaultTheme, Provider as PaperProvider, Button, Appbar } from 'react-native-paper';

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: '#1E90FF',
    accent: '#f1c40f',
  },
};

export default function Localizacao({ navigation }) {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permissão para acessar a localização foi negada!');
      }
      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  });
  let text = 'Aguarde o GPS...';
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }
  return (
    <PaperProvider theme={theme}>
      <Appbar.Header>
        <Appbar.BackAction onPress={() => { navigation.navigate('Home') }} />
        <Appbar.Content title="Localização" />
      </Appbar.Header>
      <View style={styles.container}>
        <StatusBar hidden={true} />
        <Text>{text}</Text>
      </View>
    </PaperProvider>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});