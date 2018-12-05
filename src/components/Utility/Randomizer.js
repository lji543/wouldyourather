import React from 'react';

const Randomizer = props => {

  const getRandomInt = max =>
    Math.floor(Math.random() * Math.floor(max))

  const randomWord = arr =>
    arr[Math.floor(Math.random()*arr.length)]

  if (props.max) {
    return (
      getRandomInt(props.max)
    );
  }

  return (
    randomWord(props.arr)
  );
}

export default Randomizer;
