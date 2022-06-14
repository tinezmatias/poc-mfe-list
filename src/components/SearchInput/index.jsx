// Vendor
import React from 'react';
// Internal
import { TEXT_SEARCH_PLACE_HOLDER } from '../../constants';
import './styles.css';

export function SearchInput(props) {
  return (
    <input
      {...props}
      placeholder={TEXT_SEARCH_PLACE_HOLDER}
      className='ds-search-input'
    />
  );
}

SearchInput.defaultProps = {
  value: '',
};
