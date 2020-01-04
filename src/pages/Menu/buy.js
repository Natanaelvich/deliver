import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  Alert,
  Button,
} from 'react-native';
import {SCLAlert} from 'react-native-scl-alert';
import InputSpinner from 'react-native-input-spinner';

import background from './backBuy.png';
import {RadioButton} from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/MaterialIcons';

export default function Buy({navigation}) {
  const data = navigation.getParam('item');
  const name = navigation.getParam('name');

  const [checked, setChecked] = useState('');
  const [sabor, setSabor] = useState('');
  const [formPag, setFormPag] = useState('');
  const [show, setShow] = useState(false);
  const [showRefri, setShowrefri] = useState(false);
  const [showsuco, setShowsuco] = useState(false);
  const [quantidade, setquantidade] = useState(1);
  const [valor, setValor] = useState(data.valor);

  function handleOpen() {
    setShow(true);
  }

  function handleClose() {
    setShow(false);
  }

  function handleOpenRefri() {
    setShowrefri(true);
  }

  function handleCloseRefri() {
    setShowrefri(false);
  }

  function handleOpensuco() {
    setShowsuco(true);
  }

  function handleClosesuco() {
    setShowsuco(false);
  }

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
      </View>
      <InputSpinner
        max={10}
        min={1}
        step={1}
        colorMax={'#f04048'}
        colorMin={'#40c5f4'}
        value={quantidade}
        onChange={num => {
          setquantidade(num);
          const quantidades = data.valor * num;
          console.log(quantidades);
          setValor(quantidades);
        }}
      />
      {/* refri : 2 or 1 l */}
      <View style={styles.bebidasArea}>
        <TouchableOpacity onPress={handleOpenRefri} style={styles.buttonRefri}>
          <Text style={styles.txtRefri}>Refri</Text>
          <Icon2 name="add-circle-outline" size={32} color="#e81010" />
        </TouchableOpacity>
        <SCLAlert
          onRequestClose={handleCloseRefri}
          theme="info"
          show={showRefri}
          title="Refrigerante"
          subtitle="escolha sabor/litros">
          <View style={styles.radioArea}>
            <Text>Coca-Cola </Text>
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
          <View style={styles.radioArea}>
            <Text> 1L </Text>
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
        </SCLAlert>

        <TouchableOpacity onPress={handleOpensuco} style={styles.buttonRefri}>
          <Text style={styles.txtRefri}>Suco</Text>
          <Icon2 name="add-circle-outline" size={32} color="#e81010" />
        </TouchableOpacity>
        <SCLAlert
          onRequestClose={handleClosesuco}
          theme="info"
          show={showsuco}
          title="Suco"
          subtitle="escolha sabor/Tamanho">
          <View style={styles.radioArea}>
            <Text>Goiaba </Text>
            <RadioButton
              value="Goiaba"
              status={sabor === 'Goiaba' ? 'checked' : 'unchecked'}
              onPress={() => {
                setSabor('Goiaba');
              }}
            />
            <Text> Acerola </Text>
            <RadioButton
              value="Acerola"
              status={sabor === 'Acerola' ? 'checked' : 'unchecked'}
              onPress={() => {
                setSabor('Acerola');
              }}
            />
          </View>
          <View style={styles.radioArea}>
            <Text> Medio </Text>
            <RadioButton
              value="first"
              status={checked === 'medio' ? 'checked' : 'unchecked'}
              onPress={() => {
                setChecked('medio');
              }}
            />
            <Text> Grande </Text>
            <RadioButton
              value="second"
              status={checked === 'Grande' ? 'checked' : 'unchecked'}
              onPress={() => {
                setChecked('Grande');
              }}
            />
          </View>
        </SCLAlert>
      </View>

      {/* Creadit? or Money? */}
      <TouchableOpacity onPress={handleOpen} style={styles.buttonCardorMoney}>
        <Text style={styles.txtRefri}>Alterar forma de pagamento : </Text>
        <Icon name="credit-card" size={25} color="#e81010" />
        <Text> / </Text>
        <Icon name="money" size={25} color="#e81010" />
      </TouchableOpacity>
      <SCLAlert
        onRequestClose={handleClose}
        theme="info"
        show={show}
        title="Forma de pagamento"
        subtitle="CARTÃO || DINHEIRO">
        <View style={styles.areaPag}>
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
      </SCLAlert>

      <Text style={styles.valor}>TOTAL : {valor} </Text>
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
          <Text style={styles.txtbuttom}>COMPRAR</Text>
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
    textShadowColor: '#444',
    textShadowRadius: 1,
  },
  valor: {
    fontSize: 15,
    color: '#08951D',
    backgroundColor: '#f5f5f5',
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginVertical: 5,
    borderRadius: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#08951D',
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatar: {
    width: 200,
    height: 200,
    borderRadius: 200 / 2,
  },
  areatxt: {
    marginTop: 40,
    alignItems: 'flex-end',
    width: 300,
    marginLeft: 100,
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
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#D94A2F',
  },
  areaPag: {
    alignItems: 'center',
    justifyContent: 'center',
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
  buttonRefri: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    padding: 10,
    borderRadius: 40,
    marginHorizontal: 3,
    elevation: 5,
  },
  txtRefri: {
    fontSize: 15,
    color: '#D94A2F',
    fontWeight: 'bold',
  },
  bebidasArea: {
    flex: 1,
    flexDirection: 'row',
  },
  txtBebida: {
    fontSize: 17,
    color: '#333',
    fontWeight: 'bold',
    textShadowColor: '#444',
    textShadowRadius: 1,
    marginBottom: 3,
  },
  buttonCardorMoney: {
    flexDirection: 'row',
    backgroundColor: '#f5f5f5',
    padding: 10,
    marginVertical: 5,
    elevation: 5,
    borderRadius: 30,
  },
});
