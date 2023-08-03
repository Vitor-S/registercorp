import * as yup from "yup";

export const register_validation = yup.object().shape({
    name: yup.string().required('Campo Obrigatório').min(3, 'Mínimo 3 letras').max(20, 'Máximo 20 letras'),
    email: yup.string().email('Insira um email válido').required('Campo Obrigatório'),
    password: yup.string().required('Campo Obrigatório').min(6, 'Mínimo 6 caracteres'),
    check_password: yup.string().required('Campo Obrigatório').oneOf([yup.ref('password'), null], 'As senhas são diferentes'),
})

export const login_validation = yup.object().shape({
    email: yup.string().email('Insira um email válido').required('Campo Obrigatório'),
    password: yup.string().required('Campo Obrigatório').min(6, 'Mínimo 6 caracteres'),
})