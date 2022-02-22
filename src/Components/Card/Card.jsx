import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import {
  MotionCard, CardImage, Header, Text, GradientOverlay,
} from './CardStyles';

export default function Card({
  movie, deleteFirstMovie, newMovieList, isTop, setSwipeDirection, swipeDirection,
}) {
  const {
    imageURL, title, summary, rating, id,
  } = movie;
  const [lastCardPosition, setLastCardPosition] = useState(0);
  const [swipeDistance, setSwipeDistance] = useState(0);

  const handleDrag = (offset) => {
    if (offset > 350) {
      setSwipeDirection('right');
      setLastCardPosition(offset);
      deleteFirstMovie();
    }
    if (offset < -350) {
      setSwipeDirection('left');
      setLastCardPosition(offset);
      deleteFirstMovie();
    }
  };

  // Swipe out animation trigger
  useEffect(() => {
    if (newMovieList && isTop) {
      setSwipeDistance(lastCardPosition + (swipeDirection === 'right' ? 500 : -500));
    }
  }, [newMovieList]);

  return (
    <MotionCard
      key={id}
      drag
      dragConstraints={{
        top: 10,
        left: 10,
        right: 10,
        bottom: 10,
      }}
      onDragEnd={(event, info) => handleDrag(info.offset.x)}
      animate={{ x: swipeDistance, opacity: 1 }}
      transition={{ ease: 'easeOut', duration: 1 }}
      exit={{ opacity: 0 }}
      data-testid={`card-${id}`}
    >
      <Header>
        {title}
        {' '}
        - (
        {rating}
        /10)
      </Header>
      <GradientOverlay />
      <CardImage src={imageURL} alt="bg-pic" />
      <Text>{summary}</Text>
    </MotionCard>
  );
}

Card.propTypes = {
  movie: PropTypes.shape({
    imageURL: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    id: PropTypes.string.isRequired,
  }).isRequired,
  deleteFirstMovie: PropTypes.func.isRequired,
  newMovieList: PropTypes.arrayOf(PropTypes.shape({
    imageURL: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    id: PropTypes.string.isRequired,
  })).isRequired,
  isTop: PropTypes.bool.isRequired,
  setSwipeDirection: PropTypes.func.isRequired,
  swipeDirection: PropTypes.string.isRequired,
};
