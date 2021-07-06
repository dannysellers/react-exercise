import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {selectCitiesByName} from "../selectors";
import { setActiveCity } from "../actions";

const CitiesTable = () => {
  const dispatch = useDispatch();
  const cities = useSelector(selectCitiesByName);

  return <table>
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
  </table>
}

export default CitiesTable;
