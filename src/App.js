import React, { useState } from 'react';
import { Provider, defaultTheme, Grid, View } from '@adobe/react-spectrum';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Airport from './components/Airport';
import './App.css'

function App() {
  const [view, setView] = useState('home');

  return (
    <Provider theme={defaultTheme}>
      <Grid
        areas={['header header', 'sidebar content']}
        columns={['size-3000', 'auto']}
        rows={['size-1000', 'auto']}
        height="100vh"
      >
        <View gridArea="header">
          <Navbar />
        </View>
        <View gridArea="sidebar">
          <Sidebar setView={setView} />
        </View>
        <View gridArea="content" padding="size-200">
          {view === 'home' && <h2>Home</h2>}
          {view === 'dashboard' && <h2>Dashboard</h2>}
          {view === 'services' && <h2>Services</h2>}
          {view === 'airport' && <Airport />}
        </View>
      </Grid>
    </Provider>
  );
}

export default App;
