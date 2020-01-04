import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
import {FlatList} from 'react-native-gesture-handler';
const data = [
  {
    id: 1,
    pedido: 'MilkShake',
    estabelecimento: 'Sorvetin',
    valor: 20,
  },
  {
    id: 2,
    pedido: 'MilkShake',
    estabelecimento: 'Sorvetin',
    valor: 20,
  },
  {
    id: 3,
    pedido: 'MilkShake',
    estabelecimento: 'Sorvetin',
    valor: 20,
  },
  {
    id: 4,
    pedido: 'MilkShake',
    estabelecimento: 'Sorvetin',
    valor: 20,
  },
  {
    id: 5,
    pedido: 'MilkShake',
    estabelecimento: 'Sorvetin',
    valor: 20,
  },
];
export default function Pedidos() {
  return (
    <View style={styles.container}>
      <FlatList
        showsHorizontalScrollIndicator={false}
        data={data}
        keyExtractor={item => String(item.id)}
        renderItem={({item}) => (
          <View key={item.id} style={styles.containerPedido}>
            <Text style={styles.txtPedido}>Pedido : {item.pedido}</Text>
            <Text style={styles.txtPedido}>
              Estabelecimento : {item.estabelecimento}
            </Text>
            <Text style={styles.txtPedido}>Valor : {item.valor}</Text>
          </View>
        )}
      />
    </View>
  );
}
