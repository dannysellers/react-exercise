import React from 'react';
import { useSelector } from "react-redux";
import {selectCitiesByName} from "../selectors";

const CitiesTable = () => {
  const cities = useSelector(selectCitiesByName);

  return <table>
    <thead>
      <td>Name</td>
      <td>Country</td>
      <td>Likes</td>
    </thead>
    <tbody>
    {cities.map((city, idx) => <tr key={idx}>
      <td>{city.name}</td>
      <td>{city.country}</td>
      <td>{city.details.likes}</td>
    </tr>)}
    </tbody>
  </table>
}

export default CitiesTable;
