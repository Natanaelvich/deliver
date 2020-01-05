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
    height: 50,
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
    marginTop: 2,
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
  areaCategoria: {
    alignItems: 'center',
    justifyContent: 'center',
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
  tabContainer: {
    borderBottomColor: '#090909',
  },
  separator: {
    height: 0.5,
    width: '96%',
    alignSelf: 'flex-end',
    backgroundColor: '#eaeaea',
  },
  tabBar: {
    backgroundColor: '#fff',
    borderBottomColor: '#f4f4f4',
    borderBottomWidth: 1,
  },
  tabText: {
    padding: 15,
    color: '#666',
    fontSize: 18,
    fontWeight: 'bold',
  },
  carrinhoContainer: {
    flex: 1,
    paddingVertical: 10,
    backgroundColor: '#D94A2F',
    flexDirection: 'row',
    maxHeight: 60,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  txtCarrinho: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
    marginHorizontal: 20,
    textShadowColor: '#111',
    textShadowRadius: 10,
  },
  carrinho_small: {
    height: 300,
  },
  txtValorCarrinho: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#01DF3A',
    textShadowColor: '#111',
    textShadowRadius: 5,
  },
});

export default styles;
