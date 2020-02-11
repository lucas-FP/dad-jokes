import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { Frame, PageTitle, SearchInput } from '../components';

const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  button {
    margin: 20px auto;
  }
`;

export function Search(props) {
  const { searchTerm, navigate } = props;

  const [jokes, setJokes] = useState([]);
  const [searchValue, setSearchValue] = useState(searchTerm);
  const [loading, setLoading] = useState(false);

  const getJokes = (search = searchTerm) => {
    const queryString = search ? '?term=' + search : '';
    setLoading(true);
    setJokes([]);
    axios
      .get('https://icanhazdadjoke.com/search' + queryString, {
        headers: { Accept: 'application/json' }
      })
      .then((res) => {
        const jokes = res.data.results.map((j) => j.joke);
        setJokes(jokes);
        setLoading(false);
      });
  };

  useEffect(getJokes, []);

  return (
    <div>
      <PageTitle>Search Page</PageTitle>
      <SearchInput
        value={searchValue}
        onChange={setSearchValue}
        onSearch={() => {
          navigate('/search/' + searchValue);
          getJokes(searchValue);
        }}
      />
      {loading ? (
        <Frame>Loading Jokes...</Frame>
      ) : (
        <FlexColumn>
          {jokes && jokes.map((j, i) => <Frame key={i}>{j}</Frame>)}
        </FlexColumn>
      )}
    </div>
  );
}
