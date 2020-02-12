import React, {useState, useEffect} from 'react';
import AppBar from './components/AppBar';
import './App.css';
import { ThemeProvider } from '@material-ui/core/styles';
import createMuiTheme from './ui/theme/index'
import GameCard from './components/GameCard'
export default function App(){
    const [menuOpen, setMenuOpen] = useState(false);
    const [items, setItems] = useState([]);

    
    useEffect(() => {
      setItems(['1','2','3','4','5'])

    }, []);

    return (
      <div className="App">
        <ThemeProvider theme={createMuiTheme}>
          <AppBar position="static" setOpen={() => setMenuOpen(!menuOpen)} onClick={() => setMenuOpen(!menuOpen)} open={menuOpen}/>
          {items.map(item => <GameCard />)}
        </ThemeProvider>
      </div>
    );
  }