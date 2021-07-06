import React from 'react';
import { useSelector } from "react-redux";
import {selectActiveCity} from "../selectors";

const CityDetail = () => {
  const activeCity = useSelector(selectActiveCity);

  if (!activeCity) {
    // only show city info when city selected
    return null;
  }

  const {
    name,
    country,
    location,
    details
  } = activeCity;

  return <div>
    {/* todo: styling */}
    {/* todo: way to close detail view / unset active city in redux */}
    <h2>{name}</h2>
    <dl>
      {/* todo: render city attributes by looping over Object.keys(activeCity) */}
      <dt>Country</dt>
      <dd>{country}</dd>

      <dt>Location</dt>
      <dd>{location.lat}, {location.lng}</dd>

      <dt>Likes</dt>
      <dd>{details.likes}</dd>
    </dl>
  </div>
};

export default CityDetail;
