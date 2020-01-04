import React from 'react';
import {
  View,
  Text,
  Image,
  StatusBar,
  TouchableOpacity,
  SectionList,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from './styles';

const DATA = [
  {
    title: 'Hamburgues',
    icon: <Icon name="hamburger" size={25} color="#D94A2F" />,
    data: [
      {
        id: 1,
        descricao: 'Hamburguer',
        ingredientes:
          'pao, ovo, baicon,pao, ovo, baicon, ovo, baicon, ovo, baicon',
        valor: 40.99,
      },
      {
        id: 2,
        descricao: 'Hamburguer',
        ingredientes: 'pao, ovo, baicon',
        valor: 18.99,
      },
      {
        id: 3,
        descricao: 'Hamburguer',
        ingredientes: 'pao, ovo, baicon',
        valor: 18.99,
      },
      {
        id: 4,
        descricao: 'Hamburguer',
        ingredientes: 'pao, ovo, baicon',
        valor: 30.99,
      },
      {
        id: 5,
        descricao: 'Hamburguer',
        ingredientes: 'pao, ovo, baicon',
        valor: 18.99,
      },
    ],
  },
  {
    title: 'Salgados',
    icon: <Icon2 name="food-croissant" size={25} color="#D94A2F" />,
    data: [
      {
        id: 1,
        descricao: 'coxinha',
        ingredientes:
          'pao, ovo, baicon,pao, ovo, baicon, ovo, baicon, ovo, baicon',
        valor: 40.99,
      },
      {
        id: 2,
        descricao: 'pastel',
        ingredientes: 'pao, ovo, baicon',
        valor: 18.99,
      },
      {
        id: 3,
        descricao: 'pão de queijo',
        ingredientes: 'pao, ovo, baicon',
        valor: 18.99,
      },
    ],
  },
];

export default function User({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.headerconatiner}>
        <StatusBar backgroundColor="#D94A2F" barStyle="light-content" />
        <View style={styles.back} />

        <View style={styles.header}>
          <Image
            source={{uri: navigation.getParam('logo')}}
            style={styles.image}
          />
        </View>
        <Text style={styles.txtUser}>{navigation.getParam('name')}</Text>
      </View>
      {/* produtos */}

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
        renderSectionHeader={({section: {title, icon}}) => (
          <View style={styles.areaCategoria}>
            <Text style={styles.categoriatxtCategoria}>
              {title} {icon}
            </Text>
          </View>
        )}
      />
    </View>
  );
}
