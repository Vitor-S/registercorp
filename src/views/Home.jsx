import React from 'react'

import { HomeStyled } from '../styles/views'
import Button from '@mui/material/Button'
import AddIcon from '@mui/icons-material/Add';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import { auth } from '../service/config';
import logo_light from '../assets/logo-light.png'

import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { onAuthStateChanged } from 'firebase/auth'

export default function Home() {

    const navigate = useNavigate()

    const [userLogged, setUserLogged] = useState(null)

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (!user) navigate('/login')
            else setUserLogged(user)
        });
    }, [userLogged])

    return (
        <HomeStyled>
            <Header />
            <main>
                <div>
                    {
                        userLogged && userLogged.email == "administrador@registercorp.com" ?
                            <>
                                <Link to="/Create">
                                    <button>
                                        Registrar Produto
                                    </button>
                                </Link>
                                <Link to="/Products">
                                    <button>
                                        Ver Produtos
                                    </button>
                                </Link>
                            </> : <></>
                    }
                    <Link to="/CreateDemand">
                        <button>
                            Criar Demanda
                        </button>
                    </Link>
                    <Link to="/History">
                        <button>
                            Ver Histórico
                        </button>
                    </Link>
                </div>
                <div id="logo-wrapper">
                    <img id="logo" src="https://snz04pap002files.storage.live.com/y4mXpyoqM-Ykvhdj8QT9mBBez7k6qHxbTuE59T1fCMZ-X9ERASLy7KnMoSdvCiymN6Dxejc_nj9tGE2-6Q_Xz009MlSpyBekueQNy4fgB29m4uWh1asZXs5xqu-tabJWGvIAFeBFqSm4OdW_hi487qyl6HAShxrVY70iAnNOgVyDDcULQ07Bw3CrmJ4drlMhQLaFLTQ9xwp1vh6aA8rylu5hAQLc7mQWZ83WUtoC7LrUMA?encodeFailures=1&width=219&height=219" />
                </div>
            </main>
        </HomeStyled>

    )
}
