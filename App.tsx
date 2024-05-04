import React from 'react';

import {StatusBar} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import {ApplicationProvider} from '@ui-kitten/components';
import * as eva from '@eva-design/eva';
import {theme} from './theme';

import Navigation from './navigation';

function App(): React.JSX.Element {
  return (
    <ApplicationProvider {...eva} theme={theme}>
      <SafeAreaProvider>
        <Navigation />
        <StatusBar backgroundColor="#fff" barStyle={'dark-content'} />
      </SafeAreaProvider>
    </ApplicationProvider>
  );
}

export default App;
