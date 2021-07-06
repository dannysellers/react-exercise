import React from 'react';
import { useSelector } from "react-redux";
import Textbox from "./components/Textbox";
import {selectCitiesByName} from "./selectors";

function App() {
  const [searchTerm, setSearchTerm] = React.useState('');
  const cities = useSelector((state) => selectCitiesByName(state, searchTerm));

  return (
    <div>
      <h1>React Typeahead</h1>
      <Textbox onChange={(evt) => setSearchTerm(evt.target.value)} />
      {/* todo: extract into table component */}
      <table>
        <tbody>
          {cities.map((city, idx) => <tr key={idx}>
            <td>{city.name}</td>
            <td>{city.country}</td>
          </tr>)}
        </tbody>
      </table>
    </div>
  );
}

export default App;
