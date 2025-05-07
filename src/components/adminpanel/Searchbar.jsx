import { useProductContext } from '../../context/ProductContext';

export default function SearchBar() {
  const { state, dispatch } = useProductContext();

  return (
    <input
      type="text"
      placeholder="Поиск по названию"
      value={state.search || ''}
      onChange={(e) =>
        dispatch({ type: 'SET_SEARCH', payload: e.target.value })
      }
    />
  );
}