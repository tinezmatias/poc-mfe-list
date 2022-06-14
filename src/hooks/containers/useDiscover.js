// Vemdpr
import { useEffect, useState } from 'react';
// Internal
import {
  useDiscoverQuery,
  useSearchQuery,
  useDebouncedValue,
  usePopularityFilter,
  useInput,
} from '../index.js';
import { TEXT_EMPTY_MOVIES } from '../../constants';

export function useDiscover() {
  const { value, onChange } = useInput();
  const [movies, setMovies] = useState([]);
  const { currentFilterValue } = usePopularityFilter();
  const debouncedValue = useDebouncedValue(value, 500);

  const {
    movies: dMovies,
    isError: dError,
    isLoading: dLoading,
  } = useDiscoverQuery();

  const {
    movies: sMovies,
    isError: sError,
    isLoading: sLoading,
  } = useSearchQuery(debouncedValue);

  useEffect(() => {
    let newMovies = [];

    if (debouncedValue) {
      newMovies = sMovies || [];
    } else {
      newMovies = dMovies || [];
    }

    if (currentFilterValue) {
      newMovies = newMovies.filter(
        (movie) => currentFilterValue <= movie.vote_average
      );
    }

    setMovies(newMovies || []);
  }, [debouncedValue, sMovies, dMovies, currentFilterValue]);

  // Format things
  const isLoading = dLoading || sLoading;
  const isError = dError || sError;
  const haveMovies = movies && movies.length > 0;
  const emptyMovies = !haveMovies && !isLoading && !isError;
  const showList = (isLoading || haveMovies) && !isError;
  const showEmpty = emptyMovies && !isError;
  const listProps = { movies, isLoading };
  const emptyProps = { text: TEXT_EMPTY_MOVIES };
  const headerProps = { onChange, value };

  return {
    showList,
    showEmpty,
    headerProps,
    emptyProps,
    listProps,
    showError: isError,
  };
}
