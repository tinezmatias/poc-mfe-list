// Vendor
import React from 'react';
// Internal
import { STAR_POPULARITY_VALUES } from '../../constants';
import { usePopularityFilter } from '../../hooks/contexts';
import { Star } from './Star';
import './styles.css';

export function StarsFilter() {
  const { currentFilterValue, dispatchFilter } = usePopularityFilter();

  const onClick = (id) => {
    const newValue = currentFilterValue === id ? 0 : id;
    dispatchFilter(newValue);
  };

  return (
    <div className='ds-rating'>
      {React.Children.toArray(
        STAR_POPULARITY_VALUES.map((id) => (
          <Star current={currentFilterValue || 0} onClick={onClick} id={id} />
        ))
      )}
    </div>
  );
}
