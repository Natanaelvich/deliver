import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Text, Button} from 'react-native';
import {connect} from 'react-redux';

function Carrinho({navigation, produto, dispatch}) {
  const valor = navigation.getParam('valorTotal');

  const [produtos, setProdutos] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setProdutos(produto);
    setTotal(produto.reduce((a, x) => a + x.total, 0));
  }, [produto]);

  function deleteOnCarrinho(prodCurrent) {
    const index = produto.indexOf(prodCurrent);
    if (index > -1) {
      console.log(produto.splice(index, 1));
    }
    return {
      type: 'DELETE_ON_CARRINHO',
      data: produto.splice(index, 1),
    };
  }

  return (
    <View style={styles.container}>
      <Text>Carrinho</Text>
      <View>
        {produtos.map((produt, index) => (
          <View key={index} style={styles.contProduct}>
            <Text>{produt.tipo}-</Text>
            <Text>{produt.tamanho} : </Text>
            <Text>x{produt.quantidade} </Text>
            <Text>R$ {produt.total}</Text>
            <Button
              title={'remove'}
              onPress={() => {
                dispatch(deleteOnCarrinho(produt));
                console.log(produt);
              }}
            />
          </View>
        ))}
      </View>
      <Text>Total : R${total}</Text>
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

const mapStateToProps = state => {
  const {CARRINHO} = state;
  return {
    produto: CARRINHO,
  };
};
export default connect(mapStateToProps)(Carrinho);
