import React from 'react'

import { LoginStyled } from '../styles/views'
import Header from '../components/Header'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import { Link } from 'react-router-dom'
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

import { register_validation } from '../utils/yup'
import { yupResolver } from '@hookform/resolvers/yup';
import { auth } from '../service/config'

import ErrorManager from '../utils/errorManager'
import { notifyError } from '../utils/toastfy'
import { ToastContainer } from 'react-toastify';

import { createUserWithEmailAndPassword } from 'firebase/auth'

export default function Register() {

    const navigate = useNavigate()

    const { register, handleSubmit: Submit, formState: { errors } } = useForm({
        resolver: yupResolver(register_validation)
    })

    const handleSubmit = (data) => {
        createUserWithEmailAndPassword(auth, data.email, data.password)
            .then(async (userCredential) => {
                // Signed in
                const user = userCredential.user;
                // await myApi.createUserDocumentFromAuth(user, data)
                // ...
                navigate('/')
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                const manager = new ErrorManager()
                notifyError(manager.Message(errorCode))
                alert('ixi')
            });
    }

    return (
        <LoginStyled>
            <ToastContainer />
            <Header />
            <main>
                <form onSubmit={Submit(handleSubmit)}
                    style={{ height: 'max(480px, 50vh)' }}>

                    <TextField label="Nome" error={Boolean(errors.name)} helperText={errors.name?.message} {...register("name")} />

                    <input id="input-picture" type="file" {...register("picture")} />

                    <label id="label-picture" htmlFor="input-picture" >
                        <InsertPhotoIcon />
                        <h5>Inserir Foto</h5>
                    </label>

                    <TextField label="Email" {...register("email")} error={Boolean(errors.email)} helperText={errors.email?.message}/>

                    <TextField type='password' label="Senha" {...register("password")} error={Boolean(errors.password)} helperText={errors.password?.message}/>

                    <TextField type='password' label="Confirmação de Senha" {...register("check_password")} error={Boolean(errors.check_password)} helperText={errors.check_password?.message}/>
                    
                    <Button variant="contained" type="submit">
                        Cadastrar
                    </Button>

                    <span>
                        Já possui acesso ? <Link to="/login">Entrar</Link>
                    </span>
                </form>
            </main>
        </LoginStyled>
    )
}
