
import React from 'react';

import  { BrowserRouter,Routes, Route }  from 'react-router-dom';

import { Container } from '@mui/material';
import MenuBreadcrumbs from './components/MenuBreadcrumbs';

import ListAll from './components/ListAll';
import CardOne from './components/CardOne';

import datajson from './datajson/data';
import Piepagina from './components/Piepagina';

function App() {
  const [data, setData] = React.useState([]);
  React.useEffect(()=>{
     setData(datajson)
  },[data])
  return (
    <Container>
      
        <h1>Learn English</h1>
        <BrowserRouter>

            <MenuBreadcrumbs />
            
            <Routes>

              <Route path= "/" element={<ListAll data={data} />} />
              <Route path="/listartodos" element={<ListAll data={data} />} />
              <Route path="/cardone"     element={<CardOne data={data} />} />

            </Routes>

        </BrowserRouter> 
        
        <Piepagina />

    </Container>
  );
}

export default App;
