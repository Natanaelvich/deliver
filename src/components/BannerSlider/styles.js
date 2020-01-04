import styled from 'styled-components/native';
import {StyleSheet} from 'react-native';

export const SliderList = styled.FlatList.attrs({
  contentContainerStyle: {paddingLeft: 16, paddingRight: 8},
  showsHorizontalScrollIndicator: false,
  horizontal: true,
  bounces: false,
})`
  background-color: #fff;
  padding-bottom: 24px;
`;

export const SliderItem = styled.View`
  width: 370px;
  padding-right: 10px;
`;

export const SliderImage = styled.Image`
  width: 100%;
  height: 180px;
  border-radius: 4px;
  margin-bottom: 12px;
`;

export const ImageStyle = StyleSheet.create({
  image: {
    width: '100%',
    height: 180,
    borderRadius: 4,
    marginBottom: 12,
    resizeMode: 'stretch',
  },
});
