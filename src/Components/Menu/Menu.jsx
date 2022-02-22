import React from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faXmark } from '@fortawesome/free-solid-svg-icons';
import RoundButton from '../RoundButton';
import MenuWrapper from './MenuStyles';

export default function Menu({ deleteFirstMovie, setSwipeDirection }) {
  return (
    <MenuWrapper>
      <RoundButton
        iconColor="#ff006f"
        deleteFirstMovie={deleteFirstMovie}
        setSwipeDirection={() => setSwipeDirection('left')}
      >
        <FontAwesomeIcon icon={faXmark} />
      </RoundButton>
      <RoundButton
        iconColor="#00eda6"
        deleteFirstMovie={deleteFirstMovie}
        setSwipeDirection={() => setSwipeDirection('right')}
      >
        <FontAwesomeIcon icon={faHeart} />
      </RoundButton>
    </MenuWrapper>
  );
}

Menu.propTypes = {
  deleteFirstMovie: PropTypes.func.isRequired,
  setSwipeDirection: PropTypes.func.isRequired,
};
