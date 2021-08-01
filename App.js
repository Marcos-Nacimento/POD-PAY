import React from 'react';
import { Main } from './src/pages/Main';
import { StatusBar } from 'expo-status-bar';
import { useFonts, 
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
  Roboto_900Black,
  Roboto_300Light,
} from '@expo-google-fonts/roboto';
import { StripeProvider } from '@stripe/stripe-react-native';

import AppLoading from 'expo-app-loading';

export default function App() {
  let [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
    Roboto_900Black,
    Roboto_300Light,
  });

  if(!fontsLoaded) {
    return <AppLoading />
  };

  return (
    <StripeProvider
      publishableKey='pk_test_51HBvUZHKI3JpEpODZUkDuxqOJ0wxzymcJAdWKola9YxHYlPMAZxrLUfxr9B8lZ04t0XJ6xJHYwVJMBmqSh8E6xLJ00kzmqVxxg'
    >
      <StatusBar style='light'/>
      <Main />
    </StripeProvider>
  );
};