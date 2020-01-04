import React from 'react';
import PropTypes from 'prop-types';
import {SafeAreaView} from 'react-native';
// Components
import SearchField from '../../components/SearchField';
import Button from '../../components/Common/Button';
import Section from '../../components/Common/Section';
import Typography from '../../components/Common/Typography';
// Styles
import {
  ScrollableContainer,
  SearchContainer,
  CategoryItem,
  ImageOverlay,
  CategoriesList,
} from './styles';
// Data
import {categories} from '../../../data.json';
import {TouchableOpacity} from 'react-native-gesture-handler';

export default function Search({navigation}) {
  return (
    <SafeAreaView>
      <SearchContainer>
        <SearchField placeholderText="Prato ou restaurante" />
        <Button
          text="Cancelar"
          textColor="#e81010"
          onPressHandler={() => navigation.goBack()}
        />
      </SearchContainer>
      <ScrollableContainer
        showsVerticalScrollIndicator={false}
        bounces={false}
        refreshing={false}>
        <Section title="Categorias">
          <CategoriesList>
            {categories.map(item => (
              <CategoryItem key={item.id} source={{uri: item.imageUrl}}>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('Result', {title: item.title});
                  }}>
                  <ImageOverlay>
                    <Typography size="18" color="#fff" bold>
                      {item.title}
                    </Typography>
                  </ImageOverlay>
                </TouchableOpacity>
              </CategoryItem>
            ))}
          </CategoriesList>
        </Section>
      </ScrollableContainer>
    </SafeAreaView>
  );
}

Search.propTypes = {
  navigation: PropTypes.shape({
    goBack: PropTypes.func,
  }).isRequired,
};
