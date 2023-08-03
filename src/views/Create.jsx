import React from 'react'

import { CreateStyled } from '../styles/views';
import IconButton from '@mui/material/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'

import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form'

import { collection, doc, setDoc } from 'firebase/firestore'
import { db } from '../service/config'

import { notifyError, notifySuccess } from '../utils/toastfy'
import { ToastContainer } from 'react-toastify';

import Header from '../components/Header';

export default function Create() {

    const navigate = useNavigate()

    const { register, handleSubmit, formState: { errors } } = useForm()

    const mySubmit = async (data) => {
        const docRef = doc(collection(db, "Products"));

        try{
            await setDoc(docRef, {
                modelo: data.modelo,
                tipo_de_tinta: data.tipo_de_tinta,
                cor_de_tinta: data.cor_de_tinta,
                cor_de_linha: data.cor_de_linha,
                espessura_de_linha: data.espessura_de_linha,
                espaçamento_de_costura: data.espaçamento_de_costura,
                tamanho_de_costura: data.tamanho_de_costura,
                tipo_de_material: data.tipo_de_material,
                cor_de_material: data.cor_de_material,
                cabedal: data.cabedal,
                aviamentos: data.aviamentos,
                palmilha: data.palmilha,
                tempo_de_secagem: data.tempo_de_secagem,
                quantidade: data.quantidade,
                regulagem_dos_equipamentos: data.regulagem_dos_equipamentos,
                modo_de_preparo_das_peças: data.modo_de_preparo_das_peças,
            });
            notifySuccess(data.modelo + " Cadastrado Com Sucesso")
        }catch(error){
            notifyError(error.message)
        }
    }

    return (
        <CreateStyled>
            <ToastContainer />
            <Header />
            <main>
                <form onSubmit={handleSubmit(mySubmit)}>
                    <div className='form-division'>
                        <TextField fullWidth label="Modelo" {...register("modelo")}/>
                        <TextField fullWidth label="Tipo de Tinta" {...register("tipo_de_tinta")}/>
                        <TextField fullWidth label="Cor de TInta" {...register("cor_de_tinta")}/>
                        <TextField fullWidth label="Cor de Linha" {...register("cor_de_linha")}/>
                        <TextField fullWidth label="Espessura de Linha" {...register("espessura_de_linha")}/>
                        <TextField fullWidth label="Espaçamento de Costura" {...register("espaçamento_de_costura")}/>
                    </div>
                    <div className='form-division'>
                        <TextField fullWidth label="Tamanho de Costura" {...register("tamanho_de_costura")}/>
                        <TextField fullWidth label="Tipo de Material" {...register("tipo_de_material")}/>
                        <TextField fullWidth label="Cor de Material" {...register("cor_de_material")}/>
                        <TextField fullWidth label="Cabedal" {...register("cabedal")}/>
                        <TextField fullWidth label="Aviamentos" {...register("aviamentos")}/>
                        <TextField fullWidth label="Palmilha" {...register("palmilha")}/>
                    </div>
                    <div className='form-division'>
                        <TextField fullWidth label="Tempo de Secagem" {...register("tempo_de_secagem")}/>
                        <TextField fullWidth label="Quantidade" {...register("quantidade")}/>
                        <textarea placeholder="Regulagem dos Equipamentos" {...register("regulagem_dos_equipamentos")}/>
                        <textarea placeholder="Modo de Preparo das Peças" {...register("modo_de_preparo_das_peças")}/>
                    </div>
                    <Button variant="contained" type="submit">
                        Adicionar Produto
                    </Button>
                </form>
            </main>
        </CreateStyled>
    )
}
