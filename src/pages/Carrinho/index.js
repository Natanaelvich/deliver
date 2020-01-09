import React, {useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  Button,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {RadioButton} from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';
import LottieView from 'lottie-react-native';
import money from '../../assets/animations/money.json';
import creidtCard from '../../assets/animations/credit-card.json';

export default function Carrinho({navigation}) {
  const name = navigation.getParam('name');
  const produtos = useSelector(state => state.CARRINHO);
  const dispatch = useDispatch();
  const total = produtos.reduce((a, x) => a + x.total, 0);

  const [formaPag, setFormpag] = useState('');
  function deleteOnCarrinho(prodCurrent) {
    const data = produtos.filter(produt => produt !== prodCurrent);
    return {
      type: 'DELETE_ON_CARRINHO',
      data,
    };
  }

  useEffect(() => {
    if (produtos.length === 0) {
      navigation.goBack();
    }
  }, [navigation, produtos]);

  return (
    <View style={styles.container}>
      {/* area carrinho */}
      <Text>{name}</Text>
      <Text>Carrinho</Text>

      <View style={styles.areCarrinho}>
        <ScrollView style={styles.scroll}>
          <View style={styles.body}>
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
                  }}
                />
              </View>
            ))}
          </View>
        </ScrollView>
        <View style={styles.areaButtonAdd}>
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}>
            <Icon name="ios-add-circle" size={50} color="#D94A2F" />
          </TouchableOpacity>
        </View>
      </View>
      {/* escolha de pagamento */}
      <Text>Escolha forma de pagamento</Text>
      <View style={styles.areRadio}>
        <RadioButton
          value={formaPag}
          onPress={() => {
            setFormpag('Cartão de credito');
            console.log(formaPag);
          }}
          status={formaPag === 'Cartão de credito' ? 'checked' : 'unchecked'}
        />
        <RadioButton
          value={formaPag}
          onPress={() => {
            setFormpag('Dinheiro');
            console.log(formaPag);
          }}
          status={formaPag === 'Dinheiro' ? 'checked' : 'unchecked'}
        />
      </View>

      <Text>Total : R${total}</Text>
      <View style={styles.areaFormPagAnimeted}>
        {formaPag === 'Dinheiro' && formaPag.length > 0 ? (
          <LottieView
            style={styles.money}
            source={money}
            resizeMode="cover"
            autoPlay
          />
        ) : (
          <LottieView
            style={styles.credit}
            source={creidtCard}
            resizeMode="cover"
            autoPlay
          />
        )}
      </View>

      {/* footer */}
      {formaPag.length > 0 && (
        <View style={styles.footer}>
          <View style={styles.areaButtonFinsh}>
            <TouchableOpacity>
              <Text style={styles.txtFinishPedido}>Finalizar Pedido</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  body: {
    alignItems: 'center',
  },
  scroll: {
    height: 300,
  },
  areCarrinho: {
    borderWidth: 1,
    borderColor: '#999',
    padding: 20,
    borderRadius: 30,
    height: 300,
  },
  areaButtonAdd: {
    backgroundColor: '#f5f5f5',
    alignItems: 'flex-end',
  },
  contProduct: {
    flexDirection: 'row',
    paddingVertical: 10,
    backgroundColor: '#f5f5f5',
    marginBottom: 5,
  },
  areRadio: {
    flexDirection: 'row',
  },
  areaFormPagAnimeted: {
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: '#f5f5f5',
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  money: {
    height: 70,
    marginBottom: 130,
  },
  credit: {
    height: 90,
    marginBottom: 130,
  },
  footer: {
    flex: 1,
    justifyContent: 'flex-end',
    width: '100%',
  },
  areaButtonFinsh: {
    backgroundColor: 'orange',
    width: '100%',
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  txtFinishPedido: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
