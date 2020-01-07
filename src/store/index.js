import React from 'react';
import {createStore} from 'redux';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';

const INITIAL_STATE = {
  CARRINHO: [],
  DATA: [
    {
      title: 'Hamburgues',
      icon: <Icon name="hamburger" size={25} color="#D94A2F" />,
      data: [
        {
          id: 1,
          descricao: 'Hamburguer Comum',
          categoria: 'Hamburguers',
          valor: 15,

          tipos: ['Picanha', 'Cordeiro', 'Boi'],
          tamanhos: [
            {
              tamanho: 'pequeno',
              price: 15,
            },
            {
              tamanho: 'medio',
              price: 20,
            },
            {
              tamanho: 'grande',
              price: 25,
            },
          ],
        },
        {
          id: 2,
          descricao: 'X BURGUER',
          categoria: 'Hamburguers',
          valor: 20,

          tipos: ['Picanha', 'Cordeiro', 'Boi'],
          tamanhos: [
            {
              tamanho: 'pequeno',
              price: 15,
            },
            {
              tamanho: 'medio',
              price: 20,
            },
            {
              tamanho: 'grande',
              price: 25,
            },
          ],
        },
      ],
    },
    {
      title: 'Pizzas',
      icon: <Icon2 name="food-croissant" size={25} color="#D94A2F" />,
      data: [
        {
          id: 1,
          descricao: 'Pizzas',
          categoria: 'Pizza',
          valor: 15,
          tipos: ['Portuguesa', 'Catupiri', 'Mexicana'],
          tamanhos: [
            {
              tamanho: 'pequena',
              price: 15,
            },
            {
              tamanho: 'media',
              price: 20,
            },
            {
              tamanho: 'GG',
              price: 25,
            },
          ],
        },
      ],
    },
    {
      title: 'Salgados',
      icon: <Icon2 name="food-croissant" size={25} color="#D94A2F" />,
      data: [
        {
          id: 1,
          descricao: 'Salgados',
          categoria: 'Salgados',
          valor: 15,
          tipos: ['Coxinha', 'Pastel', 'Enrolado'],
          tamanhos: [
            {
              tamanho: 'Frango',
              price: 1.5,
            },
            {
              tamanho: 'Carne',
              price: 1.5,
            },
            {
              tamanho: 'Queijo',
              price: 1.5,
            },
          ],
        },
      ],
    },
    {
      title: 'Bebidas',
      icon: <Icon2 name="food-croissant" size={25} color="#D94A2F" />,
      data: [
        {
          id: 1,
          descricao: 'Refrigerante',
          categoria: 'Refrigerante',
          valor: 15,
          tipos: ['Coca-cola', 'Fanta', 'Jesus', 'psiu'],
          tamanhos: [
            {
              tamanho: '500ML',
              price: 15,
            },
            {
              tamanho: '1L',
              price: 20,
            },
            {
              tamanho: '2L',
              price: 25,
            },
          ],
        },
      ],
    },
  ],
};

function reducer(state = INITIAL_STATE, action) {
  // console.log(action.data);
  // console.log(state.CARRINHO);
  switch (action.type) {
    case 'DELETE_CARRINHO':
      return {
        ...state,
        CARRINHO: [],
      };

    case 'SET_CARRINHO':
      return {
        ...state,
        CARRINHO: [...state.CARRINHO, action.data],
      };

    case ' DELETE_ON_CARRINHO':
      return {
        ...state,
        CARRINHO: action.data,
      };

    default:
      return state;
  }
}
const store = createStore(reducer);

export default store;
