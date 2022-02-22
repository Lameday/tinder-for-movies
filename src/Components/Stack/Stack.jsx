import React from 'react';
import PropTypes from 'prop-types';
import { AnimatePresence } from 'framer-motion';
import Frame from './StackStyles';
import Card from '../Card';

export default function Stack({
  moviesList, deleteFirstMovie, newMovieList, setSwipeDirection, swipeDirection,
}) {
  return (
    <Frame data-testid="frame">
      <AnimatePresence>
        {moviesList.map((movie, index) => {
          const isTop = index === moviesList.length - 1;
          return (
            <Card
              key={movie.id}
              movie={movie}
              deleteFirstMovie={deleteFirstMovie}
              isTop={isTop}
              newMovieList={newMovieList}
              setSwipeDirection={setSwipeDirection}
              swipeDirection={swipeDirection}
            />
          );
        })}
      </AnimatePresence>
    </Frame>
  );
}

Stack.propTypes = {
  moviesList: PropTypes.arrayOf(PropTypes.shape({
    imageURL: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    id: PropTypes.string.isRequired,
  })).isRequired,
  deleteFirstMovie: PropTypes.func.isRequired,
  newMovieList: PropTypes.arrayOf(PropTypes.shape({
    imageURL: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    id: PropTypes.string.isRequired,
  })),
  setSwipeDirection: PropTypes.func.isRequired,
  swipeDirection: PropTypes.string,
};
Stack.defaultProps = {
  newMovieList: null,
  swipeDirection: null,
};
