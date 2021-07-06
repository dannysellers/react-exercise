import React from 'react';
import {useDispatch} from "react-redux";

import { setSearchTerm } from "./actions";

import Textbox from "./components/Textbox";
import CitiesTable from "./components/CitiesTable";

function App() {
  const dispatch = useDispatch();

  return (
    <div>
      <h1>React Typeahead</h1>
      <Textbox onChange={(evt) => dispatch(setSearchTerm(evt.target.value))} />
      <CitiesTable />
    </div>
  );
}

export default App;
