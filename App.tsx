import React from 'react';
import {StatusBar} from 'react-native';
import Home from './src/home';
import {Loading} from './src/components/loading';

function App(): React.JSX.Element {
  let teste = true;

  return (
    <>
      <StatusBar barStyle="light-content" />
      {teste ? <Home /> : <Loading />}
    </>
  );
}

export default App;
