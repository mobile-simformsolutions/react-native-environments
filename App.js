import React, {Fragment} from 'react';
import {StatusBar, StyleSheet, Text, View, NativeModules} from 'react-native';

const App = () => {
  const env = NativeModules.RNConfig.env;
  return (
    <Fragment>
      <StatusBar barStyle="dark-content" />
      <View style={styles.View}>
        <Text style={styles.basicStyle}>You are using</Text>
        <Text style={styles.sectionTitle}>{env}</Text>
      </View>
    </Fragment>
  );
};

const styles = StyleSheet.create({
  basicStyle: {
    fontSize: 14,
  },
  View: {
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  body: {
    backgroundColor: 'white',
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 36,
    fontWeight: '600',
    color: 'black',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: 'black',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
