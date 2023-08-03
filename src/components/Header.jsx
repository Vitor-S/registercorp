import * as React from 'react';

import { HeaderStyled } from '../styles/components'

import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import { IconButton } from '@mui/material';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth'
import { useState } from 'react';

import { signOut } from 'firebase/auth'
import { auth } from '../service/config';
import { notifyError } from '../utils/toastfy';

export default function Header() {

    const navigate = useNavigate()
    const user = auth.currentUser

    const [userLogged, setUserLogged] = useState(null)

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (!user) navigate('/login')
            else setUserLogged(user)
        });
    }, [user])

    const LogOut = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
            navigate('/login')
        }).catch((error) => {
            // An error happened.
            const errorCode = error.code;
            const errorMessage = error.message;
            notifyError(errorMessage)
        });
    }

    return user && user.email == "administrador@registercorp.com" ? (
        <HeaderStyled>
            <h3>REGISTERCORP</h3>
            <div>
                <IconButton
                    id="fade-button"
                    variant="contained"
                    aria-controls={open ? 'fade-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
                >
                    <MenuRoundedIcon fontSize='large' sx={{ color: '#fff' }} />
                </IconButton>
                <Menu
                    id="fade-menu"
                    MenuListProps={{
                        'aria-labelledby': 'fade-button',
                    }}
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    TransitionComponent={Fade}
                >
                    <MenuItem onClick={() => navigate("/")}>Início</MenuItem>
                    <MenuItem onClick={() => navigate("/Create")}>Criar Produto</MenuItem>
                    <MenuItem onClick={() => navigate("/Products")}>Ver Produtos</MenuItem>
                    <MenuItem onClick={() => navigate("/CreateDemand")}>Criar Demanda</MenuItem>
                    <MenuItem onClick={() => navigate("/History")}>Ver Histórico</MenuItem>
                    <MenuItem onClick={LogOut}>Sair</MenuItem>
                </Menu>
            </div>
        </HeaderStyled>
    ) : (
        <HeaderStyled>
            <h3>REGISTERCORP</h3>
            <div>
                <IconButton
                    id="fade-button"
                    variant="contained"
                    aria-controls={open ? 'fade-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
                >
                    <MenuRoundedIcon fontSize='large' sx={{ color: '#fff' }} />
                </IconButton>
                <Menu
                    id="fade-menu"
                    MenuListProps={{
                        'aria-labelledby': 'fade-button',
                    }}
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    TransitionComponent={Fade}
                >
                    <MenuItem onClick={() => navigate("/")}>Início</MenuItem>
                    <MenuItem onClick={() => navigate("/CreateDemand")}>Criar Demanda</MenuItem>
                    <MenuItem onClick={() => navigate("/History")}>Ver Histórico</MenuItem>
                    <MenuItem onClick={LogOut}>Sair</MenuItem>
                </Menu>
            </div>
        </HeaderStyled>
    )
}