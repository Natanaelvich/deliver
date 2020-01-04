import React from 'react';
import PropTypes from 'prop-types';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {
  PromoSliderList,
  PromoSliderItem,
  PromoSliderImage,
  PromoSliderFooter,
  PromoSliderTitle,
} from './styles';
import Typography from '../Common/Typography';
import {Separator} from '../RestaurantList/styles';

export default function PromoSlider({data}) {
  return (
    <PromoSliderList
      data={data}
      keyExtractor={item => String(item.id)}
      // ListFooterComponent={(
      //   <SeeMoreButton>
      //     <Typography color="#e81010" size="16">Outros pratos</Typography>
      //   </SeeMoreButton>
      // )}
      renderItem={({item}) => (
        <TouchableOpacity>
          <PromoSliderItem>
            <PromoSliderImage source={{uri: item.imageUrl}} />
            <PromoSliderTitle>
              <Typography size="18" color="#333">
                {item.title}
              </Typography>
            </PromoSliderTitle>
            <PromoSliderFooter>
              <Typography size="18" color="green">
                R$ {item.promoPrice}
              </Typography>
              <Separator />
              <Typography size="14" color="gray" strike>
                R$ {item.originalPrice}
              </Typography>
            </PromoSliderFooter>
          </PromoSliderItem>
        </TouchableOpacity>
      )}
    />
  );
}

PromoSlider.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};
