import React from 'react';
// Styles
import './styles.css';

export function Footer() {
  return (
    <div className='ds-footer-container'>
      <a
        className='ds-footer-anchor'
        target='_blank'
        rel='noreferrer'
        data-testid='github'
        href='https://github.com/tinezmatias/react-app-movies'>
        <img
          alt='github-logo'
          src='/assets/git.webp'
          className='ds-footer-img'
        />
      </a>
      <a
        href='https://www.linkedin.com/in/mm-martinez/'
        className='ds-footer-anchor'
        target='_blank'
        rel='noreferrer'
        data-testid='linkedin'>
        <img
          alt='linkedin-logo'
          src='/assets/in.webp'
          className='ds-footer-img'
        />
      </a>
    </div>
  );
}
