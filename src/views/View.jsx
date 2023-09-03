import React, { useEffect } from 'react'
import { ViewStyled } from '../styles/views'
import { useState } from 'react';
import IconButton from '@mui/material/IconButton'
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import FullscreenExitIcon from '@mui/icons-material/FullscreenExit';
import ArrowBackIosNewTwoToneIcon from '@mui/icons-material/ArrowBackIosNewTwoTone';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Paper } from '@mui/material';
import Tag from '../components/Tag'
import { useNavigate } from 'react-router-dom';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import { signOut } from 'firebase/auth'
import { auth } from '../service/config';
import { notifyError } from '../utils/toastfy';

import { useParams } from 'react-router-dom';

import { doc, getDoc } from 'firebase/firestore';
import { db } from '../service/config';

export default function View() {

    const [isFullscreen, setIsFullscreen] = useState(false);
    const [isProduction, setIsProduction] = useState(false)

    const [products, setProducts] = useState(null)
    const [currentIndex, setCurrentIndex] = useState(0)


    const navigate = useNavigate()

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

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



    const handleFullscreenClick = () => {
        const element = document.documentElement;

        if (!isFullscreen) {
            if (element.requestFullscreen) {
                element.requestFullscreen();
            } else if (element.mozRequestFullScreen) {
                element.mozRequestFullScreen();
            } else if (element.webkitRequestFullscreen) {
                element.webkitRequestFullscreen();
            } else if (element.msRequestFullscreen) {
                element.msRequestFullscreen();
            }
        } else {
            if (document.exitFullscreen) {
                document.exitFullscreen();
            } else if (document.mozCancelFullScreen) {
                document.mozCancelFullScreen();
            } else if (document.webkitExitFullscreen) {
                document.webkitExitFullscreen();
            } else if (document.msExitFullscreen) {
                document.msExitFullscreen();
            }
        }

        setIsFullscreen(!isFullscreen);
    };

    const toggleActiveMode = () => {
        setIsProduction(!isProduction)
    }

    const { id } = useParams();

    const getDemand = async (demand_id) => {
        const docRef = doc(db, "History", demand_id);
        const docSnap = await getDoc(docRef);
        return docSnap.data();
    }

    useEffect(() => {
        const fetchProduct = async () => {
            const demandRef = await getDemand(id);
            setProducts(demandRef.products);
        }
        fetchProduct();
    }, [id]);

    if (products) return (
        <ViewStyled>
            <header id="main-header">
                <div id="fullscreen">
                    <IconButton onClick={handleFullscreenClick}>
                        {
                            isFullscreen ?
                                <FullscreenExitIcon /> :
                                <FullscreenIcon />
                        }
                    </IconButton>
                </div>
                <div id="options">
                    <button onClick={toggleActiveMode}>PRÉ PRODUÇÃO</button>
                    <button onClick={toggleActiveMode}>PRODUÇÃO</button>
                    <div>
                        <IconButton sx={{ opacity: currentIndex - 1 < 0 ? '0.5' : '1' }}
                            disabled={currentIndex - 1 < 0}
                            onClick={() => setCurrentIndex(currentIndex - 1)}>
                            <ArrowBackIosNewTwoToneIcon style={{ color: '#fff' }} />
                        </IconButton>
                        <span>{products[currentIndex].modelo.toUpperCase()}</span>
                        <IconButton sx={{ opacity: currentIndex + 1 >= products.length ? '0.5' : '1' }} disabled={currentIndex + 1 >= products.length}
                            onClick={() => setCurrentIndex(currentIndex + 1)}>
                            <ArrowForwardIosIcon style={{ color: '#fff' }} />
                        </IconButton>
                    </div>
                </div>
                <div id="menu">
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
            </header>
            <main>
                {
                    !isProduction ?
                        <section id="pre-production">
                            <>
                                <div>
                                    <Paper>
                                        <h1>Regulagem dos Equipamentos</h1>
                                        <textarea disabled value={products[currentIndex].regulagem_dos_equipamentos} />
                                    </Paper>
                                </div>
                                <div>
                                    <Paper>
                                        <h1>Modo de Preparo das Peças</h1>
                                        <textarea disabled value={products[currentIndex].modo_de_preparo_das_peças} />
                                    </Paper>
                                </div>
                            </>
                        </section> :
                        <section id="production">
                            <Tag prodKey="Modelo" prodValue={products[currentIndex].modelo} />
                            <Tag prodKey="Tipo de Tinta" prodValue={products[currentIndex].tipo_de_tinta} />
                            <Tag prodKey="Cor de Tinta" prodValue={products[currentIndex].cor_de_tinta} />
                            <Tag prodKey="Cor de Linha" prodValue={products[currentIndex].cor_de_linha} />
                            <Tag prodKey="Espessura de Linha" prodValue={products[currentIndex].espessura_de_linha} />
                            <Tag prodKey="Espaçamento de Costura" prodValue={products[currentIndex].espaçamento_de_costura} />
                            <Tag prodKey="Tamanho de Costura" prodValue={products[currentIndex].tamanho_de_costura} />
                            <Tag prodKey="Tipo de Material" prodValue={products[currentIndex].tipo_de_material} />
                            <Tag prodKey="Cor de Material" prodValue={products[currentIndex].cor_de_material} />
                            <Tag prodKey="Cabedal" prodValue={products[currentIndex].cabedal} />
                            <Tag prodKey="Aviamentos" prodValue={products[currentIndex].aviamentos} />
                            <Tag prodKey="Palmilha" prodValue={products[currentIndex].palmilha} />
                            <Tag prodKey="Tempo de Secagem" prodValue={products[currentIndex].tempo_de_secagem} />
                            <Tag prodKey="Quantidade" prodValue={products[currentIndex].quantidade} />
                        </section>
                }
            </main>
        </ViewStyled>
    )
}
