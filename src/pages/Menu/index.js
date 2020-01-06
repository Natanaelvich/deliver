import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  StatusBar,
  TouchableOpacity,
  BackHandler,
  Alert,
} from 'react-native';
import SectionList from 'react-native-tabs-section-list';
import LottieView from 'lottie-react-native';
import {SCLAlert} from 'react-native-scl-alert';

import Icon from 'react-native-vector-icons/FontAwesome5';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from './styles';
import carrinho_small from '../../assets/animations/carrinho_small.json';

const DATA = [
  {
    title: 'Hamburgues',
    icon: <Icon name="hamburger" size={25} color="#D94A2F" />,
    data: [
      {
        id: 1,
        descricao: 'Hamburguer Comum',
        categoria: 'Hamburguers',
        valor: 15,

        tipos: ['Picanha', 'Cordeiro', 'Boi'],
        tamanhos: [
          {
            tamanho: 'pequeno',
            price: 15,
          },
          {
            tamanho: 'medio',
            price: 20,
          },
          {
            tamanho: 'grande',
            price: 25,
          },
        ],
      },
      {
        id: 2,
        descricao: 'X BURGUER',
        categoria: 'Hamburguers',
        valor: 20,

        tipos: ['Picanha', 'Cordeiro', 'Boi'],
        tamanhos: [
          {
            tamanho: 'pequeno',
            price: 15,
          },
          {
            tamanho: 'medio',
            price: 20,
          },
          {
            tamanho: 'grande',
            price: 25,
          },
        ],
      },
    ],
  },

  {
    title: 'Salgados',
    icon: <Icon2 name="food-croissant" size={25} color="#D94A2F" />,
    data: [
      {
        id: 1,
        descricao: 'Hamburguer',
        categoria: 'Hamburguers',
        valor: 15,
        tipos: ['Picanha', 'Cordeiro', 'Boi'],
        price: [15, 20, 25],
        tamanhos: [
          {
            tamanho: 'pequeno',
            price: 15,
          },
          {
            tamanho: 'medio',
            price: 20,
          },
          {
            tamanho: 'grande',
            price: 25,
          },
        ],
      },
    ],
  },
  {
    title: 'Bebidas',
    icon: <Icon2 name="food-croissant" size={25} color="#D94A2F" />,
    data: [
      {
        id: 1,
        descricao: 'Bebidas',
        categoria: 'Bebidas',
        valor: 15,
        tipos: ['Coca-cola', 'Fanta', 'Jesus', 'psiu'],
        tamanhos: [
          {
            tamanho: '500ML',
            price: 15,
          },
          {
            tamanho: '1L',
            price: 20,
          },
          {
            tamanho: '2L',
            price: 25,
          },
        ],
      },
    ],
  },
];

export default function User({navigation}) {
  const carrinho = navigation.getParam('carrinho');
  const produto = navigation.getParam('produto');
  const valor = navigation.getParam('valor');

  const [produtos, setProdutos] = useState([]);
  const [valorTotal, setValorTotal] = useState(0);
  const [quantidade, setQauntidade] = useState(0);
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (carrinho) {
      const total = valorTotal + valor;
      setValorTotal(total);
      setProdutos(produtos.concat(produto));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [produto]);

  function handleNavigationCarrinho() {
    navigation.navigate('Carrinho', {produtos, valorTotal});
  }

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', handleClose);
  });

  function handleBackButtonPressAndroid() {
    if (!navigation.isFocused()) {
      return false;
    }
    if (carrinho) {
      Alert.alert('Se sair seu carrinho sera desfeito');
      return true;
    }

    // if (this.isSelectionModeEnabled()) {
    //   this.disableSelectionMode();
    //   return true;
    // } else {
    //   return false;
    // }
  }

  function handleClose() {
    if (!navigation.isFocused()) {
      return false;
    }
    if (carrinho) {
      setShow(true);
      return true;
    }
  }

  function handleCloseAlert() {
    setShow(false);
  }
  return (
    // header
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
        keyExtractor={item => String(item.id)}
        stickySectionHeadersEnabled={false}
        scrollToLocationOffset={50}
        tabBarStyle={styles.tabBar}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        renderTab={({title, isActive}) => (
          <View
            style={[
              styles.tabContainer,
              {borderBottomWidth: isActive ? 1 : 0},
            ]}>
            <Text
              style={[
                styles.tabText,
                {
                  color: isActive ? '#090909' : '#9e9e9e',
                },
              ]}>
              {title}
            </Text>
          </View>
        )}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Buy', {
                tamanhos: item.tamanhos,
                tipos: item.tipos,
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

              <View style={{width: 150, justifyContent: 'space-around'}}>
                <Text style={styles.producname}>{item.descricao}</Text>

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
      {/* carrinho */}
      {carrinho && (
        <TouchableOpacity
          onPress={handleNavigationCarrinho}
          style={styles.carrinhoContainer}>
          <Text style={styles.txtCarrinho}>Ver carrinho : </Text>
          <Text style={styles.txtValorCarrinho}>R${valorTotal}</Text>
          <LottieView
            style={styles.carrinho_small}
            source={carrinho_small}
            resizeMode="contain"
            autoPlay
            loop
          />
        </TouchableOpacity>
      )}
      <SCLAlert
        onRequestClose={handleCloseAlert}
        theme="danger"
        show={show}
        title="OOPS"
        subtitle="Se voltar seu carrinho será desfeito">
        <TouchableOpacity onPress={handleCloseAlert}>
          <Text>Confirmar</Text>
        </TouchableOpacity>
      </SCLAlert>
    </View>
  );
}
