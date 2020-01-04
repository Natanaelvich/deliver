import React from 'react';
import PropTypes from 'prop-types';
import {View, SafeAreaView, StatusBar} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
// Styles
import {
  Container,
  StickyHeader,
  ShippingAddress,
  FakeSearchField,
  FakePlaceholder,
} from './styles';
// Components
import Typography from '../../components/Common/Typography';
import BannerSlider from '../../components/BannerSlider';
import PromoSlider from '../../components/PromoSlider';
import Section from '../../components/Common/Section';
import RestaurantList from '../../components/RestaurantList';
// Data
import data from '../../../data.json';

export default function Main({navigation}) {
  return (
    <SafeAreaView>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      <Container
        stickyHeaderIndices={[1]} // component with index [1] is sticky
        showsVerticalScrollIndicator={false}
        bounces={false}
        refreshing={false}>
        <ShippingAddress>
          <View>
            <Typography size="20" color="#999" uppercase>
              Entregar
            </Typography>
            <Typography size="18" color="#111">
              AV. João Leal, 1902
            </Typography>
          </View>
          <Icon name="map-pin" size={25} color="#111" />
        </ShippingAddress>

        <StickyHeader>
          <FakeSearchField onPress={() => navigation.navigate('Search')}>
            <Icon name="search" size={32} color="#e81010" />
            <FakePlaceholder size="18" color="#999">
              Prato ou restaurante
            </FakePlaceholder>
          </FakeSearchField>
        </StickyHeader>

        <Section noMargin>
          {/* <Discount title="Cupom de R$10" desc="Válido até 26/08" /> */}
          <BannerSlider horizontal data={data.banners} />
        </Section>

        <Section
          title="70% off + taxa na faixa"
          subTitle="Lanches com frete grátis"
          iconUrl="https://cdn3.iconfinder.com/data/icons/valentine-2065/1024/gift-512.png">
          <PromoSlider data={data.promos} />
        </Section>

        <Section title="Restaurantes">
          <RestaurantList data={data.restaurantList} />
        </Section>
      </Container>
    </SafeAreaView>
  );
}

Main.propTypes = {
  navigation: PropTypes.shape({
    goBack: PropTypes.func,
    navigate: PropTypes.func,
  }).isRequired,
};
