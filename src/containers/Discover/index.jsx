import React from 'react';
// Internal
import {
  Message,
  ErrorMessage,
  Header,
  MoviesList,
  Footer,
} from '../../components';
import { useDiscover } from '../../hooks';
import './styles.css';

export default function Discover() {
  const { showEmpty, showError, showList, emptyProps, headerProps, listProps } =
    useDiscover();

  return (
    <>
      <div className='ds-discover-container'>
        <Header {...headerProps} />
        <div className='ds-discover-content-container '>
          {showError && <ErrorMessage />}
          {showEmpty && <Message {...emptyProps} />}
          {showList && <MoviesList {...listProps} />}
        </div>
      </div>
      <Footer />
    </>
  );
}
