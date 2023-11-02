import React from 'react';
import { View, StyleSheet } from 'react-native';
import SoundPlayer from './SoundPlayer';

export default function App() {
  return (
    <View style={styles.container}>
      <SoundPlayer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
