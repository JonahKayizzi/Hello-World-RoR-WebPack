import React from 'react';
import { useSelector } from 'react-redux';

const Greeting = () => {
  const { greeting } = useSelector((state) => state.greetings);
  return <h1>{greeting}</h1>;
};
