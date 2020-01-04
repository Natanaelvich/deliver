import React from 'react';
import {View, Text, Image, StatusBar} from 'react-native';

import styles from './styles';

export default function User() {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#D94A2F" barStyle="light-content" />
      <View style={styles.back} />
      <View style={styles.header}>
        <Image source={require('./Natanael.jpg')} style={styles.image} />
      </View>
      <Text style={styles.txtUser}>Natanael Lima</Text>
      <View style={styles.areaOpts}>
        <Text style={styles.txtOpts}>Opções</Text>
        <Text style={styles.txtOpts}>Termos de uso</Text>
        <Text style={styles.txtOpts}>Ajuda</Text>
        <Text style={styles.txtOpts}>Sair</Text>
      </View>
    </View>
  );
}
