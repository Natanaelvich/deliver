import React from 'react';
import PropTypes from 'prop-types';
import {
  RestaurantListContainer,
  RestaurantListItem,
  LogoContainer,
  Logo,
  Infos,
  RestaurantDetails,
  DeliveryDetails,
  Separator,
} from './styles';
import Typography from '../Common/Typography';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {withNavigation} from 'react-navigation';

function RestaurantList({data, navigation}) {
  return (
    <RestaurantListContainer
      data={data}
      keyExtractor={item => String(item.id)}
      renderItem={({item}) => (
        <TouchableOpacity
          key={item.id}
          onPress={() =>
            navigation.navigate('Menu', {logo: item.logo, name: item.title})
          }>
          <RestaurantListItem>
            <LogoContainer>
              <Logo source={{uri: item.logo}} />
            </LogoContainer>
            <Infos>
              <Typography size="18" color="#333" bold>
                {item.title}
              </Typography>
              <RestaurantDetails>
                <Typography color="#dab36d" size="18" bold>
                  4,6
                </Typography>
                <Separator>•</Separator>
                <Typography size="18" color="#999">
                  Chinesa
                </Typography>
              </RestaurantDetails>
              <DeliveryDetails>
                <Typography size="16" color="#999">
                  Frete
                </Typography>
                <Separator>•</Separator>
                <Typography size="16" color="#999">
                  R$6,90
                </Typography>
              </DeliveryDetails>
            </Infos>
          </RestaurantListItem>
        </TouchableOpacity>
      )}
    />
  );
}

RestaurantList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default withNavigation(RestaurantList);
