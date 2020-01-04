import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import data from '../../../../data.json';
import RestaurantList from '../../../components/RestaurantList';
// import { Container } from './styles';

export default function result({navigation}) {
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    data.restaurantList.map(res => {
      if (res.details.category === navigation.getParam('title')) {
        setDatas({res});
      }
    });
  }, [datas, navigation]);
  return (
    <View>
      <Text>{navigation.getParam('title')}</Text>
      <RestaurantList data={datas} />
    </View>
  );
}
