// Internal
import { ProviderTypes } from '../../context/App/constants';
import { useAppContext } from './useAppContext';

export function useDispatchMovie() {
  const { dispatch } = useAppContext();

  const dispatchMovie = (movie) =>
    dispatch({ type: ProviderTypes.UpdateData, payload: movie });

  return dispatchMovie;
}
