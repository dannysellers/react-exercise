import React from 'react';
import {useDispatch} from "react-redux";

import {setSearchTerm} from "./actions";

import Textbox from "./components/Textbox";
import CitiesTable from "./components/CitiesTable";

function App() {
  const dispatch = useDispatch();

  return (
    <>
      <div>
        <h1>React Typeahead</h1>
        <Textbox onChange={(evt) => dispatch(setSearchTerm(evt.target.value))}/>
      </div>
      <div style={{ maxWidth: '50%' }}>
        <div style={{ float: 'left' }}>
          <CitiesTable/>
        </div>
        <div style={{ float: 'right' }}>
          City info section
        </div>
      </div>
    </>
  );
}

export default App;
