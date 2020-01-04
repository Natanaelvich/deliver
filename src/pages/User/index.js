import React from 'react';
import {View, Text, Image, StatusBar} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import Icon2 from 'react-native-vector-icons/Entypo';
import Icon3 from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from './styles';
import {TouchableOpacity} from 'react-native-gesture-handler';

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
        <TouchableOpacity style={styles.buttonContato}>
          <Text style={styles.txtContato}>Alterar dados</Text>
          <Icon3 name="account-edit" size={32} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonContato}>
          <Text style={styles.txtContato}>Termos de uso</Text>
          <Icon3 name="format-align-center" size={32} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonContato}>
          <Text style={styles.txtContato}>Ajuda</Text>
          <Icon2 name="help-with-circle" size={32} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonContato}>
          <Text style={styles.txtContato}>Entre em contato</Text>
          <Icon name="message1" size={32} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  );
}
