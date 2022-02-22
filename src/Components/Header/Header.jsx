import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClapperboard } from '@fortawesome/free-solid-svg-icons';
import HeaderWrapper from './HeaderStyles';

export default function Header() {
  return (
    <HeaderWrapper>
      <p>MOVIE-TINDER</p>
      <FontAwesomeIcon icon={faClapperboard} />
    </HeaderWrapper>
  );
}
