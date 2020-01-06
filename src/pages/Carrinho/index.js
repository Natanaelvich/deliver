import React, {useEffect} from 'react';
import {View, StyleSheet, Text} from 'react-native';

export default function Carrinho({navigation}) {
  const produto = navigation.getParam('produtos');
  const valor = navigation.getParam('valorTotal');

  useEffect(() => {
    console.log(produto);
    console.log(valor);
  }, [produto, valor]);

  return (
    <View style={styles.container}>
      <Text>Carrinho</Text>
      <View>
        {produto.map((produt, index) => (
          <View key={index} style={styles.contProduct}>
            <Text>{produt.tipo}-</Text>
            <Text>{produt.tamanho} : </Text>
            <Text>x{produt.quantidade} </Text>
            <Text>R$ {produt.total}</Text>
          </View>
        ))}
      </View>
      <Text>Total : R${valor}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  contProduct: {
    flexDirection: 'row',
    paddingVertical: 10,
    backgroundColor: '#f5f5f5',
    marginBottom: 10,
  },
});
