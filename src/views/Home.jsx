import React from 'react'

import { HomeStyled } from '../styles/views'
import Button from '@mui/material/Button'
import AddIcon from '@mui/icons-material/Add';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import { auth } from '../service/config';

export default function Home() {

    const user = auth.currentUser

    return (
        <HomeStyled>
            <Header />
            <main>
                <div>
                    {
                        user && user.email == "administrador@registercorp.com" ?
                            <>
                                <Link to="/Create">
                                    <Button variant="outlined">
                                        Criar Produto
                                    </Button>
                                </Link>
                                <Link to="/Products">
                                    <Button variant="outlined">
                                        Ver Produtos
                                    </Button>
                                </Link>
                            </> : <></>
                    }
                    <Link to="/CreateDemand">
                        <Button variant="outlined">
                            Criar Demanda
                        </Button>
                    </Link>
                    <Link to="/History">
                        <Button variant="outlined">
                            Ver Histórico
                        </Button>
                    </Link>
                </div>
                <div></div>
            </main>
        </HomeStyled>

    )
}
