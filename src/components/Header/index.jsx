// Vendor
import React from 'react';
// Internal
import { SearchInput, SubTitle, Title, StarsFilter } from '..';
import { TEXT_SUB_TITLE, TEXT_TITLE } from '../../constants';
// Styles
import './styles.css';

export function Header(props) {
  return (
    <div className='ds-header-bg'>
      <div className='ds-header-container'>
        <Title text={TEXT_TITLE} />
        <SubTitle text={TEXT_SUB_TITLE} />
        <SearchInput {...props} />
        <StarsFilter />
      </div>
    </div>
  );
}

Header.defaultProps = {
  value: '',
};
