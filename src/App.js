import React from 'react';
import {useDispatch} from "react-redux";
import styled from "@emotion/styled";

import {setSearchTerm} from "./actions";

import Textbox from "./components/Textbox";
import CitiesTable from "./components/CitiesTable";
import CityDetail from "./components/CityDetail";

const Container = styled.div({
  fontFamily: 'Avenir'
});

function App() {
  const dispatch = useDispatch();

  return (
    <Container>
      <h1>React Typeahead</h1>
      <Textbox onChange={(evt) => dispatch(setSearchTerm(evt.target.value))}/>
      <div style={{ maxWidth: '50%' }}>
        <div style={{ float: 'left' }}>
          <CitiesTable/>
        </div>
        <div style={{ float: 'right' }}>
          <CityDetail />
        </div>
      </div>
    </Container>
  );
}

export default App;
