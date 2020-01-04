import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  SectionList,
  TouchableOpacity,
  Image,
} from 'react-native';

import styles from '../styles';

const DATA = [
  {
    title: 'Hamburgues',
    data: [
      {
        id: 1,
        descricao: 'Hamburguer',
        ingredientes:
          'pao, ovo, baicon,pao, ovo, baicon, ovo, baicon, ovo, baicon',
        valor: '38,99 R$',
      },
      {
        id: 2,
        descricao: 'Hamburguer',
        ingredientes: 'pao, ovo, baicon',
        valor: '18,99 R$',
      },
      {
        id: 3,
        descricao: 'Hamburguer',
        ingredientes: 'pao, ovo, baicon',
        valor: '18,99 R$',
      },
      {
        id: 4,
        descricao: 'Hamburguer',
        ingredientes: 'pao, ovo, baicon',
        valor: '48,99 R$',
      },
      {
        id: 5,
        descricao: 'Hamburguer',
        ingredientes: 'pao, ovo, baicon',
        valor: '18,99 R$',
      },
    ],
  },
  {
    title: 'Salgados',
    data: [
      {
        id: 1,
        descricao: 'coxinha',
        ingredientes:
          'pao, ovo, baicon,pao, ovo, baicon, ovo, baicon, ovo, baicon',
        valor: '38,99 R$',
      },
      {
        id: 2,
        descricao: 'pastel',
        ingredientes: 'pao, ovo, baicon',
        valor: '18,99 R$',
      },
      {
        id: 3,
        descricao: 'pão de queijo',
        ingredientes: 'pao, ovo, baicon',
        valor: '18,99 R$',
      },
    ],
  },
];

function Item({title}) {
  return (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

export default function App({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <SectionList
        sections={DATA}
        keyExtractor={(item, index) => item + index}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Buy', {
                item,
                name: navigation.getParam('name'),
              });
            }}>
            <View ky={item.id} style={styles.productContainer}>
              <View style={styles.contImage}>
                <Image
                  style={styles.avatarProduc}
                  source={{
                    uri:
                      'http://lanchonetezerograu.com.br/wp-content/uploads/2018/01/Cheese-Bacon.png',
                  }}
                />
              </View>

              <View style={{width: 150}}>
                <Text style={styles.producname}>{item.descricao}</Text>
                <Text numberOfLines={1} style={styles.ingredi}>
                  Igredientes : {item.ingredientes}
                </Text>
                <Text style={styles.valor}>Valor :{item.valor}</Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
        renderSectionHeader={({section: {title}}) => (
          <View style={styles.areaCategoria}>
            <View tyle={styles.categoriatxt}>
              <Text style={styles.categoriatxtCategoria}>{title}</Text>
            </View>
          </View>
        )}
      />
    </SafeAreaView>
  );
}
