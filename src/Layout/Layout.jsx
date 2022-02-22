import React from 'react';
import PropTypes from 'prop-types';
import ViewWrapper from './LayoutStyles';
import Header from '../Components/Header';

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <ViewWrapper>
        {' '}
        {children}
      </ViewWrapper>
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
