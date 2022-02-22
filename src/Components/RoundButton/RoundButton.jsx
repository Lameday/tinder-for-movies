import React from 'react';
import PropTypes from 'prop-types';
import ActionButtonContainer from './RoundButtonStyles';

export default function RoundButton({
  children, iconColor, setSwipeDirection, deleteFirstMovie,
}) {
  return (
    <ActionButtonContainer
      onClick={() => {
        setSwipeDirection();
        deleteFirstMovie();
      }}
      iconColor={iconColor}
      data-testid="round-button"
    >
      {children}
    </ActionButtonContainer>
  );
}

RoundButton.propTypes = {
  children: PropTypes.node.isRequired,
  iconColor: PropTypes.string.isRequired,
  setSwipeDirection: PropTypes.func.isRequired,
  deleteFirstMovie: PropTypes.func.isRequired,
};
