import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { Frame, Button } from '../components';

const Title = styled.h2`
  margin: 30px;
`;

const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  button {
    margin: 20px auto;
  }
`;

export function Random() {
  const [timesClicked, setTimesClicked] = useState(0);
  const [joke, setJoke] = useState();
  const [loading, setLoading] = useState();

  const getJoke = () => {
    setLoading(true);
    setJoke(null);
    axios
      .get('https://icanhazdadjoke.com/', {
        headers: { Accept: 'application/json' }
      })
      .then((res) => {
        setJoke(res.data.joke);
        setLoading(false);
      });
  };

  const handleClick = () => {
    setTimesClicked(timesClicked + 1);
    getJoke();
  };

  useEffect(getJoke, []);

  return (
    <div>
      <Title>Random Dad Joke!</Title>
      <FlexColumn>
        <Frame>{joke ? <p>{joke}</p> : 'Loading your joke...'}</Frame>
        <Button onClick={handleClick} disabled={loading}>
          {'I got ' + timesClicked + ' jokes'}
        </Button>
      </FlexColumn>
    </div>
  );
}
