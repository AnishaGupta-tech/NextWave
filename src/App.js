import React, { useState } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
// import { darkTheme, lightTheme } from './styles/themes';

import { darkTheme } from './styles/themes/darkTheme';
import { lightTheme } from './styles/themes/lightTheme';

import Navbar from './components/Navbar';
import Home from './pages/Home';

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [activeTab, setActiveTab] = useState('home');

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      <div className="App">
        <Navbar 
          darkMode={darkMode} 
          setDarkMode={setDarkMode}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        <main>
          {activeTab === 'home' && <Home />}
          {/* Other pages would be rendered here */}
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;