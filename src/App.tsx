import React from 'react';
import './App.css';
import { Stack } from '@mui/material';
import TipCalculator from './features/tipCalculator/TipCalculator';

function App() {
  return (
    <Stack justifyContent={'center'}>
      <h2 className="title">
        SPLI
        <br />
        TTER
      </h2>
      <TipCalculator />
    </Stack>
  );
}

export default App;
