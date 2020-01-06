import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Alert} from 'react-native';
import {RadioButton} from 'react-native-paper';
import LottieView from 'lottie-react-native';
import InputSpinner from 'react-native-input-spinner';

import carrinho from '../../assets/animations/carrinho.json';

export default function Buy({navigation}) {
  const tamanhos = navigation.getParam('tamanhos');
  const tipos = navigation.getParam('tipos');

  const [tamanhoP, setTamanho] = useState('');
  const [tipoP, setTipo] = useState('');
  const [price, setPrice] = useState(0);
  const [valor, setValor] = useState(0);
  const [quantidade, setQuantidade] = useState(1);

  return (
    <View style={styles.container}>
      <Text>Escolha o tamanho</Text>
      {tamanhos.map(tamanho => (
        <View key={tamanho.tamanho} style={styles.optsContainer}>
          <RadioButton
            value={tamanho.tamanho}
            onPress={() => {
              setTamanho(tamanho.tamanho);
              setPrice(tamanho.price);
              setValor(tamanho.price * quantidade);
            }}
            status={tamanho.tamanho === tamanhoP ? 'checked' : 'unchecked'}
          />
          <Text>{tamanho.tamanho} </Text>
          <Text> R${tamanho.price}</Text>
        </View>
      ))}
      <Text>Escolha o Sabor</Text>
      {tipos.map(tipo => (
        <View key={tipo} style={styles.optsContainer}>
          <RadioButton
            value={tipo}
            onPress={() => {
              setTipo(tipo);
            }}
            status={tipo === tipoP ? 'checked' : 'unchecked'}
          />
          <Text>{tipo}</Text>
        </View>
      ))}
      <View style={styles.spinner}>
        <InputSpinner
          max={10}
          min={1}
          step={1}
          colorMax={'#f04048'}
          colorMin={'#40c5f4'}
          value={quantidade}
          onChange={num => {
            const valorTotal = price * num;
            setValor(valorTotal);
            setQuantidade(num);
          }}
        />
      </View>
      <TouchableOpacity
        style={tamanhoP && tipoP ? styles.buttonAdd : styles.buttonAddDesable}
        title="Adicionar carrinho"
        onPress={() =>
          tamanhoP && tipoP
            ? navigation.navigate('Menu', {
                carrinho: true,
                produto: {
                  tamanho: tamanhoP,
                  tipo: tipoP,
                  quantidade: quantidade,
                  total: valor,
                },
                valor,
              })
            : Alert.alert('Selecione Tamanho e tipo')
        }>
        <Text style={styles.txtCarrinho}>ADIC. CARRINHO </Text>
        <Text
          style={
            tamanhoP && tipoP ? styles.txtValorCarrinho : styles.txtCarrinho
          }>
          R${valor}
        </Text>
        <LottieView
          style={styles.carrinho}
          source={carrinho}
          resizeMode="contain"
          autoPlay
          loop
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  buttonAdd: {
    backgroundColor: '#D94A2F',
    flexDirection: 'row',
    justifyContent: 'space-around',
    height: 50,
    alignItems: 'center',
  },
  buttonAddDesable: {
    backgroundColor: '#f5f5f5',
    flexDirection: 'row',
    justifyContent: 'space-around',
    height: 50,
    alignItems: 'center',
  },
  optsContainer: {
    backgroundColor: '#f5f5f5',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  carrinho: {
    height: 50,
  },
  txtCarrinho: {
    fontWeight: 'bold',
    color: '#fff',
  },
  txtValorCarrinho: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#01DF3A',
    textShadowColor: '#111',
    textShadowRadius: 5,
  },
  spinner: {
    alignItems: 'center',
  },
});
