import React, {useState} from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import './App.css';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import styled from 'styled-components'
import { ThemeProvider } from '@material-ui/core/styles';
import createMuiTheme from './ui/theme/index'
import SideMenu from './ui/menu/SideMenu';

const MenuButtom = styled(IconButton)`
width: 48px;
border-radius: 20px;
`
export default function App(){
    const [menuOpen, setMenuOpen] = useState(false);

    return (
      <div className="App">
        <ThemeProvider theme={createMuiTheme}>
          <AppBar position="static">
            <Toolbar >
              <SideMenu setOpen={() => setMenuOpen(!menuOpen)} open={menuOpen}/>
              <MenuButtom onClick={() => setMenuOpen(!menuOpen)} color="inherit" aria-label="menu"><MenuIcon /></MenuButtom>
            </Toolbar>
          </AppBar>
        </ThemeProvider>
      </div>
    );
  }