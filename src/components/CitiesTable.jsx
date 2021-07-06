import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import styled from "@emotion/styled";

import {selectCitiesByName} from "../selectors";
import { setActiveCity } from "../actions";

const Container = styled.table({
  lineHeight: '1.25rem',
  'tbody > tr:nth-child(2n + 1)': {
    backgroundColor: 'lightgrey'
  }
});

const CitiesTable = () => {
  const dispatch = useDispatch();
  const cities = useSelector(selectCitiesByName);

  return <Container>
    <thead>
      <tr>
        <td>Name</td>
        <td>Country</td>
        <td>Likes</td>
      </tr>
    </thead>
    <tbody>
    {cities.map((city, idx) => <tr key={idx}>
      <td>
        {/* todo: use `city.id` */}
        <button onClick={() => dispatch(setActiveCity(city))}>
          {city.name}
        </button>
      </td>
      <td>{city.country}</td>
      <td>{city.details.likes}</td>
    </tr>)}
    </tbody>
  </Container>
}

export default CitiesTable;
