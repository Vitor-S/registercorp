import React, { useEffect, useState } from 'react';

import { CreateDStyled } from '../styles/views';

import { collection, onSnapshot, doc, setDoc, addDoc } from 'firebase/firestore'

import { db } from '../service/config';

import MyButton from '../components/MyButton';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button'
import Header from '../components/Header';
import Swal from 'sweetalert2'

import { notifyError, notifyWarning, notifySuccess } from '../utils/toastfy';
import { ToastContainer } from 'react-toastify';

import { useNavigate } from 'react-router-dom';

export default function CreateDemand() {

    const navigate = useNavigate()

    const [products, setProducts] = useState([])
    const [demand, setDemand] = useState([]);
    const [pairInputs, setPairInputs] = useState({}); // Use um objeto para rastrear o número de pares para cada produto

    useEffect(() => {
        // Crie uma função para buscar os documentos da coleção 'Products'
        const unsubscribe = onSnapshot(collection(db, "Products"), (snapshot) => {
            const updatedProducts = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
            setProducts(updatedProducts);
        });

        return () => unsubscribe(); // Limpe o ouvinte quando o componente for desmontado
    }, []);

    const handleToggle = (prod) => {
        if (products.includes(prod)) {
            setDemand([...demand, prod,]);
            setProducts(products.filter((obj) => obj.id !== prod.id));
        } else {
            setProducts([...products, prod,]);
            setDemand(demand.filter((obj) => obj.id !== prod.id));
        }
    };

    const handleChangePairs = (event, prod) => {
        const updatedPairs = { ...pairInputs };
    
        if (event.target.value === "") {
            // Se o valor do input for vazio, remova a entrada do estado pairInputs
            delete updatedPairs[prod.id];
        } else {
            // Caso contrário, atualize o estado pairInputs com o novo valor
            updatedPairs[prod.id] = event.target.value;
        }
    
        setPairInputs(updatedPairs);
    }
    

    const handleCreateDemand = () => {
        Swal.fire({
            title: "Confirme",
            text: "Tem certeza que deseja criar esta demanda ?",
            icon: 'question',
            confirmButtonText: "Confirmar",
            showCancelButton: true,
            cancelButtonText: "Cancelar",
        }).then(res => {
            if (res.isConfirmed && demand.length !== 0 && demand.length === Object.keys(pairInputs).length) {
                // Adicione a chave "quantidade" para cada produto em demand
                const demandWithQuantity = demand.map((prod) => ({
                    ...prod,
                    quantidade: pairInputs[prod.id] + " pares"
                }));
                addToHistory(demandWithQuantity, pairInputs);
            } else if (res.isConfirmed && demand.length === 0) {
                notifyWarning("Você não pode criar uma demanda sem produtos");
            } else if (demand.length !== Object.keys(pairInputs).length) {
                notifyWarning("Todos os produtos devem ter uma quantidade de pares");
            }
        })
    }

    const addToHistory = async (data, pairsData) => {
        const collectionRef = collection(db, "History");

        try {
            const docRef = await addDoc(collectionRef, {
                products: data,
                pairs: pairsData,
                datetime: new Date()
            });

            notifySuccess("Demanda Cadastrada Com Sucesso");

            // Aguardar 1 segundo antes de navegar para a próxima página
            setTimeout(() => {
                navigate("/view/" + docRef.id);
            }, 3000);
        } catch (error) {
            notifyError(error.message);
        }
    };

    return (
        <CreateDStyled>
            <ToastContainer />
            <Header />
            <main>
                <section>
                    <div id="division">
                        <h1>Products</h1>
                        <div id='tags-container'>
                            {products.map((prod) => (
                                <MyButton
                                    key={prod.id}
                                    icon={<AddIcon />}
                                    handleClick={() => handleToggle(prod)}
                                >
                                    {prod.modelo}
                                </MyButton>
                            ))}
                        </div>
                    </div>
                    <div id="division">
                        <h1>Demanda</h1>
                        <div id='tags-container'>
                            {demand.map((prod) => (
                                <MyButton
                                    key={prod.id}
                                    icon={<DeleteIcon />}
                                    handleClick={() => handleToggle(prod)}
                                >
                                    {prod.modelo}
                                    <input
                                        type="number"
                                        placeholder="Pares"
                                        onChange={(event) => handleChangePairs(event, prod)}
                                    />
                                </MyButton>
                            ))}
                        </div>
                    </div>
                </section>

                <Button variant="contained" onClick={handleCreateDemand}>
                    Criar Demanda
                </Button>
            </main>
        </CreateDStyled>
    );
}
