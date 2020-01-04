import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  header: {
    width: 200,
    height: 200,
    borderRadius: 200 / 2,
    backgroundColor: '#F1F1F1',
    marginTop: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 190,
    height: 190,
    borderRadius: 190 / 2,
    resizeMode: 'contain',
  },
  back: {
    backgroundColor: '#D94A2F',
    height: 200,
    width: '100%',
    position: 'absolute',
  },
  txtUser: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#666666',
  },
  txtOpts: {
    fontSize: 20,
    fontWeight: '500',
    color: '#666666',
    marginVertical: 10,
  },
  areaOpts: {
    width: 300,
  },
});

export default styles;
