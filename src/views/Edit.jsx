import React, { useEffect, useState } from 'react'

import { CreateStyled } from '../styles/views'
import { useParams } from 'react-router-dom'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import { useForm } from 'react-hook-form'
import { ToastContainer } from 'react-toastify'
import Header from '../components/Header';

import { doc, getDoc, updateDoc } from 'firebase/firestore'
import { db } from '../service/config'
import { notifyError, notifySuccess } from '../utils/toastfy'


export default function Edit() {

    const { id } = useParams();
    const [product, setProduct] = useState();

    const { register, handleSubmit } = useForm()

    const mySubmit = async (data) => {
        const docRef = doc(db, "Products", id);
        try{
            await updateDoc(docRef, data);
            notifySuccess(data.modelo + " Atulizado Com Sucesso")
        }catch(error){
            notifyError(error.message)
        }
    }

    const getProduct = async (prodId) => {
        const docRef = doc(db, "Products", prodId);
        const docSnap = await getDoc(docRef);
        return docSnap.data();
    }

    useEffect(() => {
        const fetchProduct = async () => {
            const productData = await getProduct(id);
            setProduct(productData);
        }
        fetchProduct();
    }, [id]);

    return (
        <CreateStyled>
            <ToastContainer />
            <Header />
            <main>
                {product &&
                    <form onSubmit={handleSubmit(mySubmit)}>
                        <div className='form-division'>

                            <TextField {...register("modelo")} {...register("modelo")} fullWidth label="Modelo" value={product.modelo}
                                onChange={e => setProduct({ ...product, modelo: e.target.value })} />

                            <TextField {...register("tipo_de_tinta")} fullWidth label="Tipo de Tinta" value={product.tipo_de_tinta} onChange={e => setProduct({ ...product, tipo_de_tinta: e.target.value })} />

                            <TextField {...register("cor_de_tinta")} fullWidth label="Cor de Tinta" value={product.cor_de_tinta} onChange={e => setProduct({ ...product, cor_de_tinta: e.target.value })} />

                            <TextField {...register("cor_de_linha")} fullWidth label="Cor de Linha" value={product.cor_de_linha} onChange={e => setProduct({ ...product, cor_de_linha: e.target.value })} />

                            <TextField {...register("espessura_de_linha")} fullWidth label="Espessura de Linha" value={product.espessura_de_linha} onChange={e => setProduct({ ...product, espessura_de_linha: e.target.value })} />

                            <TextField {...register("espaçamento_de_costura")} fullWidth label="Espaçamento de Costura" value={product.espaçamento_de_costura} onChange={e => setProduct({ ...product, espaçamento_de_costura: e.target.value })} />

                        </div>
                        <div className='form-division'>
                            <TextField {...register("tamanho_da_costura")} fullWidth label="Tamanho de Costura" value={product.tamanho_da_costura} onChange={e => setProduct({ ...product, tamanho_da_costura: e.target.value })} />

                            <TextField {...register("tipo_de_material")} fullWidth label="Tipo de Material" value={product.tipo_de_material} onChange={e => setProduct({ ...product, tipo_de_material: e.target.value })} />

                            <TextField {...register("cor_de_material")} fullWidth label="Cor de Material" value={product.cor_de_material} onChange={e => setProduct({ ...product, cor_de_material: e.target.value })} />

                            <TextField {...register("cabedal")} fullWidth label="Cabedal" value={product.cabedal}
                                onChange={e => setProduct({ ...product, cabedal: e.target.value })} />

                            <TextField {...register("aviamentos")} fullWidth label="Aviamentos" value={product.aviamentos} onChange={e => setProduct({ ...product, aviamentos: e.target.value })} />

                            <TextField {...register("palmilha")} fullWidth label="Palmilha" value={product.palmilha}
                                onChange={e => setProduct({ ...product, palmilha: e.target.value })} />

                        </div>
                        <div className='form-division'>
                            <TextField {...register("tempo_de_secagem")} fullWidth label="Tempo de Secagem" value={product.tempo_de_secagem} onChange={e => setProduct({ ...product, tempo_de_secagem: e.target.value })} />

                            <TextField {...register("quantidade")} fullWidth label="Quantidade" value={product.quantidade} onChange={e => setProduct({ ...product, quantidade: e.target.value })} />

                            <textarea {...register("regulagem_dos_equipamentos")} placeholder="Regulagem dos Equipamentos" value={product.regulagem_dos_equipamentos} onChange={e => setProduct({ ...product, regulagem_dos_equipamentos: e.target.value })} />

                            <textarea {...register("modo_de_preparo_das_peças")} placeholder="Modo de Preparo das Peças" value={product.modo_de_preparo_das_peças} onChange={e => setProduct({ ...product, modo_de_preparo_das_peças: e.target.value })} />

                        </div>
                        <span/>
                        <button variant="contained" type="submit">
                            Atualizar Produto
                        </button>
                    </form>
                }
            </main>
        </CreateStyled>
    )
}