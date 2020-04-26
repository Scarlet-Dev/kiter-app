import React, {useCallback, useEffect, useState} from 'react';
import { StyleSheet, Text, View, AppState } from 'react-native';

export default function App() {
  const [appState, setAppState] = useState(AppState.currentState);

  useEffect(() => {
    AppState.addEventListener("change", _handleAppStateChange);

    return () =>{
      AppState.removeEventListener('change', _handleAppStateChange);
    }
  })

  const _handleAppStateChange = (nextAppState: any) =>{
    if(appState.match(/inactive|background/) && nextAppState === 'active'){
      console.log('App has come to the foreground')
    }
    setAppState(nextAppState)
  };

  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
