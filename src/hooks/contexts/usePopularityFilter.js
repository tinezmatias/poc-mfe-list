// Internal
import { ProviderTypes } from '../../context/App/constants';
import { useAppContext } from './useAppContext';

export function usePopularityFilter() {
  const {
    dispatch,
    state: {
      ui: { popularityFilterValue: currentFilterValue },
    },
  } = useAppContext();

  const dispatchFilter = (filterValue) =>
    dispatch({
      type: ProviderTypes.UpdatePopularityFilter,
      payload: { popularityFilterValue: filterValue },
    });

  return { dispatchFilter, currentFilterValue };
}
