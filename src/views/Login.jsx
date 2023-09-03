import React from 'react'

import { LoginStyled } from '../styles/views'
import { TextField, Button } from '@mui/material'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { login_validation } from '../utils/yup'
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form'

import { ToastContainer } from 'react-toastify';
import { notifyError, notifySuccess } from '../utils/toastfy'

import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../service/config'
import vertical_dark from '../assets/logo-vertical-dark.png'

import ErrorManager from '../utils/errorManager'

export default function Login() {

    const navigate = useNavigate()

    const { register, handleSubmit: Submit, formState: { errors } } = useForm({
        resolver: yupResolver(login_validation)
    })

    const handleSubmit = (data) => {
        signInWithEmailAndPassword(auth, data.email, data.password)
            .then(async (userCredential) => {
                // Signed in
                const user = userCredential.user;

                notifySuccess('Logado')
                navigate('/')
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                const manager = new ErrorManager()
                notifyError(manager.Message(errorCode))
            });
    }

    return (
        <LoginStyled>
            <ToastContainer />
            <main>
                <div id="form-wrapper">
                    <form onSubmit={Submit(handleSubmit)}>
                        <span id="welcome">Bem-vindo</span>
                        <TextField label="Email" error={Boolean(errors.email)} helperText={errors.email?.message} {...register("email")} />

                        <TextField type='password' label="Senha" error={Boolean(errors.password)} helperText={errors.password?.message}
                            {...register("password")} />

                        <button variant="contained" type="submit">
                            ENTRAR
                        </button>
                        <span>
                            Entre na plataforma Registercorp
                        </span>
                    </form>
                </div>
                <div id="logo-wrapper">
                    <img id="logo" src={vertical_dark} />
                </div>
            </main>
        </LoginStyled>
    )
}