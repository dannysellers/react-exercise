import React from 'react';
import { useSelector } from "react-redux";
import {selectCitiesByName} from "../selectors";

const CitiesTable = () => {
  const cities = useSelector(selectCitiesByName);

  return <table>
    <tbody>
    {cities.map((city, idx) => <tr key={idx}>
      <td>{city.name}</td>
      <td>{city.country}</td>
    </tr>)}
    </tbody>
  </table>
}

export default CitiesTable;
