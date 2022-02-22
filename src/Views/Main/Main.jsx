import React, { useState, useEffect } from 'react';
import MainWrapper from './MainStyles';
import moviesListArray from '../../Helpers/data-mock';
import Stack from '../../Components/Stack';
import Menu from '../../Components/Menu';

export default function Main() {
  const [moviesList, setMoviesList] = useState([]);
  const [newMovieList, setNewMovieList] = useState(null);
  const [firstCard, setFirstCard] = useState(null);
  const [swipeDirection, setSwipeDirection] = useState(null);

  const handleVote = (movieId) => {
    const requestOptions = {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id: movieId }),
    };

    if (swipeDirection === 'right') {
      fetch(`/recommendations/${movieId}/accept`, requestOptions)
        .then((response) => console.log(response))
        .catch((error) => console.log(error));
    }
    if (swipeDirection === 'left') {
      fetch(`/recommendations/${movieId}/reject`, requestOptions)
        .then((response) => console.log(response))
        .catch((error) => console.log(error));
    }
  };

  // return new array with last item removed
  const deleteFirstMovie = (array) => array.filter((_, index) => index < array.length - 1);

  useEffect(() => {
    if (firstCard) {
      handleVote(firstCard.id);
      setFirstCard(newMovieList[newMovieList.length - 1]);
      setMoviesList(newMovieList);
    }
  }, [newMovieList]);

  useEffect(() => {
    // Simulate API call with promise.
    moviesListArray
      .then((data) => {
        setMoviesList(data);
        setFirstCard(data[data.length - 1]);
      })
      .catch((err) => console.log(err));
  }, []);

  if (moviesList.length > 0) {
    return (
      <MainWrapper className="App">
        <Stack
          moviesList={moviesList}
          setFirstCard={setFirstCard}
          deleteFirstMovie={() => setNewMovieList(deleteFirstMovie(moviesList))}
          newMovieList={newMovieList}
          setSwipeDirection={setSwipeDirection}
          swipeDirection={swipeDirection}
        />
        <Menu
          deleteFirstMovie={() => setNewMovieList(deleteFirstMovie(moviesList))}
          setSwipeDirection={setSwipeDirection}
          swipeDirection={swipeDirection}
        />
      </MainWrapper>
    );
  }
  return <MainWrapper> No data! </MainWrapper>;
}
