import React from 'react';
import PropTypes from 'prop-types';

import {Image} from 'react-native';
import {SliderList, SliderItem, ImageStyle} from './styles';
import Typography from '../Common/Typography';

export default function BannerSlider({data}) {
  return (
    <SliderList
      data={data}
      keyExtractor={item => String(item.id)}
      renderItem={({item}) => (
        <SliderItem key={item.id}>
          <Image style={ImageStyle.image} source={{uri: item.image}} />
          <Typography color="#333" size="18">
            {item.title}
          </Typography>
        </SliderItem>
      )}
    />
  );
}

BannerSlider.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};
