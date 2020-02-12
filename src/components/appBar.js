import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import styled from 'styled-components'
import SideMenu from '../ui/menu/SideMenu';

const MenuButtom = styled(IconButton)`
width: 48px;
border-radius: 20px;
`
export default function AppBarTeste(props){
    return (
        <AppBar position="static">
            <Toolbar >
              <SideMenu setOpen={props.setOpen} open={props.open}/>
              <MenuButtom onClick={props.onClick} color="inherit" aria-label="menu"><MenuIcon /></MenuButtom>
            </Toolbar>
          </AppBar>
    )
}