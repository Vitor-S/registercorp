import React, { useEffect, useState } from 'react'
import Button from '@mui/material/Button'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { ButtonGroup } from '@mui/material';
import { ProductsStyled } from '../styles/views';
import Header from '../components/Header';

import { collection, deleteDoc, doc, onSnapshot } from 'firebase/firestore'
import { db } from '../service/config'
import { notifySuccess } from '../utils/toastfy';
import { ToastContainer } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

export default function Products() {

    const [products, setProducts] = useState()

    useEffect(() => {
        // Crie uma função para buscar os documentos da coleção 'Products'
        const unsubscribe = onSnapshot(collection(db, "Products"), (snapshot) => {
            const updatedProducts = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
            setProducts(updatedProducts);
        });

        return () => unsubscribe(); // Limpe o ouvinte quando o componente for desmontado
    }, []);


    return (
        <ProductsStyled>
            <ToastContainer />
            <Header />
            <main>
                {
                    products && products.map(prod => <Product key={prod.id} data={prod} />)
                }
            </main>
        </ProductsStyled>
    )
}

const Product = ({ data }) => {

    const navigate = useNavigate()

    const handleDelete = async (id) => {
        try {
            await deleteDoc(doc(db, "Products", id));
            notifySuccess(data.modelo + " Deletado Com Sucesso")
        }
        catch (error) {
            alert(error.message)
        }
    }

    return (
        <ButtonGroup sx={{ height: 70, gap: 2 }}>
            <button id="button" style={{width: '25vw'}}>
                {data.modelo}
            </button>
            <button id="button" style={{aspectRatio: '1/1', 
                backgroundColor: '#fff', color: '#20435d'}} onClick={() => navigate("/Edit/"+data.id)}>
                <EditIcon/>
            </button>
            <button id="button" style={{aspectRatio: '1/1', 
                backgroundColor: '#fff', color: '#20435d'}} onClick={() => handleDelete(data.id)}>
                <DeleteIcon/>
            </button>
        </ButtonGroup>
    )
}
