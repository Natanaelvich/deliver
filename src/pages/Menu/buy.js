import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  Alert,
} from 'react-native';

import background from './backBuy.png';
import {RadioButton} from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Buy({navigation}) {
  const [checked, setChecked] = useState('');
  const [sabor, setSabor] = useState('');
  const [formPag, setFormPag] = useState('');

  const data = navigation.getParam('item');
  const name = navigation.getParam('name');
  return (
    <ImageBackground style={styles.container} source={background}>
      <Image
        source={{
          uri:
            'http://lanchonetezerograu.com.br/wp-content/uploads/2018/01/Cheese-Bacon.png',
        }}
        style={styles.avatar}
      />
      <Text style={styles.descricao}> {data.descricao} </Text>
      <View style={styles.areatxt}>
        <Text style={styles.ingredientes}>
          Ingredientes : {data.ingredientes}{' '}
        </Text>
        <Text style={styles.valor}>{data.valor} </Text>
      </View>
      {/* refri : 2 or 1 l */}
      <View style={styles.radioArea}>
        <Text>Refri : 1L </Text>
        <RadioButton
          value="first"
          status={checked === '1' ? 'checked' : 'unchecked'}
          onPress={() => {
            setChecked('1');
          }}
        />
        <Text> 2L </Text>
        <RadioButton
          value="second"
          status={checked === '2' ? 'checked' : 'unchecked'}
          onPress={() => {
            setChecked('2');
          }}
        />
      </View>

      {/* sabor? */}
      <View style={styles.radioArea}>
        <Text>Sabor : Coca-Cola </Text>
        <RadioButton
          value="Coca-Cola"
          status={sabor === 'Coca-Cola' ? 'checked' : 'unchecked'}
          onPress={() => {
            setSabor('Coca-Cola');
          }}
        />
        <Text> Fanta </Text>
        <RadioButton
          value="Fanta"
          status={sabor === 'Fanta' ? 'checked' : 'unchecked'}
          onPress={() => {
            setSabor('Fanta');
          }}
        />
      </View>
      <View style={styles.areaPag}>
        {/* Creadit? or Money? */}
        <Text>Forma de pagamento</Text>
        <View style={styles.radioArea}>
          <Icon name="credit-card" size={32} color="#e81010" />
          <Text>Cartão de credito </Text>
          <RadioButton
            value="Card"
            status={formPag === 'Card' ? 'checked' : 'unchecked'}
            onPress={() => {
              setFormPag('Card');
            }}
          />
          <Icon name="money" size={32} color="#e81010" />
          <Text> Dinheiro </Text>
          <RadioButton
            value="money"
            status={formPag === 'money' ? 'checked' : 'unchecked'}
            onPress={() => {
              setFormPag('money');
            }}
          />
        </View>
      </View>
      <View style={styles.areaButtons}>
        <TouchableOpacity
          style={styles.button}
          onPress={() =>
            Alert.alert(
              'Refri : ' +
                sabor +
                ' (' +
                checked +
                'L) forma de pagamento : ' +
                formPag +
                name,
            )
          }>
          <Text style={styles.txtbuttom}>Comprar</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  descricao: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#fff',
    textShadowColor: '#111',
    textShadowRadius: 10,
  },
  ingredientes: {
    fontSize: 15,
    color: '#333',
    marginBottom: 5,
  },
  valor: {
    fontSize: 20,
    color: 'green',
  },
  avatar: {
    width: 200,
    height: 200,
    borderRadius: 200 / 2,
  },
  areatxt: {
    marginTop: 30,
    alignItems: 'flex-end',
    width: 300,
    marginLeft: 100,
    borderWidth: 1,
    borderColor: 'orange',
    borderRadius: 50,
    padding: 20,
  },
  areaButtons: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 10,
  },
  radioArea: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  areaPag: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 10,
    borderTopWidth: 1,
    borderTopColor: '#D94A2F',
    borderRadius: 11,
  },
  button: {
    backgroundColor: '#D94A2F',
    paddingHorizontal: 40,
    height: 40,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 10,
  },
  txtbuttom: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    textShadowColor: '#111',
    textShadowRadius: 10,
  },
});
