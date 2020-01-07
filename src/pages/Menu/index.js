import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  StatusBar,
  TouchableOpacity,
  BackHandler,
} from 'react-native';
import SectionList from 'react-native-tabs-section-list';
import LottieView from 'lottie-react-native';
import {SCLAlert} from 'react-native-scl-alert';
import {connect} from 'react-redux';

import styles from './styles';
import carrinho_small from '../../assets/animations/carrinho_small.json';

function Menu({navigation, DATA, Carrinho, dispatch}) {
  const carrinho = navigation.getParam('carrinho');

  const [valorTotal, setValorTotal] = useState(0);
  const [close, setClose] = useState(false);
  const [show, setShow] = useState(false);

  function handleNavigationCarrinho() {
    navigation.navigate('Carrinho', {valorTotal});
  }

  useEffect(() => {
    if (carrinho) {
      setValorTotal(Carrinho.reduce((a, x) => a + x.total, 0));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [Carrinho]);

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', handleClose);
  });

  function handleClose() {
    if (!navigation.isFocused()) {
      return false;
    }
    if (carrinho) {
      setShow(true);
      setClose(true);
      if (close) {
        setShow(false);
        navigation.navigate('MainScreen');
      }
      return true;
    }
  }

  function handleCloseAlert() {
    setShow(false);
    setClose(false);
  }

  function deleteCarrinho() {
    return {
      type: 'DELETE_CARRINHO',
    };
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
              // eslint-disable-next-line react-native/no-inline-styles
              {borderBottomWidth: isActive ? 1 : 0},
            ]}>
            <Text
              style={[
                styles.tabText,
                // eslint-disable-next-line react-native/no-inline-styles
                {color: isActive ? '#090909' : '#9e9e9e'},
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
                categoria: item.categoria,
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

              <View style={styles.boxProduct}>
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
        <TouchableOpacity
          onPress={() => {
            dispatch(deleteCarrinho());
            handleClose();
          }}
          style={styles.buttonSair}>
          <Text style={styles.txtSair}>Confirmar</Text>
        </TouchableOpacity>
      </SCLAlert>
    </View>
  );
}

export default connect(state => ({
  DATA: state.DATA,
  Carrinho: state.CARRINHO,
}))(Menu);
