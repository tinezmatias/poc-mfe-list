// Internal
import { ProviderTypes } from '../../context/App/constants';
import { useAppContext } from './useAppContext';

export function useSearchFilter() {
  const {
    dispatch,
    state: {
      ui: { searchFilterValue: currentFilterValue },
    },
  } = useAppContext();

  const dispatchFilter = (filterValue) =>
    dispatch({
      type: ProviderTypes.UpdateSearchFilter,
      payload: { searchFilterValue: filterValue },
    });

  return { dispatchFilter, currentFilterValue };
}
