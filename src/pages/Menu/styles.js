import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerconatiner: {
    alignItems: 'center',
    elevation: 2,
    width: '100%',
    paddingBottom: 20,
    backgroundColor: '#f1f1f1',
  },
  back: {
    backgroundColor: '#D94A2F',
    height: 100,
    position: 'absolute',
    width: '100%',
  },
  header: {
    height: 120,
    width: 120,
    borderRadius: 120 / 2,
    backgroundColor: '#f1f1f1',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
  },
  image: {
    height: 110,
    width: 110,
    borderRadius: 110 / 2,
  },
  txtUser: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#111',
  },
  areaCategorias: {
    flexDirection: 'row',
    paddingVertical: 10,
    justifyContent: 'space-around',
    width: '100%',
  },
  areaCategoria: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  categoriatxt: {
    padding: 10,
    borderRadius: 5,
    borderBottomColor: '#D94A2F',
    borderBottomWidth: 1,
    backgroundColor: '#444',
  },
  categoriatxtCategoria: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#444',
    padding: 20,
    marginVertical: 10,
    backgroundColor: '#f1f1f1',
    borderRadius: 20,
    elevation: 2,
    borderBottomWidth: 1,
    borderBottomColor: '#D94A2F',
  },
  productContainer: {
    padding: 10,
    marginHorizontal: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#D94A2F',
    marginBottom: 12,
    backgroundColor: '#f1f1f1',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  contImage: {
    width: 80,
    height: 80,
    borderRadius: 80 / 2,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarProduc: {
    width: 70,
    height: 70,
    borderRadius: 70 / 2,
    resizeMode: 'contain',
  },
  producname: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#111',
  },
  ingredi: {
    fontSize: 13,
    fontWeight: '400',
    color: '#222',
    marginVertical: 5,
  },
  valor: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'green',
  },
});

export default styles;
