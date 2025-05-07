import { createContext, useContext, useReducer, useEffect } from 'react';

const ProductContext = createContext();

const initialProducts = [
  {"id":1746526935438,"title":"Delos","price":1649,"image":"1.webp"},
  {"id":1746527020024,"title":"jason becker","price":2499,"image":"2.webp"},
  {"id":1746527072518,"title":"Retro Solo","price":1799,"image":"4.webp"}
];

const initialState = {
  products: JSON.parse(localStorage.getItem('products')) || initialProducts,
  search: ''
};

function productReducer(state, action) {
  switch (action.type) {
    case 'ADD_PRODUCT':
      return {
        ...state,
        products: [...state.products, action.payload],
      };

    case 'DELETE_PRODUCT':
      return {
        ...state,
        products: state.products.filter(product => product.id !== action.payload),
      };

    case 'UPDATE_PRODUCT':
      return {
        ...state,
        products: state.products.map(product =>
          product.id === action.payload.id ? action.payload : product
        ),
    };

    
    case 'SET_SEARCH':
      return {
        ...state,
        search: action.payload,
      };

    default:
      return state;
  }
}

export const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(productReducer, initialState);

  useEffect(() => {
    localStorage.setItem('products', JSON.stringify(state.products));
  }, [state.products]);

  return (
    <ProductContext.Provider value={{ state, dispatch }}>
      {children}
    </ProductContext.Provider>
  );
};



export const useProductContext = () => {
  return useContext(ProductContext);
};
